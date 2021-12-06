import { Animation } from "./animation";
import { ANIME } from "../cubicons/constants";

export class FadeOut extends Animation {
    constructor(cubicon) {
        super();
        this.cubicon = cubicon;
        this.duration = ANIME.FADEOUT;
    }

    play() {
        this.#fadeOut(this.cubicon);
    }

    #fadeOut(cubicon) {
        cubicon.stroke
            .transition()
            .delay(cubicon.elapsedTime)
            .duration(this.duration)
            .style("opacity", 0);

        cubicon.elapsedTime += this.duration;
    }
}
