import { EASE_TYPE, EASE } from "@consts";

import { Cubicon } from "@cubicons/Cubicon";
import { Transition } from "d3";

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

type GetTransition = () => Transition<any, unknown, HTMLElement, any>;

export abstract class Animation {
    abstract readonly animationType: string;

    cubicon: Cubicon;

    duration: number;

    ease: EASE_TYPE;

    constructor(params: AnimationParams<Cubicon>) {
        this.cubicon = params.cubicon;

        this.duration = params.duration ?? 0;

        this.ease = params.ease ?? EASE.CUBIC;
    }

    /**
     * Get transition queues, e.g. `[[() => Transition, () => Transition], [() => Transition], [() => Transition]]`
     */
    abstract getTransitions(sleepTime: number): GetTransition[];

    setCubiconPosition(x: number, y: number) {
        this.cubicon.position.x = x;
        this.cubicon.position.y = y;
    }
}
