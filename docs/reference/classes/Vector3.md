[cubecubed](/reference/README.md) / [Exports](/reference/modules.md) / Vector3

# Class: Vector3

Specify a mathematical Vector3D.

## Implements

- `IVector`

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

[src/math/vector.ts:82](https://github.com/imaphatduc/cubecubed/blob/1251e31/src/math/vector.ts#L82)

## Properties

### x

• **x**: `number`

#### Defined in

[src/math/vector.ts:78](https://github.com/imaphatduc/cubecubed/blob/1251e31/src/math/vector.ts#L78)

___

### y

• **y**: `number`

#### Defined in

[src/math/vector.ts:79](https://github.com/imaphatduc/cubecubed/blob/1251e31/src/math/vector.ts#L79)

___

### z

• **z**: `number`

#### Defined in

[src/math/vector.ts:80](https://github.com/imaphatduc/cubecubed/blob/1251e31/src/math/vector.ts#L80)

## Methods

### add

▸ **add**(`vect`): [`Vector3`](/reference/classes/Vector3.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `vect` | [`Vector3`](/reference/classes/Vector3.md) |

#### Returns

[`Vector3`](/reference/classes/Vector3.md)

#### Implementation of

IVector.add

#### Defined in

[src/math/vector.ts:92](https://github.com/imaphatduc/cubecubed/blob/1251e31/src/math/vector.ts#L92)

___

### apply

▸ **apply**(`func`): [`Vector3`](/reference/classes/Vector3.md)

Apply the same function to all three coordinates of this vector.

#### Parameters

| Name | Type |
| :------ | :------ |
| `func` | `ElementMapFunction` |

#### Returns

[`Vector3`](/reference/classes/Vector3.md)

#### Implementation of

IVector.apply

#### Defined in

[src/math/vector.ts:111](https://github.com/imaphatduc/cubecubed/blob/1251e31/src/math/vector.ts#L111)

___

### dot

▸ **dot**(`vect`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `vect` | [`Vector3`](/reference/classes/Vector3.md) |

#### Returns

`number`

#### Implementation of

IVector.dot

#### Defined in

[src/math/vector.ts:104](https://github.com/imaphatduc/cubecubed/blob/1251e31/src/math/vector.ts#L104)

___

### magnitude

▸ **magnitude**(): `number`

#### Returns

`number`

#### Implementation of

IVector.magnitude

#### Defined in

[src/math/vector.ts:88](https://github.com/imaphatduc/cubecubed/blob/1251e31/src/math/vector.ts#L88)

___

### scale

▸ **scale**(`scalar`): [`Vector3`](/reference/classes/Vector3.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `scalar` | `number` |

#### Returns

[`Vector3`](/reference/classes/Vector3.md)

#### Implementation of

IVector.scale

#### Defined in

[src/math/vector.ts:100](https://github.com/imaphatduc/cubecubed/blob/1251e31/src/math/vector.ts#L100)

___

### subtract

▸ **subtract**(`vect`): [`Vector3`](/reference/classes/Vector3.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `vect` | [`Vector3`](/reference/classes/Vector3.md) |

#### Returns

[`Vector3`](/reference/classes/Vector3.md)

#### Implementation of

IVector.subtract

#### Defined in

[src/math/vector.ts:96](https://github.com/imaphatduc/cubecubed/blob/1251e31/src/math/vector.ts#L96)
