import { ANIME } from "../cubicons/constants";
import { Animation, DEFAULT_EASE } from "./animation";
import { pointCoords, Graph, AxisProjector } from "../cubicons/coordinateSys";
import { Cubicon } from "../cubicons/cubicon";

export class PtAlongGraph extends Animation {
    lines: [AxisProjector, AxisProjector];
    graph: Graph;
    xPos: number;

    constructor({
        point,
        graph,
        xPos,
        duration = ANIME.CREATE,
        ease,
    }: {
        point: pointCoords;
        graph: Graph;
        xPos: number;
        duration?: number;
        ease?: Function;
    }) {
        super({ cubicon: point.point, duration: duration, ease: ease });

        this.lines = point.lines;
        this.graph = graph;
        this.xPos = xPos;
    }

    play(sleepTime: number) {
        this.#ptAlongGraph(this.cubicon, this.graph, this.xPos, sleepTime);
        if (typeof this.lines !== "undefined") {
            this.#horLineAlongGraph(
                this.cubicon,
                this.lines[0],
                this.graph,
                this.xPos,
                sleepTime
            );
            this.#verLineAlongGraph(
                this.cubicon,
                this.lines[1],
                this.graph,
                this.xPos,
                sleepTime
            );
        }
    }

    #ptAlongGraph(
        point: Cubicon,
        graph: Graph,
        xPos: number,
        sleepTime: number
    ) {
        point.stroke
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
                        graph.func(t * deltaX + point.position.x)
                    );
                };
            })
            .on("end", () => {
                point.position.x = xPos;
                point.position.y = graph.func(xPos);
            });

        point.elapsedTime += this.duration + sleepTime;
    }

    #horLineAlongGraph(
        point: Cubicon,
        line: AxisProjector,
        graph: Graph,
        xPos: number,
        sleepTime: number
    ) {
        line.lineStroke
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
                        graph.func(t * deltaX + point.position.x)
                    );
                };
            })
            .attrTween("y2", () => {
                return (t: number) => {
                    const deltaX = xPos - point.position.x;
                    return graph.axes.yScale(
                        graph.func(t * deltaX + point.position.x)
                    );
                };
            })
            .on("end", () => {
                line.startPoint.x = graph.axes.xScale(xPos);
                line.startPoint.y = graph.axes.yScale(graph.func(xPos));
            });

        line.elapsedTime += this.duration + sleepTime;
    }

    #verLineAlongGraph(
        point: Cubicon,
        line: AxisProjector,
        graph: Graph,
        xPos: number,
        sleepTime: number
    ) {
        line.lineStroke
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
                        graph.func(t * deltaX + point.position.x)
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
                line.startPoint.x = graph.axes.xScale(xPos);
                line.startPoint.y = graph.axes.yScale(graph.func(xPos));
            });

        line.elapsedTime += this.duration + sleepTime;
    }
}
