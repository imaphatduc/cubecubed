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

[src/canvas/group/CanvasGroup.ts:138](https://github.com/imaphatduc/cubecubed/blob/db7d6e8/src/canvas/group/CanvasGroup.ts#L138)

## Properties

### animationsInfo

• **animationsInfo**: [`ANIMATIONS_INFO`](/reference/interfaces/ANIMATIONS_INFO.md)[] = `[]`

List of animations played in this group.

#### Defined in

[src/canvas/group/CanvasGroup.ts:52](https://github.com/imaphatduc/cubecubed/blob/db7d6e8/src/canvas/group/CanvasGroup.ts#L52)

___

### canvas\_group

• **canvas\_group**: `Renderer`

The `<canvas/>` element that represents this scene.

#### Defined in

[src/canvas/group/CanvasGroup.ts:37](https://github.com/imaphatduc/cubecubed/blob/db7d6e8/src/canvas/group/CanvasGroup.ts#L37)

___

### cubicons

• **cubicons**: `CanvasCubicon`[] = `[]`

List of cubicons included in this group.

#### Defined in

[src/canvas/group/CanvasGroup.ts:47](https://github.com/imaphatduc/cubecubed/blob/db7d6e8/src/canvas/group/CanvasGroup.ts#L47)

___

### groupElapsed

• **groupElapsed**: `number` = `0`

The time passed by since this group was created. (in milliseconds)

> (aka the total time of all the animations **called** in this group)

#### Defined in

[src/canvas/group/CanvasGroup.ts:129](https://github.com/imaphatduc/cubecubed/blob/db7d6e8/src/canvas/group/CanvasGroup.ts#L129)

___

### name

• **name**: `string`

Name of this scene.

#### Defined in

[src/canvas/group/CanvasGroup.ts:42](https://github.com/imaphatduc/cubecubed/blob/db7d6e8/src/canvas/group/CanvasGroup.ts#L42)

___

### ratio

• **ratio**: [`number`, `number`, `number`]

Ratio between square length in x, y and z direction.

#### Defined in

[src/canvas/group/CanvasGroup.ts:77](https://github.com/imaphatduc/cubecubed/blob/db7d6e8/src/canvas/group/CanvasGroup.ts#L77)

___

### scene

• **scene**: [`Scene`](/reference/classes/Scene.md)

The scene that this group belongs to.

#### Defined in

[src/canvas/group/CanvasGroup.ts:32](https://github.com/imaphatduc/cubecubed/blob/db7d6e8/src/canvas/group/CanvasGroup.ts#L32)

___

### squareLength

• **squareLength**: `number` = `40`

Length of a square in this group.

#### Defined in

[src/canvas/group/CanvasGroup.ts:72](https://github.com/imaphatduc/cubecubed/blob/db7d6e8/src/canvas/group/CanvasGroup.ts#L72)

___

### xBound

• **xBound**: [`number`, `number`]

x coordinate bound values of this group.

#### Defined in

[src/canvas/group/CanvasGroup.ts:82](https://github.com/imaphatduc/cubecubed/blob/db7d6e8/src/canvas/group/CanvasGroup.ts#L82)

___

### xGtoW

• **xGtoW**: `ScaleLinear`<`number`, `number`, `never`\>

Convert x value of grid coordinates to real-world coordinates.

#### Defined in

[src/canvas/group/CanvasGroup.ts:97](https://github.com/imaphatduc/cubecubed/blob/db7d6e8/src/canvas/group/CanvasGroup.ts#L97)

___

### xSquareNums

• **xSquareNums**: `number`

Number of squares in the x direction.

#### Defined in

[src/canvas/group/CanvasGroup.ts:57](https://github.com/imaphatduc/cubecubed/blob/db7d6e8/src/canvas/group/CanvasGroup.ts#L57)

___

### xWtoG

• **xWtoG**: `ScaleLinear`<`number`, `number`, `never`\>

Convert x value of real-world coordinates to grid coordinates.

#### Defined in

[src/canvas/group/CanvasGroup.ts:112](https://github.com/imaphatduc/cubecubed/blob/db7d6e8/src/canvas/group/CanvasGroup.ts#L112)

___

### yBound

• **yBound**: [`number`, `number`]

y coordinate bound values of this group.

#### Defined in

[src/canvas/group/CanvasGroup.ts:87](https://github.com/imaphatduc/cubecubed/blob/db7d6e8/src/canvas/group/CanvasGroup.ts#L87)

___

### yGtoW

• **yGtoW**: `ScaleLinear`<`number`, `number`, `never`\>

Convert y value of grid coordinates to real-world coordinates.

#### Defined in

[src/canvas/group/CanvasGroup.ts:102](https://github.com/imaphatduc/cubecubed/blob/db7d6e8/src/canvas/group/CanvasGroup.ts#L102)

___

### ySquareNums

• **ySquareNums**: `number`

Number of squares in the y direction.

#### Defined in

[src/canvas/group/CanvasGroup.ts:62](https://github.com/imaphatduc/cubecubed/blob/db7d6e8/src/canvas/group/CanvasGroup.ts#L62)

___

### yWtoG

• **yWtoG**: `ScaleLinear`<`number`, `number`, `never`\>

Convert y value of real-world coordinates to grid coordinates.

#### Defined in

[src/canvas/group/CanvasGroup.ts:117](https://github.com/imaphatduc/cubecubed/blob/db7d6e8/src/canvas/group/CanvasGroup.ts#L117)

___

### zBound

• **zBound**: [`number`, `number`]

z coordinate bound values of this group.

#### Defined in

[src/canvas/group/CanvasGroup.ts:92](https://github.com/imaphatduc/cubecubed/blob/db7d6e8/src/canvas/group/CanvasGroup.ts#L92)

___

### zGtoW

• **zGtoW**: `ScaleLinear`<`number`, `number`, `never`\>

Convert z value of grid coordinates to real-world coordinates.

#### Defined in

[src/canvas/group/CanvasGroup.ts:107](https://github.com/imaphatduc/cubecubed/blob/db7d6e8/src/canvas/group/CanvasGroup.ts#L107)

___

### zSquareNums

• **zSquareNums**: `number`

Number of squares in the z direction.

#### Defined in

[src/canvas/group/CanvasGroup.ts:67](https://github.com/imaphatduc/cubecubed/blob/db7d6e8/src/canvas/group/CanvasGroup.ts#L67)

___

### zWtoG

• **zWtoG**: `ScaleLinear`<`number`, `number`, `never`\>

Convert z value of real-world coordinates to grid coordinates.

#### Defined in

[src/canvas/group/CanvasGroup.ts:122](https://github.com/imaphatduc/cubecubed/blob/db7d6e8/src/canvas/group/CanvasGroup.ts#L122)

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

[src/canvas/group/CanvasGroup.ts:275](https://github.com/imaphatduc/cubecubed/blob/db7d6e8/src/canvas/group/CanvasGroup.ts#L275)

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

[src/canvas/group/CanvasGroup.ts:307](https://github.com/imaphatduc/cubecubed/blob/db7d6e8/src/canvas/group/CanvasGroup.ts#L307)

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

[src/canvas/group/CanvasGroup.ts:296](https://github.com/imaphatduc/cubecubed/blob/db7d6e8/src/canvas/group/CanvasGroup.ts#L296)
