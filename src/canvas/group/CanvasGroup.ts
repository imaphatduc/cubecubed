import { ScaleLinear, scaleLinear } from "d3-scale";

import {
    AxesHelper,
    Camera,
    Clock,
    Material,
    OrthographicCamera,
    PerspectiveCamera,
    Scene as TScene,
    WebGLRenderer,
} from "three";

import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer.js";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass.js";
import { AfterimagePass } from "three/examples/jsm/postprocessing/AfterimagePass.js";
//+++++++++++++++++++++++++++++++++++++++++++++++++++//

import configFactory from "@utils/configFactory";

import { Scene } from "@scene/Scene";

import { CanvasAnimation } from "@animations/CanvasAnimation";

import { CanvasCubicon } from "@cubicons/CanvasCubicon";

export interface ANIMATION_INFO {
    animation: CanvasAnimation;
    startAt: number;
    endAt: number;
}

export interface CANVAS_GROUP_CONFIG {
    type?: "2d" | "3d";

    axesHelper?:
        | {
              size?: number;
          }
        | false;

    orbitControls?: boolean;

    postprocessing?:
        | {
              afterimage?: boolean;
          }
        | false;
}

export const CANVAS_GROUP_DEFAULT_CONFIG: CANVAS_GROUP_CONFIG = {
    type: "2d",
    axesHelper: false,
    orbitControls: false,
    postprocessing: false,
};

/**
 * The object to group canvas cubicons together. A group must belong to a scene.
 */
export class CanvasGroup {
    /**
     * The scene that this group belongs to.
     */
    scene: Scene;

    /**
     * Three.js Scene object
     */
    threeScene: TScene;

    /**
     * Three.js Camera object
     */
    private camera: Camera;

    /**
     * Three.js Renderer object
     */
    private renderer: WebGLRenderer;

    /**
     * Three.js OrbitControls object
     */
    private controls?: OrbitControls;

    /**
     * Three.js EffectComposer object
     */
    private composer?: EffectComposer;

    /**
     * Three.js Clock object
     */
    private clock: Clock;

    /**
     * Name of this scene.
     */
    name: string;

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
     * Animations to play in this group, with `startAt` and `endAt` included.
     */
    private animationsInfo: ANIMATION_INFO[] = [];

    /**
     * The time passed by since this group was created. (in milliseconds)
     *
     * > (aka the total time of all the animations **called** in this group)
     */
    groupElapsed = 0;

    /**
     * Config options of this canvas group.
     */
    CONFIG: CANVAS_GROUP_CONFIG;

    /**
     * Include this group to HTML flow.
     *
     * @param groupName Name of the group.
     *
     * @param scene The scene that the group belongs to.
     *
     * @param CONFIG Config options of the canvas group.
     */
    constructor(groupName: string, scene: Scene, CONFIG: CANVAS_GROUP_CONFIG) {
        this.scene = scene;

        this.name = groupName;

        this.CONFIG = configFactory(CANVAS_GROUP_DEFAULT_CONFIG, CONFIG);

        this.defineBoundsAndSquares(this.ratio);

        this.defineCovertFunctions(this.ratio);

        this.groupElapsed = scene.sceneElapsed;

        this.start();
        this.update();
    }

    /**
     * Render all the specified cubicons on the screen (instead of calling `.render()` for each of the cubicon).
     *
     * @param cubicons Comma-separated cubicons to render.
     */
    render(cubicons: CanvasCubicon[]) {
        cubicons.forEach((cubicon) => {
            cubicon.geometry.computeVertexNormals();

            cubicon.render();
        });
    }

    private defineBoundsAndSquares(ratio: [number, number, number]) {
        const { sceneWidth, sceneHeight } = this.scene.CONFIG;

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
        const { sceneWidth, sceneHeight } = this.scene.CONFIG;

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

    private start() {
        // set scene
        (() => {
            this.threeScene = new TScene();
        })();

        // set camera
        (() => {
            const { sceneWidth, sceneHeight } = this.scene.CONFIG;

            if (this.CONFIG.type === "2d") {
                this.camera = new OrthographicCamera(
                    sceneWidth / -2,
                    sceneWidth / 2,
                    sceneHeight / 2,
                    sceneHeight / -2,
                    1,
                    10000
                );

                this.camera.position.z = 1000;
            } else {
                this.camera = new PerspectiveCamera(
                    75,
                    sceneWidth / sceneHeight,
                    0.1,
                    1000
                );

                this.camera.position.z = 5;
            }
        })();

        // set renderer
        (() => {
            this.renderer = new WebGLRenderer({ alpha: true, antialias: true });

            this.renderer.setSize(window.innerWidth, window.innerHeight);

            const domElement = this.renderer.domElement;

            domElement.setAttribute(
                "style",
                domElement.getAttribute("style") + "position:absolute;"
            );

            document.querySelector("#cubecubed")?.appendChild(domElement);
        })();

        // postprocessing
        (() => {
            if (this.CONFIG.postprocessing) {
                this.composer = new EffectComposer(this.renderer);
                this.composer.addPass(
                    new RenderPass(this.threeScene, this.camera)
                );

                if (this.CONFIG.postprocessing.afterimage) {
                    const afterimagePass = new AfterimagePass();
                    this.composer.addPass(afterimagePass);
                }
            }
        })();

        // set orbit controls
        (() => {
            if (this.CONFIG.orbitControls) {
                this.controls = new OrbitControls(
                    this.camera,
                    this.renderer.domElement
                );

                this.controls.enableZoom = false;

                this.controls.update();
            }
        })();

        // set clock
        (() => {
            this.clock = new Clock();

            this.clock.start();
        })();

        // helpers
        (() => {
            if (this.CONFIG.axesHelper) {
                const axesHelper = new AxesHelper(100);

                this.threeScene.add(axesHelper);
            }
        })();
    }

    /**
     * `update()` is called every animation frame.
     */
    private update() {
        const animate = () => {
            requestAnimationFrame(animate);

            const elapsed = this.clock.getElapsedTime() * 1000;

            this.animationsInfo.forEach((animationInfo) => {
                if (elapsed >= animationInfo.startAt) {
                    if (animationInfo.animation.duration > 0) {
                        if (elapsed <= animationInfo.endAt) {
                            animationInfo.animation.play();
                        }
                    } else {
                        animationInfo.animation.play();
                    }
                }
            });

            if (this.composer) {
                this.composer.render();
            } else {
                this.renderer.render(this.threeScene, this.camera);
            }

            if (this.controls) {
                this.controls.update();
            }
        };

        animate();
    }

    /**
     * Play all the animations included in a queue.
     *
     * @param animations Array (Queue) of animations to play.
     */
    play(animations: CanvasAnimation[]) {
        const queueElapsed = Math.max(
            ...animations.map((animation) => animation.duration)
        );

        this.animationsInfo.push(
            ...animations.map((animation) => ({
                animation,
                startAt: this.groupElapsed,
                endAt: this.groupElapsed + animation.duration,
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

    /**
     * Remove cubicons from this group.
     *
     * @param cubicons An array of cubicons to remove.
     */
    remove(cubicons: CanvasCubicon[]) {
        setTimeout(() => {
            cubicons.forEach((cubicon) => {
                cubicon.object.geometry.dispose();
                (cubicon.object.material as Material).dispose();

                this.threeScene.remove(cubicon.object);
            });
        }, this.groupElapsed);
    }
}
