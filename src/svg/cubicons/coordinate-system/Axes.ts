import { range } from "d3-array";
import { axisBottom, axisRight } from "d3-axis";
import { format } from "d3-format";
import { scaleLinear } from "d3-scale";
//+++++++++++++++++++++++++++++++++++++++++++++++++++//

import { Vector2 } from "@math/vector";

import { Group } from "@group/Group";
import { CoordinateSystem } from "./CoordinateSystem";
import { AxisProjector } from "./AxisProjector";
import { Graph } from "./Graph";
import { Label } from "./Label";
import { Point } from "./Point";

/**
 * Return data type when calling Axes().pointOnGraph() method
 */
export type PT_ON_GRAPH_DATA = {
    point: Point;
};

/**
 * Return data type when calling Axes().pointToCoords() method
 */
export type PT_TO_COORDS_DATA = {
    point: Point;
    projectors: [AxisProjector, AxisProjector];
};

export interface AXES_CONFIG {
    xRange: [number, number];
    yRange: [number, number];
    hasNums: boolean;
}
const DEFAULT_AXES_CONFIG: AXES_CONFIG = {
    xRange: [0, 0],
    yRange: [0, 0],
    hasNums: false,
};

/*
 * Return the axes in coordinate system.
 */
export class Axes extends CoordinateSystem {
    readonly coordSysObjType = "axes";

    /**
     * Range of the x axis.
     */
    xRange: [number, number];

    /**
     * Range of the y axis.
     */
    yRange: [number, number];

    /**
     * Whether the axes include numbers
     */
    hasNums: boolean;

    /**
     * The `<svg/>` element that contains the axes.
     */
    g_axes: any;

    /**
     * The `<svg/>` element that contains the x axis.
     */
    xAxis: any;

    /**
     * The `<svg/>` element that contains the y axis.
     */
    yAxis: any;

    /**
     * The `<svg/>` element (inside .axes) that contains all the graphs inside a pair of axes.
     */
    g_graphs: any;

    /**
     * @param params Options to form the axes.
     */
    constructor(params: {
        group: Group;
        position?: Vector2;
        CONFIG?: AXES_CONFIG;
    }) {
        super({ group: params.group, position: params.position });

        ({
            xRange: this.xRange = DEFAULT_AXES_CONFIG.xRange,
            yRange: this.yRange = DEFAULT_AXES_CONFIG.yRange,
            hasNums: this.hasNums = DEFAULT_AXES_CONFIG.hasNums,
        } = params.CONFIG ?? DEFAULT_AXES_CONFIG);

        this.g_coordinate = this.svg_group
            .append("g")
            .attr("class", "xy-coordinate");

        this.g_graphs = this.g_coordinate.append("g").attr("class", "graphs");

        this.g_axes = this.g_coordinate.append("g").attr("class", "axes");

        this.xAxis = this.g_axes.append("g").attr("class", "x-axis");

        this.yAxis = this.g_axes.append("g").attr("class", "y-axis");

        this.xAxis
            .append("defs")
            .append("marker")
            .attr("class", "axis-arrowhead")
            .append("path")
            .attr("class", "axis-path");
        this.yAxis
            .append("defs")
            .append("marker")
            .attr("class", "axis-arrowhead")
            .append("path")
            .attr("class", "axis-path");
    }

    /**
     * Draw (and render) the axes onto SVG.
     */
    render() {
        this.g_coordinate.attr(
            "transform",
            `translate(${this.position.x}, ${this.position.y})`
        );

        this.renderAxes();
        this.applyAxesSettings(this.xAxis, this.yAxis);

        // Remove numbers on axes if hasNums is false
        if (!this.hasNums) {
            this.xAxis.selectAll(".tick text").remove();
            this.yAxis.selectAll(".tick text").remove();
        }

        return this;
    }

    private renderAxes() {
        const xAxis = axisBottom(this.getXScale())
            .tickValues(
                range(this.xRange[0], this.xRange[1] + 1, 1).filter(
                    (t: number) => t !== 0
                )
            )
            .tickSizeOuter(0);

        this.xAxis.call(xAxis);

        //

        const yAxis = axisRight(this.getYScale())
            .tickValues(
                range(this.yRange[0], this.yRange[1] + 1, 1).filter(
                    (t: number) => t !== 0
                )
            )
            .tickFormat(format("0"))
            .tickSizeOuter(0);

        this.yAxis.call(yAxis);
    }

    private applyAxesSettings(...axes: any[]) {
        const halfArrowBase = 7;
        const axisStrokeWidth = 1;
        const tickOffset = 5;

        const options = [
            [
                "x", // this axis label
                "y", // the other axis label
                `M 0,0 L ${halfArrowBase * 2},${halfArrowBase} L 0,${
                    halfArrowBase * 2
                } z`,
                "X",
                "Y",
            ],
            [
                "y", // this axis label
                "x", // the other axis label
                `M 0,0 L ${halfArrowBase * 2},0 L ${halfArrowBase},${
                    halfArrowBase * 2
                } z`,
                "Y",
                "X",
            ],
        ];

        return axes.forEach((axis, i) => {
            axis.style("font-size", "inherit")
                .style("color", "#fff")
                .style("stroke", "none");

            axis.select("path.domain").attr("transform", "scale(1.05)");

            axis.select("defs")
                .select("marker.axis-arrowhead")
                .attr("id", `arrowhead-${options[i][0]}`)
                .attr("markerWidth", 20)
                .attr("markerHeight", 20)
                .attr(`ref${options[i][3]}`, axisStrokeWidth)
                .attr(`ref${options[i][4]}`, halfArrowBase);

            axis.select("path.axis-path")
                .attr("d", options[i][2])
                .attr("stroke", "none")
                .attr("stroke-width", axisStrokeWidth)
                .attr("fill", "#fff");

            axis.select("path.domain").attr(
                "marker-end",
                `url(#arrowhead-${options[i][0]})`
            );

            axis.selectAll(".tick text")
                .attr("transform", "scale(1, -1)")
                .style("font-family", "KaTeX_Main");

            axis.selectAll(".tick line")
                .attr(`${options[i][1]}1`, -tickOffset)
                .attr(`${options[i][1]}2`, tickOffset);
        });
    }

    private getScale(axisRange: [number, number]) {
        const { squareLength } = this.group;

        return scaleLinear()
            .domain(axisRange)
            .range([squareLength * axisRange[0], squareLength * axisRange[1]]);
    }

    getXScale(axisRange: [number, number] = this.xRange) {
        return this.getScale(axisRange);
    }

    getYScale(axisRange: [number, number] = this.yRange) {
        return this.getScale(axisRange);
    }

    /**
     * Convert axes coordinates to SVG-Cartesian coordinates.
     *
     * @internal
     */
    coordsGtoW(point: Vector2) {
        const xScale = this.getXScale();
        const yScale = this.getYScale();

        return new Vector2(xScale(point.x), yScale(point.y));
    }

    /**
     * Graph a function onto the axes.
     *
     * @param params Options to form the graph.
     *
     * @returns A plotted graph.
     */
    graph(params: {
        /**
         * Function of the graph.
         */
        functionDef: (x: number) => number;
        /**
         * x range of the graph.
         */
        xRange?: [number, number];
        /**
         * Color of the graph.
         */
        color?: string;
    }) {
        return new Graph({
            axes: this,
            functionDef: params.functionDef,
            xRange: params.xRange ?? this.xRange,
            CONFIG: {
                graphColor: params.color,
            },
        }).render();
    }

    /**
     * Add label onto a graph.
     *
     * @param graph The graph to put the label on.
     * @param text Content of the label.
     * @param xPos x position of the label. Default is the rightmost value on the x axis.
     *
     * @returns A label.
     */
    addGraphLabel(
        graph: Graph,
        text: string,
        xPos = graph.xRange[1],
        color = graph.graphColor,
        fontSize = 18
    ) {
        const label = new Label({
            axes: this,
            position: new Vector2(xPos, graph.functionDef(xPos)),
            text: text,
            color: color,
            fontSize: fontSize,
        }).render();

        return label;
    }

    /**
     * Add a point at the specified x position on the graph.
     *
     * @param graph The graph to put the point on.
     * @param xPos The x position of the point. Default is 1.
     *
     * @returns A complex data object that contains the point.
     */
    pointOnGraph(graph: Graph, xPos = 1) {
        const pos = new Vector2(xPos, graph.functionDef(xPos));

        const point = new Point({
            parent: graph,
            axes: graph.axes,
            position: pos,
            radius: 0.06,
            CONFIG: {
                fillColor: "#000",
                strokeWidth: 1.5,
            },
        }).render();

        const pointGraph: PT_ON_GRAPH_DATA = { point: point };
        return pointGraph;
    }

    /**
     * Add a point at the specified x position on the graph, along with two axis projectors of it.
     *
     * @param graph The graph to put the point on.
     * @param xPos The x position of the point. Default is 1.
     *
     * @returns A complex data object that contains the point and an array of the two axis projectors.
     */
    pointToCoords(graph: Graph, xPos = 1) {
        const pos = new Vector2(xPos, graph.functionDef(xPos));

        const horizontalLine = new AxisProjector({
            type: "horizontal",
            coordinates: pos,
            axes: graph.axes,
            CONFIG: {
                lineWidth: 1,
            },
        }).render();

        const verticalLine = new AxisProjector({
            type: "vertical",
            coordinates: pos,
            axes: graph.axes,
            CONFIG: {
                lineWidth: 1,
            },
        }).render();

        const point = new Point({
            parent: graph,
            axes: graph.axes,
            position: pos,
            radius: 0.06,
            CONFIG: {
                fillColor: "#000",
                strokeWidth: 1.5,
            },
        }).render();

        const pointCoords: PT_TO_COORDS_DATA = {
            point: point,
            projectors: [horizontalLine, verticalLine],
        };
        return pointCoords;
    }
}
