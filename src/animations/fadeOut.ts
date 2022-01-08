import { Animation } from "./animation";
import { ANIME, EASE_TYPE } from "../cubicons/constants";
import { FADE_TYPES } from "../cubicons/constants";

export class FadeOut extends Animation {
    constructor({
        cubicon,
        duration = ANIME.FADEIN,
        ease,
    }: {
        cubicon: FADE_TYPES;
        duration?: number;
        ease?: EASE_TYPE;
    }) {
        super({ cubicon: cubicon, duration: duration, ease: ease });
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
