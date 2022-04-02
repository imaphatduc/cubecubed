import { FLOW_TYPES } from "./Flow";

type CANVAS_ANIM_TYPES = FLOW_TYPES;

export class CanvasAnimation {
    /**
     * The target cubicon of this animation.
     */
    cubicon: CANVAS_ANIM_TYPES;

    /**
     * Time to play this animation (in milliseconds).
     */
    duration: number;

    constructor(params: { cubicon: CANVAS_ANIM_TYPES; duration?: number }) {
        this.cubicon = params.cubicon;
        this.duration = params.duration ?? 0;
    }
}
