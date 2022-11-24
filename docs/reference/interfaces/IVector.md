[cubecubed](/reference/README.md) / [Exports](/reference/modules.md) / IVector

# Interface: IVector

## Implemented by

- [`Vector2`](/reference/classes/Vector2.md)
- [`Vector3`](/reference/classes/Vector3.md)

## Methods

### add

▸ **add**(`vect`): [`IVector`](/reference/interfaces/IVector.md)

Immutable element-wise addition

#### Parameters

| Name | Type |
| :------ | :------ |
| `vect` | [`IVector`](/reference/interfaces/IVector.md) |

#### Returns

[`IVector`](/reference/interfaces/IVector.md)

#### Defined in

[src/math/vector.ts:12](https://github.com/imaphatduc/cubecubed/blob/ec15a85/src/math/vector.ts#L12)

___

### apply

▸ **apply**(`func`): [`IVector`](/reference/interfaces/IVector.md)

Returns a new vector with element-wise function mapping

#### Parameters

| Name | Type |
| :------ | :------ |
| `func` | [`ElementMapFunction`](/reference/types/ElementMapFunction.md) |

#### Returns

[`IVector`](/reference/interfaces/IVector.md)

#### Defined in

[src/math/vector.ts:32](https://github.com/imaphatduc/cubecubed/blob/ec15a85/src/math/vector.ts#L32)

___

### dot

▸ **dot**(`vect`): `number`

Returns the dot product of two vectors

#### Parameters

| Name | Type |
| :------ | :------ |
| `vect` | [`IVector`](/reference/interfaces/IVector.md) |

#### Returns

`number`

#### Defined in

[src/math/vector.ts:27](https://github.com/imaphatduc/cubecubed/blob/ec15a85/src/math/vector.ts#L27)

___

### magnitude

▸ **magnitude**(): `number`

Calculate magnitude of vector

#### Returns

`number`

#### Defined in

[src/math/vector.ts:7](https://github.com/imaphatduc/cubecubed/blob/ec15a85/src/math/vector.ts#L7)

___

### scale

▸ **scale**(`scalar`): [`IVector`](/reference/interfaces/IVector.md)

Creates a new scaled vector

#### Parameters

| Name | Type |
| :------ | :------ |
| `scalar` | `number` |

#### Returns

[`IVector`](/reference/interfaces/IVector.md)

#### Defined in

[src/math/vector.ts:22](https://github.com/imaphatduc/cubecubed/blob/ec15a85/src/math/vector.ts#L22)

___

### subtract

▸ **subtract**(`vect`): [`IVector`](/reference/interfaces/IVector.md)

Immutable element-wise subtraction

#### Parameters

| Name | Type |
| :------ | :------ |
| `vect` | [`IVector`](/reference/interfaces/IVector.md) |

#### Returns

[`IVector`](/reference/interfaces/IVector.md)

#### Defined in

[src/math/vector.ts:17](https://github.com/imaphatduc/cubecubed/blob/ec15a85/src/math/vector.ts#L17)
