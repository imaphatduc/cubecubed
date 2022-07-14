import { ANIME, EASE_TYPE } from "@consts";

import { Animation } from "./Animation";

import { Cubicon } from "@cubicons/Cubicon";

/**
 * Fade out a cubicon on the screen.
 */
export class FadeOut extends Animation {
    readonly animationType = "FadeOut";

    constructor(params: {
        /**
         * The target cubicon to play this animation.
         */
        cubicon: Cubicon;
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
            duration: params.duration ?? ANIME.FADEOUT,
            ease: params.ease,
        });
    }

    play(sleepTime: number) {
        this.fadeOut(this.cubicon, sleepTime);
    }

    private fadeOut(cubicon: Cubicon, sleepTime: number) {
        cubicon.def_cubiconBase
            .transition()
            .ease(this.ease)
            .delay(sleepTime)
            .duration(this.duration)
            .style("opacity", 0);
    }
}
