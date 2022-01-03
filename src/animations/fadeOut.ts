import { Animation } from "./animation";
import { ANIME } from "../cubicons/constants";
import { Label } from "../cubicons/coordinateSys";
import { Geometry } from "../cubicons/geometry";
import { MathText } from "../cubicons/text";

type FADE_TYPES = MathText | Label | Geometry;

export class FadeOut extends Animation {
    constructor({
        cubicon,
        duration = ANIME.FADEIN,
        ease,
    }: {
        cubicon: FADE_TYPES;
        duration?: number;
        ease?: Function;
    }) {
        super({ cubicon: cubicon, duration: duration, ease: ease });
    }

    play(sleepTime: number) {
        this.#fadeOut(this.cubicon, sleepTime);
    }

    #fadeOut(cubicon: FADE_TYPES, sleepTime: number) {
        cubicon.stroke
            .transition()
            .ease(this.ease)
            .delay(cubicon.elapsedTime + sleepTime)
            .duration(this.duration)
            .style("opacity", 0);

        cubicon.elapsedTime += this.duration + sleepTime;
    }
}
