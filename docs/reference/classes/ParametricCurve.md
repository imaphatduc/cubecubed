[cubecubed](/reference/README.md) / [Exports](/reference/modules.md) / ParametricCurve

# Class: ParametricCurve

Generate a 2d curve.

## Hierarchy

- [`Geometry`](/reference/classes/Geometry.md)

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

[Geometry](/reference/classes/Geometry.md).[constructor](/reference/classes/Geometry.md#constructor)

#### Defined in

[src/svg/cubicons/geometry/ParametricCurve.ts:29](https://github.com/imaphatduc/cubecubed/blob/e48fd86/src/svg/cubicons/geometry/ParametricCurve.ts#L29)

## Properties

### CONFIG

• **CONFIG**: [`LINE_CONFIG`](/reference/interfaces/LINE_CONFIG.md)

Config options of this parametric curve.

#### Defined in

[src/svg/cubicons/geometry/ParametricCurve.ts:27](https://github.com/imaphatduc/cubecubed/blob/e48fd86/src/svg/cubicons/geometry/ParametricCurve.ts#L27)

___

### angle

• **angle**: `number` = `0`

The angle between this cubicon and the x axis.
This property changed after finishing animations (in real time).

#### Inherited from

[Geometry](/reference/classes/Geometry.md).[angle](/reference/classes/Geometry.md#angle)

#### Defined in

[src/svg/cubicons/Cubicon.ts:26](https://github.com/imaphatduc/cubecubed/blob/e48fd86/src/svg/cubicons/Cubicon.ts#L26)

___

### cubType

• `Readonly` **cubType**: ``"geometry"``

#### Inherited from

[Geometry](/reference/classes/Geometry.md).[cubType](/reference/classes/Geometry.md#cubtype)

#### Defined in

[src/svg/cubicons/geometry/Geometry.ts:77](https://github.com/imaphatduc/cubecubed/blob/e48fd86/src/svg/cubicons/geometry/Geometry.ts#L77)

___

### def\_cubiconBase

• **def\_cubiconBase**: `Selection`<`any`, `unknown`, `HTMLElement`, `any`\>

The HTML tag that represents this cubicon.

#### Inherited from

[Geometry](/reference/classes/Geometry.md).[def_cubiconBase](/reference/classes/Geometry.md#def_cubiconbase)

#### Defined in

[src/svg/cubicons/Cubicon.ts:51](https://github.com/imaphatduc/cubecubed/blob/e48fd86/src/svg/cubicons/Cubicon.ts#L51)

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

[src/svg/cubicons/geometry/ParametricCurve.ts:20](https://github.com/imaphatduc/cubecubed/blob/e48fd86/src/svg/cubicons/geometry/ParametricCurve.ts#L20)

___

### g\_cubiconWrapper

• **g\_cubiconWrapper**: `Selection`<`SVGGElement`, `unknown`, `HTMLElement`, `any`\>

The `<g/>` tag that holds this cubicon.

#### Inherited from

[Geometry](/reference/classes/Geometry.md).[g_cubiconWrapper](/reference/classes/Geometry.md#g_cubiconwrapper)

#### Defined in

[src/svg/cubicons/Cubicon.ts:46](https://github.com/imaphatduc/cubecubed/blob/e48fd86/src/svg/cubicons/Cubicon.ts#L46)

___

### geoType

• `Readonly` **geoType**: ``"parametric-curve"``

#### Overrides

[Geometry](/reference/classes/Geometry.md).[geoType](/reference/classes/Geometry.md#geotype)

#### Defined in

[src/svg/cubicons/geometry/ParametricCurve.ts:16](https://github.com/imaphatduc/cubecubed/blob/e48fd86/src/svg/cubicons/geometry/ParametricCurve.ts#L16)

___

### group

• **group**: [`Group`](/reference/classes/Group.md)

The group that this cubicon belongs to.

#### Inherited from

[Geometry](/reference/classes/Geometry.md).[group](/reference/classes/Geometry.md#group)

#### Defined in

[src/svg/cubicons/Cubicon.ts:14](https://github.com/imaphatduc/cubecubed/blob/e48fd86/src/svg/cubicons/Cubicon.ts#L14)

___

### moveAngle

• **moveAngle**: `number` = `0`

The sum of all rotate angles (if invoking rotate animation).

#### Inherited from

[Geometry](/reference/classes/Geometry.md).[moveAngle](/reference/classes/Geometry.md#moveangle)

#### Defined in

[src/svg/cubicons/Cubicon.ts:36](https://github.com/imaphatduc/cubecubed/blob/e48fd86/src/svg/cubicons/Cubicon.ts#L36)

___

### moveVector

• **moveVector**: [`Vector2`](/reference/classes/Vector2.md)

The sum vector of all translate vectors (if invoking translate animation).

#### Inherited from

[Geometry](/reference/classes/Geometry.md).[moveVector](/reference/classes/Geometry.md#movevector)

#### Defined in

[src/svg/cubicons/Cubicon.ts:31](https://github.com/imaphatduc/cubecubed/blob/e48fd86/src/svg/cubicons/Cubicon.ts#L31)

___

### points

• **points**: [`Vector2`](/reference/classes/Vector2.md)[]

#### Defined in

[src/svg/cubicons/geometry/ParametricCurve.ts:18](https://github.com/imaphatduc/cubecubed/blob/e48fd86/src/svg/cubicons/geometry/ParametricCurve.ts#L18)

___

### position

• **position**: [`Vector2`](/reference/classes/Vector2.md)

Position of this cubicon.
This property changed after finishing animations (in real time).

#### Inherited from

[Geometry](/reference/classes/Geometry.md).[position](/reference/classes/Geometry.md#position)

#### Defined in

[src/svg/cubicons/Cubicon.ts:20](https://github.com/imaphatduc/cubecubed/blob/e48fd86/src/svg/cubicons/Cubicon.ts#L20)

___

### svg\_group

• **svg\_group**: `Selection`<`SVGSVGElement`, `unknown`, `HTMLElement`, `any`\>

The `<svg/>` tag of this cubicon's group.

#### Inherited from

[Geometry](/reference/classes/Geometry.md).[svg_group](/reference/classes/Geometry.md#svg_group)

#### Defined in

[src/svg/cubicons/Cubicon.ts:41](https://github.com/imaphatduc/cubecubed/blob/e48fd86/src/svg/cubicons/Cubicon.ts#L41)

___

### tRange

• **tRange**: [`number`, `number`]

#### Defined in

[src/svg/cubicons/geometry/ParametricCurve.ts:22](https://github.com/imaphatduc/cubecubed/blob/e48fd86/src/svg/cubicons/geometry/ParametricCurve.ts#L22)

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

[Geometry](/reference/classes/Geometry.md).[coordsGtoW](/reference/classes/Geometry.md#coordsgtow)

#### Defined in

[src/svg/cubicons/geometry/Geometry.ts:88](https://github.com/imaphatduc/cubecubed/blob/e48fd86/src/svg/cubicons/geometry/Geometry.ts#L88)

___

### getFirstOutputPoint

▸ **getFirstOutputPoint**(): [`Vector2`](/reference/classes/Vector2.md)

#### Returns

[`Vector2`](/reference/classes/Vector2.md)

#### Defined in

[src/svg/cubicons/geometry/ParametricCurve.ts:97](https://github.com/imaphatduc/cubecubed/blob/e48fd86/src/svg/cubicons/geometry/ParametricCurve.ts#L97)

___

### getLastOutputPoint

▸ **getLastOutputPoint**(): [`Vector2`](/reference/classes/Vector2.md)

#### Returns

[`Vector2`](/reference/classes/Vector2.md)

#### Defined in

[src/svg/cubicons/geometry/ParametricCurve.ts:101](https://github.com/imaphatduc/cubecubed/blob/e48fd86/src/svg/cubicons/geometry/ParametricCurve.ts#L101)

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

[src/svg/cubicons/geometry/ParametricCurve.ts:93](https://github.com/imaphatduc/cubecubed/blob/e48fd86/src/svg/cubicons/geometry/ParametricCurve.ts#L93)

___

### render

▸ **render**(): [`ParametricCurve`](/reference/classes/ParametricCurve.md)

#### Returns

[`ParametricCurve`](/reference/classes/ParametricCurve.md)

#### Defined in

[src/svg/cubicons/geometry/ParametricCurve.ts:66](https://github.com/imaphatduc/cubecubed/blob/e48fd86/src/svg/cubicons/geometry/ParametricCurve.ts#L66)

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

[Geometry](/reference/classes/Geometry.md).[setParentSelection](/reference/classes/Geometry.md#setparentselection)

#### Defined in

[src/svg/cubicons/Cubicon.ts:63](https://github.com/imaphatduc/cubecubed/blob/e48fd86/src/svg/cubicons/Cubicon.ts#L63)
