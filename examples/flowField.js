import {
    CanvasGroup,
    Scene,
    SimulateStream,
    StreamLine,
    Vector3,
} from "../src/index";

const getRandomInRange = (min, max) => {
    return Math.random() * (max - min) + min;
};

const sigma = 14;
const rho = 28;
const beta = 8 / 3;

const lorenz = ({ x, y, z }) => {
    const dx = sigma * (y - x);
    const dy = x * (rho - z) - y;
    const dz = x * y - beta * z;

    return new Vector3(dx, dy, dz);
};

function particles() {
    const scene = new Scene("particles-scene");
    const group = new CanvasGroup("particles-group", scene);

    const streamLines = [...Array(1000)].map(() => {
        return new StreamLine({
            group,
            position: new Vector3(
                getRandomInRange(1, sigma),
                getRandomInRange(1, rho),
                getRandomInRange(1, beta)
            ),
            functionDef: lorenz,
            maxVertices: 5,
            scaleFactor: 0.2,
            CONFIG: {
                strokeColor: "#5e2eff",
                strokeWidth: 0.05,
            },
        }).render();
    });

    const streamAnimations = streamLines.map((line) => {
        return new SimulateStream({
            cubicon: line,
        });
    });

    group.play(streamAnimations);
}

particles();
