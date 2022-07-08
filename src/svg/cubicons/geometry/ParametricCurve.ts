import { range } from "d3-array";
import { curveNatural, line } from "d3-shape";
//+++++++++++++++++++++++++++++++++++++++++++++++++++//

import { LINE_CONFIG, LINE_DEFAULT_CONFIG } from "./Geometry";

import { Vector2 } from "@math/vector";

import { Group } from "@group/Group";
import { Geometry } from "./Geometry";

/**
 * Generate a 2d curve.
 */
export class ParametricCurve extends Geometry {
    readonly geoType = "parametric-curve";

    points: Vector2[];

    functionDef: (t: number) => Vector2;

    tRange: [number, number];

    constructor(params: {
        group: Group;
        tRange: [number, number];
        dt?: number;
        functionDef: (t: number) => Vector2;
        CONFIG: LINE_CONFIG;
    }) {
        super({ group: params.group });

        this.points = range(
            params.tRange[0],
            params.tRange[1] + (params.dt || 0.02),
            params.dt || 0.02
        ).map((t: number) => params.functionDef(t));

        this.functionDef = params.functionDef;
        this.tRange = params.tRange;

        ({
            lineColor: this.lineColor = LINE_DEFAULT_CONFIG.lineColor,
            lineWidth: this.lineWidth = LINE_DEFAULT_CONFIG.lineWidth,
        } = params.CONFIG ?? LINE_DEFAULT_CONFIG);
    }

    render() {
        this.g_cubiconWrapper = this.svg_group
            .append("g")
            .attr("class", `arc-wrapper`)
            .style("transform-box", "fill-box")
            .style("transform-origin", `center`);

        this.def_cubiconBase = this.g_cubiconWrapper
            .append("path")
            .attr("class", "parametric-curve")
            .attr("d", this.getData())
            .attr("fill", "none")
            .attr("stroke", this.lineColor)
            .attr("stroke-width", this.lineWidth);

        return this;
    }

    private getData() {
        const { xGtoW, yGtoW } = this.group;

        const points: [number, number][] = this.points.map((pt: Vector2) => [
            pt.x,
            pt.y,
        ]);

        const curveGenerator = line()
            .curve(curveNatural)
            .x((d: [number, number]) => xGtoW(d[0]))
            .y((d: [number, number]) => yGtoW(d[1]));

        return curveGenerator(points);
    }

    getOutputVector(t: number) {
        return this.functionDef(t);
    }

    getFirstOutputPoint() {
        return this.functionDef(this.tRange[0]);
    }

    getLastOutputPoint() {
        return this.functionDef(this.tRange[1]);
    }
}
