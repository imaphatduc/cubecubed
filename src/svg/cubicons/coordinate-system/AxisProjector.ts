import { Vector2 } from "@math/Vector2";

import { LINE_SHAPE_CONFIG } from "@configs/geometry/LINE_SHAPE_CONFIG";

import { InheritedCubiconParams } from "@cubicons/Cubicon";
import { Axes } from "@cubicons/coordinate-system/Axes";
import { Line } from "@cubicons/geometry/Line";

export interface AxisProjectorParams
    extends InheritedCubiconParams<LINE_SHAPE_CONFIG> {
    /**
     * The position of the point that holds this projector.
     */
    position: Vector2;

    /**
     * Is this projector horizontal or vertical?
     */
    type: "horizontal" | "vertical";

    /**
     * The axes that this projector belongs to.
     */
    axes: Axes;
}

export class AxisProjector extends Line {
    type: "horizontal" | "vertical";

    axes: Axes;

    CONFIG: LINE_SHAPE_CONFIG;

    constructor(params: AxisProjectorParams) {
        super({
            group: params.axes.group,

            startPoint: params.position,

            endPoint:
                params.type === "horizontal"
                    ? new Vector2(0, params.position.y)
                    : new Vector2(params.position.x, 0),

            CONFIG: params.CONFIG,
        });

        this.type = params.type;

        this.axes = params.axes;

        this.g_cubiconWrapper.attr("class", `${this.type}-projector-wrapper`);

        this.def_cubiconBase
            .attr("class", `${this.type}-projector-line`)
            .style("shape-rendering", "crispEdges");
    }

    render() {
        const WstartPoint = this.axes.coordsGtoW(this.position);
        const WendPoint = this.axes.coordsGtoW(this.endPoint);

        this.applyToHTMLFlow(WstartPoint, WendPoint);

        return this;
    }
}
