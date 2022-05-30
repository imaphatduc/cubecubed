[cubecubed](/reference/README.md) / [Exports](/reference/modules.md) / CanvasGroup

# Class: CanvasGroup

The dad/mom object of every pack of objects in the visualization.

A group must belong to a scene.

Group is classified in terms of its purpose.
Below `CanvasGroup()` is a HTML canvas group to render canvas-related objects.

Please see the Quick Start page in official documentation for clearer understanding about this `Group` term.

## Constructors

### constructor

• **new CanvasGroup**(`groupName`, `scene`, `type?`)

Include this group to HTML flow.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `groupName` | `string` | `undefined` | Name of the group. |
| `scene` | [`Scene`](/reference/classes/Scene.md) | `undefined` | The scene that the group belongs to. |
| `type` | ``"2d"`` \| ``"3d"`` | `"2d"` | - |

#### Defined in

[src/canvas/group/CanvasGroup.ts:140](https://github.com/imaphatduc/cubecubed/blob/1d9e38f/src/canvas/group/CanvasGroup.ts#L140)

## Properties

### animationsInfo

• **animationsInfo**: [`ANIMATIONS_INFO`](/reference/interfaces/ANIMATIONS_INFO.md)[] = `[]`

List of animations played in this group.

#### Defined in

[src/canvas/group/CanvasGroup.ts:54](https://github.com/imaphatduc/cubecubed/blob/1d9e38f/src/canvas/group/CanvasGroup.ts#L54)

___

### canvas\_group

• **canvas\_group**: `Renderer`

The `<canvas/>` element that represents this scene.

#### Defined in

[src/canvas/group/CanvasGroup.ts:37](https://github.com/imaphatduc/cubecubed/blob/1d9e38f/src/canvas/group/CanvasGroup.ts#L37)

___

### cubicons

• **cubicons**: `CanvasCubicon`[] = `[]`

List of cubicons included in this group.

#### Defined in

[src/canvas/group/CanvasGroup.ts:49](https://github.com/imaphatduc/cubecubed/blob/1d9e38f/src/canvas/group/CanvasGroup.ts#L49)

___

### groupElapsed

• **groupElapsed**: `number` = `0`

The time passed by since this group was created. (in milliseconds)

> (aka the total time of all the animations **called** in this group)

#### Defined in

[src/canvas/group/CanvasGroup.ts:131](https://github.com/imaphatduc/cubecubed/blob/1d9e38f/src/canvas/group/CanvasGroup.ts#L131)

___

### name

• **name**: `string`

Name of this scene.

#### Defined in

[src/canvas/group/CanvasGroup.ts:42](https://github.com/imaphatduc/cubecubed/blob/1d9e38f/src/canvas/group/CanvasGroup.ts#L42)

___

### ratio

• **ratio**: [`number`, `number`, `number`]

Ratio between square length in x, y and z direction.

#### Defined in

[src/canvas/group/CanvasGroup.ts:79](https://github.com/imaphatduc/cubecubed/blob/1d9e38f/src/canvas/group/CanvasGroup.ts#L79)

___

### scene

• **scene**: [`Scene`](/reference/classes/Scene.md)

The scene that this group belongs to.

#### Defined in

[src/canvas/group/CanvasGroup.ts:32](https://github.com/imaphatduc/cubecubed/blob/1d9e38f/src/canvas/group/CanvasGroup.ts#L32)

___

### squareLength

• **squareLength**: `number` = `40`

Length of a square in this group.

#### Defined in

[src/canvas/group/CanvasGroup.ts:74](https://github.com/imaphatduc/cubecubed/blob/1d9e38f/src/canvas/group/CanvasGroup.ts#L74)

___

### xBound

• **xBound**: [`number`, `number`]

x coordinate bound values of this group.

#### Defined in

[src/canvas/group/CanvasGroup.ts:84](https://github.com/imaphatduc/cubecubed/blob/1d9e38f/src/canvas/group/CanvasGroup.ts#L84)

___

### xGtoW

• **xGtoW**: `ScaleLinear`<`number`, `number`, `never`\>

Convert x value of grid coordinates to real-world coordinates.

#### Defined in

[src/canvas/group/CanvasGroup.ts:99](https://github.com/imaphatduc/cubecubed/blob/1d9e38f/src/canvas/group/CanvasGroup.ts#L99)

___

### xSquareNums

• **xSquareNums**: `number`

Number of squares in the x direction.

#### Defined in

[src/canvas/group/CanvasGroup.ts:59](https://github.com/imaphatduc/cubecubed/blob/1d9e38f/src/canvas/group/CanvasGroup.ts#L59)

___

### xWtoG

• **xWtoG**: `ScaleLinear`<`number`, `number`, `never`\>

Convert x value of real-world coordinates to grid coordinates.

#### Defined in

[src/canvas/group/CanvasGroup.ts:114](https://github.com/imaphatduc/cubecubed/blob/1d9e38f/src/canvas/group/CanvasGroup.ts#L114)

___

### yBound

• **yBound**: [`number`, `number`]

y coordinate bound values of this group.

#### Defined in

[src/canvas/group/CanvasGroup.ts:89](https://github.com/imaphatduc/cubecubed/blob/1d9e38f/src/canvas/group/CanvasGroup.ts#L89)

___

### yGtoW

• **yGtoW**: `ScaleLinear`<`number`, `number`, `never`\>

Convert y value of grid coordinates to real-world coordinates.

#### Defined in

[src/canvas/group/CanvasGroup.ts:104](https://github.com/imaphatduc/cubecubed/blob/1d9e38f/src/canvas/group/CanvasGroup.ts#L104)

___

### ySquareNums

• **ySquareNums**: `number`

Number of squares in the y direction.

#### Defined in

[src/canvas/group/CanvasGroup.ts:64](https://github.com/imaphatduc/cubecubed/blob/1d9e38f/src/canvas/group/CanvasGroup.ts#L64)

___

### yWtoG

• **yWtoG**: `ScaleLinear`<`number`, `number`, `never`\>

Convert y value of real-world coordinates to grid coordinates.

#### Defined in

[src/canvas/group/CanvasGroup.ts:119](https://github.com/imaphatduc/cubecubed/blob/1d9e38f/src/canvas/group/CanvasGroup.ts#L119)

___

### zBound

• **zBound**: [`number`, `number`]

z coordinate bound values of this group.

#### Defined in

[src/canvas/group/CanvasGroup.ts:94](https://github.com/imaphatduc/cubecubed/blob/1d9e38f/src/canvas/group/CanvasGroup.ts#L94)

___

### zGtoW

• **zGtoW**: `ScaleLinear`<`number`, `number`, `never`\>

Convert z value of grid coordinates to real-world coordinates.

#### Defined in

[src/canvas/group/CanvasGroup.ts:109](https://github.com/imaphatduc/cubecubed/blob/1d9e38f/src/canvas/group/CanvasGroup.ts#L109)

___

### zSquareNums

• **zSquareNums**: `number`

Number of squares in the z direction.

#### Defined in

[src/canvas/group/CanvasGroup.ts:69](https://github.com/imaphatduc/cubecubed/blob/1d9e38f/src/canvas/group/CanvasGroup.ts#L69)

___

### zWtoG

• **zWtoG**: `ScaleLinear`<`number`, `number`, `never`\>

Convert z value of real-world coordinates to grid coordinates.

#### Defined in

[src/canvas/group/CanvasGroup.ts:124](https://github.com/imaphatduc/cubecubed/blob/1d9e38f/src/canvas/group/CanvasGroup.ts#L124)

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

[src/canvas/group/CanvasGroup.ts:290](https://github.com/imaphatduc/cubecubed/blob/1d9e38f/src/canvas/group/CanvasGroup.ts#L290)

___

### remove

▸ **remove**(`cubicons`): `void`

Remove cubicons from this group.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `cubicons` | `CanvasCubicon`[] | An array of cubicons to remove. |

#### Returns

`void`

#### Defined in

[src/canvas/group/CanvasGroup.ts:322](https://github.com/imaphatduc/cubecubed/blob/1d9e38f/src/canvas/group/CanvasGroup.ts#L322)

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

[src/canvas/group/CanvasGroup.ts:311](https://github.com/imaphatduc/cubecubed/blob/1d9e38f/src/canvas/group/CanvasGroup.ts#L311)
