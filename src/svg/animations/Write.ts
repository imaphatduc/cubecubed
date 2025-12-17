import { Selection, BaseType } from "d3-selection";
//+++++++++++++++++++++++++++++++++++++++++++++++++++//

import { ANIME } from "@consts";

import { MathTex } from "@cubicons/MathTex";

import { Animation, AnimationParams } from "@animations/Animation";

export type TexElement = Selection<SVGPathElement, unknown, BaseType, any>;

export class Write extends Animation {
    readonly animationType = "Write";

    declare cubicon: MathTex;

    constructor(params: AnimationParams<MathTex>) {
        super({
            cubicon: params.cubicon,

            duration: params.duration ?? ANIME.CREATE,

            ease: params.ease,
        });
    }

    getTransitions(sleepTime: number) {
        const pathTransition = this.getPathTransition(sleepTime);
        const shapeTransition = this.getShapeTransition(sleepTime);

        // `as any[]` is for bypassing the compiler
        return [pathTransition, shapeTransition] as any[];
    }

    private getPathTransition(sleepTime: number) {
        const pathElements: TexElement = this.cubicon.def_cubiconBase
            .select("defs")
            .selectAll("path");

        const pathLengths = pathElements.nodes().map((d) => d.getTotalLength());

        const transition = this.getTransition(
            pathElements,
            pathLengths,
            sleepTime
        );

        return transition;
    }

    private getShapeTransition(sleepTime: number) {
        const shapeElements: TexElement =
            this.cubicon.def_cubiconBase.selectAll("rect");

        const shapeLengths = shapeElements
            .nodes()
            .map((d) => d.getTotalLength());

        const transition = this.getTransition(
            shapeElements,
            shapeLengths,
            sleepTime
        );

        return transition;
    }

    private getTransition(
        selection: TexElement,
        lengths: number[],
        sleepTime: number
    ) {
        const delayEach = 100;

        const transition = () =>
            selection
                .data(lengths)
                .attr("stroke-dasharray", (d) => d + ", " + d)
                .attr("stroke-dashoffset", (d) => d)
                .attr("fill-opacity", 0)
                .transition()
                .ease(this.ease)
                .delay((_, i) => delayEach * i + sleepTime)
                .duration(this.duration)
                .attr("stroke-dashoffset", 0)
                .attr("fill-opacity", 1);

        return transition;
    }
}
