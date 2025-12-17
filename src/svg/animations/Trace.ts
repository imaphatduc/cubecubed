import { interpolateNumber } from "d3-interpolate";
//+++++++++++++++++++++++++++++++++++++++++++++++++++//

import { ANIME } from "@consts";

import { Line } from "@cubicons/geometry/Line";
import { ParametricCurve } from "@cubicons/geometry/ParametricCurve";

import { Animation, AnimationParams } from "@animations/Animation";

export interface TraceParams extends AnimationParams<Line> {
    /**
     * The curve for this line to trace.
     */
    curve: ParametricCurve;
}

export class Trace extends Animation {
    readonly animationType = "Trace";

    declare cubicon: Line;

    private curve: ParametricCurve;

    constructor(params: TraceParams) {
        super({
            cubicon: params.cubicon,

            duration: params.duration ?? ANIME.CREATE,

            ease: params.ease,
        });

        this.curve = params.curve;
    }

    getTransitions(sleepTime: number) {
        const pathLength = this.curve.def_cubiconBase.node().getTotalLength();

        const transition = () =>
            this.curve.def_cubiconBase
                .attr("stroke-dasharray", pathLength + ", " + pathLength)
                .attr("stroke-dashoffset", pathLength)
                .transition()
                .ease(this.ease)
                .delay(sleepTime)
                .duration(this.duration)
                .attrTween("stroke-dashoffset", () => {
                    const interpolate = interpolateNumber(pathLength, 0);

                    return (t: number) => {
                        const currentPoint = this.curve.def_cubiconBase
                            .node()
                            .getPointAtLength(t * pathLength);

                        this.cubicon.def_cubiconBase
                            .attr("x2", currentPoint.x)
                            .attr("y2", currentPoint.y);

                        return interpolate(t).toString();
                    };
                });

        return [transition];
    }
}
