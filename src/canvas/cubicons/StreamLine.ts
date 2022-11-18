import {
    BufferGeometry,
    CatmullRomCurve3,
    Line,
    LineBasicMaterial,
    Vector3 as V3,
} from "three";
//+++++++++++++++++++++++++++++++++++++++++++++++++++//

import configFactory from "@utils/configFactory";

import { Vector3 } from "@math/Vector3";

import { CanvasCubicon, CanvasCubiconParams } from "./CanvasCubicon";

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

export const STREAMLINE_DEFAULT_CONFIG: STREAMLINE_CONFIG = {
    strokeColor: "#fff",
    strokeWidth: 2,
};

export type StreamVectorFunction = (position: Vector3) => Vector3;

export interface StreamLineParams
    extends CanvasCubiconParams<STREAMLINE_CONFIG> {
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
     * @default 2
     */
    maxVertices?: number;
}

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

    vertices: Vector3[] = [this.position];

    maxVertices: number;

    declare CONFIG: STREAMLINE_CONFIG;

    /**
     * @param params An object that contains options to form the stream line.
     */
    constructor(params: StreamLineParams) {
        super({
            group: params.group,

            position: params.position,

            scaleFactor: params.scaleFactor,

            CONFIG: configFactory(STREAMLINE_DEFAULT_CONFIG, params.CONFIG),
        });

        this.functionDef = (v) => params.functionDef(v);

        this.maxVertices = params.maxVertices ?? 2;

        this.initVertices();

        this.geometrize();

        this.materialize();
    }

    /**
     * @internal
     */
    render() {
        this.object = new Line(this.geometry, this.material);

        this.group.threeScene.add(this.object);

        return this;
    }

    private initVertices() {
        if (this.maxVertices > 0) {
            for (let i = 1; i < this.maxVertices; i++) {
                this.vertices.push(this.nextVertex());
            }
        }
    }

    private geometrize() {
        const points = this.points;

        this.geometry = new BufferGeometry().setFromPoints(points);
    }

    private materialize() {
        const { strokeColor, strokeWidth } = this.CONFIG;

        this.material = new LineBasicMaterial({
            color: strokeColor,
            linewidth: strokeWidth,
        });
    }

    nextVertex() {
        const lastVertex = this.vertices[this.vertices.length - 1];

        const nextVertex = this.functionDef(lastVertex);

        return nextVertex;
    }

    get points() {
        const { xGtoW, yGtoW, zGtoW } = this.group;

        const curve = new CatmullRomCurve3(
            this.vertices.map(
                (vertex) =>
                    new V3(
                        xGtoW(vertex.x) * this.scaleFactor,
                        yGtoW(vertex.y) * this.scaleFactor,
                        zGtoW(vertex.z) * this.scaleFactor
                    )
            )
        );

        const points = curve.getPoints(50);

        return points;
    }
}
