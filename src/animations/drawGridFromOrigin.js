import { Animation } from "./animation";
import { xBound, yBound } from "../cubecubed";
import { Create } from "./create";
import { GridOrigin } from "../cubicons/geometry";
import { xGtoW, yGtoW } from "../math/convertUnit";

export class DrawGridFromOrigin extends Animation {
    constructor(grid) {
        super();

        this.drawX = 1000;
        this.drawXNums = 500;
        this.drawXNumsDelay = 800;

        this.drawY = 1000;
        this.drawYDelay = 200;
        this.drawYNums = 500;
        this.drawYNumsDelay = 800;

        this.duration = Math.max(
            Math.max(this.drawX, this.drawXNums + this.drawXNumsDelay),
            Math.max(
                this.drawY + this.drawYDelay,
                this.drawYNums + this.drawYNumsDelay
            )
        );

        this.cubicon = grid;

        this.hasNums = grid.hasNums;
    }

    play(waitTime) {
        this.#drawHorizontalLines(this.cubicon, this.hasNums, waitTime);
        this.#drawVerticalLines(this.cubicon, this.hasNums, waitTime);
        this.#drawOrigin(this.cubicon, waitTime);

        this.cubicon.elapsedTime += this.duration + waitTime;
    }

    #drawHorizontalLines(grid, hasNums, waitTime) {
        const horizontalLines = grid.horizontal
            .append("g")
            .attr("id", "horizontal-lines");
        horizontalLines
            .selectAll(".line-horizontal")
            .data(grid.ys)
            .enter()
            .append("line")
            .transition()
            .delay(grid.elapsedTime + waitTime)
            .duration(this.drawX)
            .attr("x1", xGtoW(xBound[0] - 1))
            .attr("y1", (d) => yGtoW(d))
            .attr("x2", xGtoW(xBound[1] + 1))
            .attr("y2", (d) => yGtoW(d))
            .attr("stroke", (d) =>
                xGtoW(d) === 0 ? grid.xAxesColor : grid.lineColor
            )
            .attr("stroke-width", (d) => (xGtoW(d) === 0 ? 2 : 1))
            .style("stroke-opacity", (d) => (d % 2 === 0 ? 1 : 0.2));

        if (hasNums) this.#placeXAxisNums(grid, waitTime);
    }

    #placeXAxisNums(grid, waitTime) {
        const xNumWidth = 30;
        const xNumHeight = 20;

        const offsetX = xNumWidth / 2;

        const xAxisNumbers = grid.horizontal
            .append("g")
            .attr("id", "x-axis-numbers");
        xAxisNumbers
            .selectAll("foreignObject.x-axis-number")
            .data(grid.xs.slice(2, grid.xs.length - 2))
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
                    .attr("opacity", 0)
                    .style("text-align", "center")
                    .append("xhtml:text")
                    .style("color", "#fff")
                    .node().innerHTML =
                    d !== 0 ? katex.renderToString(`${d}`) : "";
            });
        xAxisNumbers
            .selectAll("foreignObject.x-axis-number")
            .transition()
            .duration(this.drawXNums)
            .delay(grid.elapsedTime + this.drawXNumsDelay + waitTime)
            .attr("opacity", 1);
    }

    #drawVerticalLines(grid, hasNums, waitTime) {
        const verticalLines = grid.vertical
            .append("g")
            .attr("id", "vertical-lines");
        verticalLines
            .selectAll(".line-vertical")
            .data(grid.xs)
            .enter()
            .append("line")
            .transition()
            .delay(grid.elapsedTime + this.drawYDelay + waitTime)
            .duration(this.drawY)
            .attr("x1", (d) => xGtoW(d))
            .attr("y1", yGtoW(yBound[0]))
            .attr("x2", (d) => xGtoW(d))
            .attr("y2", yGtoW(yBound[1]))
            .attr("stroke", (d) =>
                yGtoW(d) === 0 ? grid.yAxesColor : grid.lineColor
            )
            .attr("stroke-width", (d) => (yGtoW(d) === 0 ? 2 : 1))
            .style("stroke-opacity", (d) => (d % 2 === 0 ? 1 : 0.2));

        if (hasNums) this.#placeYAxisNums(grid, waitTime);
    }

    #placeYAxisNums(grid, waitTime) {
        const yNumWidth = 30;
        const yNumHeight = 20;

        const offsetY = yNumHeight / 2;

        const yAxisNumbers = grid.vertical
            .append("g")
            .attr("id", "y-axis-numbers");
        yAxisNumbers
            .selectAll("foreignObject.y-axis-number")
            .data(grid.ys.slice(1, grid.ys.length - 1))
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
                    .attr("opacity", 0)
                    .style("text-align", "center")
                    .append("xhtml:text")
                    .style("color", "#fff")
                    .node().innerHTML =
                    d !== 0 ? katex.renderToString(`${d}`) : "";
            });
        yAxisNumbers
            .selectAll("foreignObject.y-axis-number")
            .transition()
            .duration(this.drawYNums)
            .delay(grid.elapsedTime + this.drawYNumsDelay + waitTime)
            .attr("opacity", 1);
    }

    #drawOrigin(grid) {
        grid.group.play([
            new Create({
                cubicon: new GridOrigin({
                    group: grid.group,
                }),
            }),
        ]);
    }
}
