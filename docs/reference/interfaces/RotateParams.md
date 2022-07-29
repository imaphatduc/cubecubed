[cubecubed](/reference/README.md) / [Exports](/reference/modules.md) / RotateParams

# Interface: RotateParams

## Hierarchy

- [`AnimationParams`](/reference/interfaces/AnimationParams.md)<[`Cubicon`](/reference/classes/Cubicon.md)\>

  ↳ **`RotateParams`**

## Properties

### cubicon

• **cubicon**: [`Cubicon`](/reference/classes/Cubicon.md)

The target cubicon to play this animation.

#### Inherited from

[AnimationParams](/reference/interfaces/AnimationParams.md).[cubicon](/reference/interfaces/AnimationParams.md#cubicon)

#### Defined in

src/svg/animations/Animation.ts:9

___

### degree

• **degree**: `number`

Angle (in degrees) for this rotation.

#### Defined in

src/svg/animations/Rotate.ts:14

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
