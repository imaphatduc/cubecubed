import { range } from "d3-array";
import { Selection } from "d3-selection";
//+++++++++++++++++++++++++++++++++++++++++++++++++++//

import { Axes } from "@cubicons/coordinate-system/Axes";

import { Animation, AnimationParams } from "@animations/Animation";

export type AxisSelection = Selection<SVGGElement, unknown, HTMLElement, any>;

export class DrawAxes extends Animation {
    readonly animationType = "DrawAxes";

    declare cubicon: Axes;

    private readonly delayEach = 100;

    private readonly arrowDuration = 600;

    constructor(params: AnimationParams<Axes>) {
        super({ cubicon: params.cubicon, ease: params.ease });

        const { numXValues, numYValues } = this.getNumXYValues();

        this.duration =
            Math.max(
                (numXValues + 2) * this.delayEach,
                (numYValues + 2) * this.delayEach
            ) + this.arrowDuration;
    }

    getTransitions(sleepTime: number) {
        const axesTransitions = this.getAxesTransitions(sleepTime);
        const axesTicksTransitions = this.getAxesTicksTransitions(sleepTime);
        const axesArrowheadsTransitions =
            this.getAxesArrowheadsTransitions(sleepTime);

        // `as any[]` is for bypassing the compiler
        return [
            ...axesTransitions,
            ...axesTicksTransitions,
            ...axesArrowheadsTransitions,
        ] as any[];
    }

    private getAxesTransitions(sleepTime: number) {
        const axisElements = this.getAxisElements();

        const transitions = axisElements.map((axis) => {
            const axisPath = this.getAxisPath(axis);

            const pathLength = this.getPathLength(axis)!;

            axisPath.attr("stroke-dasharray", pathLength + ", " + pathLength);

            return () =>
                axisPath
                    .attr("stroke-dashoffset", pathLength)
                    .transition()
                    .ease(this.ease)
                    .delay(sleepTime)
                    .duration(this.duration)
                    .attr("stroke-dashoffset", 0);
        });

        return transitions;
    }

    private getAxesTicksTransitions(sleepTime: number) {
        const axisElements = this.getAxisElements();

        const transitions = axisElements.map((axis) => {
            const { numXValues } = this.getNumXYValues();

            return () =>
                axis
                    .selectAll("g.tick")
                    .attr("opacity", 0)
                    .data(range(0, numXValues + 1))
                    .transition()
                    .ease(this.ease)
                    .delay((d: number) => sleepTime + this.delayEach * d)
                    .duration(this.duration)
                    .attr("opacity", 1);
        });

        return transitions;
    }

    private getAxesArrowheadsTransitions(sleepTime: number) {
        const axisElements = this.getAxisElements();

        const transitions = axisElements.map((axis) => {
            const { numXValues, numYValues } = this.getNumXYValues();

            return () =>
                axis
                    .select("defs marker path")
                    .attr("opacity", 0)
                    .data(range(0, numYValues + 1))
                    .transition()
                    .ease(this.ease)
                    .delay(sleepTime + this.delayEach * numXValues)
                    .duration(this.arrowDuration)
                    .attr("opacity", 1);
        });

        return transitions;
    }

    private getAxisElements() {
        return [this.cubicon.xAxis, this.cubicon.yAxis];
    }

    private getPathLength(axis: AxisSelection) {
        const axisPath = this.getAxisPath(axis);

        return axisPath.node()?.getTotalLength();
    }

    private getAxisPath(axis: AxisSelection) {
        const path: Selection<SVGPathElement, unknown, HTMLElement, any> =
            axis.select("path.domain");

        return path;
    }

    private getNumXYValues() {
        const numXValues = -this.cubicon.xRange[0] + this.cubicon.xRange[1];
        const numYValues = -this.cubicon.yRange[0] + this.cubicon.yRange[1];

        return { numXValues, numYValues };
    }
}
