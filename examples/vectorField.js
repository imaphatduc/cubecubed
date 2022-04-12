import { range } from "d3";
import {
    Group,
    Scene,
    Vector2,
    VectorField,
    Grid,
    DrawGridFromScreenSides,
    DrawVectorField,
    CanvasGroup,
    StreamLine,
    Vector3,
    SimulateStream,
} from "../src/index";

const dt = 0.1;

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
        });

        group.play([new DrawVectorField({ cubicon: vectorField })]);

        group.makeup({ opacity: 0.5 }, 1000);

        group.sleep(1000);
    }

    function flowField() {
        const group = new CanvasGroup("flow-field", scene);

        const { xBound, yBound } = group;

        const stream = [];

        range(...xBound, 1).forEach((x) => {
            range(...yBound, 1).forEach((y) => {
                stream.push(
                    new StreamLine({
                        group: group,
                        position: new Vector3(x, y, 0),
                        dt: dt,
                        functionDef: ({ x, y, z }) =>
                            new Vector3(Math.sin(y), Math.sin(x), z),
                        maxVertices: 20,
                        CONFIG: {
                            strokeColor: "#5e2eff",
                            strokeWidth: 1,
                        },
                    })
                );
            });
        });

        const streamAnimations = stream.map((streamline) => {
            streamline.vertices.splice(1);

            return new SimulateStream({
                cubicon: streamline,
            });
        });

        group.play(streamAnimations);
    }

    vectorField();
    flowField();
}

vectorFieldSimulation();
