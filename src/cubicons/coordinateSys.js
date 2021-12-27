import * as d3 from "d3";
import { Cubicon } from "./cubicon";
import { MathText } from "./text";
import { xWtoG, yWtoG } from "../math/convertUnit";
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

        let xAxis = d3
            .axisBottom(this.xScale)
            .tickValues(
                d3
                    .range(this.xRange[0], this.xRange[1] + 1, 1)
                    .filter((t) => t !== 0)
            );
        this.xAxes = this.axes
            .append("g")
            .attr("transform", "scale(1, -1)")
            .style("font-size", "inherit")
            .style("color", "#fff")
            .style("stroke", "none")
            .call(xAxis);
        this.xAxes.selectAll(".tick text").style("font-family", "KaTeX_Main");
        this.xAxes.selectAll(".tick line").attr("y1", -5).attr("y2", 5);

        let yAxis = d3
            .axisRight(this.yScale)
            .tickValues(
                d3
                    .range(this.yRange[0], this.yRange[1] + 1, 1)
                    .filter((t) => t !== 0)
            )
            .tickFormat(d3.format("0"));

        this.yAxes = this.axes
            .append("g")
            .style("font-size", "inherit")
            .style("color", "#fff")
            .style("stroke", "none")
            .call(yAxis);
        this.yAxes
            .selectAll(".tick text")
            .attr("transform", "scale(1, -1)")
            .style("font-family", "KaTeX_Main");
        this.yAxes.selectAll(".tick line").attr("x1", -5).attr("x2", 5);

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

        const path = this.graphs
            .append("path")
            .style("fill", "none")
            .style("stroke", color)
            .attr("d", pathData);

        return new Graph({
            group: this.group,
            axes: this,
            path: path,
            func: func,
            points: points,
            xRange: xRange,
            xScale: xScale,
            createDuration: createDuration,
        });
    }

    addGraphLabel(graph, text, xPos = graph.xRange[1]) {
        return new MathText({
            group: graph.group,
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
            axes: graph.axes,
            startPoint: pos,
            endPoint: new Vector2(0, pos.y),
            lineWidth: 1,
        });
        horizontalLine.lineStroke.style("shape-rendering", "crispEdges");
        // .style("stroke-dasharray", 5);

        let verticalLine = new ProjectLine({
            axes: graph.axes,
            startPoint: pos,
            endPoint: new Vector2(pos.x, 0),
            lineWidth: 1,
        });
        verticalLine.lineStroke.style("shape-rendering", "crispEdges");
        // .style("stroke-dasharray", 3);

        const point = this.pointOnGraph(graph, xPos).point;

        return {
            point: point,
            lines: [horizontalLine, verticalLine],
        };
    }
}

class Graph extends Cubicon {
    constructor({
        group,
        position = new Vector2(0, 0),
        axes,
        path,
        func,
        points,
        xRange,
        xScale,
        createDuration,
    }) {
        super({ group: group, position: position });

        this.axes = axes;

        this.stroke = path;
        this.createDuration = createDuration;

        this.xRange = xRange;
        this.xScale = xScale;

        this.func = func;
        this.points = points;
    }
}

class Point extends Cubicon {
    constructor({
        axes,
        position = new Vector2(0, 0),
        radius,
        fillColor = "none",
        fillOpacity = 1,
        strokeColor = "#fff",
        strokeWidth = 2,
    }) {
        super({ group: axes.group, position: position });

        this.cx = axes.xScale(this.position.x);
        this.cy = axes.yScale(this.position.y);

        this.radius = axes.xScale(radius);

        this.strokeColor = strokeColor;
        this.strokeWidth = strokeWidth;

        this.fillColor = fillColor;
        this.fillOpacity = fillOpacity;

        this.#draw();
    }

    #draw() {
        this.stroke = this.svg
            .append("circle")
            .attr("id", `${this.id}`)
            .attr("class", "circle")
            .attr("cx", this.cx)
            .attr("cy", this.cy)
            .attr("r", this.radius)
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
    constructor({
        axes,
        startPoint = { x: 0, y: 0 },
        endPoint,
        lineColor = "#fff",
        lineWidth = 2,
    }) {
        super({ group: axes.group, position: startPoint });

        this.startPoint = {
            x: axes.xScale(startPoint.x),
            y: axes.yScale(startPoint.y),
        };
        this.endPoint = {
            x: axes.xScale(endPoint.x),
            y: axes.yScale(endPoint.y),
        };

        this.lineColor = lineColor;
        this.lineWidth = lineWidth;

        // Override rotateAnimTime property of Cubicon class
        this.rotateAnimTime = 2000;

        this.#draw();
    }

    #draw() {
        this.lineStroke = this.svg
            .append("line")
            .attr("class", "line")
            .attr("x1", this.startPoint.x)
            .attr("y1", this.startPoint.y)
            .attr("x2", this.endPoint.x)
            .attr("y2", this.endPoint.y)
            .attr("stroke", this.lineColor)
            .attr("stroke-width", this.lineWidth);
    }
}
