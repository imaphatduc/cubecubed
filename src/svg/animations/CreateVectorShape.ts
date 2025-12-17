import { ANIME } from "@consts";

import { VectorShape } from "@cubicons/geometry/VectorShape";

import { Animation, AnimationParams } from "@animations/Animation";

export class CreateVectorShape extends Animation {
    readonly animationType = "CreateVectorShape";

    declare cubicon: VectorShape;

    constructor(params: AnimationParams<VectorShape>) {
        super({
            cubicon: params.cubicon,

            duration: params.duration ?? ANIME.CREATE,

            ease: params.ease,
        });
    }

    getTransitions(sleepTime: number) {
        const lineTransition = this.getLineTransition(sleepTime);
        const arrowheadTransition = this.getArrowheadTransition(sleepTime);

        return [lineTransition, arrowheadTransition];
    }

    private getLineTransition(sleepTime: number) {
        const { WstartPoint, WendPoint } = this.getPoints();

        const durationRatio = 0.8;

        const transition = () =>
            this.cubicon.def_lineStroke
                .attr("x2", WstartPoint.x)
                .attr("y2", WstartPoint.y)
                .transition()
                .ease(this.ease)
                .delay(sleepTime)
                .duration(this.duration * durationRatio)
                .attr("x2", WendPoint.x)
                .attr("y2", WendPoint.y);

        return transition;
    }

    private getArrowheadTransition(sleepTime: number) {
        const delayRatio = 0.2;
        const delay = this.duration * delayRatio;

        const durationRatio = 1 - delayRatio;
        const duration = this.duration * durationRatio;

        const transition = () =>
            this.cubicon.def_arrowhead
                .attr("opacity", 0)
                .transition()
                .ease(this.ease)
                .delay(sleepTime + delay)
                .duration(duration)
                .attr("opacity", 1);

        return transition;
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
