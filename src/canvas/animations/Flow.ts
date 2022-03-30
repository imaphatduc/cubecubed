import { Vector3 } from "@math/vector";

import { CanvasAnimation } from "./CanvasAnimation";

import { Particle } from "@cubicons/Particle";

type TransformationFunction = (position: Vector3) => Vector3;

export class Flow extends CanvasAnimation {
    /**
     * Transformation function for the cubicon's position.
     */
    functionDef: TransformationFunction;

    constructor(params: {
        /**
         * The target cubicon to play this animation.
         */
        cubicon: Particle;
        /**
         * The differential equation to be applied.
         */
        functionDef: TransformationFunction;
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
        this.flow(this.cubicon);
    }

    private flow(cubicon: Particle) {
        cubicon.position.x = this.functionDef(cubicon.position).x;
        cubicon.position.y = this.functionDef(cubicon.position).y;
        cubicon.position.z = this.functionDef(cubicon.position).z;
    }
}
