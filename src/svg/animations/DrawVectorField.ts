import { ANIME } from "@consts";

import { VectorField } from "@cubicons/VectorField";
import { VectorShape } from "@cubicons/geometry/VectorShape";

import { Animation, AnimationParams } from "@animations/Animation";
import { CreateVectorShape } from "@animations/CreateVectorShape";

export class DrawVectorField extends Animation {
    readonly animationType = "DrawVectorField";

    declare cubicon: VectorField;

    constructor(params: AnimationParams<VectorField>) {
        super({
            cubicon: params.cubicon,

            duration: params.duration ?? ANIME.CREATE,

            ease: params.ease,
        });
    }

    getTransitions(sleepTime: number) {
        const transitions = this.getVectorsTransitions(sleepTime);

        return transitions;
    }

    private getVectorsTransitions(sleepTime: number) {
        const vectorsTransitions = this.cubicon.vectorShapes
            .map((vectorShape: VectorShape) => {
                const animation = new CreateVectorShape({
                    cubicon: vectorShape,
                    duration: this.duration,
                    ease: this.ease,
                });

                const transitions = animation.getTransitions(sleepTime);

                return transitions;
            })
            .flat();

        return vectorsTransitions;
    }
}
