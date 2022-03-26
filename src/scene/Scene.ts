import { select } from "d3-selection";
//+++++++++++++++++++++++++++++++++++++++++++++++++++//

import { svgWidth, svgHeight } from "@consts";

import { Group } from "@group/Group";

/**
 * The granddad/grandma object of everything in the visualization.
 * Scene() here is a must in every result math videos.
 *
 * Please see the Quick Start page in official documentation for clearer understanding about this `Scene` term.
 */
export class Scene {
    /**
     * Name of this scene.
     */
    name: string;

    /**
     * Width of this scene.
     */
    width: number;

    /**
     * Height of this scene.
     */
    height: number;

    xSquareNums: number;

    ySquareNums: number;

    squareLength: number;

    /**
     * x coordinate bound values of this scene.
     */
    xBound: [number, number];

    /**
     * y coordinate bound values of this scene.
     */
    yBound: [number, number];

    /**
     * List of group included in this scene.
     */
    groups: Group[] = [];

    /**
     * Include this scene to HTML flow.
     *
     * @param sceneName Name of the scene.
     */
    constructor(sceneName: string) {
        this.name = sceneName;

        this.defineScreenBounds();
    }

    private defineScreenBounds() {
        const larger = Math.max(svgWidth, svgHeight);
        const smaller = Math.min(svgWidth, svgHeight);

        const smSquareNums = 14;

        const smallerBound: [number, number] = [
            Math.floor(-smSquareNums / 2),
            Math.floor(smSquareNums / 2),
        ];

        const squareLength = smaller / smSquareNums;

        const lgSquareNums = Math.floor(larger / 2 / squareLength) * 2;

        const largerBound: [number, number] = [
            Math.floor(-lgSquareNums / 2),
            Math.floor(lgSquareNums / 2),
        ];

        [this.xBound, this.yBound] =
            svgWidth >= svgHeight
                ? [largerBound, smallerBound]
                : [smallerBound, largerBound];

        [this.xSquareNums, this.ySquareNums] =
            svgWidth >= svgHeight
                ? [lgSquareNums, smSquareNums]
                : [smSquareNums, lgSquareNums];

        this.squareLength = squareLength;
    }

    /**
     * Fade out and remove this scene away from HTML flow.
     * That means, everything in the scene will be removed, too.
     *
     * @param delay Delay (in milliseconds) before destroying this scene.
     * > This delay variable should be tracked by summing all Group().groupElapsed properties of all `Group()`s in this scene.
     */
    destroy(delay: number) {
        select("#cubecubed")
            .selectAll(".group")
            .transition()
            .delay(delay)
            .duration(500)
            .style("opacity", 0)
            .remove();
    }
}
