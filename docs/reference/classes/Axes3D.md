[cubecubed](/reference/README.md) / [Exports](/reference/modules.md) / Axes3D

# Class: Axes3D

## Hierarchy

- `CanvasCubicon`

  ↳ **`Axes3D`**

## Constructors

### constructor

• **new Axes3D**(`params`)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | `Object` | - |
| `params.CONFIG?` | [`AXES3D_CONFIG`](/reference/interfaces/AXES3D_CONFIG.md) | Config options for the axes. |
| `params.group` | [`CanvasGroup`](/reference/classes/CanvasGroup.md) | The group that the stream line belongs to. |
| `params.position?` | [`Vector3`](/reference/classes/Vector3.md) | Position of the stream line.  **`default`** Vector3(0, 0, 0) |

#### Overrides

CanvasCubicon.constructor

#### Defined in

[src/canvas/cubicons/Axes3D.ts:59](https://github.com/imaphatduc/cubecubed/blob/1d9e38f/src/canvas/cubicons/Axes3D.ts#L59)

## Properties

### group

• **group**: [`CanvasGroup`](/reference/classes/CanvasGroup.md)

The group that this cubicon belongs to.

#### Inherited from

CanvasCubicon.group

#### Defined in

[src/canvas/cubicons/CanvasCubicon.ts:11](https://github.com/imaphatduc/cubecubed/blob/1d9e38f/src/canvas/cubicons/CanvasCubicon.ts#L11)

___

### position

• **position**: [`Vector3`](/reference/classes/Vector3.md)

Position of this cubicon.
This property changed after finishing animations (in real time).

#### Inherited from

CanvasCubicon.position

#### Defined in

[src/canvas/cubicons/CanvasCubicon.ts:17](https://github.com/imaphatduc/cubecubed/blob/1d9e38f/src/canvas/cubicons/CanvasCubicon.ts#L17)

___

### scaleFactor

• **scaleFactor**: `number`

Scale the position vector of this cubicon by this number.

#### Inherited from

CanvasCubicon.scaleFactor

#### Defined in

[src/canvas/cubicons/CanvasCubicon.ts:22](https://github.com/imaphatduc/cubecubed/blob/1d9e38f/src/canvas/cubicons/CanvasCubicon.ts#L22)

___

### token

• **token**: `string`

Token string for this cubicon.

#### Inherited from

CanvasCubicon.token

#### Defined in

[src/canvas/cubicons/CanvasCubicon.ts:27](https://github.com/imaphatduc/cubecubed/blob/1d9e38f/src/canvas/cubicons/CanvasCubicon.ts#L27)

___

### xAxisColor

• **xAxisColor**: `string`

Color of the x axis.

#### Defined in

[src/canvas/cubicons/Axes3D.ts:47](https://github.com/imaphatduc/cubecubed/blob/1d9e38f/src/canvas/cubicons/Axes3D.ts#L47)

___

### xRange

• **xRange**: [`number`, `number`]

Range of the x axis.

#### Defined in

[src/canvas/cubicons/Axes3D.ts:32](https://github.com/imaphatduc/cubecubed/blob/1d9e38f/src/canvas/cubicons/Axes3D.ts#L32)

___

### yAxisColor

• **yAxisColor**: `string`

Color of the y axis.

#### Defined in

[src/canvas/cubicons/Axes3D.ts:52](https://github.com/imaphatduc/cubecubed/blob/1d9e38f/src/canvas/cubicons/Axes3D.ts#L52)

___

### yRange

• **yRange**: [`number`, `number`]

Range of the y axis.

#### Defined in

[src/canvas/cubicons/Axes3D.ts:37](https://github.com/imaphatduc/cubecubed/blob/1d9e38f/src/canvas/cubicons/Axes3D.ts#L37)

___

### zAxisColor

• **zAxisColor**: `string`

Color of the z axis.

#### Defined in

[src/canvas/cubicons/Axes3D.ts:57](https://github.com/imaphatduc/cubecubed/blob/1d9e38f/src/canvas/cubicons/Axes3D.ts#L57)

___

### zRange

• **zRange**: [`number`, `number`]

Range of the z axis.

#### Defined in

[src/canvas/cubicons/Axes3D.ts:42](https://github.com/imaphatduc/cubecubed/blob/1d9e38f/src/canvas/cubicons/Axes3D.ts#L42)

## Methods

### graph

▸ **graph**(`params`): `Graph3D`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | `Object` | - |
| `params.color?` | `string` | Color of the graph. |
| `params.xRange?` | [`number`, `number`] | x range of the graph. |
| `params.yRange?` | [`number`, `number`] | x range of the graph. |
| `params.functionDef` | (`x`: `number`, `y`: `number`) => `number` | - |

#### Returns

`Graph3D`

#### Defined in

[src/canvas/cubicons/Axes3D.ts:196](https://github.com/imaphatduc/cubecubed/blob/1d9e38f/src/canvas/cubicons/Axes3D.ts#L196)

___

### render

▸ **render**(`p`): `void`

**`internal`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `p` | `any` |

#### Returns

`void`

#### Defined in

[src/canvas/cubicons/Axes3D.ts:94](https://github.com/imaphatduc/cubecubed/blob/1d9e38f/src/canvas/cubicons/Axes3D.ts#L94)
