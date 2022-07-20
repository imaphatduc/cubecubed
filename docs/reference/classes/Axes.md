[cubecubed](/reference/README.md) / [Exports](/reference/modules.md) / Axes

# Class: Axes

## Hierarchy

- [`Cubicon`](/reference/classes/Cubicon.md)

  ↳ **`Axes`**

## Constructors

### constructor

• **new Axes**(`params`)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | `Object` | Options to form the axes. |
| `params.CONFIG?` | [`AXES_CONFIG`](/reference/interfaces/AXES_CONFIG.md) | - |
| `params.group` | [`Group`](/reference/classes/Group.md) | - |
| `params.position?` | [`Vector2`](/reference/classes/Vector2.md) | - |

#### Overrides

[Cubicon](/reference/classes/Cubicon.md).[constructor](/reference/classes/Cubicon.md#constructor)

#### Defined in

[src/svg/cubicons/coordinate-system/Axes.ts:92](https://github.com/imaphatduc/cubecubed/blob/8295992/src/svg/cubicons/coordinate-system/Axes.ts#L92)

## Properties

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

• `Readonly` **cubiconType**: ``"Axes"``

#### Overrides

[Cubicon](/reference/classes/Cubicon.md).[cubiconType](/reference/classes/Cubicon.md#cubicontype)

#### Defined in

[src/svg/cubicons/coordinate-system/Axes.ts:47](https://github.com/imaphatduc/cubecubed/blob/8295992/src/svg/cubicons/coordinate-system/Axes.ts#L47)

___

### def\_cubiconBase

• **def\_cubiconBase**: `Selection`<`any`, `unknown`, `HTMLElement`, `any`\>

The HTML tag that represents this cubicon.

#### Inherited from

[Cubicon](/reference/classes/Cubicon.md).[def_cubiconBase](/reference/classes/Cubicon.md#def_cubiconbase)

#### Defined in

[src/svg/cubicons/Cubicon.ts:51](https://github.com/imaphatduc/cubecubed/blob/8295992/src/svg/cubicons/Cubicon.ts#L51)

___

### g\_axes

• **g\_axes**: `Selection`<`SVGGElement`, `unknown`, `HTMLElement`, `any`\>

The `<svg/>` element that contains the axes.

#### Defined in

[src/svg/cubicons/coordinate-system/Axes.ts:72](https://github.com/imaphatduc/cubecubed/blob/8295992/src/svg/cubicons/coordinate-system/Axes.ts#L72)

___

### g\_coordinate

• **g\_coordinate**: `Selection`<`SVGGElement`, `unknown`, `HTMLElement`, `any`\>

The `<svg/>` element that contains the whole coordinate system and everything included in it.

#### Defined in

[src/svg/cubicons/coordinate-system/Axes.ts:67](https://github.com/imaphatduc/cubecubed/blob/8295992/src/svg/cubicons/coordinate-system/Axes.ts#L67)

___

### g\_cubiconWrapper

• **g\_cubiconWrapper**: `Selection`<`SVGGElement`, `unknown`, `HTMLElement`, `any`\>

The `<g/>` tag that holds this cubicon.

#### Inherited from

[Cubicon](/reference/classes/Cubicon.md).[g_cubiconWrapper](/reference/classes/Cubicon.md#g_cubiconwrapper)

#### Defined in

[src/svg/cubicons/Cubicon.ts:46](https://github.com/imaphatduc/cubecubed/blob/8295992/src/svg/cubicons/Cubicon.ts#L46)

___

### g\_graphs

• **g\_graphs**: `Selection`<`SVGGElement`, `unknown`, `HTMLElement`, `any`\>

The `<svg/>` element (inside .axes) that contains all the graphs inside a pair of axes.

#### Defined in

[src/svg/cubicons/coordinate-system/Axes.ts:87](https://github.com/imaphatduc/cubecubed/blob/8295992/src/svg/cubicons/coordinate-system/Axes.ts#L87)

___

### group

• **group**: [`Group`](/reference/classes/Group.md)

The group that this cubicon belongs to.

#### Inherited from

[Cubicon](/reference/classes/Cubicon.md).[group](/reference/classes/Cubicon.md#group)

#### Defined in

[src/svg/cubicons/Cubicon.ts:14](https://github.com/imaphatduc/cubecubed/blob/8295992/src/svg/cubicons/Cubicon.ts#L14)

___

### hasNums

• **hasNums**: `boolean`

Whether the axes include numbers

#### Defined in

[src/svg/cubicons/coordinate-system/Axes.ts:62](https://github.com/imaphatduc/cubecubed/blob/8295992/src/svg/cubicons/coordinate-system/Axes.ts#L62)

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

### svg\_group

• **svg\_group**: `Selection`<`SVGSVGElement`, `unknown`, `HTMLElement`, `any`\>

The `<svg/>` tag of this cubicon's group.

#### Inherited from

[Cubicon](/reference/classes/Cubicon.md).[svg_group](/reference/classes/Cubicon.md#svg_group)

#### Defined in

[src/svg/cubicons/Cubicon.ts:41](https://github.com/imaphatduc/cubecubed/blob/8295992/src/svg/cubicons/Cubicon.ts#L41)

___

### xAxis

• **xAxis**: `Selection`<`SVGGElement`, `unknown`, `HTMLElement`, `any`\>

The `<svg/>` element that contains the x axis.

#### Defined in

[src/svg/cubicons/coordinate-system/Axes.ts:77](https://github.com/imaphatduc/cubecubed/blob/8295992/src/svg/cubicons/coordinate-system/Axes.ts#L77)

___

### xRange

• **xRange**: [`number`, `number`]

Range of the x axis.

#### Defined in

[src/svg/cubicons/coordinate-system/Axes.ts:52](https://github.com/imaphatduc/cubecubed/blob/8295992/src/svg/cubicons/coordinate-system/Axes.ts#L52)

___

### yAxis

• **yAxis**: `Selection`<`SVGGElement`, `unknown`, `HTMLElement`, `any`\>

The `<svg/>` element that contains the y axis.

#### Defined in

[src/svg/cubicons/coordinate-system/Axes.ts:82](https://github.com/imaphatduc/cubecubed/blob/8295992/src/svg/cubicons/coordinate-system/Axes.ts#L82)

___

### yRange

• **yRange**: [`number`, `number`]

Range of the y axis.

#### Defined in

[src/svg/cubicons/coordinate-system/Axes.ts:57](https://github.com/imaphatduc/cubecubed/blob/8295992/src/svg/cubicons/coordinate-system/Axes.ts#L57)

## Methods

### addGraphLabel

▸ **addGraphLabel**(`graph`, `text`, `xPos?`, `color?`, `fontSize?`): `Label`

Add label onto a graph.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `graph` | `Graph` | `undefined` | The graph to put the label on. |
| `text` | `string` | `undefined` | Content of the label. |
| `xPos` | `number` | `undefined` | x position of the label. Default is the rightmost value on the x axis. |
| `color` | `undefined` \| `string` | `graph.CONFIG.graphColor` | - |
| `fontSize` | `number` | `18` | - |

#### Returns

`Label`

A label.

#### Defined in

[src/svg/cubicons/coordinate-system/Axes.ts:307](https://github.com/imaphatduc/cubecubed/blob/8295992/src/svg/cubicons/coordinate-system/Axes.ts#L307)

___

### coordsGtoW

▸ **coordsGtoW**(`point`): [`Vector2`](/reference/classes/Vector2.md)

Convert axes coordinates to SVG-Cartesian coordinates.

**`internal`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `point` | [`Vector2`](/reference/classes/Vector2.md) |

#### Returns

[`Vector2`](/reference/classes/Vector2.md)

#### Overrides

[Cubicon](/reference/classes/Cubicon.md).[coordsGtoW](/reference/classes/Cubicon.md#coordsgtow)

#### Defined in

[src/svg/cubicons/coordinate-system/Axes.ts:260](https://github.com/imaphatduc/cubecubed/blob/8295992/src/svg/cubicons/coordinate-system/Axes.ts#L260)

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

[src/svg/cubicons/coordinate-system/Axes.ts:247](https://github.com/imaphatduc/cubecubed/blob/8295992/src/svg/cubicons/coordinate-system/Axes.ts#L247)

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

[src/svg/cubicons/coordinate-system/Axes.ts:251](https://github.com/imaphatduc/cubecubed/blob/8295992/src/svg/cubicons/coordinate-system/Axes.ts#L251)

___

### graph

▸ **graph**(`params`): `Graph`

Graph a function onto the axes.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | `Object` | Options to form the graph. |
| `params.color?` | `string` | Color of the graph. |
| `params.xRange?` | [`number`, `number`] | x range of the graph. |
| `params.functionDef` | (`x`: `number`) => `number` | - |

#### Returns

`Graph`

A plotted graph.

#### Defined in

[src/svg/cubicons/coordinate-system/Axes.ts:274](https://github.com/imaphatduc/cubecubed/blob/8295992/src/svg/cubicons/coordinate-system/Axes.ts#L274)

___

### pointOnGraph

▸ **pointOnGraph**(`graph`, `xPos?`): [`PT_ON_GRAPH_DATA`](/reference/types/PT_ON_GRAPH_DATA.md)

Add a point at the specified x position on the graph.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `graph` | `Graph` | `undefined` | The graph to put the point on. |
| `xPos` | `number` | `1` | The x position of the point. Default is 1. |

#### Returns

[`PT_ON_GRAPH_DATA`](/reference/types/PT_ON_GRAPH_DATA.md)

A complex data object that contains the point.

#### Defined in

[src/svg/cubicons/coordinate-system/Axes.ts:333](https://github.com/imaphatduc/cubecubed/blob/8295992/src/svg/cubicons/coordinate-system/Axes.ts#L333)

___

### pointToCoords

▸ **pointToCoords**(`graph`, `xPos?`): [`PT_TO_COORDS_DATA`](/reference/types/PT_TO_COORDS_DATA.md)

Add a point at the specified x position on the graph, along with two axis projectors of it.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `graph` | `Graph` | `undefined` | The graph to put the point on. |
| `xPos` | `number` | `1` | The x position of the point. Default is 1. |

#### Returns

[`PT_TO_COORDS_DATA`](/reference/types/PT_TO_COORDS_DATA.md)

A complex data object that contains the point and an array of the two axis projectors.

#### Defined in

[src/svg/cubicons/coordinate-system/Axes.ts:359](https://github.com/imaphatduc/cubecubed/blob/8295992/src/svg/cubicons/coordinate-system/Axes.ts#L359)

___

### render

▸ **render**(): [`Axes`](/reference/classes/Axes.md)

Draw (and render) the axes onto SVG.

#### Returns

[`Axes`](/reference/classes/Axes.md)

#### Defined in

[src/svg/cubicons/coordinate-system/Axes.ts:134](https://github.com/imaphatduc/cubecubed/blob/8295992/src/svg/cubicons/coordinate-system/Axes.ts#L134)

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
