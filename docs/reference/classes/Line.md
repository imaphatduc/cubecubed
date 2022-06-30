[cubecubed](/reference/README.md) / [Exports](/reference/modules.md) / Line

# Class: Line

Return the barebone of a line shape.

## Hierarchy

- [`Geometry`](/reference/classes/Geometry.md)

  ↳ **`Line`**

## Constructors

### constructor

• **new Line**(`params`)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | `Object` | - |
| `params.CONFIG?` | [`LINE_CONFIG`](/reference/interfaces/LINE_CONFIG.md) | Config options of the line. |
| `params.endPoint` | [`Vector2`](/reference/classes/Vector2.md) | End point (head) of the line. |
| `params.group` | [`Group`](/reference/classes/Group.md) | The group that the line belongs to. |
| `params.startPoint?` | [`Vector2`](/reference/classes/Vector2.md) | Start point (tail) of the line. |

#### Overrides

[Geometry](/reference/classes/Geometry.md).[constructor](/reference/classes/Geometry.md#constructor)

#### Defined in

[src/svg/cubicons/geometry/Line.ts:28](https://github.com/imaphatduc/cubecubed/blob/0dc8d92/src/svg/cubicons/geometry/Line.ts#L28)

## Properties

### angle

• **angle**: `number` = `0`

The angle between this cubicon and the x axis.
This property changed after finishing animations (in real time).

#### Inherited from

[Geometry](/reference/classes/Geometry.md).[angle](/reference/classes/Geometry.md#angle)

#### Defined in

[src/svg/cubicons/Cubicon.ts:26](https://github.com/imaphatduc/cubecubed/blob/0dc8d92/src/svg/cubicons/Cubicon.ts#L26)

___

### cubType

• `Readonly` **cubType**: ``"geometry"``

#### Inherited from

[Geometry](/reference/classes/Geometry.md).[cubType](/reference/classes/Geometry.md#cubtype)

#### Defined in

[src/svg/cubicons/geometry/Geometry.ts:77](https://github.com/imaphatduc/cubecubed/blob/0dc8d92/src/svg/cubicons/geometry/Geometry.ts#L77)

___

### def\_cubiconBase

• **def\_cubiconBase**: `any`

The HTML tag that represents this cubicon.

#### Inherited from

[Geometry](/reference/classes/Geometry.md).[def_cubiconBase](/reference/classes/Geometry.md#def_cubiconbase)

#### Defined in

[src/svg/cubicons/Cubicon.ts:51](https://github.com/imaphatduc/cubecubed/blob/0dc8d92/src/svg/cubicons/Cubicon.ts#L51)

___

### endPoint

• `Readonly` **endPoint**: [`Vector2`](/reference/classes/Vector2.md)

End point (head) of the line.

#### Defined in

[src/svg/cubicons/geometry/Line.ts:24](https://github.com/imaphatduc/cubecubed/blob/0dc8d92/src/svg/cubicons/geometry/Line.ts#L24)

___

### fillColor

• **fillColor**: `any`

#### Inherited from

[Geometry](/reference/classes/Geometry.md).[fillColor](/reference/classes/Geometry.md#fillcolor)

#### Defined in

[src/svg/cubicons/geometry/Geometry.ts:82](https://github.com/imaphatduc/cubecubed/blob/0dc8d92/src/svg/cubicons/geometry/Geometry.ts#L82)

___

### fillOpacity

• **fillOpacity**: `any`

#### Inherited from

[Geometry](/reference/classes/Geometry.md).[fillOpacity](/reference/classes/Geometry.md#fillopacity)

#### Defined in

[src/svg/cubicons/geometry/Geometry.ts:83](https://github.com/imaphatduc/cubecubed/blob/0dc8d92/src/svg/cubicons/geometry/Geometry.ts#L83)

___

### g\_cubiconWrapper

• **g\_cubiconWrapper**: `any`

The `<g/>` tag that holds this cubicon.

#### Inherited from

[Geometry](/reference/classes/Geometry.md).[g_cubiconWrapper](/reference/classes/Geometry.md#g_cubiconwrapper)

#### Defined in

[src/svg/cubicons/Cubicon.ts:46](https://github.com/imaphatduc/cubecubed/blob/0dc8d92/src/svg/cubicons/Cubicon.ts#L46)

___

### geoType

• `Readonly` **geoType**: ``"line"``

Geometry type of the line.

#### Overrides

[Geometry](/reference/classes/Geometry.md).[geoType](/reference/classes/Geometry.md#geotype)

#### Defined in

[src/svg/cubicons/geometry/Line.ts:15](https://github.com/imaphatduc/cubecubed/blob/0dc8d92/src/svg/cubicons/geometry/Line.ts#L15)

___

### group

• **group**: [`Group`](/reference/classes/Group.md)

The group that this cubicon belongs to.

#### Inherited from

[Geometry](/reference/classes/Geometry.md).[group](/reference/classes/Geometry.md#group)

#### Defined in

[src/svg/cubicons/Cubicon.ts:14](https://github.com/imaphatduc/cubecubed/blob/0dc8d92/src/svg/cubicons/Cubicon.ts#L14)

___

### lineColor

• **lineColor**: `any`

#### Inherited from

[Geometry](/reference/classes/Geometry.md).[lineColor](/reference/classes/Geometry.md#linecolor)

#### Defined in

[src/svg/cubicons/geometry/Geometry.ts:88](https://github.com/imaphatduc/cubecubed/blob/0dc8d92/src/svg/cubicons/geometry/Geometry.ts#L88)

___

### lineWidth

• **lineWidth**: `any`

#### Inherited from

[Geometry](/reference/classes/Geometry.md).[lineWidth](/reference/classes/Geometry.md#linewidth)

#### Defined in

[src/svg/cubicons/geometry/Geometry.ts:89](https://github.com/imaphatduc/cubecubed/blob/0dc8d92/src/svg/cubicons/geometry/Geometry.ts#L89)

___

### moveAngle

• **moveAngle**: `number` = `0`

The sum of all rotate angles (if invoking rotate animation).

#### Inherited from

[Geometry](/reference/classes/Geometry.md).[moveAngle](/reference/classes/Geometry.md#moveangle)

#### Defined in

[src/svg/cubicons/Cubicon.ts:36](https://github.com/imaphatduc/cubecubed/blob/0dc8d92/src/svg/cubicons/Cubicon.ts#L36)

___

### moveVector

• **moveVector**: [`Vector2`](/reference/classes/Vector2.md)

The sum vector of all translate vectors (if invoking translate animation).

#### Inherited from

[Geometry](/reference/classes/Geometry.md).[moveVector](/reference/classes/Geometry.md#movevector)

#### Defined in

[src/svg/cubicons/Cubicon.ts:31](https://github.com/imaphatduc/cubecubed/blob/0dc8d92/src/svg/cubicons/Cubicon.ts#L31)

___

### position

• **position**: [`Vector2`](/reference/classes/Vector2.md)

Position of this cubicon.
This property changed after finishing animations (in real time).

#### Inherited from

[Geometry](/reference/classes/Geometry.md).[position](/reference/classes/Geometry.md#position)

#### Defined in

[src/svg/cubicons/Cubicon.ts:20](https://github.com/imaphatduc/cubecubed/blob/0dc8d92/src/svg/cubicons/Cubicon.ts#L20)

___

### startPoint

• `Readonly` **startPoint**: [`Vector2`](/reference/classes/Vector2.md)

Start point (tail) of the line.

#### Defined in

[src/svg/cubicons/geometry/Line.ts:20](https://github.com/imaphatduc/cubecubed/blob/0dc8d92/src/svg/cubicons/geometry/Line.ts#L20)

___

### strokeColor

• **strokeColor**: `any`

#### Inherited from

[Geometry](/reference/classes/Geometry.md).[strokeColor](/reference/classes/Geometry.md#strokecolor)

#### Defined in

[src/svg/cubicons/geometry/Geometry.ts:84](https://github.com/imaphatduc/cubecubed/blob/0dc8d92/src/svg/cubicons/geometry/Geometry.ts#L84)

___

### strokeWidth

• **strokeWidth**: `any`

#### Inherited from

[Geometry](/reference/classes/Geometry.md).[strokeWidth](/reference/classes/Geometry.md#strokewidth)

#### Defined in

[src/svg/cubicons/geometry/Geometry.ts:85](https://github.com/imaphatduc/cubecubed/blob/0dc8d92/src/svg/cubicons/geometry/Geometry.ts#L85)

___

### svg\_group

• **svg\_group**: `any`

The `<svg/>` tag of this cubicon's group.

#### Inherited from

[Geometry](/reference/classes/Geometry.md).[svg_group](/reference/classes/Geometry.md#svg_group)

#### Defined in

[src/svg/cubicons/Cubicon.ts:41](https://github.com/imaphatduc/cubecubed/blob/0dc8d92/src/svg/cubicons/Cubicon.ts#L41)

## Methods

### checkIfRendered

▸ **checkIfRendered**(): `void`

#### Returns

`void`

#### Inherited from

[Geometry](/reference/classes/Geometry.md).[checkIfRendered](/reference/classes/Geometry.md#checkifrendered)

#### Defined in

[src/svg/cubicons/Cubicon.ts:65](https://github.com/imaphatduc/cubecubed/blob/0dc8d92/src/svg/cubicons/Cubicon.ts#L65)

___

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

[src/svg/cubicons/geometry/Geometry.ts:98](https://github.com/imaphatduc/cubecubed/blob/0dc8d92/src/svg/cubicons/geometry/Geometry.ts#L98)

___

### getWpoint

▸ **getWpoint**(`point`): [`Vector2`](/reference/classes/Vector2.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `point` | [`Vector2`](/reference/classes/Vector2.md) |

#### Returns

[`Vector2`](/reference/classes/Vector2.md)

#### Defined in

[src/svg/cubicons/geometry/Line.ts:99](https://github.com/imaphatduc/cubecubed/blob/0dc8d92/src/svg/cubicons/geometry/Line.ts#L99)

___

### render

▸ **render**(): [`Line`](/reference/classes/Line.md)

Draw (and render) the shape of this line onto SVG.

#### Returns

[`Line`](/reference/classes/Line.md)

#### Defined in

[src/svg/cubicons/geometry/Line.ts:64](https://github.com/imaphatduc/cubecubed/blob/0dc8d92/src/svg/cubicons/geometry/Line.ts#L64)

___

### setParent

▸ **setParent**(`parent`): [`Line`](/reference/classes/Line.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `parent` | [`Geometry`](/reference/classes/Geometry.md) |

#### Returns

[`Line`](/reference/classes/Line.md)

#### Defined in

[src/svg/cubicons/geometry/Line.ts:112](https://github.com/imaphatduc/cubecubed/blob/0dc8d92/src/svg/cubicons/geometry/Line.ts#L112)

___

### setParentHTMLTag

▸ **setParentHTMLTag**(`parentGroupTag`): [`Line`](/reference/classes/Line.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `parentGroupTag` | `any` |

#### Returns

[`Line`](/reference/classes/Line.md)

#### Defined in

[src/svg/cubicons/geometry/Line.ts:103](https://github.com/imaphatduc/cubecubed/blob/0dc8d92/src/svg/cubicons/geometry/Line.ts#L103)
