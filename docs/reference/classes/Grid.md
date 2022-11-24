[cubecubed](/reference/README.md) / [Exports](/reference/modules.md) / Grid

# Class: Grid

## Hierarchy

- [`Cubicon`](/reference/classes/Cubicon.md)

  ↳ **`Grid`**

## Constructors

### constructor

• **new Grid**(`params`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`CubiconParams`](/reference/interfaces/CubiconParams.md)<[`GRID_CONFIG`](/reference/interfaces/GRID_CONFIG.md)\> |

#### Overrides

[Cubicon](/reference/classes/Cubicon.md).[constructor](/reference/classes/Cubicon.md#constructor)

#### Defined in

[src/svg/cubicons/Grid.ts:57](https://github.com/imaphatduc/cubecubed/blob/ec15a85/src/svg/cubicons/Grid.ts#L57)

## Properties

### CONFIG

• **CONFIG**: [`GRID_CONFIG`](/reference/interfaces/GRID_CONFIG.md)

#### Overrides

[Cubicon](/reference/classes/Cubicon.md).[CONFIG](/reference/classes/Cubicon.md#config)

#### Defined in

[src/svg/cubicons/Grid.ts:44](https://github.com/imaphatduc/cubecubed/blob/ec15a85/src/svg/cubicons/Grid.ts#L44)

___

### angle

• **angle**: `number` = `0`

The angle between this cubicon and the x axis.
This property changed after finishing animations (in real time).

#### Inherited from

[Cubicon](/reference/classes/Cubicon.md).[angle](/reference/classes/Cubicon.md#angle)

#### Defined in

[src/svg/cubicons/Cubicon.ts:50](https://github.com/imaphatduc/cubecubed/blob/ec15a85/src/svg/cubicons/Cubicon.ts#L50)

___

### cubiconType

• `Readonly` **cubiconType**: ``"Grid"``

#### Overrides

[Cubicon](/reference/classes/Cubicon.md).[cubiconType](/reference/classes/Cubicon.md#cubicontype)

#### Defined in

[src/svg/cubicons/Grid.ts:42](https://github.com/imaphatduc/cubecubed/blob/ec15a85/src/svg/cubicons/Grid.ts#L42)

___

### def\_cubiconBase

• **def\_cubiconBase**: `Selection`<`any`, `unknown`, `HTMLElement`, `any`\>

The SVG element that represents this cubicon.

#### Inherited from

[Cubicon](/reference/classes/Cubicon.md).[def_cubiconBase](/reference/classes/Cubicon.md#def_cubiconbase)

#### Defined in

[src/svg/cubicons/Cubicon.ts:75](https://github.com/imaphatduc/cubecubed/blob/ec15a85/src/svg/cubicons/Cubicon.ts#L75)

___

### g\_cubiconWrapper

• **g\_cubiconWrapper**: `Selection`<`SVGGElement`, `unknown`, `HTMLElement`, `any`\>

The `<g>` element that holds this cubicon.

#### Inherited from

[Cubicon](/reference/classes/Cubicon.md).[g_cubiconWrapper](/reference/classes/Cubicon.md#g_cubiconwrapper)

#### Defined in

[src/svg/cubicons/Cubicon.ts:70](https://github.com/imaphatduc/cubecubed/blob/ec15a85/src/svg/cubicons/Cubicon.ts#L70)

___

### gridOrigin

• **gridOrigin**: [`GridOrigin`](/reference/classes/GridOrigin.md)

#### Defined in

[src/svg/cubicons/Grid.ts:46](https://github.com/imaphatduc/cubecubed/blob/ec15a85/src/svg/cubicons/Grid.ts#L46)

___

### group

• **group**: [`Group`](/reference/classes/Group.md)

#### Inherited from

[Cubicon](/reference/classes/Cubicon.md).[group](/reference/classes/Cubicon.md#group)

#### Defined in

[src/svg/cubicons/Cubicon.ts:40](https://github.com/imaphatduc/cubecubed/blob/ec15a85/src/svg/cubicons/Cubicon.ts#L40)

___

### horizontalLines

• **horizontalLines**: [`Line`](/reference/classes/Line.md)[]

#### Defined in

[src/svg/cubicons/Grid.ts:48](https://github.com/imaphatduc/cubecubed/blob/ec15a85/src/svg/cubicons/Grid.ts#L48)

___

### moveAngle

• **moveAngle**: `number` = `0`

The sum of all rotate angles (if invoking rotate animation).

#### Inherited from

[Cubicon](/reference/classes/Cubicon.md).[moveAngle](/reference/classes/Cubicon.md#moveangle)

#### Defined in

[src/svg/cubicons/Cubicon.ts:60](https://github.com/imaphatduc/cubecubed/blob/ec15a85/src/svg/cubicons/Cubicon.ts#L60)

___

### moveVector

• **moveVector**: [`Vector2`](/reference/classes/Vector2.md)

The sum vector of all translate vectors (if invoking translate animation).

#### Inherited from

[Cubicon](/reference/classes/Cubicon.md).[moveVector](/reference/classes/Cubicon.md#movevector)

#### Defined in

[src/svg/cubicons/Cubicon.ts:55](https://github.com/imaphatduc/cubecubed/blob/ec15a85/src/svg/cubicons/Cubicon.ts#L55)

___

### position

• **position**: [`Vector2`](/reference/classes/Vector2.md)

#### Inherited from

[Cubicon](/reference/classes/Cubicon.md).[position](/reference/classes/Cubicon.md#position)

#### Defined in

[src/svg/cubicons/Cubicon.ts:42](https://github.com/imaphatduc/cubecubed/blob/ec15a85/src/svg/cubicons/Cubicon.ts#L42)

___

### svg\_group

• **svg\_group**: `Selection`<`SVGSVGElement`, `unknown`, `HTMLElement`, `any`\>

The `<svg>` element of this cubicon's group.

#### Inherited from

[Cubicon](/reference/classes/Cubicon.md).[svg_group](/reference/classes/Cubicon.md#svg_group)

#### Defined in

[src/svg/cubicons/Cubicon.ts:65](https://github.com/imaphatduc/cubecubed/blob/ec15a85/src/svg/cubicons/Cubicon.ts#L65)

___

### verticalLines

• **verticalLines**: [`Line`](/reference/classes/Line.md)[]

#### Defined in

[src/svg/cubicons/Grid.ts:50](https://github.com/imaphatduc/cubecubed/blob/ec15a85/src/svg/cubicons/Grid.ts#L50)

## Accessors

### xs

• `get` **xs**(): `number`[]

#### Returns

`number`[]

#### Defined in

[src/svg/cubicons/Grid.ts:133](https://github.com/imaphatduc/cubecubed/blob/ec15a85/src/svg/cubicons/Grid.ts#L133)

___

### ys

• `get` **ys**(): `number`[]

#### Returns

`number`[]

#### Defined in

[src/svg/cubicons/Grid.ts:137](https://github.com/imaphatduc/cubecubed/blob/ec15a85/src/svg/cubicons/Grid.ts#L137)

## Methods

### applyFunction

▸ **applyFunction**(`func`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `func` | [`VerticesMapFunction`](/reference/types/VerticesMapFunction.md) |

#### Returns

`void`

#### Defined in

[src/svg/cubicons/Grid.ts:128](https://github.com/imaphatduc/cubecubed/blob/ec15a85/src/svg/cubicons/Grid.ts#L128)

___

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

[Cubicon](/reference/classes/Cubicon.md).[coordsGtoW](/reference/classes/Cubicon.md#coordsgtow)

#### Defined in

[src/svg/cubicons/Cubicon.ts:102](https://github.com/imaphatduc/cubecubed/blob/ec15a85/src/svg/cubicons/Cubicon.ts#L102)

___

### render

▸ **render**(): [`Grid`](/reference/classes/Grid.md)

Render this cubicon.

#### Returns

[`Grid`](/reference/classes/Grid.md)

#### Overrides

[Cubicon](/reference/classes/Cubicon.md).[render](/reference/classes/Cubicon.md#render)

#### Defined in

[src/svg/cubicons/Grid.ts:119](https://github.com/imaphatduc/cubecubed/blob/ec15a85/src/svg/cubicons/Grid.ts#L119)
