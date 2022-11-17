import { BufferGeometry, Line, Material, Mesh, Object3D } from "three";
//+++++++++++++++++++++++++++++++++++++++++++++++++++//

import { Vector3 } from "@math/Vector3";

import { CanvasGroup } from "@group/CanvasGroup";

export interface CanvasCubiconParams<TCONFIG> {
    /**
     * The group that this cubicon belongs to.
     */
    group: CanvasGroup;

    /**
     * Position of this cubicon.
     */
    position?: Vector3;

    /**
     * Scale the position vector of this cubicon by this number.
     */
    scaleFactor?: number;

    /**
     * Config options of this cubicon.
     */
    CONFIG?: TCONFIG;
}

export abstract class CanvasCubicon {
    group: CanvasGroup;

    position: Vector3;

    scaleFactor: number;

    CONFIG: object;

    /**
     * Geometry of this cubicon.
     */
    geometry: BufferGeometry;

    /**
     * Material of this cubicon.
     */
    material: Material;

    /**
     * Object representing this cubicon.
     */
    object: Mesh | Line;

    constructor(params: CanvasCubiconParams<object>) {
        this.group = params.group;

        this.position = params.position ?? new Vector3(0, 0, 0);

        this.scaleFactor = params.scaleFactor ?? 1;

        // params.CONFIG is never null or undefined, because it reverts to
        // DEFAULT_CONFIG everytime it is passed down to the constructor of
        // the CanvasCubicon abstract class.
        this.CONFIG = params.CONFIG!;
    }

    /**
     * Render this cubicon.
     *
     * @internal
     */
    render() {
        //
    }
}
