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
    }

    play() {
        this.drawGrid();
    }

    private drawGrid() {
        this.drawLines();
        this.drawOrigin();
    }

    private drawLines() {
        const horizontalAnimations = this.getHorizontalAnimations();
        const verticalAnimations = this.getVerticalAnimations();

        this.cubicon.group.scene.play([
            ...horizontalAnimations,
            ...verticalAnimations,
        ]);
    }

    private drawOrigin() {
        const originAnimation = this.getOriginAnimation();

        this.cubicon.group.scene.play([originAnimation]);
    }

    private getHorizontalAnimations() {
        const horizontalAnimations = this.cubicon.horizontalLines.map(
            (line) => {
                const y = line.position.y;

                const animation = new CreateShape({
                    cubicon: line,
                    duration: this.drawLineDuration,
                    ease: this.ease,
                });

                animation.sleepTime += this.xDelayEach * Math.abs(y);

                return animation;
            }
        );

        return horizontalAnimations;
    }

    private getVerticalAnimations() {
        const verticalAnimations = this.cubicon.verticalLines.map((line) => {
            const x = line.position.x;

            const animation = new CreateShape({
                cubicon: line,
                duration: this.drawLineDuration,
                ease: this.ease,
            });

            animation.sleepTime += this.yDelayEach * Math.abs(x);

            return animation;
        });

        return verticalAnimations;
    }

    private getOriginAnimation() {
        const originAnimation = new CreateShape({
            cubicon: this.cubicon.gridOrigin,
            duration: this.drawOriginDuration,
            ease: this.ease,
        });

        return originAnimation;
    }
}
