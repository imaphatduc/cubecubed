import { CANVAS_TYPES } from "../cubicons/constants";

export class CanvasAnimation {
    /**
     * The target cubicon of this animation.
     */
    cubicon: CANVAS_TYPES;

    /**
     * Time to play this animation (in milliseconds).
     */
    duration: number;

    constructor(params: {
        cubicon: CANVAS_TYPES;
        duration?: number | undefined;
    }) {
        this.cubicon = params.cubicon;
        this.duration = params.duration || 0;

        this.cubicon.group.animations.push(this);
    }
}
