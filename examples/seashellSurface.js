import {
    Axes3D,
    CanvasGroup,
    ParametricSurface,
    Scene,
    Slider,
    Vector3,
} from "../src/index";

const a = 2;
const b = 6 * Math.PI;
const c = 3 * Math.PI;

const seashell = (u, v) =>
    new Vector3(
        a * (Math.exp(u / b) - 1) * Math.cos(u) * Math.pow(Math.cos(v / 2), 2),
        a * (1 - Math.exp(u / b)) * Math.sin(u) * Math.pow(Math.cos(v / 2), 2),
        -(Math.exp(u / b) * Math.sin(v) - Math.exp(u / c) - Math.sin(v) + 1)
    );

const donut = (u, v) =>
    new Vector3(
        3 * Math.cos(u) + Math.cos(u) * Math.cos(v),
        3 * Math.sin(u) + Math.sin(u) * Math.cos(v),
        Math.sin(v)
    );

function seashellSurface() {
    const scene = new Scene("3d-graph-scene");
    const group = new CanvasGroup("3d-graph", scene, {
        orbitControls: true,
        zAxisUp: true,
    });

    new Axes3D({
        group,
        CONFIG: {
            xRange: [-5, 5],
            yRange: [-5, 5],
            zRange: [0, 5],
        },
    }).render();

    const surface = new ParametricSurface({
        group,
        functionDef: donut,
        scaleFactor: 1,
        CONFIG: {
            uRange: [0, 2 * Math.PI],
            vRange: [0, 2 * Math.PI],
        },
    }).render();

    const slider = new Slider({
        label: "u",
        min: 0,
        max: surface.CONFIG.uRange[1],
        step: 0.02,
        onSlide: (value) => surface.setVertices(value, undefined),
    });
}

seashellSurface();
