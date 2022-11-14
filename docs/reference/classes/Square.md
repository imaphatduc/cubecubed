[cubecubed](/reference/README.md) / [Exports](/reference/modules.md) / Square

# Class: Square

## Hierarchy

- [`Rectangle`](/reference/classes/Rectangle.md)

  ↳ **`Square`**

## Constructors

### constructor

• **new Square**(`params`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`SquareParams`](/reference/interfaces/SquareParams.md) |

#### Overrides

[Rectangle](/reference/classes/Rectangle.md).[constructor](/reference/classes/Rectangle.md#constructor)

#### Defined in

[src/svg/cubicons/geometry/Square.ts:14](https://github.com/imaphatduc/cubecubed/blob/cb0c39f/src/svg/cubicons/geometry/Square.ts#L14)

## Properties

### CONFIG

• **CONFIG**: [`PLANE_SHAPE_CONFIG`](/reference/interfaces/PLANE_SHAPE_CONFIG.md)

#### Inherited from

[Rectangle](/reference/classes/Rectangle.md).[CONFIG](/reference/classes/Rectangle.md#config)

#### Defined in

[src/svg/cubicons/geometry/Rectangle.ts:48](https://github.com/imaphatduc/cubecubed/blob/cb0c39f/src/svg/cubicons/geometry/Rectangle.ts#L48)

___

### angle

• **angle**: `number` = `0`

The angle between this cubicon and the x axis.
This property changed after finishing animations (in real time).

#### Inherited from

[Rectangle](/reference/classes/Rectangle.md).[angle](/reference/classes/Rectangle.md#angle)

#### Defined in

[src/svg/cubicons/Cubicon.ts:50](https://github.com/imaphatduc/cubecubed/blob/cb0c39f/src/svg/cubicons/Cubicon.ts#L50)

___

### cubiconType

• `Readonly` **cubiconType**: ``"Rectangle"``

#### Inherited from

[Rectangle](/reference/classes/Rectangle.md).[cubiconType](/reference/classes/Rectangle.md#cubicontype)

#### Defined in

[src/svg/cubicons/geometry/Rectangle.ts:42](https://github.com/imaphatduc/cubecubed/blob/cb0c39f/src/svg/cubicons/geometry/Rectangle.ts#L42)

___

### def\_cubiconBase

• **def\_cubiconBase**: `Selection`<`any`, `unknown`, `HTMLElement`, `any`\>

The SVG element that represents this cubicon.

#### Inherited from

[Rectangle](/reference/classes/Rectangle.md).[def_cubiconBase](/reference/classes/Rectangle.md#def_cubiconbase)

#### Defined in

[src/svg/cubicons/Cubicon.ts:75](https://github.com/imaphatduc/cubecubed/blob/cb0c39f/src/svg/cubicons/Cubicon.ts#L75)

___

### g\_cubiconWrapper

• **g\_cubiconWrapper**: `Selection`<`SVGGElement`, `unknown`, `HTMLElement`, `any`\>

The `<g>` element that holds this cubicon.

#### Inherited from

[Rectangle](/reference/classes/Rectangle.md).[g_cubiconWrapper](/reference/classes/Rectangle.md#g_cubiconwrapper)

#### Defined in

[src/svg/cubicons/Cubicon.ts:70](https://github.com/imaphatduc/cubecubed/blob/cb0c39f/src/svg/cubicons/Cubicon.ts#L70)

___

### group

• **group**: [`Group`](/reference/classes/Group.md)

#### Inherited from

[Rectangle](/reference/classes/Rectangle.md).[group](/reference/classes/Rectangle.md#group)

#### Defined in

[src/svg/cubicons/Cubicon.ts:40](https://github.com/imaphatduc/cubecubed/blob/cb0c39f/src/svg/cubicons/Cubicon.ts#L40)

___

### height

• `Readonly` **height**: `number`

#### Inherited from

[Rectangle](/reference/classes/Rectangle.md).[height](/reference/classes/Rectangle.md#height)

#### Defined in

[src/svg/cubicons/geometry/Rectangle.ts:46](https://github.com/imaphatduc/cubecubed/blob/cb0c39f/src/svg/cubicons/geometry/Rectangle.ts#L46)

___

### moveAngle

• **moveAngle**: `number` = `0`

The sum of all rotate angles (if invoking rotate animation).

#### Inherited from

[Rectangle](/reference/classes/Rectangle.md).[moveAngle](/reference/classes/Rectangle.md#moveangle)

#### Defined in

[src/svg/cubicons/Cubicon.ts:60](https://github.com/imaphatduc/cubecubed/blob/cb0c39f/src/svg/cubicons/Cubicon.ts#L60)

___

### moveVector

• **moveVector**: [`Vector2`](/reference/classes/Vector2.md)

The sum vector of all translate vectors (if invoking translate animation).

#### Inherited from

[Rectangle](/reference/classes/Rectangle.md).[moveVector](/reference/classes/Rectangle.md#movevector)

#### Defined in

[src/svg/cubicons/Cubicon.ts:55](https://github.com/imaphatduc/cubecubed/blob/cb0c39f/src/svg/cubicons/Cubicon.ts#L55)

___

### position

• **position**: [`Vector2`](/reference/classes/Vector2.md)

#### Inherited from

[Rectangle](/reference/classes/Rectangle.md).[position](/reference/classes/Rectangle.md#position)

#### Defined in

[src/svg/cubicons/Cubicon.ts:42](https://github.com/imaphatduc/cubecubed/blob/cb0c39f/src/svg/cubicons/Cubicon.ts#L42)

___

### svg\_group

• **svg\_group**: `Selection`<`SVGSVGElement`, `unknown`, `HTMLElement`, `any`\>

The `<svg>` element of this cubicon's group.

#### Inherited from

[Rectangle](/reference/classes/Rectangle.md).[svg_group](/reference/classes/Rectangle.md#svg_group)

#### Defined in

[src/svg/cubicons/Cubicon.ts:65](https://github.com/imaphatduc/cubecubed/blob/cb0c39f/src/svg/cubicons/Cubicon.ts#L65)

___

### width

• `Readonly` **width**: `number`

#### Inherited from

[Rectangle](/reference/classes/Rectangle.md).[width](/reference/classes/Rectangle.md#width)

#### Defined in

[src/svg/cubicons/geometry/Rectangle.ts:44](https://github.com/imaphatduc/cubecubed/blob/cb0c39f/src/svg/cubicons/geometry/Rectangle.ts#L44)

## Accessors

### sideLength

• `get` **sideLength**(): `number`

#### Returns

`number`

#### Defined in

[src/svg/cubicons/geometry/Square.ts:28](https://github.com/imaphatduc/cubecubed/blob/cb0c39f/src/svg/cubicons/geometry/Square.ts#L28)

## Methods

### coordsGtoW

▸ **coordsGtoW**(`point`): [`Vector2`](/reference/classes/Vector2.md)

Convert grid coordinates to pixels.

#### Parameters

| Name | Type |
| :------ | :------ |
| `point` | [`Vector2`](/reference/classes/Vector2.md) |

#### Returns

[`Vector2`](/reference/classes/Vector2.md)

#### Inherited from

[Rectangle](/reference/classes/Rectangle.md).[coordsGtoW](/reference/classes/Rectangle.md#coordsgtow)

#### Defined in

[src/svg/cubicons/Cubicon.ts:102](https://github.com/imaphatduc/cubecubed/blob/cb0c39f/src/svg/cubicons/Cubicon.ts#L102)

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

[src/svg/cubicons/geometry/Rectangle.ts:131](https://github.com/imaphatduc/cubecubed/blob/cb0c39f/src/svg/cubicons/geometry/Rectangle.ts#L131)

___

### render

▸ **render**(): [`Square`](/reference/classes/Square.md)

Render this cubicon.

#### Returns

[`Square`](/reference/classes/Square.md)

#### Inherited from

[Rectangle](/reference/classes/Rectangle.md).[render](/reference/classes/Rectangle.md#render)

#### Defined in

[src/svg/cubicons/geometry/Rectangle.ts:72](https://github.com/imaphatduc/cubecubed/blob/cb0c39f/src/svg/cubicons/geometry/Rectangle.ts#L72)
