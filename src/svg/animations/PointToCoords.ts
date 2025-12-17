import { ANIME } from "@consts";

import { AxisProjector } from "@cubicons/coordinate-system/AxisProjector";
import { Point } from "@cubicons/coordinate-system/Point";

import { Animation, AnimationParams } from "@animations/Animation";
import { CreateShape } from "@animations/CreateShape";

export interface PointToCoordsParams extends AnimationParams<Point> {
    horizontalProjector?: AxisProjector;

    verticalProjector?: AxisProjector;
}

export class PointToCoords extends Animation {
    readonly animationType = "PointToCoords";

    declare cubicon: Point;

    private horizontalProjector?: AxisProjector;

    private verticalProjector?: AxisProjector;

    constructor(params: PointToCoordsParams) {
        super({
            cubicon: params.cubicon,

            duration: params.duration ?? ANIME.CREATE,

            ease: params.ease,
        });

        this.horizontalProjector = params.horizontalProjector;

        this.verticalProjector = params.verticalProjector;
    }

    getTransitions(sleepTime: number) {
        const pointTransitions = this.getPointTransitions(
            this.cubicon,
            sleepTime
        );

        if (!this.horizontalProjector || !this.verticalProjector) {
            return pointTransitions;
        }

        const projectorsTransitions = this.getProjectorsTransitions(
            this.horizontalProjector,
            this.verticalProjector,
            sleepTime
        );

        return [...pointTransitions, ...projectorsTransitions];
    }

    private getPointTransitions = (point: Point, sleepTime: number) => {
        const animation = new CreateShape({ cubicon: this.cubicon });

        const transitions = animation.getTransitions(sleepTime);

        return transitions;
    };

    private getProjectorsTransitions = (
        horizontalProjector: AxisProjector,
        verticalProjector: AxisProjector,
        sleepTime: number
    ) => {
        const horizontalProjectorTransitions = new CreateShape({
            cubicon: horizontalProjector,
        }).getTransitions(sleepTime);

        const verticalProjectorTransitions = new CreateShape({
            cubicon: verticalProjector,
        }).getTransitions(sleepTime);

        return [
            ...horizontalProjectorTransitions,
            ...verticalProjectorTransitions,
        ];
    };
}
