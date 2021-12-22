import { Cubicon } from "./cubicon";
import { Circle } from "./geometry";
import { MathText } from "./text";
import { Create } from "../animations/create";
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

        const points = [];
        for (let x = xRange[0]; x <= xRange[1]; x += 0.01) {
            if (
                this.yScale(func(x)) < this.yScale(this.yRange[1] + 1) &&
                this.yScale(func(x)) > this.yScale(this.yRange[0] - 1)
            ) {
                points.push([x, func(x)]);
            }
        }

        const xScale = d3
            .scaleLinear()
            .domain(xRange)
            .range([this.xLength * xRange[0], this.xLength * xRange[1]]);

        const lineGenerator = d3
            .line()
            .curve(d3.curveNatural)
            .x((d) => xScale(d[0]))
            .y((d) => this.yScale(d[1]));

        const pathData = lineGenerator(points);

        const path = this.graphs
            .append("path")
            .style("fill", "none")
            .style("stroke", color)
            .attr("d", pathData);

        return new Graph({
            group: this.group,
            path: path,
            func: func,
            xRange: xRange,
            createDuration: createDuration,
        });
    }

    create(graphs) {
        let anims = [];
        graphs.forEach((graph) => {
            anims.push(
                new Create({ cubicon: graph, duration: graph.createDuration })
            );
        });

        this.group.play(anims);
    }

    addGraphLabel(graph, text, xPos = graph.xRange[1]) {
        const tex = new MathText({
            group: graph.group,
            position: new Vector2(
                xWtoG(this.xScale(xPos)),
                yWtoG(this.yScale(graph.func(xPos)))
            ),
            text: text,
        });
    }

    pointOnGraph(graph, xPos = 0) {
        const circle = new Circle({
            group: graph.group,
            position: new Vector2(
                xWtoG(this.xScale(xPos)),
                yWtoG(this.yScale(graph.func(xPos)))
            ),
            radius: 0.05,
        });
    }
}

class Graph extends Cubicon {
    constructor({
        group,
        position = new Vector2(0, 0),
        path,
        func,
        xRange,
        createDuration,
    }) {
        super({ group: group, position: position });

        this.stroke = path;
        this.createDuration = createDuration;

        this.xRange = xRange;

        this.func = func;
    }
}
