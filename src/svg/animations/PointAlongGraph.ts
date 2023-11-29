import { ANIME } from "@consts";

import { AxisProjector } from "@cubicons/coordinate-system/AxisProjector";
import { Graph } from "@cubicons/coordinate-system/Graph";
import { Point } from "@cubicons/coordinate-system/Point";

import { Animation, AnimationParams } from "@animations/Animation";

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
        const xScale = this.graph.axes.getXScale();

        const deltaX = this.getDeltaX();

        const x = t * deltaX + this.cubicon.position.x;

        return xScale(x).toString();
    };

    private tweenY = (t: number) => {
        const yScale = this.graph.axes.getYScale();

        const deltaX = this.getDeltaX();

        const y = this.graph.functionDef(t * deltaX + this.cubicon.position.x);

        return yScale(y).toString();
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
            this.applyProjectorsAlongGraph();
        }
    }

    private applyPointAlongGraph() {
        this.cubicon.def_cubiconBase
            .transition()
            .ease(this.ease)
            .delay(this.sleepTime)
            .duration(this.duration)
            .attrTween("cx", () => this.tweenX)
            .attrTween("cy", () => this.tweenY)
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
    private applyProjectorsAlongGraph() {
        this.horizontalProjector?.def_cubiconBase
            .transition()
            .ease(this.ease)
            .delay(this.sleepTime)
            .duration(this.duration)
            .attrTween("x1", () => this.tweenX)
            .attrTween("y1", () => this.tweenY)
            .attrTween("y2", () => this.tweenY);

        //

        this.verticalProjector?.def_cubiconBase
            .transition()
            .ease(this.ease)
            .delay(this.sleepTime)
            .duration(this.duration)
            .attrTween("x1", () => this.tweenX)
            .attrTween("y1", () => this.tweenY)
            .attrTween("x2", () => this.tweenX);
    }

    private getDeltaX() {
        return this.xPos - this.cubicon.position.x;
    }
}
