import { range } from "d3-array";

import {
    BufferAttribute,
    BufferGeometry,
    DoubleSide,
    Mesh,
    MeshNormalMaterial,
} from "three";
//+++++++++++++++++++++++++++++++++++++++++++++++++++//

import configFactory from "@utils/configFactory";

import { Vector3 } from "@math/Vector3";

import { CanvasCubicon, CanvasCubiconParams } from "@cubicons/CanvasCubicon";

export interface PARAMETRIC_SURFACE_CONFIG {
    /**
     * Paramater u value range.
     *
     * @default [0,0]
     */
    uRange: [number, number];

    /**
     * Parameter v value range.
     *
     * @default [0,0]
     */
    vRange: [number, number];

    /**
     * Number of slices.
     *
     * @default 100
     */
    slices: number;

    /**
     * Number of stacks.
     *
     * @default 100
     */
    stacks: number;
}

export const PARAMETRIC_SURFACE_DEFAULT_CONFIG: PARAMETRIC_SURFACE_CONFIG = {
    uRange: [0, 0],
    vRange: [0, 0],
    slices: 100,
    stacks: 100,
};

export type ParametricSurfaceFunction = (u: number, v: number) => Vector3;

export interface ParametricSurfaceParams
    extends CanvasCubiconParams<PARAMETRIC_SURFACE_CONFIG> {
    /**
     * Parametric function definition.
     */
    functionDef: ParametricSurfaceFunction;
}

export class ParametricSurface extends CanvasCubicon {
    functionDef: ParametricSurfaceFunction;

    declare CONFIG: PARAMETRIC_SURFACE_CONFIG;

    constructor(params: ParametricSurfaceParams) {
        super({
            group: params.group,

            position: params.position,

            scaleFactor: params.scaleFactor,

            CONFIG: configFactory(
                PARAMETRIC_SURFACE_DEFAULT_CONFIG,
                params.CONFIG
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
        this.object = new Mesh(this.geometry, this.material);

        this.group.threeScene.add(this.object);

        return this;
    }

    private geometrize() {
        this.geometry = new BufferGeometry()
            .setIndex(this.indices)
            .setAttribute(
                "position",
                new BufferAttribute(
                    new Float32Array(
                        this.vertices
                            .map((vertex) => [vertex.x, vertex.y, vertex.z])
                            .flat()
                    ),
                    3
                )
            );

        this.geometry.computeVertexNormals();
    }

    private materialize() {
        this.material = new MeshNormalMaterial({
            side: DoubleSide,
            wireframe: false,
        });
    }

    get vertices() {
        const { uRange, vRange, slices, stacks } = this.CONFIG;

        const du = (uRange[1] - uRange[0]) / (slices - 1);
        const dv = (vRange[1] - vRange[0]) / (stacks - 1);

        const { xGtoW, yGtoW, zGtoW } = this.group;

        const vertices: Vector3[] = [];
        const offset = 1.2;

        range(uRange[0], uRange[1] + offset * du, du).forEach((u) => {
            range(vRange[0], vRange[1] + offset * dv, dv).forEach((v) => {
                const vertex = this.functionDef(u, v);

                vertices.push(
                    new Vector3(
                        xGtoW(vertex.x),
                        yGtoW(vertex.y),
                        zGtoW(vertex.z)
                    ).scale(this.scaleFactor)
                );
            });
        });

        return vertices;
    }

    private get indices() {
        const { slices, stacks } = this.CONFIG;

        const indices: number[] = [];
        const sliceCount = slices + 1;

        range(0, stacks).forEach((i) => {
            range(0, slices).forEach((j) => {
                const a = i * sliceCount + j;
                const b = i * sliceCount + j + 1;
                const c = (i + 1) * sliceCount + j + 1;
                const d = (i + 1) * sliceCount + j;

                indices.push(a, b, d);
                indices.push(b, c, d);
            });
        });

        return indices;
    }
}
