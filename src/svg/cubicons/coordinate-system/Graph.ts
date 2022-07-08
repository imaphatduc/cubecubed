import { range } from "d3-array";
import { scaleLinear } from "d3-scale";
import { curveNatural, line } from "d3-shape";
//+++++++++++++++++++++++++++++++++++++++++++++++++++//

import { CoordinateSystem } from "./CoordinateSystem";
import { Axes } from "./Axes";

export class Graph extends CoordinateSystem {
    readonly coordSysObjType = "graph";

    /**
     * The `</g>` element that wraps the two axes' tags.
     */
    axes: any;

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
    g_projector: any;

    /**
     * Color of this graph.
     */
    graphColor: any;

    /**
     * Width of this graph.
     */
    graphWidth: any;

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
        CONFIG?: {
            graphColor?: string | undefined;
            graphWidth?: number | undefined;
        };
    }) {
        super({ group: params.axes.group, position: params.axes.position });

        this.axes = params.axes;

        this.functionDef = params.functionDef;

        this.xRange = params.xRange;

        ({
            graphColor: this.graphColor = "#fff",
            graphWidth: this.graphWidth = 1.5,
        } = params.CONFIG ?? {
            graphColor: "#fff",
            graphWidth: 1.5,
        });
    }

    render() {
        this.g_cubiconWrapper = this.axes.g_graphs
            .append("g")
            .attr("class", "graph-group");

        this.def_cubiconBase = this.g_cubiconWrapper
            .append("path")
            .attr("class", "graph")
            .attr("d", this.getData())
            .attr("fill", "none")
            .attr("stroke", this.graphColor)
            .attr("stroke-width", 1.2);

        this.g_projector = this.g_cubiconWrapper
            .append("g")
            .attr("class", "projector-group");

        return this;
    }

    getData() {
        const { squareLength } = this.group;

        const xScale = scaleLinear()
            .domain(this.xRange)
            .range([
                squareLength * this.xRange[0],
                squareLength * this.xRange[1],
            ]);

        const lineGenerator = line()
            .curve(curveNatural)
            .x((d: [number, number]) => xScale(d[0]))
            .y((d: [number, number]) => this.axes.yScale(d[1]));

        const points: [number, number][] = [];

        for (const x of range(this.xRange[0], this.xRange[1] + 1, 0.01)) {
            if (
                this.axes.yScale(this.functionDef(x)) <
                    this.axes.yScale(this.axes.yRange[1] + 1) &&
                this.axes.yScale(this.functionDef(x)) >
                    this.axes.yScale(this.axes.yRange[0] - 1)
            ) {
                points.push([x, this.functionDef(x)]);
            }
        }

        return lineGenerator(points);
    }
}
