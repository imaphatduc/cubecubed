import { LINE_CONFIG, LINE_DEFAULT_CONFIG } from "@cubicons/geometry/Geometry";

import { Vector2 } from "@math/Vector2";

import { Axes } from "./Axes";

import { Line } from "@cubicons/geometry/Line";

export class AxisProjector extends Line {
    /**
     * Is this projector of type "horizontal" or "vertical"?
     */
    type: "horizontal" | "vertical";
    /**
     * The `</svg>` element that wraps the two axes' `</svg>`.
     */
    axes: Axes;

    /**
     * Config options of this axis projector.
     */
    CONFIG: LINE_CONFIG;

    constructor(params: {
        type: "horizontal" | "vertical";
        /**
         * The coordinates of the point that holds the projector.
         */
        coordinates: Vector2;
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
            startPoint: params.coordinates,
            endPoint:
                params.type === "horizontal"
                    ? new Vector2(0, params.coordinates.y)
                    : new Vector2(params.coordinates.x, 0),
            CONFIG: params.CONFIG,
        });

        this.type = params.type;
        this.axes = params.axes;

        this.CONFIG = {
            lineColor:
                params.CONFIG?.lineColor ?? LINE_DEFAULT_CONFIG.lineColor,
            lineWidth:
                params.CONFIG?.lineWidth ?? LINE_DEFAULT_CONFIG.lineWidth,
        };

        this.g_cubiconWrapper.attr("class", `${this.type}-projector-wrapper`);

        this.def_cubiconBase
            .attr("class", `${this.type}-projector-line`)
            .style("shape-rendering", "crispEdges");
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

        this.applyToHTMLFlow(WstartPoint, WendPoint);

        return this;
    }

    getWpoint(point: Vector2) {
        return this.axes.coordsGtoW(point);
    }
}
