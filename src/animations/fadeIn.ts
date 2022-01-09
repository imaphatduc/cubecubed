import { Animation } from "./animation";
import { ANIME, EASE_TYPE } from "../cubicons/constants";
import { FADE_TYPES } from "../cubicons/constants";

export class FadeIn extends Animation {
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
        this.fadeIn(this.cubicon, sleepTime);
    }

    private fadeIn(cubicon: FADE_TYPES, sleepTime: number) {
        if (cubicon.cubType === "geometry") {
            this.geometryFadeIn(sleepTime);
        } else {
            if (cubicon.cubType === "math-text") this.texFadeIn(sleepTime);
        }
    }

    private geometryFadeIn(sleepTime: number) {
        this.cubicon.def_cubiconBase.style("opacity", 0);
        this.cubicon.def_cubiconBase
            .transition()
            .ease(this.ease)
            .delay(this.cubicon.elapsedTime + sleepTime)
            .duration(this.duration)
            .style("stroke-opacity", 1)
            .style("opacity", 1)
            .style("fill", this.cubicon.fillColor)
            .style("fill-opacity", this.cubicon.fillOpacity);

        this.cubicon.elapsedTime += this.duration + sleepTime;
    }

    private texFadeIn(sleepTime: number) {
        this.cubicon.def_cubiconBase.style("opacity", 0);
        this.cubicon.def_cubiconBase
            .transition()
            .ease(this.ease)
            .delay(this.cubicon.elapsedTime + sleepTime)
            .duration(this.duration)
            .style("stroke-opacity", 1)
            .style("opacity", 1);

        this.cubicon.elapsedTime += this.duration + sleepTime;
    }
}
