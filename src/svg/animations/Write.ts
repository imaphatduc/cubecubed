import { Selection, BaseType } from "d3-selection";
//+++++++++++++++++++++++++++++++++++++++++++++++++++//

import { ANIME } from "@consts";

import { MathTex } from "@cubicons/MathTex";

import { Animation, AnimationParams } from "@animations/Animation";

export type TexElement = Selection<SVGPathElement, unknown, BaseType, any>;

export class Write extends Animation {
    readonly animationType = "Write";

    cubicon: MathTex;

    constructor(params: AnimationParams<MathTex>) {
        super({
            cubicon: params.cubicon,

            duration: params.duration ?? ANIME.CREATE,

            ease: params.ease,
        });
    }

    play() {
        this.write();
    }

    private write() {
        this.applyPathWriting();

        this.applyShapeWriting();
    }

    private applyPathWriting() {
        const pathElements: TexElement = this.cubicon.def_cubiconBase
            .select("defs")
            .selectAll("path");

        const pathLengths = pathElements.nodes().map((d) => d.getTotalLength());

        this.applyWriteAnimation(pathElements, pathLengths);
    }

    private applyShapeWriting() {
        const shapeElements: TexElement =
            this.cubicon.def_cubiconBase.selectAll("rect");

        const shapeLengths = shapeElements
            .nodes()
            .map((d) => d.getTotalLength());

        this.applyWriteAnimation(shapeElements, shapeLengths);
    }

    private applyWriteAnimation(selection: TexElement, lengths: number[]) {
        const delayEach = 100;

        selection
            .data(lengths)
            .attr("stroke-dasharray", (d) => d + ", " + d)
            .attr("stroke-dashoffset", (d) => d)
            .attr("fill-opacity", 0)
            .transition()
            .ease(this.ease)
            .delay((d, i) => delayEach * i + this.sleepTime)
            .duration(this.duration)
            .attr("stroke-dashoffset", 0)
            .attr("fill-opacity", 1);

        this.cubicon.group.groupElapsed += (delayEach / 2) * lengths.length;
    }
}
