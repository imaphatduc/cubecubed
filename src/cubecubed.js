import { svg, svgWidth, svgHeight } from "./cubicons/constants";

export function initAnimScene() {
    svg.attr("width", svgWidth)
        .attr("height", svgHeight)
        .attr("transform", "scale(1, -1)");
}
