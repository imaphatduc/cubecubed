import { ANIME, EASE_TYPE } from "../cubicons/constants";
import { Graph, AxisProjector, Point } from "../cubicons/coordinateSys";
import { PT_TO_COORDS_DATA } from "../cubicons/constants";
import { Cubicon } from "../cubicons/cubicon";
import { Animation } from "./animation";
import { Create } from "./create";

export class PtToCoords extends Animation {
    lines: [AxisProjector, AxisProjector];
    graph: Graph;

    constructor({
        point,
        graph,
        duration = ANIME.CREATE,
        ease,
    }: {
        point: PT_TO_COORDS_DATA;
        graph: Graph;
        duration?: number;
        ease?: EASE_TYPE;
    }) {
        super({ cubicon: point.point, duration: duration, ease: ease });

        this.lines = point.lines;
        this.graph = graph;
    }

    play() {
        this.ptToCoords(this.cubicon, this.lines, this.graph);
    }

    private ptToCoords(
        point: Point,
        lines: [AxisProjector, AxisProjector],
        graph: Graph
    ) {
        graph.group.play([
            new Create({ cubicon: point }),
            new Create({ cubicon: lines[0] }),
            new Create({ cubicon: lines[1] }),
        ]);
    }
}
