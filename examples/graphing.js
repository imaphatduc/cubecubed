import {
    Axes,
    Group,
    Scene,
    COLOR,
    Create,
    PointAlongGraph,
    PointToCoords,
    DrawAxes,
    Write,
} from "../src/index";

function graphingFunctions() {
    const scene = new Scene("graphing-functions");
    const group = new Group("graphing-group", scene);

    const axes = new Axes({
        group: group,
        CONFIG: {
            xRange: [-4, 6],
            yRange: [-3, 3],
            hasNums: true,
        },
    }).render();
    group.play([new DrawAxes(axes)]);

    /// Plotting cosine graph
    const cos = axes.graph({
        functionDef: (x) => Math.cos(x),
        color: COLOR.CYAN,
    });
    const tex = axes.addGraphLabel(cos, "cos(x)");
    const pt = axes.pointToCoords(cos, 2);
    group.play([new Create({ cubicon: cos }), new Write({ cubicon: tex })]);
    group.play([
        new PointToCoords({
            point: pt,
            graph: cos,
        }),
    ]);
    group.play([
        new PointAlongGraph({
            point: pt,
            graph: cos,
            xPos: -3,
        }),
    ]);

    /// Plotting natural logarithm graph
    const ln = axes.graph({
        functionDef: (x) => Math.log(x),
        color: COLOR.GREEN_1,
    });

    group.play([new Create({ cubicon: ln })]);
    group.play([
        new PointAlongGraph({
            point: pt,
            graph: cos,
            xPos: 5,
        }),
    ]);

    /// Plotting cubic graph
    const cubic = axes.graph({
        functionDef: (x) => x * x * x + 2 * x * x,
        color: COLOR.RED_2,
    });
    group.play([new Create({ cubicon: cubic })]);
}

graphingFunctions();
