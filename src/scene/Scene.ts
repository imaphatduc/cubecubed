import { select } from "d3-selection";
//+++++++++++++++++++++++++++++++++++++++++++++++++++//

export interface SCENE_CONFIG {
    /**
     * Width of this scene (in pixels).
     *
     * @default 'auto'
     */
    sceneWidth: number | "auto";

    /**
     * Height of this scene (in pixels).
     *
     * @default 'auto'
     */
    sceneHeight: number | "auto";
}

export const SCENE_DEFAULT_CONFIG: SCENE_CONFIG = {
    sceneWidth: "auto",
    sceneHeight: "auto",
};

/**
 * The object that holds all cubicon groups. Working with Cubecubed requires
 * only one scene. To group cubicons together, you need to create a Group
 * instance and assign every cubicon to it.
 */
export class Scene {
    /**
     * Name of this scene.
     */
    name: string;

    /**
     * Config options of this scene.
     */
    CONFIG: SCENE_CONFIG;

    /**
     * The time passed by since this scene was created (in milliseconds), or
     * the sum of the `groupElapsed` property of all groups included in this
     * scene.
     */
    sceneElapsed = 0;

    /**
     * Include this scene to HTML flow.
     *
     * @param sceneName Name of the scene.
     */
    constructor(sceneName: string, CONFIG?: SCENE_CONFIG) {
        this.name = sceneName;

        this.CONFIG = {
            sceneWidth: CONFIG?.sceneWidth ?? SCENE_DEFAULT_CONFIG.sceneWidth,
            sceneHeight:
                CONFIG?.sceneHeight ?? SCENE_DEFAULT_CONFIG.sceneHeight,
        };
    }

    /**
     * Fade out and remove this scene away from HTML flow. That means,
     * everything in the scene will be removed, too.
     *
     * @param delay Delay (in milliseconds) before destroying this scene. This
     * delay variable should be tracked by summing the `groupElapsed` properties
     * all groups included in this scene.
     */
    destroy(delay = 0) {
        select("#cubecubed")
            .selectAll(".group")
            .transition()
            .delay(this.sceneElapsed + delay)
            .duration(500)
            .style("opacity", 0)
            .remove();
    }
}
