[cubecubed](/wiki/README.md) / [Exports](/wiki/modules.md) / Square

# Class: Square

Return the barebone of a square shape.

## Hierarchy

- [`Rectangle`](/wiki/classes/Rectangle.md)

  ↳ **`Square`**

## Constructors

### constructor

• **new Square**(`params`)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | `Object` | An object that contains options to form the square. |
| `params.CONFIG?` | `SHAPE_CONFIG` | Config options of the square. |
| `params.group` | [`Group`](/wiki/classes/Group.md) | The group that the square belongs to. |
| `params.position?` | [`Vector2`](/wiki/classes/Vector2.md) | Position of the square. |
| `params.sideLength` | `number` | Side length of the square. |

#### Overrides

[Rectangle](/wiki/classes/Rectangle.md).[constructor](/wiki/classes/Rectangle.md#constructor)

#### Defined in

[src/cubicons/geometry.ts:345](https://github.com/imaphatduc/cubecubed/blob/26131ac/src/cubicons/geometry.ts#L345)

## Properties

### angle

• **angle**: `any`

The angle between this cubicon and the x axis.
This property changed after finishing animations (in real time).

#### Inherited from

[Rectangle](/wiki/classes/Rectangle.md).[angle](/wiki/classes/Rectangle.md#angle)

#### Defined in

[src/cubicons/cubicon.ts:22](https://github.com/imaphatduc/cubecubed/blob/26131ac/src/cubicons/cubicon.ts#L22)

___

### cubType

• `Readonly` **cubType**: ``"geometry"``

#### Inherited from

[Rectangle](/wiki/classes/Rectangle.md).[cubType](/wiki/classes/Rectangle.md#cubtype)

#### Defined in

[src/cubicons/geometry.ts:66](https://github.com/imaphatduc/cubecubed/blob/26131ac/src/cubicons/geometry.ts#L66)

___

### def\_cubiconBase

• **def\_cubiconBase**: `any`

The HTML tag that represents this cubicon.

#### Inherited from

[Rectangle](/wiki/classes/Rectangle.md).[def_cubiconBase](/wiki/classes/Rectangle.md#def_cubiconbase)

#### Defined in

[src/cubicons/cubicon.ts:44](https://github.com/imaphatduc/cubecubed/blob/26131ac/src/cubicons/cubicon.ts#L44)

___

### elapsedTime

• **elapsedTime**: `any`

Total time of all called animations (in milliseconds).

#### Inherited from

[Rectangle](/wiki/classes/Rectangle.md).[elapsedTime](/wiki/classes/Rectangle.md#elapsedtime)

#### Defined in

[src/cubicons/cubicon.ts:49](https://github.com/imaphatduc/cubecubed/blob/26131ac/src/cubicons/cubicon.ts#L49)

___

### fillColor

• **fillColor**: `any`

#### Inherited from

[Rectangle](/wiki/classes/Rectangle.md).[fillColor](/wiki/classes/Rectangle.md#fillcolor)

#### Defined in

[src/cubicons/geometry.ts:70](https://github.com/imaphatduc/cubecubed/blob/26131ac/src/cubicons/geometry.ts#L70)

___

### fillOpacity

• **fillOpacity**: `any`

#### Inherited from

[Rectangle](/wiki/classes/Rectangle.md).[fillOpacity](/wiki/classes/Rectangle.md#fillopacity)

#### Defined in

[src/cubicons/geometry.ts:71](https://github.com/imaphatduc/cubecubed/blob/26131ac/src/cubicons/geometry.ts#L71)

___

### g\_cubiconWrapper

• **g\_cubiconWrapper**: `any`

The `<g/>` tag that holds this cubicon.

#### Inherited from

[Rectangle](/wiki/classes/Rectangle.md).[g_cubiconWrapper](/wiki/classes/Rectangle.md#g_cubiconwrapper)

#### Defined in

[src/cubicons/cubicon.ts:40](https://github.com/imaphatduc/cubecubed/blob/26131ac/src/cubicons/cubicon.ts#L40)

___

### geoType

• `Readonly` **geoType**: ``"rectangle"``

Geometry type of the rectangle.

#### Inherited from

[Rectangle](/wiki/classes/Rectangle.md).[geoType](/wiki/classes/Rectangle.md#geotype)

#### Defined in

[src/cubicons/geometry.ts:103](https://github.com/imaphatduc/cubecubed/blob/26131ac/src/cubicons/geometry.ts#L103)

___

### group

• **group**: [`Group`](/wiki/classes/Group.md)

The group that this cubicon belongs to.

#### Inherited from

[Rectangle](/wiki/classes/Rectangle.md).[group](/wiki/classes/Rectangle.md#group)

#### Defined in

[src/cubicons/cubicon.ts:12](https://github.com/imaphatduc/cubecubed/blob/26131ac/src/cubicons/cubicon.ts#L12)

___

### height

• `Readonly` **height**: `number`

Height of the rectangle (in grid coordinate system).

**`internal`**

#### Inherited from

[Rectangle](/wiki/classes/Rectangle.md).[height](/wiki/classes/Rectangle.md#height)

#### Defined in

[src/cubicons/geometry.ts:114](https://github.com/imaphatduc/cubecubed/blob/26131ac/src/cubicons/geometry.ts#L114)

___

### isRendered

• **isRendered**: `boolean` = `false`

#### Inherited from

[Rectangle](/wiki/classes/Rectangle.md).[isRendered](/wiki/classes/Rectangle.md#isrendered)

#### Defined in

[src/cubicons/cubicon.ts:51](https://github.com/imaphatduc/cubecubed/blob/26131ac/src/cubicons/cubicon.ts#L51)

___

### lineColor

• **lineColor**: `any`

#### Inherited from

[Rectangle](/wiki/classes/Rectangle.md).[lineColor](/wiki/classes/Rectangle.md#linecolor)

#### Defined in

[src/cubicons/geometry.ts:76](https://github.com/imaphatduc/cubecubed/blob/26131ac/src/cubicons/geometry.ts#L76)

___

### lineWidth

• **lineWidth**: `any`

#### Inherited from

[Rectangle](/wiki/classes/Rectangle.md).[lineWidth](/wiki/classes/Rectangle.md#linewidth)

#### Defined in

[src/cubicons/geometry.ts:77](https://github.com/imaphatduc/cubecubed/blob/26131ac/src/cubicons/geometry.ts#L77)

___

### moveAngle

• **moveAngle**: `any`

The sum of all rotate angles (if invoking rotate animation).

#### Inherited from

[Rectangle](/wiki/classes/Rectangle.md).[moveAngle](/wiki/classes/Rectangle.md#moveangle)

#### Defined in

[src/cubicons/cubicon.ts:31](https://github.com/imaphatduc/cubecubed/blob/26131ac/src/cubicons/cubicon.ts#L31)

___

### moveVector

• **moveVector**: `any`

The sum vector of all translate vectors (if invoking translate animation).

#### Inherited from

[Rectangle](/wiki/classes/Rectangle.md).[moveVector](/wiki/classes/Rectangle.md#movevector)

#### Defined in

[src/cubicons/cubicon.ts:27](https://github.com/imaphatduc/cubecubed/blob/26131ac/src/cubicons/cubicon.ts#L27)

___

### position

• **position**: [`Vector2`](/wiki/classes/Vector2.md)

Position of this cubicon.
This property changed after finishing animations (in real time).

#### Inherited from

[Rectangle](/wiki/classes/Rectangle.md).[position](/wiki/classes/Rectangle.md#position)

#### Defined in

[src/cubicons/cubicon.ts:17](https://github.com/imaphatduc/cubecubed/blob/26131ac/src/cubicons/cubicon.ts#L17)

___

### strokeColor

• **strokeColor**: `any`

#### Inherited from

[Rectangle](/wiki/classes/Rectangle.md).[strokeColor](/wiki/classes/Rectangle.md#strokecolor)

#### Defined in

[src/cubicons/geometry.ts:72](https://github.com/imaphatduc/cubecubed/blob/26131ac/src/cubicons/geometry.ts#L72)

___

### strokeWidth

• **strokeWidth**: `any`

#### Inherited from

[Rectangle](/wiki/classes/Rectangle.md).[strokeWidth](/wiki/classes/Rectangle.md#strokewidth)

#### Defined in

[src/cubicons/geometry.ts:73](https://github.com/imaphatduc/cubecubed/blob/26131ac/src/cubicons/geometry.ts#L73)

___

### svg\_group

• **svg\_group**: `any`

The `<svg/>` tag of this cubicon's group.

#### Inherited from

[Rectangle](/wiki/classes/Rectangle.md).[svg_group](/wiki/classes/Rectangle.md#svg_group)

#### Defined in

[src/cubicons/cubicon.ts:36](https://github.com/imaphatduc/cubecubed/blob/26131ac/src/cubicons/cubicon.ts#L36)

___

### width

• `Readonly` **width**: `number`

Width of the rectangle (in grid coordinate system).

#### Inherited from

[Rectangle](/wiki/classes/Rectangle.md).[width](/wiki/classes/Rectangle.md#width)

#### Defined in

[src/cubicons/geometry.ts:108](https://github.com/imaphatduc/cubecubed/blob/26131ac/src/cubicons/geometry.ts#L108)

## Methods

### checkIfRendered

▸ **checkIfRendered**(): `void`

#### Returns

`void`

#### Inherited from

[Rectangle](/wiki/classes/Rectangle.md).[checkIfRendered](/wiki/classes/Rectangle.md#checkifrendered)

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

[Rectangle](/wiki/classes/Rectangle.md).[coordsGtoW](/wiki/classes/Rectangle.md#coordsgtow)

#### Defined in

[src/cubicons/geometry.ts:91](https://github.com/imaphatduc/cubecubed/blob/26131ac/src/cubicons/geometry.ts#L91)

___

### drawInnerGrid

▸ **drawInnerGrid**(): `RECT_GRID_DATA`

Draw a grid inside the rectangle.

#### Returns

`RECT_GRID_DATA`

A complex data type to specify in DrawInnerGrid() animation.

#### Inherited from

[Rectangle](/wiki/classes/Rectangle.md).[drawInnerGrid](/wiki/classes/Rectangle.md#drawinnergrid)

#### Defined in

[src/cubicons/geometry.ts:287](https://github.com/imaphatduc/cubecubed/blob/26131ac/src/cubicons/geometry.ts#L287)

___

### pointToSides

▸ **pointToSides**(`ptPositions`, `direction`): `PT_TO_SIDES_DATA`

Add lines from the specified point to the rectangle's sides based on x and y directions.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ptPositions` | [`Vector2`](/wiki/classes/Vector2.md)[] | Position of the point. |
| `direction` | [`number`, `number`] | An array that includes two direction values. If positive (+), then the line moves right (or up), and left (or down) for negative (-).  - *Example*: `pointToSides(new Vector2(0, 0), [-1, 1])` will draw two lines from point (0, 0) to the rectangle's sides by two directions:   negatively parallel to x axis (left) and positively parallel to y axis (up). |

#### Returns

`PT_TO_SIDES_DATA`

A complex data type to specify in PointToSides() animation.

#### Inherited from

[Rectangle](/wiki/classes/Rectangle.md).[pointToSides](/wiki/classes/Rectangle.md#pointtosides)

#### Defined in

[src/cubicons/geometry.ts:221](https://github.com/imaphatduc/cubecubed/blob/26131ac/src/cubicons/geometry.ts#L221)

___

### render

▸ **render**(): [`Square`](/wiki/classes/Square.md)

Add the shape of this rectangle onto SVG.

#### Returns

[`Square`](/wiki/classes/Square.md)

#### Inherited from

[Rectangle](/wiki/classes/Rectangle.md).[render](/wiki/classes/Rectangle.md#render)

#### Defined in

[src/cubicons/geometry.ts:158](https://github.com/imaphatduc/cubecubed/blob/26131ac/src/cubicons/geometry.ts#L158)
