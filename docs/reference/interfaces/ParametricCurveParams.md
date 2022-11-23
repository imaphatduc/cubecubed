[cubecubed](/reference/README.md) / [Exports](/reference/modules.md) / ParametricCurveParams

# Interface: ParametricCurveParams

## Hierarchy

- [`CubiconParams`](/reference/interfaces/CubiconParams.md)<[`LINE_SHAPE_CONFIG`](/reference/interfaces/LINE_SHAPE_CONFIG.md)\>

  ↳ **`ParametricCurveParams`**

## Properties

### CONFIG

• `Optional` **CONFIG**: [`LINE_SHAPE_CONFIG`](/reference/interfaces/LINE_SHAPE_CONFIG.md)

Config options of this cubicon.

#### Inherited from

[CubiconParams](/reference/interfaces/CubiconParams.md).[CONFIG](/reference/interfaces/CubiconParams.md#config)

#### Defined in

[src/svg/cubicons/Cubicon.ts:22](https://github.com/imaphatduc/cubecubed/blob/f64863c/src/svg/cubicons/Cubicon.ts#L22)

___

### functionDef

• **functionDef**: (`t`: `number`) => [`Vector2`](/reference/classes/Vector2.md)

#### Type declaration

▸ (`t`): [`Vector2`](/reference/classes/Vector2.md)

Parametric function definition.

##### Parameters

| Name | Type |
| :------ | :------ |
| `t` | `number` |

##### Returns

[`Vector2`](/reference/classes/Vector2.md)

#### Defined in

[src/svg/cubicons/geometry/ParametricCurve.ts:26](https://github.com/imaphatduc/cubecubed/blob/f64863c/src/svg/cubicons/geometry/ParametricCurve.ts#L26)

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

___

### tRange

• **tRange**: [`number`, `number`]

Range of the parameter t.

#### Defined in

[src/svg/cubicons/geometry/ParametricCurve.ts:21](https://github.com/imaphatduc/cubecubed/blob/f64863c/src/svg/cubicons/geometry/ParametricCurve.ts#L21)
