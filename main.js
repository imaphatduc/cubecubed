// import { Rectangle, Square, Circle } from "./src/cubicons/cubicon.js";
// import { Grid } from "./src/cubicons/graph.js";
// import { initSVGScene } from "./src/cubecubed.js";
// import { COLOR } from "./src/cubicons/constants.js";

// initSVGScene();
// const graph = new Grid();
// graph.drawGridFromOrigin();

// const square = new Square({
//     position: { x: 0, y: 0 },
//     sideLength: 2,
//     fillColor: COLOR.PURPLE_1,
//     strokeColor: COLOR.PINK,
//     strokeWidth: 2,
//     waitTime: 500,
// });

// square.create();
// square.translateByVector({ x: 5, y: 1 });
// square.rotate(45);
// square.translateByVector({ x: -2, y: 3 });
// square.rotate(-45);
// square.fadeOut();

// const circle = new Circle({
//     position: { x: -2, y: 0 },
//     radius: 1,
//     fillColor: COLOR.BLUE_1,
//     strokeColor: COLOR.BLUE_2,
//     strokeWidth: 2,
//     waitTime: 1000,
// });
// circle.create();
// circle.translateByVector({ x: 4, y: -3 });

// import { Square, COLOR, initSVGScene } from "cubecubed";
import { Square } from "./src/cubicons/cubicon";
import { COLOR } from "./src/cubicons/constants";
import { initSVGScene } from "./src/cubecubed";

initSVGScene(); // This is neccessary

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
