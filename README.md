<!-- # Cubecubed - A Math Visualization Engine -->

<p align="center">
  <img
    width="500"
    src="./graphics/svg/cubed-horizontal.svg"
    align="center" hspace="12"
    alt="Cubecubed - A Math Visualization Engine"
  />
  <h1 align="center">Cubecubed - A Math Visualization Engine</h1>
  <p align="center">
   <a href="https://www.npmjs.com/package/cubecubed">
        <img src="https://img.shields.io/npm/v/cubecubed?style=flat-square&logo=npm" />
   </a>
  </p>

</p>

### Name Explanation

Imagine that a 3d cube multiply by itself two times— That's it!

## Installation

```sh
npm i cubecubed --save
```

## Usage

#### Requirement

The target HTML structure must have this element:

```html
<div id="svg-render">
    <svg xmlns="http://w3.org/2000/svg" id="viz"></svg>
</div>
```

-   **A note about KaTeX**: Make sure that you include the proper katex.min.css (one easy way is to pull the script from a CDN service), otherwise KaTeX will render texts two times onto the animation screen (See the sample index.html for more information).

### Cubicons

`Cubicons` are nuclear objects of a scene, such as squares and circles. Don't misunderstand them with 3d cubes, which are things that cubecubed has not applied to its functionality.

### The Animation Engine

Below are the steps to set an animation scene:

1. Import animation type and initialize the main scene (svg#viz):

```js
import { Scene, Create, Translate, Rotate, FadeIn, FadeOut } from "cubecubed";

initAnimScene();
```

2. Create a scene (this scene will be the child of svg#viz):

```js
const scene = new Scene("name-of-the-scene");
```

3. Create cubicon(s):

```js
/// Remember to initialize each cubicon with a scene, in order to append it to a child svg tag.
/// Cubicons append to the <svg id="viz"></svg> by default.
const square = new Square({
    scene: scene,
    position: { x: 0, y: 0 },
    sideLength: 2,
    fillOpacity: 0.5,
    strokeColor: COLOR.PINK_1,
    strokeWidth: 2,
});

const circle = new Circle({
    scene: scene,
    position: { x: 1, y: 3 },
    radius: 1,
    fillColor: COLOR.PURPLE_1,
    fillOpacity: 0.5,
    strokeColor: COLOR.PINK_1,
    strokeWidth: 2,
});
```

4. Animate the cubicon(s)!

```js
/// scene.play() method takes an array as the animation queue.
/// The target cubicons will be animated concurrently.
scene.play([new Create(square), new Create(circle)]);

/// Note that when a cubicon appears multiple times in the same queue,
// its animations will be applied synchronously.
scene.play([new Translate(square), new Rotate(square, 45)]);
```

#### Example Scene

```js
import {
    initAnimScene,
    Scene,
    Grid,
    Square,
    Circle,
    Line,
    Vector,
    COLOR,
    Vector3,
    Create,
    Translate,
    Rotate,
    DrawGridFromOrigin,
    FadeOut,
    FadeIn,
} from "cubecubed";

// This is required!
initAnimScene();

const scene = new Scene("start");
const grid = new Grid({
    scene: scene,
    hasNums: true,
});

scene.play([new DrawGridFromOrigin(grid)]);

const square = new Square({
    scene: scene,
    position: { x: 0, y: 0 },
    sideLength: 2,
    fillOpacity: 0.5,
    strokeColor: COLOR.PINK_1,
    strokeWidth: 2,
});

scene.play([new Create(square)]);

const circle = new Circle({
    scene: scene,
    position: { x: 1, y: 3 },
    radius: 1,
    fillColor: COLOR.PURPLE_1,
    fillOpacity: 0.5,
    strokeColor: COLOR.PINK_1,
    strokeWidth: 2,
});

scene.play([
    new Translate(square, new Vector3(1, 2, 0)),
    new Rotate(square, 45),
]);

scene.play([new FadeIn(circle)]);

scene.play([
    new Translate(circle, new Vector3(1, 2, 0)),
    new Translate(square, new Vector3(1, 2, 0)),
    new Translate(circle, new Vector3(1, -3, 0)),
]);

scene.play([new FadeOut(square)]);
scene.play([new FadeOut(circle)]);

const vect = new Vector({
    scene: scene,
    startPoint: { x: 0, y: 0 },
    endPoint: { x: 3, y: 2 },
    vectColor: COLOR.TEAL_1,
    vectStrokeWidth: 2,
});

scene.play([new Create(vect), new Rotate(vect, -90)]);
scene.play([new Translate(vect, new Vector3(1, 3, 0)), new Rotate(vect, -90)]);

const line = new Line({
    scene: scene,
    startPoint: { x: 0, y: 0 },
    endPoint: { x: 3, y: 2 },
    lineColor: COLOR.PINK_2,
    lineWidth: 2,
});

scene.play([new Create(line)]);

scene.play([new Rotate(line, 90), new Rotate(vect, 90)]);
```

#### Result

![](./media/output.gif)

## Credits

Cubecubed is built on top of [D3](https://github.com/d3/d3), a marvelous data visualization library, using its powerful SVG manipulation system, along with some [Manim](https://github.com/d3/d3)'s animation concepts.

## Inspiration

Cubecubed is deeply inspired by [3b1b/manim](https://github.com/3b1b/manim) - _an animation engine for explanatory math videos_, as described on its GitHub repo.

## Contributing

Cubecubed is currently just a work in progress. Any contribution is appreciated.

## TODO

-   [ ] Input & error handling.
-   [x] Use [KaTeX](https://github.com/KaTeX/KaTeX) for rendering math text.
-   [ ] Implement sleep medthod (apply sleep times between animations).
-   [ ] Make a Docs API and Getting Started page.
-   [x] Vector visualization.
-   [ ] Matrix transformation.
-   [ ] Create 3d scene (a.k.a. projecting 3d scene into 2d SVG canvas).
-   [ ] A way to let the users customize (override) animation time constants.
