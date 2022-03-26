import { interpolate } from "d3-interpolate";
//+++++++++++++++++++++++++++++++++++++++++++++++++++//

import { ANIME, EASE_TYPE } from "@consts";

import { xGtoW, yGtoW } from "@math/convertUnit";

import { Animation } from "./Animation";

import { Geometry } from "@cubicons/geometry/Geometry";

/**
 * Rotate a geometric cubicon by a specified angle.
 */
export class Rotate extends Animation {
    degree: number;

    constructor(params: {
        /**
         * The target cubicon to play this animation.
         */
        cubicon: Geometry;
        /**
         * Angle (in degrees) for rotating.
         */
        degree: number;
        /**
         * Time to play this animation. (in milliseconds)
         */
        duration: number;
        /**
         * Custom easing function for smooth animation.
         */
        ease?: EASE_TYPE;
    }) {
        super({
            cubicon: params.cubicon,
            duration: params.duration ?? ANIME.ROTATE,
            ease: params.ease,
        });
        this.degree = params.degree;
    }

    play(sleepTime: number) {
        this.rotate(this.cubicon, this.degree, sleepTime);
    }

    private rotate(cubicon: Geometry, degree: number, sleepTime: number) {
        if (
            cubicon.constructor.name === "Vector" ||
            cubicon.constructor.name === "Line"
        ) {
            this.duration = 2000;
        }
        cubicon.moveAngle += degree;

        /// Important!
        const v = cubicon.moveVector;
        cubicon.g_cubiconWrapper
            .transition()
            .ease(this.ease)
            .delay(cubicon.elapsedTime + sleepTime)
            .duration(this.duration)
            /// d3 normalize the rotation vector, so we must use attrTween method here
            .attrTween("transform", () =>
                interpolate(
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
