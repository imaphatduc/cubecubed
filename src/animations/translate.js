import { easeCubic } from "d3-ease";
import { Animation } from "./animation";
import { ANIME } from "../cubicons/constants";
import { xGtoW, yGtoW } from "../math/convertUnit";

export class Translate extends Animation {
    constructor({
        cubicon,
        vector,
        duration = ANIME.TRANSLATE,
        ease = easeCubic,
    }) {
        super({ cubicon: cubicon, duration: duration, ease: ease });

        this.vector = vector;
    }

    play(sleepTime) {
        this.#translateByVector(this.cubicon, this.vector, sleepTime);
    }

    #translateByVector(cubicon, vector, sleepTime) {
        /// Calculate the sum of all translation vectors
        cubicon.moveVector = cubicon.moveVector.add(vector);

        cubicon.svgWrapper
            .transition()
            .ease(this.ease)
            .delay(cubicon.elapsedTime + sleepTime)
            .duration(this.duration)
            /// `moveVector` and `angle` are very useful here.
            /// We must have these properties, otherwise our cubicons will return to
            // the previous position and rotation.
            .attr(
                "transform",
                `translate(${xGtoW(cubicon.moveVector.x)}, ${yGtoW(
                    cubicon.moveVector.y
                )}) rotate(${cubicon.moveAngle})`
            )
            .on("end", () => {
                cubicon.position = cubicon.position.add(vector);
            });

        cubicon.elapsedTime += this.duration + sleepTime;
    }
}
