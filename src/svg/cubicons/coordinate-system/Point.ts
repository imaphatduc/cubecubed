import { PLANE_SHAPE_CONFIG } from "@configs/geometry/PLANE_SHAPE_CONFIG";

import { InheritedCubiconParams } from "@cubicons/Cubicon";
import { Axes } from "@cubicons/coordinate-system/Axes";
import { Circle } from "@cubicons/geometry/Circle";

export interface PointParams
    extends InheritedCubiconParams<PLANE_SHAPE_CONFIG> {
    /**
     * The axes that this point belongs to.
     */
    axes: Axes;
}

export class Point extends Circle {
    axes: Axes;

    constructor(params: PointParams) {
        super({
            group: params.axes.group,

            position: params.position,

            radius: 0.06,

            CONFIG: params.CONFIG,
        });

        this.axes = params.axes;

        this.g_cubiconWrapper.attr("class", "point-wrapper");

        this.def_cubiconBase.attr("class", "point");
    }

    render() {
        const xScale = this.axes.getXScale();

        const Wposition = this.axes.coordsGtoW(this.position);
        const Wradius = xScale(this.radius);

        super.applyToHTMLFlow(Wposition, Wradius);

        return this;
    }
}
