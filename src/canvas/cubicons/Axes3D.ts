import { range } from "d3-array";

import {
    ConeGeometry,
    CylinderGeometry,
    Group,
    Line,
    LineBasicMaterial,
    Mesh,
    MeshBasicMaterial,
    SphereGeometry,
} from "three";
//+++++++++++++++++++++++++++++++++++++++++++++++++++//

import configFactory from "@utils/configFactory";

import { CanvasCubicon, CanvasCubiconParams } from "./CanvasCubicon";
import { Vector3 } from "@math/Vector3";

export interface AXES3D_CONFIG {
    /**
     * Range of the x axis.
     */
    xRange: [number, number];

    /**
     * Range of the y axis.
     */
    yRange: [number, number];

    /**
     * Range of the z axis.
     */
    zRange: [number, number];

    /**
     * Color of the x axis.
     */
    xAxisColor: string;

    /**
     * Color of the y axis.
     */
    yAxisColor: string;

    /**
     * Color of the z axis.
     */
    zAxisColor: string;
}

const AXES3D_DEFAULT_CONFIG: AXES3D_CONFIG = {
    xRange: [0, 1],
    yRange: [0, 1],
    zRange: [0, 1],
    xAxisColor: "#ff0000",
    yAxisColor: "#00ff00",
    zAxisColor: "#0000ff",
};

export class Axes3D extends CanvasCubicon {
    declare CONFIG: AXES3D_CONFIG;

    /**
     * The offset of the negative side of each axis.
     */
    private readonly negativeOffset = 1;

    /**
     * The offset of the positive side of each axis.
     */
    private readonly positiveOffset = 2;

    /**
     * Total offset of each axis.
     */
    private readonly offset = this.negativeOffset + this.positiveOffset;

    /**
     * Difference of the offset values.
     */
    private readonly offsetDiff = Math.abs(
        this.positiveOffset - this.negativeOffset
    );

    /**
     * Width of the axes.
     */
    private axisWidth = 1;

    /**
     * Axes marker width.
     */
    private markerWidth = 8;

    /**
     * Axes marker height.
     */
    private markerHeight = 15;

    constructor(params: CanvasCubiconParams<AXES3D_CONFIG>) {
        super({
            group: params.group,

            position: params.position,

            scaleFactor: params.scaleFactor,

            CONFIG: configFactory(AXES3D_DEFAULT_CONFIG, params.CONFIG),
        });
    }

    /**
     * @internal
     */
    render() {
        this.drawXAxis();
        this.drawYAxis();
        this.drawZAxis();
    }

    private drawXAxis() {
        const { xGtoW } = this.group;

        const { xRange, xAxisColor } = this.CONFIG;

        const length = xGtoW(xRange[1] - xRange[0] + this.offset);
        const middle = xGtoW((xRange[0] + xRange[1] + this.offsetDiff) / 2);

        const group = this.getObjectsGroupOnAxis(length, xAxisColor);
        group.position.set(middle, 0, 0);
        group.rotation.z = -Math.PI / 2;

        range(xRange[0], xRange[1] + 1).forEach((x) => {
            if (x !== 0) {
                this.renderPointOnAxis(new Vector3(xGtoW(x), 0, 0), xAxisColor);
            }
        });
    }

    private drawYAxis() {
        const { yGtoW } = this.group;

        const { yRange, yAxisColor } = this.CONFIG;

        const length = yGtoW(yRange[1] - yRange[0] + this.offset);
        const middle = yGtoW((yRange[0] + yRange[1] + this.offsetDiff) / 2);

        const group = this.getObjectsGroupOnAxis(length, yAxisColor);
        group.position.set(0, middle, 0);
        group.rotation.y = -Math.PI / 2;

        range(yRange[0], yRange[1] + 1).forEach((y) => {
            if (y !== 0) {
                this.renderPointOnAxis(new Vector3(0, yGtoW(y), 0), yAxisColor);
            }
        });
    }

    private drawZAxis() {
        const { zGtoW } = this.group;

        const { zRange, zAxisColor } = this.CONFIG;

        const length = zGtoW(zRange[1] - zRange[0] + this.offset);
        const middle = zGtoW((zRange[0] + zRange[1] + this.offsetDiff) / 2);

        const group = this.getObjectsGroupOnAxis(length, zAxisColor);
        group.position.set(0, 0, middle);
        group.rotation.x = Math.PI / 2;

        range(zRange[0], zRange[1] + 1).forEach((z) => {
            if (z !== 0) {
                this.renderPointOnAxis(new Vector3(0, 0, zGtoW(z)), zAxisColor);
            }
        });
    }

    private getAxisObject(length: number, color: string) {
        const geometry = new CylinderGeometry(
            this.axisWidth,
            this.axisWidth,
            length
        );

        const material = new LineBasicMaterial({
            color,
        });

        const axis = new Line(geometry, material);

        return axis;
    }

    private getMarkerObject(position: Vector3, color: string) {
        const markerGeometry = new ConeGeometry(
            this.markerWidth,
            this.markerHeight,
            32
        );

        const markerMaterial = new MeshBasicMaterial({
            color,
        });

        const marker = new Mesh(markerGeometry, markerMaterial);
        marker.position.set(position.x, position.y, position.z);

        return marker;
    }

    private renderPointOnAxis(position: Vector3, color: string) {
        const pointGeometry = new SphereGeometry(5);
        const pointMaterial = new MeshBasicMaterial({ color });

        const point = new Mesh(pointGeometry, pointMaterial);
        point.position.set(position.x, position.y, position.z);

        this.group.threeScene.add(point);
    }

    private getObjectsGroupOnAxis(length: number, color: string) {
        const axis = this.getAxisObject(length, color);

        const marker = this.getMarkerObject(
            new Vector3(0, length / 2, 0),
            color
        );

        const group = new Group();
        group.add(axis);
        group.add(marker);

        this.group.threeScene.add(group);

        return group;
    }
}
