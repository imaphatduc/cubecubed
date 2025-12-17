import { CanvasAnimation, CanvasAnimationParams } from "./CanvasAnimation";

import { StreamLine } from "@cubicons/StreamLine";

export type SIMULATE_STREAM_TYPES = StreamLine;

export class SimulateStream extends CanvasAnimation {
    declare cubicon: SIMULATE_STREAM_TYPES;

    constructor(params: CanvasAnimationParams<SIMULATE_STREAM_TYPES>) {
        super({
            cubicon: params.cubicon,

            duration: params.duration,
        });
    }

    play() {
        const { vertices, maxVertices, points } = this.cubicon;

        const nextVertex = this.cubicon.nextVertex();

        vertices.push(nextVertex);

        if (maxVertices > 0) {
            if (vertices.length > maxVertices) {
                vertices.shift();
            }
        }

        this.cubicon.geometry.setFromPoints(points);
    }
}
