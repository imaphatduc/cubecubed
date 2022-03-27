import { Vector3 } from "@math/vector";

import { CanvasGroup } from "@group/CanvasGroup";
import { CanvasCubicon } from "./CanvasCubicon";

export class Particle extends CanvasCubicon {
    readonly cubType = "particle";

    constructor(params: { group: CanvasGroup; position: Vector3 }) {
        super({
            group: params.group,
            position: params.position ?? new Vector3(0, 0, 0),
        });
    }

    render() {
        const { xGtoW, yGtoW } = this.group;

        background(0, 10);

        stroke(255);

        point(xGtoW(this.position.x), yGtoW(this.position.y), this.position.z);
    }
}
