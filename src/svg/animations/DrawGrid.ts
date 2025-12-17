import { Grid } from "@cubicons/Grid";

import { Animation, AnimationParams } from "@animations/Animation";
import { CreateShape } from "@animations/CreateShape";

export class DrawGrid extends Animation {
    readonly animationType = "DrawGrid";

    declare cubicon: Grid;

    private readonly drawLineDuration = 1200;
    private readonly drawOriginDuration = 1000;

    private readonly xDelayEach = 50;
    private readonly yDelayEach = 20;

    constructor(params: AnimationParams<Grid>) {
        super({ cubicon: params.cubicon, ease: params.ease });

        this.duration = this.drawLineDuration + this.drawOriginDuration;
    }

    getTransitions(sleepTime: number) {
        const horizontalTransitions = this.getHorizontalTransitions(sleepTime);

        const verticalTransitions = this.getVerticalTransitions(sleepTime);

        const lineTransitions = [
            ...horizontalTransitions,
            ...verticalTransitions,
        ];

        const originTransitions = this.getOriginTransitions(sleepTime);

        return [...lineTransitions, ...originTransitions];
    }

    private getHorizontalTransitions(sleepTime: number) {
        const horizontalTransitions = this.cubicon.horizontalLines
            .map((line) => {
                const y = line.position.y;

                const animation = new CreateShape({
                    cubicon: line,
                    duration: this.drawLineDuration,
                    ease: this.ease,
                });

                const transitions = animation.getTransitions(
                    sleepTime + this.xDelayEach * Math.abs(y)
                );

                return transitions;
            })
            .flat();

        return horizontalTransitions;
    }

    private getVerticalTransitions(sleepTime: number) {
        const verticalTransitions = this.cubicon.verticalLines
            .map((line) => {
                const x = line.position.x;

                const animation = new CreateShape({
                    cubicon: line,
                    duration: this.drawLineDuration,
                    ease: this.ease,
                });

                const transitions = animation.getTransitions(
                    sleepTime + this.yDelayEach * Math.abs(x)
                );

                return transitions;
            })
            .flat();

        return verticalTransitions;
    }

    private getOriginTransitions(sleepTime: number) {
        const animation = new CreateShape({
            cubicon: this.cubicon.gridOrigin,
            duration: this.drawOriginDuration,
            ease: this.ease,
        });

        const transitions = animation.getTransitions(
            sleepTime + this.drawLineDuration
        );

        return transitions;
    }
}
