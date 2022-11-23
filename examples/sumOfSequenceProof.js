import { Scene, Group, Square, COLOR, CreateShape } from "../src/index";

function sumOfSequenceProof() {
    const scene = new Scene("sum-of-sequence-proof-scene");
    const group = new Group("sum-of-sequence-proof", scene);

    const square = new Square({
        group: group,
        sideLength: 6,
        CONFIG: { strokeColor: COLOR.PINK_1 },
    }).render();

    group.play([new CreateShape({ cubicon: square })]);

    const { horizontalLines, verticalLines } = square.drawInnerGrid();

    const animations = [...horizontalLines, ...verticalLines].map(
        (line) => new CreateShape({ cubicon: line })
    );

    group.play(animations);
}

sumOfSequenceProof();
