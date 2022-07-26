import { Vector3 } from "@math/Vector3";

import { CanvasAnimation } from "./CanvasAnimation";

import { Particle } from "@cubicons/Particle";

export type FLOW_TYPES = Particle;

export type FlowVectorFunction = (position: Vector3) => Vector3;

/**
 * Move a cubicon based on the specified function to
 * create an invisible flow. The instance of the last
 * animation frame's cubicon will be removed from the
 * scene.
 *
 * All images of the cubicon will be separated (not
 * continuous). If you want to simulate the continuous
 * flow, use `SimulateStream()` instead.
 */
export class Flow extends CanvasAnimation {
    /**
     * The function defining the position of the target
     * cubicon. This function should take a `Vector3()`
     * object as both input and output. The `Vector3()`
     * output object is the cubicon's position at next frame.
     *
     * Example of a function defining particle flow in
     * a vector field:
     *
     * ```ts
     * const sineField = ({ x, y, z })
     *     => new Vector3(Math.sin(y), Math.sin(x), z);
     * }
     * ```
     *
     */
    functionDef: FlowVectorFunction;

    constructor(params: {
        /**
         * The target cubicon to play this animation.
         */
        cubicon: FLOW_TYPES;
        /**
         * Speed when changing the position of the stream line.
         *
         * @default 0.01
         */
        dt?: number;
        /**
         * The function to change the cubicon's position at each frame.
         */
        functionDef: FlowVectorFunction;
        /**
         * Time to play this animation. (in milliseconds)
         *
         * @default 0
         */
        duration?: number;
    }) {
        super({
            cubicon: params.cubicon,
            duration: params.duration ?? 0,
        });

        this.functionDef = ({ x, y, z }) => {
            const dt = params.dt ?? 0.01;

            const v = new Vector3(x, y, z);

            const dx = params.functionDef(v).x;
            const dy = params.functionDef(v).y;
            const dz = params.functionDef(v).z;

            x += dx * dt;
            y += dy * dt;
            z += dz * dt;

            return new Vector3(x, y, z);
        };
    }

    /**
     * @internal
     */
    play() {
        this.flow(this.cubicon);
    }

    private flow(cubicon: FLOW_TYPES) {
        cubicon.position = this.functionDef(cubicon.position);
    }
}
