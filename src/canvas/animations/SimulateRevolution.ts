import { transition } from "d3-transition";
//+++++++++++++++++++++++++++++++++++++++++++++++++++//

import { CanvasAnimation, CanvasAnimationParams } from "./CanvasAnimation";

import { RevolutionSurface } from "@cubicons/RevolutionSurface";

export class SimulateRevolution extends CanvasAnimation {
    cubicon: RevolutionSurface;

    constructor(params: CanvasAnimationParams<RevolutionSurface>) {
        super({
            cubicon: params.cubicon,

            duration: params.duration ?? 0,
        });
    }

    /**
     * @internal
     */
    play() {
        this.simulateRevolution();
    }

    private simulateRevolution() {
        this.cubicon.setVertices(0);

        transition()
            .delay(this.sleepTime)
            .duration(this.duration)
            .tween("simulate-revolution", () => (t: number) => {
                this.cubicon.setVertices(t);
            });
    }
}
