import { TYPES, EASE_TYPE, EASE } from "../cubicons/constants";

export class Animation {
    cubicon: any;
    duration: number;
    ease: EASE_TYPE;

    constructor({
        cubicon,
        duration,
        ease,
    }: {
        cubicon: TYPES;
        duration?: number;
        ease?: EASE_TYPE | undefined;
    }) {
        this.cubicon = cubicon;
        this.duration = duration || 0;
        this.ease = ease || EASE.CUBIC;
    }
}
