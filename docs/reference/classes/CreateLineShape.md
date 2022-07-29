[cubecubed](/reference/README.md) / [Exports](/reference/modules.md) / CreateLineShape

# Class: CreateLineShape

## Hierarchy

- [`Animation`](/reference/classes/Animation.md)

  ↳ **`CreateLineShape`**

## Constructors

### constructor

• **new CreateLineShape**(`params`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`AnimationParams`](/reference/interfaces/AnimationParams.md)<[`CREATE_LINE_SHAPE_TYPES`](/reference/types/CREATE_LINE_SHAPE_TYPES.md)\> |

#### Overrides

[Animation](/reference/classes/Animation.md).[constructor](/reference/classes/Animation.md#constructor)

#### Defined in

src/svg/animations/CreateLineShape.ts:15

## Properties

### animationType

• `Readonly` **animationType**: ``"CreateLineShape"``

#### Overrides

[Animation](/reference/classes/Animation.md).[animationType](/reference/classes/Animation.md#animationtype)

#### Defined in

src/svg/animations/CreateLineShape.ts:11

___

### cubicon

• **cubicon**: [`CREATE_LINE_SHAPE_TYPES`](/reference/types/CREATE_LINE_SHAPE_TYPES.md)

#### Overrides

[Animation](/reference/classes/Animation.md).[cubicon](/reference/classes/Animation.md#cubicon)

#### Defined in

src/svg/animations/CreateLineShape.ts:13

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

src/svg/animations/CreateLineShape.ts:25

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
