import { Animation } from "./animation";
import { ANIME, EASE_TYPE } from "../cubicons/constants";
import {
    CREATE_TYPES,
    CREATE_SHAPE_TYPES,
    CREATE_LINE_TYPES,
} from "../cubicons/constants";
import { Vector2 } from "../math/vector";

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
        this.create(this.cubicon, sleepTime);
    }

    private create(cubicon: CREATE_TYPES, sleepTime: number) {
        switch (cubicon.cubType) {
            case "geometry": {
                switch (cubicon.geoType) {
                    case "line":
                    case "vector": {
                        this.lineCreation(cubicon, sleepTime);
                        break;
                    }
                    default: {
                        this.shapeCreation(cubicon, sleepTime);
                        break;
                    }
                }
                break;
            }
            case "coordinate-system": {
                switch (cubicon.coordSysObjType) {
                    case "axis-projector": {
                        this.lineCreation(cubicon, sleepTime);
                        break;
                    }
                    case "point":
                    case "graph": {
                        this.shapeCreation(cubicon, sleepTime);
                        break;
                    }
                }
                break;
            }
        }
    }

    private lineCreation(cubicon: CREATE_LINE_TYPES, sleepTime: number) {
        let WstartPoint, WendPoint;
        if (cubicon.cubType === "geometry") {
            WstartPoint = cubicon.getWpoint(cubicon.startPoint);
            WendPoint = cubicon.getWpoint(cubicon.endPoint);
        } else {
            WstartPoint = cubicon.getWpoint(cubicon.position);
            WendPoint =
                cubicon.type === "horizontal"
                    ? cubicon.axes.coordsGtoW(
                          new Vector2(0, cubicon.position.y)
                      )
                    : cubicon.axes.coordsGtoW(
                          new Vector2(cubicon.position.x, 0)
                      );
        }

        this.cubicon.lineStroke
            .attr("x2", WstartPoint.x)
            .attr("y2", WstartPoint.y);

        this.cubicon.lineStroke
            .transition()
            .ease(this.ease)
            .delay(cubicon.elapsedTime + sleepTime)
            .duration(this.duration)
            .attr("x2", WendPoint.x)
            .attr("y2", WendPoint.y);

        this.cubicon.elapsedTime += this.duration + sleepTime;

        // Applied for vector shape
        if (cubicon.cubType === "geometry" && cubicon.geoType === "vector") {
            const drawArrowHeadAnimTime = 1500;

            cubicon.arrowHead
                .style("opacity", 0)
                .transition()
                .ease(this.ease)
                .delay(this.cubicon.elapsedTime - 500)
                .duration(drawArrowHeadAnimTime)
                .style("opacity", 1);

            this.cubicon.elapsedTime += drawArrowHeadAnimTime - 500;
        }
    }

    private shapeCreation(cubicon: CREATE_SHAPE_TYPES, sleepTime: number) {
        cubicon.def_cubiconBase.style("fill-opacity", 0);

        const lineLen = this.cubicon.def_cubiconBase.node().getTotalLength();
        cubicon.def_cubiconBase
            .attr("stroke-dasharray", lineLen + ", " + lineLen)
            .attr("stroke-dashoffset", lineLen);

        cubicon.def_cubiconBase
            .transition()
            .ease(this.ease)
            .delay(cubicon.elapsedTime + sleepTime)
            .duration(this.duration)
            .attr("stroke-dashoffset", 0)
            .style("fill", cubicon.fillColor || "none") // Graph don't have fill
            .style("fill-opacity", cubicon.fillOpacity || "none");

        cubicon.elapsedTime += this.duration + sleepTime;
    }
}
