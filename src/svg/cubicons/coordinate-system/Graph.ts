import { range } from "d3-array";
import { Selection } from "d3-selection";
import { curveNatural, line } from "d3-shape";
//+++++++++++++++++++++++++++++++++++++++++++++++++++//

import { CoordinateSystem } from "./CoordinateSystem";
import { Axes } from "./Axes";

export interface GRAPH_CONFIG {
    graphColor: string;
    graphWidth: number;
}

export const GRAPH_DEFAULT_CONFIG: GRAPH_CONFIG = {
    graphColor: "#fff",
    graphWidth: 2,
};

export class Graph extends CoordinateSystem {
    readonly coordSysObjType = "graph";

    /**
     * The axes that this graph belongs to.
     */
    axes: Axes;

    /**
     * x range of this graph.
     */
    xRange: [number, number];

    /**
     * The function of this graph.
     */
    functionDef: (x: number) => number;

    /**
     * The `<g/>` element that contains two axis projectors' tags (if Axes().pointToCoords(...) was called).
     */
    g_projector: Selection<SVGGElement, unknown, HTMLElement, any>;

    /**
     * Config options of this graph.
     */
    CONFIG: GRAPH_CONFIG;

    constructor(params: {
        /**
         * The `</svg>` element that wraps the two axes' `</svg>`.
         */
        axes: Axes;
        /**
         * The function of this graph.
         */
        functionDef: (x: number) => number;
        /**
         * x range of this graph.
         */
        xRange: [number, number];
        /**
         * Config options of this graph.
         */
        CONFIG?: GRAPH_CONFIG;
    }) {
        super({ group: params.axes.group, position: params.axes.position });

        this.axes = params.axes;

        this.functionDef = params.functionDef;

        this.xRange = params.xRange;

        this.CONFIG = {
            graphColor:
                params.CONFIG?.graphColor ?? GRAPH_DEFAULT_CONFIG.graphColor,
            graphWidth:
                params.CONFIG?.graphWidth ?? GRAPH_DEFAULT_CONFIG.graphWidth,
        };

        this.g_cubiconWrapper = this.axes.g_graphs
            .append("g")
            .attr("class", "graph-group");

        this.def_cubiconBase = this.g_cubiconWrapper
            .append("path")
            .attr("class", "graph")
            .attr("fill", "none")
            .attr("stroke-width", 1.2);

        this.g_projector = this.g_cubiconWrapper
            .append("g")
            .attr("class", "projector-group");
    }

    render() {
        this.def_cubiconBase
            .attr("d", this.getData())
            .attr("stroke", this.CONFIG.graphColor);

        return this;
    }

    private getData() {
        const xScale = this.axes.getXScale(this.xRange);
        const yScale = this.axes.getYScale();

        const lineGenerator = line()
            .curve(curveNatural)
            .x((d: [number, number]) => xScale(d[0]))
            .y((d: [number, number]) => yScale(d[1]));

        const points: [number, number][] = [];

        range(this.xRange[0], this.xRange[1] + 1, 0.01).forEach((x) => {
            if (
                yScale(this.functionDef(x)) < yScale(this.axes.yRange[1] + 1) &&
                yScale(this.functionDef(x)) > yScale(this.axes.yRange[0] - 1)
            ) {
                points.push([x, this.functionDef(x)]);
            }
        });

        return lineGenerator(points);
    }
}
