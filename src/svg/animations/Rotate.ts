import { interpolate } from "d3-interpolate";
//+++++++++++++++++++++++++++++++++++++++++++++++++++//

import { ANIME } from "@consts";

import { Cubicon } from "@cubicons/Cubicon";

import { Animation, AnimationParams } from "@animations/Animation";

export interface RotateParams extends AnimationParams<Cubicon> {
    /**
     * Angle (in degrees) for this rotation.
     */
    degree: number;
}

export class Rotate extends Animation {
    readonly animationType = "Rotate";

    degree: number;

    constructor(params: RotateParams) {
        super({
            cubicon: params.cubicon,

            duration: params.duration ?? ANIME.ROTATE,

            ease: params.ease,
        });

        this.degree = params.degree;
    }

    play() {
        this.rotate();
    }

    private rotate() {
        const { xGtoW, yGtoW } = this.cubicon.group;

        this.cubicon.moveAngle += this.degree;

        const v = this.cubicon.moveVector;

        this.cubicon.g_cubiconWrapper
            .transition()
            .ease(this.ease)
            .delay(this.sleepTime)
            .duration(this.duration)
            .attrTween("transform", () =>
                interpolate(
                    `translate(${xGtoW(v.x)}, ${yGtoW(v.y)}) rotate(${
                        this.cubicon.angle
                    })`,

                    `translate(${xGtoW(v.x)}, ${yGtoW(v.y)}) rotate(${
                        this.cubicon.angle + this.degree
                    })`
                )
            )
            .on("end", () => (this.cubicon.angle += this.degree));
    }
}
