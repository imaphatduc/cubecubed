import { Scene, Group, Rectangle, CreatePlaneShape } from "../src/index";

const scene = new Scene("starter");

const group = new Group("starter-group", scene);

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
