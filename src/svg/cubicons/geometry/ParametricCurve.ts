import { range } from "d3-array";
import { curveNatural, line } from "d3-shape";
//+++++++++++++++++++++++++++++++++++++++++++++++++++//

import configFactory from "@utils/configFactory";

import { Vector2 } from "@math/Vector2";

import {
    LINE_SHAPE_CONFIG,
    LINE_SHAPE_DEFAULT_CONFIG,
} from "@configs/geometry/LINE_SHAPE_CONFIG";

import { Cubicon, CubiconParams } from "@cubicons/Cubicon";

export interface ParametricCurveParams
    extends CubiconParams<LINE_SHAPE_CONFIG> {
    /**
     * Range of the parameter t.
     */
    tRange: [number, number];

    /**
     * Parametric function definition.
     */
    functionDef: (t: number) => Vector2;
}

export class ParametricCurve extends Cubicon {
    readonly cubiconType = "ParametricCurve";

    functionDef: (t: number) => Vector2;

    tRange: [number, number];

    CONFIG: LINE_SHAPE_CONFIG;

    constructor(params: ParametricCurveParams) {
        super({
            group: params.group,

            CONFIG: configFactory(params.CONFIG, LINE_SHAPE_DEFAULT_CONFIG),
        });

        this.functionDef = params.functionDef;

        this.tRange = params.tRange;

        this.g_cubiconWrapper = this.svg_group
            .append("g")
            .attr("class", "parametric-curve-wrapper")
            .style("transform-box", "fill-box")
            .style("transform-origin", "center");

        this.def_cubiconBase = this.g_cubiconWrapper
            .append("path")
            .attr("class", "parametric-curve")
            .attr("fill", "none");
    }

    render() {
        this.def_cubiconBase
            .attr("d", this.getData())
            .attr("stroke", this.CONFIG.lineColor!)
            .attr("stroke-width", this.CONFIG.lineWidth!);

        return this;
    }

    private getData() {
        const { xGtoW, yGtoW } = this.group;

        const curveGenerator = line()
            .curve(curveNatural)
            .x((d: [number, number]) => xGtoW(d[0]))
            .y((d: [number, number]) => yGtoW(d[1]));

        return curveGenerator(
            this.vertices.map((vertex) => [vertex.x, vertex.y])
        );
    }

    getOutputVector(t: number) {
        return this.functionDef(t);
    }

    get vertices() {
        const dt = 0.02;

        const vertices = range(this.tRange[0], this.tRange[1] + dt, dt).map(
            (t: number) => this.functionDef(t)
        );

        return vertices;
    }

    get firstOutputPoint() {
        return this.functionDef(this.tRange[0]);
    }

    get lastOutputPoint() {
        return this.functionDef(this.tRange[1]);
    }
}
