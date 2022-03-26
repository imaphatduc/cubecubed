import {
    COLOR,
    Create,
    DrawGridFromScreenSides,
    Grid,
    Group,
    Rotate,
    Scene,
    Square,
    Vector,
    Vector2,
} from "cubecubed";

/// This variable keeps track of the time goes by during the animations
/// We'll use this to control time, so don't forget to include it to your code
let elapsed = 0;

/// By convention, each function implements the animations in each scene...
function drawShapes() {
    const scene = new Scene("draw-shapes");

    /// ...And groups should be inside functions
    function squares() {
        const squares = new Group("squares", scene);

        const square1 = new Square({
            group: squares,
            sideLength: 2,
            CONFIG: {
                strokeColor: COLOR.PINK_1,
            },
        }).render();

        squares.play([new Create({ cubicon: square1 })]);

        const square2 = new Square({
            group: squares,
            sideLength: 2,
            CONFIG: {
                strokeColor: COLOR.PINK_1,
            },
        }).render();

        squares.play([
            new Create({ cubicon: square2 }),
            new Rotate({ cubicon: square1, degree: 45 }),
        ]);

        /// Set elapsed
        elapsed = squares.groupElapsed;
    }

    function vectors() {
        const vectors = new Group("vectors", scene);

        const vector = new Vector({
            group: vectors,
            endPoint: new Vector2(4, 4),
            CONFIG: {
                lineColor: COLOR.TEAL_1,
            },
        }).render();

        /// wait for the previous group's animations to complete, then start this group's ones
        vectors.sleep(elapsed);

        vectors.play([new Create({ cubicon: vector })]);

        elapsed = vectors.groupElapsed;
    }

    squares();
    vectors();
}

function animatePlaneGrid() {
    const scene = new Scene("animate-plane-grid");

    const planeGridGroup = new Group("plane-grid-group", scene);

    const grid = new Grid({ group: planeGridGroup }).render();

    planeGridGroup.sleep(elapsed - 2000);
    planeGridGroup.play([new DrawGridFromScreenSides(grid)]);

    elapsed = planeGridGroup.groupElapsed;
}

drawShapes();
animatePlaneGrid();
