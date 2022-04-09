import { ANIME, EASE_TYPE } from "@consts";

import { Animation } from "./Animation";

import { MathText } from "@cubicons/MathText";

export class Write extends Animation {
    constructor(params: {
        /**
         * The target cubicon to play this animation.
         */
        cubicon: MathText;
        /**
         * Time to play this animation. (in milliseconds)
         */
        duration?: number;
        /**
         * Custom easing function for smooth animation.
         */
        ease?: EASE_TYPE;
    }) {
        super({
            cubicon: params.cubicon,
            duration: params.duration ?? ANIME.CREATE,
            ease: params.ease,
        });
    }

    play(sleepTime: number) {
        this.writeText(this.cubicon, sleepTime);
    }

    private writeText(cubicon: MathText, sleepTime: number) {
        const options = [cubicon, this.duration, this.ease, sleepTime];

        // <path> elements
        const pathLengths = cubicon.def_cubiconBase
            .select("defs")
            .selectAll("path")
            .nodes()
            .map((d: any) => d.getTotalLength());

        const paths = cubicon.def_cubiconBase.select("defs").selectAll("path");

        paths.call(this.applyWriteAnimation, pathLengths, ...options);

        // <rect> elements
        const shapeLengths = cubicon.def_cubiconBase
            .selectAll("rect")
            .nodes()
            .map((d: any) => d.getTotalLength());

        const rects = cubicon.def_cubiconBase.selectAll("rect");

        rects.call(this.applyWriteAnimation, shapeLengths, ...options);
    }

    private applyWriteAnimation(
        selection: any,
        lengths: number[],
        cubicon: MathText,
        duration: number,
        ease: any,
        sleepTime: number
    ) {
        selection
            .attr("stroke", cubicon.color)
            .attr("stroke-width", 20)
            .attr("fill", cubicon.color)
            .data(lengths)
            .attr("fill-opacity", 0)
            .attr("stroke-dasharray", (d: number) => d + ", " + d)
            .attr("stroke-dashoffset", (d: number) => d)
            .transition()
            .ease(ease)
            .delay((d: any, i: number) => 100 * i + sleepTime)
            .duration(duration)
            .attr("stroke-dashoffset", 0)
            .attr("fill-opacity", 1);
    }
}
