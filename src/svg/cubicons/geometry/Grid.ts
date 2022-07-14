import { range } from "d3-array";
//+++++++++++++++++++++++++++++++++++++++++++++++++++//

import { COLOR } from "@consts";
import { Vector2 } from "@math/vector";

import { Group } from "@group/Group";
import { Cubicon } from "@cubicons/Cubicon";

export class Grid extends Cubicon {
    readonly cubType = "grid";

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
    xNumberRange = range(this.group.xBound[0], this.group.xBound[1] + 1, 1);
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

    constructor(params: {
        /**
         * The group that the grid belongs to.
         */
        group: Group;
        /**
         * Whether or not to include numbers onto axes.
         */
        hasNums?: boolean;
    }) {
        super({ group: params.group, position: new Vector2(0, 0) });

        this.lineColor = COLOR.BLUE_2;
        this.originColor = COLOR.WHITE;
        this.xAxesColor = COLOR.RED_2;
        this.yAxesColor = COLOR.GREEN_1;

        this.hasNums = params.hasNums ?? false;
    }

    render() {
        this.g_planeGrid = this.svg_group.append("g").attr("id", "plane-grid");

        this.g_horizontal = this.g_planeGrid
            .append("g")
            .attr("id", "horizontal");
        this.g_vertical = this.g_planeGrid.append("g").attr("id", "vertical");

        return this;
    }
}
