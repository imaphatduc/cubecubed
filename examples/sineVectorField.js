import { range } from "d3";
import {
    Group,
    CanvasGroup,
    Scene,
    Vector2,
    VectorField,
    Grid,
    DrawGrid,
    DrawVectorField,
    MathTex,
    Write,
    Vector3,
    StreamLine,
    SimulateStream,
} from "../src/index";

const scene = new Scene("sine-vector-field-scene");

function sineVectorField() {
    const group = new Group("sine-vector-field", scene);

    const grid = new Grid({ group: group }).render();

    scene.play([new DrawGrid({ cubicon: grid })]);

    const vectorField = new VectorField({
        group: group,
        functionDef: ({ x, y }) => new Vector2(Math.sin(y), Math.sin(x)),
        CONFIG: {
            isScaled: true,
            lineColor: "scaled",
            lineWidth: 1,
        },
    }).render();

    scene.play([new DrawVectorField({ cubicon: vectorField })]);

    const formula = new MathTex({
        group: group,
        position: new Vector2(-8, 4),
        text: "\\sum_{i=0}^n i^2 = \\frac{(n^2+n)(2n+1)}{6}",
    }).render();

    scene.play([new Write({ cubicon: formula })]);

    group.makeup({ duration: 1000, CONFIG: { opacity: 0.5 } });

    group.sleep(1000);
}

function sineFlowField() {
    const group = new CanvasGroup("flow-field", scene);

    const { xBound, yBound } = group;

    const positions = range(...xBound, 1)
        .map((x) => {
            return range(...yBound, 1).map((y) => new Vector3(x, y, 0));
        })
        .flat();

    const sineField = ({ x, y, z }) => {
        const dt = 0.1;

        const dx = Math.sin(y);
        const dy = Math.sin(x);

        x += dx * dt;
        y += dy * dt;

        return new Vector3(x, y, z);
    };

    const stream = positions.map((position) => {
        return new StreamLine({
            group: group,
            position: position,
            functionDef: sineField,
            maxVertices: 20,
            CONFIG: {
                strokeColor: "#5e2eff",
                strokeWidth: 1,
            },
        }).render();
    });

    const streamAnimations = stream.map((streamline) => {
        return new SimulateStream({
            cubicon: streamline,
        });
    });

    scene.play3D(streamAnimations, group);
}

sineVectorField();
sineFlowField();
