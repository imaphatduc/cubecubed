import { range } from "d3-array";

import { DoubleSide, Mesh, MeshNormalMaterial, PlaneGeometry } from "three";
//+++++++++++++++++++++++++++++++++++++++++++++++++++//

import { Vector3 } from "@math/vector";

import { CanvasGroup } from "@group/CanvasGroup";
import { CanvasCubicon } from "./CanvasCubicon";

export interface REVOLUTION_SURFACE_CONFIG {
    /**
     * @default 100
     */
    numCurveVertices: number;
    /**
     * @default 100
     */
    numRevolVertices: number;
    /**
     * @default [0,0]
     */
    xRange: [number, number];
}

export const REVOLUTION_SURFACE_DEFAULT_CONFIG: REVOLUTION_SURFACE_CONFIG = {
    numCurveVertices: 100,
    numRevolVertices: 100,
    xRange: [0, 0],
};

export type CurveFunction = (x: number) => number;

export class RevolutionSurface extends CanvasCubicon {
    /**
     * The function defining the curve to rotate around
     * the x axis.
     *
     * Form: y = f(x)
     */
    functionDef: CurveFunction;

    /**
     * Config options of the revolution surface.
     */
    CONFIG: REVOLUTION_SURFACE_CONFIG;

    constructor(params: {
        /**
         * The group that the particle belongs to
         */
        group: CanvasGroup;
        /**
         * Position of the particle.
         *
         * @default Vector3(0,0,0)
         */
        position?: Vector3;
        /**
         * Function definition of the initial curve.
         */
        functionDef: CurveFunction;
        /**
         * Config options of the revolution surface.
         *
         * @default REVOLUTION_SURFACE_DEFAULT_CONFIG
         */
        CONFIG: REVOLUTION_SURFACE_CONFIG;
    }) {
        super({ group: params.group });

        this.functionDef = params.functionDef;

        this.CONFIG = {
            numCurveVertices:
                params.CONFIG?.numCurveVertices ??
                REVOLUTION_SURFACE_DEFAULT_CONFIG.numCurveVertices,
            numRevolVertices:
                params.CONFIG?.numRevolVertices ??
                REVOLUTION_SURFACE_DEFAULT_CONFIG.numRevolVertices,
            xRange:
                params.CONFIG?.xRange ??
                REVOLUTION_SURFACE_DEFAULT_CONFIG.xRange,
        };

        this.geometrize();

        this.material = new MeshNormalMaterial({
            side: DoubleSide,
            wireframe: false,
        });
    }

    /**
     * @internal
     */
    render() {
        this.mesh = new Mesh(this.geometry, this.material);

        this.group.threeScene.add(this.mesh);

        return this;
    }

    private geometrize() {
        const { numCurveVertices, numRevolVertices, xRange } = this.CONFIG;

        const width = xRange[1] - xRange[0];
        const height = 5;

        this.geometry = new PlaneGeometry(
            width,
            height,
            numCurveVertices - 1,
            numRevolVertices - 1
        );

        this.geometry.rotateX(0.5 * -Math.PI);
        this.geometry.translate(width / 2 + xRange[0], 0, 0);

        this.setVertices();
    }

    /**
     * Set the surface's geometry based on the current animation stage.
     *
     * @param t "Eased" time changing smoothly in the range [0, 1].
     * 0 for initial stage and 1 for the complete rendered mesh.
     */
    setVertices(t = 1) {
        const vertices = this.geometry.attributes.position;

        const { numCurveVertices, numRevolVertices } = this.CONFIG;

        range(0, vertices.count).forEach((i) => {
            const revolIndex = Math.floor(i / numCurveVertices);

            const revolOffset = -2;

            const theta =
                revolIndex * ((2 * Math.PI) / (numRevolVertices + revolOffset));

            const x = vertices.getX(i);

            const newY = Math.cos(theta * t) * this.functionDef(x);
            const newZ = Math.sin(theta * t) * this.functionDef(x);

            vertices.setY(i, newY);
            vertices.setZ(i, newZ);
        });

        vertices.needsUpdate = true;
    }
}
