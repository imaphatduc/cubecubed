import { ScaleLinear, scaleLinear } from "d3-scale";
import { Selection, select } from "d3";
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

    private groupWidth: number;

    private groupHeight: number;

    /**
     * Number of squares in the x direction.
     */
    private xSquareNums: number;

    /**
     * Number of squares in the y direction.
     */
    private ySquareNums: number;

    /**
     * Length of a square in this scene.
     */
    squareLength = 40;

    /**
     * Ratio between square length in x direction and y direction.
     */
    ratio: [number, number] = [1, 1];

    /**
     * x coordinate bound values of this scene.
     */
    xBound: [number, number];

    /**
     * y coordinate bound values of this scene.
     */
    yBound: [number, number];

    /**
     * Convert x value of grid coordinates to real-world coordinates.
     */
    xGtoW: ScaleLinear<number, number, never>;

    /**
     * Convert y value of grid coordinates to real-world coordinates.
     */
    yGtoW: ScaleLinear<number, number, never>;

    /**
     * Convert x value of real-world coordinates to grid coordinates.
     */
    xWtoG: ScaleLinear<number, number, never>;

    /**
     * Convert y value of real-world coordinates to grid coordinates.
     */
    yWtoG: ScaleLinear<number, number, never>;

    /**
     * Include this group to HTML flow.
     *
     * @param groupName Name of the group.
     *
     * @param scene The scene that the group belongs to.
     */
    constructor(groupName: string, scene: Scene) {
        this.scene = scene;

        this.computeWidthAndHeight();

        this.name = groupName;

        this.defineBoundsAndSquares(this.ratio);

        this.defineCovertFunctions(this.ratio);

        this.svg_group = scene.svg_group
            .append("svg")
            .attr("id", groupName)
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

    private computeWidthAndHeight() {
        const cubecubedElement = select("#cubecubed") as Selection<
            HTMLDivElement,
            unknown,
            HTMLElement,
            any
        >;

        const { sceneWidth, sceneHeight } = this.scene.CONFIG;

        this.groupWidth =
            sceneWidth === "auto"
                ? cubecubedElement.node()?.getBoundingClientRect().width ??
                  window.innerWidth
                : sceneWidth;

        this.groupHeight =
            sceneHeight === "auto"
                ? cubecubedElement.node()?.getBoundingClientRect().height ??
                  window.innerHeight
                : sceneHeight;
    }

    private defineBoundsAndSquares(ratio: [number, number]) {
        const { groupWidth, groupHeight } = this;

        const xSquareLength = ratio[0] * this.squareLength;
        const ySquareLength = ratio[1] * this.squareLength;

        this.xSquareNums = Math.floor(groupWidth / xSquareLength);
        this.ySquareNums = Math.floor(groupHeight / ySquareLength);

        this.xBound = [
            Math.floor(-this.xSquareNums / 2),
            -Math.floor(-this.xSquareNums / 2),
        ];

        this.yBound = [
            Math.floor(-this.ySquareNums / 2),
            -Math.floor(-this.ySquareNums / 2),
        ];
    }

    private defineCovertFunctions(ratio: [number, number]) {
        const { groupWidth, groupHeight } = this;

        const xBound = [
            -groupWidth / (this.squareLength * ratio[0]),
            groupWidth / (this.squareLength * ratio[0]),
        ];

        const yBound = [
            -groupHeight / (this.squareLength * ratio[1]),
            groupHeight / (this.squareLength * ratio[1]),
        ];

        this.xGtoW = scaleLinear()
            .domain(xBound)
            .range([-groupWidth, groupWidth]);

        this.yGtoW = scaleLinear()
            .domain(yBound)
            .range([-groupHeight, groupHeight]);

        this.xWtoG = scaleLinear()
            .domain([-groupWidth, groupWidth])
            .range(this.xBound);

        this.yWtoG = scaleLinear()
            .domain([-groupHeight, groupHeight])
            .range(this.yBound);
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
