import { Cubicon } from "./cubicon";
import { svgWidth, svgHeight } from "./constants";
import { Vector2 } from "../math/vector";
import { xGtoW, yGtoW } from "../math/convertUnit";
import { Group } from "../scene/group";

interface MATHTEXT_CONSTRUCTOR {
    group: Group;
    position?: Vector2;
    text?: string;
    color?: string;
    fontSize?: number;
}
export class MathText extends Cubicon {
    readonly cubType = "math-text";

    text: string;
    color: string;
    fontSize: number;

    constructor({
        group,
        position = new Vector2(0, 0),
        text = "",
        color = "#fff",
        fontSize = 13,
    }: MATHTEXT_CONSTRUCTOR) {
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
            .attr("x", xGtoW(this.position.x))
            /// When flipping the y axis (scale(1, -1)), we add minus (-) before y coordinate
            .attr("y", -yGtoW(this.position.y))
            .attr("width", svgWidth)
            .attr("height", svgHeight)
            .attr("transform", "scale(1, -1)")
            .append("xhtml:text")
            .style("font-size", `${this.fontSize}pt`)
            .style("color", this.color);
        this.stroke.node().innerHTML = katex.renderToString(this.text);
    }
}
