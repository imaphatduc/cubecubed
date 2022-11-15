[cubecubed](/reference/README.md) / [Exports](/reference/modules.md) / DrawVectorField

# Class: DrawVectorField

## Hierarchy

- [`Animation`](/reference/classes/Animation.md)

  ↳ **`DrawVectorField`**

## Constructors

### constructor

• **new DrawVectorField**(`params`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`AnimationParams`](/reference/interfaces/AnimationParams.md)<[`VectorField`](/reference/classes/VectorField.md)\> |

#### Overrides

[Animation](/reference/classes/Animation.md).[constructor](/reference/classes/Animation.md#constructor)

#### Defined in

[src/svg/animations/DrawVectorField.ts:14](https://github.com/imaphatduc/cubecubed/blob/0fd2007/src/svg/animations/DrawVectorField.ts#L14)

## Properties

### animationType

• `Readonly` **animationType**: ``"DrawVectorField"``

#### Overrides

[Animation](/reference/classes/Animation.md).[animationType](/reference/classes/Animation.md#animationtype)

#### Defined in

[src/svg/animations/DrawVectorField.ts:10](https://github.com/imaphatduc/cubecubed/blob/0fd2007/src/svg/animations/DrawVectorField.ts#L10)

___

### cubicon

• **cubicon**: [`VectorField`](/reference/classes/VectorField.md)

#### Overrides

[Animation](/reference/classes/Animation.md).[cubicon](/reference/classes/Animation.md#cubicon)

#### Defined in

[src/svg/animations/DrawVectorField.ts:12](https://github.com/imaphatduc/cubecubed/blob/0fd2007/src/svg/animations/DrawVectorField.ts#L12)

___

### duration

• **duration**: `number`

#### Inherited from

[Animation](/reference/classes/Animation.md).[duration](/reference/classes/Animation.md#duration)

#### Defined in

[src/svg/animations/Animation.ts:32](https://github.com/imaphatduc/cubecubed/blob/0fd2007/src/svg/animations/Animation.ts#L32)

___

### ease

• **ease**: [`EASE_TYPE`](/reference/types/EASE_TYPE.md)

#### Inherited from

[Animation](/reference/classes/Animation.md).[ease](/reference/classes/Animation.md#ease)

#### Defined in

[src/svg/animations/Animation.ts:34](https://github.com/imaphatduc/cubecubed/blob/0fd2007/src/svg/animations/Animation.ts#L34)

___

### sleepTime

• **sleepTime**: `number` = `0`

The time to wait before playing this animation.

#### Inherited from

[Animation](/reference/classes/Animation.md).[sleepTime](/reference/classes/Animation.md#sleeptime)

#### Defined in

[src/svg/animations/Animation.ts:28](https://github.com/imaphatduc/cubecubed/blob/0fd2007/src/svg/animations/Animation.ts#L28)

## Methods

### play

▸ **play**(): `void`

Play this animation.

#### Returns

`void`

#### Overrides

[Animation](/reference/classes/Animation.md).[play](/reference/classes/Animation.md#play)

#### Defined in

[src/svg/animations/DrawVectorField.ts:24](https://github.com/imaphatduc/cubecubed/blob/0fd2007/src/svg/animations/DrawVectorField.ts#L24)

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

[src/svg/animations/Animation.ts:53](https://github.com/imaphatduc/cubecubed/blob/0fd2007/src/svg/animations/Animation.ts#L53)
