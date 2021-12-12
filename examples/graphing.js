import {
    initAnimScene,
    Axes,
    Group,
    Scene,
    COLOR,
    MathText,
    Vector2,
    FadeIn,
} from "../src/index";

initAnimScene();

const scene = new Scene("graphing");
const gr = new Group("graphing-group", scene);
const a = new Axes({
    group: gr,
    xRange: [-4, 4],
    yRange: [-3, 3],
    hasNums: true,
});

/// Plotting cosine graph
const cos = a.graph({
    func: (x) => Math.cos(x),
    color: COLOR.CYAN,
});
const cosTex = new MathText({
    group: gr,
    position: new Vector2(6.5, -1),
    text: "f(x) = cos(x)",
});
a.create([cos]);
gr.play([new FadeIn({ cubicon: cosTex })]);

/// Plotting natural logarithm graph
const ln = a.graph({
    func: (x) => Math.log(x),
    color: COLOR.GREEN_1,
});
const lnTex = new MathText({
    group: gr,
    position: new Vector2(6, 3),
    text: "f(x) = ln(x)",
});
a.create([ln]);
gr.play([new FadeIn({ cubicon: lnTex })]);

/// Plotting cubic graph
const cubic = a.graph({
    func: (x) => x * x * x + 2 * x * x,
    color: COLOR.RED_2,
    createDuration: 2000,
});
const cubicTex = new MathText({
    group: gr,
    position: new Vector2(2, 5.5),
    text: "f(x) = x^3 + 2x^2",
});
a.create([cubic]);
gr.play([new FadeIn({ cubicon: cubicTex })]);
