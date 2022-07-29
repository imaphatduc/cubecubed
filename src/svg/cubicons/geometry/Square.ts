import { PLANE_SHAPE_CONFIG } from "@configs/geometry/PLANE_SHAPE_CONFIG";

import { CubiconParams } from "@cubicons/Cubicon";
import { Rectangle } from "./Rectangle";

export interface SquareParams extends CubiconParams<PLANE_SHAPE_CONFIG> {
    /**
     * Side length of this square.
     */
    sideLength: number;
}

export class Square extends Rectangle {
    constructor(params: SquareParams) {
        super({
            group: params.group,

            position: params.position,

            width: params.sideLength,

            height: params.sideLength,

            CONFIG: params.CONFIG,
        });
    }

    get sideLength() {
        return this.width;
    }
}
