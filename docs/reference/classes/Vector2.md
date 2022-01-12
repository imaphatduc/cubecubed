[cubecubed](/wiki/README.md) / [Exports](/wiki/modules.md) / Vector2

# Class: Vector2

Specify a mathematical Vector2D.

## Implements

- `IVector`

## Constructors

### constructor

• **new Vector2**(`x`, `y`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |

#### Defined in

[src/math/vector.ts:37](https://github.com/imaphatduc/cubecubed/blob/26131ac/src/math/vector.ts#L37)

## Properties

### x

• **x**: `number`

#### Defined in

[src/math/vector.ts:34](https://github.com/imaphatduc/cubecubed/blob/26131ac/src/math/vector.ts#L34)

___

### y

• **y**: `number`

#### Defined in

[src/math/vector.ts:35](https://github.com/imaphatduc/cubecubed/blob/26131ac/src/math/vector.ts#L35)

## Methods

### add

▸ **add**(`vect`): [`Vector2`](/wiki/classes/Vector2.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `vect` | [`Vector2`](/wiki/classes/Vector2.md) |

#### Returns

[`Vector2`](/wiki/classes/Vector2.md)

#### Implementation of

IVector.add

#### Defined in

[src/math/vector.ts:42](https://github.com/imaphatduc/cubecubed/blob/26131ac/src/math/vector.ts#L42)

___

### apply

▸ **apply**(`func`): [`Vector2`](/wiki/classes/Vector2.md)

Apply the same function to both coordinates of this vector.

#### Parameters

| Name | Type |
| :------ | :------ |
| `func` | `ElementMapFunction` |

#### Returns

[`Vector2`](/wiki/classes/Vector2.md)

#### Implementation of

IVector.apply

#### Defined in

[src/math/vector.ts:61](https://github.com/imaphatduc/cubecubed/blob/26131ac/src/math/vector.ts#L61)

___

### dot

▸ **dot**(`vect`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `vect` | [`Vector2`](/wiki/classes/Vector2.md) |

#### Returns

`number`

#### Implementation of

IVector.dot

#### Defined in

[src/math/vector.ts:54](https://github.com/imaphatduc/cubecubed/blob/26131ac/src/math/vector.ts#L54)

___

### scale

▸ **scale**(`scalar`): [`Vector2`](/wiki/classes/Vector2.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `scalar` | `number` |

#### Returns

[`Vector2`](/wiki/classes/Vector2.md)

#### Implementation of

IVector.scale

#### Defined in

[src/math/vector.ts:50](https://github.com/imaphatduc/cubecubed/blob/26131ac/src/math/vector.ts#L50)

___

### subtract

▸ **subtract**(`vect`): [`Vector2`](/wiki/classes/Vector2.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `vect` | [`Vector2`](/wiki/classes/Vector2.md) |

#### Returns

[`Vector2`](/wiki/classes/Vector2.md)

#### Implementation of

IVector.subtract

#### Defined in

[src/math/vector.ts:46](https://github.com/imaphatduc/cubecubed/blob/26131ac/src/math/vector.ts#L46)
