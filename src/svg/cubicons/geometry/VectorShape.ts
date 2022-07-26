import { Selection } from "d3-selection";
//+++++++++++++++++++++++++++++++++++++++++++++++++++//

import {
    LINE_DEFAULT_CONFIG,
    VECTOR_CONFIG,
    VECTOR_DEFAULT_CONFIG,
} from "./Geometry";

import { rToD } from "@math/convertUnit";
import { Vector2 } from "@math/Vector2";

import { Group } from "@group/Group";
import { Cubicon } from "@cubicons/Cubicon";

export class VectorShape extends Cubicon {
    readonly cubiconType = "VectorShape";

    /**
     * Start point (tail) of the vector.
     */
    startPoint: Vector2;

    /**
     * End point (head) of the vector.
     */
    endPoint: Vector2;

    def_lineStroke: Selection<SVGLineElement, unknown, HTMLElement, any>;

    def_arrowHead: Selection<SVGPolygonElement, unknown, HTMLElement, any>;

    /**
     * Config options of this vector shape.
     */
    CONFIG: VECTOR_CONFIG;

    constructor(params: {
        /**
         * The group that the vector belongs to.
         */
        group: Group;
        /**
         * Start point (tail) of the vector.
         */
        startPoint?: Vector2;
        /**
         * End point (head) of the vector.
         */
        endPoint: Vector2;
        /**
         * Config options of the vector line.
         */
        CONFIG?: VECTOR_CONFIG;
    }) {
        super({
            group: params.group,
            position: params.startPoint,
        });

        this.startPoint =
            typeof params.startPoint !== "undefined"
                ? params.startPoint
                : new Vector2(0, 0);

        this.endPoint = params.endPoint;

        this.CONFIG = {
            lineColor:
                params.CONFIG?.lineColor ?? LINE_DEFAULT_CONFIG.lineColor,
            lineWidth:
                params.CONFIG?.lineWidth ?? LINE_DEFAULT_CONFIG.lineWidth,
            arrowWidth:
                params.CONFIG?.arrowWidth ?? VECTOR_DEFAULT_CONFIG.arrowWidth,
            arrowHeight:
                params.CONFIG?.arrowHeight ?? VECTOR_DEFAULT_CONFIG.arrowHeight,
        };

        this.g_cubiconWrapper = this.svg_group
            .append("g")
            .attr("class", "vector-wrapper")
            .attr("transform-box", "fill-box");

        this.def_cubiconBase = this.g_cubiconWrapper
            .append("g")
            .attr("class", "vector-group");

        this.def_lineStroke = this.def_cubiconBase
            .append("line")
            .attr("class", "vector-line");

        this.def_arrowHead = this.def_cubiconBase
            .append("polygon")
            .attr("class", "vector-arrow-head")
            .attr("stroke", "none");
    }

    render() {
        const WstartPoint = this.coordsGtoW(this.startPoint);

        this.g_cubiconWrapper.attr(
            "transform-origin",
            `${WstartPoint.x} ${WstartPoint.y}`
        );

        this.drawVectorLine();
        this.drawVectorArrowHead();

        return this;
    }

    private drawVectorLine() {
        const vector = this.endPoint.subtract(this.startPoint);
        const magnitude = vector.magnitude();

        /// Make end point of vector's rendered line touch exactly at 10% height of its arrow
        const resultVector = vector.scale(
            (magnitude -
                this.CONFIG.arrowHeight +
                this.CONFIG.arrowHeight * 0.1) /
                magnitude
        );

        const WstartPoint = this.coordsGtoW(this.startPoint);
        const WendPoint = this.coordsGtoW(resultVector.add(this.startPoint));

        this.def_lineStroke
            .attr("x1", WstartPoint.x)
            .attr("y1", WstartPoint.y)
            .attr("x2", WendPoint.x)
            .attr("y2", WendPoint.y)
            .attr(
                "stroke",
                this.CONFIG.lineColor ?? VECTOR_DEFAULT_CONFIG.lineColor
            )
            .attr(
                "stroke-width",
                this.CONFIG.lineWidth ?? VECTOR_DEFAULT_CONFIG.lineWidth
            );
    }

    private drawVectorArrowHead() {
        const { xGtoW, yGtoW } = this.group;

        const WendPoint = this.coordsGtoW(this.endPoint);

        this.def_arrowHead
            .attr(
                "points",
                `${xGtoW(-this.CONFIG.arrowWidth)}, ${yGtoW(
                    -this.CONFIG.arrowHeight
                )} 0, 0 ${xGtoW(this.CONFIG.arrowWidth)}, ${yGtoW(
                    -this.CONFIG.arrowHeight
                )}`
            )
            .attr(
                "fill",
                this.CONFIG.lineColor ?? VECTOR_DEFAULT_CONFIG.lineColor
            )
            .attr(
                "transform",
                `translate(${WendPoint.x} ${WendPoint.y}) rotate(${
                    this.getTheta() - 90
                })`
            );
    }

    getVector() {
        return this.endPoint.subtract(this.startPoint);
    }

    /**
     *
     * @returns The angle between this vector and the x axis.
     */
    private getTheta() {
        return rToD(
            Math.atan2(
                this.endPoint.y - this.startPoint.y,
                this.endPoint.x - this.startPoint.x
            )
        );
    }
}
