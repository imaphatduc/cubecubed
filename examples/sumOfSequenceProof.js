import { Scene, Group, Square, COLOR, Create } from "../src/index";

function sumOfSequenceProof() {
    const scene = new Scene("sum-of-sequence-proof");
    const group = new Group("graphing-group", scene);

    const square = new Square({
        group: group,
        sideLength: 6,
        CONFIG: { strokeColor: COLOR.PINK_1 },
    }).render();

    group.play([new Create({ cubicon: square })]);

    const { horizontalLines, verticalLines } = square.drawInnerGrid();

    const anims = [];

    [...horizontalLines, ...verticalLines].forEach((line) =>
        anims.push(new Create({ cubicon: line }))
    );

    group.play(anims);
}

sumOfSequenceProof();
