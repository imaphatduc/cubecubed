import * as d3 from "d3";
import { Cubicon } from "./cubicon";
import { svgWidth, svgHeight } from "./constants";
import { Vector2 } from "../math/vector";

export class Axes extends Cubicon {
    constructor({
        group,
        position = new Vector2(0, 0),
        xRange = [0, 0],
        xLength = 50,
        yRange = [0, 0],
        yLength = 50,
        hasNums = false,
    }) {
        super({ group: group, position: position });

        this.xRange = xRange;
        this.xLength = xLength;
        this.yRange = yRange;
        this.yLength = yLength;

        this.func = [];

        this.xScale = d3
            .scaleLinear()
            .domain(this.xRange)
            .range([
                this.xLength * this.xRange[0],
                this.xLength * this.xRange[1],
            ]);
        this.yScale = d3
            .scaleLinear()
            .domain(this.yRange)
            .range([
                this.yLength * this.yRange[0],
                this.yLength * this.yRange[1],
            ]);

        this.hasNums = hasNums;

        this.#draw();
    }

    #draw() {
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

        let xAxis = d3
            .axisBottom(this.xScale)
            .tickValues(
                d3
                    .range(this.xRange[0], this.xRange[1] + 1, 1)
                    .filter((t) => t !== 0)
            )
            .tickSizeOuter(0);
        this.xAxes = this.axes
            .append("g")
            .attr("transform", "scale(1, -1)")
            .style("font-size", "inherit")
            .style("color", "#fff")
            .style("stroke", "none")
            .call(xAxis);
        this.xAxes.select("path.domain").attr("transform", "scale(1.05)");
        this.xAxes
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
        this.xAxes
            .select("path.domain")
            .attr("marker-end", "url(#arrowhead-x)");

        this.xAxes.selectAll(".tick text").style("font-family", "KaTeX_Main");
        this.xAxes
            .selectAll(".tick line")
            .attr("y1", -tickOffset)
            .attr("y2", tickOffset);

        let yAxis = d3
            .axisRight(this.yScale)
            .tickValues(
                d3
                    .range(this.yRange[0], this.yRange[1] + 1, 1)
                    .filter((t) => t !== 0)
            )
            .tickFormat(d3.format("0"))
            .tickSizeOuter(0);

        this.yAxes = this.axes
            .append("g")
            .style("font-size", "inherit")
            .style("color", "#fff")
            .style("stroke", "none")
            .call(yAxis);
        this.yAxes.select("path.domain").attr("transform", "scale(1.05)");
        this.yAxes
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
        this.yAxes
            .select("path.domain")
            .attr("marker-end", "url(#arrowhead-y)");

        this.yAxes
            .selectAll(".tick text")
            .attr("transform", "scale(1, -1)")
            .style("font-family", "KaTeX_Main");
        this.yAxes
            .selectAll(".tick line")
            .attr("x1", -tickOffset)
            .attr("x2", tickOffset);

        if (!this.hasNums) {
            this.xAxes.selectAll(".tick text").remove();
            this.yAxes.selectAll(".tick text").remove();
        }

        this.graphs = this.coordinate.append("g").attr("class", "graphs");
    }

    graph({ func, xRange = this.xRange, color = "#fff", createDuration }) {
        this.func.push(func);

        const xScale = d3
            .scaleLinear()
            .domain(xRange)
            .range([this.xLength * xRange[0], this.xLength * xRange[1]]);

        const lineGenerator = d3
            .line()
            .curve(d3.curveNatural)
            .x((d) => xScale(d[0]))
            .y((d) => this.yScale(d[1]));

        const points = [];
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
            createDuration: createDuration,
        });
    }

    addGraphLabel(graph, text, xPos = graph.xRange[1]) {
        return new Label({
            group: graph.axes.group,
            position: new Vector2(
                this.xScale(xPos),
                this.yScale(graph.func(xPos))
            ),
            text: text,
        });
    }

    pointOnGraph(graph, xPos) {
        const pos = new Vector2(xPos, graph.func(xPos));

        const point = new Point({
            projectorGroup: graph.projectorGroup,
            axes: graph.axes,
            position: pos,
            fillColor: "#000",
            strokeWidth: 1.5,
            radius: 0.06,
        });

        return { point: point };
    }

    pointToCoords(graph, xPos) {
        const pos = new Vector2(xPos, graph.func(xPos));

        let horizontalLine = new ProjectLine({
            projectorGroup: graph.projectorGroup,
            axes: graph.axes,
            startPoint: pos,
            endPoint: new Vector2(0, pos.y),
            lineWidth: 1,
        });
        horizontalLine.lineStroke.style("shape-rendering", "crispEdges");

        let verticalLine = new ProjectLine({
            projectorGroup: graph.projectorGroup,
            axes: graph.axes,
            startPoint: pos,
            endPoint: new Vector2(pos.x, 0),
            lineWidth: 1,
        });
        verticalLine.lineStroke.style("shape-rendering", "crispEdges");

        const point = this.pointOnGraph(graph, xPos).point;

        return {
            point: point,
            lines: [horizontalLine, verticalLine],
        };
    }
}

class Graph extends Cubicon {
    constructor({
        graphGroup,
        projectorGroup,
        position = new Vector2(0, 0),
        axes,
        path,
        func,
        xRange,
        createDuration,
    }) {
        super({ group: axes.group, position: position });

        this.graphGroup = graphGroup;
        this.projectorGroup = projectorGroup;
        this.axes = axes;

        this.stroke = path;
        this.createDuration = createDuration;

        this.xRange = xRange;

        this.func = func;
    }
}

/// Defining Label class here is a bad practice,
// but I don't know any better way to make graph coords and 2D space coords work together properly.
// (Note the difference between Label's position property and MathText's one)
export class Label extends Cubicon {
    constructor({
        group,
        position = new Vector2(0, 0),
        text = "",
        color = "#fff",
        fontSize = 13,
    }) {
        super({ group: group, position: position });

        this.text = text;
        this.color = color;
        this.fontSize = fontSize;

        this.#draw();
    }

    #draw() {
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

class Point extends Cubicon {
    #Wposition;
    #Wradius;

    constructor({
        projectorGroup,
        axes,
        position = new Vector2(0, 0),
        radius,
        fillColor = "none",
        fillOpacity = 1,
        strokeColor = "#fff",
        strokeWidth = 2,
    }) {
        super({
            group: axes.group,
            position: position,
        });

        this.projectorGroup = projectorGroup;
        this.axes = axes;

        this.#Wposition = new Vector2(
            axes.xScale(position.x),
            axes.yScale(position.y)
        );

        this.radius = radius;
        this.#Wradius = axes.xScale(radius);

        this.strokeColor = strokeColor;
        this.strokeWidth = strokeWidth;

        this.fillColor = fillColor;
        this.fillOpacity = fillOpacity;

        this.#draw();
    }

    #draw() {
        this.stroke = this.projectorGroup
            .append("circle")
            .attr("class", "point")
            .attr("cx", this.#Wposition.x)
            .attr("cy", this.#Wposition.y)
            .attr("r", this.#Wradius)
            .attr("fill", this.fillColor)
            .attr("fill-opacity", this.fillOpacity)
            .attr("stroke", this.strokeColor)
            .attr("stroke-width", this.strokeWidth);
        this.stroke
            .style("transform-box", "fill-box")
            .style("transform-origin", "center");
    }
}

class ProjectLine extends Cubicon {
    #WstartPoint;
    #WendPoint;

    constructor({
        projectorGroup,
        axes,
        startPoint = { x: 0, y: 0 },
        endPoint,
        lineColor = "#fff",
        lineWidth = 2,
    }) {
        super({ group: axes.group, position: startPoint });

        this.projectorGroup = projectorGroup;
        this.axes = axes;

        this.startPoint = startPoint;
        this.#WstartPoint = new Vector2(
            axes.xScale(startPoint.x),
            axes.yScale(startPoint.y)
        );

        this.endPoint = endPoint;
        this.#WendPoint = new Vector2(
            axes.xScale(endPoint.x),
            axes.yScale(endPoint.y)
        );

        this.lineColor = lineColor;
        this.lineWidth = lineWidth;

        // Override rotateAnimTime property of Cubicon class
        this.rotateAnimTime = 2000;

        this.#draw();
    }

    #draw() {
        this.lineStroke = this.projectorGroup
            .append("line")
            .attr("class", "project-line")
            .attr("x1", this.#WstartPoint.x)
            .attr("y1", this.#WstartPoint.y)
            .attr("x2", this.#WendPoint.x)
            .attr("y2", this.#WendPoint.y)
            .attr("stroke", this.lineColor)
            .attr("stroke-width", this.lineWidth);
    }

    get WstartPoint() {
        return this.#WstartPoint;
    }
    get WendPoint() {
        return this.#WendPoint;
    }
}
