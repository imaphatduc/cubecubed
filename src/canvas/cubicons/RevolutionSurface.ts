import { range } from "d3-array";

import { DoubleSide, Mesh, MeshNormalMaterial, PlaneGeometry } from "three";
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

    width: number;

    height: number;

    widthSegments: number;

    heightSegments: number;

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

        this.width = 5;
        this.height = 5;

        this.widthSegments = 100;
        this.heightSegments = 200;
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
            this.widthSegments,
            this.heightSegments
        );

        this.geometry.rotateX(0.5 * -Math.PI);
        this.geometry.translate(this.width / 2 + 0.5, 0, 0);

        const vertices = this.geometry.attributes.position;

        range(0, vertices.count, this.widthSegments).forEach((i) => {
            const theta =
                (2 * Math.PI * i) /
                (this.widthSegments + 1) /
                (this.heightSegments - 1);

            range(i, i + this.widthSegments, 1).forEach((j) => {
                const x = vertices.getX(j);

                const newY = Math.cos(theta) * this.functionDef(x);
                const newZ = Math.sin(theta) * this.functionDef(x);

                vertices.setY(j, newY);
                vertices.setZ(j, newZ);
            });
        });
    }
}
