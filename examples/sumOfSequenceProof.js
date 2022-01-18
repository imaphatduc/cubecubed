import {
    Scene,
    Group,
    Square,
    COLOR,
    Vector2,
    PointToSides,
    Translate,
    Create,
} from "../src/index";

/// This variable keeps track of the time goes by during the animations
/// We'll use this to control time, so don't forget to include it to your code
/// In this example, the scene has only one group, so we don't need `elapsed`
let elapsed = 0;

function sumOfSequenceProof() {
    const scene = new Scene("sum-of-sequence-proof");
    const group = new Group("graphing-group", scene);

    const square = new Square({
        group: group,
        sideLength: 5,
        CONFIG: { strokeColor: COLOR.PINK_1 },
    }).render();
    group.play([new Create({ cubicon: square })]);

    square.drawInnerGrid();

    const points = [];
    for (let i = -3; i <= 3; i++) {
        points.push(new Vector2(i, i));
    }
    group.play([new Translate({ cubicon: square, vector: new Vector2(1, 3) })]);

    const linesData = square.pointToSides(points, [1, 1]);
    group.play([new PointToSides(linesData)]);
}

sumOfSequenceProof();
