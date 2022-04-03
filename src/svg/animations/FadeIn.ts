import { ANIME, EASE_TYPE } from "@consts";

import { Animation, FADE_TYPES } from "./Animation";

/**
 * Fade in a cubicon on the screen.
 */
export class FadeIn extends Animation {
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
            duration: params.duration ?? ANIME.FADEIN,
            ease: params.ease,
        });
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
        this.cubicon.def_cubiconBase.attr("opacity", 0);
        this.cubicon.def_cubiconBase
            .transition()
            .ease(this.ease)
            .delay(this.cubicon.elapsedTime + sleepTime)
            .duration(this.duration)
            .attr("stroke-opacity", 1)
            .attr("opacity", 1);

        this.cubicon.elapsedTime += this.duration + sleepTime;
    }
}
