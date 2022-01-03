import { Animation } from "./animation";
import { ANIME } from "../cubicons/constants";
import { Label } from "../cubicons/coordinateSys";
import { Geometry } from "../cubicons/geometry";
import { MathText } from "../cubicons/text";

type FADE_TYPES = MathText | Label | Geometry;

export class FadeIn extends Animation {
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
        this.#fadeIn(this.cubicon, sleepTime);
    }

    #fadeIn(cubicon: FADE_TYPES, sleepTime: number) {
        if (cubicon.cubType === "geometry") {
            this.#geometryFadeIn(sleepTime);
        } else {
            if (
                cubicon.cubType === "math-text" ||
                cubicon.coordSysObjType === "label"
            )
                this.#texFadeIn(sleepTime);
        }
    }

    #geometryFadeIn(sleepTime: number) {
        this.cubicon.stroke.style("opacity", 0);
        this.cubicon.stroke
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

    #texFadeIn(sleepTime: number) {
        this.cubicon.stroke.style("opacity", 0);
        this.cubicon.stroke
            .transition()
            .ease(this.ease)
            .delay(this.cubicon.elapsedTime + sleepTime)
            .duration(this.duration)
            .style("stroke-opacity", 1)
            .style("opacity", 1);

        this.cubicon.elapsedTime += this.duration + sleepTime;
    }
}
