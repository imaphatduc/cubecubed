import { Animation } from "./animation";
import { ANIME } from "../cubicons/constants";

export class FadeOut extends Animation {
    constructor(cubicon, duration = ANIME.FADEOUT, ease) {
        super({ cubicon: cubicon, duration: duration, ease: ease });
    }

    play(sleepTime) {
        this.#fadeOut(this.cubicon, sleepTime);
    }

    #fadeOut(cubicon, sleepTime) {
        cubicon.stroke
            .transition()
            .ease(this.ease)
            .delay(cubicon.elapsedTime + sleepTime)
            .duration(this.duration)
            .style("opacity", 0);

        cubicon.elapsedTime += this.duration + sleepTime;
    }
}
