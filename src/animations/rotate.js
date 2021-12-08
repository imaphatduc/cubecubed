import { Animation } from "./animation";
import { ANIME } from "../cubicons/constants";

export class Rotate extends Animation {
    constructor({ cubicon, degree, duration = ANIME.ROTATE }) {
        super();
        this.cubicon = cubicon;
        this.degree = degree;
        this.duration = duration;
    }

    play(sleepTime) {
        this.#rotate(this.cubicon, this.degree, sleepTime);
    }

    #rotate(cubicon, degree, sleepTime) {
        if (
            cubicon.constructor.name === "Vector" ||
            cubicon.constructor.name === "Line"
        ) {
            this.duration = 2000;
        }
        // cubicon.angle += degree;
        cubicon.stroke
            .transition()
            .delay(cubicon.elapsedTime + sleepTime)
            .duration(this.duration)
            /// d3 normalize the rotation vector, so we must use attrTween method here
            .attrTween("transform", () =>
                d3.interpolate(
                    `translate(${cubicon.moveVector.x}, ${cubicon.moveVector.y}) rotate(${cubicon.angle})`,
                    `translate(${cubicon.moveVector.x}, ${
                        cubicon.moveVector.y
                    }) rotate(${cubicon.angle + degree})`
                )
            )
            .on("end", () => (cubicon.angle += degree));

        cubicon.elapsedTime += this.duration + sleepTime;
    }
}
