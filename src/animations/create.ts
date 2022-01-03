import { Animation } from "./animation";
import { ANIME, EASE_TYPE } from "../cubicons/constants";
import { CREATE_TYPES } from "../cubicons/constants";

export class Create extends Animation {
    constructor({
        cubicon,
        duration = ANIME.CREATE,
        ease,
    }: {
        cubicon: CREATE_TYPES;
        duration?: number;
        ease?: EASE_TYPE;
    }) {
        super({ cubicon: cubicon, duration: duration, ease: ease });
    }

    play(sleepTime: number) {
        this.#create(this.cubicon, sleepTime);
    }

    #create(cubicon: CREATE_TYPES, sleepTime: number) {
        switch (cubicon.cubType) {
            case "geometry": {
                switch (cubicon.geoType) {
                    case "line":
                    case "vector": {
                        this.#lineCreation(sleepTime);
                        break;
                    }
                    default: {
                        this.#shapeCreation(sleepTime);
                        break;
                    }
                }
                break;
            }
            case "coordinate-system": {
                switch (cubicon.coordSysObjType) {
                    case "axis-projector": {
                        this.#lineCreation(sleepTime);
                    }
                    case "point": {
                        this.#shapeCreation(sleepTime);
                    }
                }
            }
        }
    }

    #lineCreation(sleepTime: number) {
        this.cubicon.lineStroke
            .attr("x2", this.cubicon.WstartPoint.x)
            .attr("y2", this.cubicon.WstartPoint.y);

        this.cubicon.lineStroke
            .transition()
            .ease(this.ease)
            .delay(this.cubicon.elapsedTime + sleepTime)
            .duration(this.duration)
            .attr("x2", this.cubicon.WendPoint.x)
            .attr("y2", this.cubicon.WendPoint.y);

        this.cubicon.elapsedTime += this.duration + sleepTime;

        if (this.cubicon.constructor.name === "Vector") {
            const drawArrowHeadAnimTime = 1500;
            this.cubicon.arrowHead
                .style("opacity", 0)
                .transition()
                .ease(this.ease)
                .delay(this.cubicon.elapsedTime - 500)
                .duration(drawArrowHeadAnimTime)
                .style("opacity", 1);

            this.cubicon.elapsedTime += drawArrowHeadAnimTime - 500;
        }
    }

    #shapeCreation(sleepTime: number) {
        this.cubicon.stroke.style("fill-opacity", 0);

        const lineLen = this.cubicon.stroke.node().getTotalLength();
        this.cubicon.stroke
            .attr("stroke-dasharray", lineLen + ", " + lineLen)
            .attr("stroke-dashoffset", lineLen);

        this.cubicon.stroke
            .transition()
            .ease(this.ease)
            .delay(this.cubicon.elapsedTime + sleepTime)
            .duration(this.duration)
            .attr("stroke-dashoffset", 0)
            .style("fill", this.cubicon.fillColor)
            .style("fill-opacity", this.cubicon.fillOpacity);

        this.cubicon.elapsedTime += this.duration + sleepTime;
    }
}
