import { BufferGeometry, Material, Mesh } from "three";
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
     * Config options of this cubicon.
     */
    CONFIG: TCONFIG;
}

export abstract class CanvasCubicon {
    group: CanvasGroup;

    position: Vector3;

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
     * Mesh of this cubicon.
     */
    mesh: Mesh;

    constructor(params: CanvasCubiconParams<object>) {
        this.group = params.group;

        this.position = params.position ?? new Vector3(0, 0, 0);

        this.CONFIG = params.CONFIG;
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
