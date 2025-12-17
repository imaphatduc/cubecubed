import { ANIME } from "@consts";

import { Cubicon } from "@cubicons/Cubicon";

import { Animation, AnimationParams } from "@animations/Animation";

export class FadeOut extends Animation {
    readonly animationType = "FadeIn";

    constructor(params: AnimationParams<Cubicon>) {
        super({
            cubicon: params.cubicon,

            duration: params.duration ?? ANIME.FADEIN,

            ease: params.ease,
        });
    }

    getTransitions(sleepTime: number) {
        const transition = () =>
            this.cubicon.g_cubiconWrapper
                .transition()
                .ease(this.ease)
                .delay(sleepTime)
                .duration(this.duration)
                .attr("opacity", 0);

        return [transition];
    }
}
