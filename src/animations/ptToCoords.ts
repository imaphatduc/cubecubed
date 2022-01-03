import { ANIME } from "../cubicons/constants";
import { pointCoords, Graph, AxisProjector } from "../cubicons/coordinateSys";
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
        point: pointCoords;
        graph: Graph;
        duration?: number;
        ease?: Function;
    }) {
        super({ cubicon: point.point, duration: duration, ease: ease });

        this.lines = point.lines;
        this.graph = graph;
    }

    play() {
        this.#ptToCoords(this.cubicon, this.lines, this.graph);
    }

    #ptToCoords(
        point: Cubicon,
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
