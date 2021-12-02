import { svg, svgWidth, svgHeight } from "../cubecubed";
import { xBound, yBound, xGtoW, yGtoW } from "../math/convertUnit";
import { Circle } from "./cubicon";
import { COLOR } from "./constants";

svg.append("g").attr("id", "plane-grid");
const planeGrid = svg.select("g").style("position", "absolute");
const tex = d3.select("#tex");

export class Grid {
    constructor() {
        this.lineColor = COLOR.BLUE_2;
        this.originColor = COLOR.WHITE;
        this.xAxesColor = COLOR.RED_2;
        this.yAxesColor = COLOR.GREEN_1;
        this.zAxesColor = COLOR.BLUE_1;

        this.xs = [];
        this.ys = [];
        for (let i = xBound[0]; i <= xBound[1]; i++) {
            this.xs.push(i);
            this.ys.push(i);
        }

        this.elapsedTime = 0;
    }

    drawGridFromOrigin() {
        this.#drawHorizontalLines();
        this.#drawVerticalLines();
        this.#drawOrigin();
    }

    #drawHorizontalLines() {
        const horizontalLines = planeGrid
            .append("g")
            .attr("id", "horizontal")
            .append("g")
            .attr("id", "horizontal-lines");
        horizontalLines
            .selectAll(".line-horizontal")
            .data(this.xs)
            .enter()
            .append("line")
            .transition()
            .delay(this.elapsedTime)
            .duration(1000)
            .attr("x1", (d) => xGtoW(d))
            .attr("y1", yGtoW(yBound[0]))
            .attr("x2", (d) => xGtoW(d))
            .attr("y2", yGtoW(yBound[1]))
            .attr("stroke", (d) =>
                xGtoW(d) === 0 ? this.xAxesColor : this.lineColor
            )
            .attr("stroke-width", (d) => (xGtoW(d) === 0 ? 2 : 1))
            .style("stroke-opacity", (d, i) => (i % 2 === 0 ? 1 : 0.2));
        this.elapsedTime += 1000;

        this.#placeXAxisNums();
    }

    /// This is a hyper-hardcoded (smiley face) function
    // because of flexbox display (KaTeX cannot render on SVG)
    #placeXAxisNums() {
        const delayTime = 800;
        const duration = 500;
        const xAxisNumbers = tex
            .append("span")
            .attr("id", "xAxisNumbers")
            .style("position", "relative")
            .style("display", "flex");
        xAxisNumbers
            .selectAll("p.x-axis-numbers")
            .data(this.xs.slice(1, this.xs.length - 1))
            .enter()
            .each((d) => {
                xAxisNumbers
                    .append("p")
                    .attr("class", "x-axis-numbers")
                    .style("opacity", 0)
                    .style("position", "relative")
                    .style("width", "21px")
                    .style("text-align", "center")
                    .style("left", `${xGtoW(1 / 2) - 2}px`)
                    .style("top", `${svgHeight / 2}px`)
                    .style("margin", `3px ${xGtoW(1 / 6)}px`)
                    .node().innerHTML =
                    d !== 0 ? katex.renderToString(`${d}`) : "";
            });
        xAxisNumbers
            .selectAll("p.x-axis-numbers")
            .transition()
            .delay(delayTime)
            .duration(duration)
            .style("opacity", 1);

        this.elapsedTime += duration;
    }

    #drawVerticalLines() {
        const delayTime = 200;
        const duration = 1000;
        const verticalLines = planeGrid
            .append("g")
            .attr("id", "vertical")
            .append("g")
            .attr("id", "vertical-lines");
        verticalLines
            .selectAll(".line-vertical")
            .data(this.ys)
            .enter()
            .append("line")
            .transition()
            .delay(delayTime)
            .duration(duration)
            .attr("x1", xGtoW(xBound[0]))
            .attr("y1", (d) => yGtoW(d))
            .attr("x2", xGtoW(xBound[1]))
            .attr("y2", (d) => yGtoW(d))
            .attr("stroke", (d) =>
                yGtoW(d) === 0 ? this.yAxesColor : this.lineColor
            )
            .attr("stroke-width", (d) => (yGtoW(d) === 0 ? 2 : 1))
            .style("stroke-opacity", (d, i) => (i % 2 === 0 ? 1 : 0.2));
        this.elapsedTime += duration;

        this.#placeYAxisNums();
    }

    #placeYAxisNums() {
        const offsetX = 10;
        const offsetY = 20;
        const delayTime = 800;
        const duration = 500;
        const yAxisNumbers = tex
            .append("span")
            .attr("id", "yAxisNumbers")
            .style("position", "relative");
        yAxisNumbers
            .selectAll("p.y-axis-numbers")
            .data(this.ys.slice(1, this.ys.length - 1))
            .enter()
            .each((d) => {
                yAxisNumbers
                    .append("p")
                    .attr("class", "y-axis-numbers")
                    .style("position", "absolute")
                    .style("opacity", 0)
                    .style("left", `${svgWidth / 2 + offsetX}px`)
                    .style("top", `${xGtoW(1) * d + svgHeight / 2 - offsetY}px`)
                    .node().innerHTML =
                    d !== 0 ? katex.renderToString(`${d}`) : "";
            });
        yAxisNumbers
            .selectAll("p.y-axis-numbers")
            .transition()
            .delay(delayTime)
            .duration(duration)
            .style("opacity", 1);

        this.elapsedTime += duration;
    }

    #drawOrigin() {
        new Circle({
            position: { x: 0, y: 0 },
            radius: 0.1,
            strokeColor: this.originColor,
            strokeWidth: 2,
            waitTime: 200,
        }).create();
    }
}
