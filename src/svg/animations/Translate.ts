import { ANIME, EASE_TYPE } from "@consts";

import { Vector2 } from "@math/vector";

import { Animation } from "./Animation";

import { Cubicon } from "@cubicons/Cubicon";

/**
 * Translate a geometric cubicon by a specified vector.
 */
export class Translate extends Animation {
    readonly animationType = "Translate";

    vector: Vector2;

    constructor(params: {
        /**
         * The target cubicon to play this animation.
         */
        cubicon: Cubicon;
        /**
         * Translation vector.
         */
        vector: Vector2;
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
            duration: params.duration ?? ANIME.TRANSLATE,
            ease: params.ease,
        });

        this.vector = params.vector;
    }

    play(sleepTime: number) {
        this.translateByVector(this.cubicon, this.vector, sleepTime);
    }

    private translateByVector(
        cubicon: Cubicon,
        vector: Vector2,
        sleepTime: number
    ) {
        const { xGtoW, yGtoW } = cubicon.group;

        /// Calculate the sum of all translation vectors
        cubicon.moveVector = cubicon.moveVector.add(vector);

        cubicon.g_cubiconWrapper
            .transition()
            .ease(this.ease)
            .delay(sleepTime)
            .duration(this.duration)
            /// `moveVector` and `angle` are very useful here.
            /// We must have these properties, otherwise our cubicons will return to
            // the previous position and rotation.
            .attr(
                "transform",
                `translate(${xGtoW(cubicon.moveVector.x)}, ${yGtoW(
                    cubicon.moveVector.y
                )}) rotate(${cubicon.moveAngle})`
            )
            .on("end", () => {
                cubicon.position = cubicon.position.add(vector);
            });
    }
}
