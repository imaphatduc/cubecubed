import { Animation } from "./animation";
import { ANIME } from "../cubicons/constants";

export class FadeIn extends Animation {
    constructor(cubicon) {
        super();
        this.cubicon = cubicon;
        this.duration = ANIME.FADEIN;
    }

    play() {
        this.#fadeIn(this.cubicon);
    }

    #fadeIn(cubicon) {
        cubicon.stroke.style("fill-opacity", 0);
        cubicon.stroke.style("stroke-opacity", 0);
        cubicon.stroke
            .transition()
            .delay(cubicon.elapsedTime)
            .duration(this.duration)
            .style("stroke-opacity", 1)
            .style("fill", cubicon.fillColor)
            .style("fill-opacity", cubicon.fillOpacity);

        cubicon.elapsedTime += this.duration;
    }
}
