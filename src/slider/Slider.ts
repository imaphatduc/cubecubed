import { select, Selection } from "d3-selection";
//+++++++++++++++++++++++++++++++++++++++++++++++++++//

export interface SliderParams {
    label: string;

    /**
     * @default 0
     */
    min?: number;
    max: number;
    /**
     * @default 0.02
     */
    step?: number;
    /**
     * @default params.max
     */
    value?: number;

    onSlide: (value: number) => any;
}

export class Slider {
    html_slider: Selection<HTMLInputElement, unknown, HTMLElement, any>;

    label: string;

    min: number;
    max: number;
    step: number;
    value: number;

    onSlide: (value: number) => any;

    constructor(params: SliderParams) {
        this.label = params.label;

        this.min = params.min ?? 0;
        this.max = params.max;
        this.step = params.step ?? 0.02;
        this.value = params.value ?? params.max;

        this.onSlide = params.onSlide;

        this.applyToHTMLFlow();
    }

    private applyToHTMLFlow() {
        const wrapper = select("#cubecubed")
            .append("div")
            .attr("class", "slider-wrapper")
            .style("position", "absolute")
            .style("margin", "10px")
            .style("padding", "10px")
            .style("z-index", 1)
            .style("display", "flex")
            .style("align-items", "center")
            .style("gap", "20px")
            .style("color", "white");

        wrapper
            .append("p")
            .text(this.label)
            .style("font-family", "Roboto, Arial, sans-serif");

        const sliderId = `${this.label.replace(/[^A-Za-z0-9]/g, '-')}-slider`

        this.html_slider = wrapper
            .append("input")
            .attr("id", sliderId)
            .attr("class", "slider")
            .attr("type", "range")
            .attr("min", this.min)
            .attr("max", this.max)
            .attr("step", this.step)
            .attr("value", this.value)
            .attr("data-orientation", "vertical")
            .on("input", () => {
                const value = parseFloat(
                    // @ts-expect-error who cares?
                    select(`#${sliderId}`).node().value ?? 0
                );

                this.onSlide(value);
            });
    }
}
