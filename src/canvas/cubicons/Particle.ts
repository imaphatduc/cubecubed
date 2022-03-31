import { Vector3 } from "@math/vector";

import { CanvasGroup } from "@group/CanvasGroup";
import { CanvasCubicon } from "./CanvasCubicon";

export class Particle extends CanvasCubicon {
    readonly cubType = "particle";

    constructor(params: {
        group: CanvasGroup;
        position?: Vector3;
        scaleFactor?: number;
    }) {
        super({
            group: params.group,
            position: params.position ?? new Vector3(0, 0, 0),
            scaleFactor: params.scaleFactor ?? 1,
        });
    }

    render(p: any) {
        const { xGtoW, yGtoW } = this.group;

        p.stroke(255);
        p.strokeWeight(3);

        p.point(
            xGtoW(this.position.x) * this.scaleFactor,
            yGtoW(this.position.y) * this.scaleFactor,
            this.position.z
        );
    }
}
