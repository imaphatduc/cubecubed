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

[src/canvas/animations/CanvasAnimation.ts:7](https://github.com/imaphatduc/cubecubed/blob/f64863c/src/canvas/animations/CanvasAnimation.ts#L7)

___

### dt

• `Optional` **dt**: `number`

Differential of the time variable `t`.

#### Defined in

[src/canvas/animations/Flow.ts:25](https://github.com/imaphatduc/cubecubed/blob/f64863c/src/canvas/animations/Flow.ts#L25)

___

### duration

• `Optional` **duration**: `number`

The duration of this animation (in milliseconds).

#### Inherited from

[CanvasAnimationParams](/reference/interfaces/CanvasAnimationParams.md).[duration](/reference/interfaces/CanvasAnimationParams.md#duration)

#### Defined in

[src/canvas/animations/CanvasAnimation.ts:12](https://github.com/imaphatduc/cubecubed/blob/f64863c/src/canvas/animations/CanvasAnimation.ts#L12)

___

### functionDef

• **functionDef**: [`FlowVectorFunction`](/reference/types/FlowVectorFunction.md)

The function to change the cubicon's position at each frame.

#### Defined in

[src/canvas/animations/Flow.ts:15](https://github.com/imaphatduc/cubecubed/blob/f64863c/src/canvas/animations/Flow.ts#L15)

___

### tRange

• `Optional` **tRange**: [`number`, `number`]

The range of the time variable `t`.

#### Defined in

[src/canvas/animations/Flow.ts:20](https://github.com/imaphatduc/cubecubed/blob/f64863c/src/canvas/animations/Flow.ts#L20)
