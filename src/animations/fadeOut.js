import { Animation } from "./animation";
import { ANIME } from "../cubicons/constants";

export class FadeOut extends Animation {
    constructor({ cubicon, duration = ANIME.FADEOUT }) {
        super();
        this.cubicon = cubicon;
        this.duration = duration;
    }

    play(sleepTime) {
        this.#fadeOut(this.cubicon, sleepTime);
    }

    #fadeOut(cubicon, sleepTime) {
        cubicon.stroke
            .transition()
            .delay(cubicon.elapsedTime + sleepTime)
            .duration(this.duration)
            .style("opacity", 0);

        cubicon.elapsedTime += this.duration + sleepTime;
    }
}
