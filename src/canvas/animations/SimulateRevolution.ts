import { range } from "d3-array";
//+++++++++++++++++++++++++++++++++++++++++++++++++++//

import { CanvasAnimation } from "./CanvasAnimation";

import { RevolutionSurface } from "@cubicons/RevolutionSurface";

export class SimulateRevolution extends CanvasAnimation {
    constructor(params: {
        /**
         * The target cubicon to play this animation.
         */
        cubicon: RevolutionSurface;
        /**
         * Time to play this animation. (in milliseconds)
         *
         * @default 0
         */
        duration?: number;
    }) {
        super({
            cubicon: params.cubicon,
            duration: params.duration ?? 0,
        });
    }

    /**
     * @internal
     */
    play(t: number) {
        this.simulateRevolution(t, this.cubicon);
    }

    private simulateRevolution(t: number, cubicon: RevolutionSurface) {
        const { widthSegments, heightSegments } = cubicon;

        const vertices = cubicon.geometry.attributes.position;

        range(0, vertices.count, widthSegments).forEach((i) => {
            const theta =
                (2 * Math.PI * i) / (widthSegments + 1) / (heightSegments - 1);

            if (t <= theta) {
                range(i, i + widthSegments, 1).forEach((j) => {
                    const x = vertices.getX(j);

                    const newY = Math.cos(t) * cubicon.functionDef(x);
                    const newZ = Math.sin(t) * cubicon.functionDef(x);

                    vertices.setY(j, newY);
                    vertices.setZ(j, newZ);
                });
            }
        });

        vertices.needsUpdate = true;
    }
}
