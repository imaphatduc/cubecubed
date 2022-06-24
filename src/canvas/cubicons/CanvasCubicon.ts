import generateToken from "@utils/generateToken";

import { Vector3 } from "@math/vector";

import { CanvasGroup } from "@group/CanvasGroup";
import { BufferGeometry, Material, Mesh } from "three";

export abstract class CanvasCubicon {
    /**
     * The group that this cubicon belongs to.
     */
    group: CanvasGroup;

    /**
     * Position of this cubicon.
     * This property changed after finishing animations (in real time).
     */
    position: Vector3;

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

    /**
     * Scale the position vector of this cubicon by this number.
     */
    scaleFactor: number;

    /**
     * Token string for this cubicon.
     */
    token = generateToken();

    constructor(params: {
        group: CanvasGroup;
        position?: Vector3;
        scaleFactor?: number;
    }) {
        this.group = params.group;

        this.position = params.position ?? new Vector3(0, 0, 0);

        this.scaleFactor = params.scaleFactor ?? 1;

        this.group.cubicons.push(this);
    }
}
