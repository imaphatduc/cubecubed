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

scene.play([
    new Create({
        cubicon: square,
    }),
]);

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
    new Translate({ cubicon: square, vector: new Vector3(1, 2, 0) }),
    new Rotate({ cubicon: square, degree: 45 }),
]);

scene.play([new FadeIn({ cubicon: circle })]);

scene.play([
    new Translate({ cubicon: circle, vector: new Vector3(1, 2, 0) }),
    new Translate({ cubicon: square, vector: new Vector3(1, 2, 0) }),
    new Translate({ cubicon: circle, vector: new Vector3(1, -3, 0) }),
]);

scene.play([new FadeOut({ cubicon: square })]);
scene.play([new FadeOut({ cubicon: circle })]);

const vect = new Vector({
    scene: scene,
    startPoint: { x: 0, y: 0 },
    endPoint: { x: 3, y: 2 },
    vectColor: COLOR.TEAL_1,
    vectStrokeWidth: 2,
});

scene.play([
    new Create({ cubicon: vect }),
    new Rotate({ cubicon: vect, degree: -90 }),
]);
scene.play([
    new Translate({ cubicon: vect, vector: new Vector3(1, 3, 0) }),
    new Rotate({ cubicon: vect, degree: -90 }),
]);

const vect2 = new Vector({
    scene: scene,
    startPoint: { x: 0, y: 0 },
    endPoint: { x: 3, y: 2 },
    vectColor: COLOR.PINK_2,
    vectStrokeWidth: 2,
});

scene.play([new Create({ cubicon: vect2 })]);

scene.play([
    new Rotate({ cubicon: vect2, degree: 90 }),
    new Rotate({ cubicon: vect, degree: 90 }),
]);
