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

[src/math/vector.ts:74](https://github.com/imaphatduc/cubecubed/blob/dfe7a5d/src/math/vector.ts#L74)

## Properties

### x

• **x**: `number`

#### Defined in

[src/math/vector.ts:70](https://github.com/imaphatduc/cubecubed/blob/dfe7a5d/src/math/vector.ts#L70)

___

### y

• **y**: `number`

#### Defined in

[src/math/vector.ts:71](https://github.com/imaphatduc/cubecubed/blob/dfe7a5d/src/math/vector.ts#L71)

___

### z

• **z**: `number`

#### Defined in

[src/math/vector.ts:72](https://github.com/imaphatduc/cubecubed/blob/dfe7a5d/src/math/vector.ts#L72)

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

[src/math/vector.ts:80](https://github.com/imaphatduc/cubecubed/blob/dfe7a5d/src/math/vector.ts#L80)

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

[src/math/vector.ts:99](https://github.com/imaphatduc/cubecubed/blob/dfe7a5d/src/math/vector.ts#L99)

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

[src/math/vector.ts:92](https://github.com/imaphatduc/cubecubed/blob/dfe7a5d/src/math/vector.ts#L92)

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

[src/math/vector.ts:88](https://github.com/imaphatduc/cubecubed/blob/dfe7a5d/src/math/vector.ts#L88)

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

[src/math/vector.ts:84](https://github.com/imaphatduc/cubecubed/blob/dfe7a5d/src/math/vector.ts#L84)
