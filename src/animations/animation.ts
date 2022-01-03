import * as d3 from "d3";
import { CoordinatesSystem } from "../cubicons/coordinateSys";
import { Geometry } from "../cubicons/geometry";
import { MathText } from "../cubicons/text";

export const DEFAULT_EASE = d3.easeCubic;

type TYPES = CoordinatesSystem | Geometry | MathText;

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
