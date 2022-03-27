[cubecubed](/reference/README.md) / [Exports](/reference/modules.md) / Square

# Class: Square

Return the barebone of a square shape.

## Hierarchy

- [`Rectangle`](/reference/classes/Rectangle.md)

  ↳ **`Square`**

## Constructors

### constructor

• **new Square**(`params`)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | `Object` | An object that contains options to form the square. |
| `params.CONFIG?` | `SHAPE_CONFIG` | Config options of the square. |
| `params.group` | [`Group`](/reference/classes/Group.md) | The group that the square belongs to. |
| `params.position?` | [`Vector2`](/reference/classes/Vector2.md) | Position of the square. |
| `params.sideLength` | `number` | Side length of the square. |

#### Overrides

[Rectangle](/reference/classes/Rectangle.md).[constructor](/reference/classes/Rectangle.md#constructor)

#### Defined in

[src/svg/cubicons/geometry/Square.ts:17](https://github.com/imaphatduc/cubecubed/blob/1251e31/src/svg/cubicons/geometry/Square.ts#L17)

## Properties

### angle

• **angle**: `number` = `0`

The angle between this cubicon and the x axis.
This property changed after finishing animations (in real time).

#### Inherited from

[Rectangle](/reference/classes/Rectangle.md).[angle](/reference/classes/Rectangle.md#angle)

#### Defined in

[src/svg/cubicons/Cubicon.ts:26](https://github.com/imaphatduc/cubecubed/blob/1251e31/src/svg/cubicons/Cubicon.ts#L26)

___

### cubType

• `Readonly` **cubType**: ``"geometry"``

#### Inherited from

[Rectangle](/reference/classes/Rectangle.md).[cubType](/reference/classes/Rectangle.md#cubtype)

#### Defined in

[src/svg/cubicons/geometry/Geometry.ts:77](https://github.com/imaphatduc/cubecubed/blob/1251e31/src/svg/cubicons/geometry/Geometry.ts#L77)

___

### def\_cubiconBase

• **def\_cubiconBase**: `any`

The HTML tag that represents this cubicon.

#### Inherited from

[Rectangle](/reference/classes/Rectangle.md).[def_cubiconBase](/reference/classes/Rectangle.md#def_cubiconbase)

#### Defined in

[src/svg/cubicons/Cubicon.ts:51](https://github.com/imaphatduc/cubecubed/blob/1251e31/src/svg/cubicons/Cubicon.ts#L51)

___

### elapsedTime

• **elapsedTime**: `number` = `0`

Total time of all called animations (in milliseconds).

#### Inherited from

[Rectangle](/reference/classes/Rectangle.md).[elapsedTime](/reference/classes/Rectangle.md#elapsedtime)

#### Defined in

[src/svg/cubicons/Cubicon.ts:56](https://github.com/imaphatduc/cubecubed/blob/1251e31/src/svg/cubicons/Cubicon.ts#L56)

___

### fillColor

• **fillColor**: `any`

#### Inherited from

[Rectangle](/reference/classes/Rectangle.md).[fillColor](/reference/classes/Rectangle.md#fillcolor)

#### Defined in

[src/svg/cubicons/geometry/Geometry.ts:82](https://github.com/imaphatduc/cubecubed/blob/1251e31/src/svg/cubicons/geometry/Geometry.ts#L82)

___

### fillOpacity

• **fillOpacity**: `any`

#### Inherited from

[Rectangle](/reference/classes/Rectangle.md).[fillOpacity](/reference/classes/Rectangle.md#fillopacity)

#### Defined in

[src/svg/cubicons/geometry/Geometry.ts:83](https://github.com/imaphatduc/cubecubed/blob/1251e31/src/svg/cubicons/geometry/Geometry.ts#L83)

___

### g\_cubiconWrapper

• **g\_cubiconWrapper**: `any`

The `<g/>` tag that holds this cubicon.

#### Inherited from

[Rectangle](/reference/classes/Rectangle.md).[g_cubiconWrapper](/reference/classes/Rectangle.md#g_cubiconwrapper)

#### Defined in

[src/svg/cubicons/Cubicon.ts:46](https://github.com/imaphatduc/cubecubed/blob/1251e31/src/svg/cubicons/Cubicon.ts#L46)

___

### geoType

• `Readonly` **geoType**: ``"rectangle"``

Geometry type of the rectangle.

#### Inherited from

[Rectangle](/reference/classes/Rectangle.md).[geoType](/reference/classes/Rectangle.md#geotype)

#### Defined in

[src/svg/cubicons/geometry/Rectangle.ts:21](https://github.com/imaphatduc/cubecubed/blob/1251e31/src/svg/cubicons/geometry/Rectangle.ts#L21)

___

### group

• **group**: [`Group`](/reference/classes/Group.md)

The group that this cubicon belongs to.

#### Inherited from

[Rectangle](/reference/classes/Rectangle.md).[group](/reference/classes/Rectangle.md#group)

#### Defined in

[src/svg/cubicons/Cubicon.ts:14](https://github.com/imaphatduc/cubecubed/blob/1251e31/src/svg/cubicons/Cubicon.ts#L14)

___

### height

• `Readonly` **height**: `number`

Height of the rectangle (in grid coordinate system).

**`internal`**

#### Inherited from

[Rectangle](/reference/classes/Rectangle.md).[height](/reference/classes/Rectangle.md#height)

#### Defined in

[src/svg/cubicons/geometry/Rectangle.ts:32](https://github.com/imaphatduc/cubecubed/blob/1251e31/src/svg/cubicons/geometry/Rectangle.ts#L32)

___

### isRendered

• **isRendered**: `boolean` = `false`

#### Inherited from

[Rectangle](/reference/classes/Rectangle.md).[isRendered](/reference/classes/Rectangle.md#isrendered)

#### Defined in

[src/svg/cubicons/Cubicon.ts:58](https://github.com/imaphatduc/cubecubed/blob/1251e31/src/svg/cubicons/Cubicon.ts#L58)

___

### lineColor

• **lineColor**: `any`

#### Inherited from

[Rectangle](/reference/classes/Rectangle.md).[lineColor](/reference/classes/Rectangle.md#linecolor)

#### Defined in

[src/svg/cubicons/geometry/Geometry.ts:88](https://github.com/imaphatduc/cubecubed/blob/1251e31/src/svg/cubicons/geometry/Geometry.ts#L88)

___

### lineWidth

• **lineWidth**: `any`

#### Inherited from

[Rectangle](/reference/classes/Rectangle.md).[lineWidth](/reference/classes/Rectangle.md#linewidth)

#### Defined in

[src/svg/cubicons/geometry/Geometry.ts:89](https://github.com/imaphatduc/cubecubed/blob/1251e31/src/svg/cubicons/geometry/Geometry.ts#L89)

___

### moveAngle

• **moveAngle**: `number` = `0`

The sum of all rotate angles (if invoking rotate animation).

#### Inherited from

[Rectangle](/reference/classes/Rectangle.md).[moveAngle](/reference/classes/Rectangle.md#moveangle)

#### Defined in

[src/svg/cubicons/Cubicon.ts:36](https://github.com/imaphatduc/cubecubed/blob/1251e31/src/svg/cubicons/Cubicon.ts#L36)

___

### moveVector

• **moveVector**: [`Vector2`](/reference/classes/Vector2.md)

The sum vector of all translate vectors (if invoking translate animation).

#### Inherited from

[Rectangle](/reference/classes/Rectangle.md).[moveVector](/reference/classes/Rectangle.md#movevector)

#### Defined in

[src/svg/cubicons/Cubicon.ts:31](https://github.com/imaphatduc/cubecubed/blob/1251e31/src/svg/cubicons/Cubicon.ts#L31)

___

### position

• **position**: [`Vector2`](/reference/classes/Vector2.md)

Position of this cubicon.
This property changed after finishing animations (in real time).

#### Inherited from

[Rectangle](/reference/classes/Rectangle.md).[position](/reference/classes/Rectangle.md#position)

#### Defined in

[src/svg/cubicons/Cubicon.ts:20](https://github.com/imaphatduc/cubecubed/blob/1251e31/src/svg/cubicons/Cubicon.ts#L20)

___

### sideLength

• `Readonly` **sideLength**: `number`

#### Defined in

[src/svg/cubicons/geometry/Square.ts:12](https://github.com/imaphatduc/cubecubed/blob/1251e31/src/svg/cubicons/geometry/Square.ts#L12)

___

### strokeColor

• **strokeColor**: `any`

#### Inherited from

[Rectangle](/reference/classes/Rectangle.md).[strokeColor](/reference/classes/Rectangle.md#strokecolor)

#### Defined in

[src/svg/cubicons/geometry/Geometry.ts:84](https://github.com/imaphatduc/cubecubed/blob/1251e31/src/svg/cubicons/geometry/Geometry.ts#L84)

___

### strokeWidth

• **strokeWidth**: `any`

#### Inherited from

[Rectangle](/reference/classes/Rectangle.md).[strokeWidth](/reference/classes/Rectangle.md#strokewidth)

#### Defined in

[src/svg/cubicons/geometry/Geometry.ts:85](https://github.com/imaphatduc/cubecubed/blob/1251e31/src/svg/cubicons/geometry/Geometry.ts#L85)

___

### svg\_group

• **svg\_group**: `any`

The `<svg/>` tag of this cubicon's group.

#### Inherited from

[Rectangle](/reference/classes/Rectangle.md).[svg_group](/reference/classes/Rectangle.md#svg_group)

#### Defined in

[src/svg/cubicons/Cubicon.ts:41](https://github.com/imaphatduc/cubecubed/blob/1251e31/src/svg/cubicons/Cubicon.ts#L41)

___

### width

• `Readonly` **width**: `number`

Width of the rectangle (in grid coordinate system).

#### Inherited from

[Rectangle](/reference/classes/Rectangle.md).[width](/reference/classes/Rectangle.md#width)

#### Defined in

[src/svg/cubicons/geometry/Rectangle.ts:26](https://github.com/imaphatduc/cubecubed/blob/1251e31/src/svg/cubicons/geometry/Rectangle.ts#L26)

## Methods

### checkIfRendered

▸ **checkIfRendered**(): `void`

#### Returns

`void`

#### Inherited from

[Rectangle](/reference/classes/Rectangle.md).[checkIfRendered](/reference/classes/Rectangle.md#checkifrendered)

#### Defined in

[src/svg/cubicons/Cubicon.ts:78](https://github.com/imaphatduc/cubecubed/blob/1251e31/src/svg/cubicons/Cubicon.ts#L78)

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

[Rectangle](/reference/classes/Rectangle.md).[coordsGtoW](/reference/classes/Rectangle.md#coordsgtow)

#### Defined in

[src/svg/cubicons/geometry/Geometry.ts:103](https://github.com/imaphatduc/cubecubed/blob/1251e31/src/svg/cubicons/geometry/Geometry.ts#L103)

___

### drawInnerGrid

▸ **drawInnerGrid**(): `RECT_GRID_DATA`

Draw a grid inside the rectangle.

#### Returns

`RECT_GRID_DATA`

A complex data type to specify in DrawInnerGrid() animation.

#### Inherited from

[Rectangle](/reference/classes/Rectangle.md).[drawInnerGrid](/reference/classes/Rectangle.md#drawinnergrid)

#### Defined in

[src/svg/cubicons/geometry/Rectangle.ts:133](https://github.com/imaphatduc/cubecubed/blob/1251e31/src/svg/cubicons/geometry/Rectangle.ts#L133)

___

### render

▸ **render**(): [`Square`](/reference/classes/Square.md)

Add the shape of this rectangle onto SVG.

#### Returns

[`Square`](/reference/classes/Square.md)

#### Inherited from

[Rectangle](/reference/classes/Rectangle.md).[render](/reference/classes/Rectangle.md#render)

#### Defined in

[src/svg/cubicons/geometry/Rectangle.ts:76](https://github.com/imaphatduc/cubecubed/blob/1251e31/src/svg/cubicons/geometry/Rectangle.ts#L76)
