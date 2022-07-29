import { ANIME } from "@consts";

import { VectorShape } from "@cubicons/geometry/VectorShape";

import { Animation, AnimationParams } from "@animations/Animation";

export class CreateVectorShape extends Animation {
    readonly animationType = "CreateVectorShape";

    cubicon: VectorShape;

    constructor(params: AnimationParams<VectorShape>) {
        super({
            cubicon: params.cubicon,

            duration: params.duration ?? ANIME.CREATE,

            ease: params.ease,
        });
    }

    play() {
        this.createVectorShape();
    }

    private createVectorShape() {
        this.applyLineCreation();

        this.applyArrowheadCreation();
    }

    private applyLineCreation() {
        const { WstartPoint, WendPoint } = this.getPoints();

        const durationRatio = 0.8;

        this.cubicon.def_lineStroke
            .attr("x2", WstartPoint.x)
            .attr("y2", WstartPoint.y)
            .transition()
            .ease(this.ease)
            .delay(this.sleepTime)
            .duration(this.duration * durationRatio)
            .attr("x2", WendPoint.x)
            .attr("y2", WendPoint.y);
    }

    private applyArrowheadCreation() {
        const delayRatio = 0.2;
        const delay = this.duration * delayRatio;

        const durationRatio = 1 - delayRatio;
        const duration = this.duration * durationRatio;

        this.cubicon.def_arrowhead
            .attr("opacity", 0)
            .transition()
            .ease(this.ease)
            .delay(this.sleepTime + delay)
            .duration(duration)
            .attr("opacity", 1);
    }

    private getPoints() {
        const WstartPoint = this.cubicon.coordsGtoW(this.cubicon.position);
        const WendPoint = this.cubicon.coordsGtoW(this.getLineEndPoint());

        return { WstartPoint, WendPoint };
    }

    private getLineEndPoint() {
        const arrowheadHeight = this.cubicon.CONFIG.arrowheadHeight;

        const vector = this.cubicon.vector;

        const magnitude = vector.magnitude();

        const endPoint = vector
            .scale(1 - arrowheadHeight / magnitude)
            .add(this.cubicon.position);

        return endPoint;
    }
}
