//*****************//
// 1. SVG constants
//*****************//
import { select } from "d3-selection";

/**
 * d3 Selection of `svg#svg-viz` element
 */
export const svg = select("#cubecubed").select("#svg-viz");

/**
 * d3 Selection of `canvas#canvas-viz` element
 */
export const canvas = svg.select("#cubecubed").select('#canvas-viz');

/**
 * width attribute of `svg#viz` element
 */
export const svgWidth = window.innerWidth;

/**
 * height attribute of `svg#viz` element
 */
export const svgHeight = window.innerHeight;

//*** 2. COLORS ***//
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
// 3. Math constants
//********************//
export const PI = Math.PI;
export const TAU = 2 * Math.PI;

//************************************************//
// 4. Animation time and ease function constants
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
} from "d3";

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

//*********************//
// 5. Types constants
//*********************//

/**
 * Classes which directly inherit from `Cubicon`
 */
export type TYPES = CoordinateSystem | Geometry | MathText | VectorField;

/************************
 * 5.0. Animation types
 */
import { Geometry, Rectangle, Square, Circle, Line, Vector } from "./geometry";
import {
    CoordinateSystem,
    Graph,
    Label,
    Point,
    AxisProjector,
} from "./coordinateSystem";
import { MathText } from "./text";
import { VectorField } from "./vectorField";

/**
 * Legal shape types to play Create() animation.
 */
export type CREATE_SHAPE_TYPES = Rectangle | Square | Circle | Graph | Point;

/**
 * Legal line-like types to play Create() animation.
 */
export type CREATE_LINE_TYPES = Line | Vector | AxisProjector;

/**
 * Legal cubicon types to play Create() animation.
 */
export type CREATE_TYPES = CREATE_SHAPE_TYPES | CREATE_LINE_TYPES;

/**
 * Types available for Fade (FadeIn & FadeOut) animation
 */
export type FADE_TYPES = MathText | Label | Geometry;

/***************************
 * 5.1. Complex data types
 */

/**
 * Return data type when calling Axes().pointOnGraph() method
 */
export type PT_ON_GRAPH_DATA = {
    point: Point;
};

/**
 * Return data type when calling Axes().pointToCoords() method
 */
export type PT_TO_COORDS_DATA = {
    point: Point;
    projectors: [AxisProjector, AxisProjector];
};

/**
 * Return data when calling Rectangle().drawInnerGrid()
 * or Square().drawInnerGrid() method
 */
export type RECT_GRID_DATA = {
    cubicon: Rectangle | Square;
    horizontalLines: Line[];
    verticalLines: Line[];
};
