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

    /**
     * The SVG element that represents this text.
     */
    def_text: any;

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
    }

    render() {
        this.checkIfRendered();
        this.isRendered = true;

        this.applyToHTMLFlow(this.svg_group);
        this.setSVGPosition();

        return this;
    }

    protected applyToHTMLFlow(g_cubiconWrapper: any) {
        this.def_cubiconBase = g_cubiconWrapper
            .append("foreignObject")
            .attr("width", svgWidth)
            .attr("height", svgHeight)
            .attr("transform", "scale(1, -1)")
            .style("font-size", `${this.fontSize}pt`)
            .style("color", this.color);

        this.def_text = this.def_cubiconBase.append("xhtml:text");
        this.def_cubiconBase.node().innerHTML = katex.renderToString(this.text);
    }

    private setSVGPosition() {
        this.def_cubiconBase
            .attr("x", xGtoW(this.position.x))
            .attr("y", -yGtoW(this.position.y));
    }
}
