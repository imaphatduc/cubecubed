import { ANIME, EASE_TYPE } from "@consts";

import { Animation } from "./Animation";
import { Create } from "./Create";

import { VectorField } from "@cubicons/VectorField";
import { Vector } from "@cubicons/geometry/Vector";

/**
 * Play vector field drawing animation on the screen.
 */
export class DrawVectorField extends Animation {
    constructor(params: {
        /**
         * The target cubicon to play this animation.
         */
        cubicon: VectorField;
        /**
         * Time to play this animation. (in milliseconds)
         */
        duration?: number;
        /**
         * Custom easing function for smooth animation.
         */
        ease?: EASE_TYPE;
    }) {
        super({
            cubicon: params.cubicon,
            duration: params.duration ?? ANIME.CREATE,
            ease: params.ease,
        });
    }

    play(sleepTime: number) {
        this.drawVectorField(this.cubicon);

        this.cubicon.elapsedTime += this.duration + sleepTime;
    }

    private drawVectorField(cubicon: VectorField) {
        const anims: any[] = [];

        cubicon.vectorShapes.forEach((vectorShape: Vector) =>
            anims.push(new Create({ cubicon: vectorShape }))
        );

        cubicon.group.play(anims);
    }
}
