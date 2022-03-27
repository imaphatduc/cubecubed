[cubecubed](/reference/README.md) / [Exports](/reference/modules.md) / Vector2

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

[src/math/vector.ts:41](https://github.com/imaphatduc/cubecubed/blob/1251e31/src/math/vector.ts#L41)

## Properties

### x

• **x**: `number`

#### Defined in

[src/math/vector.ts:38](https://github.com/imaphatduc/cubecubed/blob/1251e31/src/math/vector.ts#L38)

___

### y

• **y**: `number`

#### Defined in

[src/math/vector.ts:39](https://github.com/imaphatduc/cubecubed/blob/1251e31/src/math/vector.ts#L39)

## Methods

### add

▸ **add**(`vect`): [`Vector2`](/reference/classes/Vector2.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `vect` | [`Vector2`](/reference/classes/Vector2.md) |

#### Returns

[`Vector2`](/reference/classes/Vector2.md)

#### Implementation of

IVector.add

#### Defined in

[src/math/vector.ts:50](https://github.com/imaphatduc/cubecubed/blob/1251e31/src/math/vector.ts#L50)

___

### apply

▸ **apply**(`func`): [`Vector2`](/reference/classes/Vector2.md)

Apply the same function to both coordinates of this vector.

#### Parameters

| Name | Type |
| :------ | :------ |
| `func` | `ElementMapFunction` |

#### Returns

[`Vector2`](/reference/classes/Vector2.md)

#### Implementation of

IVector.apply

#### Defined in

[src/math/vector.ts:69](https://github.com/imaphatduc/cubecubed/blob/1251e31/src/math/vector.ts#L69)

___

### dot

▸ **dot**(`vect`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `vect` | [`Vector2`](/reference/classes/Vector2.md) |

#### Returns

`number`

#### Implementation of

IVector.dot

#### Defined in

[src/math/vector.ts:62](https://github.com/imaphatduc/cubecubed/blob/1251e31/src/math/vector.ts#L62)

___

### magnitude

▸ **magnitude**(): `number`

#### Returns

`number`

#### Implementation of

IVector.magnitude

#### Defined in

[src/math/vector.ts:46](https://github.com/imaphatduc/cubecubed/blob/1251e31/src/math/vector.ts#L46)

___

### scale

▸ **scale**(`scalar`): [`Vector2`](/reference/classes/Vector2.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `scalar` | `number` |

#### Returns

[`Vector2`](/reference/classes/Vector2.md)

#### Implementation of

IVector.scale

#### Defined in

[src/math/vector.ts:58](https://github.com/imaphatduc/cubecubed/blob/1251e31/src/math/vector.ts#L58)

___

### subtract

▸ **subtract**(`vect`): [`Vector2`](/reference/classes/Vector2.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `vect` | [`Vector2`](/reference/classes/Vector2.md) |

#### Returns

[`Vector2`](/reference/classes/Vector2.md)

#### Implementation of

IVector.subtract

#### Defined in

[src/math/vector.ts:54](https://github.com/imaphatduc/cubecubed/blob/1251e31/src/math/vector.ts#L54)
