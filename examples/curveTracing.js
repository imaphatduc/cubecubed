import {
    Scene,
    Group,
    Vector2,
    COLOR,
    Create,
    Grid,
    DrawGridFromScreenSides,
    ParamatricCurve,
    Trace,
    Line,
} from "../src/index";

const scene = new Scene("playground");
const group = new Group("group", scene);

const grid = new Grid({ group: group }).render();
group.play([new DrawGridFromScreenSides(grid)]);

const curve = new ParamatricCurve({
    group: group,
    tRange: [-6, 6],
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
    new Create({ cubicon: drawer }),
    new Trace({
        cubicon: drawer,
        curve: curve,
        duration: 5000,
    }),
]);
