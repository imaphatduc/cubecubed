import { Selection } from "d3-selection";
//+++++++++++++++++++++++++++++++++++++++++++++++++++//

import { ANIME, EASE_TYPE } from "@consts";

import { Vector2 } from "@math/vector";

import { Animation, CREATE_TYPES, CREATE_SHAPE_TYPES } from "./Animation";

import { Line } from "@cubicons/geometry/Line";
import { VectorShape } from "@cubicons/geometry/VectorShape";

/**
 * Play animated creation on the screen.
 */
export class Create extends Animation {
    readonly animationType = "Create";

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
        switch (cubicon.cubiconType) {
            case "Line":
                this.lineCreation(cubicon, sleepTime);

                break;

            case "VectorShape":
                this.vectorShapeCreation(cubicon, sleepTime);

                break;

            case "Circle":
            case "Rectangle":
            case "Graph":
                this.shapeCreation(cubicon, sleepTime);

                break;

            default:
                console.warn("This cubicon is not defined in CREATE_TYPES.");

                break;
        }
    }

    private lineCreation(cubicon: Line, sleepTime: number) {
        const WstartPoint = cubicon.coordsGtoW(cubicon.startPoint);
        const WendPoint = cubicon.coordsGtoW(cubicon.endPoint);

        this.applySVGLineCreation(
            cubicon.def_cubiconBase,
            WstartPoint,
            WendPoint,
            sleepTime
        );
    }

    private vectorShapeCreation(cubicon: VectorShape, sleepTime: number) {
        const WstartPoint = cubicon.coordsGtoW(cubicon.startPoint);

        const WendPoint = cubicon.coordsGtoW(
            this.getVectorShapeLineEndPoint(cubicon)
        );

        this.applySVGLineCreation(
            cubicon.def_lineStroke,
            WstartPoint,
            WendPoint,
            sleepTime
        );

        this.applySVGArrowCreation(cubicon.def_arrowHead, sleepTime);
    }

    private applySVGLineCreation(
        selection: Selection<SVGLineElement, unknown, HTMLElement, any>,
        WstartPoint: Vector2,
        WendPoint: Vector2,
        sleepTime: number
    ) {
        selection.attr("x2", WstartPoint.x).attr("y2", WstartPoint.y);

        selection
            .transition()
            .ease(this.ease)
            .delay(sleepTime)
            .duration(this.duration)
            .attr("x2", WendPoint.x)
            .attr("y2", WendPoint.y);
    }

    private getVectorShapeLineEndPoint(vectorShape: VectorShape) {
        const vector = vectorShape.getVector();

        const magnitude = vector.magnitude();

        // Make end point of vector's rendered line
        // touches exactly at 10% height of its arrow
        const scaledVector = vector
            .scale(
                (magnitude -
                    vectorShape.CONFIG.arrowHeight +
                    vectorShape.CONFIG.arrowHeight * 0.1) /
                    magnitude
            )
            .add(vectorShape.startPoint);

        return scaledVector;
    }

    private applySVGArrowCreation(
        selection: Selection<SVGPolygonElement, unknown, HTMLElement, any>,
        sleepTime: number
    ) {
        const delayTime = this.duration * 0.45;

        selection
            .attr("opacity", 0)
            .transition()
            .ease(this.ease)
            .delay(sleepTime + this.duration - delayTime)
            .duration(delayTime)
            .attr("opacity", 1);
    }

    /**
     * Applied for these cubicon types:
     *
     * - Geometry(): Rectangle, Square, Circle, GridOrigin.
     * - CoordinateSystem(): Point, Graph.
     */
    private shapeCreation(cubicon: CREATE_SHAPE_TYPES, sleepTime: number) {
        const lineLength = this.cubicon.def_cubiconBase.node().getTotalLength();

        const { fillColor, fillOpacity } =
            cubicon.cubiconType === "Graph"
                ? {
                      fillColor: "none",
                      fillOpacity: 1,
                  }
                : {
                      fillColor: cubicon.CONFIG.fillColor!,
                      fillOpacity: cubicon.CONFIG.fillOpacity!,
                  };

        cubicon.def_cubiconBase
            .attr("stroke-dasharray", lineLength + ", " + lineLength)
            .attr("stroke-dashoffset", lineLength)
            .attr("fill-opacity", 0);

        cubicon.def_cubiconBase
            .transition()
            .ease(this.ease)
            .delay(sleepTime)
            .duration(this.duration)
            .attr("stroke-dashoffset", 0)
            .attr("fill", fillColor)
            .attr("fill-opacity", fillOpacity);
    }
}
