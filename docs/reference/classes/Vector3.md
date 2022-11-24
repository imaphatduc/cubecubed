[cubecubed](/reference/README.md) / [Exports](/reference/modules.md) / Vector3

# Class: Vector3

Specify a mathematical Vector3D.

## Implements

- [`IVector`](/reference/interfaces/IVector.md)

## Constructors

### constructor

• **new Vector3**(`x`, `y`, `z`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |
| `z` | `number` |

#### Defined in

[src/math/Vector3.ts:11](https://github.com/imaphatduc/cubecubed/blob/ec15a85/src/math/Vector3.ts#L11)

## Properties

### x

• **x**: `number`

#### Defined in

[src/math/Vector3.ts:7](https://github.com/imaphatduc/cubecubed/blob/ec15a85/src/math/Vector3.ts#L7)

___

### y

• **y**: `number`

#### Defined in

[src/math/Vector3.ts:8](https://github.com/imaphatduc/cubecubed/blob/ec15a85/src/math/Vector3.ts#L8)

___

### z

• **z**: `number`

#### Defined in

[src/math/Vector3.ts:9](https://github.com/imaphatduc/cubecubed/blob/ec15a85/src/math/Vector3.ts#L9)

## Methods

### add

▸ **add**(`vect`): [`Vector3`](/reference/classes/Vector3.md)

Immutable element-wise addition

#### Parameters

| Name | Type |
| :------ | :------ |
| `vect` | [`Vector3`](/reference/classes/Vector3.md) |

#### Returns

[`Vector3`](/reference/classes/Vector3.md)

#### Implementation of

[IVector](/reference/interfaces/IVector.md).[add](/reference/interfaces/IVector.md#add)

#### Defined in

[src/math/Vector3.ts:21](https://github.com/imaphatduc/cubecubed/blob/ec15a85/src/math/Vector3.ts#L21)

___

### apply

▸ **apply**(`func`): [`Vector3`](/reference/classes/Vector3.md)

Apply the same function to all three coordinates of this vector.

#### Parameters

| Name | Type |
| :------ | :------ |
| `func` | [`ElementMapFunction`](/reference/types/ElementMapFunction.md) |

#### Returns

[`Vector3`](/reference/classes/Vector3.md)

#### Implementation of

[IVector](/reference/interfaces/IVector.md).[apply](/reference/interfaces/IVector.md#apply)

#### Defined in

[src/math/Vector3.ts:40](https://github.com/imaphatduc/cubecubed/blob/ec15a85/src/math/Vector3.ts#L40)

___

### dot

▸ **dot**(`vect`): `number`

Returns the dot product of two vectors

#### Parameters

| Name | Type |
| :------ | :------ |
| `vect` | [`Vector3`](/reference/classes/Vector3.md) |

#### Returns

`number`

#### Implementation of

[IVector](/reference/interfaces/IVector.md).[dot](/reference/interfaces/IVector.md#dot)

#### Defined in

[src/math/Vector3.ts:33](https://github.com/imaphatduc/cubecubed/blob/ec15a85/src/math/Vector3.ts#L33)

___

### magnitude

▸ **magnitude**(): `number`

Calculate magnitude of vector

#### Returns

`number`

#### Implementation of

[IVector](/reference/interfaces/IVector.md).[magnitude](/reference/interfaces/IVector.md#magnitude)

#### Defined in

[src/math/Vector3.ts:17](https://github.com/imaphatduc/cubecubed/blob/ec15a85/src/math/Vector3.ts#L17)

___

### scale

▸ **scale**(`scalar`): [`Vector3`](/reference/classes/Vector3.md)

Creates a new scaled vector

#### Parameters

| Name | Type |
| :------ | :------ |
| `scalar` | `number` |

#### Returns

[`Vector3`](/reference/classes/Vector3.md)

#### Implementation of

[IVector](/reference/interfaces/IVector.md).[scale](/reference/interfaces/IVector.md#scale)

#### Defined in

[src/math/Vector3.ts:29](https://github.com/imaphatduc/cubecubed/blob/ec15a85/src/math/Vector3.ts#L29)

___

### subtract

▸ **subtract**(`vect`): [`Vector3`](/reference/classes/Vector3.md)

Immutable element-wise subtraction

#### Parameters

| Name | Type |
| :------ | :------ |
| `vect` | [`Vector3`](/reference/classes/Vector3.md) |

#### Returns

[`Vector3`](/reference/classes/Vector3.md)

#### Implementation of

[IVector](/reference/interfaces/IVector.md).[subtract](/reference/interfaces/IVector.md#subtract)

#### Defined in

[src/math/Vector3.ts:25](https://github.com/imaphatduc/cubecubed/blob/ec15a85/src/math/Vector3.ts#L25)
