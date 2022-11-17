import { ANIME } from "@consts";

import { AxisProjector } from "@cubicons/coordinate-system/AxisProjector";
import { Line } from "@cubicons/geometry/Line";

import { Animation, AnimationParams } from "@animations/Animation";

export type CREATE_LINE_SHAPE_TYPES = Line | AxisProjector;

export class CreateLineShape extends Animation {
    readonly animationType = "CreateLineShape";

    declare cubicon: CREATE_LINE_SHAPE_TYPES;

    constructor(params: AnimationParams<CREATE_LINE_SHAPE_TYPES>) {
        super({
            cubicon: params.cubicon,

            duration: params.duration ?? ANIME.CREATE,

            ease: params.ease,
        });
    }

    play() {
        this.createLineShape();
    }

    private createLineShape() {
        const { WstartPoint, WendPoint } = this.getPoints();

        this.cubicon.def_cubiconBase
            .attr("x2", WstartPoint.x)
            .attr("y2", WstartPoint.y)
            .transition()
            .ease(this.ease)
            .delay(this.sleepTime)
            .duration(this.duration)
            .attr("x2", WendPoint.x)
            .attr("y2", WendPoint.y);
    }

    private getPoints() {
        const WstartPoint = this.cubicon.coordsGtoW(this.cubicon.position);
        const WendPoint = this.cubicon.coordsGtoW(this.cubicon.endPoint);

        return { WstartPoint, WendPoint };
    }
}
