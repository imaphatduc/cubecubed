import katex from "katex";
//+++++++++++++++++++++++++++++++++++++++++++++++++++//
import { Cubicon } from "./cubicon";
import { svgWidth, svgHeight } from "./constants";
import { Vector2 } from "../math/vector";
import { xGtoW, yGtoW } from "../math/convertUnit";
import { Group } from "../scene/group";

export class MathText extends Cubicon {
    readonly cubType = "math-text";

    /**
     * Content of this text.
     */
    text: string;

    /**
     * Color of this text.
     */
    color: string;

    /**
     * Font size of this text (in points).
     */
    fontSize: number;

    constructor(params: {
        /**
         * The group that the text belongs to.
         */
        group: Group;
        /**
         * Position of the text.
         */
        position?: Vector2;
        /**
         * Content of the text.
         */
        text: string;
        /**
         * Color of the text.
         */
        color?: string;
        /**
         * Font size of the text.
         */
        fontSize?: number;
    }) {
        super({
            group: params.group,
            position: params.position ?? new Vector2(0, 0),
        });

        this.text = params.text;
        this.color = params.color ?? "#fff";
        this.fontSize = params.fontSize ?? 13;

        this.draw();
    }

    private draw() {
        // this.stroke is a d3 selection of HTML <text />
        this.def_cubiconBase = this.svg_group
            .append("foreignObject")
            .attr("x", xGtoW(this.position.x))
            // When flipping the y axis (scale(1, -1)), we add minus (-) before y coordinate
            .attr("y", -yGtoW(this.position.y))
            .attr("width", svgWidth)
            .attr("height", svgHeight)
            .attr("transform", "scale(1, -1)")
            .append("xhtml:text")
            .style("font-size", `${this.fontSize}pt`)
            .style("color", this.color);
        this.def_cubiconBase.node().innerHTML = katex.renderToString(this.text);
    }
}
