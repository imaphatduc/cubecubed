import {
    LINE_DEFAULT_CONFIG,
    VECTOR_CONFIG,
    VECTOR_DEFAULT_CONFIG,
} from "./Geometry";

import { rToD } from "../../../math/convertUnit";
import { Vector2 } from "../../../math/vector";

import { Group } from "../../group/Group";
import { Geometry } from "./Geometry";

export class Vector extends Geometry {
    /**
     * Geometry type of the vector.
     */
    readonly geoType = "vector";

    /// These have to be public to use in Create animations
    /**
     * Start point (tail) of the vector.
     */
    readonly startPoint: Vector2;
    /**
     * End point (head) of the vector.
     */
    readonly endPoint: Vector2;

    /**
     * The smaller angle (in degree) between the vector and the x axis.
     */
    theta: number;

    def_lineStroke: any;
    def_arrowHead: any;

    readonly arrowWidth: any;
    readonly arrowHeight: any;

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

        ({
            lineColor: this.lineColor = LINE_DEFAULT_CONFIG.lineColor,
            lineWidth: this.lineWidth = LINE_DEFAULT_CONFIG.lineWidth,
            arrowWidth: this.arrowWidth = VECTOR_DEFAULT_CONFIG.arrowWidth,
            arrowHeight: this.arrowHeight = VECTOR_DEFAULT_CONFIG.arrowHeight,
        } = params.CONFIG ?? VECTOR_DEFAULT_CONFIG);

        // this.theta determines the angle between vector's arrow and its line.
        this.theta = rToD(
            Math.atan2(
                this.endPoint.y - this.startPoint.y,
                this.endPoint.x - this.startPoint.x
            )
        );
    }

    getWpoint(point: Vector2) {
        return this.coordsGtoW(point);
    }

    render() {
        this.checkIfRendered();
        this.isRendered = true;

        const WstartPoint = this.coordsGtoW(this.startPoint);

        this.g_cubiconWrapper = this.svg_group
            .append("g")
            .attr("class", `vector-wrapper`)
            .attr("transform-box", "fill-box")
            .attr("transform-origin", `${WstartPoint.x} ${WstartPoint.y}`);

        this.def_cubiconBase = this.g_cubiconWrapper
            .append("g")
            .attr("class", "vector-group");

        this.drawVectorLine();
        this.drawVectorArrowHead();

        return this;
    }

    private drawVectorLine() {
        const vector = this.endPoint.subtract(this.startPoint);
        const magnitude = vector.magnitude();

        /// Make end point of vector's rendered line touch exactly at 10% height of its arrow
        const resultVector = vector.scale(
            (magnitude - this.arrowHeight + this.arrowHeight * 0.1) / magnitude
        );

        const WstartPoint = this.coordsGtoW(this.startPoint);
        const WendPoint = this.coordsGtoW(resultVector.add(this.startPoint));

        this.def_lineStroke = this.def_cubiconBase
            .append("line")
            .attr("class", "vector-line")
            .attr("x1", WstartPoint.x)
            .attr("y1", WstartPoint.y)
            .attr("x2", WendPoint.x)
            .attr("y2", WendPoint.y)
            .attr("stroke", this.lineColor)
            .attr("stroke-width", this.lineWidth);
    }

    private drawVectorArrowHead() {
        const { xGtoW, yGtoW } = this.group;

        const WendPoint = this.coordsGtoW(this.endPoint);

        this.def_arrowHead = this.def_cubiconBase
            .append("polygon")
            .attr("class", "vector-arrow-head")
            .attr(
                "points",
                `${xGtoW(-this.arrowWidth)}, ${yGtoW(
                    -this.arrowHeight
                )} 0, 0 ${xGtoW(this.arrowWidth)}, ${yGtoW(-this.arrowHeight)}`
            )
            .attr("fill", this.lineColor)
            .attr("stroke", "none")
            .attr(
                "transform",
                `translate(${WendPoint.x} ${WendPoint.y}) rotate(${
                    this.theta - 90
                })`
            );
    }
}
