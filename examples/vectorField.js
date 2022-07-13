import {
    Group,
    Scene,
    Vector2,
    VectorField,
    Grid,
    DrawGridFromScreenSides,
    DrawVectorField,
} from "../src/index";

function vectorFieldSimulation() {
    const scene = new Scene("visualize-2d-vector-field");

    function vectorField() {
        const group = new Group("vector-field", scene);

        const grid = new Grid({ group: group }).render();
        group.play([new DrawGridFromScreenSides(grid)]);

        const vectorField = new VectorField({
            group: group,
            functionDef: ({ x, y }) => new Vector2(Math.sin(y), Math.sin(x)),
            CONFIG: {
                isScaled: true,
                lineColor: "scaled",
                lineWidth: 1,
            },
        }).render();

        group.play([new DrawVectorField({ cubicon: vectorField })]);

        group.makeup({ opacity: 0.5 }, 1000);

        group.sleep(1000);
    }

    vectorField();
}

vectorFieldSimulation();
