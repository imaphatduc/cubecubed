import { range } from "d3-array";
import { curveNatural, line } from "d3-shape";
//+++++++++++++++++++++++++++++++++++++++++++++++++++//

import configFactory from "@utils/configFactory";

import { Cubicon, CubiconParams } from "@cubicons/Cubicon";
import { Axes } from "@cubicons/coordinate-system/Axes";

export interface GRAPH_CONFIG {
    /**
     * Color of this graph.
     */
    graphColor?: string;

    /**
     * Width of this graph.
     */
    graphWidth?: number;
}

export const GRAPH_DEFAULT_CONFIG: GRAPH_CONFIG = {
    graphColor: "#fff",
    graphWidth: 2,
};

export interface GraphParams extends CubiconParams<GRAPH_CONFIG> {
    /**
     * The axes that this graph belongs to.
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
}

export class Graph extends Cubicon {
    readonly cubiconType = "Graph";

    axes: Axes;

    xRange: [number, number];

    functionDef: (x: number) => number;

    CONFIG: GRAPH_CONFIG;

    constructor(params: GraphParams) {
        super({
            group: params.axes.group,

            position: params.axes.position,

            CONFIG: configFactory(GRAPH_DEFAULT_CONFIG, params.CONFIG),
        });

        this.axes = params.axes;

        this.xRange = params.xRange;

        this.functionDef = params.functionDef;

        this.g_cubiconWrapper = this.axes.g_graphs
            .append("g")
            .attr("class", "graph-wrapper");

        this.def_cubiconBase = this.g_cubiconWrapper
            .append("path")
            .attr("class", "graph")
            .attr("fill", "none")
            .attr("stroke-width", 1.2);
    }

    render() {
        this.def_cubiconBase
            .attr("d", this.getData())
            .attr("stroke", this.CONFIG.graphColor!);

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
