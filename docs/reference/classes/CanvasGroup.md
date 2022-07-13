[cubecubed](/reference/README.md) / [Exports](/reference/modules.md) / CanvasGroup

# Class: CanvasGroup

The dad/mom object of every pack of objects in the visualization.

A group must belong to a scene.

Group is classified in terms of its purpose.
Below `CanvasGroup()` is a HTML canvas group to render canvas-related objects.

Please see the Quick Start page in official documentation for clearer understanding about this `Group` term.

## Constructors

### constructor

• **new CanvasGroup**(`groupName`, `scene`)

Include this group to HTML flow.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `groupName` | `string` | Name of the group. |
| `scene` | [`Scene`](/reference/classes/Scene.md) | The scene that the group belongs to. |

#### Defined in

[src/canvas/group/CanvasGroup.ts:155](https://github.com/imaphatduc/cubecubed/blob/4495c75/src/canvas/group/CanvasGroup.ts#L155)

## Properties

### cubicons

• **cubicons**: [`CanvasCubicon`](/reference/classes/CanvasCubicon.md)[] = `[]`

List of cubicons included in this group.

#### Defined in

[src/canvas/group/CanvasGroup.ts:69](https://github.com/imaphatduc/cubecubed/blob/4495c75/src/canvas/group/CanvasGroup.ts#L69)

___

### groupElapsed

• **groupElapsed**: `number` = `0`

The time passed by since this group was created. (in milliseconds)

> (aka the total time of all the animations **called** in this group)

#### Defined in

[src/canvas/group/CanvasGroup.ts:146](https://github.com/imaphatduc/cubecubed/blob/4495c75/src/canvas/group/CanvasGroup.ts#L146)

___

### name

• **name**: `string`

Name of this scene.

#### Defined in

[src/canvas/group/CanvasGroup.ts:64](https://github.com/imaphatduc/cubecubed/blob/4495c75/src/canvas/group/CanvasGroup.ts#L64)

___

### ratio

• **ratio**: [`number`, `number`, `number`]

Ratio between square length in x, y and z direction.

#### Defined in

[src/canvas/group/CanvasGroup.ts:94](https://github.com/imaphatduc/cubecubed/blob/4495c75/src/canvas/group/CanvasGroup.ts#L94)

___

### scene

• **scene**: [`Scene`](/reference/classes/Scene.md)

The scene that this group belongs to.

#### Defined in

[src/canvas/group/CanvasGroup.ts:39](https://github.com/imaphatduc/cubecubed/blob/4495c75/src/canvas/group/CanvasGroup.ts#L39)

___

### squareLength

• **squareLength**: `number` = `40`

Length of a square in this group.

#### Defined in

[src/canvas/group/CanvasGroup.ts:89](https://github.com/imaphatduc/cubecubed/blob/4495c75/src/canvas/group/CanvasGroup.ts#L89)

___

### threeScene

• **threeScene**: `Scene`

Three.js Scene object

#### Defined in

[src/canvas/group/CanvasGroup.ts:44](https://github.com/imaphatduc/cubecubed/blob/4495c75/src/canvas/group/CanvasGroup.ts#L44)

___

### xBound

• **xBound**: [`number`, `number`]

x coordinate bound values of this group.

#### Defined in

[src/canvas/group/CanvasGroup.ts:99](https://github.com/imaphatduc/cubecubed/blob/4495c75/src/canvas/group/CanvasGroup.ts#L99)

___

### xGtoW

• **xGtoW**: `ScaleLinear`<`number`, `number`, `never`\>

Convert x value of grid coordinates to real-world coordinates.

#### Defined in

[src/canvas/group/CanvasGroup.ts:114](https://github.com/imaphatduc/cubecubed/blob/4495c75/src/canvas/group/CanvasGroup.ts#L114)

___

### xSquareNums

• **xSquareNums**: `number`

Number of squares in the x direction.

#### Defined in

[src/canvas/group/CanvasGroup.ts:74](https://github.com/imaphatduc/cubecubed/blob/4495c75/src/canvas/group/CanvasGroup.ts#L74)

___

### xWtoG

• **xWtoG**: `ScaleLinear`<`number`, `number`, `never`\>

Convert x value of real-world coordinates to grid coordinates.

#### Defined in

[src/canvas/group/CanvasGroup.ts:129](https://github.com/imaphatduc/cubecubed/blob/4495c75/src/canvas/group/CanvasGroup.ts#L129)

___

### yBound

• **yBound**: [`number`, `number`]

y coordinate bound values of this group.

#### Defined in

[src/canvas/group/CanvasGroup.ts:104](https://github.com/imaphatduc/cubecubed/blob/4495c75/src/canvas/group/CanvasGroup.ts#L104)

___

### yGtoW

• **yGtoW**: `ScaleLinear`<`number`, `number`, `never`\>

Convert y value of grid coordinates to real-world coordinates.

#### Defined in

[src/canvas/group/CanvasGroup.ts:119](https://github.com/imaphatduc/cubecubed/blob/4495c75/src/canvas/group/CanvasGroup.ts#L119)

___

### ySquareNums

• **ySquareNums**: `number`

Number of squares in the y direction.

#### Defined in

[src/canvas/group/CanvasGroup.ts:79](https://github.com/imaphatduc/cubecubed/blob/4495c75/src/canvas/group/CanvasGroup.ts#L79)

___

### yWtoG

• **yWtoG**: `ScaleLinear`<`number`, `number`, `never`\>

Convert y value of real-world coordinates to grid coordinates.

#### Defined in

[src/canvas/group/CanvasGroup.ts:134](https://github.com/imaphatduc/cubecubed/blob/4495c75/src/canvas/group/CanvasGroup.ts#L134)

___

### zBound

• **zBound**: [`number`, `number`]

z coordinate bound values of this group.

#### Defined in

[src/canvas/group/CanvasGroup.ts:109](https://github.com/imaphatduc/cubecubed/blob/4495c75/src/canvas/group/CanvasGroup.ts#L109)

___

### zGtoW

• **zGtoW**: `ScaleLinear`<`number`, `number`, `never`\>

Convert z value of grid coordinates to real-world coordinates.

#### Defined in

[src/canvas/group/CanvasGroup.ts:124](https://github.com/imaphatduc/cubecubed/blob/4495c75/src/canvas/group/CanvasGroup.ts#L124)

___

### zSquareNums

• **zSquareNums**: `number`

Number of squares in the z direction.

#### Defined in

[src/canvas/group/CanvasGroup.ts:84](https://github.com/imaphatduc/cubecubed/blob/4495c75/src/canvas/group/CanvasGroup.ts#L84)

___

### zWtoG

• **zWtoG**: `ScaleLinear`<`number`, `number`, `never`\>

Convert z value of real-world coordinates to grid coordinates.

#### Defined in

[src/canvas/group/CanvasGroup.ts:139](https://github.com/imaphatduc/cubecubed/blob/4495c75/src/canvas/group/CanvasGroup.ts#L139)

## Methods

### play

▸ **play**(`anims`): `void`

Play all the animations included in a queue.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `anims` | `any`[] | Array (Queue) of animations to play. |

#### Returns

`void`

#### Defined in

[src/canvas/group/CanvasGroup.ts:314](https://github.com/imaphatduc/cubecubed/blob/4495c75/src/canvas/group/CanvasGroup.ts#L314)

___

### remove

▸ **remove**(`cubicons`): `void`

Remove cubicons from this group.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `cubicons` | [`CanvasCubicon`](/reference/classes/CanvasCubicon.md)[] | An array of cubicons to remove. |

#### Returns

`void`

#### Defined in

[src/canvas/group/CanvasGroup.ts:342](https://github.com/imaphatduc/cubecubed/blob/4495c75/src/canvas/group/CanvasGroup.ts#L342)

___

### sleep

▸ **sleep**(`milliseconds`): `void`

Sleep this group for an amount of time.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `milliseconds` | `number` | The time to sleep. |

#### Returns

`void`

#### Defined in

[src/canvas/group/CanvasGroup.ts:331](https://github.com/imaphatduc/cubecubed/blob/4495c75/src/canvas/group/CanvasGroup.ts#L331)
