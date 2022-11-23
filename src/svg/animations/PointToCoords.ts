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

    play() {
        this.pointToCoords();
    }

    private pointToCoords() {
        const animations = this.getAnimations();

        this.cubicon.group.play(animations);

        this.reverseToLastGroupElapsed();
    }

    private reverseToLastGroupElapsed() {
        const animations = this.getAnimations();

        this.cubicon.group.groupElapsed -= Math.max(
            ...animations.map((animation) => animation.duration)
        );
    }

    private getAnimations() {
        const animations = [];

        animations.push(new CreateShape({ cubicon: this.cubicon }));

        if (this.horizontalProjector && this.verticalProjector) {
            animations.push(
                new CreateShape({ cubicon: this.horizontalProjector }),
                new CreateShape({ cubicon: this.verticalProjector })
            );
        }

        return animations;
    }
}
