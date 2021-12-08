import { Animation } from "./animation";
import { ANIME } from "../cubicons/constants";
import { xGtoW, yGtoW } from "../math/convertUnit";

export class Translate extends Animation {
    constructor({ cubicon, vector, duration = ANIME.TRANSLATE }) {
        super();
        this.cubicon = cubicon;
        this.vector = vector;
        this.duration = duration;
    }

    play(sleepTime) {
        this.#translateByVector(this.cubicon, this.vector, sleepTime);
    }

    #translateByVector(cubicon, vector, sleepTime) {
        /// These x and y position attributes do not exist in most SVG elements,
        // except for closed shapes (such as square, circle).
        /// I created these property for the sake of translation tracking.
        cubicon.x += xGtoW(vector.x);
        cubicon.y += xGtoW(vector.y);

        /// Calculate the sum of all translation vectors
        cubicon.moveVector.x += xGtoW(vector.x);
        cubicon.moveVector.y += yGtoW(vector.y);

        cubicon.stroke
            .transition()
            .delay(cubicon.elapsedTime + sleepTime)
            .duration(this.duration)
            /// `moveVector` and `angle` is very useful here.
            /// We must have these properties, otherwise our cubicons will return to
            // the previous position and rotation.
            .attr(
                "transform",
                `translate(${cubicon.moveVector.x}, ${cubicon.moveVector.y}) rotate(${cubicon.angle})`
            );

        cubicon.elapsedTime += this.duration + sleepTime;
    }
}
