import {
    CanvasGroup,
    Scene,
    Vector3,
    StreamLine,
    SimulateStream,
} from "../src/index";

/// This variable keeps track of the time goes by during the animations
/// We'll use this to control time, so don't forget to include it to your code
/// In this example, the scene has only one group, so we don't need `elapsed`
let elapsed = 0;

function lorenzAttractorSimulation() {
    const scene = new Scene("lorenz-attractor-simulation");
    const group = new CanvasGroup("lorenz-attractor", scene);

    const sigma = 14;
    const rho = 28;
    const beta = 8 / 3;

    const dt = 0.01;

    const getRandomInt = (min, max) => {
        min = Math.ceil(min);
        max = Math.floor(max);

        return Math.floor(Math.random() * (max - min) + min);
    };

    const lorenz = ({ x, y, z }) => {
        const dx = sigma * (y - x);
        const dy = x * (rho - z) - y;
        const dz = x * y - beta * z;

        x += dx * dt;
        y += dy * dt;
        z += dz * dt;

        return new Vector3(x, y, z);
    };

    const lorenzSystemParticles = [...Array(1000)].map(
        () =>
            new StreamLine({
                group,
                position: new Vector3(
                    getRandomInt(1, sigma),
                    getRandomInt(1, rho),
                    getRandomInt(1, beta)
                ),
                scaleFactor: 0.2,
                maxVertices: 10,
                functionDef: lorenz,
                CONFIG: {
                    strokeColor: "#5e2eff",
                    strokeWidth: 0.5,
                },
            })
    );

    const lorenzSystemAnims = lorenzSystemParticles.map((particle) => {
        return new SimulateStream({
            cubicon: particle,
        });
    });

    group.play(lorenzSystemAnims);
}

lorenzAttractorSimulation();
