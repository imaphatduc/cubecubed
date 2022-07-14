import TeXToSVG from "tex-to-svg";
//+++++++++++++++++++++++++++++++++++++++++++++++++++//

import { Vector2 } from "@math/vector";

import { Group } from "@group/Group";
import { Cubicon } from "./Cubicon";

export class MathText extends Cubicon {
    readonly cubiconType = "MathText";

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
        this.fontSize = params.fontSize ?? 16;

        this.g_cubiconWrapper = this.svg_group
            .append("g")
            .attr("class", "tex-wrapper");
    }

    private initData() {
        const SVGEquation = TeXToSVG(this.text);

        return SVGEquation;
    }

    render() {
        this.applyToHTMLFlow();
        this.setSVGPosition();

        return this;
    }

    protected applyToHTMLFlow() {
        const htmlString = this.initData();

        const idKey = (Math.random() + 1)
            .toString(36)
            .substring(7)
            .toUpperCase();

        this.g_cubiconWrapper.node()!.innerHTML = htmlString;

        this.def_cubiconBase = this.g_cubiconWrapper.select("svg");

        this.def_cubiconBase.attr("font-size", this.fontSize);

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
        const { xGtoW, yGtoW } = this.group;

        this.g_cubiconWrapper.attr(
            "transform",
            `translate(${xGtoW(this.position.x)}, ${yGtoW(
                this.position.y
            )}) scale(1, -1)`
        );
    }
}
