//+++++++++++++++++++++++++++++++++++++++++++++++++++//
import { Animation } from "./animation";
import { xBound, yBound } from "../cubecubed";
import { Create } from "./create";
import { GridOrigin } from "../cubicons/geometry";
import { xGtoW, yGtoW } from "../math/convertUnit";
import { Grid } from "../cubicons/grid";

export class DrawGridFromOrigin extends Animation {
    private drawX = 1000;
    private drawXNums = 500;
    private drawXNumsDelay = 800;

    private drawY = 1000;
    private drawYDelay = 200;
    private drawYNums = 500;
    private drawYNumsDelay = 800;

    private hasNums: boolean;

    constructor(grid: Grid) {
        super({ cubicon: grid });

        this.drawX = 1000;

        this.duration = Math.max(
            Math.max(this.drawX, this.drawXNums + this.drawXNumsDelay),
            Math.max(
                this.drawY + this.drawYDelay,
                this.drawYNums + this.drawYNumsDelay
            )
        );

        this.hasNums = grid.hasNums;
    }

    play(sleepTime: number) {
        this.drawHorizontalLines(this.cubicon, this.hasNums, sleepTime);
        this.drawVerticalLines(this.cubicon, this.hasNums, sleepTime);
        this.drawOrigin(this.cubicon);

        this.cubicon.elapsedTime += this.duration + sleepTime;
    }

    private drawHorizontalLines(
        grid: Grid,
        hasNums: boolean,
        sleepTime: number
    ) {
        const horizontalLines = grid.horizontal
            .append("g")
            .attr("id", "horizontal-lines");
        horizontalLines
            .selectAll(".line-horizontal")
            .data(grid.ys)
            .enter()
            .append("line")
            .transition()
            .ease(this.ease)
            .delay(grid.elapsedTime + sleepTime)
            .duration(this.drawX)
            .attr("x1", xGtoW(xBound[0] - 1))
            .attr("y1", (d: number) => yGtoW(d))
            .attr("x2", xGtoW(xBound[1] + 1))
            .attr("y2", (d: number) => yGtoW(d))
            .attr("stroke", (d: number) =>
                xGtoW(d) === 0 ? grid.xAxesColor : grid.lineColor
            )
            .attr("stroke-width", (d: number) => (xGtoW(d) === 0 ? 2 : 1))
            .style("stroke-opacity", (d: number) => (d % 2 === 0 ? 1 : 0.2));

        if (hasNums) this.placeXAxisNums(grid, sleepTime);
    }

    private placeXAxisNums(grid: Grid, sleepTime: number) {
        const xNumWidth = 50;
        const xNumHeight = 20;

        const offsetX = xNumWidth / 2;

        const xAxisNumbers = grid.horizontal
            .append("g")
            .attr("id", "x-axis-numbers");
        xAxisNumbers
            .selectAll("foreignObject.x-axis-number")
            .data(grid.xs.slice(2, grid.xs.length - 2))
            .enter()
            .each((d: number) => {
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
            .ease(this.ease)
            .duration(this.drawXNums)
            .delay(grid.elapsedTime + this.drawXNumsDelay + sleepTime)
            .attr("opacity", 1);
    }

    private drawVerticalLines(grid: Grid, hasNums: boolean, sleepTime: number) {
        const verticalLines = grid.vertical
            .append("g")
            .attr("id", "vertical-lines");
        verticalLines
            .selectAll(".line-vertical")
            .data(grid.xs)
            .enter()
            .append("line")
            .transition()
            .ease(this.ease)
            .delay(grid.elapsedTime + this.drawYDelay + sleepTime)
            .duration(this.drawY)
            .attr("x1", (d: number) => xGtoW(d))
            .attr("y1", yGtoW(yBound[0]))
            .attr("x2", (d: number) => xGtoW(d))
            .attr("y2", yGtoW(yBound[1]))
            .attr("stroke", (d: number) =>
                yGtoW(d) === 0 ? grid.yAxesColor : grid.lineColor
            )
            .attr("stroke-width", (d: number) => (yGtoW(d) === 0 ? 2 : 1))
            .style("stroke-opacity", (d: number) => (d % 2 === 0 ? 1 : 0.2));

        if (hasNums) this.placeYAxisNums(grid, sleepTime);
    }

    private placeYAxisNums(grid: Grid, sleepTime: number) {
        const yNumWidth = 50;
        const yNumHeight = 20;

        const offsetY = yNumHeight / 2;

        const yAxisNumbers = grid.vertical
            .append("g")
            .attr("id", "y-axis-numbers");
        yAxisNumbers
            .selectAll("foreignObject.y-axis-number")
            .data(grid.ys.slice(1, grid.ys.length - 1))
            .enter()
            .each((d: number) => {
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
            .ease(this.ease)
            .duration(this.drawYNums)
            .delay(grid.elapsedTime + this.drawYNumsDelay + sleepTime)
            .attr("opacity", 1);
    }

    private drawOrigin(grid: Grid) {
        grid.group.play([
            new Create({
                cubicon: new GridOrigin(grid.group),
            }),
        ]);
    }
}

export class DrawGridFromScreenSides extends Animation {
    private drawX = 1000;
    private drawXNums = 500;
    private drawXNumsDelay = 800;

    private drawY = 1000;
    private drawYDelay = 200;
    private drawYNums = 500;
    private drawYNumsDelay = 800;

    private xDelayEach;
    private yDelayEach;

    private hasNums: boolean;

    constructor(grid: Grid) {
        super({ cubicon: grid });

        this.drawX = 1000;
        this.drawXNums = 500;
        this.drawXNumsDelay = 800;

        this.drawY = 1000;
        this.drawYDelay = 200;
        this.drawYNums = 500;
        this.drawYNumsDelay = 800;

        this.xDelayEach = 50;
        this.yDelayEach = 20;

        this.duration = Math.max(
            Math.max(
                this.drawX + this.xDelayEach * xBound[1],
                this.drawXNums + this.drawXNumsDelay
            ),
            Math.max(
                this.drawY + this.drawYDelay + this.yDelayEach * yBound[1],
                this.drawYNums + this.drawYNumsDelay
            )
        );

        this.hasNums = grid.hasNums;
    }

    play(sleepTime: number) {
        this.drawHorizontalLines(this.cubicon, this.hasNums, sleepTime);
        this.drawVerticalLines(this.cubicon, this.hasNums, sleepTime);
        this.drawOrigin(this.cubicon);

        this.cubicon.elapsedTime += this.duration + sleepTime;
    }

    private drawHorizontalLines(
        grid: Grid,
        hasNums: boolean,
        sleepTime: number
    ) {
        const horizontalLines = grid.horizontal
            .append("g")
            .attr("id", "horizontal-lines");
        horizontalLines
            .selectAll(".line-horizontal")
            .data(grid.ys)
            .enter()
            .append("line")
            .attr("x1", xGtoW(xBound[0] - 1))
            .attr("y1", (d: number) => yGtoW(d))
            .attr("x2", xGtoW(xBound[0] - 1))
            .attr("y2", (d: number) => yGtoW(d))
            .transition()
            .ease(this.ease)
            .delay(
                (d: number) =>
                    grid.elapsedTime + sleepTime + this.xDelayEach * Math.abs(d)
            )
            .duration(this.drawX)
            .attr("x2", xGtoW(xBound[1] + 1))
            .attr("stroke", (d: number) =>
                xGtoW(d) === 0 ? grid.xAxesColor : grid.lineColor
            )
            .attr("stroke-width", (d: number) => (xGtoW(d) === 0 ? 2 : 1))
            .style("stroke-opacity", (d: number) => (d % 2 === 0 ? 1 : 0.2));

        if (hasNums) this.placeXAxisNums(grid, sleepTime);
    }

    private placeXAxisNums(grid: Grid, sleepTime: number) {
        const xNumWidth = 50;
        const xNumHeight = 20;

        const offsetX = xNumWidth / 2;

        const xAxisNumbers = grid.horizontal
            .append("g")
            .attr("id", "x-axis-numbers");
        xAxisNumbers
            .selectAll("foreignObject.x-axis-number")
            .data(grid.xs.slice(2, grid.xs.length - 2))
            .enter()
            .each((d: number) => {
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
            .ease(this.ease)
            .duration(this.drawXNums)
            .delay(grid.elapsedTime + this.drawXNumsDelay + sleepTime)
            .attr("opacity", 1);
    }

    private drawVerticalLines(grid: Grid, hasNums: boolean, sleepTime: number) {
        const verticalLines = grid.vertical
            .append("g")
            .attr("id", "vertical-lines");
        verticalLines
            .selectAll(".line-vertical")
            .data(grid.xs)
            .enter()
            .append("line")
            .attr("x1", (d: number) => xGtoW(d))
            .attr("y1", yGtoW(yBound[0]))
            .attr("x2", (d: number) => xGtoW(d))
            .attr("y2", yGtoW(yBound[0]))
            .transition()
            .ease(this.ease)
            .delay(
                (d: number) =>
                    grid.elapsedTime +
                    this.drawYDelay +
                    sleepTime +
                    this.yDelayEach * Math.abs(d)
            )
            .duration(this.drawY)
            .attr("x1", (d: number) => xGtoW(d))
            .attr("y1", yGtoW(yBound[0]))
            .attr("x2", (d: number) => xGtoW(d))
            .attr("y2", yGtoW(yBound[1]))
            .attr("stroke", (d: number) =>
                yGtoW(d) === 0 ? grid.yAxesColor : grid.lineColor
            )
            .attr("stroke-width", (d: number) => (yGtoW(d) === 0 ? 2 : 1))
            .style("stroke-opacity", (d: number) => (d % 2 === 0 ? 1 : 0.2));

        if (hasNums) this.placeYAxisNums(grid, sleepTime);
    }

    private placeYAxisNums(grid: Grid, sleepTime: number) {
        const yNumWidth = 50;
        const yNumHeight = 20;

        const offsetY = yNumHeight / 2;

        const yAxisNumbers = grid.vertical
            .append("g")
            .attr("id", "y-axis-numbers");
        yAxisNumbers
            .selectAll("foreignObject.y-axis-number")
            .data(grid.ys.slice(1, grid.ys.length - 1))
            .enter()
            .each((d: number) => {
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
            .ease(this.ease)
            .duration(this.drawYNums)
            .delay(grid.elapsedTime + this.drawYNumsDelay + sleepTime)
            .attr("opacity", 1);
    }

    drawOrigin(grid: Grid) {
        grid.group.play([
            new Create({
                cubicon: new GridOrigin(grid.group),
            }),
        ]);
    }
}
