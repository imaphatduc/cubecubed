import { range } from "d3-array";
import { path } from "d3-path";
//+++++++++++++++++++++++++++++++++++++++++++++++++++//

import { COLOR } from "@consts";
import { SHAPE_CONFIG, SHAPE_DEFAULT_CONFIG } from "./Geometry";

import { Vector2 } from "@math/vector";

import { Group } from "@group/Group";
import { Geometry } from "./Geometry";
import { Square } from "./Square";
import { Line } from "./Line";

/**
 * Return data when calling Rectangle().drawInnerGrid()
 * or Square().drawInnerGrid() method
 */
export type RECT_GRID_DATA = {
    cubicon: Rectangle | Square;
    horizontalLines: Line[];
    verticalLines: Line[];
};

/**
 * Return the barebone of a rectangle shape.
 */
export class Rectangle extends Geometry {
    /**
     * Geometry type of the rectangle.
     */
    readonly geoType = "rectangle";

    /**
     * Width of the rectangle (in grid coordinate system).
     */
    readonly width: number;
    /**
     * Height of the rectangle (in grid coordinate system).
     */
    readonly height: number;

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

        ({
            fillColor: this.fillColor = SHAPE_DEFAULT_CONFIG.fillColor,
            fillOpacity: this.fillOpacity = SHAPE_DEFAULT_CONFIG.fillOpacity,
            strokeColor: this.strokeColor = SHAPE_DEFAULT_CONFIG.strokeColor,
            strokeWidth: this.strokeWidth = SHAPE_DEFAULT_CONFIG.strokeWidth,
        } = params.CONFIG ?? SHAPE_DEFAULT_CONFIG);

        this.g_cubiconWrapper = this.svg_group
            .append("g")
            .attr("class", `rectangle-wrapper`)
            .style("transform-box", "fill-box")
            .style("transform-origin", `center`);

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
            .attr("stroke", this.strokeColor)
            .attr("stroke-width", this.strokeWidth)
            .attr("fill", this.fillColor)
            .attr("fill-opacity", this.fillOpacity);

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
        rectPath.lineTo(X, Y + (this.strokeWidth ?? 0) / 2);

        return rectPath;
    }

    /**
     * Draw a grid inside the rectangle.
     *
     * @returns A complex data type to specify in DrawInnerGrid() animation.
     */
    drawInnerGrid(): RECT_GRID_DATA {
        // Create a <g/> element to hold the result grid.
        const g_drawInnerGrid = this.g_cubiconWrapper.append("g");

        const Wposition = this.coordsGtoW(this.position);
        g_drawInnerGrid
            .attr("class", "rect-inner-grid")
            .attr("transform", `translate(${Wposition.x}, ${Wposition.y})`);

        const generalParams = {
            group: this.group,
            CONFIG: {
                lineColor: COLOR.BLUE_1,
                lineWidth: 1,
            },
        };

        const horizontalLines: Line[] = [];
        for (const i of range(-this.height / 2 + 1, this.height / 2, 1)) {
            horizontalLines.push(
                new Line({
                    ...generalParams,
                    startPoint: new Vector2(-this.width / 2, i),
                    endPoint: new Vector2(this.width / 2, i),
                })
                    .render()
                    .setParentHTMLTag(g_drawInnerGrid)
            );
        }

        const verticalLines: Line[] = [];
        for (const i of range(-this.width / 2 + 1, this.width / 2, 1)) {
            verticalLines.push(
                new Line({
                    ...generalParams,
                    startPoint: new Vector2(i, -this.height / 2),
                    endPoint: new Vector2(i, this.height / 2),
                })
                    .render()
                    .setParentHTMLTag(g_drawInnerGrid)
            );
        }

        return {
            cubicon: this,
            horizontalLines: horizontalLines,
            verticalLines: verticalLines,
        };
    }
}
