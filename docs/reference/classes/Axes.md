[cubecubed](/reference/README.md) / [Exports](/reference/modules.md) / Axes

# Class: Axes

## Hierarchy

- [`Cubicon`](/reference/classes/Cubicon.md)

  ↳ **`Axes`**

## Constructors

### constructor

• **new Axes**(`params`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`CubiconParams`](/reference/interfaces/CubiconParams.md)<[`AXES_CONFIG`](/reference/interfaces/AXES_CONFIG.md)\> |

#### Overrides

[Cubicon](/reference/classes/Cubicon.md).[constructor](/reference/classes/Cubicon.md#constructor)

#### Defined in

[src/svg/cubicons/coordinate-system/Axes.ts:70](https://github.com/imaphatduc/cubecubed/blob/ffe94b1/src/svg/cubicons/coordinate-system/Axes.ts#L70)

## Properties

### CONFIG

• **CONFIG**: [`AXES_CONFIG`](/reference/interfaces/AXES_CONFIG.md)

#### Overrides

[Cubicon](/reference/classes/Cubicon.md).[CONFIG](/reference/classes/Cubicon.md#config)

#### Defined in

[src/svg/cubicons/coordinate-system/Axes.ts:43](https://github.com/imaphatduc/cubecubed/blob/ffe94b1/src/svg/cubicons/coordinate-system/Axes.ts#L43)

___

### angle

• **angle**: `number` = `0`

The angle between this cubicon and the x axis.
This property changed after finishing animations (in real time).

#### Inherited from

[Cubicon](/reference/classes/Cubicon.md).[angle](/reference/classes/Cubicon.md#angle)

#### Defined in

[src/svg/cubicons/Cubicon.ts:50](https://github.com/imaphatduc/cubecubed/blob/ffe94b1/src/svg/cubicons/Cubicon.ts#L50)

___

### cubiconType

• `Readonly` **cubiconType**: ``"Axes"``

#### Overrides

[Cubicon](/reference/classes/Cubicon.md).[cubiconType](/reference/classes/Cubicon.md#cubicontype)

#### Defined in

[src/svg/cubicons/coordinate-system/Axes.ts:41](https://github.com/imaphatduc/cubecubed/blob/ffe94b1/src/svg/cubicons/coordinate-system/Axes.ts#L41)

___

### def\_cubiconBase

• **def\_cubiconBase**: `Selection`<`any`, `unknown`, `HTMLElement`, `any`\>

The SVG element that represents this cubicon.

#### Inherited from

[Cubicon](/reference/classes/Cubicon.md).[def_cubiconBase](/reference/classes/Cubicon.md#def_cubiconbase)

#### Defined in

[src/svg/cubicons/Cubicon.ts:75](https://github.com/imaphatduc/cubecubed/blob/ffe94b1/src/svg/cubicons/Cubicon.ts#L75)

___

### g\_axes

• **g\_axes**: `Selection`<`SVGGElement`, `unknown`, `HTMLElement`, `any`\>

The `<svg>` element that contains the axes.

#### Defined in

[src/svg/cubicons/coordinate-system/Axes.ts:53](https://github.com/imaphatduc/cubecubed/blob/ffe94b1/src/svg/cubicons/coordinate-system/Axes.ts#L53)

___

### g\_coordinate

• **g\_coordinate**: `Selection`<`SVGGElement`, `unknown`, `HTMLElement`, `any`\>

The `<svg>` element that contains the whole coordinate system and everything included in it.

#### Defined in

[src/svg/cubicons/coordinate-system/Axes.ts:48](https://github.com/imaphatduc/cubecubed/blob/ffe94b1/src/svg/cubicons/coordinate-system/Axes.ts#L48)

___

### g\_cubiconWrapper

• **g\_cubiconWrapper**: `Selection`<`SVGGElement`, `unknown`, `HTMLElement`, `any`\>

The `<g>` element that holds this cubicon.

#### Inherited from

[Cubicon](/reference/classes/Cubicon.md).[g_cubiconWrapper](/reference/classes/Cubicon.md#g_cubiconwrapper)

#### Defined in

[src/svg/cubicons/Cubicon.ts:70](https://github.com/imaphatduc/cubecubed/blob/ffe94b1/src/svg/cubicons/Cubicon.ts#L70)

___

### g\_graphs

• **g\_graphs**: `Selection`<`SVGGElement`, `unknown`, `HTMLElement`, `any`\>

The `<svg>` element (inside .axes) that contains all the graphs inside a pair of axes.

#### Defined in

[src/svg/cubicons/coordinate-system/Axes.ts:68](https://github.com/imaphatduc/cubecubed/blob/ffe94b1/src/svg/cubicons/coordinate-system/Axes.ts#L68)

___

### group

• **group**: [`Group`](/reference/classes/Group.md)

#### Inherited from

[Cubicon](/reference/classes/Cubicon.md).[group](/reference/classes/Cubicon.md#group)

#### Defined in

[src/svg/cubicons/Cubicon.ts:40](https://github.com/imaphatduc/cubecubed/blob/ffe94b1/src/svg/cubicons/Cubicon.ts#L40)

___

### moveAngle

• **moveAngle**: `number` = `0`

The sum of all rotate angles (if invoking rotate animation).

#### Inherited from

[Cubicon](/reference/classes/Cubicon.md).[moveAngle](/reference/classes/Cubicon.md#moveangle)

#### Defined in

[src/svg/cubicons/Cubicon.ts:60](https://github.com/imaphatduc/cubecubed/blob/ffe94b1/src/svg/cubicons/Cubicon.ts#L60)

___

### moveVector

• **moveVector**: [`Vector2`](/reference/classes/Vector2.md)

The sum vector of all translate vectors (if invoking translate animation).

#### Inherited from

[Cubicon](/reference/classes/Cubicon.md).[moveVector](/reference/classes/Cubicon.md#movevector)

#### Defined in

[src/svg/cubicons/Cubicon.ts:55](https://github.com/imaphatduc/cubecubed/blob/ffe94b1/src/svg/cubicons/Cubicon.ts#L55)

___

### position

• **position**: [`Vector2`](/reference/classes/Vector2.md)

#### Inherited from

[Cubicon](/reference/classes/Cubicon.md).[position](/reference/classes/Cubicon.md#position)

#### Defined in

[src/svg/cubicons/Cubicon.ts:42](https://github.com/imaphatduc/cubecubed/blob/ffe94b1/src/svg/cubicons/Cubicon.ts#L42)

___

### svg\_group

• **svg\_group**: `Selection`<`SVGSVGElement`, `unknown`, `HTMLElement`, `any`\>

The `<svg>` element of this cubicon's group.

#### Inherited from

[Cubicon](/reference/classes/Cubicon.md).[svg_group](/reference/classes/Cubicon.md#svg_group)

#### Defined in

[src/svg/cubicons/Cubicon.ts:65](https://github.com/imaphatduc/cubecubed/blob/ffe94b1/src/svg/cubicons/Cubicon.ts#L65)

___

### xAxis

• **xAxis**: `Selection`<`SVGGElement`, `unknown`, `HTMLElement`, `any`\>

The `<svg>` element that contains the x axis.

#### Defined in

[src/svg/cubicons/coordinate-system/Axes.ts:58](https://github.com/imaphatduc/cubecubed/blob/ffe94b1/src/svg/cubicons/coordinate-system/Axes.ts#L58)

___

### yAxis

• **yAxis**: `Selection`<`SVGGElement`, `unknown`, `HTMLElement`, `any`\>

The `<svg>` element that contains the y axis.

#### Defined in

[src/svg/cubicons/coordinate-system/Axes.ts:63](https://github.com/imaphatduc/cubecubed/blob/ffe94b1/src/svg/cubicons/coordinate-system/Axes.ts#L63)

## Accessors

### hasNums

• `get` **hasNums**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/svg/cubicons/coordinate-system/Axes.ts:454](https://github.com/imaphatduc/cubecubed/blob/ffe94b1/src/svg/cubicons/coordinate-system/Axes.ts#L454)

___

### xRange

• `get` **xRange**(): [`number`, `number`]

#### Returns

[`number`, `number`]

#### Defined in

[src/svg/cubicons/coordinate-system/Axes.ts:446](https://github.com/imaphatduc/cubecubed/blob/ffe94b1/src/svg/cubicons/coordinate-system/Axes.ts#L446)

___

### yRange

• `get` **yRange**(): [`number`, `number`]

#### Returns

[`number`, `number`]

#### Defined in

[src/svg/cubicons/coordinate-system/Axes.ts:450](https://github.com/imaphatduc/cubecubed/blob/ffe94b1/src/svg/cubicons/coordinate-system/Axes.ts#L450)

## Methods

### addGraphLabel

▸ **addGraphLabel**(`params`): `Label`

Add label onto a graph.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | `Object` | - |
| `params.CONFIG?` | [`MATH_TEX_CONFIG`](/reference/interfaces/MATH_TEX_CONFIG.md) | Config options of the label. |
| `params.graph` | `Graph` | The graph to put the label on. |
| `params.text` | `string` | Content of the label. |
| `params.xPos?` | `number` | x position of the label. |

#### Returns

`Label`

A label.

#### Defined in

[src/svg/cubicons/coordinate-system/Axes.ts:295](https://github.com/imaphatduc/cubecubed/blob/ffe94b1/src/svg/cubicons/coordinate-system/Axes.ts#L295)

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

#### Overrides

[Cubicon](/reference/classes/Cubicon.md).[coordsGtoW](/reference/classes/Cubicon.md#coordsgtow)

#### Defined in

[src/svg/cubicons/coordinate-system/Axes.ts:439](https://github.com/imaphatduc/cubecubed/blob/ffe94b1/src/svg/cubicons/coordinate-system/Axes.ts#L439)

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

[src/svg/cubicons/coordinate-system/Axes.ts:458](https://github.com/imaphatduc/cubecubed/blob/ffe94b1/src/svg/cubicons/coordinate-system/Axes.ts#L458)

___

### getXScale

▸ **getXScale**(`axisRange?`): `ScaleLinear`<`number`, `number`, `never`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `axisRange` | [`number`, `number`] |

#### Returns

`ScaleLinear`<`number`, `number`, `never`\>

#### Defined in

[src/svg/cubicons/coordinate-system/Axes.ts:431](https://github.com/imaphatduc/cubecubed/blob/ffe94b1/src/svg/cubicons/coordinate-system/Axes.ts#L431)

___

### getYScale

▸ **getYScale**(`axisRange?`): `ScaleLinear`<`number`, `number`, `never`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `axisRange` | [`number`, `number`] |

#### Returns

`ScaleLinear`<`number`, `number`, `never`\>

#### Defined in

[src/svg/cubicons/coordinate-system/Axes.ts:435](https://github.com/imaphatduc/cubecubed/blob/ffe94b1/src/svg/cubicons/coordinate-system/Axes.ts#L435)

___

### plot

▸ **plot**(`params`): `Graph`

Plot a function onto the axes.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | `Object` | Options to form the graph. |
| `params.color?` | `string` | Color of the graph. |
| `params.functionDef` | (`x`: `number`) => `number` | - |
| `params.xRange?` | [`number`, `number`] | x range of the graph. |

#### Returns

`Graph`

A plotted graph.

#### Defined in

[src/svg/cubicons/coordinate-system/Axes.ts:263](https://github.com/imaphatduc/cubecubed/blob/ffe94b1/src/svg/cubicons/coordinate-system/Axes.ts#L263)

___

### pointOnGraph

▸ **pointOnGraph**(`params`): [`POINT_ON_GRAPH_DATA`](/reference/types/POINT_ON_GRAPH_DATA.md)

Add a point at the specified x position on the graph.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | `Object` | - |
| `params.graph` | `Graph` | The graph to put the point on. |
| `params.xPos` | `number` | The x position of the point.  **`Default`**  1 |

#### Returns

[`POINT_ON_GRAPH_DATA`](/reference/types/POINT_ON_GRAPH_DATA.md)

A complex data object that contains the point.

#### Defined in

[src/svg/cubicons/coordinate-system/Axes.ts:333](https://github.com/imaphatduc/cubecubed/blob/ffe94b1/src/svg/cubicons/coordinate-system/Axes.ts#L333)

___

### pointToCoords

▸ **pointToCoords**(`params`): [`POINT_TO_COORDS_DATA`](/reference/types/POINT_TO_COORDS_DATA.md)

Add a point at the specified x position on the graph, along with two axis
projectors of it.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | `Object` | - |
| `params.graph` | `Graph` | The graph to put the point on. |
| `params.xPos` | `number` | The x position of the point.  **`Default`**  1 |

#### Returns

[`POINT_TO_COORDS_DATA`](/reference/types/POINT_TO_COORDS_DATA.md)

A complex data object that contains the point and an array of the
two axis projectors.

#### Defined in

[src/svg/cubicons/coordinate-system/Axes.ts:371](https://github.com/imaphatduc/cubecubed/blob/ffe94b1/src/svg/cubicons/coordinate-system/Axes.ts#L371)

___

### render

▸ **render**(): [`Axes`](/reference/classes/Axes.md)

Render this cubicon.

#### Returns

[`Axes`](/reference/classes/Axes.md)

#### Overrides

[Cubicon](/reference/classes/Cubicon.md).[render](/reference/classes/Cubicon.md#render)

#### Defined in

[src/svg/cubicons/coordinate-system/Axes.ts:106](https://github.com/imaphatduc/cubecubed/blob/ffe94b1/src/svg/cubicons/coordinate-system/Axes.ts#L106)
