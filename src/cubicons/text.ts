import TeXToSVG from "tex-to-svg";
//+++++++++++++++++++++++++++++++++++++++++++++++++++//
import { Cubicon } from "./cubicon";
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

    private initData() {
        const SVGEquation = TeXToSVG(this.text);

        var parser = new DOMParser();
        var htmlDoc = parser.parseFromString(SVGEquation, "text/html");

        const pathTags = htmlDoc.querySelectorAll("path");

        return pathTags;
    }

    render() {
        this.checkIfRendered();
        this.isRendered = true;

        this.applyToHTMLFlow(this.svg_group);
        this.setSVGPosition();

        return this;
    }

    protected applyToHTMLFlow(g_cubiconWrapper: any) {
        const path_texts = this.initData();
        const dData = [];
        for (let i = 0; i < path_texts.length; i++) {
            dData.push(path_texts[i].getAttribute("d"));
        }

        const scaleRatio = 0.025;
        this.def_cubiconBase = g_cubiconWrapper.append("g");
        this.def_cubiconBase
            .selectAll("path")
            .data(path_texts)
            .enter()
            .append("path")
            .attr("d", (d: any) => d.getAttribute("d"))
            .attr("stroke", "#fff")
            .attr("stroke-width", 20);

        const pathsDOM = this.def_cubiconBase.selectAll("path").nodes();
        const widths = pathsDOM.map((dom: any) => dom.getBBox().width);
        widths.unshift(0);

        let prev = 0;
        this.def_cubiconBase
            .selectAll("path")
            .data(widths)
            .attr("transform", (d: number) => {
                const str = `translate(${
                    (d + prev) * scaleRatio
                }, 0) scale(${scaleRatio})`;
                prev += d;
                return str;
            });
    }

    private setSVGPosition() {
        this.def_cubiconBase.attr(
            "transform",
            `translate(${xGtoW(this.position.x + 0.2)}, ${yGtoW(
                this.position.y + 0.2
            )})`
        );
    }
}
