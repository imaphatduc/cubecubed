import { Animation } from "./animation";
import { ANIME } from "../cubicons/constants";
import { xGtoW, yGtoW } from "../math/convertUnit";

export class Translate extends Animation {
    constructor(cubicon, vector) {
        super();
        this.cubicon = cubicon;
        this.vector = vector;
        this.duration = ANIME.TRANSLATE;
    }

    play() {
        this.#translateByVector(this.cubicon, this.vector);
    }

    #translateByVector(cubicon, vector) {
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
            .delay(cubicon.elapsedTime)
            .duration(this.duration)
            /// `moveVector` and `angle` is very useful here.
            /// We must have these properties, otherwise our cubicons will return to
            // the previous position and rotation.
            .attr(
                "transform",
                `translate(${cubicon.moveVector.x}, ${cubicon.moveVector.y}) rotate(${cubicon.angle})`
            );

        cubicon.elapsedTime += this.duration;
    }
}
