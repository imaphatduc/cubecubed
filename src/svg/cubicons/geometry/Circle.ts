import configFactory from "@utils/configFactory";

import { Vector2 } from "@math/Vector2";

import { Group } from "@group/Group";

import {
    PLANE_SHAPE_CONFIG,
    PLANE_SHAPE_DEFAULT_CONFIG,
} from "@configs/geometry/PLANE_SHAPE_CONFIG";

import { Cubicon, CubiconParams } from "@cubicons/Cubicon";

export interface CircleParams extends CubiconParams<PLANE_SHAPE_CONFIG> {
    /**
     * Radius of this circle.
     */
    radius: number;
}

export class Circle extends Cubicon {
    readonly cubiconType = "Circle";

    readonly radius: number;

    CONFIG: PLANE_SHAPE_CONFIG;

    constructor(params: CircleParams) {
        super({
            group: params.group,

            position: params.position,

            CONFIG: configFactory(params.CONFIG, PLANE_SHAPE_DEFAULT_CONFIG),
        });

        this.radius = params.radius;

        this.g_cubiconWrapper = this.svg_group
            .append("g")
            .attr("class", "circle-wrapper")
            .style("transform-box", "fill-box")
            .style("transform-origin", "center");

        this.def_cubiconBase = this.g_cubiconWrapper
            .append("circle")
            .attr("class", "circle")
            .style("transform-box", "fill-box")
            .style("transform-origin", "center");
    }

    render() {
        const Wposition = this.coordsGtoW(this.position);

        const Wradius = this.group.xGtoW(this.radius);

        this.applyToHTMLFlow(Wposition, Wradius);

        return this;
    }

    protected applyToHTMLFlow(Wposition: Vector2, Wradius: number) {
        this.def_cubiconBase
            .attr("cx", Wposition.x)
            .attr("cy", Wposition.y)
            .attr("r", Wradius)
            .attr("fill", this.CONFIG.fillColor!)
            .attr("fill-opacity", this.CONFIG.fillOpacity!)
            .attr("stroke", this.CONFIG.strokeColor!)
            .attr("stroke-width", this.CONFIG.strokeWidth!);
    }
}

export class GridOrigin extends Circle {
    constructor(group: Group) {
        super({
            group: group,

            radius: group.xWtoG(5),

            CONFIG: PLANE_SHAPE_DEFAULT_CONFIG,
        });
    }
}
