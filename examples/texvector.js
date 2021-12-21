import {
    COLOR,
    Create,
    DrawGridFromOrigin,
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

    const grid = new Grid({ group: group });
    group.play([new DrawGridFromOrigin(grid)]);

    const vector = new Vector({
        group: group,
        endPoint: new Vector2(3, 2),
        vectColor: COLOR.TEAL_1,
    });

    group.play([new Create({ cubicon: vector })]);

    const formula = new MathText({
        group: group,
        position: new Vector2(-8, 4),
        text: "\\sum_{i=0}^n i^2 = \\frac{(n^2+n)(2n+1)}{6}",
        fontSize: 15,
    });

    const vectCoor = new MathText({
        group: group,
        position: vector.gEndPoint,
        text: `\\begin{bmatrix} ${vector.gEndPoint.y} \\\\ ${vector.gEndPoint.x} \\end{bmatrix}`,
        color: vector.vectColor,
        fontSize: 11,
    });

    group.play([
        new FadeIn({ cubicon: formula }),
        new FadeIn({ cubicon: vectCoor }),
    ]);
}

renderVector();
