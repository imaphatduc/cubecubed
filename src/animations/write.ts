import { ANIME, EASE_TYPE } from "../cubicons/constants";
import { MathText } from "../cubicons/text";
import { Animation } from "./animation";

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

        this.cubicon.elapsedTime += this.duration + sleepTime;
    }

    private writeText(cubicon: MathText, sleepTime: number) {
        const lengths = cubicon.def_cubiconBase
            .selectAll("path")
            .nodes()
            .map((d: any) => d.getTotalLength());

        cubicon.def_cubiconBase
            .selectAll("path")
            .attr("stroke", cubicon.color)
            .attr("stroke-width", 20)
            .attr("fill", "none")
            .data(lengths)
            .style("fill-opacity", 0)
            .attr("stroke-dasharray", (d: number) => d + ", " + d)
            .attr("stroke-dashoffset", (d: number) => d)
            .transition()
            .ease(this.ease)
            .delay(this.cubicon.elapsedTime + sleepTime)
            .duration(this.duration)
            .attr("stroke-dashoffset", 0)
            .style("fill", this.cubicon.color)
            .style("fill-opacity", 1)
            .style("maskUnits", "userSpaceOnUse");
    }
}
