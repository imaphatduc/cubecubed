import { Animation } from "./animation";
import { Create } from "./create";
import { GridOrigin } from "../cubicons/cubicon";
import { xGtoW, yGtoW, xBound, yBound } from "../math/convertUnit";

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

    play() {
        this.#drawHorizontalLines(this.cubicon, this.hasNums);
        this.#drawVerticalLines(this.cubicon, this.hasNums);
        this.#drawOrigin(this.cubicon);

        this.cubicon.elapsedTime += this.duration;
    }

    #drawHorizontalLines(grid, hasNums) {
        const horizontalLines = grid.horizontal
            .append("g")
            .attr("id", "horizontal-lines");
        horizontalLines
            .selectAll(".line-horizontal")
            .data(grid.ys)
            .enter()
            .append("line")
            .transition()
            .delay(grid.elapsedTime)
            .duration(grid.drawX)
            .attr("x1", xGtoW(xBound[0] - 1))
            .attr("y1", (d) => yGtoW(d))
            .attr("x2", xGtoW(xBound[1] + 1))
            .attr("y2", (d) => yGtoW(d))
            .attr("stroke", (d) =>
                xGtoW(d) === 0 ? grid.xAxesColor : grid.lineColor
            )
            .attr("stroke-width", (d) => (xGtoW(d) === 0 ? 2 : 1))
            .style("stroke-opacity", (d) => (d % 2 === 0 ? 1 : 0.2));

        if (hasNums) this.#placeXAxisNums(grid);
    }

    #placeXAxisNums(grid) {
        const xNumWidth = 30;
        const xNumHeight = 20;

        const offsetX = xNumWidth / 2;

        const xAxisNumbers = grid.horizontal
            .append("g")
            .attr("id", "x-axis-numbers");
        xAxisNumbers
            .selectAll("foreignObject.x-axis-number")
            .data(grid.xs.slice(1, grid.xs.length - 1))
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
                    .duration(grid.drawXNums)
                    .delay(grid.drawXNumsDelay)
                    .style("color", "#fff")
                    .node().innerHTML =
                    d !== 0 ? katex.renderToString(`${d}`) : "";
            });
    }

    #drawVerticalLines(grid, hasNums) {
        const verticalLines = grid.vertical
            .append("g")
            .attr("id", "vertical-lines");
        verticalLines
            .selectAll(".line-vertical")
            .data(grid.xs)
            .enter()
            .append("line")
            .transition()
            .delay(grid.drawYDelay)
            .duration(grid.drawY)
            .attr("x1", (d) => xGtoW(d))
            .attr("y1", yGtoW(yBound[0]))
            .attr("x2", (d) => xGtoW(d))
            .attr("y2", yGtoW(yBound[1]))
            .attr("stroke", (d) =>
                yGtoW(d) === 0 ? grid.yAxesColor : grid.lineColor
            )
            .attr("stroke-width", (d) => (yGtoW(d) === 0 ? 2 : 1))
            .style("stroke-opacity", (d) => (d % 2 === 0 ? 1 : 0.2));

        if (hasNums) this.#placeYAxisNums(grid);
    }

    #placeYAxisNums(grid) {
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
                    .style("text-align", "center")
                    .append("xhtml:text")
                    .transition()
                    .duration(grid.drawYNums)
                    .delay(grid.drawYNumsDelay)
                    .style("color", "#fff")
                    .node().innerHTML =
                    d !== 0 ? katex.renderToString(`${d}`) : "";
            });
    }

    #drawOrigin(grid) {
        grid.scene.play([
            new Create({
                cubicon: new GridOrigin({
                    scene: grid.scene,
                }),
            }),
        ]);
    }
}
