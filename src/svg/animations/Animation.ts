import { EASE_TYPE, EASE } from "@consts";

import { Cubicon } from "@cubicons/Cubicon";

export interface AnimationParams<TCubicon> {
    /**
     * The target cubicon to play this animation.
     */
    cubicon: TCubicon;

    /**
     * The duration of this animation (in milliseconds).
     */
    duration?: number;

    /**
     * Easing function for smooth animation.
     */
    ease?: EASE_TYPE;
}

export abstract class Animation {
    abstract readonly animationType: string;

    /**
     * The time to wait before playing this animation.
     */
    sleepTime = 0;

    cubicon: Cubicon;

    duration: number;

    ease: EASE_TYPE;

    constructor(params: AnimationParams<Cubicon>) {
        this.cubicon = params.cubicon;

        this.sleepTime = params.cubicon.group.groupElapsed;

        this.duration = params.duration ?? 0;

        this.ease = params.ease ?? EASE.CUBIC;
    }

    /**
     * Play this animation.
     */
    play() {
        //
    }

    setCubiconPosition(x: number, y: number) {
        this.cubicon.position.x = x;
        this.cubicon.position.y = y;
    }
}
