import { xGtoW, yGtoW } from "../math/convertUnit";

export class Cubicon {
    constructor({ group, position }) {
        this.group = group;

        this.id = "";

        this.position = {
            x: xGtoW(position.x),
            y: yGtoW(position.y),
        };

        /// This property keeps track of the total vector a cubicon has moved
        this.moveVector = { x: 0, y: 0 };

        // and this keeps track of the angle between the cubicon and the x axis
        this.angle = 0;

        this.svg = group.svg;

        /// this.elapsedTime keeps track of the time passed by during the animations of this cubicon
        this.elapsedTime = 0;

        /// This is the main stroke (or shape) of the cubicon.
        /// Initially, we set it to nothing.
        this.stroke = d3.select();

        /// Add this to the target group
        this.group.add(this);
    }
}
