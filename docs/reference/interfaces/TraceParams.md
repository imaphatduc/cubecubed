[cubecubed](/reference/README.md) / [Exports](/reference/modules.md) / TraceParams

# Interface: TraceParams

## Hierarchy

- [`AnimationParams`](/reference/interfaces/AnimationParams.md)<[`Line`](/reference/classes/Line.md)\>

  ↳ **`TraceParams`**

## Properties

### cubicon

• **cubicon**: [`Line`](/reference/classes/Line.md)

The target cubicon to play this animation.

#### Inherited from

[AnimationParams](/reference/interfaces/AnimationParams.md).[cubicon](/reference/interfaces/AnimationParams.md#cubicon)

#### Defined in

src/svg/animations/Animation.ts:9

___

### curve

• **curve**: [`ParametricCurve`](/reference/classes/ParametricCurve.md)

The curve for this line to trace.

#### Defined in

src/svg/animations/Trace.ts:15

___

### duration

• `Optional` **duration**: `number`

The duration of this animation (in milliseconds).

#### Inherited from

[AnimationParams](/reference/interfaces/AnimationParams.md).[duration](/reference/interfaces/AnimationParams.md#duration)

#### Defined in

src/svg/animations/Animation.ts:14

___

### ease

• `Optional` **ease**: [`EASE_TYPE`](/reference/types/EASE_TYPE.md)

Easing function for smooth animation.

#### Inherited from

[AnimationParams](/reference/interfaces/AnimationParams.md).[ease](/reference/interfaces/AnimationParams.md#ease)

#### Defined in

src/svg/animations/Animation.ts:19
