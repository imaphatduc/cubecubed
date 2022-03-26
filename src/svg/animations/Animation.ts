import { TYPES, EASE_TYPE, EASE } from "@consts";

export class Animation {
    /**
     * The target cubicon of this animation.
     */
    cubicon: any;

    /**
     * Time to play this animation (in milliseconds).
     */
    duration: number;

    /**
     * The easing function to use.
     */
    ease: EASE_TYPE;

    constructor({
        cubicon,
        duration,
        ease,
    }: {
        cubicon: TYPES;
        duration?: number | undefined;
        ease?: EASE_TYPE | undefined;
    }) {
        this.cubicon = cubicon;
        this.duration = duration || 0;
        this.ease = ease || EASE.CUBIC;
    }
}
