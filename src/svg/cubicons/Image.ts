import configFactory from "@utils/configFactory";

import { Cubicon, CubiconParams } from "./Cubicon";

export interface IMAGE_CONFIG {
    /**
     * The width of this image.
     */
    width: number;

    /**
     * The height of this image.
     */
    height: number;
}

export const IMAGE_DEFAULT_CONFIG: IMAGE_CONFIG = {
    width: 200,
    height: 100,
};

export interface ImageParams extends CubiconParams<IMAGE_CONFIG> {
    /**
     * Source of this image.
     */
    href: string;
}

export class Image extends Cubicon {
    readonly cubiconType = "Image";

    href: string;

    declare CONFIG: IMAGE_CONFIG;

    constructor(params: ImageParams) {
        super({
            group: params.group,

            position: params.position,

            CONFIG: configFactory(IMAGE_DEFAULT_CONFIG, params.CONFIG),
        });

        this.href = params.href;
    }

    render() {
        this.g_cubiconWrapper = this.group.svg_group
            .append("g")
            .attr("class", "image-wrapper");

        this.def_cubiconBase = this.g_cubiconWrapper
            .append("image")
            .attr("href", this.href)
            .attr("width", this.CONFIG.width)
            .attr("height", this.CONFIG.height)
            .attr("preserveAspectRatio", "xMinYMid meet");

        this.setSVGPosition();

        return this;
    }

    private setSVGPosition() {
        const { xGtoW, yGtoW } = this.group;

        this.g_cubiconWrapper.attr(
            "transform",
            `translate(${xGtoW(this.position.x)}, ${yGtoW(this.position.y)})`
        );
    }
}
