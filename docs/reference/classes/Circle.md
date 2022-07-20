[cubecubed](/reference/README.md) / [Exports](/reference/modules.md) / Circle

# Class: Circle

Return the barebone of a circle shape.

## Hierarchy

- [`Cubicon`](/reference/classes/Cubicon.md)

  ↳ **`Circle`**

  ↳↳ [`GridOrigin`](/reference/classes/GridOrigin.md)

## Constructors

### constructor

• **new Circle**(`params`)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | `Object` | An object that contains options to form the circle. |
| `params.CONFIG?` | [`SHAPE_CONFIG`](/reference/interfaces/SHAPE_CONFIG.md) | Config options of the circle. |
| `params.group` | [`Group`](/reference/classes/Group.md) | The group that the circle belongs to. |
| `params.position?` | [`Vector2`](/reference/classes/Vector2.md) | Position of the circle. |
| `params.radius` | `number` | Radius of the rectangle. |

#### Overrides

[Cubicon](/reference/classes/Cubicon.md).[constructor](/reference/classes/Cubicon.md#constructor)

#### Defined in

[src/svg/cubicons/geometry/Circle.ts:27](https://github.com/imaphatduc/cubecubed/blob/8295992/src/svg/cubicons/geometry/Circle.ts#L27)

## Properties

### CONFIG

• **CONFIG**: [`SHAPE_CONFIG`](/reference/interfaces/SHAPE_CONFIG.md)

Config options of this circle.

#### Defined in

[src/svg/cubicons/geometry/Circle.ts:22](https://github.com/imaphatduc/cubecubed/blob/8295992/src/svg/cubicons/geometry/Circle.ts#L22)

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

• `Readonly` **cubiconType**: ``"Circle"``

#### Overrides

[Cubicon](/reference/classes/Cubicon.md).[cubiconType](/reference/classes/Cubicon.md#cubicontype)

#### Defined in

[src/svg/cubicons/geometry/Circle.ts:12](https://github.com/imaphatduc/cubecubed/blob/8295992/src/svg/cubicons/geometry/Circle.ts#L12)

___

### def\_cubiconBase

• **def\_cubiconBase**: `Selection`<`any`, `unknown`, `HTMLElement`, `any`\>

The HTML tag that represents this cubicon.

#### Inherited from

[Cubicon](/reference/classes/Cubicon.md).[def_cubiconBase](/reference/classes/Cubicon.md#def_cubiconbase)

#### Defined in

[src/svg/cubicons/Cubicon.ts:51](https://github.com/imaphatduc/cubecubed/blob/8295992/src/svg/cubicons/Cubicon.ts#L51)

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

### position

• **position**: [`Vector2`](/reference/classes/Vector2.md)

Position of this cubicon.
This property changed after finishing animations (in real time).

#### Inherited from

[Cubicon](/reference/classes/Cubicon.md).[position](/reference/classes/Cubicon.md#position)

#### Defined in

[src/svg/cubicons/Cubicon.ts:20](https://github.com/imaphatduc/cubecubed/blob/8295992/src/svg/cubicons/Cubicon.ts#L20)

___

### radius

• `Readonly` **radius**: `number`

Radius of the rectangle (in grid coordinate system).

#### Defined in

[src/svg/cubicons/geometry/Circle.ts:17](https://github.com/imaphatduc/cubecubed/blob/8295992/src/svg/cubicons/geometry/Circle.ts#L17)

___

### svg\_group

• **svg\_group**: `Selection`<`SVGSVGElement`, `unknown`, `HTMLElement`, `any`\>

The `<svg/>` tag of this cubicon's group.

#### Inherited from

[Cubicon](/reference/classes/Cubicon.md).[svg_group](/reference/classes/Cubicon.md#svg_group)

#### Defined in

[src/svg/cubicons/Cubicon.ts:41](https://github.com/imaphatduc/cubecubed/blob/8295992/src/svg/cubicons/Cubicon.ts#L41)

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

### render

▸ **render**(): [`Circle`](/reference/classes/Circle.md)

Draw (and render) the shape of this circle onto SVG.

#### Returns

[`Circle`](/reference/classes/Circle.md)

#### Defined in

[src/svg/cubicons/geometry/Circle.ts:76](https://github.com/imaphatduc/cubecubed/blob/8295992/src/svg/cubicons/geometry/Circle.ts#L76)

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
