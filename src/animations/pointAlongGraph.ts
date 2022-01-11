import { ANIME, EASE_TYPE } from "../cubicons/constants";
import { Animation } from "./animation";
import { Graph, AxisProjector } from "../cubicons/coordinateSystem";
import { PT_TO_COORDS_DATA } from "../cubicons/constants";
import { Cubicon } from "../cubicons/cubicon";

/**
 * Animate the smooth motion of a point along a graph.
 *
 * **Note** that you have to call either of Axes().pointOnGraph(args) or Axes().pointToCoords(args) to play this animation.
 */
export class PointAlongGraph extends Animation {
    private lines: [AxisProjector, AxisProjector];
    private graph: Graph;
    private xPos: number;

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

        this.lines = params.point.lines;
        this.graph = params.graph;
        this.xPos = params.xPos;
    }

    play(sleepTime: number) {
        this.ptAlongGraph(this.cubicon, this.graph, this.xPos, sleepTime);
        if (typeof this.lines !== "undefined") {
            this.horLineAlongGraph(
                this.cubicon,
                this.lines[0],
                this.graph,
                this.xPos,
                sleepTime
            );
            this.verLineAlongGraph(
                this.cubicon,
                this.lines[1],
                this.graph,
                this.xPos,
                sleepTime
            );
        }
    }

    private ptAlongGraph(
        point: Cubicon,
        graph: Graph,
        xPos: number,
        sleepTime: number
    ) {
        point.def_cubiconBase
            .transition()
            .ease(this.ease)
            .delay(point.elapsedTime + sleepTime)
            .duration(this.duration)
            .attrTween("cx", () => {
                return (t: number) => {
                    const deltaX = xPos - point.position.x;
                    return graph.axes.xScale(t * deltaX + point.position.x);
                };
            })
            .attrTween("cy", () => {
                return (t: number) => {
                    const deltaX = xPos - point.position.x;
                    return graph.axes.yScale(
                        graph.functionDef(t * deltaX + point.position.x)
                    );
                };
            })
            .on("end", () => {
                point.position.x = xPos;
                point.position.y = graph.functionDef(xPos);
            });

        point.elapsedTime += this.duration + sleepTime;
    }

    horLineAlongGraph(
        point: Cubicon,
        line: AxisProjector,
        graph: Graph,
        xPos: number,
        sleepTime: number
    ) {
        line.def_cubiconBase
            .transition()
            .ease(this.ease)
            .delay(line.elapsedTime + sleepTime)
            .duration(this.duration)
            .attrTween("x1", () => {
                return (t: number) => {
                    const deltaX = xPos - point.position.x;
                    return graph.axes.xScale(t * deltaX + point.position.x);
                };
            })
            .attrTween("y1", () => {
                return (t: number) => {
                    const deltaX = xPos - point.position.x;
                    return graph.axes.yScale(
                        graph.functionDef(t * deltaX + point.position.x)
                    );
                };
            })
            .attrTween("y2", () => {
                return (t: number) => {
                    const deltaX = xPos - point.position.x;
                    return graph.axes.yScale(
                        graph.functionDef(t * deltaX + point.position.x)
                    );
                };
            })
            .on("end", () => {
                // line.startPoint.x = graph.axes.xScale(xPos);
                // line.startPoint.y = graph.axes.yScale(graph.functionDef(xPos));
            });

        line.elapsedTime += this.duration + sleepTime;
    }

    private verLineAlongGraph(
        point: Cubicon,
        line: AxisProjector,
        graph: Graph,
        xPos: number,
        sleepTime: number
    ) {
        line.def_cubiconBase
            .transition()
            .ease(this.ease)
            .delay(line.elapsedTime + sleepTime)
            .duration(this.duration)
            .attrTween("x1", () => {
                return (t: number) => {
                    const deltaX = xPos - point.position.x;
                    return graph.axes.xScale(t * deltaX + point.position.x);
                };
            })
            .attrTween("y1", () => {
                return (t: number) => {
                    const deltaX = xPos - point.position.x;
                    return graph.axes.yScale(
                        graph.functionDef(t * deltaX + point.position.x)
                    );
                };
            })
            .attrTween("x2", () => {
                return (t: number) => {
                    const deltaX = xPos - point.position.x;
                    return graph.axes.xScale(t * deltaX + point.position.x);
                };
            })
            .on("end", () => {
                // line.startPoint.x = graph.axes.xScale(xPos);
                // line.startPoint.y = graph.axes.yScale(graph.functionDef(xPos));
            });

        line.elapsedTime += this.duration + sleepTime;
    }
}
