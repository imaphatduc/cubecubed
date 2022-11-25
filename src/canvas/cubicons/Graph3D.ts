import { range } from "d3-array";

import {
    Color,
    DoubleSide,
    Float32BufferAttribute,
    Mesh,
    MeshBasicMaterial,
    PlaneGeometry,
    RepeatWrapping,
    TextureLoader,
} from "three";
//+++++++++++++++++++++++++++++++++++++++++++++++++++//

import configFactory from "@utils/configFactory";

import { CanvasCubicon, CanvasCubiconParams } from "./CanvasCubicon";

export type GraphFunction3D = (x: number, y: number) => number;

export interface GRAPH3D_CONFIG {
    /**
     * x range of this graph.
     */
    xRange: [number, number];

    /**
     * y range of this graph.
     */
    yRange: [number, number];
}

export const GRAPH3D_DEFAULT_CONFIG: GRAPH3D_CONFIG = {
    xRange: [0, 0],
    yRange: [0, 0],
};

export interface Graph3DParams extends CanvasCubiconParams<GRAPH3D_CONFIG> {
    /**
     * The function defining this graph.
     */
    functionDef: GraphFunction3D;
}

export class Graph3D extends CanvasCubicon {
    functionDef: GraphFunction3D;

    declare geometry: PlaneGeometry;

    declare CONFIG: GRAPH3D_CONFIG;

    constructor(params: Graph3DParams) {
        super({
            group: params.group,

            position: params.position,

            scaleFactor: params.scaleFactor,

            CONFIG: configFactory(GRAPH3D_DEFAULT_CONFIG, params.CONFIG),
        });

        this.functionDef = params.functionDef;

        this.geometrize();
    }

    /**
     * @internal
     */
    render() {
        const { xGtoW, yGtoW } = this.group;

        new TextureLoader().load(
            "src/canvas/textures/square.png",
            (texture) => {
                texture.wrapS = texture.wrapT = RepeatWrapping;
                texture.repeat.set(xGtoW(0.5), yGtoW(0.5));

                this.material = new MeshBasicMaterial({
                    map: texture,
                    vertexColors: true,
                    side: DoubleSide,
                    wireframe: false,
                });

                this.object = new Mesh(this.geometry, this.material);

                this.group.threeScene.add(this.object);
            }
        );

        return this;
    }

    private geometrize() {
        const { xGtoW, yGtoW } = this.group;
        const { xRange, yRange } = this.CONFIG;

        const width = xGtoW(xRange[1] - xRange[0]);
        const height = yGtoW(yRange[1] - yRange[0]);

        const segments = 100;

        this.geometry = new PlaneGeometry(width, height, segments, segments);

        this.geometry.translate(
            width / 2 + xGtoW(xRange[0]),
            height / 2 + yGtoW(yRange[0]),
            0
        );

        this.setVertices();

        this.setVertexNormalColors(width, height, segments);
    }

    private setVertexNormalColors(
        width: number,
        height: number,
        segments: number
    ) {
        this.geometry.computeBoundingBox();
        const zMin = this.geometry.boundingBox?.min.z ?? 0;
        const zMax = this.geometry.boundingBox?.max.z ?? 0;
        const zRange = zMax - zMin;

        const colors = [];

        for (let i = 0; i <= segments; i++) {
            const widthSegmentSize = width / segments;
            const heightSegmentSize = height / segments;

            const Wy = i * heightSegmentSize - height / 2;

            for (let j = 0; j <= segments; j++) {
                const Wx = j * widthSegmentSize - width / 2;

                const Wz = this.getWz(Wx, Wy);

                const color = new Color(0xff0000);
                color.setHSL((0.7 * (zMax - Wz)) / zRange, 1, 0.5);

                colors.push(color.r, color.g, color.b);
            }
        }

        this.geometry.setAttribute(
            "color",
            new Float32BufferAttribute(colors, 3)
        );
    }

    private setVertices() {
        const { xWtoG, yWtoG, zGtoW } = this.group;

        const vertices = this.geometry.attributes.position;

        range(0, vertices.count).forEach((i) => {
            const x = xWtoG(vertices.getX(i));
            const y = yWtoG(vertices.getY(i));

            const newZ = this.functionDef(x, y);

            vertices.setZ(i, zGtoW(newZ));
        });

        vertices.needsUpdate = true;
    }

    private getWz(Wx: number, Wy: number) {
        const { xWtoG, yWtoG, zGtoW } = this.group;

        const x = xWtoG(Wx);
        const y = yWtoG(Wy);

        const z = this.functionDef(x, y);

        const Wz = zGtoW(z);

        return Wz;
    }
}
