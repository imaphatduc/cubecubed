[cubecubed](/reference/README.md) / [Exports](/reference/modules.md) / VectorFieldParams

# Interface: VectorFieldParams

## Hierarchy

- [`CubiconParams`](/reference/interfaces/CubiconParams.md)<[`VECTOR_FIELD_CONFIG`](/reference/interfaces/VECTOR_FIELD_CONFIG.md)\>

  ↳ **`VectorFieldParams`**

## Properties

### CONFIG

• `Optional` **CONFIG**: [`VECTOR_FIELD_CONFIG`](/reference/interfaces/VECTOR_FIELD_CONFIG.md)

Config options of this cubicon.

#### Inherited from

[CubiconParams](/reference/interfaces/CubiconParams.md).[CONFIG](/reference/interfaces/CubiconParams.md#config)

#### Defined in

[src/svg/cubicons/Cubicon.ts:22](https://github.com/imaphatduc/cubecubed/blob/f64863c/src/svg/cubicons/Cubicon.ts#L22)

___

### functionDef

• **functionDef**: (`pos`: [`Vector2`](/reference/classes/Vector2.md)) => [`Vector2`](/reference/classes/Vector2.md)

#### Type declaration

▸ (`pos`): [`Vector2`](/reference/classes/Vector2.md)

Multivariable function that produces 2d vector field.

##### Parameters

| Name | Type |
| :------ | :------ |
| `pos` | [`Vector2`](/reference/classes/Vector2.md) |

##### Returns

[`Vector2`](/reference/classes/Vector2.md)

#### Defined in

[src/svg/cubicons/VectorField.ts:40](https://github.com/imaphatduc/cubecubed/blob/f64863c/src/svg/cubicons/VectorField.ts#L40)

___

### group

• **group**: [`Group`](/reference/classes/Group.md)

The group that this cubicon belongs to.

#### Inherited from

[CubiconParams](/reference/interfaces/CubiconParams.md).[group](/reference/interfaces/CubiconParams.md#group)

#### Defined in

[src/svg/cubicons/Cubicon.ts:12](https://github.com/imaphatduc/cubecubed/blob/f64863c/src/svg/cubicons/Cubicon.ts#L12)

___

### position

• `Optional` **position**: [`Vector2`](/reference/classes/Vector2.md)

Position of this cubicon.

#### Inherited from

[CubiconParams](/reference/interfaces/CubiconParams.md).[position](/reference/interfaces/CubiconParams.md#position)

#### Defined in

[src/svg/cubicons/Cubicon.ts:17](https://github.com/imaphatduc/cubecubed/blob/f64863c/src/svg/cubicons/Cubicon.ts#L17)
