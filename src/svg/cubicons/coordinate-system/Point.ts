import { SHAPE_CONFIG } from "@cubicons/geometry/Geometry";

import { Vector2 } from "@math/vector";

import { Axes } from "./Axes";
import { Graph } from "./Graph";

import { Circle } from "@cubicons/geometry/Circle";

export class Point extends Circle {
    readonly coordSysObjType = "point";

    /**
     * The `</svg>` element that wraps the two axes' `</svg>`.
     */
    axes: Axes;

    constructor(params: {
        /**
         * Parent of this point. (i.e. The cubicon on which this point should be put)
         */
        parent?: Graph | undefined;
        /**
         * The `</svg>` element that wraps the two axes' `</svg>`.
         */
        axes: Axes;
        /**
         * Position of the point.
         */
        position: Vector2;
        /**
         * Radius of the point.
         */
        radius: number;
        /**
         * Config options of the point.
         */
        CONFIG?: SHAPE_CONFIG | undefined;
    }) {
        super({
            group: params.axes.group,
            position: params.position,
            radius: params.radius,
            CONFIG: params.CONFIG,
        });

        this.g_cubiconWrapper =
            typeof params.parent !== "undefined"
                ? params.parent.g_projector
                : params.axes.g_cubiconWrapper;
        this.axes = params.axes;
    }

    /**
     * Draw (and render) the point onto SVG.
     */
    render() {
        this.checkIfRendered();
        this.isRendered = true;

        const Wposition = this.axes.coordsGtoW(this.position);
        const Wradius = this.axes.xScale(this.radius);

        super.applyToHTMLFlow(this.g_cubiconWrapper, Wposition, Wradius);

        this.def_cubiconBase.attr("class", "point");

        return this;
    }
}
