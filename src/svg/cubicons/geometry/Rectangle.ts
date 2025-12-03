import { range } from "d3-array";
import { path } from "d3-path";
//+++++++++++++++++++++++++++++++++++++++++++++++++++//

import { COLOR } from "@consts";

import configFactory from "@utils/configFactory";

import { Vector2 } from "@math/Vector2";

import {
    PLANE_SHAPE_CONFIG,
    PLANE_SHAPE_DEFAULT_CONFIG,
} from "@configs/geometry/PLANE_SHAPE_CONFIG";

import { Cubicon, CubiconParams } from "@cubicons/Cubicon";
import { Line } from "@cubicons/geometry/Line";

export type RECT_GRID_DATA = {
    horizontalLines: Line[];
    verticalLines: Line[];
};

export type RECT_INNER_LINE_POINTS = {
    startPoint: Vector2;
    endPoint: Vector2;
};

export interface RectangleParams extends CubiconParams<PLANE_SHAPE_CONFIG> {
    /**
     * Width of this rectangle.
     */
    width: number;

    /**
     * Height of this rectangle.
     */
    height: number;
}

export class Rectangle extends Cubicon {
    readonly cubiconType = "Rectangle";

    width: number;

    height: number;

    declare CONFIG: PLANE_SHAPE_CONFIG;

    constructor(params: RectangleParams) {
        super({
            group: params.group,

            position: params.position,

            CONFIG: configFactory(PLANE_SHAPE_DEFAULT_CONFIG, params.CONFIG),
        });

        this.width = params.width;

        this.height = params.height;

        this.g_cubiconWrapper = this.group.svg_group
            .append("g")
            .attr("class", "rectangle-wrapper")
            .style("transform-box", "fill-box")
            .style("transform-origin", "center");

        this.def_cubiconBase = this.g_cubiconWrapper
            .append("path")
            .attr("class", "rectangle")
            .style("transform-box", "fill-box")
            .style("transform-origin", "center");
    }

    render() {
        const path = this.definePath();

        this.def_cubiconBase
            .attr("d", path.toString())
            .attr("fill", this.CONFIG.fillColor!)
            .attr("fill-opacity", this.CONFIG.fillOpacity!)
            .attr("stroke", this.CONFIG.strokeColor!)
            .attr("stroke-width", this.CONFIG.strokeWidth!);

        return this;
    }

    private definePath() {
        const { X, Y } = this.getPathOrigin();

        const { Wwidth, Wheight } = this.getWwidthAndWheight();

        const rectPath = path();

        rectPath.moveTo(X, Y);
        rectPath.lineTo(X + Wwidth, Y);
        rectPath.lineTo(X + Wwidth, Y - Wheight);
        rectPath.lineTo(X, Y - Wheight);
        rectPath.lineTo(X, Y + (this.CONFIG.strokeWidth ?? 0) / 2);

        return rectPath;
    }

    private getPathOrigin() {
        const Wposition = this.coordsGtoW(this.position);

        const { Wwidth, Wheight } = this.getWwidthAndWheight();

        const X = -Wwidth / 2 + Wposition.x;
        const Y = Wheight / 2 + Wposition.y;

        return { X, Y };
    }

    private getWwidthAndWheight() {
        const { xGtoW, yGtoW } = this.group;

        const Wwidth = xGtoW(this.width);
        const Wheight = yGtoW(this.height);

        return { Wwidth, Wheight };
    }

    /**
     * Draw a grid inside the rectangle.
     *
     * @returns A complex data type to specify in DrawInnerGrid() animation.
     */
    drawInnerGrid(): RECT_GRID_DATA {
        const xLower = -this.width / 2;
        const xUpper = this.width / 2;
        const yLower = -this.height / 2;
        const yUpper = this.height / 2;

        const horizontalLinePoints = this.horizontalLinePoints(
            [xLower, xUpper],
            [yLower, yUpper]
        );

        const verticalLinePoints = this.verticalLinePoints(
            [xLower, xUpper],
            [yLower, yUpper]
        );

        return {
            horizontalLines: this.innerLines(horizontalLinePoints),
            verticalLines: this.innerLines(verticalLinePoints),
        };
    }

    private innerLines(points: RECT_INNER_LINE_POINTS[]) {
        const lines = points.map(({ startPoint, endPoint }) =>
            new Line({
                group: this.group,
                startPoint: startPoint,
                endPoint: endPoint,
                CONFIG: {
                    lineColor: COLOR.BLUE_1,
                    lineWidth: 1,
                },
            }).render()
        );

        return lines;
    }

    private horizontalLinePoints(
        xRange: [number, number],
        yRange: [number, number]
    ): RECT_INNER_LINE_POINTS[] {
        const [xLower, xUpper] = xRange;
        const [yLower, yUpper] = yRange;

        return range(yLower + 1, yUpper).map((y) => ({
            startPoint: new Vector2(xLower, y).add(this.position),
            endPoint: new Vector2(xUpper, y).add(this.position),
        }));
    }

    private verticalLinePoints(
        xRange: [number, number],
        yRange: [number, number]
    ): RECT_INNER_LINE_POINTS[] {
        const [xLower, xUpper] = xRange;
        const [yLower, yUpper] = yRange;

        return range(xLower + 1, xUpper).map((x) => ({
            startPoint: new Vector2(x, yLower).add(this.position),
            endPoint: new Vector2(x, yUpper).add(this.position),
        }));
    }
}
