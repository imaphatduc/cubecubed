import { range } from "d3-array";
//+++++++++++++++++++++++++++++++++++++++++++++++++++//

import { Vector3 } from "@math/vector";

import { CanvasGroup } from "@group/CanvasGroup";
import { CanvasCubicon } from "./CanvasCubicon";
import { COLOR } from "@consts";

export interface AXES3D_CONFIG {
    xRange: [number, number];
    yRange: [number, number];
    zRange: [number, number];
}

const DEFAULT_AXES3D_CONFIG: AXES3D_CONFIG = {
    xRange: [0, 0],
    yRange: [0, 0],
    zRange: [0, 0],
};

export class Axes3D extends CanvasCubicon {
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

    constructor(params: {
        /**
         * The group that the stream line belongs to.
         */
        group: CanvasGroup;
        /**
         * Position of the stream line.
         *
         * @default Vector3(0, 0, 0)
         */
        position?: Vector3;
        /**
         * Config options for the axes.
         */
        CONFIG?: AXES3D_CONFIG;
    }) {
        super({
            group: params.group,
            position: params.position ?? new Vector3(0, 0, 0),
            scaleFactor: 1,
        });

        ({
            xRange: this.xRange = DEFAULT_AXES3D_CONFIG.xRange,
            yRange: this.yRange = DEFAULT_AXES3D_CONFIG.yRange,
            zRange: this.zRange = DEFAULT_AXES3D_CONFIG.zRange,
        } = params.CONFIG ?? DEFAULT_AXES3D_CONFIG);
    }

    /**
     * @internal
     */
    render(p: any) {
        const markerWidth = 8;
        const markerHeight = 15;

        p.strokeWeight(1);

        this.drawXAxis(p, markerWidth, markerHeight);
        this.drawYAxis(p, markerWidth, markerHeight);
        this.drawZAxis(p, markerWidth, markerHeight);
    }

    private drawXAxis(p: any, markerWidth: number, markerHeight: number) {
        const { xGtoW } = this.group;

        const { xRange } = this;

        p.stroke(COLOR.RED_1);

        p.beginShape();
        p.vertex(xGtoW(xRange[0] - 1), 0, 0);
        p.vertex(xGtoW(xRange[1] + 1), 0, 0);
        p.endShape();

        range(xRange[0], xRange[1] + 1, 1).forEach((x) => {
            if (x !== 0) {
                p.point(xGtoW(x), 0, 0);
            }
        });

        p.beginShape();
        for (let i = 0; i < 360; i++) {
            p.vertex(
                xGtoW(xRange[1] + 1),
                Math.cos(i) * markerWidth,
                Math.sin(i) * markerWidth
            );
            p.vertex(xGtoW(xRange[1] + 1) + markerHeight, 0, 0);
        }
        p.endShape();
    }

    private drawYAxis(p: any, markerWidth: number, markerHeight: number) {
        const { yGtoW } = this.group;

        const { yRange } = this;

        p.stroke(COLOR.GREEN_1);

        p.beginShape();
        p.vertex(0, yGtoW(yRange[0] - 1), 0);
        p.vertex(0, yGtoW(yRange[1] + 1), 0);
        p.endShape();

        range(yRange[0], yRange[1] + 1, 1).forEach((y) => {
            if (y !== 0) {
                p.point(0, yGtoW(y), 0);
            }
        });

        p.beginShape();
        for (let i = 0; i < 360; i++) {
            p.vertex(
                Math.cos(i) * markerWidth,
                yGtoW(yRange[1] + 1),
                Math.sin(i) * markerWidth
            );
            p.vertex(0, yGtoW(yRange[1] + 1) + markerHeight, 0);
        }
        p.endShape();
    }

    private drawZAxis(p: any, markerWidth: number, markerHeight: number) {
        const { zGtoW } = this.group;

        const { zRange } = this;

        p.stroke(COLOR.BLUE_1);

        p.beginShape();
        p.vertex(0, 0, zGtoW(zRange[0] - 1));
        p.vertex(0, 0, zGtoW(zRange[1] + 1));
        p.endShape();

        range(zRange[0], zRange[1] + 1, 1).forEach((z) => {
            if (z !== 0) {
                p.point(0, 0, zGtoW(z));
            }
        });

        p.beginShape();
        for (let i = 0; i < 360; i++) {
            p.vertex(
                Math.cos(i) * markerWidth,
                Math.sin(i) * markerWidth,
                zGtoW(zRange[1] + 1)
            );
            p.vertex(0, 0, zGtoW(zRange[1] + 1) + markerHeight);
        }
        p.endShape();
    }
}
