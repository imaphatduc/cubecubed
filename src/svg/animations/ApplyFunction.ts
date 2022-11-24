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

    play() {
        this.applyFunction();
    }

    private applyFunction() {
        if (this.cubicon.cubiconType === "Line") {
            this.applyFunctionToLine(this.cubicon);
        }

        if (this.cubicon.cubiconType === "Grid") {
            [
                ...this.cubicon.horizontalLines,
                ...this.cubicon.verticalLines,
            ].forEach((line) => this.applyFunctionToLine(line));
        }
    }

    private applyFunctionToLine(line: Line) {
        line.vertices = line.vertices.map((vertex) => this.func(vertex));

        line.def_cubiconBase
            .transition()
            .delay(line.group.groupElapsed)
            .duration(this.duration)
            .attr("d", line.getData());
    }
}
