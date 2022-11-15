[cubecubed](/reference/README.md) / [Exports](/reference/modules.md) / GridOrigin

# Class: GridOrigin

## Hierarchy

- [`Circle`](/reference/classes/Circle.md)

  ↳ **`GridOrigin`**

## Constructors

### constructor

• **new GridOrigin**(`group`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `group` | [`Group`](/reference/classes/Group.md) |

#### Overrides

[Circle](/reference/classes/Circle.md).[constructor](/reference/classes/Circle.md#constructor)

#### Defined in

[src/svg/cubicons/geometry/Circle.ts:75](https://github.com/imaphatduc/cubecubed/blob/0fd2007/src/svg/cubicons/geometry/Circle.ts#L75)

## Properties

### CONFIG

• **CONFIG**: [`PLANE_SHAPE_CONFIG`](/reference/interfaces/PLANE_SHAPE_CONFIG.md)

#### Inherited from

[Circle](/reference/classes/Circle.md).[CONFIG](/reference/classes/Circle.md#config)

#### Defined in

[src/svg/cubicons/geometry/Circle.ts:26](https://github.com/imaphatduc/cubecubed/blob/0fd2007/src/svg/cubicons/geometry/Circle.ts#L26)

___

### angle

• **angle**: `number` = `0`

The angle between this cubicon and the x axis.
This property changed after finishing animations (in real time).

#### Inherited from

[Circle](/reference/classes/Circle.md).[angle](/reference/classes/Circle.md#angle)

#### Defined in

[src/svg/cubicons/Cubicon.ts:50](https://github.com/imaphatduc/cubecubed/blob/0fd2007/src/svg/cubicons/Cubicon.ts#L50)

___

### cubiconType

• `Readonly` **cubiconType**: ``"Circle"``

#### Inherited from

[Circle](/reference/classes/Circle.md).[cubiconType](/reference/classes/Circle.md#cubicontype)

#### Defined in

[src/svg/cubicons/geometry/Circle.ts:22](https://github.com/imaphatduc/cubecubed/blob/0fd2007/src/svg/cubicons/geometry/Circle.ts#L22)

___

### def\_cubiconBase

• **def\_cubiconBase**: `Selection`<`any`, `unknown`, `HTMLElement`, `any`\>

The SVG element that represents this cubicon.

#### Inherited from

[Circle](/reference/classes/Circle.md).[def_cubiconBase](/reference/classes/Circle.md#def_cubiconbase)

#### Defined in

[src/svg/cubicons/Cubicon.ts:75](https://github.com/imaphatduc/cubecubed/blob/0fd2007/src/svg/cubicons/Cubicon.ts#L75)

___

### g\_cubiconWrapper

• **g\_cubiconWrapper**: `Selection`<`SVGGElement`, `unknown`, `HTMLElement`, `any`\>

The `<g>` element that holds this cubicon.

#### Inherited from

[Circle](/reference/classes/Circle.md).[g_cubiconWrapper](/reference/classes/Circle.md#g_cubiconwrapper)

#### Defined in

[src/svg/cubicons/Cubicon.ts:70](https://github.com/imaphatduc/cubecubed/blob/0fd2007/src/svg/cubicons/Cubicon.ts#L70)

___

### group

• **group**: [`Group`](/reference/classes/Group.md)

#### Inherited from

[Circle](/reference/classes/Circle.md).[group](/reference/classes/Circle.md#group)

#### Defined in

[src/svg/cubicons/Cubicon.ts:40](https://github.com/imaphatduc/cubecubed/blob/0fd2007/src/svg/cubicons/Cubicon.ts#L40)

___

### moveAngle

• **moveAngle**: `number` = `0`

The sum of all rotate angles (if invoking rotate animation).

#### Inherited from

[Circle](/reference/classes/Circle.md).[moveAngle](/reference/classes/Circle.md#moveangle)

#### Defined in

[src/svg/cubicons/Cubicon.ts:60](https://github.com/imaphatduc/cubecubed/blob/0fd2007/src/svg/cubicons/Cubicon.ts#L60)

___

### moveVector

• **moveVector**: [`Vector2`](/reference/classes/Vector2.md)

The sum vector of all translate vectors (if invoking translate animation).

#### Inherited from

[Circle](/reference/classes/Circle.md).[moveVector](/reference/classes/Circle.md#movevector)

#### Defined in

[src/svg/cubicons/Cubicon.ts:55](https://github.com/imaphatduc/cubecubed/blob/0fd2007/src/svg/cubicons/Cubicon.ts#L55)

___

### position

• **position**: [`Vector2`](/reference/classes/Vector2.md)

#### Inherited from

[Circle](/reference/classes/Circle.md).[position](/reference/classes/Circle.md#position)

#### Defined in

[src/svg/cubicons/Cubicon.ts:42](https://github.com/imaphatduc/cubecubed/blob/0fd2007/src/svg/cubicons/Cubicon.ts#L42)

___

### radius

• `Readonly` **radius**: `number`

#### Inherited from

[Circle](/reference/classes/Circle.md).[radius](/reference/classes/Circle.md#radius)

#### Defined in

[src/svg/cubicons/geometry/Circle.ts:24](https://github.com/imaphatduc/cubecubed/blob/0fd2007/src/svg/cubicons/geometry/Circle.ts#L24)

___

### svg\_group

• **svg\_group**: `Selection`<`SVGSVGElement`, `unknown`, `HTMLElement`, `any`\>

The `<svg>` element of this cubicon's group.

#### Inherited from

[Circle](/reference/classes/Circle.md).[svg_group](/reference/classes/Circle.md#svg_group)

#### Defined in

[src/svg/cubicons/Cubicon.ts:65](https://github.com/imaphatduc/cubecubed/blob/0fd2007/src/svg/cubicons/Cubicon.ts#L65)

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

[Circle](/reference/classes/Circle.md).[coordsGtoW](/reference/classes/Circle.md#coordsgtow)

#### Defined in

[src/svg/cubicons/Cubicon.ts:102](https://github.com/imaphatduc/cubecubed/blob/0fd2007/src/svg/cubicons/Cubicon.ts#L102)

___

### render

▸ **render**(): [`GridOrigin`](/reference/classes/GridOrigin.md)

Render this cubicon.

#### Returns

[`GridOrigin`](/reference/classes/GridOrigin.md)

#### Inherited from

[Circle](/reference/classes/Circle.md).[render](/reference/classes/Circle.md#render)

#### Defined in

[src/svg/cubicons/geometry/Circle.ts:52](https://github.com/imaphatduc/cubecubed/blob/0fd2007/src/svg/cubicons/geometry/Circle.ts#L52)
