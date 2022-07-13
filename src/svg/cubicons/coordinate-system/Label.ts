import { Vector2 } from "@math/vector";

import { Axes } from "./Axes";

import { MathText } from "@cubicons/MathText";

export class Label extends MathText {
    readonly coordSysObjType = "label";

    /**
     * The axes that this label belongs to.
     */
    axes: Axes;

    constructor(params: {
        axes: Axes;
        position: Vector2;
        text: string;
        color?: string;
        fontSize?: number;
    }) {
        super({
            group: params.axes.group,
            position: params.position,
            text: params.text,
            color: params.color ?? "#fff",
            fontSize: params.fontSize ?? 18,
        });

        this.g_cubiconWrapper.attr("class", "graph-label-wrapper");

        this.axes = params.axes;
    }

    /**
     * Draw (and render) the label onto SVG.
     */
    render() {
        super.applyToHTMLFlow();
        this.setPosition();

        return this;
    }

    private setPosition() {
        const xScale = this.axes.getXScale();
        const yScale = this.axes.getYScale();

        this.g_cubiconWrapper.attr(
            "transform",
            `translate(${xScale(this.position.x)}, ${yScale(
                this.position.y
            )}) scale(1, -1)`
        );
    }
}
