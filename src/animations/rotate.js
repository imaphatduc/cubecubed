import * as d3 from "d3";
import { Animation } from "./animation";
import { ANIME } from "../cubicons/constants";
import { xGtoW, yGtoW } from "../math/convertUnit";

export class Rotate extends Animation {
    constructor(cubicon, degree, duration = ANIME.ROTATE, ease) {
        super({ cubicon: cubicon, duration: duration, ease: ease });
        this.degree = degree;
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
        cubicon.moveAngle += degree;

        /// Important!
        const v = cubicon.moveVector;
        cubicon.svgWrapper
            .transition()
            .ease(this.ease)
            .delay(cubicon.elapsedTime + sleepTime)
            .duration(this.duration)
            /// d3 normalize the rotation vector, so we must use attrTween method here
            .attrTween("transform", () =>
                d3.interpolate(
                    `translate(${xGtoW(v.x)}, ${yGtoW(v.y)}) rotate(${
                        cubicon.angle
                    })`,
                    `translate(${xGtoW(v.x)}, ${yGtoW(v.y)}) rotate(${
                        cubicon.angle + degree
                    })`
                )
            )
            .on("end", () => (cubicon.angle += degree));

        cubicon.elapsedTime += this.duration + sleepTime;
    }
}
