[cubecubed](/reference/README.md) / [Exports](/reference/modules.md) / Flow

# Class: Flow

Move a cubicon based on the specified function to
create an invisible flow. The instance of the last
animation frame's cubicon will be removed from the
scene.

All images of the cubicon will be separated (not
continuous). If you want to simulate the continuous
flow, use `SimulateStream()` instead.

## Hierarchy

- `CanvasAnimation`

  ↳ **`Flow`**

## Constructors

### constructor

• **new Flow**(`params`)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | `Object` | - |
| `params.cubicon` | [`Particle`](/reference/classes/Particle.md) | The target cubicon to play this animation. |
| `params.duration?` | `number` | Time to play this animation. (in milliseconds)  **`default`** 0 |
| `params.functionDef` | `TransformationFunction` | The function to change the cubicon's position at each frame. |

#### Overrides

CanvasAnimation.constructor

#### Defined in

[src/canvas/animations/Flow.ts:49](https://github.com/imaphatduc/cubecubed/blob/db7d6e8/src/canvas/animations/Flow.ts#L49)

## Properties

### cubicon

• **cubicon**: `any`

The target cubicon of this animation.

#### Inherited from

CanvasAnimation.cubicon

#### Defined in

[src/canvas/animations/CanvasAnimation.ts:5](https://github.com/imaphatduc/cubecubed/blob/db7d6e8/src/canvas/animations/CanvasAnimation.ts#L5)

___

### duration

• **duration**: `number`

Time to play this animation (in milliseconds).

#### Inherited from

CanvasAnimation.duration

#### Defined in

[src/canvas/animations/CanvasAnimation.ts:10](https://github.com/imaphatduc/cubecubed/blob/db7d6e8/src/canvas/animations/CanvasAnimation.ts#L10)

___

### functionDef

• **functionDef**: `TransformationFunction`

The function defining the position of the target
cubicon. This function should take a `Vector3()`
object as both input and output. The `Vector3()`
output object is the cubicon's position at next frame.

Example of a function defining particle flow in
a vector field:

```ts
// Specific delta time
const dt = 0.01;

const sineField = ({ x, y, z }: Vector3) => {
    const dx = Math.sin(y);
    const dy = Math.sin(x);

    x += dx * dt;
    y += dy * dt;

    return new Vector3(x, y, z);
}
```

#### Defined in

[src/canvas/animations/Flow.ts:47](https://github.com/imaphatduc/cubecubed/blob/db7d6e8/src/canvas/animations/Flow.ts#L47)

## Methods

### play

▸ **play**(): `void`

**`internal`**

#### Returns

`void`

#### Defined in

[src/canvas/animations/Flow.ts:76](https://github.com/imaphatduc/cubecubed/blob/db7d6e8/src/canvas/animations/Flow.ts#L76)
