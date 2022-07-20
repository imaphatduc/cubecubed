[cubecubed](/reference/README.md) / [Exports](/reference/modules.md) / ParametricCurve

# Class: ParametricCurve

Generate a 2d curve.

## Hierarchy

- [`Cubicon`](/reference/classes/Cubicon.md)

  ↳ **`ParametricCurve`**

## Constructors

### constructor

• **new ParametricCurve**(`params`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | `Object` |
| `params.CONFIG` | [`LINE_CONFIG`](/reference/interfaces/LINE_CONFIG.md) |
| `params.dt?` | `number` |
| `params.group` | [`Group`](/reference/classes/Group.md) |
| `params.tRange` | [`number`, `number`] |
| `params.functionDef` | (`t`: `number`) => [`Vector2`](/reference/classes/Vector2.md) |

#### Overrides

[Cubicon](/reference/classes/Cubicon.md).[constructor](/reference/classes/Cubicon.md#constructor)

#### Defined in

[src/svg/cubicons/geometry/ParametricCurve.ts:29](https://github.com/imaphatduc/cubecubed/blob/8295992/src/svg/cubicons/geometry/ParametricCurve.ts#L29)

## Properties

### CONFIG

• **CONFIG**: [`LINE_CONFIG`](/reference/interfaces/LINE_CONFIG.md)

Config options of this parametric curve.

#### Defined in

[src/svg/cubicons/geometry/ParametricCurve.ts:27](https://github.com/imaphatduc/cubecubed/blob/8295992/src/svg/cubicons/geometry/ParametricCurve.ts#L27)

___

### angle

• **angle**: `number` = `0`

The angle between this cubicon and the x axis.
This property changed after finishing animations (in real time).

#### Inherited from

[Cubicon](/reference/classes/Cubicon.md).[angle](/reference/classes/Cubicon.md#angle)

#### Defined in

[src/svg/cubicons/Cubicon.ts:26](https://github.com/imaphatduc/cubecubed/blob/8295992/src/svg/cubicons/Cubicon.ts#L26)

___

### cubiconType

• `Readonly` **cubiconType**: ``"ParametricCurve"``

#### Overrides

[Cubicon](/reference/classes/Cubicon.md).[cubiconType](/reference/classes/Cubicon.md#cubicontype)

#### Defined in

[src/svg/cubicons/geometry/ParametricCurve.ts:16](https://github.com/imaphatduc/cubecubed/blob/8295992/src/svg/cubicons/geometry/ParametricCurve.ts#L16)

___

### def\_cubiconBase

• **def\_cubiconBase**: `Selection`<`any`, `unknown`, `HTMLElement`, `any`\>

The HTML tag that represents this cubicon.

#### Inherited from

[Cubicon](/reference/classes/Cubicon.md).[def_cubiconBase](/reference/classes/Cubicon.md#def_cubiconbase)

#### Defined in

[src/svg/cubicons/Cubicon.ts:51](https://github.com/imaphatduc/cubecubed/blob/8295992/src/svg/cubicons/Cubicon.ts#L51)

___

### functionDef

• **functionDef**: (`t`: `number`) => [`Vector2`](/reference/classes/Vector2.md)

#### Type declaration

▸ (`t`): [`Vector2`](/reference/classes/Vector2.md)

##### Parameters

| Name | Type |
| :------ | :------ |
| `t` | `number` |

##### Returns

[`Vector2`](/reference/classes/Vector2.md)

#### Defined in

[src/svg/cubicons/geometry/ParametricCurve.ts:20](https://github.com/imaphatduc/cubecubed/blob/8295992/src/svg/cubicons/geometry/ParametricCurve.ts#L20)

___

### g\_cubiconWrapper

• **g\_cubiconWrapper**: `Selection`<`SVGGElement`, `unknown`, `HTMLElement`, `any`\>

The `<g/>` tag that holds this cubicon.

#### Inherited from

[Cubicon](/reference/classes/Cubicon.md).[g_cubiconWrapper](/reference/classes/Cubicon.md#g_cubiconwrapper)

#### Defined in

[src/svg/cubicons/Cubicon.ts:46](https://github.com/imaphatduc/cubecubed/blob/8295992/src/svg/cubicons/Cubicon.ts#L46)

___

### group

• **group**: [`Group`](/reference/classes/Group.md)

The group that this cubicon belongs to.

#### Inherited from

[Cubicon](/reference/classes/Cubicon.md).[group](/reference/classes/Cubicon.md#group)

#### Defined in

[src/svg/cubicons/Cubicon.ts:14](https://github.com/imaphatduc/cubecubed/blob/8295992/src/svg/cubicons/Cubicon.ts#L14)

___

### moveAngle

• **moveAngle**: `number` = `0`

The sum of all rotate angles (if invoking rotate animation).

#### Inherited from

[Cubicon](/reference/classes/Cubicon.md).[moveAngle](/reference/classes/Cubicon.md#moveangle)

#### Defined in

[src/svg/cubicons/Cubicon.ts:36](https://github.com/imaphatduc/cubecubed/blob/8295992/src/svg/cubicons/Cubicon.ts#L36)

___

### moveVector

• **moveVector**: [`Vector2`](/reference/classes/Vector2.md)

The sum vector of all translate vectors (if invoking translate animation).

#### Inherited from

[Cubicon](/reference/classes/Cubicon.md).[moveVector](/reference/classes/Cubicon.md#movevector)

#### Defined in

[src/svg/cubicons/Cubicon.ts:31](https://github.com/imaphatduc/cubecubed/blob/8295992/src/svg/cubicons/Cubicon.ts#L31)

___

### points

• **points**: [`Vector2`](/reference/classes/Vector2.md)[]

#### Defined in

[src/svg/cubicons/geometry/ParametricCurve.ts:18](https://github.com/imaphatduc/cubecubed/blob/8295992/src/svg/cubicons/geometry/ParametricCurve.ts#L18)

___

### position

• **position**: [`Vector2`](/reference/classes/Vector2.md)

Position of this cubicon.
This property changed after finishing animations (in real time).

#### Inherited from

[Cubicon](/reference/classes/Cubicon.md).[position](/reference/classes/Cubicon.md#position)

#### Defined in

[src/svg/cubicons/Cubicon.ts:20](https://github.com/imaphatduc/cubecubed/blob/8295992/src/svg/cubicons/Cubicon.ts#L20)

___

### svg\_group

• **svg\_group**: `Selection`<`SVGSVGElement`, `unknown`, `HTMLElement`, `any`\>

The `<svg/>` tag of this cubicon's group.

#### Inherited from

[Cubicon](/reference/classes/Cubicon.md).[svg_group](/reference/classes/Cubicon.md#svg_group)

#### Defined in

[src/svg/cubicons/Cubicon.ts:41](https://github.com/imaphatduc/cubecubed/blob/8295992/src/svg/cubicons/Cubicon.ts#L41)

___

### tRange

• **tRange**: [`number`, `number`]

#### Defined in

[src/svg/cubicons/geometry/ParametricCurve.ts:22](https://github.com/imaphatduc/cubecubed/blob/8295992/src/svg/cubicons/geometry/ParametricCurve.ts#L22)

## Methods

### coordsGtoW

▸ **coordsGtoW**(`point`): [`Vector2`](/reference/classes/Vector2.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `point` | [`Vector2`](/reference/classes/Vector2.md) |

#### Returns

[`Vector2`](/reference/classes/Vector2.md)

#### Inherited from

[Cubicon](/reference/classes/Cubicon.md).[coordsGtoW](/reference/classes/Cubicon.md#coordsgtow)

#### Defined in

[src/svg/cubicons/Cubicon.ts:69](https://github.com/imaphatduc/cubecubed/blob/8295992/src/svg/cubicons/Cubicon.ts#L69)

___

### getFirstOutputPoint

▸ **getFirstOutputPoint**(): [`Vector2`](/reference/classes/Vector2.md)

#### Returns

[`Vector2`](/reference/classes/Vector2.md)

#### Defined in

[src/svg/cubicons/geometry/ParametricCurve.ts:97](https://github.com/imaphatduc/cubecubed/blob/8295992/src/svg/cubicons/geometry/ParametricCurve.ts#L97)

___

### getLastOutputPoint

▸ **getLastOutputPoint**(): [`Vector2`](/reference/classes/Vector2.md)

#### Returns

[`Vector2`](/reference/classes/Vector2.md)

#### Defined in

[src/svg/cubicons/geometry/ParametricCurve.ts:101](https://github.com/imaphatduc/cubecubed/blob/8295992/src/svg/cubicons/geometry/ParametricCurve.ts#L101)

___

### getOutputVector

▸ **getOutputVector**(`t`): [`Vector2`](/reference/classes/Vector2.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `t` | `number` |

#### Returns

[`Vector2`](/reference/classes/Vector2.md)

#### Defined in

[src/svg/cubicons/geometry/ParametricCurve.ts:93](https://github.com/imaphatduc/cubecubed/blob/8295992/src/svg/cubicons/geometry/ParametricCurve.ts#L93)

___

### render

▸ **render**(): [`ParametricCurve`](/reference/classes/ParametricCurve.md)

#### Returns

[`ParametricCurve`](/reference/classes/ParametricCurve.md)

#### Defined in

[src/svg/cubicons/geometry/ParametricCurve.ts:66](https://github.com/imaphatduc/cubecubed/blob/8295992/src/svg/cubicons/geometry/ParametricCurve.ts#L66)

___

### setParentSelection

▸ **setParentSelection**(`parentSelection`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `parentSelection` | `Selection`<`SVGGElement`, `unknown`, `HTMLElement`, `any`\> |

#### Returns

`void`

#### Inherited from

[Cubicon](/reference/classes/Cubicon.md).[setParentSelection](/reference/classes/Cubicon.md#setparentselection)

#### Defined in

[src/svg/cubicons/Cubicon.ts:63](https://github.com/imaphatduc/cubecubed/blob/8295992/src/svg/cubicons/Cubicon.ts#L63)
