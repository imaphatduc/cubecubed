import { Cubicon } from "./cubicon";
import { svgHeight } from "./constants";
import { Create } from "../animations/create";

export class Axes extends Cubicon {
    constructor({
        group,
        position = { x: 0, y: 0 },
        xRange = [0, 0],
        yRange = [0, 0],
        hasNums = false,
    }) {
        super({ group: group, position: position });

        this.xRange = xRange;
        this.yRange = yRange;

        this.func = [];

        this.unitLength = 80;

        this.xScale = d3
            .scaleLinear()
            .domain(this.xRange)
            .range([
                this.unitLength * this.xRange[0],
                this.unitLength * this.xRange[1],
            ]);
        this.yScale = d3
            .scaleLinear()
            .domain(this.yRange)
            .range([
                this.unitLength * this.yRange[0],
                this.unitLength * this.yRange[1],
            ]);

        this.hasNums = hasNums;

        this.#draw();
    }

    #draw() {
        this.coordinate = this.svg.append("g").attr("class", "xy-coordinate");
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
            .attr("transform", "scale(1, -1)")
            .style("font-size", "inherit")
            .style("color", "#fff")
            .style("stroke", "none")
            .call(yAxis);
        this.yAxes.selectAll(".tick text").style("font-family", "KaTeX_Main");
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
                this.yScale(func(x)) < svgHeight / 2 &&
                this.yScale(func(x)) > -svgHeight / 2
            ) {
                points.push([x, func(x)]);
            }
        }

        const xScale = d3
            .scaleLinear()
            .domain(xRange)
            .range([this.unitLength * xRange[0], this.unitLength * xRange[1]]);

        const lineGenerator = d3
            .line()
            .curve(d3.curveNatural)
            .x((d) => xScale(d[0]))
            .y((d) => this.yScale(d[1]));

        const pathData = lineGenerator(points);

        const graph = this.graphs
            .append("path")
            .style("fill", "none")
            .style("stroke", color)
            .attr("d", pathData);

        return new Graph({
            group: this.group,
            graph: graph,
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
}

class Graph extends Cubicon {
    constructor({ group, position = { x: 0, y: 0 }, graph, createDuration }) {
        super({ group: group, position: position });

        this.stroke = graph;
        this.createDuration = createDuration;
    }
}
