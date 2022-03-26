import { Vector2 } from "@math/vector";

import { Axes } from "./Axes";
import { Graph } from "./Graph";

import { MathText } from "@cubicons/MathText";

export class Label extends MathText {
    readonly coordSysObjType = "label";

    /**
     * The axes that this label belongs to.
     */
    axes: Axes;

    constructor(params: {
        parent: Graph;
        position: Vector2;
        text: string;
        color?: string;
        fontSize?: number;
    }) {
        super({
            group: params.parent.axes.group,
            position: params.position,
            text: params.text,
            color: params.color ?? "#fff",
            fontSize: params.fontSize ?? 18,
        });

        this.g_cubiconWrapper = params.parent.g_cubiconWrapper;
        this.axes = params.parent.axes;
    }

    /**
     * Draw (and render) the label onto SVG.
     */
    render() {
        this.checkIfRendered();
        this.isRendered = true;

        super.applyToHTMLFlow(this.g_cubiconWrapper);
        this.setPosition();

        this.def_cubiconBase.attr("class", "graph-label");

        return this;
    }

    private setPosition() {
        this.def_cubiconBase.attr(
            "transform",
            `translate(${this.axes.xScale(this.position.x)}, ${this.axes.yScale(
                this.position.y
            )}) scale(1, -1)`
        );
    }
}
