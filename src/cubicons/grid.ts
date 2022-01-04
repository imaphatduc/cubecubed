import { xBound, yBound } from "../cubecubed";
import { Geometry } from "./geometry";
import { COLOR } from "./constants";
import { Vector2 } from "../math/vector";
import { Group } from "../scene/group";

export class Grid extends Geometry {
    readonly geoType = "grid";

    originColor: string;
    xAxesColor: string;
    yAxesColor: string;
    lineColor: string;

    xs: number[];
    ys: number[];

    planeGrid: any;
    horizontal: any;
    vertical: any;

    hasNums: boolean;

    constructor({
        group,
        hasNums = false,
    }: {
        group: Group;
        hasNums?: boolean;
    }) {
        super({ group: group, position: new Vector2(0, 0) });

        this.group = group;

        this.lineColor = COLOR.BLUE_2;
        this.originColor = COLOR.WHITE;
        this.xAxesColor = COLOR.RED_2;
        this.yAxesColor = COLOR.GREEN_1;

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

        this.hasNums = hasNums;
    }
}
