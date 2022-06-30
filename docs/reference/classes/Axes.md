[cubecubed](/reference/README.md) / [Exports](/reference/modules.md) / Axes

# Class: Axes

## Hierarchy

- `CoordinateSystem`

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

CoordinateSystem.constructor

#### Defined in

[src/svg/cubicons/coordinate-system/Axes.ts:96](https://github.com/imaphatduc/cubecubed/blob/0dc8d92/src/svg/cubicons/coordinate-system/Axes.ts#L96)

## Properties

### angle

• **angle**: `number` = `0`

The angle between this cubicon and the x axis.
This property changed after finishing animations (in real time).

#### Inherited from

CoordinateSystem.angle

#### Defined in

[src/svg/cubicons/Cubicon.ts:26](https://github.com/imaphatduc/cubecubed/blob/0dc8d92/src/svg/cubicons/Cubicon.ts#L26)

___

### coordSysObjType

• `Readonly` **coordSysObjType**: ``"axes"``

#### Overrides

CoordinateSystem.coordSysObjType

#### Defined in

[src/svg/cubicons/coordinate-system/Axes.ts:46](https://github.com/imaphatduc/cubecubed/blob/0dc8d92/src/svg/cubicons/coordinate-system/Axes.ts#L46)

___

### cubType

• `Readonly` **cubType**: ``"coordinate-system"``

#### Inherited from

CoordinateSystem.cubType

#### Defined in

[src/svg/cubicons/coordinate-system/CoordinateSystem.ts:8](https://github.com/imaphatduc/cubecubed/blob/0dc8d92/src/svg/cubicons/coordinate-system/CoordinateSystem.ts#L8)

___

### def\_cubiconBase

• **def\_cubiconBase**: `any`

The HTML tag that represents this cubicon.

#### Inherited from

CoordinateSystem.def\_cubiconBase

#### Defined in

[src/svg/cubicons/Cubicon.ts:51](https://github.com/imaphatduc/cubecubed/blob/0dc8d92/src/svg/cubicons/Cubicon.ts#L51)

___

### g\_axes

• **g\_axes**: `any`

The `<svg/>` element that contains the axes.

#### Defined in

[src/svg/cubicons/coordinate-system/Axes.ts:76](https://github.com/imaphatduc/cubecubed/blob/0dc8d92/src/svg/cubicons/coordinate-system/Axes.ts#L76)

___

### g\_coordinate

• **g\_coordinate**: `any`

The `<svg/>` element that contains the whole coordinate system and everything included in it.

#### Inherited from

CoordinateSystem.g\_coordinate

#### Defined in

[src/svg/cubicons/coordinate-system/CoordinateSystem.ts:14](https://github.com/imaphatduc/cubecubed/blob/0dc8d92/src/svg/cubicons/coordinate-system/CoordinateSystem.ts#L14)

___

### g\_cubiconWrapper

• **g\_cubiconWrapper**: `any`

The `<g/>` tag that holds this cubicon.

#### Inherited from

CoordinateSystem.g\_cubiconWrapper

#### Defined in

[src/svg/cubicons/Cubicon.ts:46](https://github.com/imaphatduc/cubecubed/blob/0dc8d92/src/svg/cubicons/Cubicon.ts#L46)

___

### g\_graphs

• **g\_graphs**: `any`

The `<svg/>` element (inside .axes) that contains all the graphs inside a pair of axes.

#### Defined in

[src/svg/cubicons/coordinate-system/Axes.ts:91](https://github.com/imaphatduc/cubecubed/blob/0dc8d92/src/svg/cubicons/coordinate-system/Axes.ts#L91)

___

### group

• **group**: [`Group`](/reference/classes/Group.md)

The group that this cubicon belongs to.

#### Inherited from

CoordinateSystem.group

#### Defined in

[src/svg/cubicons/Cubicon.ts:14](https://github.com/imaphatduc/cubecubed/blob/0dc8d92/src/svg/cubicons/Cubicon.ts#L14)

___

### hasNums

• **hasNums**: `boolean`

Whether the axes include numbers

#### Defined in

[src/svg/cubicons/coordinate-system/Axes.ts:61](https://github.com/imaphatduc/cubecubed/blob/0dc8d92/src/svg/cubicons/coordinate-system/Axes.ts#L61)

___

### moveAngle

• **moveAngle**: `number` = `0`

The sum of all rotate angles (if invoking rotate animation).

#### Inherited from

CoordinateSystem.moveAngle

#### Defined in

[src/svg/cubicons/Cubicon.ts:36](https://github.com/imaphatduc/cubecubed/blob/0dc8d92/src/svg/cubicons/Cubicon.ts#L36)

___

### moveVector

• **moveVector**: [`Vector2`](/reference/classes/Vector2.md)

The sum vector of all translate vectors (if invoking translate animation).

#### Inherited from

CoordinateSystem.moveVector

#### Defined in

[src/svg/cubicons/Cubicon.ts:31](https://github.com/imaphatduc/cubecubed/blob/0dc8d92/src/svg/cubicons/Cubicon.ts#L31)

___

### position

• **position**: [`Vector2`](/reference/classes/Vector2.md)

Position of this cubicon.
This property changed after finishing animations (in real time).

#### Inherited from

CoordinateSystem.position

#### Defined in

[src/svg/cubicons/Cubicon.ts:20](https://github.com/imaphatduc/cubecubed/blob/0dc8d92/src/svg/cubicons/Cubicon.ts#L20)

___

### svg\_group

• **svg\_group**: `any`

The `<svg/>` tag of this cubicon's group.

#### Inherited from

CoordinateSystem.svg\_group

#### Defined in

[src/svg/cubicons/Cubicon.ts:41](https://github.com/imaphatduc/cubecubed/blob/0dc8d92/src/svg/cubicons/Cubicon.ts#L41)

___

### xAxis

• **xAxis**: `any`

The `<svg/>` element that contains the x axis.

#### Defined in

[src/svg/cubicons/coordinate-system/Axes.ts:81](https://github.com/imaphatduc/cubecubed/blob/0dc8d92/src/svg/cubicons/coordinate-system/Axes.ts#L81)

___

### xRange

• **xRange**: [`number`, `number`]

Range of the x axis.

#### Defined in

[src/svg/cubicons/coordinate-system/Axes.ts:51](https://github.com/imaphatduc/cubecubed/blob/0dc8d92/src/svg/cubicons/coordinate-system/Axes.ts#L51)

___

### xScale

• **xScale**: `ScaleLinear`<`number`, `number`, `never`\>

Scale function of the x axis, convert from SVG-Cartesian coordinates to the axes' coordinates.

#### Defined in

[src/svg/cubicons/coordinate-system/Axes.ts:66](https://github.com/imaphatduc/cubecubed/blob/0dc8d92/src/svg/cubicons/coordinate-system/Axes.ts#L66)

___

### yAxis

• **yAxis**: `any`

The `<svg/>` element that contains the y axis.

#### Defined in

[src/svg/cubicons/coordinate-system/Axes.ts:86](https://github.com/imaphatduc/cubecubed/blob/0dc8d92/src/svg/cubicons/coordinate-system/Axes.ts#L86)

___

### yRange

• **yRange**: [`number`, `number`]

Range of the y axis.

#### Defined in

[src/svg/cubicons/coordinate-system/Axes.ts:56](https://github.com/imaphatduc/cubecubed/blob/0dc8d92/src/svg/cubicons/coordinate-system/Axes.ts#L56)

___

### yScale

• **yScale**: `ScaleLinear`<`number`, `number`, `never`\>

Scale function of the y axis, convert from SVG-Cartesian coordinates to the axes' coordinates.

#### Defined in

[src/svg/cubicons/coordinate-system/Axes.ts:71](https://github.com/imaphatduc/cubecubed/blob/0dc8d92/src/svg/cubicons/coordinate-system/Axes.ts#L71)

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
| `color` | `any` | `graph.graphColor` | - |
| `fontSize` | `number` | `18` | - |

#### Returns

`Label`

A label.

#### Defined in

[src/svg/cubicons/coordinate-system/Axes.ts:296](https://github.com/imaphatduc/cubecubed/blob/0dc8d92/src/svg/cubicons/coordinate-system/Axes.ts#L296)

___

### checkIfRendered

▸ **checkIfRendered**(): `void`

#### Returns

`void`

#### Inherited from

CoordinateSystem.checkIfRendered

#### Defined in

[src/svg/cubicons/Cubicon.ts:65](https://github.com/imaphatduc/cubecubed/blob/0dc8d92/src/svg/cubicons/Cubicon.ts#L65)

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

#### Defined in

[src/svg/cubicons/coordinate-system/Axes.ts:252](https://github.com/imaphatduc/cubecubed/blob/0dc8d92/src/svg/cubicons/coordinate-system/Axes.ts#L252)

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

[src/svg/cubicons/coordinate-system/Axes.ts:263](https://github.com/imaphatduc/cubecubed/blob/0dc8d92/src/svg/cubicons/coordinate-system/Axes.ts#L263)

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

[src/svg/cubicons/coordinate-system/Axes.ts:322](https://github.com/imaphatduc/cubecubed/blob/0dc8d92/src/svg/cubicons/coordinate-system/Axes.ts#L322)

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

[src/svg/cubicons/coordinate-system/Axes.ts:348](https://github.com/imaphatduc/cubecubed/blob/0dc8d92/src/svg/cubicons/coordinate-system/Axes.ts#L348)

___

### render

▸ **render**(): [`Axes`](/reference/classes/Axes.md)

Draw (and render) the axes onto SVG.

#### Returns

[`Axes`](/reference/classes/Axes.md)

#### Defined in

[src/svg/cubicons/coordinate-system/Axes.ts:129](https://github.com/imaphatduc/cubecubed/blob/0dc8d92/src/svg/cubicons/coordinate-system/Axes.ts#L129)
