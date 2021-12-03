import { svg, svgWidth, svgHeight } from "./cubicons/constants";

export function initAnimScene() {
    svg.attr("width", svgWidth)
        .attr("height", svgHeight)
        .attr(
            "viewBox",
            `${-svgWidth / 2} ${-svgHeight / 2} ${svgWidth} ${svgHeight}`
        )
        .attr("transform", "scale(1, -1)");
}
