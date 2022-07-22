import { SHAPE_CONFIG } from "@cubicons/geometry/Geometry";

import { Vector2 } from "@math/vector";

import { Axes } from "./Axes";

import { Circle } from "@cubicons/geometry/Circle";

export class Point extends Circle {
    /**
     * The `</svg>` element that wraps the two axes' `</svg>`.
     */
    axes: Axes;

    constructor(params: {
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
        CONFIG?: SHAPE_CONFIG;
    }) {
        super({
            group: params.axes.group,
            position: params.position,
            radius: params.radius,
            CONFIG: params.CONFIG,
        });

        this.axes = params.axes;

        this.g_cubiconWrapper.attr("class", "point-wrapper");

        this.def_cubiconBase.attr("class", "point");
    }

    /**
     * Draw (and render) the point onto SVG.
     */
    render() {
        const xScale = this.axes.getXScale();

        const Wposition = this.axes.coordsGtoW(this.position);
        const Wradius = xScale(this.radius);

        super.applyToHTMLFlow(Wposition, Wradius);

        return this;
    }
}
