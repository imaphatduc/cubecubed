import { select } from "d3-selection";
export const svg = select("#viz");

export const svgWidth = parseInt(svg.attr("width"));
export const svgHeight = parseInt(svg.attr("height"));

// Constant colors
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

// Useful trigonometry constants
export const PI = Math.PI;
export const TAU = 2 * Math.PI;

/// Animation constants

import { easeCubic } from "d3-ease";
import { Geometry, Rectangle, Square, Circle, Line, Vector } from "./geometry";
import {
    CoordinatesSystem,
    Label,
    Point,
    AxisProjector,
} from "./coordinateSys";
import { MathText } from "./text";
// ANIME is just an abbreviation for ANImation tiME :)
export const ANIME = {
    CREATE: 1500,
    TRANSLATE: 1500,
    ROTATE: 1000,
    FADEIN: 1000,
    FADEOUT: 1000,
    DRAWGRID: 1300,
};

export type EASE_TYPE = (x: number) => number;
export const DEFAULT_EASE = easeCubic;

export type TYPES = CoordinatesSystem | Geometry | MathText;

// Animation Types
export type CREATE_TYPES =
    | (Rectangle | Square | Circle | Line | Vector)
    | (Point | AxisProjector);

export type FADE_TYPES = MathText | Label | Geometry;

//// Complex data

/// Axes in Coordinate System
export type PT_ON_GRAPH_DATA = {
    point: Point;
};

export type PT_TO_COORDS_DATA = {
    point: Point;
    lines: [AxisProjector, AxisProjector];
};

/// Rectangle and Square
// pointToSides
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
