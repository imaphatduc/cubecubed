import { Animation } from "./animation";
import { ANIME } from "../cubicons/constants";

export class Rotate extends Animation {
    constructor(cubicon, degree) {
        super();
        this.cubicon = cubicon;
        this.degree = degree;
        this.duration = ANIME.ROTATE;
    }

    play() {
        this.#rotate(this.cubicon, this.degree);
    }

    #rotate(cubicon, degree) {
        if (
            cubicon.constructor.name === "Vector" ||
            cubicon.constructor.name === "Line"
        )
            this.duration = 2000;
        cubicon.angle += degree;
        cubicon.stroke
            .transition()
            .delay(cubicon.elapsedTime)
            .duration(this.duration)
            .attr(
                "transform",
                `translate(${cubicon.moveVector.x}, ${cubicon.moveVector.y}) rotate(${cubicon.angle})`
            );

        cubicon.elapsedTime += this.duration;
    }
}
