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
| `params.CONFIG?` | [`SHAPE_CONFIG`](/reference/interfaces/SHAPE_CONFIG.md) | Config options of the square. |
| `params.group` | [`Group`](/reference/classes/Group.md) | The group that the square belongs to. |
| `params.position?` | [`Vector2`](/reference/classes/Vector2.md) | Position of the square. |
| `params.sideLength` | `number` | Side length of the square. |

#### Overrides

[Rectangle](/reference/classes/Rectangle.md).[constructor](/reference/classes/Rectangle.md#constructor)

#### Defined in

[src/svg/cubicons/geometry/Square.ts:17](https://github.com/imaphatduc/cubecubed/blob/e48fd86/src/svg/cubicons/geometry/Square.ts#L17)

## Properties

### CONFIG

• **CONFIG**: [`SHAPE_CONFIG`](/reference/interfaces/SHAPE_CONFIG.md)

Config options of this rectangle.

#### Inherited from

[Rectangle](/reference/classes/Rectangle.md).[CONFIG](/reference/classes/Rectangle.md#config)

#### Defined in

[src/svg/cubicons/geometry/Rectangle.ts:46](https://github.com/imaphatduc/cubecubed/blob/e48fd86/src/svg/cubicons/geometry/Rectangle.ts#L46)

___

### angle

• **angle**: `number` = `0`

The angle between this cubicon and the x axis.
This property changed after finishing animations (in real time).

#### Inherited from

[Rectangle](/reference/classes/Rectangle.md).[angle](/reference/classes/Rectangle.md#angle)

#### Defined in

[src/svg/cubicons/Cubicon.ts:26](https://github.com/imaphatduc/cubecubed/blob/e48fd86/src/svg/cubicons/Cubicon.ts#L26)

___

### cubType

• `Readonly` **cubType**: ``"geometry"``

#### Inherited from

[Rectangle](/reference/classes/Rectangle.md).[cubType](/reference/classes/Rectangle.md#cubtype)

#### Defined in

[src/svg/cubicons/geometry/Geometry.ts:77](https://github.com/imaphatduc/cubecubed/blob/e48fd86/src/svg/cubicons/geometry/Geometry.ts#L77)

___

### def\_cubiconBase

• **def\_cubiconBase**: `Selection`<`any`, `unknown`, `HTMLElement`, `any`\>

The HTML tag that represents this cubicon.

#### Inherited from

[Rectangle](/reference/classes/Rectangle.md).[def_cubiconBase](/reference/classes/Rectangle.md#def_cubiconbase)

#### Defined in

[src/svg/cubicons/Cubicon.ts:51](https://github.com/imaphatduc/cubecubed/blob/e48fd86/src/svg/cubicons/Cubicon.ts#L51)

___

### g\_cubiconWrapper

• **g\_cubiconWrapper**: `Selection`<`SVGGElement`, `unknown`, `HTMLElement`, `any`\>

The `<g/>` tag that holds this cubicon.

#### Inherited from

[Rectangle](/reference/classes/Rectangle.md).[g_cubiconWrapper](/reference/classes/Rectangle.md#g_cubiconwrapper)

#### Defined in

[src/svg/cubicons/Cubicon.ts:46](https://github.com/imaphatduc/cubecubed/blob/e48fd86/src/svg/cubicons/Cubicon.ts#L46)

___

### geoType

• `Readonly` **geoType**: ``"rectangle"``

Geometry type of the rectangle.

#### Inherited from

[Rectangle](/reference/classes/Rectangle.md).[geoType](/reference/classes/Rectangle.md#geotype)

#### Defined in

[src/svg/cubicons/geometry/Rectangle.ts:32](https://github.com/imaphatduc/cubecubed/blob/e48fd86/src/svg/cubicons/geometry/Rectangle.ts#L32)

___

### group

• **group**: [`Group`](/reference/classes/Group.md)

The group that this cubicon belongs to.

#### Inherited from

[Rectangle](/reference/classes/Rectangle.md).[group](/reference/classes/Rectangle.md#group)

#### Defined in

[src/svg/cubicons/Cubicon.ts:14](https://github.com/imaphatduc/cubecubed/blob/e48fd86/src/svg/cubicons/Cubicon.ts#L14)

___

### height

• `Readonly` **height**: `number`

Height of the rectangle (in grid coordinate system).

#### Inherited from

[Rectangle](/reference/classes/Rectangle.md).[height](/reference/classes/Rectangle.md#height)

#### Defined in

[src/svg/cubicons/geometry/Rectangle.ts:41](https://github.com/imaphatduc/cubecubed/blob/e48fd86/src/svg/cubicons/geometry/Rectangle.ts#L41)

___

### moveAngle

• **moveAngle**: `number` = `0`

The sum of all rotate angles (if invoking rotate animation).

#### Inherited from

[Rectangle](/reference/classes/Rectangle.md).[moveAngle](/reference/classes/Rectangle.md#moveangle)

#### Defined in

[src/svg/cubicons/Cubicon.ts:36](https://github.com/imaphatduc/cubecubed/blob/e48fd86/src/svg/cubicons/Cubicon.ts#L36)

___

### moveVector

• **moveVector**: [`Vector2`](/reference/classes/Vector2.md)

The sum vector of all translate vectors (if invoking translate animation).

#### Inherited from

[Rectangle](/reference/classes/Rectangle.md).[moveVector](/reference/classes/Rectangle.md#movevector)

#### Defined in

[src/svg/cubicons/Cubicon.ts:31](https://github.com/imaphatduc/cubecubed/blob/e48fd86/src/svg/cubicons/Cubicon.ts#L31)

___

### position

• **position**: [`Vector2`](/reference/classes/Vector2.md)

Position of this cubicon.
This property changed after finishing animations (in real time).

#### Inherited from

[Rectangle](/reference/classes/Rectangle.md).[position](/reference/classes/Rectangle.md#position)

#### Defined in

[src/svg/cubicons/Cubicon.ts:20](https://github.com/imaphatduc/cubecubed/blob/e48fd86/src/svg/cubicons/Cubicon.ts#L20)

___

### sideLength

• `Readonly` **sideLength**: `number`

#### Defined in

[src/svg/cubicons/geometry/Square.ts:12](https://github.com/imaphatduc/cubecubed/blob/e48fd86/src/svg/cubicons/geometry/Square.ts#L12)

___

### svg\_group

• **svg\_group**: `Selection`<`SVGSVGElement`, `unknown`, `HTMLElement`, `any`\>

The `<svg/>` tag of this cubicon's group.

#### Inherited from

[Rectangle](/reference/classes/Rectangle.md).[svg_group](/reference/classes/Rectangle.md#svg_group)

#### Defined in

[src/svg/cubicons/Cubicon.ts:41](https://github.com/imaphatduc/cubecubed/blob/e48fd86/src/svg/cubicons/Cubicon.ts#L41)

___

### width

• `Readonly` **width**: `number`

Width of the rectangle (in grid coordinate system).

#### Inherited from

[Rectangle](/reference/classes/Rectangle.md).[width](/reference/classes/Rectangle.md#width)

#### Defined in

[src/svg/cubicons/geometry/Rectangle.ts:37](https://github.com/imaphatduc/cubecubed/blob/e48fd86/src/svg/cubicons/geometry/Rectangle.ts#L37)

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

[Rectangle](/reference/classes/Rectangle.md).[coordsGtoW](/reference/classes/Rectangle.md#coordsgtow)

#### Defined in

[src/svg/cubicons/geometry/Geometry.ts:88](https://github.com/imaphatduc/cubecubed/blob/e48fd86/src/svg/cubicons/geometry/Geometry.ts#L88)

___

### drawInnerGrid

▸ **drawInnerGrid**(): [`RECT_GRID_DATA`](/reference/types/RECT_GRID_DATA.md)

Draw a grid inside the rectangle.

#### Returns

[`RECT_GRID_DATA`](/reference/types/RECT_GRID_DATA.md)

A complex data type to specify in DrawInnerGrid() animation.

#### Inherited from

[Rectangle](/reference/classes/Rectangle.md).[drawInnerGrid](/reference/classes/Rectangle.md#drawinnergrid)

#### Defined in

[src/svg/cubicons/geometry/Rectangle.ts:149](https://github.com/imaphatduc/cubecubed/blob/e48fd86/src/svg/cubicons/geometry/Rectangle.ts#L149)

___

### render

▸ **render**(): [`Square`](/reference/classes/Square.md)

Add the shape of this rectangle onto SVG.

#### Returns

[`Square`](/reference/classes/Square.md)

#### Inherited from

[Rectangle](/reference/classes/Rectangle.md).[render](/reference/classes/Rectangle.md#render)

#### Defined in

[src/svg/cubicons/geometry/Rectangle.ts:102](https://github.com/imaphatduc/cubecubed/blob/e48fd86/src/svg/cubicons/geometry/Rectangle.ts#L102)

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

[Rectangle](/reference/classes/Rectangle.md).[setParentSelection](/reference/classes/Rectangle.md#setparentselection)

#### Defined in

[src/svg/cubicons/Cubicon.ts:63](https://github.com/imaphatduc/cubecubed/blob/e48fd86/src/svg/cubicons/Cubicon.ts#L63)
