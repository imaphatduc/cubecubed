import { Vector3 } from "../../math/vector";
import { CanvasGroup } from "../group/CanvasGroup";

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
    position: Vector3;

    /**
     * Total time of all called animations (in milliseconds).
     */
    elapsedTime = 0;

    constructor({
        group,
        position = new Vector3(0, 0, 0),
    }: {
        group: CanvasGroup;
        position: Vector3;
    }) {
        this.group = group;

        this.position = position;

        this.group.cubicons.push(this);
    }
}
