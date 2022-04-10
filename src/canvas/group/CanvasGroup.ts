import { ScaleLinear, scaleLinear } from "d3-scale";

import p5, { Renderer } from "p5";
//+++++++++++++++++++++++++++++++++++++++++++++++++++//

import { Scene } from "@scene/Scene";

import { CanvasAnimation } from "@animations/CanvasAnimation";

import { CanvasCubicon } from "@cubicons/CanvasCubicon";

export interface ANIMATIONS_INFO {
    animation: CanvasAnimation;
    start: number;
    end: number;
}

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
    animationsInfo: ANIMATIONS_INFO[] = [];

    /**
     * Number of squares in the x direction.
     */
    xSquareNums: number;

    /**
     * Number of squares in the y direction.
     */
    ySquareNums: number;

    /**
     * Number of squares in the z direction.
     */
    zSquareNums: number;

    /**
     * Length of a square in this group.
     */
    squareLength = 40;

    /**
     * Ratio between square length in x, y and z direction.
     */
    ratio: [number, number, number] = [1, 1, 1];

    /**
     * x coordinate bound values of this group.
     */
    xBound: [number, number];

    /**
     * y coordinate bound values of this group.
     */
    yBound: [number, number];

    /**
     * z coordinate bound values of this group.
     */
    zBound: [number, number];

    /**
     * Convert x value of grid coordinates to real-world coordinates.
     */
    xGtoW: ScaleLinear<number, number, never>;

    /**
     * Convert y value of grid coordinates to real-world coordinates.
     */
    yGtoW: ScaleLinear<number, number, never>;

    /**
     * Convert z value of grid coordinates to real-world coordinates.
     */
    zGtoW: ScaleLinear<number, number, never>;

    /**
     * Convert x value of real-world coordinates to grid coordinates.
     */
    xWtoG: ScaleLinear<number, number, never>;

    /**
     * Convert y value of real-world coordinates to grid coordinates.
     */
    yWtoG: ScaleLinear<number, number, never>;

    /**
     * Convert z value of real-world coordinates to grid coordinates.
     */
    zWtoG: ScaleLinear<number, number, never>;

    /**
     * The time passed by since this group was created. (in milliseconds)
     *
     * > (aka the total time of all the animations **called** in this group)
     */
    groupElapsed = 0;

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

        this.defineBoundsAndSquares(this.ratio);

        this.defineCovertFunctions(this.ratio);

        this.groupElapsed = scene.sceneElapsed;

        const sketch = (p: p5) => {
            p.setup = () => {
                this.canvas_group = p
                    .createCanvas(p.windowWidth, p.windowHeight)
                    .parent("#cubecubed")
                    .attribute("id", "canvas-viz");

                p.noFill();
            };

            p.draw = () => {
                p.translate(p.width / 2, p.height / 2);
                p.scale(1, -1);

                p.background(0);

                this.update(p, this.cubicons, this.animationsInfo);
            };
        };

        new p5(sketch);
    }

    private defineBoundsAndSquares(ratio: [number, number, number]) {
        const { sceneWidth, sceneHeight } = this.scene;

        const sceneDepth = Math.min(sceneWidth, sceneHeight);

        const xSquareLength = ratio[0] * this.squareLength;
        const ySquareLength = ratio[1] * this.squareLength;
        const zSquareLength = ratio[2] * this.squareLength;

        this.xSquareNums = Math.floor(sceneWidth / xSquareLength);
        this.ySquareNums = Math.floor(sceneHeight / ySquareLength);
        this.zSquareNums = Math.floor(sceneDepth / zSquareLength);

        this.xBound = [
            Math.floor(-this.xSquareNums / 2),
            -Math.floor(-this.xSquareNums / 2),
        ];
        this.yBound = [
            Math.floor(-this.ySquareNums / 2),
            -Math.floor(-this.ySquareNums / 2),
        ];
        this.zBound = [
            Math.floor(-this.zSquareNums / 2),
            -Math.floor(-this.zSquareNums / 2),
        ];
    }

    private defineCovertFunctions(ratio: [number, number, number]) {
        const { sceneWidth, sceneHeight } = this.scene;

        const sceneDepth = Math.min(sceneWidth, sceneHeight);

        const xBound = [
            -sceneWidth / (this.squareLength * ratio[0]),
            sceneWidth / (this.squareLength * ratio[0]),
        ];

        const yBound = [
            -sceneHeight / (this.squareLength * ratio[1]),
            sceneHeight / (this.squareLength * ratio[1]),
        ];

        const zBound = [
            -sceneDepth / (this.squareLength * ratio[2]),
            sceneDepth / (this.squareLength * ratio[2]),
        ];

        this.xGtoW = scaleLinear()
            .domain(xBound)
            .range([-sceneWidth, sceneWidth]);

        this.yGtoW = scaleLinear()
            .domain(yBound)
            .range([-sceneHeight, sceneHeight]);

        this.zGtoW = scaleLinear()
            .domain(zBound)
            .range([-sceneDepth, sceneDepth]);

        this.xWtoG = scaleLinear()
            .domain([-sceneWidth, sceneWidth])
            .range(this.xBound);

        this.yWtoG = scaleLinear()
            .domain([-sceneHeight, sceneHeight])
            .range(this.yBound);

        this.zWtoG = scaleLinear()
            .domain([-sceneDepth, sceneDepth])
            .range(this.zBound);
    }

    /**
     * `update()` is called every animation frame.
     *
     * @param cubicons Cubicons to be rendered every animation frame.
     *
     * @param animations Animations to be played every animation frame.
     */
    private update(p: p5, cubicons: any[], animationsInfo: any[]) {
        cubicons.forEach((cubicon) => {
            cubicon.render(p);
        });

        animationsInfo.forEach((animInfo) => {
            if (p.millis() >= animInfo.start) {
                if (animInfo.animation.duration > 0) {
                    if (p.millis() <= animInfo.end) {
                        animInfo.animation.play();
                    }
                } else {
                    animInfo.animation.play();
                }
            }
        });
    }

    /**
     * Play all the animations included in a queue.
     *
     * @param anims Array (Queue) of animations to play.
     */
    play(anims: any[]) {
        const queueElapsed = Math.max(...anims.map((anim) => anim.duration));

        this.animationsInfo.push(
            ...anims.map((anim) => ({
                animation: anim,
                start: this.groupElapsed,
                end: this.groupElapsed + anim.duration,
            }))
        );

        this.groupElapsed += queueElapsed;

        this.scene.sceneElapsed = this.groupElapsed;
    }

    /**
     * Sleep this group for an amount of time.
     *
     * @param milliseconds The time to sleep.
     */
    sleep(milliseconds: number) {
        this.groupElapsed += milliseconds;

        this.scene.sceneElapsed = this.groupElapsed;
    }
}
