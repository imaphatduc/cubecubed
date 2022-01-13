import { Animation } from "../animations/animation";
import { FadeOut } from "../animations/fadeOut";
import { svgWidth, svgHeight, TYPES } from "../cubicons/constants";
import { Cubicon } from "../cubicons/cubicon";
import { Scene } from "./scene";

/**
 * The dad/mom object of every pack of objects in the visualization.
 *
 * Please see the Quick Start page in official documentation for clearer understanding about this `Group` term.
 */
export class Group {
    /**
     * The scene that this group belongs to.
     */
    scene: Scene;

    /**
     * The `<svg/>` element that represents this group.
     */
    svg_group: any;

    /**
     * Name of this group.
     */
    name: string;

    /**
     * Cubicons included in this group.
     */
    cubicons: Cubicon[];

    /**
     * Animations played in this group.
     */
    animations: Animation[];

    /**
     * The total time to finish playing all animations in the current queue (will be override when the next queue is called). (in milliseconds)
     */
    queueElapsed: number;
    /**
     * The time passed by since this group was created. (in milliseconds)
     *
     * > (aka the total time of all the animations **called** in this group)
     */
    groupElapsed: number;

    /**
     * The total time before this group is created. (in milliseconds)
     *
     * > (aka the total time of all the animations **called** in **other** groups in the same scene)
     */
    sleepTime: number;

    /**
     * Include this group to HTML flow.
     *
     * @param groupName Name of the group.
     *
     * @param scene The scene that the group belongs to.
     */
    constructor(groupName: string, scene: Scene) {
        this.scene = scene;
        this.svg_group = !scene.svg_scene.select(`#${groupName}`).empty()
            ? scene.svg_scene.select(`#${groupName}`)
            : scene.svg_scene
                  .append("svg")
                  .attr("id", `${groupName}`)
                  .attr("class", "group")
                  .attr(
                      "viewBox",
                      `${-svgWidth / 2} ${
                          -svgHeight / 2
                      } ${svgWidth} ${svgHeight}`
                  );
        this.name = groupName;

        this.cubicons = [];

        this.animations = [];

        this.queueElapsed = 0;
        this.groupElapsed = 0;

        this.sleepTime = 0;
    }

    /**
     * Render all the specified cubicons on the screen (instead of calling `.render()` for each of the cubicon).
     *
     * @param cubicons Comma-separated cubicons to render.
     */
    render(...cubicons: any[]) {
        cubicons.forEach((cubicon) => {
            cubicon.render();
        });
    }

    /**
     * Play all the animations included in a queue.
     *
     * @param anims Array (Queue) of animations to play.
     */
    play(anims: any[]) {
        anims.forEach((anim) => {
            anim.cubicon.elapsedTime = this.queueElapsed;
            if (typeof anim.projectors !== "undefined") {
                anim.projectors.forEach(
                    (p: any) => (p.elapsedTime = this.queueElapsed)
                );
            }
        });

        anims.forEach((anim) => {
            this.addAnimation(anim);

            try {
                anim.play(this.sleepTime);
            } catch (err) {
                // throw new Error(
                //     anim.cubicon.constructor.name +
                //         "() haven't been rendered on the screen. Please call render() on the cubicon you're invoking with the `new` keyword."
                // );
            }

            this.sleepTime = 0;
        });

        this.queueElapsed = Math.max(
            ...anims.map((anim) => anim.cubicon.elapsedTime)
        );

        anims.forEach((a) => {
            a.cubicon.elapsedTime = this.queueElapsed;
        });

        this.groupElapsed = this.queueElapsed;
    }

    /**
     * Sleep this group for an amount of time.
     *
     * @param milliseconds The time to sleep.
     */
    sleep(milliseconds: number) {
        this.sleepTime = milliseconds;
    }

    private addAnimation(anim: Animation) {
        this.animations.push(anim);
    }

    /**
     * @deprecated
     *
     * Add a cubicon to this group.
     */
    add(cubicon: Cubicon) {
        this.cubicons.push(cubicon);
    }

    /**
     * Remove a cubicon from this group.
     *
     * @param cubicon The cubicon to remove.
     */
    remove(cubicon: TYPES) {
        if (cubicon.cubType === "geometry") {
            cubicon.group.play([new FadeOut({ cubicon: cubicon })]);
        }
        cubicon.def_cubiconBase
            .transition()
            .delay(cubicon.elapsedTime + this.groupElapsed)
            .duration(0)
            .remove();
    }

    /**
     * Fade out and destroy this group from the HTML flow.
     * That means, everything in the scene will be removed, too.
     *
     * @param delay Delay (in milliseconds) before destroying this scene.
     */
    destroy(delay: number) {
        this.svg_group
            .transition()
            .delay(this.groupElapsed + delay)
            .duration(500)
            .style("opacity", 0)
            .remove();
    }
}
