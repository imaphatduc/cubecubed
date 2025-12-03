import { range } from "d3-array";
import { axisBottom, axisRight } from "d3-axis";
import { format } from "d3-format";
import { scaleLinear } from "d3-scale";
import { Selection } from "d3-selection";
//+++++++++++++++++++++++++++++++++++++++++++++++++++//

import configFactory from "@utils/configFactory";

import { Vector2 } from "@math/Vector2";

import { Cubicon, CubiconParams } from "@cubicons/Cubicon";
import { MATH_TEX_CONFIG } from "@cubicons/MathTex";
import { AxisProjector } from "@cubicons/coordinate-system/AxisProjector";
import { Graph } from "@cubicons/coordinate-system/Graph";
import { Label } from "@cubicons/coordinate-system/Label";
import { Point } from "@cubicons/coordinate-system/Point";

export type POINT_ON_GRAPH_DATA = {
    point: Point;
};

export type POINT_TO_COORDS_DATA = {
    point: Point;
    projectors: [AxisProjector, AxisProjector];
};

export interface AXES_CONFIG {
    xRange: [number, number];
    yRange: [number, number];
    hasNums: boolean;
}

export const AXES_DEFAULT_CONFIG: AXES_CONFIG = {
    xRange: [0, 0],
    yRange: [0, 0],
    hasNums: false,
};

export class Axes extends Cubicon {
    readonly cubiconType = "Axes";

    declare CONFIG: AXES_CONFIG;

    /**
     * The `<svg>` element that contains the whole coordinate system and everything included in it.
     */
    g_coordinate: Selection<SVGGElement, unknown, HTMLElement, any>;

    /**
     * The `<svg>` element that contains the axes.
     */
    g_axes: Selection<SVGGElement, unknown, HTMLElement, any>;

    /**
     * The `<svg>` element that contains the x axis.
     */
    xAxis: Selection<SVGGElement, unknown, HTMLElement, any>;

    /**
     * The `<svg>` element that contains the y axis.
     */
    yAxis: Selection<SVGGElement, unknown, HTMLElement, any>;

    /**
     * The `<svg>` element (inside .axes) that contains all the graphs inside a pair of axes.
     */
    g_graphs: Selection<SVGGElement, unknown, HTMLElement, any>;

    constructor(params: CubiconParams<AXES_CONFIG>) {
        super({
            group: params.group,

            position: params.position,

            CONFIG: configFactory(AXES_DEFAULT_CONFIG, params.CONFIG),
        });

        this.g_coordinate = this.group.svg_group
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
            .attr("class", "axis-arrowhead-path");

        this.yAxis
            .append("defs")
            .append("marker")
            .attr("class", "axis-arrowhead")
            .append("path")
            .attr("class", "axis-arrowhead-path");
    }

    render() {
        this.g_coordinate.attr(
            "transform",
            `translate(${this.position.x}, ${this.position.y})`
        );

        this.renderAxes();

        this.applyAxesSettings();

        if (!this.hasNums) {
            this.removeAxesNumbers();
        }

        return this;
    }

    private renderAxes() {
        const xAxis = axisBottom(this.getXScale())
            .tickValues(
                range(this.xRange[0], this.xRange[1] + 1).filter(
                    (t: number) => t !== 0
                )
            )
            .tickSizeOuter(0);

        this.xAxis.call(xAxis);

        //

        const yAxis = axisRight(this.getYScale())
            .tickValues(
                range(this.yRange[0], this.yRange[1] + 1).filter(
                    (t: number) => t !== 0
                )
            )
            .tickFormat(format("0"))
            .tickSizeOuter(0);

        this.yAxis.call(yAxis);
    }

    private applyAxesSettings() {
        this.setAxesWrapperElementsAttrs();

        this.setAxesArrowheadsAttrs();

        this.setAxesPathElementsAttrs();

        this.setAxesTickOffsets();

        this.setAxesTickNumbersAttrs();
    }

    private setAxesWrapperElementsAttrs() {
        [this.xAxis, this.yAxis].forEach((axis) => {
            axis.attr("font-size", "inherit")
                .attr("color", "#fff")
                .attr("stroke", "none");
        });
    }

    private setAxesArrowheadsAttrs() {
        const halfArrowBase = 7;

        const axisStrokeWidth = 1;

        const markerWidth = 20;
        const markerHeight = 20;

        this.xAxis
            .select("defs")
            .select("marker.axis-arrowhead")
            .attr("id", "arrowhead-x")
            .attr("markerWidth", markerWidth)
            .attr("markerHeight", markerHeight)
            .attr("refX", axisStrokeWidth)
            .attr("refY", halfArrowBase)
            .select("path.axis-arrowhead-path")
            .attr(
                "d",
                `M 0,0 L ${halfArrowBase * 2},${halfArrowBase} L 0,${
                    halfArrowBase * 2
                } z`
            )
            .attr("stroke", "none")
            .attr("stroke-width", axisStrokeWidth)
            .attr("fill", "#fff");

        //

        this.yAxis
            .select("defs")
            .select("marker.axis-arrowhead")
            .attr("id", "arrowhead-y")
            .attr("markerWidth", markerWidth)
            .attr("markerHeight", markerHeight)
            .attr("refY", axisStrokeWidth)
            .attr("refX", halfArrowBase)
            .select("path.axis-arrowhead-path")
            .attr(
                "d",
                `M 0,0 L ${halfArrowBase * 2},0 L ${halfArrowBase},${
                    halfArrowBase * 2
                } z`
            )
            .attr("stroke", "none")
            .attr("stroke-width", axisStrokeWidth)
            .attr("fill", "#fff");
    }

    private setAxesPathElementsAttrs() {
        this.xAxis
            .select("path.domain")
            .attr("transform", "scale(1.05)")
            .attr("marker-end", `url(#arrowhead-x)`);

        this.yAxis
            .select("path.domain")
            .attr("transform", "scale(1.05)")
            .attr("marker-end", `url(#arrowhead-y)`);
    }

    private setAxesTickOffsets() {
        const tickOffset = 5;

        this.xAxis
            .selectAll(".tick line")
            .attr("y1", -tickOffset)
            .attr("y2", tickOffset);

        this.yAxis
            .selectAll(".tick line")
            .attr("x1", -tickOffset)
            .attr("x2", tickOffset);
    }

    private setAxesTickNumbersAttrs() {
        [this.xAxis, this.yAxis].forEach((axis) => {
            axis.selectAll(".tick text")
                .attr("transform", "scale(1, -1)")
                .style("font-family", "KaTeX_Main");
        });
    }

    private removeAxesNumbers() {
        this.xAxis.selectAll(".tick text").remove();
        this.yAxis.selectAll(".tick text").remove();
    }

    /**
     * Plot a function onto the axes.
     *
     * @param params Options to form the graph.
     *
     * @returns A plotted graph.
     */
    plot(params: {
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
            group: this.group,
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
     * @returns A label.
     */
    addGraphLabel(params: {
        /**
         * The graph to put the label on.
         */
        graph: Graph;
        /**
         * Content of the label.
         */
        text: string;
        /**
         * x position of the label.
         */
        xPos?: number;
        /**
         * Config options of the label.
         */
        CONFIG?: MATH_TEX_CONFIG;
    }) {
        const xPos = params.xPos ?? params.graph.xRange[1];

        const label = new Label({
            axes: this,
            position: new Vector2(xPos, params.graph.functionDef(xPos)),
            text: params.text,
            CONFIG: {
                color: params.CONFIG?.color ?? params.graph.CONFIG.graphColor,
                fontSize: params.CONFIG?.fontSize,
            },
        }).render();

        return label;
    }

    /**
     * Add a point at the specified x position on the graph.
     *
     * @returns A complex data object that contains the point.
     */
    pointOnGraph(params: {
        /**
         * The graph to put the point on.
         */
        graph: Graph;

        /**
         * The x position of the point.
         *
         * @default 1
         */
        xPos: number;
    }) {
        const xPos = params.xPos ?? 1;

        const pos = new Vector2(xPos, params.graph.functionDef(xPos));

        const point = new Point({
            axes: this,
            position: pos,
            CONFIG: {
                fillColor: "#000",
                strokeWidth: 1.5,
            },
        }).render();

        const pointGraph: POINT_ON_GRAPH_DATA = { point: point };

        return pointGraph;
    }

    /**
     * Add a point at the specified x position on the graph, along with two axis
     * projectors of it.
     *
     * @returns A complex data object that contains the point and an array of the
     * two axis projectors.
     */
    pointToCoords(params: {
        /**
         * The graph to put the point on.
         */
        graph: Graph;

        /**
         * The x position of the point.
         *
         * @default 1
         */
        xPos: number;
    }) {
        const xPos = params.xPos ?? 1;

        const pos = new Vector2(xPos, params.graph.functionDef(xPos));

        const horizontalLine = new AxisProjector({
            type: "horizontal",
            position: pos,
            axes: this,
            CONFIG: {
                lineWidth: 1,
            },
        }).render();

        const verticalLine = new AxisProjector({
            type: "vertical",
            position: pos,
            axes: this,
            CONFIG: {
                lineWidth: 1,
            },
        }).render();

        const point = new Point({
            axes: this,
            position: pos,
            CONFIG: {
                fillColor: "#000",
                strokeWidth: 1.5,
            },
        }).render();

        const pointCoords: POINT_TO_COORDS_DATA = {
            point: point,
            projectors: [horizontalLine, verticalLine],
        };

        return pointCoords;
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

    coordsGtoW(point: Vector2) {
        const xScale = this.getXScale();
        const yScale = this.getYScale();

        return new Vector2(xScale(point.x), yScale(point.y));
    }

    get xRange() {
        return this.CONFIG.xRange;
    }

    get yRange() {
        return this.CONFIG.yRange;
    }

    get hasNums() {
        return this.CONFIG.hasNums;
    }

    getWpoint(point: Vector2) {
        return this.coordsGtoW(point);
    }
}
