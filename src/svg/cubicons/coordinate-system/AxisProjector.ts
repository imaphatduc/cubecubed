import { LINE_CONFIG, LINE_DEFAULT_CONFIG } from "@cubicons/geometry/Geometry";

import { Vector2 } from "@math/vector";

import { Axes } from "./Axes";
import { Point } from "./Point";

import { Line } from "@cubicons/geometry/Line";

export class AxisProjector extends Line {
    readonly coordSysObjType = "axis-projector";

    /**
     * Is this projector of type "horizontal" or "vertical"?
     */
    type: string;
    /**
     * The `</svg>` element that wraps the two axes' `</svg>`.
     */
    axes: Axes;

    protected parentGroupTag: any;

    constructor(params: {
        type: "horizontal" | "vertical";
        /**
         * The point that holds the projector.
         */
        point: Point;
        /**
         * The axes that the projector belongs to.
         */
        axes: Axes;
        /**
         * Config options of the projector.
         */
        CONFIG?: LINE_CONFIG;
    }) {
        super({
            group: params.axes.group,
            startPoint: params.point.position,
            endPoint:
                params.type === "horizontal"
                    ? new Vector2(0, params.point.position.y)
                    : new Vector2(params.point.position.x, 0),
            CONFIG: params.CONFIG,
        });

        this.parentGroupTag = params.point.g_cubiconWrapper;
        this.type = params.type;
        this.axes = params.axes;

        ({
            lineColor: this.lineColor = LINE_DEFAULT_CONFIG.lineColor,
            lineWidth: this.lineWidth = LINE_DEFAULT_CONFIG.lineWidth,
        } = params.CONFIG ?? LINE_DEFAULT_CONFIG);
    }

    /**
     * Draw (and render) the axis projectors onto SVG.
     */
    render() {
        const WstartPoint = this.axes.coordsGtoW(this.position);
        const WendPoint =
            this.type === "horizontal"
                ? this.axes.coordsGtoW(new Vector2(0, this.position.y))
                : this.axes.coordsGtoW(new Vector2(this.position.x, 0));

        this.applyToHTMLFlow(this.parentGroupTag, WstartPoint, WendPoint);

        this.g_cubiconWrapper.attr("class", `${this.type}-projector-wrapper`);
        this.def_cubiconBase
            .attr("class", `${this.type}-projector-line`)
            .style("shape-rendering", "crispEdges");

        return this;
    }

    getWpoint(point: Vector2) {
        return this.axes.coordsGtoW(point);
    }
}
