[cubecubed](/reference/README.md) / [Exports](/reference/modules.md) / CanvasGroup

# Class: CanvasGroup

The object to group canvas cubicons together. A group must belong to a scene.

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

[src/canvas/group/CanvasGroup.ts:153](https://github.com/imaphatduc/cubecubed/blob/0fd2007/src/canvas/group/CanvasGroup.ts#L153)

## Properties

### animationsInfo

• **animationsInfo**: [`ANIMATION_INFO`](/reference/interfaces/ANIMATION_INFO.md)[] = `[]`

#### Defined in

[src/canvas/group/CanvasGroup.ts:137](https://github.com/imaphatduc/cubecubed/blob/0fd2007/src/canvas/group/CanvasGroup.ts#L137)

___

### groupElapsed

• **groupElapsed**: `number` = `0`

The time passed by since this group was created. (in milliseconds)

> (aka the total time of all the animations **called** in this group)

#### Defined in

[src/canvas/group/CanvasGroup.ts:144](https://github.com/imaphatduc/cubecubed/blob/0fd2007/src/canvas/group/CanvasGroup.ts#L144)

___

### name

• **name**: `string`

Name of this scene.

#### Defined in

[src/canvas/group/CanvasGroup.ts:65](https://github.com/imaphatduc/cubecubed/blob/0fd2007/src/canvas/group/CanvasGroup.ts#L65)

___

### ratio

• **ratio**: [`number`, `number`, `number`]

Ratio between square length in x, y and z direction.

#### Defined in

[src/canvas/group/CanvasGroup.ts:90](https://github.com/imaphatduc/cubecubed/blob/0fd2007/src/canvas/group/CanvasGroup.ts#L90)

___

### scene

• **scene**: [`Scene`](/reference/classes/Scene.md)

The scene that this group belongs to.

#### Defined in

[src/canvas/group/CanvasGroup.ts:35](https://github.com/imaphatduc/cubecubed/blob/0fd2007/src/canvas/group/CanvasGroup.ts#L35)

___

### squareLength

• **squareLength**: `number` = `40`

Length of a square in this group.

#### Defined in

[src/canvas/group/CanvasGroup.ts:85](https://github.com/imaphatduc/cubecubed/blob/0fd2007/src/canvas/group/CanvasGroup.ts#L85)

___

### threeScene

• **threeScene**: `Scene`

Three.js Scene object

#### Defined in

[src/canvas/group/CanvasGroup.ts:40](https://github.com/imaphatduc/cubecubed/blob/0fd2007/src/canvas/group/CanvasGroup.ts#L40)

___

### xBound

• **xBound**: [`number`, `number`]

x coordinate bound values of this group.

#### Defined in

[src/canvas/group/CanvasGroup.ts:95](https://github.com/imaphatduc/cubecubed/blob/0fd2007/src/canvas/group/CanvasGroup.ts#L95)

___

### xGtoW

• **xGtoW**: `ScaleLinear`<`number`, `number`, `never`\>

Convert x value of grid coordinates to real-world coordinates.

#### Defined in

[src/canvas/group/CanvasGroup.ts:110](https://github.com/imaphatduc/cubecubed/blob/0fd2007/src/canvas/group/CanvasGroup.ts#L110)

___

### xSquareNums

• **xSquareNums**: `number`

Number of squares in the x direction.

#### Defined in

[src/canvas/group/CanvasGroup.ts:70](https://github.com/imaphatduc/cubecubed/blob/0fd2007/src/canvas/group/CanvasGroup.ts#L70)

___

### xWtoG

• **xWtoG**: `ScaleLinear`<`number`, `number`, `never`\>

Convert x value of real-world coordinates to grid coordinates.

#### Defined in

[src/canvas/group/CanvasGroup.ts:125](https://github.com/imaphatduc/cubecubed/blob/0fd2007/src/canvas/group/CanvasGroup.ts#L125)

___

### yBound

• **yBound**: [`number`, `number`]

y coordinate bound values of this group.

#### Defined in

[src/canvas/group/CanvasGroup.ts:100](https://github.com/imaphatduc/cubecubed/blob/0fd2007/src/canvas/group/CanvasGroup.ts#L100)

___

### yGtoW

• **yGtoW**: `ScaleLinear`<`number`, `number`, `never`\>

Convert y value of grid coordinates to real-world coordinates.

#### Defined in

[src/canvas/group/CanvasGroup.ts:115](https://github.com/imaphatduc/cubecubed/blob/0fd2007/src/canvas/group/CanvasGroup.ts#L115)

___

### ySquareNums

• **ySquareNums**: `number`

Number of squares in the y direction.

#### Defined in

[src/canvas/group/CanvasGroup.ts:75](https://github.com/imaphatduc/cubecubed/blob/0fd2007/src/canvas/group/CanvasGroup.ts#L75)

___

### yWtoG

• **yWtoG**: `ScaleLinear`<`number`, `number`, `never`\>

Convert y value of real-world coordinates to grid coordinates.

#### Defined in

[src/canvas/group/CanvasGroup.ts:130](https://github.com/imaphatduc/cubecubed/blob/0fd2007/src/canvas/group/CanvasGroup.ts#L130)

___

### zBound

• **zBound**: [`number`, `number`]

z coordinate bound values of this group.

#### Defined in

[src/canvas/group/CanvasGroup.ts:105](https://github.com/imaphatduc/cubecubed/blob/0fd2007/src/canvas/group/CanvasGroup.ts#L105)

___

### zGtoW

• **zGtoW**: `ScaleLinear`<`number`, `number`, `never`\>

Convert z value of grid coordinates to real-world coordinates.

#### Defined in

[src/canvas/group/CanvasGroup.ts:120](https://github.com/imaphatduc/cubecubed/blob/0fd2007/src/canvas/group/CanvasGroup.ts#L120)

___

### zSquareNums

• **zSquareNums**: `number`

Number of squares in the z direction.

#### Defined in

[src/canvas/group/CanvasGroup.ts:80](https://github.com/imaphatduc/cubecubed/blob/0fd2007/src/canvas/group/CanvasGroup.ts#L80)

___

### zWtoG

• **zWtoG**: `ScaleLinear`<`number`, `number`, `never`\>

Convert z value of real-world coordinates to grid coordinates.

#### Defined in

[src/canvas/group/CanvasGroup.ts:135](https://github.com/imaphatduc/cubecubed/blob/0fd2007/src/canvas/group/CanvasGroup.ts#L135)

## Methods

### play

▸ **play**(`animations`): `void`

Play all the animations included in a queue.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `animations` | [`CanvasAnimation`](/reference/classes/CanvasAnimation.md)[] | Array (Queue) of animations to play. |

#### Returns

`void`

#### Defined in

[src/canvas/group/CanvasGroup.ts:344](https://github.com/imaphatduc/cubecubed/blob/0fd2007/src/canvas/group/CanvasGroup.ts#L344)

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

[src/canvas/group/CanvasGroup.ts:378](https://github.com/imaphatduc/cubecubed/blob/0fd2007/src/canvas/group/CanvasGroup.ts#L378)

___

### render

▸ **render**(`cubicons`): `void`

Render all the specified cubicons on the screen (instead of calling `.render()` for each of the cubicon).

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `cubicons` | [`CanvasCubicon`](/reference/classes/CanvasCubicon.md)[] | Comma-separated cubicons to render. |

#### Returns

`void`

#### Defined in

[src/canvas/group/CanvasGroup.ts:173](https://github.com/imaphatduc/cubecubed/blob/0fd2007/src/canvas/group/CanvasGroup.ts#L173)

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

[src/canvas/group/CanvasGroup.ts:367](https://github.com/imaphatduc/cubecubed/blob/0fd2007/src/canvas/group/CanvasGroup.ts#L367)
