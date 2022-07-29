import { range } from "d3-array";

import { DoubleSide, Mesh, MeshNormalMaterial, PlaneGeometry } from "three";
//+++++++++++++++++++++++++++++++++++++++++++++++++++//

import configFactory from "@utils/configFactory";

import { CanvasCubicon, CanvasCubiconParams } from "@cubicons/CanvasCubicon";

export interface REVOLUTION_SURFACE_CONFIG {
    /**
     * Number of vertices on each curve.
     *
     * @default 100
     */
    numCurveVertices: number;

    /**
     * Number of vertices on each ring after a full rotation.
     *
     * @default 100
     */
    numRevolVertices: number;

    /**
     * x value range of the curves.
     *
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

export interface RevolutionSurfaceParams
    extends CanvasCubiconParams<REVOLUTION_SURFACE_CONFIG> {
    /**
     * Function definition of the initial curve.
     */
    functionDef: CurveFunction;
}

export class RevolutionSurface extends CanvasCubicon {
    /**
     * The function defining the curve to rotate around the x axis.
     *
     * Form: y = f(x)
     */
    functionDef: CurveFunction;

    CONFIG: REVOLUTION_SURFACE_CONFIG;

    constructor(params: RevolutionSurfaceParams) {
        super({
            group: params.group,

            position: params.position,

            CONFIG: configFactory(
                params.CONFIG,
                REVOLUTION_SURFACE_DEFAULT_CONFIG
            ),
        });

        this.functionDef = params.functionDef;

        this.geometrize();

        this.materialize();
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

    private materialize() {
        this.material = new MeshNormalMaterial({
            side: DoubleSide,
            wireframe: false,
        });
    }

    /**
     * Set the surface's geometry based on the current animation stage.
     *
     * @param t "Eased" time changing smoothly in the range [0, 1].
     * 0 for initial stage and 1 for the complete rendered mesh.
     */
    setVertices(t = 1) {
        const vertices = this.geometry.attributes.position;

        range(0, vertices.count).forEach((i) => {
            const theta = this.getTheta(i);

            const x = vertices.getX(i);

            const newY = Math.cos(theta * t) * this.functionDef(x);
            const newZ = Math.sin(theta * t) * this.functionDef(x);

            vertices.setY(i, newY);
            vertices.setZ(i, newZ);
        });

        vertices.needsUpdate = true;
    }

    private getRevolIndex(i: number) {
        const { numCurveVertices } = this.CONFIG;

        return Math.floor(i / numCurveVertices);
    }

    private getTheta(i: number) {
        const { numRevolVertices } = this.CONFIG;

        const revolIndex = this.getRevolIndex(i);

        const revolOffset = -2;

        return revolIndex * ((2 * Math.PI) / (numRevolVertices + revolOffset));
    }
}
