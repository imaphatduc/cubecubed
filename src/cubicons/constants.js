import * as d3 from "d3";
export const svg = d3.select("#viz");

export const svgWidth = parseInt(svg.attr("width"));
export const svgHeight = parseInt(svg.attr("height"));

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

// ANIME is just an abbreviation for ANImation tiME :)
export const ANIME = {
    CREATE: 1500,
    TRANSLATE: 1500,
    ROTATE: 1000,
    FADEIN: 1000,
    FADEOUT: 1000,
    DRAWGRID: 1300,
};

export const PI = Math.PI;
export const TAU = 2 * Math.PI;
