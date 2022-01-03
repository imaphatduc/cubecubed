import { TYPES, DEFAULT_EASE } from "../cubicons/constants";

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
        ease?: Function;
    }) {
        this.cubicon = cubicon;
        this.duration = duration || 0;
        this.ease = ease || DEFAULT_EASE;
    }
}
