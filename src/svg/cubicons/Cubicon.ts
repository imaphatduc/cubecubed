import { Selection } from "d3-selection";
//+++++++++++++++++++++++++++++++++++++++++++++++++++//

import { Vector2 } from "@math/Vector2";

import { Group } from "@group/Group";

export interface CubiconParams<TCONFIG> {
    /**
     * The group that this cubicon belongs to.
     */
    group: Group;

    /**
     * Position of this cubicon.
     */
    position?: Vector2;

    /**
     * Config options of this cubicon.
     */
    CONFIG?: TCONFIG;
}

export interface InheritedCubiconParams<TCONFIG> {
    /**
     * Position of this cubicon.
     */
    position?: Vector2;

    /**
     * Config options of this cubicon.
     */
    CONFIG?: TCONFIG;
}

export abstract class Cubicon {
    abstract readonly cubiconType: string;

    group: Group;

    position: Vector2;

    CONFIG: object;

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
     * The `<g>` element that holds this cubicon.
     */
    g_cubiconWrapper: Selection<SVGGElement, unknown, HTMLElement, any>;

    /**
     * The SVG element that represents this cubicon.
     */
    def_cubiconBase: Selection<any, unknown, HTMLElement, any>;

    constructor(params: CubiconParams<object>) {
        this.group = params.group;

        this.position = params.position ?? new Vector2(0, 0);

        // params.CONFIG is never null or undefined, because it reverts to
        // DEFAULT_CONFIG everytime it is passed down to the constructor of
        // the Cubicon abstract class.
        this.CONFIG = params.CONFIG!;

        this.def_cubiconBase = this.group.svg_group;
    }

    /**
     * Render this cubicon.
     */
    render() {
        //
    }

    /**
     * Convert grid coordinates to pixels.
     */
    coordsGtoW(point: Vector2) {
        const { xGtoW, yGtoW } = this.group;

        return new Vector2(xGtoW(point.x), yGtoW(point.y));
    }
}
