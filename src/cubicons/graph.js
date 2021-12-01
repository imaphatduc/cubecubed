import { svg } from "../cubecubed";
import { xBound, yBound, xGtoW, yGtoW } from "../math/convertUnit";
import { Circle } from "./cubicon";
import { COLOR } from "./constants";

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
        svg.selectAll(".line-horizontal")
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
    }

    #drawVerticalLines() {
        svg.selectAll(".line-vertical")
            .data(this.ys)
            .enter()
            .append("line")
            .transition()
            .delay(200)
            .duration(1000)
            .attr("x1", xGtoW(xBound[0]))
            .attr("y1", (d) => yGtoW(d))
            .attr("x2", xGtoW(xBound[1]))
            .attr("y2", (d) => yGtoW(d))
            .attr("stroke", (d) =>
                yGtoW(d) === 0 ? this.yAxesColor : this.lineColor
            )
            .attr("stroke-width", (d) => (yGtoW(d) === 0 ? 2 : 1))
            .style("stroke-opacity", (d, i) => (i % 2 === 0 ? 1 : 0.2));
        this.elapsedTime += 1000;
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
