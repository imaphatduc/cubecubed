import * as d3 from "d3";

export const svg = d3.select(`#viz`);

// export const svgWidth = document.getElementById("svg-render").offsetWidth;
// export const svgHeight = document.getElementById("svg-render").offsetHeight;

export const svgWidth = svg.attr("width");
export const svgHeight = svg.attr("height");

export function initSVGScene() {
    svg.attr("width", svgWidth)
        .attr("height", svgHeight)
        .attr(
            "viewBox",
            `${-svgWidth / 2} ${-svgHeight / 2} ${svgWidth} ${svgHeight}`
        )
        .attr("transform", "scale(1, -1)");
}
