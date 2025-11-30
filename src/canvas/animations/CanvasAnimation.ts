import { CanvasCubicon } from "@cubicons/CanvasCubicon";

export interface CanvasAnimationParams<TCubicon> {
    /**
     * The target cubicon to play this animation.
     */
    cubicon: TCubicon;

    /**
     * The duration of this animation (in milliseconds).
     */
    duration?: number;
}

export abstract class CanvasAnimation {
    cubicon: CanvasCubicon;

    duration: number;

    /**
     * The time to wait before playing this animation.
     */
    sleepTime = 0;

    constructor(params: { cubicon: CanvasCubicon; duration?: number }) {
        this.cubicon = params.cubicon;

        this.sleepTime = params.cubicon.group.scene.sceneElapsed;

        this.duration = params.duration ?? 0;
    }

    /**
     * Play this animation.
     *
     * @internal
     */
    play() {
        //
    }
}
