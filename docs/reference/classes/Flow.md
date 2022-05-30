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
| `params.dt?` | `number` | Speed when changing the position of the stream line.  **`default`** 0.01 |
| `params.duration?` | `number` | Time to play this animation. (in milliseconds)  **`default`** 0 |
| `params.functionDef` | `VectorFunction` | The function to change the cubicon's position at each frame. |

#### Overrides

CanvasAnimation.constructor

#### Defined in

[src/canvas/animations/Flow.ts:40](https://github.com/imaphatduc/cubecubed/blob/1d9e38f/src/canvas/animations/Flow.ts#L40)

## Properties

### cubicon

• **cubicon**: `any`

The target cubicon of this animation.

#### Inherited from

CanvasAnimation.cubicon

#### Defined in

[src/canvas/animations/CanvasAnimation.ts:5](https://github.com/imaphatduc/cubecubed/blob/1d9e38f/src/canvas/animations/CanvasAnimation.ts#L5)

___

### duration

• **duration**: `number`

Time to play this animation (in milliseconds).

#### Inherited from

CanvasAnimation.duration

#### Defined in

[src/canvas/animations/CanvasAnimation.ts:10](https://github.com/imaphatduc/cubecubed/blob/1d9e38f/src/canvas/animations/CanvasAnimation.ts#L10)

___

### functionDef

• **functionDef**: `VectorFunction`

The function defining the position of the target
cubicon. This function should take a `Vector3()`
object as both input and output. The `Vector3()`
output object is the cubicon's position at next frame.

Example of a function defining particle flow in
a vector field:

```ts
const sineField = ({ x, y, z })
    => new Vector3(Math.sin(y), Math.sin(x), z);
}
```

#### Defined in

[src/canvas/animations/Flow.ts:38](https://github.com/imaphatduc/cubecubed/blob/1d9e38f/src/canvas/animations/Flow.ts#L38)

## Methods

### play

▸ **play**(): `void`

**`internal`**

#### Returns

`void`

#### Defined in

[src/canvas/animations/Flow.ts:87](https://github.com/imaphatduc/cubecubed/blob/1d9e38f/src/canvas/animations/Flow.ts#L87)
