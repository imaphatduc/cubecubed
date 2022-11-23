[cubecubed](/reference/README.md) / [Exports](/reference/modules.md) / Translate

# Class: Translate

## Hierarchy

- [`Animation`](/reference/classes/Animation.md)

  ↳ **`Translate`**

## Constructors

### constructor

• **new Translate**(`params`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`TranslateParams`](/reference/interfaces/TranslateParams.md) |

#### Overrides

[Animation](/reference/classes/Animation.md).[constructor](/reference/classes/Animation.md#constructor)

#### Defined in

[src/svg/animations/Translate.ts:21](https://github.com/imaphatduc/cubecubed/blob/ffe94b1/src/svg/animations/Translate.ts#L21)

## Properties

### animationType

• `Readonly` **animationType**: ``"Translate"``

#### Overrides

[Animation](/reference/classes/Animation.md).[animationType](/reference/classes/Animation.md#animationtype)

#### Defined in

[src/svg/animations/Translate.ts:17](https://github.com/imaphatduc/cubecubed/blob/ffe94b1/src/svg/animations/Translate.ts#L17)

___

### cubicon

• **cubicon**: [`Cubicon`](/reference/classes/Cubicon.md)

#### Inherited from

[Animation](/reference/classes/Animation.md).[cubicon](/reference/classes/Animation.md#cubicon)

#### Defined in

[src/svg/animations/Animation.ts:30](https://github.com/imaphatduc/cubecubed/blob/ffe94b1/src/svg/animations/Animation.ts#L30)

___

### duration

• **duration**: `number`

#### Inherited from

[Animation](/reference/classes/Animation.md).[duration](/reference/classes/Animation.md#duration)

#### Defined in

[src/svg/animations/Animation.ts:32](https://github.com/imaphatduc/cubecubed/blob/ffe94b1/src/svg/animations/Animation.ts#L32)

___

### ease

• **ease**: [`EASE_TYPE`](/reference/types/EASE_TYPE.md)

#### Inherited from

[Animation](/reference/classes/Animation.md).[ease](/reference/classes/Animation.md#ease)

#### Defined in

[src/svg/animations/Animation.ts:34](https://github.com/imaphatduc/cubecubed/blob/ffe94b1/src/svg/animations/Animation.ts#L34)

___

### sleepTime

• **sleepTime**: `number` = `0`

The time to wait before playing this animation.

#### Inherited from

[Animation](/reference/classes/Animation.md).[sleepTime](/reference/classes/Animation.md#sleeptime)

#### Defined in

[src/svg/animations/Animation.ts:28](https://github.com/imaphatduc/cubecubed/blob/ffe94b1/src/svg/animations/Animation.ts#L28)

___

### vector

• **vector**: [`Vector2`](/reference/classes/Vector2.md)

#### Defined in

[src/svg/animations/Translate.ts:19](https://github.com/imaphatduc/cubecubed/blob/ffe94b1/src/svg/animations/Translate.ts#L19)

## Methods

### play

▸ **play**(): `void`

Play this animation.

#### Returns

`void`

#### Overrides

[Animation](/reference/classes/Animation.md).[play](/reference/classes/Animation.md#play)

#### Defined in

[src/svg/animations/Translate.ts:33](https://github.com/imaphatduc/cubecubed/blob/ffe94b1/src/svg/animations/Translate.ts#L33)

___

### setCubiconPosition

▸ **setCubiconPosition**(`x`, `y`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |

#### Returns

`void`

#### Inherited from

[Animation](/reference/classes/Animation.md).[setCubiconPosition](/reference/classes/Animation.md#setcubiconposition)

#### Defined in

[src/svg/animations/Animation.ts:53](https://github.com/imaphatduc/cubecubed/blob/ffe94b1/src/svg/animations/Animation.ts#L53)
