import { Scene, Group, Rectangle, CreateShape, Recorder } from "../src/index";

function starter() {
    const scene = new Scene("starter-scene");

    const recipe = () => {
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

        scene.play([
            new CreateShape({
                cubicon: rectangle,
            }),
        ]);
    };

    const recorder = new Recorder(scene, recipe);

    recorder.start();
}

starter();
