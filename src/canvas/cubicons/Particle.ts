import { Vector3 } from "@math/vector";

import { CanvasGroup } from "@group/CanvasGroup";
import { CanvasCubicon } from "./CanvasCubicon";

export interface PARTICLE_CONFIG {
    /**
     * @default "#fff"
     */
    strokeColor: string;
    /**
     * @default 2
     */
    strokeWidth: number;
}
export const PARTICLE_DEFAULT_CONFIG: PARTICLE_CONFIG = {
    strokeColor: "#fff",
    strokeWidth: 2,
};

export class Particle extends CanvasCubicon {
    readonly cubType = "particle";

    strokeColor: string;

    strokeWidth: number;

    constructor(params: {
        group: CanvasGroup;
        position?: Vector3;
        scaleFactor?: number;
        CONFIG?: PARTICLE_CONFIG;
    }) {
        super({
            group: params.group,
            position: params.position ?? new Vector3(0, 0, 0),
            scaleFactor: params.scaleFactor ?? 1,
        });

        ({
            strokeColor: this.strokeColor = PARTICLE_DEFAULT_CONFIG.strokeColor,
            strokeWidth: this.strokeWidth = PARTICLE_DEFAULT_CONFIG.strokeWidth,
        } = params.CONFIG ?? PARTICLE_DEFAULT_CONFIG);
    }

    render(p: any) {
        const { xGtoW, yGtoW, zGtoW } = this.group;

        p.stroke(this.strokeColor);
        p.strokeWeight(this.strokeWidth);

        p.point(
            xGtoW(this.position.x) * this.scaleFactor,
            yGtoW(this.position.y) * this.scaleFactor,
            zGtoW(this.position.z) * this.scaleFactor
        );
    }
}
