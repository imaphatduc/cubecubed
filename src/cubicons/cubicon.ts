import { select } from "d3-selection";
import { Vector2 } from "../math/vector";
import { Group } from "../scene/group";

export abstract class Cubicon {
    abstract readonly cubType: string;

    /// General fields for cubicon (Cubicon)
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
    angle: any;

    /**
     * The sum vector of all translate vectors (if invoking translate animation).
     */
    moveVector: any;
    /**
     * The sum of all rotate angles (if invoking rotate animation).
     */
    moveAngle: any;

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
    elapsedTime: any;

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

        /// This property keeps track of the total vector a cubicon has moved
        this.moveVector = new Vector2(0, 0);

        // and this keeps track of the angle between the cubicon and the x axis
        this.angle = 0;
        this.moveAngle = 0;

        this.svg_group = group.svg_group;

        /// this.elapsedTime keeps track of the time passed by during the animations of this cubicon
        this.elapsedTime = 0;

        /// This is the main stroke (or shape) of the cubicon.
        /// Initially, we set it to nothing.
        this.def_cubiconBase = select(null);

        /// Add this to the target group
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
