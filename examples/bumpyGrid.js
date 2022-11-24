import { ApplyFunction, Grid, Group, Scene, Vector2 } from "../src/index";

function bumpyGrid() {
    const scene = new Scene("bumpy-grid-scene");
    const group = new Group("bumpy-grid", scene);

    const grid = new Grid({ group }).render();

    group.play([
        new ApplyFunction({
            cubicon: grid,
            func: (v) => new Vector2(v.x + Math.sin(v.y), v.y + Math.sin(v.x)),
        }),
    ]);
}

bumpyGrid();
