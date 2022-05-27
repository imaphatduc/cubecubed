import { range } from "d3-array";
//+++++++++++++++++++++++++++++++++++++++++++++++++++//

import { Vector3 } from "@math/vector";

import { CanvasCubicon } from "./CanvasCubicon";
import { Axes3D } from "./Axes3D";

export interface GRAPH3D_CONFIG {
    graphColor?: string;
    graphWidth?: number;
}

export const GRAPH3D_DEFAULT_CONFIG: GRAPH3D_CONFIG = {
    graphColor: "#fff",
    graphWidth: 1,
};

export class Graph3D extends CanvasCubicon {
    /**
     * The 3d axes object that this graph belongs to.
     */
    axes: Axes3D;

    /**
     * x range of this graph.
     */
    xRange: [number, number];

    /**
     * y range of this graph.
     */
    yRange: [number, number];

    /**
     * The function of this graph.
     */
    functionDef: (x: number, y: number) => number;

    vertices: Vector3[] = [];

    CONFIG: GRAPH3D_CONFIG;

    constructor(params: {
        /**
         * The 3d axes object that the graph belongs to.
         */
        axes: Axes3D;
        /**
         * The function of this graph.
         */
        functionDef: (x: number, y: number) => number;
        /**
         * x range of this graph.
         */
        xRange: [number, number];
        /**
         * y range of this graph.
         */
        yRange: [number, number];
        /**
         * Config options of this graph.
         */
        CONFIG?: GRAPH3D_CONFIG;
    }) {
        super({ group: params.axes.group, position: params.axes.position });

        this.axes = params.axes;

        this.functionDef = params.functionDef;

        this.xRange = params.xRange;
        this.yRange = params.yRange;

        range(this.xRange[0], this.xRange[1] + 1, 0.5).forEach((x) => {
            range(this.yRange[0], this.yRange[1] + 1, 0.5).forEach((y) => {
                this.vertices.push(new Vector3(x, y, this.functionDef(x, y)));
            });
        });

        this.CONFIG = {
            graphColor:
                params.CONFIG?.graphColor ?? GRAPH3D_DEFAULT_CONFIG.graphColor,
            graphWidth:
                params.CONFIG?.graphWidth ?? GRAPH3D_DEFAULT_CONFIG.graphWidth,
        };
    }

    render(p: any) {
        const { xGtoW, yGtoW, zGtoW } = this.group;

        p.stroke(this.CONFIG.graphColor);
        p.strokeWeight(this.CONFIG.graphWidth);

        p.beginShape();
        this.vertices.forEach(({ x, y, z }) => {
            p.point(xGtoW(x), yGtoW(y), zGtoW(z));
        });
        p.endShape();
    }
}
