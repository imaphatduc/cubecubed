import { xBound, yBound } from "../cubecubed";
import { Geometry } from "./geometry";
import { COLOR } from "./constants";
import { Vector2 } from "../math/vector";
import { Group } from "../scene/group";

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
     * Array of integer x values.
     */
    xs: number[];
    /**
     * Array of integer y values.
     */
    ys: number[];

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

        this.xs = [];
        this.ys = [];
        for (let i = xBound[0] - 1; i <= xBound[1] + 1; i++) {
            this.xs.push(i);
        }
        for (let i = yBound[0]; i <= yBound[1]; i++) {
            this.ys.push(i);
        }

        this.elapsedTime = 0;

        this.hasNums = hasNums;

        this.draw();
    }

    private draw() {
        this.g_planeGrid = this.svg_group.append("g").attr("id", "plane-grid");

        this.g_horizontal = this.g_planeGrid
            .append("g")
            .attr("id", "horizontal");
        this.g_vertical = this.g_planeGrid.append("g").attr("id", "vertical");
    }
}
