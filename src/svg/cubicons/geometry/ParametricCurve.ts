import { range } from "d3-array";
import { curveNatural, line } from "d3-shape";
//+++++++++++++++++++++++++++++++++++++++++++++++++++//

import { LINE_CONFIG, LINE_DEFAULT_CONFIG } from "./Geometry";

import { Vector2 } from "@math/Vector2";

import { Group } from "@group/Group";
import { Cubicon } from "@cubicons/Cubicon";

/**
 * Generate a 2d curve.
 */
export class ParametricCurve extends Cubicon {
    readonly cubiconType = "ParametricCurve";

    points: Vector2[];

    functionDef: (t: number) => Vector2;

    tRange: [number, number];

    /**
     * Config options of this parametric curve.
     */
    CONFIG: LINE_CONFIG;

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

        this.CONFIG = {
            lineColor:
                params.CONFIG?.lineColor ?? LINE_DEFAULT_CONFIG.lineColor,
            lineWidth:
                params.CONFIG?.lineWidth ?? LINE_DEFAULT_CONFIG.lineWidth,
        };

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
        this.g_cubiconWrapper;

        this.def_cubiconBase
            .attr("d", this.getData())
            .attr("stroke", this.CONFIG.lineColor!)
            .attr("stroke-width", this.CONFIG.lineWidth!);

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
