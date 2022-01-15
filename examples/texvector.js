import {
    COLOR,
    Create,
    Write,
    DrawGridFromScreenSides,
    FadeIn,
    Grid,
    Group,
    MathText,
    Scene,
    Vector,
    Vector2,
} from "../src/index";

/// This variable keeps track of the time goes by during the animations
/// We'll use this to control time, so don't forget to include it to your code
/// In this example, the scene has only one group, so we don't need `elapsed`
let elapsed = 0;

function renderVector() {
    const scene = new Scene("tex-vector");

    const group = new Group("tex", scene);

    const grid = new Grid({ group: group }).render();
    group.play([new DrawGridFromScreenSides(grid)]);

    const vector = new Vector({
        group: group,
        endPoint: new Vector2(3, 2),
        CONFIG: {
            lineColor: COLOR.TEAL_1,
        },
    }).render();

    group.play([new Create({ cubicon: vector })]);

    const formula = new MathText({
        group: group,
        position: new Vector2(-8, 4),
        text: "\\sum_{i=0}^n i^2 = \\frac{(n^2+n)(2n+1)}{6}",
    }).render();

    const vectCoor = new MathText({
        group: group,
        position: vector.endPoint,
        text: `\\begin{bmatrix} ${vector.endPoint.y} \\\\ ${vector.endPoint.x} \\end{bmatrix}`,
        color: vector.lineColor,
    }).render();

    group.play([
        new Write({ cubicon: formula }),
        new FadeIn({ cubicon: vectCoor }),
    ]);
}

renderVector();
