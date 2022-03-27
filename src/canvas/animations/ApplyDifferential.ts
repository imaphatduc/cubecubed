import { Vector3 } from "@math/vector";

import { CanvasAnimation } from "./CanvasAnimation";

import { Particle } from "@cubicons/Particle";

type DifferentialEquation = (position: Vector3) => Vector3;

export class ApplyDifferential extends CanvasAnimation {
    functionDef: DifferentialEquation;

    constructor(params: {
        /**
         * The target cubicon to play this animation.
         */
        cubicon: Particle;
        /**
         * The differential equation to be applied.
         */
        functionDef: DifferentialEquation;
        /**
         * Time to play this animation. (in milliseconds)
         */
        duration?: number;
    }) {
        super({
            cubicon: params.cubicon,
            duration: params.duration,
        });

        this.functionDef = params.functionDef;
    }

    play() {
        this.applyDifferential(this.cubicon.position);
    }

    private applyDifferential(position: Vector3) {
        const dt = 0.01;

        position.x += this.functionDef(position).x * dt;

        position.y += this.functionDef(position).y * dt;

        position.z += this.functionDef(position).z * dt;
    }
}
