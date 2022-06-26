import { range } from "d3-array";

import {
    BufferAttribute,
    DoubleSide,
    InterleavedBufferAttribute,
    Mesh,
    MeshNormalMaterial,
    PlaneGeometry,
} from "three";
//+++++++++++++++++++++++++++++++++++++++++++++++++++//

import { Vector3 } from "@math/vector";

import { CanvasGroup } from "@group/CanvasGroup";
import { CanvasCubicon } from "./CanvasCubicon";

export type CurveFunction = (x: number) => number;

export class RevolutionSurface extends CanvasCubicon {
    /**
     * The function defining the curve to rotate around
     * the x axis.
     *
     * Form: y = f(x)
     */
    functionDef: CurveFunction;

    private width = 5;

    private height = 5;

    numCurveVertices: number;

    numRevolVertices: number;

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
    }) {
        super({ group: params.group });

        this.functionDef = params.functionDef;

        this.numCurveVertices = 100;
        this.numRevolVertices = 100;
    }

    /**
     * @internal
     */
    render() {
        this.geometrize();

        this.material = new MeshNormalMaterial({
            side: DoubleSide,
            wireframe: false,
        });

        this.mesh = new Mesh(this.geometry, this.material);

        this.mesh.rotation.y = Math.PI / 2;

        this.group.threeScene.add(this.mesh);

        return this;
    }

    private geometrize() {
        this.geometry = new PlaneGeometry(
            this.width,
            this.height,
            this.numCurveVertices - 1,
            this.numRevolVertices - 1
        );

        this.geometry.rotateX(0.5 * -Math.PI);
        this.geometry.translate(this.width / 2 + 0.5, 0, 0);

        const vertices = this.geometry.attributes.position;

        this.setVertices(vertices);
    }

    setVertices(
        vertices: BufferAttribute | InterleavedBufferAttribute,
        tRatio = 1
    ) {
        range(0, vertices.count).forEach((i) => {
            const revolIndex = Math.floor(i / this.numCurveVertices);

            const revolOffset = -2;

            const theta =
                revolIndex *
                ((2 * Math.PI) / (this.numRevolVertices + revolOffset));

            const x = vertices.getX(i);

            const newY = Math.cos(theta * tRatio) * this.functionDef(x);
            const newZ = Math.sin(theta * tRatio) * this.functionDef(x);

            vertices.setY(i, newY);
            vertices.setZ(i, newZ);
        });
    }
}
