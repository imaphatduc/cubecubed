import { scaleLinear } from "d3-scale";

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
