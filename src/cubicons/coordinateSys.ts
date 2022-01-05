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

    svgWrapper: any;

    constructor({
        group,
        position = new Vector2(0, 0),
    }: {
        group: Group;
        position: Vector2;
    }) {
        super({ group: group, position: position });
    }
}

interface AXES_CONSTRUCTOR {
    group: Group;
    position: Vector2;
    CONFIG: AXES_CONFIG;
}
export class Axes extends CoordinatesSystem {
    readonly coordSysObjType = "axes";

    xRange: [number, number];
    xLength: number;
    yRange: [number, number];
    yLength: number;
    hasNums: boolean;
    func: Function[];
    xScale: ScaleLinear<number, number, never>;
    yScale: ScaleLinear<number, number, never>;

    coordinate: any;
    axes: any;
    xAxis: any;
    yAxis: any;
    graphs: any;

    constructor({
        group,
        position = new Vector2(0, 0),
        CONFIG: {
            xRange = DEFAULT_AXES_CONFIG.xRange,
            xLength = DEFAULT_AXES_CONFIG.xLength,
            yRange = DEFAULT_AXES_CONFIG.yRange,
            yLength = DEFAULT_AXES_CONFIG.yLength,
            hasNums = false,
        } = DEFAULT_AXES_CONFIG,
    }: AXES_CONSTRUCTOR) {
        super({ group: group, position: position });

        this.xRange = xRange;
        this.xLength = xLength;
        this.yRange = yRange;
        this.yLength = yLength;

        this.func = [];

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

        this.hasNums = hasNums;

        this.draw();
    }

    private draw() {
        this.coordinate = this.svg
            .append("g")
            .attr("class", "xy-coordinate")
            .attr(
                "transform",
                `translate(${this.position.x}, ${this.position.y})`
            );
        this.axes = this.coordinate.append("g").attr("class", "axes");

        const halfArrowBase = 7;
        const axisStrokeWidth = 1;
        const tickOffset = 5;

        let xAxis = axisBottom(this.xScale)
            .tickValues(
                range(this.xRange[0], this.xRange[1] + 1, 1).filter(
                    (t: number) => t !== 0
                )
            )
            .tickSizeOuter(0);
        this.xAxis = this.axes
            .append("g")
            .attr("transform", "scale(1, -1)")
            .style("font-size", "inherit")
            .style("color", "#fff")
            .style("stroke", "none")
            .call(xAxis);
        this.xAxis.select("path.domain").attr("transform", "scale(1.05)");
        this.xAxis
            .append("defs")
            .append("marker")
            .attr("id", "arrowhead-x")
            .attr("refX", axisStrokeWidth)
            .attr("refY", halfArrowBase)
            .attr("markerWidth", 20)
            .attr("markerHeight", 20)
            .append("path")
            .attr(
                "d",
                `M 0,0 L ${halfArrowBase * 2},${halfArrowBase} L 0,${
                    halfArrowBase * 2
                } z`
            )
            .attr("stroke", "none")
            .attr("stroke-width", axisStrokeWidth)
            .attr("fill", "#fff");
        this.xAxis
            .select("path.domain")
            .attr("marker-end", "url(#arrowhead-x)");

        this.xAxis.selectAll(".tick text").style("font-family", "KaTeX_Main");
        this.xAxis
            .selectAll(".tick line")
            .attr("y1", -tickOffset)
            .attr("y2", tickOffset);

        let yAxis = axisRight(this.yScale)
            .tickValues(
                range(this.yRange[0], this.yRange[1] + 1, 1).filter(
                    (t: number) => t !== 0
                )
            )
            .tickFormat(format("0"))
            .tickSizeOuter(0);

        this.yAxis = this.axes
            .append("g")
            .style("font-size", "inherit")
            .style("color", "#fff")
            .style("stroke", "none")
            .call(yAxis);
        this.yAxis.select("path.domain").attr("transform", "scale(1.05)");
        this.yAxis
            .append("defs")
            .append("marker")
            .attr("id", "arrowhead-y")
            .attr("refX", halfArrowBase)
            .attr("refY", axisStrokeWidth)
            .attr("markerWidth", 20)
            .attr("markerHeight", 20)
            .append("path")
            .attr(
                "d",
                `M 0,0 L ${halfArrowBase * 2},0 L ${halfArrowBase},${
                    halfArrowBase * 2
                } z`
            )
            .attr("stroke", "none")
            .attr("stroke-width", axisStrokeWidth)
            .attr("fill", "#fff");
        this.yAxis
            .select("path.domain")
            .attr("marker-end", "url(#arrowhead-y)");

        this.yAxis
            .selectAll(".tick text")
            .attr("transform", "scale(1, -1)")
            .style("font-family", "KaTeX_Main");
        this.yAxis
            .selectAll(".tick line")
            .attr("x1", -tickOffset)
            .attr("x2", tickOffset);

        if (!this.hasNums) {
            this.xAxis.selectAll(".tick text").remove();
            this.yAxis.selectAll(".tick text").remove();
        }

        this.graphs = this.coordinate.append("g").attr("class", "graphs");
    }

    graph({
        func,
        xRange = this.xRange,
        color = "#fff",
    }: {
        func: Function;
        xRange: [number, number];
        color: string;
    }) {
        this.func.push(func);

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
        const path = graphGroup
            .append("path")
            .attr("class", "graph")
            .style("fill", "none")
            .style("stroke", color)
            .style("stroke-width", 1.2)
            .attr("d", pathData);
        const projectorGroup = graphGroup
            .append("g")
            .attr("class", "projector-group");

        return new Graph({
            graphGroup: graphGroup,
            projectorGroup: projectorGroup,
            axes: this,
            path: path,
            func: func,
            xRange: xRange,
        });
    }

    addGraphLabel(graph: Graph, text: string, xPos = graph.xRange[1]) {
        return new Label({
            group: graph.axes.group,
            position: new Vector2(
                this.xScale(xPos),
                this.yScale(graph.func(xPos))
            ),
            text: text,
        });
    }

    pointOnGraph(graph: Graph, xPos = 1) {
        const pos = new Vector2(xPos, graph.func(xPos));

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

    pointToCoords(graph: Graph, xPos = 1) {
        const pos = new Vector2(xPos, graph.func(xPos));

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

interface GRAPH_CONSTRUCTOR {
    graphGroup: any;
    projectorGroup: any;
    axes: Axes;
    path: any;
    func: Function;
    xRange: [number, number];
}
export class Graph extends CoordinatesSystem {
    readonly coordSysObjType = "graph";

    graphGroup: any;
    projectorGroup: any;
    axes: any;
    xRange: [number, number];
    func: Function;

    constructor({
        graphGroup,
        projectorGroup,
        axes,
        path,
        func,
        xRange,
    }: GRAPH_CONSTRUCTOR) {
        super({ group: axes.group, position: axes.position });

        this.graphGroup = graphGroup;
        this.projectorGroup = projectorGroup;
        this.axes = axes;

        this.stroke = path;

        this.xRange = xRange;

        this.func = func;
    }
}

interface LABEL_CONSTRUCTOR {
    group: Group;
    position: Vector2;
    text: string;
    color?: string;
    fontSize?: number;
}
/// Defining Label class here is a bad practice,
// but I don't know any better way to make graph coords and 2D space coords work together properly.
// (Note the difference between Label's position property and MathText's one)
export class Label extends CoordinatesSystem {
    readonly coordSysObjType = "label";

    text: string;
    color: string;
    fontSize: number;

    constructor({
        group,
        position = new Vector2(0, 0),
        text = "",
        color = "#fff",
        fontSize = 13,
    }: LABEL_CONSTRUCTOR) {
        super({ group: group, position: position });

        this.text = text;
        this.color = color;
        this.fontSize = fontSize;

        this.draw();
    }

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

interface POINT_CONSTRUCTOR {
    projectorGroup: any;
    axes: Axes;
    position: Vector2;
    radius: number;
    CONFIG: SHAPE_CONFIG;
}
export class Point extends CoordinatesSystem {
    readonly coordSysObjType = "point";

    private Wposition: Vector2;
    private Wradius: number;

    projectorGroup: any;
    axes: Axes;
    radius: number;

    fillColor: string;
    fillOpacity: number;
    strokeColor: string;
    strokeWidth: number;

    constructor({
        projectorGroup,
        axes,
        position = new Vector2(0, 0),
        radius,
        CONFIG: {
            fillColor = SHAPE_DEFAULT_CONFIG.fillColor,
            fillOpacity = SHAPE_DEFAULT_CONFIG.fillOpacity,
            strokeColor = SHAPE_DEFAULT_CONFIG.strokeColor,
            strokeWidth = SHAPE_DEFAULT_CONFIG.strokeWidth,
        } = SHAPE_DEFAULT_CONFIG,
    }: POINT_CONSTRUCTOR) {
        super({
            group: axes.group,
            position: position,
        });

        this.projectorGroup = projectorGroup;
        this.axes = axes;

        this.Wposition = new Vector2(
            axes.xScale(position.x),
            axes.yScale(position.y)
        );

        this.radius = radius;
        this.Wradius = axes.xScale(radius);

        this.strokeColor = strokeColor;
        this.strokeWidth = strokeWidth;

        this.fillColor = fillColor;
        this.fillOpacity = fillOpacity;

        this.draw();
    }

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

interface PROJ_CONSTRUCTOR {
    projectorGroup: any;
    axes: Axes;
    startPoint: Vector2;
    endPoint: Vector2;
    CONFIG: LINE_CONFIG;
}
export class AxisProjector extends CoordinatesSystem {
    readonly coordSysObjType = "axis-projector";

    readonly WstartPoint: Vector2;
    readonly WendPoint: Vector2;

    projectorGroup: any;
    axes: Axes;
    startPoint: Vector2;
    endPoint: Vector2;

    lineColor: string;
    lineWidth: number;
    lineStroke: any;

    constructor({
        projectorGroup,
        axes,
        startPoint = new Vector2(0, 0),
        endPoint,
        CONFIG: {
            lineColor = LINE_DEFAULT_CONFIG.lineColor,
            lineWidth = LINE_DEFAULT_CONFIG.lineWidth,
        } = LINE_DEFAULT_CONFIG,
    }: PROJ_CONSTRUCTOR) {
        super({ group: axes.group, position: startPoint });

        this.projectorGroup = projectorGroup;
        this.axes = axes;

        this.startPoint = startPoint;
        this.WstartPoint = new Vector2(
            axes.xScale(startPoint.x),
            axes.yScale(startPoint.y)
        );

        this.endPoint = endPoint;
        this.WendPoint = new Vector2(
            axes.xScale(endPoint.x),
            axes.yScale(endPoint.y)
        );

        this.lineColor = lineColor;
        this.lineWidth = lineWidth;

        this.draw();
    }

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
