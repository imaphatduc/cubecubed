import katex from "katex";
import { range } from "d3-array";
import { format } from "d3-format";
import { line, curveNatural } from "d3-shape";
import { axisBottom, axisRight } from "d3-axis";
import { ScaleLinear, scaleLinear } from "d3-scale";
//+++++++++++++++++++++++++++++++++++++++++++++++++++//
import { Cubicon } from "./cubicon";
import {
    svgWidth,
    svgHeight,
    PT_ON_GRAPH_DATA,
    PT_TO_COORDS_DATA,
} from "./constants";
import { Vector2 } from "../math/vector";
import { Group } from "../scene/group";
import {
    LINE_CONFIG,
    LINE_DEFAULT_CONFIG,
    SHAPE_CONFIG,
    SHAPE_DEFAULT_CONFIG,
} from "./geometry";
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

export abstract class CoordinatesSystem extends Cubicon {
    readonly cubType = "coordinate-system";
    abstract readonly coordSysObjType: string;

    /**
     * The `<svg/>` element that contains the whole coordinate system and everything included in it.
     */
    coordinate: any;

    /**
     * The `<svg/>` element that contains the Axes.
     */
    svgWrapper: any;

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
export class Axes extends CoordinatesSystem {
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
    axes: any;
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
    graphs: any;

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

        this.draw();
    }

    /**
     * Draw (and render) the axes onto SVG.
     */
    private draw() {
        this.coordinate = this.svg
            .append("g")
            .attr("class", "xy-coordinate")
            .attr(
                "transform",
                `translate(${this.position.x}, ${this.position.y})`
            );
        this.axes = this.coordinate.append("g").attr("class", "axes");

        // x axis data
        let xAxis = axisBottom(this.xScale)
            .tickValues(
                range(this.xRange[0], this.xRange[1] + 1, 1).filter(
                    (t: number) => t !== 0
                )
            )
            .tickSizeOuter(0);
        this.xAxis = this.axes.append("g").call(xAxis);

        // y axis data
        let yAxis = axisRight(this.yScale)
            .tickValues(
                range(this.yRange[0], this.yRange[1] + 1, 1).filter(
                    (t: number) => t !== 0
                )
            )
            .tickFormat(format("0"))
            .tickSizeOuter(0);
        this.yAxis = this.axes.append("g").call(yAxis);

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

        this.graphs = this.coordinate.append("g").attr("class", "graphs");
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
        const func = params.functionDef;
        const xRange = params.xRange ?? this.xRange;
        const color = params.color ?? "#fff";

        const xScale = scaleLinear()
            .domain(xRange)
            .range([this.xLength * xRange[0], this.xLength * xRange[1]]);

        const lineGenerator = line()
            .curve(curveNatural)
            .x((d: [number, number]) => xScale(d[0]))
            .y((d: [number, number]) => this.yScale(d[1]));

        const points: [number, number][] = [];
        for (let x = xRange[0]; x <= xRange[1]; x += 0.01) {
            if (
                this.yScale(func(x)) < this.yScale(this.yRange[1] + 1) &&
                this.yScale(func(x)) > this.yScale(this.yRange[0] - 1)
            ) {
                points.push([x, func(x)]);
            }
        }

        const pathData = lineGenerator(points);

        const graphGroup = this.graphs.append("g").attr("class", "graph-group");

        return new Graph({
            graphGroup: graphGroup,
            axes: this,
            data: pathData,
            functionDef: func,
            xRange: xRange,
            CONFIG: {
                graphColor: color,
            },
        });
    }

    /**
     * Add label onto a graph.
     *
     * @param graph The graph to put the label on.
     * @param text Content of the label.
     * @param xPos x position of the label. Default is .xRange[1].
     *
     * @returns A label.
     */
    addGraphLabel(graph: Graph, text: string, xPos = graph.xRange[1]) {
        return new Label({
            group: graph.axes.group,
            position: new Vector2(
                this.xScale(xPos),
                this.yScale(graph.functionDef(xPos))
            ),
            text: text,
        });
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
            projectorGroup: graph.projectorGroup,
            axes: graph.axes,
            position: pos,
            radius: 0.06,
            CONFIG: {
                fillColor: "#000",
                strokeWidth: 1.5,
            },
        });

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

        let horizontalLine = new AxisProjector({
            projectorGroup: graph.projectorGroup,
            axes: graph.axes,
            startPoint: pos,
            endPoint: new Vector2(0, pos.y),
            CONFIG: {
                lineWidth: 1,
            },
        });
        horizontalLine.lineStroke.style("shape-rendering", "crispEdges");

        let verticalLine = new AxisProjector({
            projectorGroup: graph.projectorGroup,
            axes: graph.axes,
            startPoint: pos,
            endPoint: new Vector2(pos.x, 0),
            CONFIG: {
                lineWidth: 1,
            },
        });
        verticalLine.lineStroke.style("shape-rendering", "crispEdges");

        const point = this.pointOnGraph(graph, xPos).point;

        const pointCoords: PT_TO_COORDS_DATA = {
            point: point,
            lines: [horizontalLine, verticalLine],
        };
        return pointCoords;
    }
}

export class Graph extends CoordinatesSystem {
    readonly coordSysObjType = "graph";

    /**
     * The `<svg/>` element of the graph wrapper.
     */
    graphGroup: any;

    /**
     * The `<svg/>` element that contains two axis projectors' `<svg/>` (if Axes().pointToCoords(...) was called).
     */
    projectorGroup: any;

    /**
     * The `</svg>` element that wraps the two axes' `</svg>`.
     */
    axes: any;

    /**
     *
     */
    graphData: any;

    /**
     * x range of this graph.
     */
    xRange: [number, number];

    /**
     * The function of this graph.
     */
    functionDef: Function;

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
         * The `<svg/>` element of the graph wrapper.
         */
        graphGroup: any;
        /**
         * The `</svg>` element that wraps the two axes' `</svg>`.
         */
        axes: Axes;
        /**
         * SVG path data of this graph.
         */
        data: any;
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
            graphColor?: string;
            graphWidth?: number;
        };
    }) {
        super({ group: params.axes.group, position: params.axes.position });

        this.graphGroup = params.graphGroup;
        this.axes = params.axes;

        this.graphData = params.data;

        this.functionDef = params.functionDef;
        this.xRange = params.xRange;

        ({
            graphColor: this.graphColor = "#fff",
            graphWidth: this.graphWidth = 1.5,
        } = params.CONFIG ?? {
            graphColor: "#fff",
            graphWidth: 1.5,
        });

        this.draw();
    }

    private draw() {
        this.stroke = this.graphGroup
            .append("path")
            .attr("class", "graph")
            .attr("d", this.graphData)
            .attr("fill", "none")
            .attr("stroke", this.graphColor)
            .attr("stroke-width", 1.2);

        this.projectorGroup = this.graphGroup
            .append("g")
            .attr("class", "projector-group");
    }
}

/// Defining Label class here is a bad practice,
// but I don't know any better way to make graph coords and 2D space coords work together properly.
// (Note the difference between Label's position property and MathText's one)
export class Label extends CoordinatesSystem {
    readonly coordSysObjType = "label";

    /**
     * The content of this label.
     */
    text: string;
    /**
     * The color of this label.
     */
    color: string;
    /**
     * Font size of this label.
     */
    fontSize: number;

    constructor(params: {
        group: Group;
        position: Vector2;
        text?: string;
        color?: string;
        fontSize?: number;
    }) {
        super({ group: params.group, position: params.position });

        this.text = params.text ?? "";
        this.color = params.color ?? "#fff";
        this.fontSize = params.fontSize ?? 13;

        this.draw();
    }

    /**
     * Draw (and render) the label onto SVG.
     */
    private draw() {
        /// this.stroke is a d3 selection of HTML <text />
        this.stroke = this.svg
            .append("foreignObject")
            .attr("x", this.position.x)
            /// When flipping the y axis (scale(1, -1)), we add minus (-) before y coordinate
            .attr("y", -this.position.y)
            .attr("width", svgWidth)
            .attr("height", svgHeight)
            .attr("transform", "scale(1, -1)")
            .append("xhtml:text")
            .style("font-size", `${this.fontSize}pt`)
            .style("color", this.color);
        this.stroke.node().innerHTML = katex.renderToString(this.text);
    }
}

export class Point extends CoordinatesSystem {
    readonly coordSysObjType = "point";

    private Wposition: Vector2;
    private Wradius: number;

    /**
     * The `<svg/>` element that contains two axis projectors' `<svg/>` (if Axes().pointToCoords(...) was called).
     */
    projectorGroup: any;

    /**
     * The `</svg>` element that wraps the two axes' `</svg>`.
     */
    axes: Axes;

    /**
     * Radius of this point.
     */
    radius: number;

    fillColor: string | undefined;
    fillOpacity: number | undefined;
    strokeColor: string | undefined;
    strokeWidth: number | undefined;

    constructor(params: {
        /**
         * The `<svg/>` element that contains two axis projectors' `<svg/>` (if Axes().pointToCoords(...) was called).
         */
        projectorGroup: any;
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
        CONFIG?: SHAPE_CONFIG;
    }) {
        super({
            group: params.axes.group,
            position: params.position,
        });

        this.projectorGroup = params.projectorGroup;
        this.axes = params.axes;

        this.Wposition = new Vector2(
            params.axes.xScale(params.position.x),
            params.axes.yScale(params.position.y)
        );

        this.radius = params.radius;
        this.Wradius = params.axes.xScale(params.radius);

        ({
            fillColor: this.fillColor = SHAPE_DEFAULT_CONFIG.fillColor,
            fillOpacity: this.fillOpacity = SHAPE_DEFAULT_CONFIG.fillOpacity,
            strokeColor: this.strokeColor = SHAPE_DEFAULT_CONFIG.strokeColor,
            strokeWidth: this.strokeWidth = SHAPE_DEFAULT_CONFIG.strokeWidth,
        } = params.CONFIG ?? SHAPE_DEFAULT_CONFIG);

        this.draw();
    }

    /**
     * Draw (and render) the point onto SVG.
     */
    private draw() {
        this.stroke = this.projectorGroup
            .append("circle")
            .attr("class", "point")
            .attr("cx", this.Wposition.x)
            .attr("cy", this.Wposition.y)
            .attr("r", this.Wradius)
            .attr("fill", this.fillColor)
            .attr("fill-opacity", this.fillOpacity)
            .attr("stroke", this.strokeColor)
            .attr("stroke-width", this.strokeWidth);
        this.stroke
            .style("transform-box", "fill-box")
            .style("transform-origin", "center");
    }
}

export class AxisProjector extends CoordinatesSystem {
    readonly coordSysObjType = "axis-projector";

    /**
     * Start point (tail) of the projector (in SVG-Cartesian coordinate system).
     */
    readonly WstartPoint: Vector2;
    /**
     * End point (head) of the projector (in SVG-Cartesian coordinate system).
     */
    readonly WendPoint: Vector2;

    /**
     * Start point (tail) of the projector (in grid coordinate system).
     */
    startPoint: Vector2;
    /**
     * End point (head) of the projector (in grid coordinate system).
     */
    endPoint: Vector2;

    /**
     * The `<svg/>` element that contains two axis projectors' `<svg/>` (if Axes().pointToCoords(...) was called).
     */
    projectorGroup: any;

    /**
     * The `</svg>` element that wraps the two axes' `</svg>`.
     */
    axes: Axes;

    lineColor: string | undefined;
    lineWidth: number | undefined;

    /**
     * The `<svg/>` element that represents this projector's path.
     */
    lineStroke: any;

    constructor(params: {
        /**
         * The `<svg/>` element that contains two axis projectors' `<svg/>` (if Axes().pointToCoords(...) was called).
         */
        projectorGroup: any;
        /**
         * The `</svg>` element that wraps the two axes' `</svg>`.
         */
        axes: Axes;
        /**
         * Start point of the projector.
         */
        startPoint: Vector2;
        /**
         * End point of the projector.
         */
        endPoint: Vector2;
        /**
         * Config options of the projector.
         */
        CONFIG?: LINE_CONFIG;
    }) {
        super({ group: params.axes.group, position: params.startPoint });

        this.projectorGroup = params.projectorGroup;
        this.axes = params.axes;

        this.startPoint = params.startPoint;
        this.WstartPoint = new Vector2(
            params.axes.xScale(params.startPoint.x),
            params.axes.yScale(params.startPoint.y)
        );

        this.endPoint = params.endPoint;
        this.WendPoint = new Vector2(
            params.axes.xScale(params.endPoint.x),
            params.axes.yScale(params.endPoint.y)
        );

        ({
            lineColor: this.lineColor = LINE_DEFAULT_CONFIG.lineColor,
            lineWidth: this.lineWidth = LINE_DEFAULT_CONFIG.lineWidth,
        } = params.CONFIG ?? LINE_DEFAULT_CONFIG);

        this.draw();
    }

    /**
     * Draw (and render) the axis projectors onto SVG.
     */
    private draw() {
        this.lineStroke = this.projectorGroup
            .append("line")
            .attr("class", "project-line")
            .attr("x1", this.WstartPoint.x)
            .attr("y1", this.WstartPoint.y)
            .attr("x2", this.WendPoint.x)
            .attr("y2", this.WendPoint.y)
            .attr("stroke", this.lineColor)
            .attr("stroke-width", this.lineWidth);
    }
}
