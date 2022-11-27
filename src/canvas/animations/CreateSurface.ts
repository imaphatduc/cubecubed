import { transition } from "d3-transition";
//+++++++++++++++++++++++++++++++++++++++++++++++++++//

import { ANIME } from "@consts";

import { CanvasAnimation, CanvasAnimationParams } from "./CanvasAnimation";

import { Graph3D } from "@cubicons/Graph3D";
import { RevolutionSurface } from "@cubicons/RevolutionSurface";

export type CREATE_SURFACE_TYPES = RevolutionSurface | Graph3D;

export class CreateSurface extends CanvasAnimation {
    declare cubicon: CREATE_SURFACE_TYPES;

    constructor(params: CanvasAnimationParams<CREATE_SURFACE_TYPES>) {
        super({
            cubicon: params.cubicon,

            duration: params.duration ?? ANIME.CREATE,
        });
    }

    /**
     * @internal
     */
    play() {
        this.createSurface();
    }

    private createSurface() {
        this.cubicon.setVertices(0);

        transition()
            .delay(this.sleepTime)
            .duration(this.duration)
            .tween("create-surface", () => (t: number) => {
                this.cubicon.setVertices(t);
            });
    }
}
