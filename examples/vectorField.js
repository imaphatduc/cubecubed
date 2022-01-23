import {
    Group,
    Scene,
    Vector2,
    VectorField,
    Grid,
    DrawGridFromScreenSides,
} from "../src/index";

function vectorField() {
    const scene = new Scene("visualize-2d-vector-field");

    const group = new Group("vector-field", scene);

    const grid = new Grid({ group: group }).render();
    group.play([new DrawGridFromScreenSides(grid)]);

    const vectorField = new VectorField({
        group: group,
        functionDef: (pos) => new Vector2(Math.sin(pos.y), Math.sin(pos.x)),
        CONFIG: {
            isColored: true,
            isScaled: true,
        },
    });

    vectorField.createVectors();
}

vectorField();
