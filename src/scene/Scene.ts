import { select, Selection } from "d3";
import { Group } from "../svg/group/Group";

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
