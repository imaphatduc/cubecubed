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

const chaos = ({ x, y }) => {
    const params = str2params("GIIETPIQRRUL");

    const xx = x * x;
    const xy = x * y;
    const yy = y * y;

    // prettier-ignore
    const nx = params[0] + params[1] * x + params[2] * xx + params[3] * xy + params[4] * y + params[5] * yy;
    // prettier-ignore
    const ny = params[6] + params[7] * x + params[8] * xx + params[9] * xy + params[10] * y + params[11] * yy;
    const nz = 0;

    return new Vector3(nx, ny, nz);
};

function particles() {
    const scene = new Scene("particles-scene");
    const group = new CanvasGroup("particles-group", scene);

    const particles = [...Array(1000)].map(() => {
        return new Particle({
            group,
            position: new Vector3(
                Math.random() * 2,
                Math.random() * 2,
                Math.random() * 2
            ),
            radius: 1,
            scaleFactor: 8,
        }).render();
    });

    const flowAnimations = particles.map((particle) => {
        return new Flow({
            cubicon: particle,
            functionDef: chaos,
        });
    });

    group.play(flowAnimations);
}

particles();
