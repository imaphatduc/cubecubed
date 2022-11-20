import {
    Scene,
    Group,
    Vector2,
    COLOR,
    Grid,
    DrawGrid,
    ParametricCurve,
    Trace,
    Line,
    MathTex,
    Write,
} from "../src/index";

function curveTracing() {
    const scene = new Scene("curve-tracing-scene");
    const group = new Group("curve-tracing", scene);

    const grid = new Grid({ group: group }).render();

    group.play([new DrawGrid({ cubicon: grid })]);

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
        endPoint: curve.firstOutputPoint,
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

    const tex = new MathTex({
        group: group,
        position: new Vector2(8, 5),
        text: "f(t) = \\begin{bmatrix} t \\cos(t) \\\\ t \\sin(t) \\end{bmatrix}",
    }).render();

    group.play([new Write({ cubicon: tex })]);
}

curveTracing();
