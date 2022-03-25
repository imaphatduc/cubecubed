import { interpolateNumber } from "d3-interpolate";
//+++++++++++++++++++++++++++++++++++++++++++++++++++//
import { ANIME, EASE_TYPE } from "../../constants";
import { ParamatricCurve, Line } from "../cubicons/Geometry";
import { Animation } from "./Animation";

/**
 * Let a line trace a curve.
 */
export class Trace extends Animation {
    /**
     * The curve.
     */
    private curve: ParamatricCurve;

    constructor(params: {
        /**
         * The target line for tracing.
         */
        cubicon: Line;
        /**
         * The curve.
         */
        curve: ParamatricCurve;
        /**
         * Time to play this animation. (in milliseconds)
         */
        duration: number;
        /**
         * Custom easing function for smooth animation.
         */
        ease: EASE_TYPE;
    }) {
        super({
            cubicon: params.cubicon,
            duration: params.duration ?? ANIME.CREATE,
            ease: params.ease,
        });

        this.curve = params.curve;
    }

    play(sleepTime: number) {
        this.tracing(this.cubicon, sleepTime);

        this.cubicon.elapsedTime += this.duration + sleepTime;
        this.curve.elapsedTime += this.duration + sleepTime;
    }

    private tracing(cubicon: Line, sleepTime: number) {
        const lineLen = this.curve.def_cubiconBase.node().getTotalLength();
        this.curve.def_cubiconBase
            .attr("stroke-dasharray", lineLen + ", " + lineLen)
            .attr("stroke-dashoffset", lineLen);

        this.curve.def_cubiconBase
            .transition()
            .ease(this.ease)
            .delay(cubicon.elapsedTime + sleepTime)
            .duration(this.duration)
            .attrTween("stroke-dashoffset", () => {
                const interpolate = interpolateNumber(lineLen, 0);
                return (t: number) => {
                    const currentPoint = this.curve.def_cubiconBase
                        .node()
                        .getPointAtLength(t * lineLen);
                    cubicon.def_cubiconBase
                        .attr("x2", currentPoint.x)
                        .attr("y2", currentPoint.y);

                    return interpolate(t);
                };
            });
    }
}
