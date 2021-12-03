import {
    initAnimScene,
    Grid,
    Square,
    COLOR,
    Vector3,
    Line,
} from "./src/index.js";

initAnimScene();
const grid = new Grid();
grid.drawGridFromOrigin();

const square = new Square({
    position: { x: -3, y: 2 },
    sideLength: 1,
    fillColor: COLOR.PURPLE_1,
    strokeColor: COLOR.PINK,
    strokeWidth: 2,
    waitTime: 2000,
});

square.create();
square.rotate(45);
square.translateByVector(new Vector3(1, 2, 0));
square.fadeOut();

const line1 = new Line({
    startPoint: { x: 0, y: 0 },
    endPoint: { x: 4, y: 2 },
    lineColor: COLOR.TEAL_1,
    lineWidth: 2,
    waitTime: 3000,
});

line1.create();
line1.rotate(90);
