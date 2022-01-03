import { scaleLinear } from "d3-scale";
import { svgWidth, svgHeight } from "../cubicons/constants";
import { xBound, yBound, sqrLength, largerDirSquareNums } from "../cubecubed";

///////////////////////////////////////////////////////////////////////
// Convert grid coordinates to real-world coordinates and vice-versa //
///////////////////////////////////////////////////////////////////////
export const xGtoW = scaleLinear()
    .domain(xBound)
    .range([
        -sqrLength * (largerDirSquareNums / 2),
        sqrLength * (largerDirSquareNums / 2),
    ]);

export const yGtoW = scaleLinear()
    .domain(yBound)
    .range([-svgHeight / 2, svgHeight / 2]);

export const xWtoG = scaleLinear()
    .domain([-svgWidth / 2, svgWidth / 2])
    .range(xBound);

export const yWtoG = scaleLinear()
    .domain([-svgHeight / 2, svgHeight / 2])
    .range(yBound);

///////////////////////////////////////////////
// Convert radians to degrees and vice-versa //
///////////////////////////////////////////////
export const rToD = scaleLinear()
    .domain([0, 2 * Math.PI])
    .range([0, 360]);

export const dToR = scaleLinear()
    .domain([0, 360])
    .range([0, 2 * Math.PI]);
