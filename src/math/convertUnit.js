import * as d3 from "d3";
import { svgWidth, svgHeight } from "../cubecubed";

export const xBound = [-8, 8];
export const yBound = [-8, 8];

export const xGtoW = d3
    .scaleLinear()
    .domain(xBound)
    .range([-svgWidth / 2, svgWidth / 2]);

export const yGtoW = d3
    .scaleLinear()
    .domain(yBound)
    .range([-svgHeight / 2, svgHeight / 2]);

export const xWtoG = d3
    .scaleLinear()
    .domain([-svgWidth / 2, svgWidth / 2])
    .range(xBound);

export const yWtoG = d3
    .scaleLinear()
    .domain([-svgHeight / 2, svgHeight / 2])
    .range(yBound);
