import {
    Axes,
    Group,
    Grid,
    DrawGridFromOrigin,
    Scene,
    COLOR,
    Create,
    FadeIn,
    PtAlongGraph,
    PtToCoords,
    DrawAxes,
} from "../src/index";

/// This variable keeps track of the time goes by during the animations
/// We'll use this to control time, so don't forget to include it to your code
/// In this example, the scene has only one group, so we don't need `elapsed`
let elapsed = 0;

function graphingFunctions() {
    const scene = new Scene("graphing-functions");
    const gr = new Group("graphing-group", scene, "Graphing");

    // const grid = new Grid({ group: gr });
    // gr.play([new DrawGridFromOrigin(grid)]);

    const a = new Axes({
        group: gr,
        xRange: [-4, 6],
        yRange: [-3, 3],
    });
    gr.play([new DrawAxes(a)]);

    /// Plotting cosine graph
    const cos = a.graph({
        func: (x) => Math.cos(x),
        color: COLOR.CYAN,
    });
    const cosTex = a.addGraphLabel(cos, "cos(x)");
    const pt = a.pointToCoords(cos, 2);
    gr.play([new Create({ cubicon: cos }), new FadeIn({ cubicon: cosTex })]);
    gr.play([
        new PtToCoords({
            point: pt,
            graph: cos,
        }),
    ]);
    gr.play([
        new PtAlongGraph({
            point: pt,
            graph: cos,
            xPos: -3,
        }),
    ]);

    /// Plotting natural logarithm graph
    const ln = a.graph({
        func: (x) => Math.log(x),
        color: COLOR.GREEN_1,
    });
    const lnTex = a.addGraphLabel(ln, "ln(x)");
    gr.play([new Create({ cubicon: ln }), new FadeIn({ cubicon: lnTex })]);
    gr.play([
        new PtAlongGraph({
            point: pt,
            graph: cos,
            xPos: 5,
        }),
    ]);

    /// Plotting cubic graph
    const cubic = a.graph({
        func: (x) => x * x * x + 2 * x * x,
        color: COLOR.RED_2,
        createDuration: 2000,
        xRange: [-2, 1],
    });
    const cubicTex = a.addGraphLabel(cubic, "x^3 + 2x^2");
    gr.play([
        new Create({ cubicon: cubic }),
        new FadeIn({ cubicon: cubicTex }),
    ]);
}

graphingFunctions();
