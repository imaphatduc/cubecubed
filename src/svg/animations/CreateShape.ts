import { ANIME } from "@consts";

import { AxisProjector } from "@cubicons/coordinate-system/AxisProjector";
import { Graph } from "@cubicons/coordinate-system/Graph";
import { Point } from "@cubicons/coordinate-system/Point";
import { Rectangle } from "@cubicons/geometry/Rectangle";
import { Square } from "@cubicons/geometry/Square";
import { Circle } from "@cubicons/geometry/Circle";
import { Line } from "@cubicons/geometry/Line";

import { Animation, AnimationParams } from "@animations/Animation";

export type CREATE_PLANE_SHAPE_TYPES =
    | Rectangle
    | Square
    | Circle
    | Graph
    | Point;

export type CREATE_LINE_SHAPE_TYPES = Line | AxisProjector;

export type CREATE_SHAPE_TYPES =
    | CREATE_PLANE_SHAPE_TYPES
    | CREATE_LINE_SHAPE_TYPES;

export class CreateShape extends Animation {
    readonly animationType = "CreateShape";

    declare cubicon: CREATE_SHAPE_TYPES;

    constructor(params: AnimationParams<CREATE_SHAPE_TYPES>) {
        super({
            cubicon: params.cubicon,

            duration: params.duration ?? ANIME.CREATE,

            ease: params.ease,
        });
    }

    getTransitions(sleepTime: number) {
        const pathLength = this.pathLength;

        const fillOpacity = this.fillOpacity;

        return [
            () =>
                this.cubicon.def_cubiconBase
                    .attr("stroke-dasharray", pathLength + ", " + pathLength)
                    .attr("stroke-dashoffset", pathLength)
                    .attr("fill-opacity", 0)
                    .transition()
                    .delay(sleepTime)
                    .duration(this.duration)
                    .ease(this.ease)
                    .attr("stroke-dashoffset", 0)
                    .attr("fill-opacity", fillOpacity),
        ];
    }

    private get pathLength(): number {
        return this.cubicon.def_cubiconBase.node().getTotalLength();
    }

    private get fillOpacity() {
        if (this.cubicon.cubiconType === "Graph") {
            return 1;
        }

        if (this.cubicon.cubiconType === "Line") {
            return 0;
        }

        return this.cubicon.CONFIG.fillOpacity!;
    }
}
