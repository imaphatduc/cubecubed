import { scaleLinear } from "d3-scale";
import { svgWidth, svgHeight } from "../cubicons/constants";

////////////////////////////////////////////////////////////////////
/// Compute the x and y boundary on the grid plane                //
// base on how many little squares on the shorter of the two axes //
////////////////////////////////////////////////////////////////////

const larger = Math.max(svgWidth, svgHeight);
const smaller = Math.min(svgWidth, svgHeight);

// Users should only change this line
const smallerDirSquareNums = 13;

export const smallerBound = [
    parseInt(-smallerDirSquareNums / 2),
    parseInt(smallerDirSquareNums / 2),
];

const sqrLength =
    (smaller - (smaller % smallerDirSquareNums)) / smallerDirSquareNums;
const largerDirSquareNums = parseInt(larger / sqrLength);

export const largerBound = [
    parseInt(-largerDirSquareNums / 2),
    parseInt(largerDirSquareNums / 2),
];

export const [xBound, yBound] =
    svgWidth >= svgHeight
        ? [largerBound, smallerBound]
        : [smallerBound, largerBound];

///////////////////////////////////////////////////////////////////////
// Convert grid coordinates to real-world coordinates and vice-versa //
///////////////////////////////////////////////////////////////////////
export const xGtoW = scaleLinear()
    .domain(xBound)
    .range([-svgWidth / 2, svgWidth / 2]);

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
