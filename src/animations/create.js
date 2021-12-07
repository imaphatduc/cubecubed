import { Animation } from "./animation";
import { ANIME } from "../cubicons/constants";

export class Create extends Animation {
    constructor({ cubicon, duration = ANIME.CREATE }) {
        super();
        this.cubicon = cubicon;
        this.duration = duration;
    }

    play() {
        this.#create(this.cubicon);
    }

    #create(cubicon) {
        if (cubicon.constructor.name === "Vector") {
            const drawLineAnimTime = 1500;
            cubicon.lineStroke
                .transition()
                .delay(cubicon.elapsedTime)
                .duration(drawLineAnimTime)
                .attr("x2", cubicon.endPoint.x)
                .attr("y2", cubicon.endPoint.y);

            cubicon.elapsedTime += drawLineAnimTime;

            const drawArrowHeadAnimTime = 1500;
            cubicon.arrowHead
                .transition()
                .delay(cubicon.elapsedTime - 500)
                .duration(drawArrowHeadAnimTime)
                .style("opacity", 1);

            cubicon.elapsedTime += drawArrowHeadAnimTime - 500;
        } else {
            cubicon.stroke.style("fill-opacity", 0);

            const lineLen = cubicon.stroke.node().getTotalLength();
            cubicon.stroke
                .attr("stroke-dasharray", lineLen + ", " + lineLen)
                .attr("stroke-dashoffset", lineLen);

            if (cubicon.fillColor !== undefined && cubicon.fillColor !== null) {
                cubicon.stroke
                    .transition()
                    .delay(cubicon.elapsedTime)
                    .duration(this.duration)
                    .attr("stroke-dashoffset", 0)
                    .style("fill", cubicon.fillColor)
                    .style("fill-opacity", cubicon.fillOpacity);
            } else {
                cubicon.stroke
                    .transition()
                    .delay(cubicon.elapsedTime)
                    .duration(this.duration)
                    .attr("stroke-dashoffset", 0);
            }

            cubicon.elapsedTime += this.duration;
        }
    }
}
