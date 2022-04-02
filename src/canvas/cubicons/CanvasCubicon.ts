import { Vector3 } from "@math/vector";

import { CanvasGroup } from "@group/CanvasGroup";

export abstract class CanvasCubicon {
    /**
     * The group that this cubicon belongs to.
     */
    group: CanvasGroup;

    /**
     * Position of this cubicon.
     * This property changed after finishing animations (in real time).
     */
    position: Vector3;

    /**
     * Scale the position vector of this cubicon by this number.
     */
    scaleFactor: number;

    /**
     * Total time of all called animations (in milliseconds).
     */
    elapsedTime = 0;

    constructor(params: {
        group: CanvasGroup;
        position?: Vector3;
        scaleFactor?: number;
    }) {
        this.group = params.group;

        this.position = params.position ?? new Vector3(0, 0, 0);

        this.scaleFactor = params.scaleFactor ?? 1;

        this.group.cubicons.push(this);
    }
}
