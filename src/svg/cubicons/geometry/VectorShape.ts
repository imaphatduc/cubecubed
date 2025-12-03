import { Selection } from "d3-selection";
//+++++++++++++++++++++++++++++++++++++++++++++++++++//

import { rToD } from "@converters/angleUnit";

import configFactory from "@utils/configFactory";

import { Vector2 } from "@math/Vector2";

import {
    VECTOR_SHAPE_CONFIG,
    VECTOR_SHAPE_DEFAULT_CONFIG,
} from "@configs/geometry/LINE_SHAPE_CONFIG";

import { Cubicon, CubiconParams } from "@cubicons/Cubicon";

export interface VectorShapeParams extends CubiconParams<VECTOR_SHAPE_CONFIG> {
    /**
     * Start point (tail) of this line.
     */
    startPoint?: Vector2;

    /**
     * End point (head) of this line.
     */
    endPoint: Vector2;
}

export class VectorShape extends Cubicon {
    readonly cubiconType = "VectorShape";

    endPoint: Vector2;

    def_lineStroke: Selection<SVGLineElement, unknown, HTMLElement, any>;

    def_arrowhead: Selection<SVGPolygonElement, unknown, HTMLElement, any>;

    declare CONFIG: VECTOR_SHAPE_CONFIG;

    constructor(params: VectorShapeParams) {
        super({
            group: params.group,

            position: params.startPoint ?? new Vector2(0, 0),

            CONFIG: configFactory(VECTOR_SHAPE_DEFAULT_CONFIG, params.CONFIG),
        });

        this.endPoint = params.endPoint;

        this.g_cubiconWrapper = this.group.svg_group
            .append("g")
            .attr("class", `vector-wrapper`)
            .attr("transform-box", "fill-box");

        this.def_cubiconBase = this.g_cubiconWrapper
            .append("g")
            .attr("class", "vector-group");

        this.def_lineStroke = this.def_cubiconBase
            .append("line")
            .attr("class", "vector-line");

        this.def_arrowhead = this.def_cubiconBase
            .append("polygon")
            .attr("class", "vector-arrow-head")
            .attr("stroke", "none");
    }

    render() {
        const WstartPoint = this.coordsGtoW(this.position);

        this.g_cubiconWrapper.attr(
            "transform-origin",
            `${WstartPoint.x} ${WstartPoint.y}`
        );

        this.drawVectorLine();
        this.drawVectorArrowHead();

        return this;
    }

    private drawVectorLine() {
        const { WstartPoint, WendPoint } = this.getVectorLinePoints();

        this.def_lineStroke
            .attr("x1", WstartPoint.x)
            .attr("y1", WstartPoint.y)
            .attr("x2", WendPoint.x)
            .attr("y2", WendPoint.y)
            .attr("stroke", this.CONFIG.lineColor!)
            .attr("stroke-width", this.CONFIG.lineWidth!);
    }

    private computeRenderedEndPoint() {
        const vector = this.vector;

        const magnitude = vector.magnitude();

        const overlapPortion = 0.1;

        const renderedEndPoint = vector
            .scale(
                (magnitude -
                    this.CONFIG.arrowheadHeight +
                    this.CONFIG.arrowheadHeight * overlapPortion) /
                    magnitude
            )
            .add(this.position);

        return renderedEndPoint;
    }

    private getVectorLinePoints() {
        const renderedEndPoint = this.computeRenderedEndPoint();

        const WstartPoint = this.coordsGtoW(this.position);
        const WendPoint = this.coordsGtoW(renderedEndPoint);

        return { WstartPoint, WendPoint };
    }

    private drawVectorArrowHead() {
        const { xGtoW, yGtoW } = this.group;

        const WendPoint = this.coordsGtoW(this.endPoint);

        this.def_arrowhead
            .attr(
                "points",
                `${xGtoW(-this.CONFIG.arrowheadWidth)}, ${yGtoW(
                    -this.CONFIG.arrowheadHeight
                )} 0, 0 ${xGtoW(this.CONFIG.arrowheadWidth)}, ${yGtoW(
                    -this.CONFIG.arrowheadHeight
                )}`
            )
            .attr("fill", this.CONFIG.lineColor!)
            .attr(
                "transform",
                `translate(${WendPoint.x} ${WendPoint.y}) rotate(${
                    this.theta - 90
                })`
            );
    }

    /**
     * @returns The coordinate vector.
     */
    get vector() {
        return this.endPoint.subtract(this.position);
    }

    /**
     * @returns The angle between this vector and the x axis.
     */
    get theta() {
        return rToD(
            Math.atan2(
                this.endPoint.y - this.position.y,
                this.endPoint.x - this.position.x
            )
        );
    }
}
