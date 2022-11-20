import {
    COLOR,
    CreatePlaneShape,
    DrawGrid,
    Grid,
    Group,
    Rotate,
    Scene,
    Square,
    VectorShape,
    Vector2,
    CreateVectorShape,
} from "cubecubed";

// By convention, first-class functions represent `scenes`,
// and each function inside it represents a `group`.
function drawShapes() {
    const scene = new Scene("draw-shapes-scene");

    (() => {
        const group = new Group("squares", scene);

        const square1 = new Square({
            group: group,
            sideLength: 2,
            CONFIG: {
                strokeColor: COLOR.PINK_1,
            },
        }).render();

        const square2 = new Square({
            group: group,
            sideLength: 2,
            CONFIG: {
                strokeColor: COLOR.PINK_1,
            },
        }).render();

        group.play([new CreatePlaneShape({ cubicon: square1 })]);

        group.play([
            new CreatePlaneShape({ cubicon: square2 }),
            new Rotate({ cubicon: square1, degree: 45 }),
        ]);
    })();

    (() => {
        const group = new Group("vectors", scene);

        const vector = new VectorShape({
            group: group,
            endPoint: new Vector2(4, 4),
            CONFIG: {
                lineColor: COLOR.TEAL_1,
            },
        }).render();

        group.play([new CreateVectorShape({ cubicon: vector })]);
    })();

    (() => {
        const group = new Group("plane-grid-group", scene);

        const grid = new Grid({ group: group }).render();

        group.play([new DrawGrid({ cubicon: grid })]);
    })();
}

drawShapes();
