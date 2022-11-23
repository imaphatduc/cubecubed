import {
    CanvasGroup,
    DrawGrid,
    Grid,
    Group,
    MathTex,
    RevolutionSurface,
    Scene,
    SimulateRevolution,
    Vector2,
    Write,
} from "../src/index";

function gabrielsHorn() {
    const scene = new Scene("gabriels-horn-scene");

    (() => {
        const group = new Group("formula", scene);

        const grid = new Grid({ group: group }).render();

        const formula = new MathTex({
            group: group,
            position: new Vector2(5, 3),
            text: "y = \\frac{1}{x}",
            fontSize: 30,
        }).render();

        group.play([new DrawGrid({ cubicon: grid })]);

        group.play([new Write({ cubicon: formula, duration: 2000 })]);
    })();

    (() => {
        const group = new CanvasGroup("gabriels-horn", scene, {
            type: "3d",
            orbitControls: true,
        });

        const surface = new RevolutionSurface({
            group: group,
            functionDef: (x) => 1 / x,
            CONFIG: {
                xRange: [0.5, 5],
            },
        }).render();

        group.play(
            [new SimulateRevolution({ cubicon: surface, duration: 2000 })],
            false
        );
    })();
}

gabrielsHorn();
