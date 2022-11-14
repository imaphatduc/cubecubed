import { Mesh, MeshBasicMaterial, SphereGeometry } from "three";
//+++++++++++++++++++++++++++++++++++++++++++++++++++//

import configFactory from "@utils/configFactory";

import { CanvasCubicon, CanvasCubiconParams } from "./CanvasCubicon";

export interface PARTICLE_CONFIG {
    /**
     * @default "#fff"
     */
    fillColor: string;
}

export const PARTICLE_DEFAULT_CONFIG: PARTICLE_CONFIG = {
    fillColor: "#fff",
};

export interface ParticleParams extends CanvasCubiconParams<PARTICLE_CONFIG> {
    /**
     * Radius of this particle.
     */
    radius?: number;
}

/**
 * Creating a new `Particle()` object means render a point
 * on the animation screen.
 *
 * Particle term here represents a point (aka a dot).
 */
export class Particle extends CanvasCubicon {
    radius: number;

    CONFIG: PARTICLE_CONFIG;

    constructor(params: ParticleParams) {
        super({
            group: params.group,

            position: params.position,

            scaleFactor: params.scaleFactor,

            CONFIG: configFactory(PARTICLE_DEFAULT_CONFIG, params.CONFIG),
        });

        this.radius = params.radius ?? 0.02;

        this.geometrize();

        this.materialize();
    }

    /**
     * @internal
     */
    render() {
        this.mesh = new Mesh(this.geometry, this.material);

        this.mesh.position.set(
            this.position.x * this.scaleFactor,
            this.position.y * this.scaleFactor,
            this.position.z * this.scaleFactor
        );

        this.group.threeScene.add(this.mesh);

        return this;
    }

    private geometrize() {
        const widthSegments = 16;
        const heightSegments = 16;

        this.geometry = new SphereGeometry(
            this.radius,
            widthSegments,
            heightSegments
        );
    }

    private materialize() {
        const { fillColor } = this.CONFIG;

        this.material = new MeshBasicMaterial({ color: fillColor });
    }
}
