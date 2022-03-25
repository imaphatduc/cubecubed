import p5, { Renderer } from "p5";
import { CanvasAnimation } from "../animations/CanvasAnimation";
import { CanvasCubicon } from "../cubicons/CanvasCubicon";
import { Scene } from "../../scene/Scene";

/**
 * The dad/mom object of every pack of objects in the visualization.
 *
 * A group must belong to a scene.
 *
 * Group is classified in terms of its purpose.
 * Below `CanvasGroup()` is a HTML canvas group to render canvas-related objects.
 *
 * Please see the Quick Start page in official documentation for clearer understanding about this `Group` term.
 */
export class CanvasGroup {
    /**
     * The scene that this group belongs to.
     */
    scene: Scene;

    /**
     * The `<canvas/>` element that represents this scene.
     */
    canvas_group: Renderer;

    /**
     * Name of this scene.
     */
    name: string;

    /**
     * List of cubicons included in this group.
     */
    cubicons: CanvasCubicon[] = [];

    /**
     * List of animations played in this group.
     */
    animations: CanvasAnimation[] = [];

    /**
     * Include this group to HTML flow.
     *
     * @param groupName Name of the group.
     *
     * @param scene The scene that the group belongs to.
     */
    constructor(groupName: string, scene: Scene) {
        this.scene = scene;

        const sketch = (p5: p5) => {
            p5.setup = () => {
                this.canvas_group = createCanvas(windowWidth, windowHeight)
                    .parent("#cubecubed")
                    .attribute("id", "canvas-viz");

                this.start();
            };

            p5.draw = () => {
                translate(width / 2, height / 2);
                scale(1, -1);

                this.update(this.cubicons, this.animations);
            };
        };

        new p5(sketch);

        this.name = groupName;
    }

    /**
     * `start()` is called at the initialization of the group.
     */
    private start() {
        noFill();
    }

    /**
     * `update()` is called every animation frame.
     *
     * @param cubicons Cubicons to be rendered every animation frame.
     *
     * @param animations Animations to be played every animation frame.
     */
    private update(cubicons: any[], animations: any[]) {
        cubicons.forEach((cubicon) => {
            cubicon.render();
        });

        animations.forEach((anim) => {
            if (anim.duration > 0) {
                if (millis() < anim.duration) {
                    anim.play();
                }
            } else {
                anim.play();
            }
        });
    }

    /**
     * Play all the animations included in a queue.
     *
     * @param anims Array (Queue) of animations to play.
     */
    play(anims: any[]) {
        anims.forEach((anim) => {
            this.animations.push(anim);
        });
    }
}
