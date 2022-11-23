[cubecubed](/reference/README.md) / [Exports](/reference/modules.md) / Flow

# Class: Flow

Move a particle based on the specified function to
create an invisible flow. The instance of the last
animation frame's cubicon will be removed from the
scene.

All images of the cubicon will be separated (not
continuous). If you want to simulate the continuous
flow, use `SimulateStream()` instead.

## Hierarchy

- [`CanvasAnimation`](/reference/classes/CanvasAnimation.md)

  ↳ **`Flow`**

## Constructors

### constructor

• **new Flow**(`params`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`FlowParams`](/reference/interfaces/FlowParams.md) |

#### Overrides

[CanvasAnimation](/reference/classes/CanvasAnimation.md).[constructor](/reference/classes/CanvasAnimation.md#constructor)

#### Defined in

[src/canvas/animations/Flow.ts:65](https://github.com/imaphatduc/cubecubed/blob/f64863c/src/canvas/animations/Flow.ts#L65)

## Properties

### cubicon

• **cubicon**: [`Particle`](/reference/classes/Particle.md)

#### Overrides

[CanvasAnimation](/reference/classes/CanvasAnimation.md).[cubicon](/reference/classes/CanvasAnimation.md#cubicon)

#### Defined in

[src/canvas/animations/Flow.ts:39](https://github.com/imaphatduc/cubecubed/blob/f64863c/src/canvas/animations/Flow.ts#L39)

___

### dt

• `Optional` **dt**: `number`

#### Defined in

[src/canvas/animations/Flow.ts:61](https://github.com/imaphatduc/cubecubed/blob/f64863c/src/canvas/animations/Flow.ts#L61)

___

### duration

• **duration**: `number`

#### Inherited from

[CanvasAnimation](/reference/classes/CanvasAnimation.md).[duration](/reference/classes/CanvasAnimation.md#duration)

#### Defined in

[src/canvas/animations/CanvasAnimation.ts:18](https://github.com/imaphatduc/cubecubed/blob/f64863c/src/canvas/animations/CanvasAnimation.ts#L18)

___

### functionDef

• **functionDef**: [`FlowVectorFunction`](/reference/types/FlowVectorFunction.md)

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

[src/canvas/animations/Flow.ts:57](https://github.com/imaphatduc/cubecubed/blob/f64863c/src/canvas/animations/Flow.ts#L57)

___

### sleepTime

• **sleepTime**: `number` = `0`

The time to wait before playing this animation.

#### Inherited from

[CanvasAnimation](/reference/classes/CanvasAnimation.md).[sleepTime](/reference/classes/CanvasAnimation.md#sleeptime)

#### Defined in

[src/canvas/animations/CanvasAnimation.ts:23](https://github.com/imaphatduc/cubecubed/blob/f64863c/src/canvas/animations/CanvasAnimation.ts#L23)

## Methods

### play

▸ **play**(): `void`

#### Returns

`void`

#### Overrides

[CanvasAnimation](/reference/classes/CanvasAnimation.md).[play](/reference/classes/CanvasAnimation.md#play)

#### Defined in

[src/canvas/animations/Flow.ts:86](https://github.com/imaphatduc/cubecubed/blob/f64863c/src/canvas/animations/Flow.ts#L86)
