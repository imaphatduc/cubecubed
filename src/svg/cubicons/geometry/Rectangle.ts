import { range } from "d3-array";
import { path } from "d3-path";
//+++++++++++++++++++++++++++++++++++++++++++++++++++//

import { COLOR } from "@consts";
import { SHAPE_CONFIG, SHAPE_DEFAULT_CONFIG } from "./Geometry";

import { Vector2 } from "@math/Vector2";

import { Group } from "@group/Group";
import { Cubicon } from "@cubicons/Cubicon";
import { Line } from "./Line";

/**
 * Return data when calling Rectangle().drawInnerGrid()
 * or Square().drawInnerGrid() method
 */
export type RECT_GRID_DATA = {
    horizontalLines: Line[];
    verticalLines: Line[];
};

type RECT_INNER_LINE_POINTS = {
    startPoint: Vector2;
    endPoint: Vector2;
};

/**
 * Return the barebone of a rectangle shape.
 */
export class Rectangle extends Cubicon {
    readonly cubiconType = "Rectangle";

    /**
     * Width of the rectangle (in grid coordinate system).
     */
    readonly width: number;
    /**
     * Height of the rectangle (in grid coordinate system).
     */
    readonly height: number;

    /**
     * Config options of this rectangle.
     */
    CONFIG: SHAPE_CONFIG;

    /**
     * @param params Options to form the rectangle.
     */
    constructor(params: {
        /**
         * The group that the rectangle belongs to.
         */
        group: Group;
        /**
         * Position of the rectangle.
         */
        position?: Vector2;
        /**
         * Width of the rectangle.
         */
        width: number;
        /**
         * Height of the rectangle.
         */
        height: number;
        /**
         * Config options of the rectangle.
         */
        CONFIG?: SHAPE_CONFIG;
    }) {
        super({ group: params.group, position: params.position });

        this.width = params.width;

        this.height = params.height;

        this.CONFIG = {
            fillColor:
                params.CONFIG?.fillColor ?? SHAPE_DEFAULT_CONFIG.fillColor,
            fillOpacity:
                params.CONFIG?.fillOpacity ?? SHAPE_DEFAULT_CONFIG.fillOpacity,
            strokeColor:
                params.CONFIG?.strokeColor ?? SHAPE_DEFAULT_CONFIG.strokeColor,
            strokeWidth:
                params.CONFIG?.strokeWidth ?? SHAPE_DEFAULT_CONFIG.strokeWidth,
        };

        this.g_cubiconWrapper = this.svg_group
            .append("g")
            .attr("class", "rectangle-wrapper")
            .style("transform-box", "fill-box")
            .style("transform-origin", "center");

        this.def_cubiconBase = this.g_cubiconWrapper.append("path");
    }

    /**
     * Add the shape of this rectangle onto SVG.
     */
    render() {
        const path = this.definePath();

        this.def_cubiconBase
            .attr("class", "rectangle")
            .attr("d", path.toString())
            .attr("stroke", this.CONFIG.strokeColor!)
            .attr("stroke-width", this.CONFIG.strokeWidth!)
            .attr("fill", this.CONFIG.fillColor!)
            .attr("fill-opacity", this.CONFIG.fillOpacity!);

        this.def_cubiconBase
            .style("transform-box", "fill-box")
            .style("transform-origin", "center");

        return this;
    }

    /**
     * Draw (not render) a rectangular stroke path.
     */
    private definePath() {
        const { xGtoW, yGtoW } = this.group;

        const Wposition = this.coordsGtoW(this.position);
        const Wwidth = xGtoW(this.width);
        const Wheight = yGtoW(this.height);

        // These are the coordinate of the draw origin
        const X = -Wwidth / 2 + Wposition.x;
        const Y = Wheight / 2 + Wposition.y;

        const rectPath = path();
        rectPath.moveTo(X, Y);
        rectPath.lineTo(X + Wwidth, Y);
        rectPath.lineTo(X + Wwidth, Y - Wheight);
        rectPath.lineTo(X, Y - Wheight);
        rectPath.lineTo(X, Y + (this.CONFIG.strokeWidth ?? 0) / 2);

        return rectPath;
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
    ) {
        const [xLower, xUpper] = xRange;
        const [yLower, yUpper] = yRange;

        return range(yLower, yUpper).map((y) => ({
            startPoint: new Vector2(xLower, y).add(this.position),
            endPoint: new Vector2(xUpper, y).add(this.position),
        }));
    }

    private verticalLinePoints(
        xRange: [number, number],
        yRange: [number, number]
    ) {
        const [xLower, xUpper] = xRange;
        const [yLower, yUpper] = yRange;

        return range(xLower, xUpper).map((x) => ({
            startPoint: new Vector2(x, yLower).add(this.position),
            endPoint: new Vector2(x, yUpper).add(this.position),
        }));
    }
}
