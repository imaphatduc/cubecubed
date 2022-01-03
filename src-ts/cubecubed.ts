import { svgWidth, svgHeight } from "./cubicons/constants";

// A generic tuple with 2 elements
// Helps differentiate between arrays and tuples
type Pair<T> = [T, T];

////////////////////////////////////////////////////////////////////
/// Compute the x and y boundary on the grid plane                //
// base on how many little squares on the shorter of the two axes //
////////////////////////////////////////////////////////////////////

const larger = Math.max(svgWidth, svgHeight);
const smaller = Math.min(svgWidth, svgHeight);

// Users should only change this line
const smallerDirSquareNums = 14;

export const smallerBound: Pair<number> = [
    Math.floor(-smallerDirSquareNums / 2),
    Math.floor(smallerDirSquareNums / 2),
];

export const sqrLength = smaller / smallerDirSquareNums;
export const largerDirSquareNums = Math.floor(larger / 2 / sqrLength) * 2;

export const largerBound: Pair<number> = [
    Math.floor(-largerDirSquareNums / 2),
    Math.floor(largerDirSquareNums / 2),
];

export const [xBound, yBound] =
    svgWidth >= svgHeight
        ? [largerBound, smallerBound]
        : [smallerBound, largerBound];
