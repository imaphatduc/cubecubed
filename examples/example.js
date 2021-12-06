import {
    initAnimScene,
    Scene,
    Grid,
    Square,
    Circle,
    Line,
    Vector,
    COLOR,
    Vector3,
    Create,
    Translate,
    Rotate,
    DrawGridFromOrigin,
    FadeOut,
    FadeIn,
} from "../src/index.js";

initAnimScene();

const scene = new Scene("start");
const grid = new Grid({
    scene: scene,
    hasNums: true,
});

scene.play([new DrawGridFromOrigin(grid)]);

const square = new Square({
    scene: scene,
    position: { x: 0, y: 0 },
    sideLength: 2,
    fillOpacity: 0.5,
    strokeColor: COLOR.PINK_1,
    strokeWidth: 2,
});

scene.play([new Create(square)]);

const circle = new Circle({
    scene: scene,
    position: { x: 1, y: 3 },
    radius: 1,
    fillColor: COLOR.PURPLE_1,
    fillOpacity: 0.5,
    strokeColor: COLOR.PINK_1,
    strokeWidth: 2,
});

scene.play([
    new Translate(square, new Vector3(1, 2, 0)),
    new Rotate(square, 45),
]);

scene.play([new FadeIn(circle)]);

scene.play([
    new Translate(circle, new Vector3(1, 2, 0)),
    new Translate(square, new Vector3(1, 2, 0)),
    new Translate(circle, new Vector3(1, -3, 0)),
]);

scene.play([new FadeOut(square)]);
scene.play([new FadeOut(circle)]);

const vect = new Vector({
    scene: scene,
    startPoint: { x: 0, y: 0 },
    endPoint: { x: 3, y: 2 },
    vectColor: COLOR.TEAL_1,
    vectStrokeWidth: 2,
});

scene.play([new Create(vect), new Rotate(vect, -90)]);
scene.play([new Translate(vect, new Vector3(1, 3, 0)), new Rotate(vect, -90)]);

const line = new Line({
    scene: scene,
    startPoint: { x: 0, y: 0 },
    endPoint: { x: 3, y: 2 },
    lineColor: COLOR.PINK_2,
    lineWidth: 2,
});

scene.play([new Create(line)]);

scene.play([new Rotate(line, 90), new Rotate(vect, 90)]);
