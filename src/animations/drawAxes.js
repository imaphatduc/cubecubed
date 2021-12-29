import { Animation } from "./animation";

export class DrawAxes extends Animation {
    constructor(axes) {
        super();

        this.cubicon = axes;
        this.duration = 800;
    }

    play(sleepTime) {
        this.#drawAxis(this.cubicon.xAxis, sleepTime);
        this.#drawAxis(this.cubicon.yAxis, sleepTime);

        this.cubicon.elapsedTime += this.duration + sleepTime;
    }

    #drawAxis(axis, sleepTime) {
        /// Draw axis
        const path = axis.select("path.domain");
        const l = path.node().getTotalLength();

        path.attr("stroke-dasharray", l + ", " + l).attr(
            "stroke-dashoffset",
            l
        );
        path.transition()
            .delay(this.cubicon.elapsedTime + sleepTime)
            .duration(this.duration)
            .attr("stroke-dashoffset", 0);

        /// Mark ticks
        axis.selectAll("g.tick")
            .attr("opacity", 0)
            .transition()
            .delay(this.cubicon.elapsedTime + sleepTime)
            .duration(this.duration)
            .attr("opacity", 1);

        /// Fade in axes' arrows
        axis.select("defs marker path")
            .attr("opacity", 0)
            .transition()
            .delay(this.cubicon.elapsedTime + sleepTime)
            .duration(this.duration)
            .attr("opacity", 1);
    }
}
