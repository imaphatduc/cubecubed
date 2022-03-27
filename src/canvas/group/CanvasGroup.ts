import { ScaleLinear, scaleLinear } from "d3-scale";

import p5, { Renderer } from "p5";
//+++++++++++++++++++++++++++++++++++++++++++++++++++//

import { Scene } from "@scene/Scene";

import { CanvasAnimation } from "@animations/CanvasAnimation";

import { CanvasCubicon } from "@cubicons/CanvasCubicon";

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
     * Number of squares in the x direction.
     */
    xSquareNums: number;

    /**
     * Number of squares in the x direction.
     */
    ySquareNums: number;

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

        this.defineBoundsAndSquares(this.ratio);

        this.defineCovertFunctions(this.ratio);

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

    private defineBoundsAndSquares(ratio: [number, number]) {
        const { sceneWidth, sceneHeight } = this.scene;

        const xSquareLength = ratio[0] * this.squareLength;
        const ySquareLength = ratio[1] * this.squareLength;

        this.xSquareNums = Math.floor(sceneWidth / xSquareLength);
        this.ySquareNums = Math.floor(sceneHeight / ySquareLength);

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
        const { sceneWidth, sceneHeight } = this.scene;

        const xBound = [
            -sceneWidth / (this.squareLength * ratio[0]),
            sceneWidth / (this.squareLength * ratio[0]),
        ];

        const yBound = [
            -sceneHeight / (this.squareLength * ratio[1]),
            sceneHeight / (this.squareLength * ratio[1]),
        ];

        this.xGtoW = scaleLinear()
            .domain(xBound)
            .range([-sceneWidth, sceneWidth]);

        this.yGtoW = scaleLinear()
            .domain(yBound)
            .range([-sceneHeight, sceneHeight]);

        this.xWtoG = scaleLinear()
            .domain([-sceneWidth, sceneWidth])
            .range(this.xBound);

        this.yWtoG = scaleLinear()
            .domain([-sceneHeight, sceneHeight])
            .range(this.yBound);
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
