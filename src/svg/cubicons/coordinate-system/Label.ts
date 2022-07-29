import { InheritedCubiconParams } from "@cubicons/Cubicon";
import { MathTex, MATH_TEX_CONFIG } from "@cubicons/MathTex";
import { Axes } from "@cubicons/coordinate-system/Axes";

export interface LabelParams extends InheritedCubiconParams<MATH_TEX_CONFIG> {
    /**
     * The axes that this label belongs to.
     */
    axes: Axes;

    /**
     * Content of this label.
     */
    text: string;
}

export class Label extends MathTex {
    axes: Axes;

    constructor(params: LabelParams) {
        super({
            group: params.axes.group,

            position: params.position,

            text: params.text,

            CONFIG: params.CONFIG,
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
