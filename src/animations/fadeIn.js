import { Animation } from "./animation";
import { ANIME } from "../cubicons/constants";

export class FadeIn extends Animation {
    constructor({ cubicon, duration = ANIME.FADEIN }) {
        super();
        this.cubicon = cubicon;
        this.duration = duration;
    }

    play(sleepTime) {
        this.#fadeIn(this.cubicon, sleepTime);
    }

    #fadeIn(cubicon, sleepTime) {
        cubicon.stroke.style("fill-opacity", 0);
        cubicon.stroke.style("stroke-opacity", 0);
        cubicon.stroke
            .transition()
            .delay(cubicon.elapsedTime + sleepTime)
            .duration(this.duration)
            .style("stroke-opacity", 1)
            .style("fill", cubicon.fillColor)
            .style("fill-opacity", cubicon.fillOpacity);

        cubicon.elapsedTime += this.duration + sleepTime;
    }
}
