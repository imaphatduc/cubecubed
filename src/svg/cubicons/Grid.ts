import { range } from "d3-array";
import { Selection } from "d3-selection";
//+++++++++++++++++++++++++++++++++++++++++++++++++++//

import { COLOR } from "@consts";

import configFactory from "@utils/configFactory";

import { Vector2 } from "@math/Vector2";

import { Cubicon, CubiconParams } from "@cubicons/Cubicon";
import { GridOrigin } from "@cubicons/geometry/Circle";
import { Line, VerticesMapFunction } from "./geometry/Line";

export interface GRID_CONFIG {
    hasNums?: boolean;

    /**
     * Color of the x axis.
     */
    xAxesColor?: string;

    /**
     * Color of the y axis.
     */
    yAxesColor?: string;

    /**
     * Color of the grid lines.
     */
    lineColor?: string;
}

export const GRID_DEFAULT_CONFIG: GRID_CONFIG = {
    lineColor: COLOR.BLUE_2,
    xAxesColor: COLOR.RED_2,
    yAxesColor: COLOR.GREEN_1,
    hasNums: false,
};

export class Grid extends Cubicon {
    readonly cubiconType = "Grid";

    declare CONFIG: GRID_CONFIG;

    gridOrigin: GridOrigin;

    horizontalLines: Line[];

    verticalLines: Line[];

    /**
     * The `<g>` element that contains all horizontal and vertical lines.
     */
    private g_planeGrid: Selection<SVGGElement, unknown, HTMLElement, any>;

    constructor(params: CubiconParams<GRID_CONFIG>) {
        super({
            group: params.group,

            position: new Vector2(0, 0),

            CONFIG: configFactory(GRID_DEFAULT_CONFIG, params.CONFIG),
        });

        this.g_planeGrid = this.svg_group.append("g").attr("id", "plane-grid");

        this.defineHorizontalLines();
        this.defineVerticleLines();

        this.gridOrigin = new GridOrigin(this.group);
    }

    private defineHorizontalLines() {
        this.horizontalLines = this.ys.map((y) => {
            const horizontalLine = new Line({
                group: this.group,
                startPoint: new Vector2(this.xs[0], y),
                endPoint: new Vector2(this.xs[this.xs.length - 1], y),
                CONFIG: {
                    lineColor:
                        y === 0
                            ? this.CONFIG.xAxesColor!
                            : this.CONFIG.lineColor!,
                    lineWidth: y === 0 ? 2 : 1,
                },
            });

            horizontalLine.def_cubiconBase.attr(
                "opacity",
                y % 2 === 0 ? 1 : 0.2
            );

            return horizontalLine;
        });
    }

    private defineVerticleLines() {
        this.verticalLines = this.xs.map((x) => {
            const verticalLine = new Line({
                group: this.group,
                startPoint: new Vector2(x, this.ys[0]),
                endPoint: new Vector2(x, this.ys[this.ys.length - 1]),
                CONFIG: {
                    lineColor:
                        x === 0
                            ? this.CONFIG.yAxesColor!
                            : this.CONFIG.lineColor!,
                    lineWidth: x === 0 ? 2 : 1,
                },
            });

            verticalLine.def_cubiconBase.attr("opacity", x % 2 === 0 ? 1 : 0.2);

            return verticalLine;
        });
    }

    render() {
        this.horizontalLines.forEach((line) => line.render());
        this.verticalLines.forEach((line) => line.render());

        this.gridOrigin.render();

        return this;
    }

    applyFunction(func: VerticesMapFunction) {
        this.horizontalLines.forEach((line) => line.applyFunction(func));
        this.verticalLines.forEach((line) => line.applyFunction(func));
    }

    get xs() {
        return range(this.group.xBound[0], this.group.xBound[1] + 1);
    }

    get ys() {
        return range(this.group.yBound[0], this.group.yBound[1] + 1);
    }
}
