import { CanvasGroup, Flow, Particle, Scene, Vector3 } from "../src/index";

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

    const particles = [...Array(1000)].map(() => {
        return new Particle({
            group,
            position: new Vector3(
                getRandomInRange(1, sigma),
                getRandomInRange(1, rho),
                getRandomInRange(1, beta)
            ),
            radius: 1,
            scaleFactor: 0.2,
            CONFIG: {
                fillColor: "#5e2eff",
            },
        }).render();
    });

    const flowAnimations = particles.map((particle) => {
        return new Flow({
            cubicon: particle,
            functionDef: lorenz,
        });
    });

    group.play(flowAnimations);
}

particles();
