import {
    Scene,
    Group,
    Square,
    COLOR,
    Vector2,
    Create,
    Line,
} from "../src/index";

function sumOfSequenceProof() {
    const scene = new Scene("sum-of-sequence-proof");
    const group = new Group("graphing-group", scene);

    const square = new Square({
        group: group,
        sideLength: 6,
        CONFIG: { strokeColor: COLOR.PINK_1 },
    }).render();
    group.play([new Create({ cubicon: square })]);

    square.drawInnerGrid();

    const anims = [];

    for (let i = -square.sideLength / 2 + 1; i < square.sideLength / 2; i++) {
        const horizontalLine = new Line({
            group: group,
            startPoint: new Vector2(i, i),
            endPoint: new Vector2(-square.sideLength / 2, i),
        }).render();

        const verticalLine = new Line({
            group: group,
            startPoint: new Vector2(i, i),
            endPoint: new Vector2(i, -square.sideLength / 2),
        }).render();

        anims.push(
            new Create({ cubicon: horizontalLine }),
            new Create({ cubicon: verticalLine })
        );
    }

    group.play(anims);
}

sumOfSequenceProof();
