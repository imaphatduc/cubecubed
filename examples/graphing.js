import {
    Axes,
    Group,
    Scene,
    COLOR,
    CreatePlaneShape,
    PointAlongGraph,
    PointToCoords,
    DrawAxes,
    Write,
} from "../src/index";

function graphing() {
    const scene = new Scene("graphing-scene");
    const group = new Group("graphing", scene);

    const axes = new Axes({
        group: group,
        CONFIG: {
            xRange: [-4, 6],
            yRange: [-3, 3],
            hasNums: true,
        },
    }).render();

    group.play([new DrawAxes({ cubicon: axes })]);

    const cos = axes.plot({
        functionDef: (x) => Math.cos(x),
        color: COLOR.CYAN,
    });

    const tex = axes.addGraphLabel({ graph: cos, text: "cos(x)", xPos: 7 });

    const pt = axes.pointToCoords({ graph: cos, xPos: 2 });

    group.play([
        new CreatePlaneShape({ cubicon: cos }),
        new Write({ cubicon: tex }),
    ]);

    group.play([
        new PointToCoords({
            cubicon: pt.point,
            horizontalProjector: pt.projectors[0],
            verticalProjector: pt.projectors[1],
        }),
    ]);

    group.play([
        new PointAlongGraph({
            cubicon: pt.point,
            horizontalProjector: pt.projectors[0],
            verticalProjector: pt.projectors[1],
            graph: cos,
            xPos: -3,
        }),
    ]);

    const ln = axes.plot({
        functionDef: (x) => Math.log(x),
        color: COLOR.GREEN_1,
    });

    group.play([new CreatePlaneShape({ cubicon: ln })]);

    group.play([
        new PointAlongGraph({
            cubicon: pt.point,
            horizontalProjector: pt.projectors[0],
            verticalProjector: pt.projectors[1],
            graph: cos,
            xPos: 5,
        }),
    ]);

    const cubic = axes.plot({
        functionDef: (x) => x * x * x + 2 * x * x,
        color: COLOR.RED_2,
    });

    group.play([new CreatePlaneShape({ cubicon: cubic })]);
}

graphing();
