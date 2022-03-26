import TeXToSVG from "tex-to-svg";
//+++++++++++++++++++++++++++++++++++++++++++++++++++//

import { xGtoW, yGtoW } from "@math/convertUnit";
import { Vector2 } from "@math/vector";

import { Group } from "@group/Group";
import { Cubicon } from "./Cubicon";

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
        this.fontSize = params.fontSize ?? 16;
    }

    private initData() {
        const SVGEquation = TeXToSVG(this.text);
        return SVGEquation;
    }

    render() {
        this.checkIfRendered();
        this.isRendered = true;

        this.applyToHTMLFlow(this.svg_group);
        this.setSVGPosition();

        return this;
    }

    protected applyToHTMLFlow(g_cubiconWrapper: any) {
        const htmlString = this.initData();
        const idKey = (Math.random() + 1)
            .toString(36)
            .substring(7)
            .toUpperCase();
        this.def_cubiconBase = g_cubiconWrapper
            .append("svg")
            .attr("font-size", this.fontSize);
        this.def_cubiconBase.node().innerHTML = htmlString;
        this.def_cubiconBase
            .select("defs")
            .selectAll("path")
            .attr(
                "id",
                (d: any, i: number, nodes: any) =>
                    nodes[i].getAttribute("id") + "-" + idKey
            )
            .attr("fill", this.color);

        this.def_cubiconBase
            .selectAll("use")
            .attr(
                "xlink:href",
                (d: any, i: number, nodes: any) =>
                    nodes[i].getAttribute("xlink:href") + "-" + idKey
            );
    }

    private setSVGPosition() {
        this.def_cubiconBase.attr(
            "transform",
            `translate(${xGtoW(this.position.x)}, ${yGtoW(
                this.position.y
            )}) scale(1, -1)`
        );
    }
}
