<!-- # Cubecubed - A Math Visualization Engine -->

# Quick Start

## Installation

```sh
npm i cubecubed --save
```
## Initialize Project

```sh
npx ccw
```

## Setting Scenes

To set a scene in Cubecubed, we need to understand some terms first.

### Cubicons

`Cubicons` are nuclear objects of a scene, such as squares and circles. Don't misunderstand them with 3d cubes, which are things that cubecubed has not applied to its functionality.

### Scenes and Groups

View `Scenes` and `Groups` like so: an animation video is made up of scenes, each scene includes different groups.

To make it easier to understand, consider this example: you solved some math problems, and you want to make a video to explain all your solutions to others. In `scene`#1, you proved "square root of 2 is irrational", `scene`#2 is the solution of a logarithm equation, and so on. In scene#1, there are two groups: `group` problem ("prove square root of 2 is irrational") and `group` solution (steps to solve it), each stands separately to the other.

There are two things to keep in mind:

-   A cubicon must be in a group, and a group must belong to a scene.
-   Groups in the same scene animate asynchronously.

### The Animation Engine

Below are the steps to set an animation scene:

#### 1. Import animation type and initialize the main scene (svg#viz):

```js
import {
    Scene,
    Group,
    Square,
    Circle,
    Vector2,
    COLOR,
    Create,
    Translate,
    Rotate,
} from "cubecubed";
```

#### 2. By convention, each scene should be placed in a function for easier management:

```js
function simpleScene() {}
```

Codes in the following steps are in simpleScene().

#### 3. Create a scene (this scene will be the child of svg#viz):

```js
const scene = new Scene("simple-scene");
```

#### 4. Create a group and append that group to a scene:

```js
const group = new Group("shapes", scene);
```

#### 5. Create cubicon(s) in group:

```js
/// Remember to initialize each cubicon with a group
/// Cubicons append to the <svg id="viz"></svg> by default.
const square = new Square({
    group: group,
    sideLength: 2,
});

const circle = new Circle({
    group: group,
    position: new Vector2(1, 3),
    radius: 1,
    fillColor: COLOR.PURPLE_1,
    fillOpacity: 0.5,
    strokeColor: COLOR.PINK_1,
    strokeWidth: 2,
});
```

#### 6. Animate the cubicon(s)!

```js
/// group.play() method takes an array as the animation queue.
/// The target cubicons will be animated concurrently.
group.play([new Create(square), new Create(circle)]);

/// Note that when a cubicon appears multiple times in the same queue,
// its animations will be applied synchronously.
scene.play([new Translate(square), new Rotate(square, 45)]);
```

### Example Scene

```js
import {
    COLOR,
    Create,
    DrawGridFromOrigin,
    Grid,
    Group,
    Rotate,
    Scene,
    Square,
    Vector,
    Vector2,
} from "cubecubed";

/// This variable keeps track of the time goes by during the animations
/// We'll use this to control time, so don't forget to include it to your code
let elapsed = 0;

/// By convention, each function implements the animations in each scene...
function drawShapes() {
    const scene = new Scene("draw-shapes");

    /// ...And groups should be inside functions
    function squares() {
        const squares = new Group("squares", scene);

        const square1 = new Square({
            group: squares,
            sideLength: 2,
            strokeColor: COLOR.PINK_1,
        });

        squares.play([new Create({ cubicon: square1 })]);

        const square2 = new Square({
            group: squares,
            sideLength: 2,
            strokeColor: COLOR.PINK_1,
        });

        squares.play([
            new Create({ cubicon: square2 }),
            new Rotate({ cubicon: square1, degree: 45 }),
        ]);

        /// Set elapsed
        elapsed = squares.groupElapsed;
    }

    function vectors() {
        const vectors = new Group("vectors", scene);

        const vector = new Vector({
            group: vectors,
            endPoint: new Vector2(2, 3),
            vectColor: COLOR.TEAL_1,
        });

        /// wait for the previous group's animations to complete, then start this group's ones
        vectors.sleep(elapsed);

        vectors.play([new Create({ cubicon: vector })]);

        elapsed = vectors.groupElapsed;
    }

    squares();
    vectors();
}

function animatePlaneGrid() {
    const scene = new Scene("animate-plane-grid");

    const planeGridGroup = new Group("plane-grid-group", scene);

    const grid = new Grid({ group: planeGridGroup, hasNums: true });

    planeGridGroup.sleep(elapsed - 2000);
    planeGridGroup.play([new DrawGridFromOrigin(grid)]);

    elapsed = planeGridGroup.groupElapsed;
}

drawShapes();
animatePlaneGrid();
```

#### Result

![](./_media/videos/output.mp4 ':include :type=video controls width=100% autoplay loop')
