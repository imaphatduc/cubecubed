import {
    Scene,
    Group,
    Vector2,
    COLOR,
    Grid,
    DrawGridFromScreenSides,
    ParametricCurve,
    Trace,
    Line,
    MathText,
    Write,
} from "../src/index";

function curveTracing() {
    const scene = new Scene("playground");
    const group = new Group("group", scene);

    const grid = new Grid({ group: group }).render();
    group.play([new DrawGridFromScreenSides(grid)]);

    const curve = new ParametricCurve({
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
