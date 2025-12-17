import { ANIME } from "@consts";

import { Vector2 } from "@math/Vector2";

import { Cubicon } from "@cubicons/Cubicon";

import { Animation, AnimationParams } from "@animations/Animation";

export interface TranslateParams extends AnimationParams<Cubicon> {
    /**
     * The translation vector.
     */
    vector: Vector2;
}

export class Translate extends Animation {
    readonly animationType = "Translate";

    vector: Vector2;

    constructor(params: TranslateParams) {
        super({
            cubicon: params.cubicon,

            duration: params.duration ?? ANIME.TRANSLATE,

            ease: params.ease,
        });

        this.vector = params.vector;
    }

    getTransitions(sleepTime: number) {
        const { xGtoW, yGtoW } = this.cubicon.group;

        this.cubicon.moveVector = this.cubicon.moveVector.add(this.vector);

        const v = this.cubicon.moveVector;

        const transition = () =>
            this.cubicon.g_cubiconWrapper
                .transition()
                .ease(this.ease)
                .delay(sleepTime)
                .duration(this.duration)
                .attr(
                    "transform",

                    `translate(${xGtoW(v.x)}, ${yGtoW(v.y)}) rotate(${
                        this.cubicon.moveAngle
                    })`
                )
                .on("end", () => {
                    this.cubicon.position = this.cubicon.position.add(
                        this.vector
                    );
                });

        return [transition];
    }
}
