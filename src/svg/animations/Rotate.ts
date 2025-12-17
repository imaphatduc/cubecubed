import { interpolate } from "d3-interpolate";
//+++++++++++++++++++++++++++++++++++++++++++++++++++//

import { ANIME } from "@consts";

import { Vector2 } from "@math/Vector2";

import { Cubicon } from "@cubicons/Cubicon";

import { Animation, AnimationParams } from "@animations/Animation";

export interface RotateParams extends AnimationParams<Cubicon> {
    /**
     * Angle (in degrees) for this rotation.
     */
    degree: number;

    /**
     * The origin of this rotation (local coordinate system of the cubicon).
     */
    origin?: Vector2;
}

export class Rotate extends Animation {
    readonly animationType = "Rotate";

    degree: number;

    origin: Vector2;

    constructor(params: RotateParams) {
        super({
            cubicon: params.cubicon,

            duration: params.duration ?? ANIME.ROTATE,

            ease: params.ease,
        });

        this.degree = params.degree;

        this.origin = params.origin ?? params.cubicon.position;
    }

    getTransitions(sleepTime: number) {
        const { xGtoW, yGtoW } = this.cubicon.group;

        this.cubicon.moveAngle += this.degree;

        const v = this.cubicon.moveVector;

        const transition = () =>
            this.cubicon.g_cubiconWrapper
                .transition()
                .ease(this.ease)
                .delay(sleepTime)
                .duration(this.duration)
                .attrTween("transform", () =>
                    interpolate(
                        `translate(${xGtoW(v.x)}, ${yGtoW(v.y)}) rotate(${
                            this.cubicon.angle
                        }, ${xGtoW(this.origin.x)}, ${yGtoW(this.origin.y)})`,

                        `translate(${xGtoW(v.x)}, ${yGtoW(v.y)}) rotate(${
                            this.cubicon.angle + this.degree
                        }, ${xGtoW(this.origin.x)}, ${yGtoW(this.origin.y)})`
                    )
                )
                .on("end", () => (this.cubicon.angle += this.degree));

        return [transition];
    }
}
