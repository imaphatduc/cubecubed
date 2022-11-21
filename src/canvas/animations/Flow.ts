import { Vector3 } from "@math/Vector3";

import { CanvasAnimation, CanvasAnimationParams } from "./CanvasAnimation";

import { Particle } from "@cubicons/Particle";

export type FLOW_TYPES = Particle;

export type FlowVectorFunction = (position: Vector3, t?: number) => Vector3;

export interface FlowParams extends CanvasAnimationParams<FLOW_TYPES> {
    /**
     * The function to change the cubicon's position at each frame.
     */
    functionDef: FlowVectorFunction;

    /**
     * The range of the time variable `t`.
     */
    tRange?: [number, number];

    /**
     * Differential of the time variable `t`.
     */
    dt?: number;
}

/**
 * Move a particle based on the specified function to
 * create an invisible flow. The instance of the last
 * animation frame's cubicon will be removed from the
 * scene.
 *
 * All images of the cubicon will be separated (not
 * continuous). If you want to simulate the continuous
 * flow, use `SimulateStream()` instead.
 */
export class Flow extends CanvasAnimation {
    declare cubicon: FLOW_TYPES;

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

    private tRange?: [number, number];

    private dt?: number;

    private t?: number;

    constructor(params: FlowParams) {
        super({
            cubicon: params.cubicon,

            duration: params.duration,
        });

        this.functionDef = (v, t) => params.functionDef(v, t);

        this.tRange = params.tRange;

        this.dt = params.dt;

        if (params.tRange) {
            this.t = params.tRange[0];
        }
    }

    /**
     * @internal
     */
    play() {
        if (this.tRange && this.dt && this.t) {
            if (this.t <= this.tRange[1]) {
                this.flow();

                this.t += this.dt;
            }
        } else {
            this.flow();
        }
    }

    private flow() {
        const { xGtoW, yGtoW, zGtoW } = this.cubicon.group;

        this.cubicon.position = this.functionDef(this.cubicon.position, this.t);

        const { x, y, z } = this.cubicon.position;

        this.cubicon.object.position.set(
            xGtoW(x) * this.cubicon.scaleFactor,
            yGtoW(y) * this.cubicon.scaleFactor,
            zGtoW(z) * this.cubicon.scaleFactor
        );
    }
}
