[cubecubed](/reference/README.md) / [Exports](/reference/modules.md) / CreateVectorShape

# Class: CreateVectorShape

## Hierarchy

- [`Animation`](/reference/classes/Animation.md)

  ↳ **`CreateVectorShape`**

## Constructors

### constructor

• **new CreateVectorShape**(`params`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`AnimationParams`](/reference/interfaces/AnimationParams.md)<[`VectorShape`](/reference/classes/VectorShape.md)\> |

#### Overrides

[Animation](/reference/classes/Animation.md).[constructor](/reference/classes/Animation.md#constructor)

#### Defined in

[src/svg/animations/CreateVectorShape.ts:12](https://github.com/imaphatduc/cubecubed/blob/f64863c/src/svg/animations/CreateVectorShape.ts#L12)

## Properties

### animationType

• `Readonly` **animationType**: ``"CreateVectorShape"``

#### Overrides

[Animation](/reference/classes/Animation.md).[animationType](/reference/classes/Animation.md#animationtype)

#### Defined in

[src/svg/animations/CreateVectorShape.ts:8](https://github.com/imaphatduc/cubecubed/blob/f64863c/src/svg/animations/CreateVectorShape.ts#L8)

___

### cubicon

• **cubicon**: [`VectorShape`](/reference/classes/VectorShape.md)

#### Overrides

[Animation](/reference/classes/Animation.md).[cubicon](/reference/classes/Animation.md#cubicon)

#### Defined in

[src/svg/animations/CreateVectorShape.ts:10](https://github.com/imaphatduc/cubecubed/blob/f64863c/src/svg/animations/CreateVectorShape.ts#L10)

___

### duration

• **duration**: `number`

#### Inherited from

[Animation](/reference/classes/Animation.md).[duration](/reference/classes/Animation.md#duration)

#### Defined in

[src/svg/animations/Animation.ts:32](https://github.com/imaphatduc/cubecubed/blob/f64863c/src/svg/animations/Animation.ts#L32)

___

### ease

• **ease**: [`EASE_TYPE`](/reference/types/EASE_TYPE.md)

#### Inherited from

[Animation](/reference/classes/Animation.md).[ease](/reference/classes/Animation.md#ease)

#### Defined in

[src/svg/animations/Animation.ts:34](https://github.com/imaphatduc/cubecubed/blob/f64863c/src/svg/animations/Animation.ts#L34)

___

### sleepTime

• **sleepTime**: `number` = `0`

The time to wait before playing this animation.

#### Inherited from

[Animation](/reference/classes/Animation.md).[sleepTime](/reference/classes/Animation.md#sleeptime)

#### Defined in

[src/svg/animations/Animation.ts:28](https://github.com/imaphatduc/cubecubed/blob/f64863c/src/svg/animations/Animation.ts#L28)

## Methods

### play

▸ **play**(): `void`

Play this animation.

#### Returns

`void`

#### Overrides

[Animation](/reference/classes/Animation.md).[play](/reference/classes/Animation.md#play)

#### Defined in

[src/svg/animations/CreateVectorShape.ts:22](https://github.com/imaphatduc/cubecubed/blob/f64863c/src/svg/animations/CreateVectorShape.ts#L22)

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

[src/svg/animations/Animation.ts:53](https://github.com/imaphatduc/cubecubed/blob/f64863c/src/svg/animations/Animation.ts#L53)
