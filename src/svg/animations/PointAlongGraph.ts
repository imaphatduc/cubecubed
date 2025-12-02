import { ANIME } from "@consts";

import { AxisProjector } from "@cubicons/coordinate-system/AxisProjector";
import { Graph } from "@cubicons/coordinate-system/Graph";
import { Point } from "@cubicons/coordinate-system/Point";

import { Animation, AnimationParams } from "@animations/Animation";
import { Vector2 } from "@math/Vector2";

export interface PointAlongGraphParams extends AnimationParams<Point> {
    horizontalProjector?: AxisProjector;

    verticalProjector?: AxisProjector;

    /**
     * Which graph should the point moving along?
     */
    graph: Graph;

    /**
     * x coordinate of the point's target position.
     */
    xPos: number;
}

/**
 * Animate the smooth motion of a point along a graph. **Note** that you have to
 * call either of `Axes().pointOnGraph(args)` or `Axes().pointToCoords(args)` to
 * play this animation.
 */
export class PointAlongGraph extends Animation {
    readonly animationType = "PointAlongGraph";

    declare cubicon: Point;

    private horizontalProjector?: AxisProjector;

    private verticalProjector?: AxisProjector;

    private graph: Graph;

    private xPos: number;

    private tweenX = (t: number) => {
        const deltaX = this.getDeltaX();

        const x = t * deltaX + this.cubicon.position.x;

        return x;
    };

    private tweenY = (t: number) => {
        // const yScale = this.graph.axes.getYScale();

        const deltaX = this.getDeltaX();

        const y = this.graph.functionDef(t * deltaX + this.cubicon.position.x);

        return y;
    };

    constructor(params: PointAlongGraphParams) {
        super({
            cubicon: params.cubicon,

            duration: params.duration ?? ANIME.CREATE,

            ease: params.ease,
        });

        this.horizontalProjector = params.horizontalProjector;

        this.verticalProjector = params.verticalProjector;

        this.graph = params.graph;

        this.xPos = params.xPos;
    }

    play() {
        this.pointAlongGraph();
    }

    private pointAlongGraph() {
        this.applyPointAlongGraph();

        if (this.horizontalProjector && this.verticalProjector) {
            this.applyProjectorsAlongGraph(
                this.horizontalProjector,
                this.verticalProjector
            );
        }
    }

    private applyPointAlongGraph() {
        this.cubicon.def_cubiconBase
            .transition()
            .ease(this.ease)
            .delay(this.sleepTime)
            .duration(this.duration)
            .attrTween("cx", () => (t) => {
                const xScale = this.graph.axes.getXScale();
                const x = this.tweenX(t);
                return xScale(x).toString();
            })
            .attrTween("cy", () => (t) => {
                const yScale = this.graph.axes.getYScale();
                const y = this.tweenY(t);
                return yScale(y).toString();
            })
            .on("end", () => {
                this.setCubiconPosition(
                    this.xPos,
                    this.graph.functionDef(this.xPos)
                );
            });
    }

    /**
     * TODO: projectors are paths, tweak d attribute
     */
    private applyProjectorsAlongGraph(
        horizontalProjector: AxisProjector,
        verticalProjector: AxisProjector
    ) {
        horizontalProjector.def_cubiconBase
            .transition()
            .ease(this.ease)
            .delay(this.sleepTime)
            .duration(this.duration)
            .attr("stroke-dasharray", 0)
            .attr("stroke-dashoffset", 0)
            .attrTween("d", () => (t) => {
                const cx = this.tweenX(t);
                const cy = this.tweenY(t);
                horizontalProjector.position = new Vector2(cx, cy);
                horizontalProjector.endPoint = new Vector2(0, cy);
                horizontalProjector.initVertices();

                return horizontalProjector.getData() ?? "";
            });

        //

        verticalProjector.def_cubiconBase
            .transition()
            .ease(this.ease)
            .delay(this.sleepTime)
            .duration(this.duration)
            .attr("stroke-dasharray", 0)
            .attr("stroke-dashoffset", 0)
            .attrTween("d", () => (t) => {
                const cx = this.tweenX(t);
                const cy = this.tweenY(t);
                verticalProjector.position = new Vector2(cx, cy);
                verticalProjector.endPoint = new Vector2(cx, 0);
                verticalProjector.initVertices();

                return verticalProjector.getData() ?? "";
            });
    }

    private getDeltaX() {
        return this.xPos - this.cubicon.position.x;
    }
}
