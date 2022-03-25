import { select } from "d3-selection";
import { Vector2 } from "../math/vector";
import { Group } from "../scene/group";

export abstract class Cubicon {
    abstract readonly cubType: string;

    /**
     * The group that this cubicon belongs to.
     */
    group: Group;

    /**
     * Position of this cubicon.
     * This property changed after finishing animations (in real time).
     */
    position: Vector2;

    /**
     * The angle between this cubicon and the x axis.
     * This property changed after finishing animations (in real time).
     */
    angle = 0;

    /**
     * The sum vector of all translate vectors (if invoking translate animation).
     */
    moveVector = new Vector2(0, 0);

    /**
     * The sum of all rotate angles (if invoking rotate animation).
     */
    moveAngle = 0;

    /**
     * The `<svg/>` tag of this cubicon's group.
     */
    svg_group: any;

    /**
     * The `<g/>` tag that holds this cubicon.
     */
    g_cubiconWrapper: any;

    /**
     * The HTML tag that represents this cubicon.
     */
    def_cubiconBase: any;

    /**
     * Total time of all called animations (in milliseconds).
     */
    elapsedTime = 0;

    isRendered = false;

    constructor({
        group,
        position = new Vector2(0, 0),
    }: {
        group: Group;
        position: Vector2;
    }) {
        this.group = group;

        this.position = position;

        this.svg_group = group.svg_group;

        this.def_cubiconBase = select(null);

        this.group.add(this);
    }

    checkIfRendered() {
        if (this.isRendered) {
            throw new Error(
                "Warning: render() shouldn't be called more than once. Returned nothing."
            );
        }
    }
}
