import { range } from "d3-array";
//+++++++++++++++++++++++++++++++++++++++++++++++++++//

import { COLOR } from "@consts";
import { Vector2 } from "@math/vector";

import { Group } from "@group/Group";
import { Geometry } from "./Geometry";

export class Grid extends Geometry {
    readonly geoType = "grid";

    /**
     * Color of the grid origin.
     */
    originColor: string;

    /**
     * Color of the x axis.
     */
    xAxesColor: string;
    /**
     * Color of the y axis.
     */
    yAxesColor: string;

    /**
     * Color of the grid lines.
     */
    lineColor: string;

    /**
     * Numbers marked on the x axis.
     */
    xNumberRange = range(this.group.xBound[0] - 1, this.group.xBound[1] + 2, 1);
    /**
     * Numbers marked on the y axis.
     */
    yNumberRange = range(this.group.yBound[0], this.group.yBound[1] + 1, 1);

    /**
     * The `<g/>` tag that contains all horizontal and vertical lines.
     */
    private g_planeGrid: any;

    /**
     * The `<g/>` tag that contains all horizontal lines.
     */
    g_horizontal: any;
    /**
     * The `<g/>` tag that contains all vertical lines.
     */
    g_vertical: any;

    hasNums: boolean;

    constructor({
        group,
        hasNums = false,
    }: {
        /**
         * The group that the grid belongs to.
         */
        group: Group;
        /**
         * Whether or not to include numbers onto axes.
         */
        hasNums?: boolean;
    }) {
        super({ group: group, position: new Vector2(0, 0) });

        this.group = group;

        this.lineColor = COLOR.BLUE_2;
        this.originColor = COLOR.WHITE;
        this.xAxesColor = COLOR.RED_2;
        this.yAxesColor = COLOR.GREEN_1;

        this.elapsedTime = 0;

        this.hasNums = hasNums;
    }

    render() {
        this.checkIfRendered();
        this.isRendered = true;

        this.g_planeGrid = this.svg_group.append("g").attr("id", "plane-grid");

        this.g_horizontal = this.g_planeGrid
            .append("g")
            .attr("id", "horizontal");
        this.g_vertical = this.g_planeGrid.append("g").attr("id", "vertical");

        return this;
    }
}
