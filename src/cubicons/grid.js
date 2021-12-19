import { xBound, yBound } from "../cubecubed";
import { Cubicon } from "./cubicon";
import { COLOR } from "./constants";
import { Vector2 } from "../math/vector";

export class Grid extends Cubicon {
    constructor({ group, hasNums = false }) {
        super({ group: group, position: new Vector2(0, 0) });

        this.group = group;

        this.id = "plane-grid";

        this.lineColor = COLOR.BLUE_2;
        this.originColor = COLOR.WHITE;
        this.xAxesColor = COLOR.RED_2;
        this.yAxesColor = COLOR.GREEN_1;
        this.zAxesColor = COLOR.BLUE_1;

        this.xs = [];
        this.ys = [];
        for (let i = xBound[0] - 1; i <= xBound[1] + 1; i++) {
            this.xs.push(i);
        }
        for (let i = yBound[0]; i <= yBound[1]; i++) {
            this.ys.push(i);
        }

        this.svg = group.svg;
        this.planeGrid = this.svg
            .append("g")
            .attr("id", "plane-grid")
            .style("position", "absolute");
        this.horizontal = this.planeGrid.append("g").attr("id", "horizontal");
        this.vertical = this.planeGrid.append("g").attr("id", "vertical");

        this.elapsedTime = 0;

        this.drawTime = Math.max(
            Math.max(this.drawX, this.drawXNums + this.drawXNumsDelay),
            Math.max(
                this.drawY + this.drawYDelay,
                this.drawYNums + this.drawYNumsDelay
            )
        );

        this.hasNums = hasNums;
    }
}
