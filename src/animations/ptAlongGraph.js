import { ANIME } from "../cubicons/constants";
import { Animation } from "./animation";

export class PtAlongGraph extends Animation {
    constructor({ point, graph, xPos, duration = ANIME.CREATE }) {
        super();

        this.cubicon = point.point;
        this.lines = point.lines;
        this.graph = graph;
        this.xPos = xPos;
        this.duration = duration;
    }

    play(sleepTime) {
        this.#ptAlongGraph(this.cubicon, this.graph, this.xPos, sleepTime);
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

    #ptAlongGraph(point, graph, xPos, sleepTime) {
        point.stroke
            .transition()
            .delay(point.elapsedTime + sleepTime)
            .duration(this.duration)
            .attrTween("cx", () => {
                return (t) => {
                    const deltaX = xPos - point.cx / graph.axes.xLength;
                    return graph.axes.xScale(
                        t * deltaX + point.cx / graph.axes.xLength
                    );
                };
            })
            .attrTween("cy", () => {
                return (t) => {
                    const deltaX = xPos - point.cx / graph.axes.xLength;
                    return graph.axes.yScale(
                        graph.func(t * deltaX + point.cx / graph.axes.xLength)
                    );
                };
            })
            .on("end", () => {
                point.cx = graph.axes.xScale(xPos);
                point.cy = graph.axes.yScale(graph.func(xPos));
            });

        point.elapsedTime += this.duration + sleepTime;
    }

    #horLineAlongGraph(point, line, graph, xPos, sleepTime) {
        line.lineStroke
            .transition()
            .delay(line.elapsedTime + sleepTime)
            .duration(this.duration)
            .attrTween("x1", () => {
                return (t) => {
                    const deltaX = xPos - point.cx / graph.axes.xLength;
                    return graph.axes.xScale(
                        t * deltaX + point.cx / graph.axes.xLength
                    );
                };
            })
            .attrTween("y1", () => {
                return (t) => {
                    const deltaX = xPos - point.cx / graph.axes.xLength;
                    return graph.axes.yScale(
                        graph.func(t * deltaX + point.cx / graph.axes.xLength)
                    );
                };
            })
            .attrTween("y2", () => {
                return (t) => {
                    const deltaX = xPos - point.cx / graph.axes.xLength;
                    return graph.axes.yScale(
                        graph.func(t * deltaX + point.cx / graph.axes.xLength)
                    );
                };
            })
            .on("end", () => {
                line.startPoint.x = graph.axes.xScale(xPos);
                line.startPoint.y = graph.axes.yScale(graph.func(xPos));
            });

        line.elapsedTime += this.duration + sleepTime;
    }

    #verLineAlongGraph(point, line, graph, xPos, sleepTime) {
        line.lineStroke
            .transition()
            .delay(line.elapsedTime + sleepTime)
            .duration(this.duration)
            .attrTween("x1", () => {
                return (t) => {
                    const deltaX = xPos - point.cx / graph.axes.xLength;
                    return graph.axes.xScale(
                        t * deltaX + point.cx / graph.axes.xLength
                    );
                };
            })
            .attrTween("y1", () => {
                return (t) => {
                    const deltaX = xPos - point.cx / graph.axes.xLength;
                    return graph.axes.yScale(
                        graph.func(t * deltaX + point.cx / graph.axes.xLength)
                    );
                };
            })
            .attrTween("x2", () => {
                return (t) => {
                    const deltaX = xPos - point.cx / graph.axes.xLength;
                    return graph.axes.xScale(
                        t * deltaX + point.cx / graph.axes.xLength
                    );
                };
            })
            .on("end", () => {
                line.startPoint.x = graph.axes.xScale(xPos);
                line.startPoint.y = graph.axes.yScale(graph.func(xPos));
            });

        line.elapsedTime += this.duration + sleepTime;
    }
}
