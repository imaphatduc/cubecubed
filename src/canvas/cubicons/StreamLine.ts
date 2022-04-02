import { Vector3 } from "@math/vector";

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

export const STREAMLINE_DEFAULT_CONFIG: STREAMLINE_CONFIG = {
    strokeColor: "#fff",
    strokeWidth: 2,
};

type TransformationFunction = (position: Vector3) => Vector3;

export class StreamLine extends CanvasCubicon {
    functionDef: TransformationFunction;

    vertices: Vector3[] = [];

    maxVertices: number;

    CONFIG: STREAMLINE_CONFIG;

    constructor(params: {
        /**
         * The group that the particle belongs to
         */
        group: CanvasGroup;
        /**
         * Position of the particle.
         */
        position?: Vector3;
        /**
         * The function to change the cubicon's position at each frame.
         */
        functionDef: TransformationFunction;
        /**
         * Maximum number of vertices for the stream line.
         */
        maxVertices?: number;
        /**
         * Config options of the streamline.
         */
        CONFIG?: STREAMLINE_CONFIG;
    }) {
        super({
            group: params.group,
            position: params.position ?? new Vector3(0, 0, 0),
        });

        this.functionDef = params.functionDef;

        this.vertices.push(this.position);

        this.maxVertices = params.maxVertices ?? 0;

        if (this.maxVertices > 0) {
            for (let i = 0; i < this.maxVertices; i++) {
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

    render(p: any) {
        const { xGtoW, yGtoW } = this.group;

        const { strokeColor, strokeWidth } = this.CONFIG;

        p.stroke(strokeColor);
        p.strokeWeight(strokeWidth);

        p.beginShape();
        this.vertices.forEach((vertex) => {
            p.curveVertex(xGtoW(vertex.x), yGtoW(vertex.y));
        });
        p.endShape();
    }

    private nextVertex() {
        const lastVertex = this.vertices[this.vertices.length - 1];

        const nextVertex = this.functionDef(lastVertex);

        return nextVertex;
    }
}
