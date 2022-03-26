import { SHAPE_CONFIG } from "./Geometry";

import { Vector2 } from "../../../math/vector";

import { Group } from "../../group/Group";
import { Rectangle } from "./Rectangle";

/**
 * Return the barebone of a square shape.
 */
export class Square extends Rectangle {
    readonly sideLength: number;

    /**
     * @param params An object that contains options to form the square.
     */
    constructor(params: {
        /**
         * The group that the square belongs to.
         */
        group: Group;
        /**
         * Position of the square.
         */
        position?: Vector2;
        /**
         * Side length of the square.
         */
        sideLength: number;
        /**
         * Config options of the square.
         */
        CONFIG?: SHAPE_CONFIG;
    }) {
        super({
            group: params.group,
            position: params.position,
            width: params.sideLength,
            height: params.sideLength,
            CONFIG: params.CONFIG,
        });

        this.sideLength = params.sideLength;
    }
}
