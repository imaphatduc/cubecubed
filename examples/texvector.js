import {
    COLOR,
    CreateVectorShape,
    Write,
    DrawGrid,
    FadeIn,
    Grid,
    Group,
    MathTex,
    Scene,
    VectorShape,
    Vector2,
} from "../src/index";

function renderVector() {
    const scene = new Scene("tex-vector");

    const group = new Group("tex", scene);

    const grid = new Grid({ group: group }).render();

    group.play([new DrawGrid({ cubicon: grid })]);

    const vector = new VectorShape({
        group: group,
        endPoint: new Vector2(3, 2),
        CONFIG: {
            lineColor: COLOR.TEAL_1,
        },
    }).render();

    group.play([new CreateVectorShape({ cubicon: vector })]);

    const formula = new MathTex({
        group: group,
        position: new Vector2(-8, 4),
        text: "\\sum_{i=0}^n i^2 = \\frac{(n^2+n)(2n+1)}{6}",
    }).render();

    const vectCoor = new MathTex({
        group: group,
        position: vector.endPoint,
        text: `\\begin{bmatrix} ${vector.endPoint.y} \\\\ ${vector.endPoint.x} \\end{bmatrix}`,
        CONFIG: {
            color: vector.CONFIG.lineColor,
        },
    }).render();

    group.play([
        new Write({ cubicon: formula }),
        new FadeIn({ cubicon: vectCoor }),
    ]);
}

renderVector();
