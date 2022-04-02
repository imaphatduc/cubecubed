import { Vector3 } from "@math/vector";

import { CanvasAnimation } from "./CanvasAnimation";

import { Particle } from "@cubicons/Particle";

export type FLOW_TYPES = Particle;

type TransformationFunction = (position: Vector3) => Vector3;

/**
 * Move a cubicon based on the specified function to create an invisible flow.
 * The image of the last animation frame's cubicon will be removed from the
 * scene.
 *
 * All images of the cubicon will be separated (not continuous).
 */
export class Flow extends CanvasAnimation {
    /**
     * The function defining the position of the target cubicon.
     * This function should take a `Vector3()` object as both input and output.
     * The `Vector3()` output object is the cubicon's position at next frame.
     *
     * Example of a function defining particle flow in a vector field:
     *
     * ```
     * // Specific delta time
     * const dt = 0.01;
     *
     * const sineField = ({ x, y, z }: Vector3) => {
     *     const dx = Math.sin(y);
     *     const dy = Math.sin(x);
     *
     *     x += dx * dt;
     *     y += dy * dt;
     *
     *     return new Vector3(x, y, z);
     * }
     * ```
     *
     */
    functionDef: TransformationFunction;

    constructor(params: {
        /**
         * The target cubicon to play this animation.
         */
        cubicon: FLOW_TYPES;
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
            duration: params.duration ?? 0,
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
