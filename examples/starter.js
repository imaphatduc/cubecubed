import {
    Scene,
    Group,
    Rectangle,
    CreatePlaneShape,
    Recorder,
} from "../src/index";

function starter() {
    const scene = new Scene("starter-scene");
    const group = new Group("starter", scene);

    const rectangle = new Rectangle({
        group: group,
        width: 3,
        height: 2,
        CONFIG: {
            fillColor: "#fff",
            strokeColor: "#ffc777",
        },
    });

    group.render([rectangle]);

    group.play([
        new CreatePlaneShape({
            cubicon: rectangle,
        }),
    ]);

    return scene.sceneElapsed;
}

const recorder = new Recorder(starter);

recorder.start();
