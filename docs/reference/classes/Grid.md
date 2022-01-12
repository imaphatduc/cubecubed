[cubecubed](/wiki/README.md) / [Exports](/wiki/modules.md) / Grid

# Class: Grid

## Hierarchy

- `Geometry`

  ↳ **`Grid`**

## Constructors

### constructor

• **new Grid**(`__namedParameters`)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `__namedParameters` | `Object` | - |
| `__namedParameters.group` | [`Group`](/wiki/classes/Group.md) | The group that the grid belongs to. |
| `__namedParameters.hasNums?` | `boolean` | Whether or not to include numbers onto axes. |

#### Overrides

Geometry.constructor

#### Defined in

[src/cubicons/grid.ts:54](https://github.com/imaphatduc/cubecubed/blob/26131ac/src/cubicons/grid.ts#L54)

## Properties

### angle

• **angle**: `any`

The angle between this cubicon and the x axis.
This property changed after finishing animations (in real time).

#### Inherited from

Geometry.angle

#### Defined in

[src/cubicons/cubicon.ts:22](https://github.com/imaphatduc/cubecubed/blob/26131ac/src/cubicons/cubicon.ts#L22)

___

### cubType

• `Readonly` **cubType**: ``"geometry"``

#### Inherited from

Geometry.cubType

#### Defined in

[src/cubicons/geometry.ts:66](https://github.com/imaphatduc/cubecubed/blob/26131ac/src/cubicons/geometry.ts#L66)

___

### def\_cubiconBase

• **def\_cubiconBase**: `any`

The HTML tag that represents this cubicon.

#### Inherited from

Geometry.def\_cubiconBase

#### Defined in

[src/cubicons/cubicon.ts:44](https://github.com/imaphatduc/cubecubed/blob/26131ac/src/cubicons/cubicon.ts#L44)

___

### elapsedTime

• **elapsedTime**: `any`

Total time of all called animations (in milliseconds).

#### Inherited from

Geometry.elapsedTime

#### Defined in

[src/cubicons/cubicon.ts:49](https://github.com/imaphatduc/cubecubed/blob/26131ac/src/cubicons/cubicon.ts#L49)

___

### fillColor

• **fillColor**: `any`

#### Inherited from

Geometry.fillColor

#### Defined in

[src/cubicons/geometry.ts:70](https://github.com/imaphatduc/cubecubed/blob/26131ac/src/cubicons/geometry.ts#L70)

___

### fillOpacity

• **fillOpacity**: `any`

#### Inherited from

Geometry.fillOpacity

#### Defined in

[src/cubicons/geometry.ts:71](https://github.com/imaphatduc/cubecubed/blob/26131ac/src/cubicons/geometry.ts#L71)

___

### g\_cubiconWrapper

• **g\_cubiconWrapper**: `any`

The `<g/>` tag that holds this cubicon.

#### Inherited from

Geometry.g\_cubiconWrapper

#### Defined in

[src/cubicons/cubicon.ts:40](https://github.com/imaphatduc/cubecubed/blob/26131ac/src/cubicons/cubicon.ts#L40)

___

### g\_horizontal

• **g\_horizontal**: `any`

The `<g/>` tag that contains all horizontal lines.

#### Defined in

[src/cubicons/grid.ts:46](https://github.com/imaphatduc/cubecubed/blob/26131ac/src/cubicons/grid.ts#L46)

___

### g\_vertical

• **g\_vertical**: `any`

The `<g/>` tag that contains all vertical lines.

#### Defined in

[src/cubicons/grid.ts:50](https://github.com/imaphatduc/cubecubed/blob/26131ac/src/cubicons/grid.ts#L50)

___

### geoType

• `Readonly` **geoType**: ``"grid"``

#### Overrides

Geometry.geoType

#### Defined in

[src/cubicons/grid.ts:8](https://github.com/imaphatduc/cubecubed/blob/26131ac/src/cubicons/grid.ts#L8)

___

### group

• **group**: [`Group`](/wiki/classes/Group.md)

The group that this cubicon belongs to.

#### Inherited from

Geometry.group

#### Defined in

[src/cubicons/cubicon.ts:12](https://github.com/imaphatduc/cubecubed/blob/26131ac/src/cubicons/cubicon.ts#L12)

___

### hasNums

• **hasNums**: `boolean`

#### Defined in

[src/cubicons/grid.ts:52](https://github.com/imaphatduc/cubecubed/blob/26131ac/src/cubicons/grid.ts#L52)

___

### isRendered

• **isRendered**: `boolean` = `false`

#### Inherited from

Geometry.isRendered

#### Defined in

[src/cubicons/cubicon.ts:51](https://github.com/imaphatduc/cubecubed/blob/26131ac/src/cubicons/cubicon.ts#L51)

___

### lineColor

• **lineColor**: `string`

Color of the grid lines.

#### Overrides

Geometry.lineColor

#### Defined in

[src/cubicons/grid.ts:27](https://github.com/imaphatduc/cubecubed/blob/26131ac/src/cubicons/grid.ts#L27)

___

### lineWidth

• **lineWidth**: `any`

#### Inherited from

Geometry.lineWidth

#### Defined in

[src/cubicons/geometry.ts:77](https://github.com/imaphatduc/cubecubed/blob/26131ac/src/cubicons/geometry.ts#L77)

___

### moveAngle

• **moveAngle**: `any`

The sum of all rotate angles (if invoking rotate animation).

#### Inherited from

Geometry.moveAngle

#### Defined in

[src/cubicons/cubicon.ts:31](https://github.com/imaphatduc/cubecubed/blob/26131ac/src/cubicons/cubicon.ts#L31)

___

### moveVector

• **moveVector**: `any`

The sum vector of all translate vectors (if invoking translate animation).

#### Inherited from

Geometry.moveVector

#### Defined in

[src/cubicons/cubicon.ts:27](https://github.com/imaphatduc/cubecubed/blob/26131ac/src/cubicons/cubicon.ts#L27)

___

### originColor

• **originColor**: `string`

Color of the grid origin.

#### Defined in

[src/cubicons/grid.ts:13](https://github.com/imaphatduc/cubecubed/blob/26131ac/src/cubicons/grid.ts#L13)

___

### position

• **position**: [`Vector2`](/wiki/classes/Vector2.md)

Position of this cubicon.
This property changed after finishing animations (in real time).

#### Inherited from

Geometry.position

#### Defined in

[src/cubicons/cubicon.ts:17](https://github.com/imaphatduc/cubecubed/blob/26131ac/src/cubicons/cubicon.ts#L17)

___

### strokeColor

• **strokeColor**: `any`

#### Inherited from

Geometry.strokeColor

#### Defined in

[src/cubicons/geometry.ts:72](https://github.com/imaphatduc/cubecubed/blob/26131ac/src/cubicons/geometry.ts#L72)

___

### strokeWidth

• **strokeWidth**: `any`

#### Inherited from

Geometry.strokeWidth

#### Defined in

[src/cubicons/geometry.ts:73](https://github.com/imaphatduc/cubecubed/blob/26131ac/src/cubicons/geometry.ts#L73)

___

### svg\_group

• **svg\_group**: `any`

The `<svg/>` tag of this cubicon's group.

#### Inherited from

Geometry.svg\_group

#### Defined in

[src/cubicons/cubicon.ts:36](https://github.com/imaphatduc/cubecubed/blob/26131ac/src/cubicons/cubicon.ts#L36)

___

### xAxesColor

• **xAxesColor**: `string`

Color of the x axis.

#### Defined in

[src/cubicons/grid.ts:18](https://github.com/imaphatduc/cubecubed/blob/26131ac/src/cubicons/grid.ts#L18)

___

### xs

• **xs**: `number`[]

Array of integer x values.

#### Defined in

[src/cubicons/grid.ts:32](https://github.com/imaphatduc/cubecubed/blob/26131ac/src/cubicons/grid.ts#L32)

___

### yAxesColor

• **yAxesColor**: `string`

Color of the y axis.

#### Defined in

[src/cubicons/grid.ts:22](https://github.com/imaphatduc/cubecubed/blob/26131ac/src/cubicons/grid.ts#L22)

___

### ys

• **ys**: `number`[]

Array of integer y values.

#### Defined in

[src/cubicons/grid.ts:36](https://github.com/imaphatduc/cubecubed/blob/26131ac/src/cubicons/grid.ts#L36)

## Methods

### checkIfRendered

▸ **checkIfRendered**(): `void`

#### Returns

`void`

#### Inherited from

Geometry.checkIfRendered

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

Geometry.coordsGtoW

#### Defined in

[src/cubicons/geometry.ts:91](https://github.com/imaphatduc/cubecubed/blob/26131ac/src/cubicons/geometry.ts#L91)
