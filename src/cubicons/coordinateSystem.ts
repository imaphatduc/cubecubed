import { range } from "d3-array";
import { format } from "d3-format";
import { line, curveNatural } from "d3-shape";
import { axisBottom, axisRight } from "d3-axis";
import { ScaleLinear, scaleLinear } from "d3-scale";
//+++++++++++++++++++++++++++++++++++++++++++++++++++//
import { Cubicon } from "./cubicon";
import { PT_ON_GRAPH_DATA, PT_TO_COORDS_DATA } from "./constants";
import { Vector2 } from "../math/vector";
import { Group } from "../scene/group";
import {
    Circle,
    Line,
    LINE_CONFIG,
    LINE_DEFAULT_CONFIG,
    SHAPE_CONFIG,
} from "./geometry";
import { MathText } from "./text";
//+++++++++++++++++++++++++++++++++++++++++++++++++++//

interface AXES_CONFIG {
    xRange: [number, number];
    xLength: number;
    yRange: [number, number];
    yLength: number;
    hasNums: boolean;
}
const DEFAULT_AXES_CONFIG: AXES_CONFIG = {
    xRange: [0, 0],
    xLength: 50,
    yRange: [0, 0],
    yLength: 50,
    hasNums: false,
};

export abstract class CoordinateSystem extends Cubicon {
    readonly cubType = "coordinate-system";
    abstract readonly coordSysObjType: string;

    /**
     * The `<svg/>` element that contains the whole coordinate system and everything included in it.
     */
    g_coordinate: any;

    constructor({
        group,
        position = new Vector2(0, 0),
    }: {
        group: Group;
        position?: Vector2 | undefined;
    }) {
        super({ group: group, position: position });
    }
}

/**
 * Return the axes in coordinate system.
 */
export class Axes extends CoordinateSystem {
    readonly coordSysObjType = "axes";

    /**
     * Range of the x axis.
     */
    xRange: [number, number];
    /**
     * Length of the x axis.
     */
    xLength: number;
    /**
     * Range of the y axis.
     */
    yRange: [number, number];
    /**
     * Length of the y axis.
     */
    yLength: number;
    /**
     * Whether the axes include numbers
     */
    hasNums: boolean;

    /**
     * Scale function of the x axis, convert from SVG-Cartesian coordinates to the axes' coordinates.
     */
    xScale: ScaleLinear<number, number, never>;
    /**
     * Scale function of the y axis, convert from SVG-Cartesian coordinates to the axes' coordinates.
     */
    yScale: ScaleLinear<number, number, never>;

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
            xLength: this.xLength = DEFAULT_AXES_CONFIG.xLength,
            yRange: this.yRange = DEFAULT_AXES_CONFIG.yRange,
            yLength: this.yLength = DEFAULT_AXES_CONFIG.yLength,
            hasNums: this.hasNums = DEFAULT_AXES_CONFIG.hasNums,
        } = params.CONFIG ?? DEFAULT_AXES_CONFIG);

        this.xScale = scaleLinear()
            .domain(this.xRange)
            .range([
                this.xLength * this.xRange[0],
                this.xLength * this.xRange[1],
            ]);
        this.yScale = scaleLinear()
            .domain(this.yRange)
            .range([
                this.yLength * this.yRange[0],
                this.yLength * this.yRange[1],
            ]);
    }

    /**
     * Draw (and render) the axes onto SVG.
     */
    render() {
        this.checkIfRendered();
        this.isRendered = true;

        this.g_coordinate = this.svg_group
            .append("g")
            .attr("class", "xy-coordinate")
            .attr(
                "transform",
                `translate(${this.position.x}, ${this.position.y})`
            );
        this.g_axes = this.g_coordinate.append("g").attr("class", "axes");

        // x axis data
        let xAxis = axisBottom(this.xScale)
            .tickValues(
                range(this.xRange[0], this.xRange[1] + 1, 1).filter(
                    (t: number) => t !== 0
                )
            )
            .tickSizeOuter(0);
        this.xAxis = this.g_axes
            .append("g")
            .attr("class", "x-axis")
            .call(xAxis);

        // y axis data
        let yAxis = axisRight(this.yScale)
            .tickValues(
                range(this.yRange[0], this.yRange[1] + 1, 1).filter(
                    (t: number) => t !== 0
                )
            )
            .tickFormat(format("0"))
            .tickSizeOuter(0);
        this.yAxis = this.g_axes
            .append("g")
            .attr("class", "y-axis")
            .call(yAxis);

        function applySettings(axes: any[]) {
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
                // Basic stylings for the axis
                axis.style("font-size", "inherit")
                    .style("color", "#fff")
                    .style("stroke", "none");

                axis.select("path.domain").attr("transform", "scale(1.05)");

                // Add arrow marker to the axis
                axis.append("defs")
                    .append("marker")
                    .attr("id", `arrowhead-${options[i][0]}`)
                    .attr("markerWidth", 20)
                    .attr("markerHeight", 20)
                    .attr(`ref${options[i][3]}`, axisStrokeWidth)
                    .attr(`ref${options[i][4]}`, halfArrowBase)
                    .append("path")
                    .attr("d", options[i][2])
                    .attr("stroke", "none")
                    .attr("stroke-width", axisStrokeWidth)
                    .attr("fill", "#fff");

                axis.select("path.domain").attr(
                    "marker-end",
                    `url(#arrowhead-${options[i][0]})`
                );

                // Basic stylings for the numbers
                axis.selectAll(".tick text")
                    .attr("transform", "scale(1, -1)")
                    .style("font-family", "KaTeX_Main");

                // Define tick lines' appearance
                axis.selectAll(".tick line")
                    .attr(`${options[i][1]}1`, -tickOffset)
                    .attr(`${options[i][1]}2`, tickOffset);
            });
        }

        applySettings([this.xAxis, this.yAxis]);

        // Remove numbers on axes if hasNums is false
        if (!this.hasNums) {
            this.xAxis.selectAll(".tick text").remove();
            this.yAxis.selectAll(".tick text").remove();
        }

        this.g_graphs = this.g_coordinate.append("g").attr("class", "graphs");

        return this;
    }

    coordsGtoW(point: Vector2) {
        return new Vector2(this.xScale(point.x), this.yScale(point.y));
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
        functionDef: Function;
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
    addGraphLabel(graph: Graph, text: string, xPos = graph.xRange[1]) {
        const label = new Label({
            parent: graph,
            position: new Vector2(xPos, graph.functionDef(xPos)),
            text: text,
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
        const point = new Point({
            parent: graph,
            axes: graph.axes,
            position: pos,
            radius: 0.06,
            CONFIG: {
                fillColor: "#000",
                strokeWidth: 1.5,
            },
        });

        let horizontalLine = new AxisProjector({
            type: "horizontal",
            point: point,
            axes: graph.axes,
            CONFIG: {
                lineWidth: 1,
            },
        }).render();

        let verticalLine = new AxisProjector({
            type: "vertical",
            point: point,
            axes: graph.axes,
            CONFIG: {
                lineWidth: 1,
            },
        }).render();

        point.render();

        const pointCoords: PT_TO_COORDS_DATA = {
            point: point,
            lines: [horizontalLine, verticalLine],
        };
        return pointCoords;
    }
}

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
    functionDef: Function;

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
        functionDef: Function;
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
        this.checkIfRendered();
        this.isRendered = true;

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
        const xScale = scaleLinear()
            .domain(this.xRange)
            .range([
                this.axes.xLength * this.xRange[0],
                this.axes.xLength * this.xRange[1],
            ]);

        const lineGenerator = line()
            .curve(curveNatural)
            .x((d: [number, number]) => xScale(d[0]))
            .y((d: [number, number]) => this.axes.yScale(d[1]));

        const points: [number, number][] = [];
        for (let x = this.xRange[0]; x <= this.xRange[1]; x += 0.01) {
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

export class Label extends MathText {
    readonly coordSysObjType = "label";

    /**
     * The axes that this label belongs to.
     */
    axes: Axes;

    constructor(params: {
        parent: Graph;
        position: Vector2;
        text: string;
        color?: string;
        fontSize?: number;
    }) {
        super({
            group: params.parent.axes.group,
            position: params.position,
            text: params.text,
            color: (params.color = "#fff"),
            fontSize: (params.fontSize = 13),
        });

        this.g_cubiconWrapper = params.parent.g_cubiconWrapper;
        this.axes = params.parent.axes;
    }

    /**
     * Draw (and render) the label onto SVG.
     */
    render() {
        this.checkIfRendered();
        this.isRendered = true;

        super.applyToHTMLFlow(this.g_cubiconWrapper);
        this.setPosition();

        this.def_cubiconBase.attr("class", "graph-label");

        return this;
    }

    private setPosition() {
        this.def_cubiconBase
            .attr("x", this.axes.xScale(this.position.x))
            .attr("y", -this.axes.yScale(this.position.y));
    }
}

export class Point extends Circle {
    readonly coordSysObjType = "point";

    /**
     * The `</svg>` element that wraps the two axes' `</svg>`.
     */
    axes: Axes;

    constructor(params: {
        /**
         * Parent of this point. (i.e. The cubicon on which this point should be put)
         */
        parent?: Graph | undefined;
        /**
         * The `</svg>` element that wraps the two axes' `</svg>`.
         */
        axes: Axes;
        /**
         * Position of the point.
         */
        position: Vector2;
        /**
         * Radius of the point.
         */
        radius: number;
        /**
         * Config options of the point.
         */
        CONFIG?: SHAPE_CONFIG | undefined;
    }) {
        super({
            group: params.axes.group,
            position: params.position,
            radius: params.radius,
            CONFIG: params.CONFIG,
        });

        this.g_cubiconWrapper =
            typeof params.parent !== "undefined"
                ? params.parent.g_projector
                : params.axes.g_cubiconWrapper;
        this.axes = params.axes;
    }

    /**
     * Draw (and render) the point onto SVG.
     */
    render() {
        this.checkIfRendered();
        this.isRendered = true;

        const Wposition = this.axes.coordsGtoW(this.position);
        const Wradius = this.axes.xScale(this.radius);

        super.applyToHTMLFlow(this.g_cubiconWrapper, Wposition, Wradius);

        this.def_cubiconBase.attr("class", "point");

        return this;
    }
}

export class AxisProjector extends Line {
    readonly coordSysObjType = "axis-projector";

    /**
     * Is this projector of type "horizontal" or "vertical"?
     */
    type: string;
    /**
     * The `</svg>` element that wraps the two axes' `</svg>`.
     */
    axes: Axes;

    protected parentGroupTag: any;

    constructor(params: {
        type: "horizontal" | "vertical";
        /**
         * The point that holds the projector.
         */
        point: Point;
        /**
         * The axes that the projector belongs to.
         */
        axes: Axes;
        /**
         * Config options of the projector.
         */
        CONFIG?: LINE_CONFIG;
    }) {
        super({
            group: params.axes.group,
            startPoint: params.point.position,
            endPoint:
                params.type === "horizontal"
                    ? new Vector2(0, params.point.position.y)
                    : new Vector2(params.point.position.x, 0),
            CONFIG: params.CONFIG,
        });

        this.parentGroupTag = params.point.g_cubiconWrapper;
        this.type = params.type;
        this.axes = params.axes;

        ({
            lineColor: this.lineColor = LINE_DEFAULT_CONFIG.lineColor,
            lineWidth: this.lineWidth = LINE_DEFAULT_CONFIG.lineWidth,
        } = params.CONFIG ?? LINE_DEFAULT_CONFIG);
    }

    /**
     * Draw (and render) the axis projectors onto SVG.
     */
    render() {
        this.checkIfRendered();
        this.isRendered = true;

        const WstartPoint = this.axes.coordsGtoW(this.position);
        const WendPoint =
            this.type === "horizontal"
                ? this.axes.coordsGtoW(new Vector2(0, this.position.y))
                : this.axes.coordsGtoW(new Vector2(this.position.x, 0));

        this.applyToHTMLFlow(this.parentGroupTag, WstartPoint, WendPoint);

        this.g_cubiconWrapper.attr("class", `${this.type}-projector-wrapper`);
        this.def_cubiconBase
            .attr("class", `${this.type}-projector-line`)
            .style("shape-rendering", "crispEdges");

        return this;
    }

    getWpoint(point: Vector2) {
        return this.axes.coordsGtoW(point);
    }
}
