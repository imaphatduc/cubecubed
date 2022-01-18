import {
    Scene,
    Group,
    Vector2,
    COLOR,
    Grid,
    DrawGridFromScreenSides,
    ParamatricCurve,
    Trace,
    Line,
    MathText,
    Write,
} from "../src/index";

/// This variable keeps track of the time goes by during the animations
/// We'll use this to control time, so don't forget to include it to your code
/// In this example, the scene has only one group, so we don't need `elapsed`
let elapsed = 0;

function curveTracing() {
    const scene = new Scene("playground");
    const group = new Group("group", scene);

    const grid = new Grid({ group: group }).render();
    group.play([new DrawGridFromScreenSides(grid)]);

    const curve = new ParamatricCurve({
        group: group,
        tRange: [0, 10],
        functionDef: (t) => new Vector2(t * Math.cos(t), t * Math.sin(t)),
        CONFIG: {
            lineColor: COLOR.CYAN,
            lineWidth: 1.5,
        },
    }).render();

    const drawer = new Line({
        group: group,
        endPoint: curve.getFirstOutputPoint(),
        CONFIG: {
            lineColor: COLOR.PINK_1,
        },
    }).render();

    group.play([
        new Trace({
            cubicon: drawer,
            curve: curve,
            duration: 5000,
        }),
    ]);

    const tex = new MathText({
        group: group,
        position: new Vector2(8, 5),
        text: "f(t) = \\begin{bmatrix} t \\cos(t) \\\\ t \\sin(t) \\end{bmatrix}",
    }).render();

    group.play([new Write({ cubicon: tex })]);
}

curveTracing();
