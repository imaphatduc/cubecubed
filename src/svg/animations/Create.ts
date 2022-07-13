import { ANIME, EASE_TYPE } from "@consts";

import {
    Animation,
    CREATE_TYPES,
    CREATE_SHAPE_TYPES,
    CREATE_LINE_TYPES,
} from "./Animation";

import { VectorShape } from "@cubicons/geometry/VectorShape";

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

    private lineCreation(cubicon: CREATE_LINE_TYPES, sleepTime: number) {
        // Line() and Vector() both have `<line>` element
        this.applyLineCreation(
            cubicon.geoType === "line"
                ? cubicon.def_cubiconBase
                : cubicon.def_lineStroke,
            cubicon,
            sleepTime
        );

        // Applied for vector shape's arrow head
        if (cubicon.geoType === "vector") {
            this.applyArrowCreation(cubicon.def_arrowHead, sleepTime);
        }
    }

    private applyLineCreation(
        selection: any,
        cubicon: CREATE_LINE_TYPES,
        sleepTime: number
    ) {
        const WstartPoint = cubicon.getWpoint(cubicon.startPoint);
        const WendPoint =
            cubicon.geoType === "vector"
                ? getVectorLineEndPoint(cubicon)
                : cubicon.getWpoint(cubicon.endPoint);

        selection.attr("x2", WstartPoint.x).attr("y2", WstartPoint.y);

        function getVectorLineEndPoint(vectorShape: VectorShape) {
            const vector = vectorShape.endPoint.subtract(
                vectorShape.startPoint
            );
            const magnitude = vector.magnitude();

            /// Make end point of vector's rendered line touch exactly at 10% height of its arrow
            const resultVector = vector.scale(
                (magnitude -
                    vectorShape.CONFIG.arrowHeight +
                    vectorShape.CONFIG.arrowHeight * 0.1) /
                    magnitude
            );

            return vectorShape.coordsGtoW(
                resultVector.add(vectorShape.startPoint)
            );
        }

        selection
            .transition()
            .ease(this.ease)
            .delay(sleepTime)
            .duration(this.duration)
            .attr("x2", WendPoint.x)
            .attr("y2", WendPoint.y);
    }

    private applyArrowCreation(selection: any, sleepTime: number) {
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
        cubicon.def_cubiconBase.attr("fill-opacity", 0);

        const lineLength = this.cubicon.def_cubiconBase.node().getTotalLength();

        cubicon.def_cubiconBase
            .attr("stroke-dasharray", lineLength + ", " + lineLength)
            .attr("stroke-dashoffset", lineLength);

        const fill =
            cubicon.cubType === "coordinate-system"
                ? "none"
                : cubicon.CONFIG.fillColor!;

        const fillOpacity =
            cubicon.cubType === "geometry" ? cubicon.CONFIG.fillOpacity! : 1;

        // Drawing animation and fade in fill
        cubicon.def_cubiconBase
            .transition()
            .ease(this.ease)
            .delay(sleepTime)
            .duration(this.duration)
            .attr("stroke-dashoffset", 0)
            .attr("fill", fill)
            .attr("fill-opacity", fillOpacity);
    }
}
