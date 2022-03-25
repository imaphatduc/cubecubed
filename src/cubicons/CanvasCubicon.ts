import { Vector2 } from "../math/vector";
import { CanvasGroup } from "../scene/CanvasGroup";

export abstract class CanvasCubicon {
    abstract readonly cubType: string;

    /**
     * The group that this cubicon belongs to.
     */
    group: CanvasGroup;

    /**
     * Position of this cubicon.
     * This property changed after finishing animations (in real time).
     */
    position: Vector2;

    /**
     * Total time of all called animations (in milliseconds).
     */
    elapsedTime = 0;

    constructor({
        group,
        position = new Vector2(0, 0),
    }: {
        group: CanvasGroup;
        position: Vector2;
    }) {
        this.group = group;

        this.position = position;
    }
}
