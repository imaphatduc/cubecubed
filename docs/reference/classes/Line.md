[cubecubed](/wiki/README.md) / [Exports](/wiki/modules.md) / Line

# Class: Line

Return the barebone of a line shape.

## Hierarchy

- `Geometry`

  ↳ **`Line`**

## Constructors

### constructor

• **new Line**(`params`)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | `Object` | - |
| `params.CONFIG?` | `LINE_CONFIG` | Config options of the line. |
| `params.endPoint` | [`Vector2`](/wiki/classes/Vector2.md) | End point (head) of the line. |
| `params.group` | [`Group`](/wiki/classes/Group.md) | The group that the line belongs to. |
| `params.startPoint?` | [`Vector2`](/wiki/classes/Vector2.md) | Start point (tail) of the line. |

#### Overrides

Geometry.constructor

#### Defined in

[src/cubicons/geometry.ts:497](https://github.com/imaphatduc/cubecubed/blob/26131ac/src/cubicons/geometry.ts#L497)

## Properties

### angle

• **angle**: `any`

The angle between this cubicon and the x axis.
This property changed after finishing animations (in real time).

#### Inherited from

Geometry.angle

#### Defined in

[src/cubicons/cubicon.ts:22](https://github.com/imaphatduc/cubecubed/blob/26131ac/src/cubicons/cubicon.ts#L22)

___

### cubType

• `Readonly` **cubType**: ``"geometry"``

#### Inherited from

Geometry.cubType

#### Defined in

[src/cubicons/geometry.ts:66](https://github.com/imaphatduc/cubecubed/blob/26131ac/src/cubicons/geometry.ts#L66)

___

### def\_cubiconBase

• **def\_cubiconBase**: `any`

The HTML tag that represents this cubicon.

#### Inherited from

Geometry.def\_cubiconBase

#### Defined in

[src/cubicons/cubicon.ts:44](https://github.com/imaphatduc/cubecubed/blob/26131ac/src/cubicons/cubicon.ts#L44)

___

### elapsedTime

• **elapsedTime**: `any`

Total time of all called animations (in milliseconds).

#### Inherited from

Geometry.elapsedTime

#### Defined in

[src/cubicons/cubicon.ts:49](https://github.com/imaphatduc/cubecubed/blob/26131ac/src/cubicons/cubicon.ts#L49)

___

### endPoint

• `Readonly` **endPoint**: [`Vector2`](/wiki/classes/Vector2.md)

End point (head) of the line.

#### Defined in

[src/cubicons/geometry.ts:493](https://github.com/imaphatduc/cubecubed/blob/26131ac/src/cubicons/geometry.ts#L493)

___

### fillColor

• **fillColor**: `any`

#### Inherited from

Geometry.fillColor

#### Defined in

[src/cubicons/geometry.ts:70](https://github.com/imaphatduc/cubecubed/blob/26131ac/src/cubicons/geometry.ts#L70)

___

### fillOpacity

• **fillOpacity**: `any`

#### Inherited from

Geometry.fillOpacity

#### Defined in

[src/cubicons/geometry.ts:71](https://github.com/imaphatduc/cubecubed/blob/26131ac/src/cubicons/geometry.ts#L71)

___

### g\_cubiconWrapper

• **g\_cubiconWrapper**: `any`

The `<g/>` tag that holds this cubicon.

#### Inherited from

Geometry.g\_cubiconWrapper

#### Defined in

[src/cubicons/cubicon.ts:40](https://github.com/imaphatduc/cubecubed/blob/26131ac/src/cubicons/cubicon.ts#L40)

___

### geoType

• `Readonly` **geoType**: ``"line"``

Geometry type of the line.

#### Overrides

Geometry.geoType

#### Defined in

[src/cubicons/geometry.ts:484](https://github.com/imaphatduc/cubecubed/blob/26131ac/src/cubicons/geometry.ts#L484)

___

### group

• **group**: [`Group`](/wiki/classes/Group.md)

The group that this cubicon belongs to.

#### Inherited from

Geometry.group

#### Defined in

[src/cubicons/cubicon.ts:12](https://github.com/imaphatduc/cubecubed/blob/26131ac/src/cubicons/cubicon.ts#L12)

___

### isRendered

• **isRendered**: `boolean` = `false`

#### Inherited from

Geometry.isRendered

#### Defined in

[src/cubicons/cubicon.ts:51](https://github.com/imaphatduc/cubecubed/blob/26131ac/src/cubicons/cubicon.ts#L51)

___

### lineColor

• **lineColor**: `any`

#### Inherited from

Geometry.lineColor

#### Defined in

[src/cubicons/geometry.ts:76](https://github.com/imaphatduc/cubecubed/blob/26131ac/src/cubicons/geometry.ts#L76)

___

### lineWidth

• **lineWidth**: `any`

#### Inherited from

Geometry.lineWidth

#### Defined in

[src/cubicons/geometry.ts:77](https://github.com/imaphatduc/cubecubed/blob/26131ac/src/cubicons/geometry.ts#L77)

___

### moveAngle

• **moveAngle**: `any`

The sum of all rotate angles (if invoking rotate animation).

#### Inherited from

Geometry.moveAngle

#### Defined in

[src/cubicons/cubicon.ts:31](https://github.com/imaphatduc/cubecubed/blob/26131ac/src/cubicons/cubicon.ts#L31)

___

### moveVector

• **moveVector**: `any`

The sum vector of all translate vectors (if invoking translate animation).

#### Inherited from

Geometry.moveVector

#### Defined in

[src/cubicons/cubicon.ts:27](https://github.com/imaphatduc/cubecubed/blob/26131ac/src/cubicons/cubicon.ts#L27)

___

### position

• **position**: [`Vector2`](/wiki/classes/Vector2.md)

Position of this cubicon.
This property changed after finishing animations (in real time).

#### Inherited from

Geometry.position

#### Defined in

[src/cubicons/cubicon.ts:17](https://github.com/imaphatduc/cubecubed/blob/26131ac/src/cubicons/cubicon.ts#L17)

___

### startPoint

• `Readonly` **startPoint**: [`Vector2`](/wiki/classes/Vector2.md)

Start point (tail) of the line.

#### Defined in

[src/cubicons/geometry.ts:489](https://github.com/imaphatduc/cubecubed/blob/26131ac/src/cubicons/geometry.ts#L489)

___

### strokeColor

• **strokeColor**: `any`

#### Inherited from

Geometry.strokeColor

#### Defined in

[src/cubicons/geometry.ts:72](https://github.com/imaphatduc/cubecubed/blob/26131ac/src/cubicons/geometry.ts#L72)

___

### strokeWidth

• **strokeWidth**: `any`

#### Inherited from

Geometry.strokeWidth

#### Defined in

[src/cubicons/geometry.ts:73](https://github.com/imaphatduc/cubecubed/blob/26131ac/src/cubicons/geometry.ts#L73)

___

### svg\_group

• **svg\_group**: `any`

The `<svg/>` tag of this cubicon's group.

#### Inherited from

Geometry.svg\_group

#### Defined in

[src/cubicons/cubicon.ts:36](https://github.com/imaphatduc/cubecubed/blob/26131ac/src/cubicons/cubicon.ts#L36)

## Methods

### checkIfRendered

▸ **checkIfRendered**(): `void`

#### Returns

`void`

#### Inherited from

Geometry.checkIfRendered

#### Defined in

[src/cubicons/cubicon.ts:84](https://github.com/imaphatduc/cubecubed/blob/26131ac/src/cubicons/cubicon.ts#L84)

___

### coordsGtoW

▸ **coordsGtoW**(`point`): [`Vector2`](/wiki/classes/Vector2.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `point` | [`Vector2`](/wiki/classes/Vector2.md) |

#### Returns

[`Vector2`](/wiki/classes/Vector2.md)

#### Inherited from

Geometry.coordsGtoW

#### Defined in

[src/cubicons/geometry.ts:91](https://github.com/imaphatduc/cubecubed/blob/26131ac/src/cubicons/geometry.ts#L91)

___

### getWpoint

▸ **getWpoint**(`point`): [`Vector2`](/wiki/classes/Vector2.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `point` | [`Vector2`](/wiki/classes/Vector2.md) |

#### Returns

[`Vector2`](/wiki/classes/Vector2.md)

#### Defined in

[src/cubicons/geometry.ts:568](https://github.com/imaphatduc/cubecubed/blob/26131ac/src/cubicons/geometry.ts#L568)

___

### render

▸ **render**(): [`Line`](/wiki/classes/Line.md)

Draw (and render) the shape of this line onto SVG.

#### Returns

[`Line`](/wiki/classes/Line.md)

#### Defined in

[src/cubicons/geometry.ts:533](https://github.com/imaphatduc/cubecubed/blob/26131ac/src/cubicons/geometry.ts#L533)

___

### setParent

▸ **setParent**(`parent`): [`Line`](/wiki/classes/Line.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `parent` | `Geometry` |

#### Returns

[`Line`](/wiki/classes/Line.md)

#### Defined in

[src/cubicons/geometry.ts:581](https://github.com/imaphatduc/cubecubed/blob/26131ac/src/cubicons/geometry.ts#L581)

___

### setParentHTMLTag

▸ **setParentHTMLTag**(`parentGroupTag`): [`Line`](/wiki/classes/Line.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `parentGroupTag` | `any` |

#### Returns

[`Line`](/wiki/classes/Line.md)

#### Defined in

[src/cubicons/geometry.ts:572](https://github.com/imaphatduc/cubecubed/blob/26131ac/src/cubicons/geometry.ts#L572)
