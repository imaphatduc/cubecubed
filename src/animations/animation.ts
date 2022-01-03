import { TYPES, DEFAULT_EASE, EASE_TYPE } from "../cubicons/constants";

export class Animation {
    cubicon: any;
    duration: number;
    ease: Function;

    constructor({
        cubicon,
        duration,
        ease,
    }: {
        cubicon: TYPES;
        duration?: number;
        ease?: EASE_TYPE;
    }) {
        this.cubicon = cubicon;
        this.duration = duration || 0;
        this.ease = ease || DEFAULT_EASE;
    }
}
