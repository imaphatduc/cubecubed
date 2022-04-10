import { EASE_TYPE, EASE } from "@consts";

import { Geometry } from "@cubicons/geometry/Geometry";
import { Rectangle } from "@cubicons/geometry/Rectangle";
import { Square } from "@cubicons/geometry/Square";
import { Circle } from "@cubicons/geometry/Circle";
import { Line } from "@cubicons/geometry/Line";
import { VectorShape } from "@cubicons/geometry/VectorShape";

import { CoordinateSystem } from "@cubicons/coordinate-system/CoordinateSystem";
import { Graph } from "@cubicons/coordinate-system/Graph";
import { Label } from "@cubicons/coordinate-system/Label";
import { Point } from "@cubicons/coordinate-system/Point";
import { AxisProjector } from "@cubicons/coordinate-system/AxisProjector";

import { MathText } from "@cubicons/MathText";
import { VectorField } from "@cubicons/VectorField";

/**
 * Classes which directly inherit from `Cubicon()`
 */
export type TYPES = Geometry | CoordinateSystem | MathText | VectorField;

/**
 * Legal shape types to play Create() animation.
 */
export type CREATE_SHAPE_TYPES = Rectangle | Square | Circle | Graph | Point;

/**
 * Legal line-like types to play Create() animation.
 */
export type CREATE_LINE_TYPES = Line | VectorShape | AxisProjector;

/**
 * Legal cubicon types to play Create() animation.
 */
export type CREATE_TYPES = CREATE_SHAPE_TYPES | CREATE_LINE_TYPES;

/**
 * Types available for Fade (FadeIn & FadeOut) animation
 */
export type FADE_TYPES = Label | Geometry | MathText;

export abstract class Animation {
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
        duration?: number;
        ease?: EASE_TYPE;
    }) {
        this.cubicon = cubicon;
        this.duration = duration ?? 0;
        this.ease = ease ?? EASE.CUBIC;
    }
}
