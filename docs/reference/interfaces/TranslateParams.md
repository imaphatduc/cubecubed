[cubecubed](/reference/README.md) / [Exports](/reference/modules.md) / TranslateParams

# Interface: TranslateParams

## Hierarchy

- [`AnimationParams`](/reference/interfaces/AnimationParams.md)<[`Cubicon`](/reference/classes/Cubicon.md)\>

  ↳ **`TranslateParams`**

## Properties

### cubicon

• **cubicon**: [`Cubicon`](/reference/classes/Cubicon.md)

The target cubicon to play this animation.

#### Inherited from

[AnimationParams](/reference/interfaces/AnimationParams.md).[cubicon](/reference/interfaces/AnimationParams.md#cubicon)

#### Defined in

[src/svg/animations/Animation.ts:9](https://github.com/imaphatduc/cubecubed/blob/0fd2007/src/svg/animations/Animation.ts#L9)

___

### duration

• `Optional` **duration**: `number`

The duration of this animation (in milliseconds).

#### Inherited from

[AnimationParams](/reference/interfaces/AnimationParams.md).[duration](/reference/interfaces/AnimationParams.md#duration)

#### Defined in

[src/svg/animations/Animation.ts:14](https://github.com/imaphatduc/cubecubed/blob/0fd2007/src/svg/animations/Animation.ts#L14)

___

### ease

• `Optional` **ease**: [`EASE_TYPE`](/reference/types/EASE_TYPE.md)

Easing function for smooth animation.

#### Inherited from

[AnimationParams](/reference/interfaces/AnimationParams.md).[ease](/reference/interfaces/AnimationParams.md#ease)

#### Defined in

[src/svg/animations/Animation.ts:19](https://github.com/imaphatduc/cubecubed/blob/0fd2007/src/svg/animations/Animation.ts#L19)

___

### vector

• **vector**: [`Vector2`](/reference/classes/Vector2.md)

The translation vector.

#### Defined in

[src/svg/animations/Translate.ts:13](https://github.com/imaphatduc/cubecubed/blob/0fd2007/src/svg/animations/Translate.ts#L13)
