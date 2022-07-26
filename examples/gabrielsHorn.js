import {
    CanvasGroup,
    DrawGridFromScreenSides,
    Grid,
    Group,
    MathTex,
    RevolutionSurface,
    Scene,
    SimulateRevolution,
    Vector2,
    Write,
} from "../src/index";

function scenery() {
    const scene = new Scene("three");

    (() => {
        const group = new Group("tex", scene);

        const grid = new Grid({ group: group }).render();

        const formula = new MathTex({
            group: group,
            position: new Vector2(5, 3),
            text: "y = \\frac{1}{x}",
            fontSize: 30,
        }).render();

        group.play([new DrawGridFromScreenSides(grid)]);

        group.play([new Write({ cubicon: formula, duration: 2000 })]);
    })();

    (() => {
        const group = new CanvasGroup("three-group", scene);

        const surface = new RevolutionSurface({
            group: group,
            functionDef: (x) => 1 / x,
            CONFIG: {
                xRange: [0.5, 5],
            },
        }).render();

        group.play([
            new SimulateRevolution({ cubicon: surface, duration: 2000 }),
        ]);
    })();
}

scenery();
