import { transition } from "d3-transition";
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
    play(sleepTime: number) {
        this.simulateRevolution(this.cubicon, sleepTime);
    }

    private simulateRevolution(cubicon: RevolutionSurface, sleepTime: number) {
        const vertices = cubicon.geometry.attributes.position;

        cubicon.setVertices(0);

        transition()
            .delay(sleepTime)
            .duration(this.duration)
            .tween("simulate-revolution", () => (t: number) => {
                cubicon.setVertices(t);

                vertices.needsUpdate = true;
            });
    }
}
