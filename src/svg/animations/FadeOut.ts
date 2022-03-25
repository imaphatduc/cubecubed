import { Animation } from "./Animation";
import { ANIME, EASE_TYPE, FADE_TYPES } from "../../constants";

/**
 * Fade out a cubicon on the screen.
 */
export class FadeOut extends Animation {
    constructor(params: {
        /**
         * The target cubicon to play this animation.
         */
        cubicon: FADE_TYPES;
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

    private fadeOut(cubicon: FADE_TYPES, sleepTime: number) {
        cubicon.def_cubiconBase
            .transition()
            .ease(this.ease)
            .delay(cubicon.elapsedTime + sleepTime)
            .duration(this.duration)
            .style("opacity", 0);

        cubicon.elapsedTime += this.duration + sleepTime;
    }
}
