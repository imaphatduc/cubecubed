import TeXToSVG from "tex-to-svg";
//+++++++++++++++++++++++++++++++++++++++++++++++++++//

import configFactory from "@utils/configFactory";

import { Cubicon, CubiconParams } from "@cubicons/Cubicon";

export interface MATH_TEX_CONFIG {
    /**
     * Color of this text.
     */
    color?: string;

    /**
     * Font size of this text (in pts).
     */
    fontSize?: number;
}

export const MATH_TEX_DEFAULT_CONFIG: MATH_TEX_CONFIG = {
    color: "#fff",
    fontSize: 16,
};

export interface MathTexParams extends CubiconParams<MATH_TEX_CONFIG> {
    /**
     * Content of this text.
     */
    text: string;
}

export class MathTex extends Cubicon {
    readonly cubiconType = "MathTex";

    text: string;

    CONFIG: MATH_TEX_CONFIG;

    constructor(params: MathTexParams) {
        super({
            group: params.group,

            position: params.position,

            CONFIG: configFactory(params.CONFIG, MATH_TEX_DEFAULT_CONFIG),
        });

        this.text = params.text;

        this.g_cubiconWrapper = this.svg_group
            .append("g")
            .attr("class", "tex-wrapper");

        this.def_cubiconBase = this.g_cubiconWrapper.select("svg");
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
        this.assignInnerHtmlToTheWrapper();

        this.defineBaseElement();

        this.makeTexElementsUnique();
    }

    private assignInnerHtmlToTheWrapper() {
        const htmlString = this.initData();

        this.g_cubiconWrapper.node()!.innerHTML = htmlString;
    }

    private defineBaseElement() {
        this.def_cubiconBase = this.g_cubiconWrapper.select("svg");

        this.def_cubiconBase.attr("font-size", this.CONFIG.fontSize!);
    }

    private makeTexElementsUnique() {
        const id = (Math.random() + 1).toString(36).substring(7).toUpperCase();

        this.applyAttrsToPathElements(id);
        this.applyAttrsToRectElements(id);

        this.attachIdsToElements(id);
    }

    private applyAttrsToPathElements(id: string) {
        this.def_cubiconBase
            .select("defs")
            .selectAll("path")
            .attr(
                "id",
                (d, i: number, nodes: any) =>
                    nodes[i].getAttribute("id") + "-" + id
            )
            .attr("fill", this.CONFIG.color!)
            .attr("stroke", this.CONFIG.color!)
            .attr("stroke-width", 20);
    }

    private applyAttrsToRectElements(id: string) {
        this.def_cubiconBase
            .select("g")
            .selectAll("rect")
            .attr(
                "id",
                (d, i: number, nodes: any) =>
                    nodes[i].getAttribute("id") + "-" + id
            )
            .attr("fill", this.CONFIG.color!)
            .attr("stroke", this.CONFIG.color!)
            .attr("stroke-width", 20);
    }

    private attachIdsToElements(id: string) {
        this.def_cubiconBase
            .selectAll("use")
            .attr(
                "xlink:href",
                (d, i: number, nodes: any) =>
                    nodes[i].getAttribute("xlink:href") + "-" + id
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
