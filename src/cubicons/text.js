import { Cubicon } from "./cubicon";
import { svgWidth, svgHeight } from "./constants";

export class MathText extends Cubicon {
    constructor({
        group,
        position = { x: 0, y: 0 },
        text = "",
        color = "#fff",
        fontSize = 13,
    }) {
        super({ group: group, position: position });

        this.text = text;
        this.color = color;
        this.fontSize = fontSize;

        this.#draw();
    }

    #draw() {
        /// this.stroke is a d3 selection of HTML <text />
        this.stroke = this.svg
            .append("foreignObject")
            .attr("x", this.position.x)
            /// When flipping the y axis (scale(1, -1)), we add minus (-) before y coordinate
            .attr("y", -this.position.y)
            .attr("width", svgWidth)
            .attr("height", svgHeight)
            .attr("transform", "scale(1, -1)")
            .append("xhtml:text")
            .style("font-size", `${this.fontSize}pt`)
            .style("color", this.color);
        this.stroke.node().innerHTML = katex.renderToString(this.text);
    }
}
