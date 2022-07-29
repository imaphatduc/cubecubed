[cubecubed](/reference/README.md) / [Exports](/reference/modules.md) / Rotate

# Class: Rotate

## Hierarchy

- [`Animation`](/reference/classes/Animation.md)

  ↳ **`Rotate`**

## Constructors

### constructor

• **new Rotate**(`params`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`RotateParams`](/reference/interfaces/RotateParams.md) |

#### Overrides

[Animation](/reference/classes/Animation.md).[constructor](/reference/classes/Animation.md#constructor)

#### Defined in

src/svg/animations/Rotate.ts:22

## Properties

### animationType

• `Readonly` **animationType**: ``"Rotate"``

#### Overrides

[Animation](/reference/classes/Animation.md).[animationType](/reference/classes/Animation.md#animationtype)

#### Defined in

src/svg/animations/Rotate.ts:18

___

### cubicon

• **cubicon**: [`Cubicon`](/reference/classes/Cubicon.md)

#### Inherited from

[Animation](/reference/classes/Animation.md).[cubicon](/reference/classes/Animation.md#cubicon)

#### Defined in

src/svg/animations/Animation.ts:30

___

### degree

• **degree**: `number`

#### Defined in

src/svg/animations/Rotate.ts:20

___

### duration

• **duration**: `number`

#### Inherited from

[Animation](/reference/classes/Animation.md).[duration](/reference/classes/Animation.md#duration)

#### Defined in

src/svg/animations/Animation.ts:32

___

### ease

• **ease**: [`EASE_TYPE`](/reference/types/EASE_TYPE.md)

#### Inherited from

[Animation](/reference/classes/Animation.md).[ease](/reference/classes/Animation.md#ease)

#### Defined in

src/svg/animations/Animation.ts:34

___

### sleepTime

• **sleepTime**: `number` = `0`

The time to wait before playing this animation.

#### Inherited from

[Animation](/reference/classes/Animation.md).[sleepTime](/reference/classes/Animation.md#sleeptime)

#### Defined in

src/svg/animations/Animation.ts:28

## Methods

### play

▸ **play**(): `void`

Play this animation.

#### Returns

`void`

#### Overrides

[Animation](/reference/classes/Animation.md).[play](/reference/classes/Animation.md#play)

#### Defined in

src/svg/animations/Rotate.ts:34

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

src/svg/animations/Animation.ts:53
