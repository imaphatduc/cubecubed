import {
    Scene,
    Group,
    Grid,
    DrawGridFromScreenSides,
    Square,
    COLOR,
    Vector2,
    PointToSides,
    Translate,
    Rotate,
} from "../src/index";

/// This variable keeps track of the time goes by during the animations
/// We'll use this to control time, so don't forget to include it to your code
/// In this example, the scene has only one group, so we don't need `elapsed`
let elapsed = 0;

function sumOfSequenceProof() {
    const scene = new Scene("sum-of-sequence-proof");
    const gr = new Group("graphing-group", scene);

    const grid = new Grid({ group: gr });
    gr.play([new DrawGridFromScreenSides(grid)]);

    const square = new Square({
        group: gr,
        sideLength: 8,
        strokeColor: COLOR.PINK_1,
    });
    gr.play([new Translate({ cubicon: square, vector: new Vector2(6, 2) })]);
    gr.play([new Rotate({ cubicon: square, degree: 60 })]);

    const points = [];
    for (let i = -3; i <= 3; i++) {
        points.push(new Vector2(i, i));
    }
    const linesData = square.pointToSides(points, [-2, 1]);
    gr.play([new PointToSides(linesData)]);
}

sumOfSequenceProof();
