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
    Create,
    FadeIn,
    MathText,
    FadeOut,
} from "../src/index";

/// This variable keeps track of the time goes by during the animations
/// We'll use this to control time, so don't forget to include it to your code
/// In this example, the scene has only one group, so we don't need `elapsed`
let elapsed = 0;

function sumOfSequenceProof() {
    const scene = new Scene("sum-of-sequence-proof");
    const gr = new Group("graphing-group", scene);

    // const grid = new Grid({ group: gr });
    // gr.play([new DrawGridFromScreenSides(grid)]);

    const square = new Square({
        group: gr,
        sideLength: 5,
        CONFIG: { strokeColor: COLOR.PINK_1 },
    }).render();
    gr.play([new Create({ cubicon: square })]);

    square.drawInnerGrid();

    const points = [];
    for (let i = -3; i <= 3; i++) {
        points.push(new Vector2(i, i));
    }
    gr.play([new Translate({ cubicon: square, vector: new Vector2(1, 3) })]);
    // const tex = new MathText({
    //     group: gr,
    //     position: new Vector2(2, 3),
    //     text: "f(x) = x^2",
    // }).render();
    // gr.play([new FadeOut({ cubicon: tex })]);
    const linesData = square.pointToSides(points, [1, 1]);
    gr.play([new PointToSides(linesData)]);
}

sumOfSequenceProof();
