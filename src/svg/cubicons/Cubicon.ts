import { Selection } from "d3-selection";
//+++++++++++++++++++++++++++++++++++++++++++++++++++//

import { Vector2 } from "@math/vector";

import { Group } from "@group/Group";

export abstract class Cubicon {
    abstract readonly cubType: string;

    /**
     * The group that this cubicon belongs to.
     */
    group: Group;

    /**
     * Position of this cubicon.
     * This property changed after finishing animations (in real time).
     */
    position: Vector2;

    /**
     * The angle between this cubicon and the x axis.
     * This property changed after finishing animations (in real time).
     */
    angle = 0;

    /**
     * The sum vector of all translate vectors (if invoking translate animation).
     */
    moveVector = new Vector2(0, 0);

    /**
     * The sum of all rotate angles (if invoking rotate animation).
     */
    moveAngle = 0;

    /**
     * The `<svg/>` tag of this cubicon's group.
     */
    svg_group: Selection<SVGSVGElement, unknown, HTMLElement, any>;

    /**
     * The `<g/>` tag that holds this cubicon.
     */
    g_cubiconWrapper: Selection<SVGGElement, unknown, HTMLElement, any>;

    /**
     * The HTML tag that represents this cubicon.
     */
    def_cubiconBase: Selection<any, unknown, HTMLElement, any>;

    constructor(params: { group: Group; position?: Vector2 }) {
        this.group = params.group;

        this.position = params.position ?? new Vector2(0, 0);

        this.svg_group = params.group.svg_group;

        this.def_cubiconBase = this.svg_group;
    }

    setParentSelection(
        parentSelection: Selection<SVGGElement, unknown, HTMLElement, any>
    ) {
        this.g_cubiconWrapper = parentSelection;
    }

    coordsGtoW(point: Vector2) {
        const { xGtoW, yGtoW } = this.group;

        return new Vector2(xGtoW(point.x), yGtoW(point.y));
    }
}
