<!-- # Cubecubed - A Math Visualization Engine -->

# Quick Start

## 💡 Initialize Project

Run either

```sh
npx cubecubed
```

or

```sh
npx ccw # `ccw` stands for "create Cubecubed workspace".
```

After running the above command, you need to follow the prompt instructions.

When the initialization process is complete, you should see a sample Cubecubed project with the following directory structure:

```
├── favicon.svg
├── index.html
├── style.css
├── example.js
```

If you choose `Y (yes)` for the `vite` installation prompt, you just need to run `npm run dev` to preview the example scene. If not, you can use the development server of your choice.

Next will be the tutorial to how scenes in a Cubecubed project is set. But before jumping right in, we need to understand some terms first.

### Cubicons

`Cubicon`s can be any math-related objects, such as geometry shapes (squares and circles) or math formulas. Don't misunderstand them with 3d cubes, which are things that Cubecubed has not applied to its functionality.

### Scenes and Groups

View `Scene`s and `Group`s like so: an animation video is made up of scenes, each scene includes different groups. It is recommended to have only one scene in a single file.

To make it easier to understand, consider this example: you solved some math problems, and you want to make a video to explain all your solutions to others. In the first `scene`, you proved "square root of 2 is irrational", `scene` two is the solution of a logarithm equation, and so on.
In `scene` one, there are two groups: `group` problem (prove square root of 2 is irrational) and `group` solution (steps to solve it), one stands separately to the other.

There are two things to keep in mind:

-   A cubicon must be in a group, and a group must belong to a scene.

-   Groups in the same scene animate synchronously, which means one after another.

Now we are ready to move on to the fun part.

## 🚀 Setting Scenes

### 1. Import `Scene` and `Group` objects from cubecubed:

```js
import { Scene, Group } from "cubecubed";
```

### 2. Implement Cubecubed engine

By convention, scenes should be placed in first-class functions for easier management:

```js
function simpleScene() {}
```

Codes in the following steps are in `simpleScene` function.

### 3. Create a scene

```js
const scene = new Scene("simple-scene");
```

### 4. Create a group

Attach that group to the initialized `scene`:

```js
const group = new Group("squares", scene);
```

### 5. Create cubicon objects in `group`:

As mentioned before, each cubicon must be in a group. When initializing a cubicon, you need to call `render()` method in order to render it on the screen.

```js
const square1 = new Square({
    group: group,
    sideLength: 2,
    CONFIG: {
        strokeColor: COLOR.PINK_1,
    },
}).render();

const square2 = new Square({
    group: group,
    sideLength: 2,
    CONFIG: {
        strokeColor: COLOR.PINK_1,
    },
}).render();
```

### 6. Animate the cubicons!

Whenever you want to play an animation, you need to call `play()` method on the `group` object. This method takes an array (known as a `queue`) as the animations to play. All the animations in the queue will be played asynchronously (in parallel), while the queues themselves are played sequentially.

```js
group.play([new Create({ cubicon: square1 })]);

group.play([
    new Create({ cubicon: square2 }),
    new Rotate({ cubicon: square1, degree: 45 }),
]);
```

In the above code, the first queue including a `Create` animation finished before the second queue (`Create` and `Rotate` animations) is played.

### 7. Did we forget something?

Yes, we have not call the `simpleScene()` function...

```js
simpleScene();
```

...and the imports! Replace the import lines at the top with the following:

```js
import {
    COLOR,
    Scene,
    Group,
    Square,
    Create,
    Rotate,
} from "cubecubed";
```

## All code

```js
import {
    COLOR,
    Scene,
    Group,
    Square,
    Create,
    Rotate,
} from "cubecubed";

function simpleScene() {
    const scene = new Scene("simple-scene");

    const group = new Group("squares", scene);

    const square1 = new Square({
        group: group,
        sideLength: 2,
        CONFIG: {
            strokeColor: COLOR.PINK_1,
        },
    }).render();

    const square2 = new Square({
        group: group,
        sideLength: 2,
        CONFIG: {
            strokeColor: COLOR.PINK_1,
        },
    }).render();

    group.play([new Create({ cubicon: square1 })]);

    group.play([
        new Create({ cubicon: square2 }),
        new Rotate({ cubicon: square1, degree: 45 }),
    ]);
}

simpleScene();
```

## 🍿 Result

If you followed the above steps, you should see the scene in action.

![](./assets/videos/simpleScene.mp4 ":include :type=video controls width=100% autoplay loop")

## Video exports!

Now you have a dynamic scene playing directly on the browser, but if you want to export it to a video file, what can you do? Well, you just need to create a `Recorder` object like so (but remember to remove the `simpleScene()` function call we have before):

```js
import { Recorder } from "cubecubed"

const recorder = new Recorder(simpleScene);
```

Then, call `start()` method on the recorder object to start recording.

```js
recorder.start();
```

Now, you can follow the browser instructions intuitively and it will automatically download the video file.

See [here](https://github.com/imaphatduc/cubecubed/blob/master/init/example.js) for an extended version of this example.
