import { ANIME } from "@consts";

import { VectorField } from "@cubicons/VectorField";
import { VectorShape } from "@cubicons/geometry/VectorShape";

import { Animation, AnimationParams } from "@animations/Animation";
import { CreateVectorShape } from "@animations/CreateVectorShape";

export class DrawVectorField extends Animation {
    readonly animationType = "DrawVectorField";

    cubicon: VectorField;

    constructor(params: AnimationParams<VectorField>) {
        super({
            cubicon: params.cubicon,

            duration: params.duration ?? ANIME.CREATE,

            ease: params.ease,
        });
    }

    play() {
        this.drawVectorField();

        this.cubicon.group.groupElapsed -= this.duration;
    }

    private drawVectorField() {
        this.applyVectorShapeCreation();
    }

    private applyVectorShapeCreation() {
        const animations = this.getAnimations();

        this.cubicon.group.play(animations);
    }

    private getAnimations() {
        return this.cubicon.vectorShapes.map(
            (vectorShape: VectorShape) =>
                new CreateVectorShape({
                    cubicon: vectorShape,
                    duration: this.duration,
                    ease: this.ease,
                })
        );
    }
}
