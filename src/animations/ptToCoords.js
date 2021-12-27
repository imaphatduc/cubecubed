import { ANIME } from "../cubicons/constants";
import { Animation } from "./animation";
import { Create } from "./create";

export class PtToCoords extends Animation {
    constructor({ point, graph, duration = ANIME.CREATE }) {
        super();

        this.cubicon = point.point;
        this.lines = point.lines;
        this.graph = graph;
        this.duration = duration;
    }

    play(sleepTime) {
        this.#ptToCoords(this.cubicon, this.lines, this.graph, sleepTime);
    }

    #ptToCoords(point, lines, graph, sleepTime) {
        graph.group.play([
            new Create({ cubicon: point }),
            new Create({ cubicon: lines[0] }),
            new Create({ cubicon: lines[1] }),
        ]);
    }
}
