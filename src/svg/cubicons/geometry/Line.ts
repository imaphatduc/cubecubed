import { LINE_CONFIG, LINE_DEFAULT_CONFIG } from "./Geometry";

import { Vector2 } from "@math/vector";

import { Group } from "@group/Group";
import { Geometry } from "./Geometry";

/**
 * Return the barebone of a line shape.
 */
export class Line extends Geometry {
    /**
     * Geometry type of the line.
     */
    readonly geoType = "line";

    /**
     * Start point (tail) of the line.
     */
    readonly startPoint: Vector2;
    /**
     * End point (head) of the line.
     */
    readonly endPoint: Vector2;

    /**
     * Config options of this line.
     */
    CONFIG: LINE_CONFIG;

    constructor(params: {
        /**
         * The group that the line belongs to.
         */
        group: Group;
        /**
         * Start point (tail) of the line.
         */
        startPoint?: Vector2;
        /**
         * End point (head) of the line.
         */
        endPoint: Vector2;
        /**
         * Config options of the line.
         */
        CONFIG?: LINE_CONFIG;
    }) {
        super({ group: params.group, position: params.startPoint });

        this.startPoint =
            typeof params.startPoint !== "undefined"
                ? new Vector2(params.startPoint.x, params.startPoint.y)
                : new Vector2(0, 0);

        this.endPoint = new Vector2(params.endPoint.x, params.endPoint.y);

        this.CONFIG = {
            lineColor:
                params.CONFIG?.lineColor ?? LINE_DEFAULT_CONFIG.lineColor,
            lineWidth:
                params.CONFIG?.lineWidth ?? LINE_DEFAULT_CONFIG.lineWidth,
        };

        this.g_cubiconWrapper = this.svg_group
            .append("g")
            .attr("class", `line-wrapper`)
            .style("transform-box", "fill-box")
            .style("transform-origin", `center`);

        this.def_cubiconBase = this.g_cubiconWrapper
            .append("line")
            .attr("class", "line");
    }

    /**
     * Draw (and render) the shape of this line onto SVG.
     */
    render() {
        const WstartPoint = this.coordsGtoW(this.startPoint);
        const WendPoint = this.coordsGtoW(this.endPoint);

        this.applyToHTMLFlow(WstartPoint, WendPoint);

        return this;
    }

    protected applyToHTMLFlow(WstartPoint: Vector2, WendPoint: Vector2) {
        this.def_cubiconBase
            .attr("x1", WstartPoint.x)
            .attr("y1", WstartPoint.y)
            .attr("x2", WendPoint.x)
            .attr("y2", WendPoint.y)
            .attr("stroke", this.CONFIG.lineColor)
            .attr("stroke-width", this.CONFIG.lineWidth);
    }

    getWpoint(point: Vector2) {
        return this.coordsGtoW(point);
    }
}
