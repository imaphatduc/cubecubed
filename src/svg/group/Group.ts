import { scaleLinear } from "d3-scale";
import { Selection } from "d3";
//+++++++++++++++++++++++++++++++++++++++++++++++++++//

import { EASE } from "@consts";

import { Vector2 } from "@math/Vector2";

import { Scene } from "@scene/Scene";

import { Cubicon } from "@cubicons/Cubicon";

import configFactory from "@utils/configFactory";

export interface GROUP_MAKEUP_CONFIG {
    opacity: number;
}

export const GROUP_MAKEUP_DEFAULT_CONFIG: GROUP_MAKEUP_CONFIG = {
    opacity: 1,
};

/**
 * The object to group SVG cubicons together. A group must belong to a scene.
 */
export class Group {
    /**
     * The scene that this group belongs to.
     */
    scene: Scene;

    /**
     * The `<svg>` element that represents this group.
     */
    svg_group: Selection<SVGSVGElement, unknown, HTMLElement, any>;

    /**
     * Name of this group.
     */
    name: string;

    /**
     * Length of a square in this scene.
     */
    readonly squareLength = 40;

    /**
     * Ratio between square length in x direction and y direction.
     */
    ratio: [number, number] = [1, 1];

    /**
     * Include this group to HTML flow.
     *
     * @param groupName Name of the group.
     *
     * @param scene The scene that the group belongs to.
     */
    constructor(groupName: string, scene: Scene) {
        this.scene = scene;

        this.name = groupName;
        console.log(this.xGtoW(1));

        this.init();
    }

    private init() {
        this.svg_group = this.scene.svg_group
            .append("svg")
            .attr("id", this.name)
            .attr("class", "group")
            .attr("xmlns", "http://www.w3.org/2000/svg")
            .attr("width", this.groupWidth)
            .attr("height", this.groupHeight)
            .attr("viewBox", this.getScaledViewbox())
            .attr("transform", "scale(1, -1)")
            .style("pointer-events", "none")
            .style("position", "absolute");
    }

    /**
     * Render all the specified cubicons on the screen (instead of calling `.render()` for each of the cubicon).
     *
     * @param cubicons Comma-separated cubicons to render.
     */
    render(cubicons: Cubicon[]) {
        cubicons.forEach((cubicon) => {
            cubicon.render();
        });
    }

    get groupWidth() {
        const { sceneWidth } = this.scene.CONFIG;

        const groupWidth =
            sceneWidth === "auto"
                ? this.scene.svg_group.node()?.getBoundingClientRect().width ??
                  window.innerWidth
                : sceneWidth;

        return groupWidth;
    }

    get groupHeight() {
        const { sceneHeight } = this.scene.CONFIG;

        const groupHeight =
            sceneHeight === "auto"
                ? this.scene.svg_group.node()?.getBoundingClientRect().height ??
                  window.innerHeight
                : sceneHeight;

        return groupHeight;
    }

    /**
     * x coordinate bound values of this group.
     */
    get xBound() {
        const { groupWidth } = this;

        const xSquareLength = this.ratio[0] * this.squareLength;

        /**
         * Number of squares in the x direction.
         */
        const xSquareNums = Math.floor(groupWidth / xSquareLength);

        const xBound = [
            -Math.floor(xSquareNums / 2),
            Math.floor(xSquareNums / 2),
        ];

        return xBound;
    }

    /**
     * y coordinate bound values of this group.
     */
    get yBound() {
        const { groupHeight } = this;

        const ySquareLength = this.ratio[1] * this.squareLength;

        /**
         * Number of squares in the y direction.
         */
        const ySquareNums = Math.floor(groupHeight / ySquareLength);

        const yBound = [
            -Math.floor(ySquareNums / 2),
            Math.floor(ySquareNums / 2),
        ];

        return yBound;
    }

    /**
     * Convert x value of grid coordinates to real-world coordinates.
     */
    get xGtoW() {
        const { groupWidth, xBound } = this;

        const xGtoW = scaleLinear()
            .domain(xBound)
            .range([-groupWidth / 2, groupWidth / 2]);

        return xGtoW;
    }

    /**
     * Convert x value of real-world coordinates to grid coordinates.
     */
    get xWtoG() {
        const { groupWidth, xBound } = this;

        const xWtoG = scaleLinear()
            .domain([-groupWidth / 2, groupWidth / 2])
            .range(xBound);

        return xWtoG;
    }

    /**
     * Convert y value of grid coordinates to real-world coordinates.
     */
    get yGtoW() {
        const { groupHeight, yBound } = this;

        const yGtoW = scaleLinear()
            .domain(yBound)
            .range([-groupHeight / 2, groupHeight / 2]);

        return yGtoW;
    }

    /**
     * Convert y value of real-world coordinates to grid coordinates.
     */
    get yWtoG() {
        const { groupHeight, yBound } = this;

        const yWtoG = scaleLinear()
            .domain([-groupHeight, groupHeight])
            .range(yBound);

        return yWtoG;
    }

    /**
     * Remove cubicons from this group.
     *
     * @param cubicons An array of cubicons to remove.
     */
    remove(cubicons: Cubicon[]) {
        cubicons.forEach((cubicon) => {
            cubicon.g_cubiconWrapper
                .transition()
                .delay(this.scene.sceneElapsed)
                .duration(0)
                .remove();
        });
    }

    /**
     * Fade out and destroy this group from the HTML flow.
     * That means, everything in the scene will be removed, too.
     *
     * @param delay Delay (in milliseconds) before destroying this scene.
     */
    destroy(delay = 0) {
        this.svg_group
            .transition()
            .delay(this.scene.sceneElapsed + delay)
            .duration(500)
            .style("opacity", 0)
            .remove();
    }

    makeup(params: {
        /**
         * Time to play the makeup animation. (in milliseconds)
         *
         * @default 0
         */
        duration?: number;

        /**
         * Config for the makeup function.
         */
        CONFIG: GROUP_MAKEUP_CONFIG;
    }) {
        const duration = params.duration ?? 0;

        const CONFIG = configFactory(
            GROUP_MAKEUP_DEFAULT_CONFIG,
            params.CONFIG
        );

        this.svg_group
            .transition()
            .delay(this.scene.sceneElapsed)
            .duration(duration)
            .style("opacity", CONFIG.opacity);
    }

    zoom(params: {
        /**
         * Time to play the zoom animation. (in milliseconds)
         *
         * @default 0
         */
        duration?: number;

        position?: Vector2;

        zoom: number;
    }) {
        const duration = params.duration ?? 0;
        const position = params.position ?? new Vector2(0, 0);

        /**
         * position = (-3, 0)
         * edge = (xBound[0], yBound[0])
         */

        this.svg_group
            .transition()
            .delay(this.scene.sceneElapsed)
            .duration(duration)
            .ease(EASE.LINEAR)
            .attr(
                "viewBox",
                this.getScaledViewbox(params.zoom, new Vector2(-3, 0))
            );
    }

    private getScaledViewbox(
        scalar = 1,
        translationVector = new Vector2(0, 0)
    ) {
        const width = this.groupWidth / scalar;
        const height = this.groupHeight / scalar;

        const Wx = this.xGtoW(translationVector.x);
        const Wy = this.yGtoW(translationVector.y);

        return `${-width / 2 + Wx} ${-height / 2 + Wy} ${width} ${height}`;
    }
}
