import { scaleLinear } from "d3-scale";
import { svgWidth, svgHeight } from "../cubicons/constants";
import { xBound, yBound, sqrLength, largerDirSquareNums } from "../cubecubed";

/**
 * One-param function to convert x value of grid coordinates to real-world coordinates.
 */
export const xGtoW = scaleLinear()
    .domain(xBound)
    .range([
        -sqrLength * (largerDirSquareNums / 2),
        sqrLength * (largerDirSquareNums / 2),
    ]);
/**
 * One-param function to convert y value of grid coordinates to real-world coordinates.
 */
export const yGtoW = scaleLinear()
    .domain(yBound)
    .range([-svgHeight / 2, svgHeight / 2]);

/**
 * One-param function to convert x value of real-world coordinates to grid coordinates.
 */
export const xWtoG = scaleLinear()
    .domain([-svgWidth / 2, svgWidth / 2])
    .range(xBound);
/**
 * One-param function to convert y value of real-world coordinates to grid coordinates.
 */
export const yWtoG = scaleLinear()
    .domain([-svgHeight / 2, svgHeight / 2])
    .range(yBound);

/**
 * One-param function to convert radians value to degrees one.
 */
export const rToD = scaleLinear()
    .domain([0, 2 * Math.PI])
    .range([0, 360]);

/**
 * One-param function to convert degrees value to radians one.
 */
export const dToR = scaleLinear()
    .domain([0, 360])
    .range([0, 2 * Math.PI]);
