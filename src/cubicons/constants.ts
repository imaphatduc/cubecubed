/**
 * SVG constants
 */
import { select } from "d3-selection";
export const svg = select("#viz");

export const svgWidth = parseInt(svg.attr("width"));
export const svgHeight = parseInt(svg.attr("height"));

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

/**
 * Math constants
 */
export const PI = Math.PI;
export const TAU = 2 * Math.PI;

/**
 * Animation duration constants (ANIME is just an abbreviation for ANImation tiME :))
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
 * Ease functions constants
 */

/// Let the user customize their ease function
// Form: f(x) = y
// Requirement: both x and y are in range [0, 1]
export type EASE_TYPE = (x: number) => number;

/// Default ease functions
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
    easeElasticInOut,
    easeElasticOut,
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

//+++++++++++++++++++++//
// Types constants
//+++++++++++++++++++++//

/*
 * Cubicon types
 */
export type TYPES = CoordinatesSystem | Geometry | MathText;

/*
 * Animation types
 */
import { Geometry, Rectangle, Square, Circle, Line, Vector } from "./geometry";
import {
    CoordinatesSystem,
    Graph,
    Label,
    Point,
    AxisProjector,
} from "./coordinateSys";
import { MathText } from "./text";

export type CREATE_TYPES =
    | (Rectangle | Square | Circle | Line | Vector)
    | (Graph | Point | AxisProjector);

export type FADE_TYPES = MathText | Label | Geometry;

//+++++++++++++++++++//
// Complex data
//+++++++++++++++++++//

/**
 * Axes in Coordinate System
 */
export type PT_ON_GRAPH_DATA = {
    point: Point;
};

export type PT_TO_COORDS_DATA = {
    point: Point;
    lines: [AxisProjector, AxisProjector];
};

/**
 * Rectangle and Square
 */
export type PT_TO_SIDES_DATA = {
    cubicon: Rectangle | Square;
    horizontalLines: Line[];
    verticalLines: Line[];
};

export type RECT_GRID_DATA = {
    cubicon: Rectangle | Square;
    horizontalLines: Line[];
    verticalLines: Line[];
};
