import { svg, svgWidth, svgHeight } from "./cubicons/constants";

////////////////////////////////////////////////////////////////////
/// Compute the x and y boundary on the grid plane                //
// base on how many little squares on the shorter of the two axes //
////////////////////////////////////////////////////////////////////

const larger = Math.max(svgWidth, svgHeight);
const smaller = Math.min(svgWidth, svgHeight);

// Users should only change this line
const smallerDirSquareNums = 12;

export const smallerBound = [
    parseInt(-smallerDirSquareNums / 2),
    parseInt(smallerDirSquareNums / 2),
];

export const sqrLength = smaller / smallerDirSquareNums;
export const largerDirSquareNums = Math.floor(larger / 2 / sqrLength) * 2;

export const largerBound = [
    parseInt(-largerDirSquareNums / 2),
    parseInt(largerDirSquareNums / 2),
];

export const [xBound, yBound] =
    svgWidth >= svgHeight
        ? [largerBound, smallerBound]
        : [smallerBound, largerBound];
