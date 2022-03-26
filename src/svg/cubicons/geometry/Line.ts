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

    protected parentGroupTag = this.svg_group;

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
        CONFIG?: LINE_CONFIG | undefined;
    }) {
        super({ group: params.group, position: params.startPoint });

        this.startPoint =
            typeof params.startPoint !== "undefined"
                ? new Vector2(params.startPoint.x, params.startPoint.y)
                : new Vector2(0, 0);

        this.endPoint = new Vector2(params.endPoint.x, params.endPoint.y);

        ({
            lineColor: this.lineColor = LINE_DEFAULT_CONFIG.lineColor,
            lineWidth: this.lineWidth = LINE_DEFAULT_CONFIG.lineWidth,
        } = params.CONFIG ?? LINE_DEFAULT_CONFIG);
    }

    /**
     * Draw (and render) the shape of this line onto SVG.
     */
    render() {
        this.checkIfRendered();
        this.isRendered = true;

        const WstartPoint = this.coordsGtoW(this.startPoint);
        const WendPoint = this.coordsGtoW(this.endPoint);

        this.applyToHTMLFlow(this.parentGroupTag, WstartPoint, WendPoint);

        this.g_cubiconWrapper.attr("class", `line-wrapper`);
        this.def_cubiconBase.attr("class", "line");

        return this;
    }

    protected applyToHTMLFlow(
        parentGroupTag: any,
        WstartPoint: Vector2,
        WendPoint: Vector2
    ) {
        this.g_cubiconWrapper = parentGroupTag
            .append("g")
            .style("transform-box", "fill-box")
            .style("transform-origin", `center`);

        this.def_cubiconBase = this.g_cubiconWrapper
            .append("line")
            .attr("x1", WstartPoint.x)
            .attr("y1", WstartPoint.y)
            .attr("x2", WendPoint.x)
            .attr("y2", WendPoint.y)
            .attr("stroke", this.lineColor)
            .attr("stroke-width", this.lineWidth);
    }

    getWpoint(point: Vector2) {
        return this.coordsGtoW(point);
    }

    setParentHTMLTag(parentGroupTag: any) {
        this.g_cubiconWrapper.remove();
        this.parentGroupTag = parentGroupTag;
        this.isRendered = false;
        this.render();

        return this;
    }

    setParent(parent: Geometry) {
        this.g_cubiconWrapper.remove();
        this.parentGroupTag = parent.g_cubiconWrapper;
        this.render();

        return this;
    }
}
