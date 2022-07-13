import { Selection } from "d3-selection";
//+++++++++++++++++++++++++++++++++++++++++++++++++++//

import { Vector2 } from "@math/vector";

import { Group } from "@group/Group";

import { Cubicon } from "@cubicons/Cubicon";

export abstract class CoordinateSystem extends Cubicon {
    readonly cubType = "coordinate-system";
    abstract readonly coordSysObjType: string;

    /**
     * The `<svg/>` element that contains the whole coordinate system and everything included in it.
     */
    g_coordinate: Selection<SVGGElement, unknown, HTMLElement, any>;

    constructor({
        group,
        position = new Vector2(0, 0),
    }: {
        group: Group;
        position?: Vector2 | undefined;
    }) {
        super({ group: group, position: position });

        this.g_coordinate = this.svg_group
            .append("g")
            .attr("class", "xy-coordinate");
    }
}
