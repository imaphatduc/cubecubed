import { ANIME } from "@consts";

import { Graph } from "@cubicons/coordinate-system/Graph";
import { Point } from "@cubicons/coordinate-system/Point";
import { Rectangle } from "@cubicons/geometry/Rectangle";
import { Square } from "@cubicons/geometry/Square";
import { Circle } from "@cubicons/geometry/Circle";

import { Animation, AnimationParams } from "@animations/Animation";

export type CREATE_PLANE_SHAPE_TYPES =
    | Rectangle
    | Square
    | Circle
    | Graph
    | Point;

export class CreatePlaneShape extends Animation {
    readonly animationType = "CreatePlaneShape";

    cubicon: CREATE_PLANE_SHAPE_TYPES;

    constructor(params: AnimationParams<CREATE_PLANE_SHAPE_TYPES>) {
        super({
            cubicon: params.cubicon,

            duration: params.duration ?? ANIME.CREATE,

            ease: params.ease,
        });
    }

    play() {
        this.createPlaneShape();
    }

    private createPlaneShape() {
        const pathLength = this.getPathLength();

        const fillOpacity = this.getFillOpacity();

        this.cubicon.def_cubiconBase.attr(
            "stroke-dasharray",
            pathLength + ", " + pathLength
        );

        this.cubicon.def_cubiconBase
            .attr("stroke-dashoffset", pathLength)
            .attr("fill-opacity", 0)
            .transition()
            .ease(this.ease)
            .delay(this.sleepTime)
            .duration(this.duration)
            .attr("stroke-dashoffset", 0)
            .attr("fill-opacity", fillOpacity);
    }

    private getPathLength() {
        return this.cubicon.def_cubiconBase.node().getTotalLength();
    }

    private getFillOpacity() {
        return this.cubicon.cubiconType === "Graph"
            ? 1
            : this.cubicon.CONFIG.fillOpacity!;
    }
}
