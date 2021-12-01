import { Square, COLOR, initSVGScene, Grid } from "cubecubed";

initSVGScene(); // This is neccessary

const grid = new Grid();
grid.drawGridFromOrigin();

const square = new Square({
    position: { x: 0, y: 0 },
    sideLength: 2,
    fillColor: COLOR.PURPLE_1,
    strokeColor: COLOR.PINK,
    strokeWidth: 2,
    waitTime: 500,
});

square.create();
square.translateByVector({ x: 5, y: 1 });
square.rotate(45);
square.translateByVector({ x: -2, y: 3 });
square.rotate(-45);
square.fadeOut();
