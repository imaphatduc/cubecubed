[cubecubed](/reference/README.md) / [Exports](/reference/modules.md) / ApplyFunctionParams

# Interface: ApplyFunctionParams

## Hierarchy

- [`AnimationParams`](/reference/interfaces/AnimationParams.md)<[`APPLY_FUNCTION_TYPES`](/reference/types/APPLY_FUNCTION_TYPES.md)\>

  ↳ **`ApplyFunctionParams`**

## Properties

### cubicon

• **cubicon**: [`APPLY_FUNCTION_TYPES`](/reference/types/APPLY_FUNCTION_TYPES.md)

The target cubicon to play this animation.

#### Inherited from

[AnimationParams](/reference/interfaces/AnimationParams.md).[cubicon](/reference/interfaces/AnimationParams.md#cubicon)

#### Defined in

[src/svg/animations/Animation.ts:9](https://github.com/imaphatduc/cubecubed/blob/ec15a85/src/svg/animations/Animation.ts#L9)

___

### duration

• `Optional` **duration**: `number`

The duration of this animation (in milliseconds).

#### Inherited from

[AnimationParams](/reference/interfaces/AnimationParams.md).[duration](/reference/interfaces/AnimationParams.md#duration)

#### Defined in

[src/svg/animations/Animation.ts:14](https://github.com/imaphatduc/cubecubed/blob/ec15a85/src/svg/animations/Animation.ts#L14)

___

### ease

• `Optional` **ease**: [`EASE_TYPE`](/reference/types/EASE_TYPE.md)

Easing function for smooth animation.

#### Inherited from

[AnimationParams](/reference/interfaces/AnimationParams.md).[ease](/reference/interfaces/AnimationParams.md#ease)

#### Defined in

[src/svg/animations/Animation.ts:19](https://github.com/imaphatduc/cubecubed/blob/ec15a85/src/svg/animations/Animation.ts#L19)

___

### func

• **func**: [`VerticesMapFunction`](/reference/types/VerticesMapFunction.md)

Function to apply to each vertex.

#### Defined in

[src/svg/animations/ApplyFunction.ts:13](https://github.com/imaphatduc/cubecubed/blob/ec15a85/src/svg/animations/ApplyFunction.ts#L13)
