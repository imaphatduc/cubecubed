import { SHAPE_CONFIG, SHAPE_DEFAULT_CONFIG } from "./Geometry";

import { Vector2 } from "@math/vector";

import { Group } from "@group/Group";
import { Cubicon } from "@cubicons/Cubicon";

/**
 * Return the barebone of a circle shape.
 */
export class Circle extends Cubicon {
    readonly cubiconType = "Circle";

    /**
     * Radius of the rectangle (in grid coordinate system).
     */
    readonly radius: number;

    /**
     * Config options of this circle.
     */
    CONFIG: SHAPE_CONFIG;

    /**
     * @param params An object that contains options to form the circle.
     */
    constructor(params: {
        /**
         * The group that the circle belongs to.
         */
        group: Group;
        /**
         * Position of the circle.
         */
        position?: Vector2;
        /**
         * Radius of the rectangle.
         */
        radius: number;
        /**
         * Config options of the circle.
         */
        CONFIG?: SHAPE_CONFIG;
    }) {
        super({ group: params.group, position: params.position });

        this.radius = params.radius;

        this.CONFIG = {
            fillColor:
                params.CONFIG?.fillColor ?? SHAPE_DEFAULT_CONFIG.fillColor,
            fillOpacity:
                params.CONFIG?.fillOpacity ?? SHAPE_DEFAULT_CONFIG.fillOpacity,
            strokeColor:
                params.CONFIG?.strokeColor ?? SHAPE_DEFAULT_CONFIG.strokeColor,
            strokeWidth:
                params.CONFIG?.strokeWidth ?? SHAPE_DEFAULT_CONFIG.strokeWidth,
        };

        this.g_cubiconWrapper = this.svg_group
            .append("g")
            .attr("class", `circle-wrapper`)
            .style("transform-box", "fill-box")
            .style("transform-origin", `center`);

        this.def_cubiconBase = this.g_cubiconWrapper
            .append("circle")
            .attr("class", "circle")
            .style("transform-box", "fill-box")
            .style("transform-origin", "center");
    }

    /**
     * Draw (and render) the shape of this circle onto SVG.
     */
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
            radius: group.xWtoG(2.2),
        });
    }
}
