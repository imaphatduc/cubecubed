import configFactory from "@utils/configFactory";

import { Vector2 } from "@math/Vector2";

import {
    LINE_SHAPE_CONFIG,
    LINE_SHAPE_DEFAULT_CONFIG,
} from "@configs/geometry/LINE_SHAPE_CONFIG";

import { Cubicon, CubiconParams } from "@cubicons/Cubicon";

export interface LineParams extends CubiconParams<LINE_SHAPE_CONFIG> {
    /**
     * Start point (tail) of this line.
     */
    startPoint?: Vector2;

    /**
     * End point (head) of this line.
     */
    endPoint: Vector2;
}

export class Line extends Cubicon {
    readonly cubiconType = "Line";

    readonly endPoint: Vector2;

    CONFIG: LINE_SHAPE_CONFIG;

    constructor(params: LineParams) {
        super({
            group: params.group,

            position: params.startPoint ?? new Vector2(0, 0),

            CONFIG: configFactory(params.CONFIG, LINE_SHAPE_DEFAULT_CONFIG),
        });

        this.endPoint = new Vector2(params.endPoint.x, params.endPoint.y);

        this.g_cubiconWrapper = this.svg_group
            .append("g")
            .attr("class", "line-wrapper")
            .style("transform-box", "fill-box")
            .style("transform-origin", "center");

        this.def_cubiconBase = this.g_cubiconWrapper
            .append("line")
            .attr("class", "line");
    }

    render() {
        const WstartPoint = this.coordsGtoW(this.position);
        const WendPoint = this.coordsGtoW(this.endPoint);

        this.applyToHTMLFlow(WstartPoint, WendPoint);

        return this;
    }

    protected applyToHTMLFlow(WstartPoint: Vector2, WendPoint: Vector2) {
        this.def_cubiconBase
            .attr("x1", WstartPoint.x)
            .attr("y1", WstartPoint.y)
            .attr("x2", WendPoint.x)
            .attr("y2", WendPoint.y)
            .attr("stroke", this.CONFIG.lineColor!)
            .attr("stroke-width", this.CONFIG.lineWidth!);
    }
}
