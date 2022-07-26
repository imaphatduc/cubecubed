import { Vector3 } from "@math/Vector3";

import { CanvasGroup } from "@group/CanvasGroup";
import { CanvasCubicon } from "./CanvasCubicon";

export interface STREAMLINE_CONFIG {
    /**
     * @default "#fff"
     */
    strokeColor: string;
    /**
     * @default 2
     */
    strokeWidth: number;
}

const STREAMLINE_DEFAULT_CONFIG: STREAMLINE_CONFIG = {
    strokeColor: "#fff",
    strokeWidth: 2,
};

export type StreamVectorFunction = (position: Vector3) => Vector3;

/**
 * Render a continuous flow based on mathematical function
 * that forms a vector field. Initial position
 * (`Vector3(0, 0, 0)` by default) and maximum number of vertices
 * (`0` by default) must be defined. The next vertices will be
 * plotted by applying the specified function to the initial
 * position at each animation frame, resulting a stream line.
 *
 * Note that the terms `flow` and `stream line` here are used
 * interchangably.
 */
export class StreamLine extends CanvasCubicon {
    /**
     * The function defining the position of the target
     * cubicon. This function should take a `Vector3()`
     * object as both input and output. The `Vector3()`
     * output object is the cubicon's position at next frame.
     *
     * Example of a function defining a vector field:
     *
     * ```ts
     * const sineField = ({ x, y, z })
     *     => new Vector3(Math.sin(y), Math.sin(x), z);
     * }
     *
     * ```
     */
    functionDef: StreamVectorFunction;

    /**
     * `maxVertices` vertices of the stream line curve.
     */
    vertices: Vector3[] = [this.position];

    /**
     * Maximum number of vertices of the stream line.
     */
    maxVertices: number;

    /**
     * Config options of the stream line.
     */
    CONFIG: STREAMLINE_CONFIG;

    /**
     * @param params An object that contains options to form the stream line.
     */
    constructor(params: {
        /**
         * The group that the stream line belongs to.
         */
        group: CanvasGroup;
        /**
         * Position of the stream line.
         *
         * @default Vector3(0, 0, 0)
         */
        position?: Vector3;
        /**
         * Scale the position vector of the stream line by this number.
         *
         * @default 1
         */
        scaleFactor?: number;
        /**
         * Speed when changing the position of the stream line.
         *
         * @default 0.01
         */
        dt?: number;
        /**
         * The function to change the cubicon's position at each frame.
         */
        functionDef: StreamVectorFunction;
        /**
         * Maximum number of vertices for the stream line.
         *
         * @default 0
         */
        maxVertices?: number;
        /**
         * Config options of the stream line.
         *
         * @default STREAMLINE_DEFAULT_CONFIG
         */
        CONFIG?: STREAMLINE_CONFIG;
    }) {
        super({
            group: params.group,
            position: params.position ?? new Vector3(0, 0, 0),
            scaleFactor: params.scaleFactor ?? 1,
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

        this.vertices.push(this.position);

        this.maxVertices = params.maxVertices ?? 0;

        if (this.maxVertices > 0) {
            for (let i = 1; i < this.maxVertices; i++) {
                this.vertices.push(this.nextVertex());
            }
        }

        this.CONFIG = {
            strokeColor:
                params.CONFIG?.strokeColor ??
                STREAMLINE_DEFAULT_CONFIG.strokeColor,
            strokeWidth:
                params.CONFIG?.strokeWidth ??
                STREAMLINE_DEFAULT_CONFIG.strokeWidth,
        };
    }

    /**
     * @internal
     */
    render(p: any) {
        const { xGtoW, yGtoW, zGtoW } = this.group;

        const { strokeColor, strokeWidth } = this.CONFIG;

        p.stroke(strokeColor);
        p.strokeWeight(strokeWidth);

        p.beginShape();
        this.vertices.forEach((vertex) => {
            p.curveVertex(
                xGtoW(vertex.x) * this.scaleFactor,
                yGtoW(vertex.y) * this.scaleFactor,
                zGtoW(vertex.z) * this.scaleFactor
            );
        });
        p.endShape();
    }

    private nextVertex() {
        const lastVertex = this.vertices[this.vertices.length - 1];

        const nextVertex = this.functionDef(lastVertex);

        return nextVertex;
    }
}
