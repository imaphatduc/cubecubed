[cubecubed](/reference/README.md) / [Exports](/reference/modules.md) / FlowParams

# Interface: FlowParams

## Hierarchy

- [`CanvasAnimationParams`](/reference/interfaces/CanvasAnimationParams.md)<[`FLOW_TYPES`](/reference/types/FLOW_TYPES.md)\>

  ↳ **`FlowParams`**

## Properties

### cubicon

• **cubicon**: [`Particle`](/reference/classes/Particle.md)

The target cubicon to play this animation.

#### Inherited from

[CanvasAnimationParams](/reference/interfaces/CanvasAnimationParams.md).[cubicon](/reference/interfaces/CanvasAnimationParams.md#cubicon)

#### Defined in

[src/canvas/animations/CanvasAnimation.ts:7](https://github.com/imaphatduc/cubecubed/blob/0fd2007/src/canvas/animations/CanvasAnimation.ts#L7)

___

### dt

• `Optional` **dt**: `number`

Speed when changing the position of the stream line.

**`Default`**

0.01

#### Defined in

[src/canvas/animations/Flow.ts:17](https://github.com/imaphatduc/cubecubed/blob/0fd2007/src/canvas/animations/Flow.ts#L17)

___

### duration

• `Optional` **duration**: `number`

The duration of this animation (in milliseconds).

#### Inherited from

[CanvasAnimationParams](/reference/interfaces/CanvasAnimationParams.md).[duration](/reference/interfaces/CanvasAnimationParams.md#duration)

#### Defined in

[src/canvas/animations/CanvasAnimation.ts:12](https://github.com/imaphatduc/cubecubed/blob/0fd2007/src/canvas/animations/CanvasAnimation.ts#L12)

___

### functionDef

• **functionDef**: [`FlowVectorFunction`](/reference/types/FlowVectorFunction.md)

The function to change the cubicon's position at each frame.

#### Defined in

[src/canvas/animations/Flow.ts:22](https://github.com/imaphatduc/cubecubed/blob/0fd2007/src/canvas/animations/Flow.ts#L22)
