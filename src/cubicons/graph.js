import { xBound, yBound, xGtoW, yGtoW } from "../math/convertUnit";
import { GridOrigin } from "./cubicon";
import { svg, COLOR } from "./constants";

const planeGrid = svg
    .append("g")
    .attr("id", "plane-grid")
    .style("position", "absolute");
const horizontal = planeGrid.append("g").attr("id", "horizontal");
const vertical = planeGrid.append("g").attr("id", "vertical");

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
        }
        for (let i = yBound[0]; i <= yBound[1]; i++) {
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
        const horizontalLines = horizontal
            .append("g")
            .attr("id", "horizontal-lines");
        horizontalLines
            .selectAll(".line-horizontal")
            .data(this.ys)
            .enter()
            .append("line")
            .transition()
            .delay(this.elapsedTime)
            .duration(1000)
            .attr("x1", xGtoW(xBound[0]))
            .attr("y1", (d) => yGtoW(d))
            .attr("x2", xGtoW(xBound[1]))
            .attr("y2", (d) => yGtoW(d))
            .attr("stroke", (d) =>
                xGtoW(d) === 0 ? this.xAxesColor : this.lineColor
            )
            .attr("stroke-width", (d) => (xGtoW(d) === 0 ? 2 : 1))
            .style("stroke-opacity", (d) => (d % 2 === 0 ? 1 : 0.2));
        this.elapsedTime += 1000;

        this.#placeXAxisNums();
    }

    /// This is a hyper-hardcoded (smiley face) function
    // because of flexbox display (KaTeX cannot render on SVG)
    #placeXAxisNums() {
        const xNumWidth = 30;
        const xNumHeight = 20;

        const offsetX = xNumWidth / 2;

        const delayTime = 800;
        const duration = 500;

        const xAxisNumbers = horizontal
            .append("g")
            .attr("id", "x-axis-numbers");
        xAxisNumbers
            .selectAll("foreignObject.x-axis-number")
            .data(this.xs.slice(1, this.xs.length - 1))
            .enter()
            .each((d) => {
                xAxisNumbers
                    .append("foreignObject")
                    .attr("class", "x-axis-number")
                    .attr("x", `${xGtoW(1) * d - offsetX}`)
                    .attr("y", 0)
                    .attr("width", xNumWidth)
                    .attr("height", xNumHeight)
                    .attr("transform", "scale(1,-1)")
                    .style("text-align", "center")
                    .append("xhtml:text")
                    .transition()
                    .duration(duration)
                    .delay(delayTime)
                    .style("color", "#fff")
                    .node().innerHTML =
                    d !== 0 ? katex.renderToString(`${d}`) : "";
            });

        this.elapsedTime += duration;
    }

    #drawVerticalLines() {
        const delayTime = 200;
        const duration = 1000;
        const verticalLines = vertical.append("g").attr("id", "vertical-lines");
        verticalLines
            .selectAll(".line-vertical")
            .data(this.xs)
            .enter()
            .append("line")
            .transition()
            .delay(delayTime)
            .duration(duration)
            .attr("x1", (d) => xGtoW(d))
            .attr("y1", yGtoW(yBound[0]))
            .attr("x2", (d) => xGtoW(d))
            .attr("y2", yGtoW(yBound[1]))
            .attr("stroke", (d) =>
                yGtoW(d) === 0 ? this.yAxesColor : this.lineColor
            )
            .attr("stroke-width", (d) => (yGtoW(d) === 0 ? 2 : 1))
            .style("stroke-opacity", (d) => (d % 2 === 0 ? 1 : 0.2));
        this.elapsedTime += duration;

        this.#placeYAxisNums();
    }

    #placeYAxisNums() {
        const yNumWidth = 30;
        const yNumHeight = 20;

        const offsetY = yNumHeight / 2;

        const delayTime = 800;
        const duration = 500;

        const yAxisNumbers = vertical.append("g").attr("id", "y-axis-numbers");
        yAxisNumbers
            .selectAll("foreignObject.y-axis-number")
            .data(this.ys.slice(1, this.ys.length - 1))
            .enter()
            .each((d) => {
                yAxisNumbers
                    .append("foreignObject")
                    .attr("class", "y-axis-number")
                    .attr("x", 0)
                    .attr("y", `${yGtoW(-1) * d - offsetY}`)
                    .attr("width", yNumWidth)
                    .attr("height", yNumHeight)
                    .attr("transform", "scale(1,-1)")
                    .style("text-align", "center")
                    .append("xhtml:text")
                    .transition()
                    .duration(duration)
                    .delay(delayTime)
                    .style("color", "#fff")
                    .node().innerHTML =
                    d !== 0 ? katex.renderToString(`${d}`) : "";
            });

        this.elapsedTime += duration;
    }

    #drawOrigin() {
        new GridOrigin().create();
    }
}
