import { transition } from "d3-transition";
//+++++++++++++++++++++++++++++++++++++++++++++++++++//

import { CanvasAnimation, CanvasAnimationParams } from "./CanvasAnimation";

import { RevolutionSurface } from "@cubicons/RevolutionSurface";

export type SIMULATE_REVOLUTION_TYPES = RevolutionSurface;

export class SimulateRevolution extends CanvasAnimation {
    cubicon: SIMULATE_REVOLUTION_TYPES;

    constructor(params: CanvasAnimationParams<SIMULATE_REVOLUTION_TYPES>) {
        super({
            cubicon: params.cubicon,

            duration: params.duration,
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
