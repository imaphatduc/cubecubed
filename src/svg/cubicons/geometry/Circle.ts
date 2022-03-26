import { SHAPE_CONFIG, SHAPE_DEFAULT_CONFIG } from "./Geometry";

import { Vector2 } from "../../../math/vector";

import { Group } from "../../group/Group";
import { Geometry } from "./Geometry";

/**
 * Return the barebone of a circle shape.
 */
export class Circle extends Geometry {
    /**
     * Geometry type of the circle.
     */
    readonly geoType = "circle";

    /**
     * Radius of the rectangle (in grid coordinate system).
     */
    readonly radius: number;

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
        CONFIG?: SHAPE_CONFIG | undefined;
    }) {
        super({ group: params.group, position: params.position });

        this.radius = params.radius;

        ({
            fillColor: this.fillColor = SHAPE_DEFAULT_CONFIG.fillColor,
            fillOpacity: this.fillOpacity = SHAPE_DEFAULT_CONFIG.fillOpacity,
            strokeColor: this.strokeColor = SHAPE_DEFAULT_CONFIG.strokeColor,
            strokeWidth: this.strokeWidth = SHAPE_DEFAULT_CONFIG.strokeWidth,
        } = params.CONFIG ?? SHAPE_DEFAULT_CONFIG);
    }

    /**
     * Draw (and render) the shape of this circle onto SVG.
     */
    render() {
        const { xGtoW } = this.group;

        this.checkIfRendered();
        this.isRendered = true;

        this.g_cubiconWrapper = this.svg_group
            .append("g")
            .attr("class", `circle-wrapper`)
            .style("transform-box", "fill-box")
            .style("transform-origin", `center`);

        const Wposition = this.coordsGtoW(this.position);
        const Wradius = xGtoW(this.radius);

        this.applyToHTMLFlow(this.g_cubiconWrapper, Wposition, Wradius);

        this.def_cubiconBase.attr("class", "circle");

        return this;
    }

    protected applyToHTMLFlow(
        g_cubiconWrapper: any,
        Wposition: Vector2,
        Wradius: number
    ) {
        this.def_cubiconBase = g_cubiconWrapper
            .append("circle")
            .attr("cx", Wposition.x)
            .attr("cy", Wposition.y)
            .attr("r", Wradius)
            .attr("fill", this.fillColor)
            .attr("fill-opacity", this.fillOpacity)
            .attr("stroke", this.strokeColor)
            .attr("stroke-width", this.strokeWidth);

        this.def_cubiconBase
            .style("transform-box", "fill-box")
            .style("transform-origin", "center");
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
