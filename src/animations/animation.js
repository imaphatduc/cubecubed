import { easeCubic } from "d3-ease";

export class Animation {
    constructor({ cubicon, duration, ease = easeCubic }) {
        this.cubicon = cubicon;
        this.duration = duration;
        this.ease = ease;
    }
}
