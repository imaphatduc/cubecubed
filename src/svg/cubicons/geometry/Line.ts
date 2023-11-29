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

export type VerticesMapFunction = (vertex: Vector2) => Vector2;

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

    vertices: Vector2[];

    declare CONFIG: LINE_SHAPE_CONFIG;

    constructor(params: LineParams) {
        super({
            group: params.group,

            position: params.startPoint ?? new Vector2(0, 0),

            CONFIG: configFactory(LINE_SHAPE_DEFAULT_CONFIG, params.CONFIG),
        });

        this.endPoint = new Vector2(params.endPoint.x, params.endPoint.y);

        this.initVertices();
    }

    render() {
        this.g_cubiconWrapper = this.svg_group
            .append("g")
            .attr("class", "line-wrapper")
            .style("transform-box", "fill-box")
            .style("transform-origin", "center");

        this.def_cubiconBase = this.g_cubiconWrapper
            .append("path")
            .attr("class", "line")
            .attr("fill", "none");

        this.applyToHTMLFlow();

        return this;
    }

    getData() {
        const { xGtoW, yGtoW } = this.group;

        const curveGenerator = line()
            .curve(curveNatural)
            .x((d: [number, number]) => xGtoW(d[0]))
            .y((d: [number, number]) => yGtoW(d[1]));

        return curveGenerator(
            this.vertices.map((vertex) => [vertex.x, vertex.y])
        );
    }

    private initVertices() {
        const dt = 0.02;

        this.vertices = range(0, 1 + dt, dt).map((t) => {
            const vertex = this.position
                .scale(1 - t)
                .add(this.endPoint.scale(t));

            return vertex;
        });
    }

    applyFunction(func: VerticesMapFunction) {
        this.vertices = this.vertices.map((vertex) => func(vertex));
        this.render();
    }

    protected applyToHTMLFlow() {
        this.def_cubiconBase
            .attr("d", this.getData())
            .attr("stroke", this.CONFIG.lineColor!)
            .attr("stroke-width", this.CONFIG.lineWidth!);
    }
}
