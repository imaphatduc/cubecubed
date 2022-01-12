[cubecubed](/wiki/README.md) / [Exports](/wiki/modules.md) / Axes

# Class: Axes

Return the axes in coordinate system.

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
| `params.CONFIG?` | `AXES_CONFIG` | - |
| `params.group` | [`Group`](/wiki/classes/Group.md) | - |
| `params.position?` | [`Vector2`](/wiki/classes/Vector2.md) | - |

#### Overrides

CoordinateSystem.constructor

#### Defined in

[src/cubicons/coordinateSystem.ts:113](https://github.com/imaphatduc/cubecubed/blob/26131ac/src/cubicons/coordinateSystem.ts#L113)

## Properties

### angle

• **angle**: `any`

The angle between this cubicon and the x axis.
This property changed after finishing animations (in real time).

#### Inherited from

CoordinateSystem.angle

#### Defined in

[src/cubicons/cubicon.ts:22](https://github.com/imaphatduc/cubecubed/blob/26131ac/src/cubicons/cubicon.ts#L22)

___

### coordSysObjType

• `Readonly` **coordSysObjType**: ``"axes"``

#### Overrides

CoordinateSystem.coordSysObjType

#### Defined in

[src/cubicons/coordinateSystem.ts:60](https://github.com/imaphatduc/cubecubed/blob/26131ac/src/cubicons/coordinateSystem.ts#L60)

___

### cubType

• `Readonly` **cubType**: ``"coordinate-system"``

#### Inherited from

CoordinateSystem.cubType

#### Defined in

[src/cubicons/coordinateSystem.ts:37](https://github.com/imaphatduc/cubecubed/blob/26131ac/src/cubicons/coordinateSystem.ts#L37)

___

### def\_cubiconBase

• **def\_cubiconBase**: `any`

The HTML tag that represents this cubicon.

#### Inherited from

CoordinateSystem.def\_cubiconBase

#### Defined in

[src/cubicons/cubicon.ts:44](https://github.com/imaphatduc/cubecubed/blob/26131ac/src/cubicons/cubicon.ts#L44)

___

### elapsedTime

• **elapsedTime**: `any`

Total time of all called animations (in milliseconds).

#### Inherited from

CoordinateSystem.elapsedTime

#### Defined in

[src/cubicons/cubicon.ts:49](https://github.com/imaphatduc/cubecubed/blob/26131ac/src/cubicons/cubicon.ts#L49)

___

### g\_axes

• **g\_axes**: `any`

The `<svg/>` element that contains the axes.

#### Defined in

[src/cubicons/coordinateSystem.ts:95](https://github.com/imaphatduc/cubecubed/blob/26131ac/src/cubicons/coordinateSystem.ts#L95)

___

### g\_coordinate

• **g\_coordinate**: `any`

The `<svg/>` element that contains the whole coordinate system and everything included in it.

#### Inherited from

CoordinateSystem.g\_coordinate

#### Defined in

[src/cubicons/coordinateSystem.ts:43](https://github.com/imaphatduc/cubecubed/blob/26131ac/src/cubicons/coordinateSystem.ts#L43)

___

### g\_cubiconWrapper

• **g\_cubiconWrapper**: `any`

The `<g/>` tag that holds this cubicon.

#### Inherited from

CoordinateSystem.g\_cubiconWrapper

#### Defined in

[src/cubicons/cubicon.ts:40](https://github.com/imaphatduc/cubecubed/blob/26131ac/src/cubicons/cubicon.ts#L40)

___

### g\_graphs

• **g\_graphs**: `any`

The `<svg/>` element (inside .axes) that contains all the graphs inside a pair of axes.

#### Defined in

[src/cubicons/coordinateSystem.ts:108](https://github.com/imaphatduc/cubecubed/blob/26131ac/src/cubicons/coordinateSystem.ts#L108)

___

### group

• **group**: [`Group`](/wiki/classes/Group.md)

The group that this cubicon belongs to.

#### Inherited from

CoordinateSystem.group

#### Defined in

[src/cubicons/cubicon.ts:12](https://github.com/imaphatduc/cubecubed/blob/26131ac/src/cubicons/cubicon.ts#L12)

___

### hasNums

• **hasNums**: `boolean`

Whether the axes include numbers

#### Defined in

[src/cubicons/coordinateSystem.ts:81](https://github.com/imaphatduc/cubecubed/blob/26131ac/src/cubicons/coordinateSystem.ts#L81)

___

### isRendered

• **isRendered**: `boolean` = `false`

#### Inherited from

CoordinateSystem.isRendered

#### Defined in

[src/cubicons/cubicon.ts:51](https://github.com/imaphatduc/cubecubed/blob/26131ac/src/cubicons/cubicon.ts#L51)

___

### moveAngle

• **moveAngle**: `any`

The sum of all rotate angles (if invoking rotate animation).

#### Inherited from

CoordinateSystem.moveAngle

#### Defined in

[src/cubicons/cubicon.ts:31](https://github.com/imaphatduc/cubecubed/blob/26131ac/src/cubicons/cubicon.ts#L31)

___

### moveVector

• **moveVector**: `any`

The sum vector of all translate vectors (if invoking translate animation).

#### Inherited from

CoordinateSystem.moveVector

#### Defined in

[src/cubicons/cubicon.ts:27](https://github.com/imaphatduc/cubecubed/blob/26131ac/src/cubicons/cubicon.ts#L27)

___

### position

• **position**: [`Vector2`](/wiki/classes/Vector2.md)

Position of this cubicon.
This property changed after finishing animations (in real time).

#### Inherited from

CoordinateSystem.position

#### Defined in

[src/cubicons/cubicon.ts:17](https://github.com/imaphatduc/cubecubed/blob/26131ac/src/cubicons/cubicon.ts#L17)

___

### svg\_group

• **svg\_group**: `any`

The `<svg/>` tag of this cubicon's group.

#### Inherited from

CoordinateSystem.svg\_group

#### Defined in

[src/cubicons/cubicon.ts:36](https://github.com/imaphatduc/cubecubed/blob/26131ac/src/cubicons/cubicon.ts#L36)

___

### xAxis

• **xAxis**: `any`

The `<svg/>` element that contains the x axis.

#### Defined in

[src/cubicons/coordinateSystem.ts:99](https://github.com/imaphatduc/cubecubed/blob/26131ac/src/cubicons/coordinateSystem.ts#L99)

___

### xLength

• **xLength**: `number`

Length of the x axis.

#### Defined in

[src/cubicons/coordinateSystem.ts:69](https://github.com/imaphatduc/cubecubed/blob/26131ac/src/cubicons/coordinateSystem.ts#L69)

___

### xRange

• **xRange**: [`number`, `number`]

Range of the x axis.

#### Defined in

[src/cubicons/coordinateSystem.ts:65](https://github.com/imaphatduc/cubecubed/blob/26131ac/src/cubicons/coordinateSystem.ts#L65)

___

### xScale

• **xScale**: `ScaleLinear`<`number`, `number`, `never`\>

Scale function of the x axis, convert from SVG-Cartesian coordinates to the axes' coordinates.

#### Defined in

[src/cubicons/coordinateSystem.ts:86](https://github.com/imaphatduc/cubecubed/blob/26131ac/src/cubicons/coordinateSystem.ts#L86)

___

### yAxis

• **yAxis**: `any`

The `<svg/>` element that contains the y axis.

#### Defined in

[src/cubicons/coordinateSystem.ts:103](https://github.com/imaphatduc/cubecubed/blob/26131ac/src/cubicons/coordinateSystem.ts#L103)

___

### yLength

• **yLength**: `number`

Length of the y axis.

#### Defined in

[src/cubicons/coordinateSystem.ts:77](https://github.com/imaphatduc/cubecubed/blob/26131ac/src/cubicons/coordinateSystem.ts#L77)

___

### yRange

• **yRange**: [`number`, `number`]

Range of the y axis.

#### Defined in

[src/cubicons/coordinateSystem.ts:73](https://github.com/imaphatduc/cubecubed/blob/26131ac/src/cubicons/coordinateSystem.ts#L73)

___

### yScale

• **yScale**: `ScaleLinear`<`number`, `number`, `never`\>

Scale function of the y axis, convert from SVG-Cartesian coordinates to the axes' coordinates.

#### Defined in

[src/cubicons/coordinateSystem.ts:90](https://github.com/imaphatduc/cubecubed/blob/26131ac/src/cubicons/coordinateSystem.ts#L90)

## Methods

### addGraphLabel

▸ **addGraphLabel**(`graph`, `text`, `xPos?`): `Label`

Add label onto a graph.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `graph` | `Graph` | The graph to put the label on. |
| `text` | `string` | Content of the label. |
| `xPos` | `number` | x position of the label. Default is the rightmost value on the x axis. |

#### Returns

`Label`

A label.

#### Defined in

[src/cubicons/coordinateSystem.ts:307](https://github.com/imaphatduc/cubecubed/blob/26131ac/src/cubicons/coordinateSystem.ts#L307)

___

### checkIfRendered

▸ **checkIfRendered**(): `void`

#### Returns

`void`

#### Inherited from

CoordinateSystem.checkIfRendered

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

#### Defined in

[src/cubicons/coordinateSystem.ts:263](https://github.com/imaphatduc/cubecubed/blob/26131ac/src/cubicons/coordinateSystem.ts#L263)

___

### graph

▸ **graph**(`params`): `Graph`

Graph a function onto the axes.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | `Object` | Options to form the graph. |
| `params.color?` | `string` | Color of the graph. |
| `params.functionDef` | `Function` | Function of the graph. |
| `params.xRange?` | [`number`, `number`] | x range of the graph. |

#### Returns

`Graph`

A plotted graph.

#### Defined in

[src/cubicons/coordinateSystem.ts:274](https://github.com/imaphatduc/cubecubed/blob/26131ac/src/cubicons/coordinateSystem.ts#L274)

___

### pointOnGraph

▸ **pointOnGraph**(`graph`, `xPos?`): `PT_ON_GRAPH_DATA`

Add a point at the specified x position on the graph.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `graph` | `Graph` | `undefined` | The graph to put the point on. |
| `xPos` | `number` | `1` | The x position of the point. Default is 1. |

#### Returns

`PT_ON_GRAPH_DATA`

A complex data object that contains the point.

#### Defined in

[src/cubicons/coordinateSystem.ts:325](https://github.com/imaphatduc/cubecubed/blob/26131ac/src/cubicons/coordinateSystem.ts#L325)

___

### pointToCoords

▸ **pointToCoords**(`graph`, `xPos?`): `PT_TO_COORDS_DATA`

Add a point at the specified x position on the graph, along with two axis projectors of it.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `graph` | `Graph` | `undefined` | The graph to put the point on. |
| `xPos` | `number` | `1` | The x position of the point. Default is 1. |

#### Returns

`PT_TO_COORDS_DATA`

A complex data object that contains the point and an array of the two axis projectors.

#### Defined in

[src/cubicons/coordinateSystem.ts:351](https://github.com/imaphatduc/cubecubed/blob/26131ac/src/cubicons/coordinateSystem.ts#L351)

___

### render

▸ **render**(): [`Axes`](/wiki/classes/Axes.md)

Draw (and render) the axes onto SVG.

#### Returns

[`Axes`](/wiki/classes/Axes.md)

#### Defined in

[src/cubicons/coordinateSystem.ts:145](https://github.com/imaphatduc/cubecubed/blob/26131ac/src/cubicons/coordinateSystem.ts#L145)
