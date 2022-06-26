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
        const vertices = cubicon.geometry.attributes.position;

        const tRatio = t / (this.duration / 1000);

        cubicon.setVertices(vertices, tRatio);

        vertices.needsUpdate = true;
    }
}
