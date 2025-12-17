import { Grid } from "@cubicons/Grid";
import { Line, VerticesMapFunction } from "@cubicons/geometry/Line";

import { Animation, AnimationParams } from "@animations/Animation";

export type APPLY_FUNCTION_TYPES = Grid | Line;

export interface ApplyFunctionParams
    extends AnimationParams<APPLY_FUNCTION_TYPES> {
    /**
     * Function to apply to each vertex.
     */
    func: VerticesMapFunction;
}

export class ApplyFunction extends Animation {
    readonly animationType = "ApplyFunction";

    declare cubicon: APPLY_FUNCTION_TYPES;

    func: VerticesMapFunction;

    constructor(params: ApplyFunctionParams) {
        super({
            cubicon: params.cubicon,

            duration: params.duration ?? 2000,

            ease: params.ease,
        });

        this.func = params.func;
    }

    getTransitions(sleepTime: number) {
        if (this.cubicon.cubiconType === "Line") {
            const transition = this.getLineTransition(this.cubicon, sleepTime);

            return [transition];
        }

        if (this.cubicon.cubiconType === "Grid") {
            const lines = [
                ...this.cubicon.horizontalLines,
                ...this.cubicon.verticalLines,
            ];

            const lineTransitions = lines.map((line) =>
                this.getLineTransition(line, sleepTime)
            );

            return lineTransitions;
        }

        return [];
    }

    private getLineTransition(line: Line, sleepTime: number) {
        line.vertices = line.vertices.map((vertex) => this.func(vertex));

        return () =>
            line.def_cubiconBase
                .transition()
                .delay(sleepTime)
                .duration(this.duration)
                .attr("d", line.getData());
    }
}
