import { CanvasAnimation } from "./CanvasAnimation";

import { StreamLine } from "@cubicons/StreamLine";

export type SIMULATE_STREAM_TYPES = StreamLine;

export class SimulateStream extends CanvasAnimation {
    constructor(params: {
        /**
         * The target cubicon to play this animation.
         */
        cubicon: SIMULATE_STREAM_TYPES;
        /**
         * Time to play this animation. (in milliseconds)
         */
        duration?: number;
    }) {
        super({
            cubicon: params.cubicon,
            duration: params.duration ?? 0,
        });
    }

    play() {
        this.simulateStream(this.cubicon);
    }

    private simulateStream(cubicon: SIMULATE_STREAM_TYPES) {
        const { functionDef, vertices, maxVertices } = cubicon;

        const lastVertex = vertices[vertices.length - 1];

        const nextVertex = functionDef(lastVertex);

        vertices.push(nextVertex);

        if (maxVertices > 0) {
            if (vertices.length > maxVertices) {
                vertices.shift();
            }
        }
    }
}
