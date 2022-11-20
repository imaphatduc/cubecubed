import { CanvasGroup, Flow, Particle, Scene, Vector3 } from "../src/index";

const str2params = (str) => {
    const mapper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    const params = [];

    const step = 0.1;

    str.split("").forEach((c, i) => {
        const index = mapper.indexOf(c.toUpperCase());

        const param = (index - 12) * step;

        params[i] = param;
    });

    return params;
};

const chaos = ({ x, y }, t) => {
    const params = str2params("GIIETPIQRRUL");

    const xx = x * x;
    const xy = x * y;
    const yy = y * y;

    // prettier-ignore
    const nx = params[0] * t + params[1] * x * t + params[2] * xx + params[3] * xy + params[4] * y * t + params[5] * yy;
    // prettier-ignore
    const ny = params[6] * t + params[7] * x * t + params[8] * xx + params[9] * xy + params[10] * y * t + params[11] * yy;
    const nz = 0;

    return new Vector3(nx, ny, nz);
};

function chaoticParticles() {
    const scene = new Scene("chaotic-particles-scene");
    const group = new CanvasGroup("chaotic-particles", scene);

    const t0 = 1;

    let position = new Vector3(0.01, 0.01, 0.01);

    const particles = [...Array(2000)].map(() => {
        const particle = new Particle({
            group,
            position,
            radius: 0.5,
            scaleFactor: 6,
        }).render();

        position = chaos(position, t0);

        return particle;
    });

    const flowAnimations = particles.map((particle) => {
        return new Flow({
            cubicon: particle,
            functionDef: chaos,
            tRange: [t0, 2],
            dt: 0.00001,
        });
    });

    group.play(flowAnimations);
}

chaoticParticles();
