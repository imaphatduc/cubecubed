import { Animation } from "./animation";
import { ANIME, EASE_TYPE } from "../cubicons/constants";
import {
    CREATE_TYPES,
    CREATE_SHAPE_TYPES,
    CREATE_LINE_TYPES,
} from "../cubicons/constants";

/**
 * Play animated creation on the screen.
 */
export class Create extends Animation {
    constructor(params: {
        /**
         * The target cubicon to play this animation.
         */
        cubicon: CREATE_TYPES;
        /**
         * Time to play this animation. (in milliseconds)
         */
        duration?: number;
        /**
         * Custom easing function for smooth animation.
         */
        ease?: EASE_TYPE;
    }) {
        super({
            cubicon: params.cubicon,
            duration: params.duration ?? ANIME.CREATE,
            ease: params.ease,
        });
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
                    case "graph": {
                        this.shapeCreation(cubicon, sleepTime);
                        break;
                    }
                    default: {
                        console.warn(
                            "This cubicon is not defined in CREATE_TYPES."
                        );
                    }
                }
                break;
            }
        }
    }

    // Applied for SVG `<line/>`
    private lineCreation(cubicon: CREATE_LINE_TYPES, sleepTime: number) {
        const WstartPoint = cubicon.getWpoint(cubicon.startPoint);
        const WendPoint = cubicon.getWpoint(cubicon.endPoint);

        this.cubicon.def_cubiconBase
            .attr("x2", WstartPoint.x)
            .attr("y2", WstartPoint.y);

        this.cubicon.def_cubiconBase
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

            cubicon.def_arrowHead
                .style("opacity", 0)
                .transition()
                .ease(this.ease)
                .delay(this.cubicon.elapsedTime - 500)
                .duration(drawArrowHeadAnimTime)
                .style("opacity", 1);

            this.cubicon.elapsedTime += drawArrowHeadAnimTime - 500;
        }
    }

    /**
     * Applied for all of SVG tags except `<line/>`
     *
     * Legal cubicon types:
     *
     * - Geometry(): Rectangle, Square, Circle, GridOrigin.
     * - CoordinateSystem(): Point, Graph.
     */
    private shapeCreation(cubicon: CREATE_SHAPE_TYPES, sleepTime: number) {
        cubicon.def_cubiconBase.style("fill-opacity", 0);

        //
        const lineLen = this.cubicon.def_cubiconBase.node().getTotalLength();
        cubicon.def_cubiconBase
            .attr("stroke-dasharray", lineLen + ", " + lineLen)
            .attr("stroke-dashoffset", lineLen);

        // Drawing animation and fade in fill
        cubicon.def_cubiconBase
            .transition()
            .ease(this.ease)
            .delay(cubicon.elapsedTime + sleepTime)
            .duration(this.duration)
            .attr("stroke-dashoffset", 0)
            .style(
                "fill",
                cubicon.cubType === "coordinate-system"
                    ? "none" // Graph doesn't have fill
                    : cubicon.fillColor
            )
            .style(
                "fill-opacity",
                cubicon.cubType === "geometry" ? cubicon.fillOpacity : 1
            );

        cubicon.elapsedTime += this.duration + sleepTime;
    }
}
