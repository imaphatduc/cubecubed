import { ANIME, EASE_TYPE } from "@consts";

import { PT_TO_COORDS_DATA } from "@cubicons/coordinate-system/Axes";

import { Animation } from "./Animation";

import { AxisProjector } from "@cubicons/coordinate-system/AxisProjector";
import { Graph } from "@cubicons/coordinate-system/Graph";

/**
 * Animate the smooth motion of a point along a graph.
 *
 * **Note** that you have to call either of Axes().pointOnGraph(args) or Axes().pointToCoords(args) to play this animation.
 */
export class PointAlongGraph extends Animation {
    private projectors: [AxisProjector, AxisProjector];
    private graph: Graph;
    private xPos: number;

    private tweenX = (t: number) => {
        const xScale = this.graph.axes.getXScale();

        const deltaX = this.xPos - this.cubicon.position.x;

        return xScale(t * deltaX + this.cubicon.position.x);
    };

    private tweenY = (t: number) => {
        const yScale = this.graph.axes.getYScale();

        const deltaX = this.xPos - this.cubicon.position.x;

        return yScale(
            this.graph.functionDef(t * deltaX + this.cubicon.position.x)
        );
    };

    constructor(params: {
        /**
         * The target point object for this animation.
         *
         * This is the result point after calling Axes().pointOnGraph(args) or Axes().pointToCoords(args).
         */
        point: PT_TO_COORDS_DATA;
        /**
         * Which graph should the point moving along?
         */
        graph: Graph;
        /**
         * x coordinate of the point's target position.
         */
        xPos: number;
        /**
         * Time to play this animation. (in milliseconds)
         */
        duration?: number;
        /**
         * Custom easing function for smooth animation.
         */
        ease?: EASE_TYPE;
    }) {
        super({
            cubicon: params.point.point,
            duration: params.duration ?? ANIME.CREATE,
            ease: params.ease,
        });

        this.projectors = params.point.projectors;
        this.graph = params.graph;
        this.xPos = params.xPos;
    }

    play(sleepTime: number) {
        this.pointAlongGraph(sleepTime);
        if (typeof this.projectors !== "undefined") {
            this.animateProjectors(sleepTime);
        }
    }

    private pointAlongGraph(sleepTime: number) {
        this.cubicon.def_cubiconBase
            .transition()
            .ease(this.ease)
            .delay(sleepTime)
            .duration(this.duration)
            .attrTween("cx", () => this.tweenX)
            .attrTween("cy", () => this.tweenY)
            .on("end", () => {
                this.cubicon.position.x = this.xPos;
                this.cubicon.position.y = this.graph.functionDef(this.xPos);
            });
    }

    private animateProjectors(sleepTime: number) {
        const data = [
            {
                projector: this.projectors[0],
                attr: "y2",
                tween: this.tweenY,
            },
            {
                projector: this.projectors[1],
                attr: "x2",
                tween: this.tweenX,
            },
        ];

        data.forEach((d: any) => {
            d.projector.def_cubiconBase
                .transition()
                .ease(this.ease)
                .delay(sleepTime)
                .duration(this.duration)
                .attrTween("x1", () => this.tweenX)
                .attrTween("y1", () => this.tweenY)
                .attrTween(d.attr, () => d.tween);
        });
    }
}
