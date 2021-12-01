# Cubecubed

Cubecubed is built on top of [D3](https://github.com/d3/d3), a marvelous data visualization library, using its powerful SVG manipulation system, along with some [Manim](https://github.com/d3/d3)'s animation concepts.

## Inspiration

Cubecubed is deeply inspired by [3b1b/manim](https://github.com/3b1b/manim) - _an animation engine for explanatory math videos_, as described on its GitHub repo.

### Name Explanation

Imagine that a 3d cube multiply by itself two times— I don't know, I just find the name funny :)

## Installation

`npm i cubecubed --save`

## Usage

#### Requirements

-   The target HTML file must have a `<div id="#svg-render"></div>` tag.
-   An svg tag inside that `div`, including `width`, `height` and `background-color` attribute (`black` is recommended)

##### Example Scene

```js
import { Square, COLOR, initSVGScene, Grid } from "cubecubed";

initSVGScene(); // This is neccessary

const grid = new Grid();
grid.drawGridFromOrigin();

const square = new Square({
    position: { x: 0, y: 0 },
    sideLength: 2,
    fillColor: COLOR.PURPLE_1,
    strokeColor: COLOR.PINK,
    strokeWidth: 2,
    waitTime: 500,
});

square.create();
square.translateByVector({ x: 5, y: 1 });
square.rotate(45);
square.translateByVector({ x: -2, y: 3 });
square.rotate(-45);
square.fadeOut();
```

#### Result

![](cut.gif)

### Cubicons

`Cubicons` are nuclear objects of a scene, such as squares, circles. Don't misunderstand them with 3d cubes, which are things that cubecubed has not applied to its functionality.

## Contributing

Cubecubed is currently just a work in progress. Any contribution is appreciated.

## TODO

-   [ ] Use [KaTeX](https://github.com/KaTeX/KaTeX) for rendering math text
-   [ ] Vector visualization
-   [ ] Matrix transformation
-   [ ] Create 3d scene (a.k.a. projecting 3d scene into 2d SVG canvas)
