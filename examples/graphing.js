import {
    initAnimScene,
    Axes,
    Group,
    Scene,
    COLOR,
    MathText,
    Vector2,
    FadeIn,
    Grid,
    DrawGridFromOrigin,
} from "../src/index";

/// Optional.
/// If this line doesn't exist in your code,
// make sure to add "transform="scale(1, -1)"" to svg#viz to flip the y axis
initAnimScene();

/// This variable keeps track of the time goes by during the animations
/// We'll use this to control time, so don't forget to include it to your code
/// In this example, the scene has only one group, so we don't need `elapsed`
let elapsed = 0;

function graphingFunctions() {
    const scene = new Scene("graphing-functions");
    const gr = new Group("graphing-group", scene);

    // const grid = new Grid({ group: gr });
    // gr.play([new DrawGridFromOrigin(grid)]);

    const a = new Axes({
        group: gr,
        xRange: [-4, 4],
        yRange: [-3, 3],
    });

    /// Plotting cosine graph
    const cos = a.graph({
        func: (x) => Math.cos(x),
        color: COLOR.CYAN,
    });
    a.addGraphLabel(cos, "cos(x)");
    a.create([cos]);

    /// Plotting natural logarithm graph
    const ln = a.graph({
        func: (x) => Math.log(x),
        color: COLOR.GREEN_1,
    });
    a.addGraphLabel(ln, "ln(x)");
    a.create([ln]);

    /// Plotting cubic graph
    const cubic = a.graph({
        func: (x) => x * x * x + 2 * x * x,
        color: COLOR.RED_2,
        createDuration: 2000,
    });
    a.addGraphLabel(cubic, "x^3 + 2x^2", 1);
    a.create([cubic]);
}

graphingFunctions();
