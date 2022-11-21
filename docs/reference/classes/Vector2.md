[cubecubed](/reference/README.md) / [Exports](/reference/modules.md) / Vector2

# Class: Vector2

Specify a mathematical Vector2D.

## Implements

- [`IVector`](/reference/interfaces/IVector.md)

## Constructors

### constructor

• **new Vector2**(`x`, `y`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |

#### Defined in

[src/math/Vector2.ts:10](https://github.com/imaphatduc/cubecubed/blob/f8be6e1/src/math/Vector2.ts#L10)

## Properties

### x

• **x**: `number`

#### Defined in

[src/math/Vector2.ts:7](https://github.com/imaphatduc/cubecubed/blob/f8be6e1/src/math/Vector2.ts#L7)

___

### y

• **y**: `number`

#### Defined in

[src/math/Vector2.ts:8](https://github.com/imaphatduc/cubecubed/blob/f8be6e1/src/math/Vector2.ts#L8)

## Methods

### add

▸ **add**(`vect`): [`Vector2`](/reference/classes/Vector2.md)

Immutable element-wise addition

#### Parameters

| Name | Type |
| :------ | :------ |
| `vect` | [`Vector2`](/reference/classes/Vector2.md) |

#### Returns

[`Vector2`](/reference/classes/Vector2.md)

#### Implementation of

[IVector](/reference/interfaces/IVector.md).[add](/reference/interfaces/IVector.md#add)

#### Defined in

[src/math/Vector2.ts:19](https://github.com/imaphatduc/cubecubed/blob/f8be6e1/src/math/Vector2.ts#L19)

___

### apply

▸ **apply**(`func`): [`Vector2`](/reference/classes/Vector2.md)

Apply the same function to both coordinates of this vector.

#### Parameters

| Name | Type |
| :------ | :------ |
| `func` | [`ElementMapFunction`](/reference/types/ElementMapFunction.md) |

#### Returns

[`Vector2`](/reference/classes/Vector2.md)

#### Implementation of

[IVector](/reference/interfaces/IVector.md).[apply](/reference/interfaces/IVector.md#apply)

#### Defined in

[src/math/Vector2.ts:38](https://github.com/imaphatduc/cubecubed/blob/f8be6e1/src/math/Vector2.ts#L38)

___

### dot

▸ **dot**(`vect`): `number`

Returns the dot product of two vectors

#### Parameters

| Name | Type |
| :------ | :------ |
| `vect` | [`Vector2`](/reference/classes/Vector2.md) |

#### Returns

`number`

#### Implementation of

[IVector](/reference/interfaces/IVector.md).[dot](/reference/interfaces/IVector.md#dot)

#### Defined in

[src/math/Vector2.ts:31](https://github.com/imaphatduc/cubecubed/blob/f8be6e1/src/math/Vector2.ts#L31)

___

### magnitude

▸ **magnitude**(): `number`

Calculate magnitude of vector

#### Returns

`number`

#### Implementation of

[IVector](/reference/interfaces/IVector.md).[magnitude](/reference/interfaces/IVector.md#magnitude)

#### Defined in

[src/math/Vector2.ts:15](https://github.com/imaphatduc/cubecubed/blob/f8be6e1/src/math/Vector2.ts#L15)

___

### scale

▸ **scale**(`scalar`): [`Vector2`](/reference/classes/Vector2.md)

Creates a new scaled vector

#### Parameters

| Name | Type |
| :------ | :------ |
| `scalar` | `number` |

#### Returns

[`Vector2`](/reference/classes/Vector2.md)

#### Implementation of

[IVector](/reference/interfaces/IVector.md).[scale](/reference/interfaces/IVector.md#scale)

#### Defined in

[src/math/Vector2.ts:27](https://github.com/imaphatduc/cubecubed/blob/f8be6e1/src/math/Vector2.ts#L27)

___

### subtract

▸ **subtract**(`vect`): [`Vector2`](/reference/classes/Vector2.md)

Immutable element-wise subtraction

#### Parameters

| Name | Type |
| :------ | :------ |
| `vect` | [`Vector2`](/reference/classes/Vector2.md) |

#### Returns

[`Vector2`](/reference/classes/Vector2.md)

#### Implementation of

[IVector](/reference/interfaces/IVector.md).[subtract](/reference/interfaces/IVector.md#subtract)

#### Defined in

[src/math/Vector2.ts:23](https://github.com/imaphatduc/cubecubed/blob/f8be6e1/src/math/Vector2.ts#L23)
