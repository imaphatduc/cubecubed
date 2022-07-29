import {
    Scene,
    Group,
    Square,
    COLOR,
    CreatePlaneShape,
    CreateLineShape,
} from "../src/index";

function sumOfSequenceProof() {
    const scene = new Scene("sum-of-sequence-proof");
    const group = new Group("graphing-group", scene);

    const square = new Square({
        group: group,
        sideLength: 6,
        CONFIG: { strokeColor: COLOR.PINK_1 },
    }).render();

    group.play([new CreatePlaneShape({ cubicon: square })]);

    const { horizontalLines, verticalLines } = square.drawInnerGrid();

    const anims = [...horizontalLines, ...verticalLines].map(
        (line) => new CreateLineShape({ cubicon: line })
    );

    group.play(anims);
}

sumOfSequenceProof();
