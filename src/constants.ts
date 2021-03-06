//************//
// 1. Colors
//************//

/**
 * Color constants
 */
export const COLOR = {
    WHITE: "#ffffff",
    RED_1: "#ff5370",
    RED_2: "#ff7153",
    RED_3: "#ff3531",
    GREEN_1: "#81b366",
    TEAL_1: "#4fd6be",
    BLUE_1: "#1616b6",
    BLUE_2: "#82aaff",
    CYAN: "#6be5ff",
    PURPLE_1: "#650a5a",
    PURPLE_2: "#8552d5",
    PURPLE_3: "#6925d2",
    PURPLE_4: "#9536ff",
    PINK_1: "#ff00ff",
    PINK_2: "#ff39b3",
};

//********************//
// 2. Math constants
//********************//
export const PI = Math.PI;
export const TAU = 2 * Math.PI;

//************************************************//
// 3. Animation time and ease function constants
//************************************************//

/**
 * Animation duration constants
 * (ANIME is just an abbreviation for ANImation tiME :))
 */
export const ANIME = {
    CREATE: 1500,
    TRANSLATE: 1500,
    ROTATE: 1000,
    FADEIN: 1000,
    FADEOUT: 1000,
    DRAWGRID: 1300,
};

/**
 * Type of the user-custom ease function
 *
 * - Form: f(x) = y
 * - Requirement: both x and y are in range [0, 1]
 */
export type EASE_TYPE = (x: number) => number;

import {
    easeBack,
    easeBackIn,
    easeBackOut,
    easeBounceIn,
    easeBounceInOut,
    easeBounceOut,
    easeCircle,
    easeCircleIn,
    easeCircleOut,
    easeCubic,
    easeCubicIn,
    easeCubicOut,
    easeElasticIn,
    easeElasticOut,
    easeElasticInOut,
    easeExp,
    easeExpIn,
    easeExpOut,
    easeLinear,
    easePoly,
    easePolyIn,
    easePolyOut,
    easeQuad,
    easeQuadIn,
    easeQuadOut,
    easeSin,
    easeSinIn,
    easeSinOut,
} from "d3-ease";

/**
 * Default ease functions
 * - Form: `<name>_<option>`
 * - Available options:
 *   . IN
 *   . OUT
 * - Available names:
 *   . POLY
 *   . QUAD
 *   . CUBIC
 *   . SIN
 *   . EXP
 *   . CIRCLE
 *   . ELASTIC
 *   . BACK
 *   . BOUNCE
 *
 * Example Usage: EASE.POLY_IN
 */
export const EASE = {
    LINEAR: easeLinear,

    POLY: easePoly,
    POLY_IN: easePolyIn,
    POLY_OUT: easePolyOut,

    QUAD: easeQuad,
    QUAD_IN: easeQuadIn,
    QUAD_OUT: easeQuadOut,

    CUBIC: easeCubic,
    CUBIC_IN: easeCubicIn,
    CUBIC_OUT: easeCubicOut,

    SIN: easeSin,
    SIN_IN: easeSinIn,
    SIN_OUT: easeSinOut,

    EXP: easeExp,
    EXP_IN: easeExpIn,
    EXP_OUT: easeExpOut,

    CIRCLE: easeCircle,
    CIRCLE_IN: easeCircleIn,
    CIRCLE_OUT: easeCircleOut,

    ELASTIC_IN: easeElasticIn,
    ELASTIC_OUT: easeElasticOut,
    ELASTIC_INOUT: easeElasticInOut,

    BACK: easeBack,
    BACK_IN: easeBackIn,
    BACK_OUT: easeBackOut,

    BOUNCE_IN: easeBounceIn,
    BOUNCE_OUT: easeBounceOut,
    BOUNCE_INOUT: easeBounceInOut,
};
