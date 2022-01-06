import * as d3 from "d3";
import { Vector2 } from "../math/vector";
import { Group } from "../scene/group";

export abstract class Cubicon {
    abstract readonly cubType: string;

    // General fields for cubicon (Cubicon)
    group: Group;
    position: Vector2;

    moveVector: any;
    angle: any;
    moveAngle: any;
    svg: any;
    elapsedTime: any;
    stroke: any;

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

        this.svg = group.svg;

        /// this.elapsedTime keeps track of the time passed by during the animations of this cubicon
        this.elapsedTime = 0;

        /// This is the main stroke (or shape) of the cubicon.
        /// Initially, we set it to nothing.
        this.stroke = d3.select(null);

        /// Add this to the target group
        this.group.add(this);
    }
}
