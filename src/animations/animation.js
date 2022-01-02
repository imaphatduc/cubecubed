import * as d3 from "d3";

export class Animation {
    constructor({ cubicon, duration, ease = d3.easeCubic }) {
        this.cubicon = cubicon;
        this.duration = duration;
        this.ease = ease;
    }
}
