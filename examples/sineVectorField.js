import {
    Group,
    Scene,
    Vector2,
    VectorField,
    Grid,
    DrawGrid,
    DrawVectorField,
    MathTex,
    Write,
} from "../src/index";

function sineVectorField() {
    const scene = new Scene("sine-vector-field-scene");
    const group = new Group("sine-vector-field", scene);

    const grid = new Grid({ group: group }).render();

    group.play([new DrawGrid({ cubicon: grid })]);

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

    const formula = new MathTex({
        group: group,
        position: new Vector2(-8, 4),
        text: "\\sum_{i=0}^n i^2 = \\frac{(n^2+n)(2n+1)}{6}",
    }).render();

    group.play([new Write({ cubicon: formula })]);

    group.makeup({ duration: 1000, CONFIG: { opacity: 0.5 } });

    group.sleep(1000);
}

sineVectorField();
