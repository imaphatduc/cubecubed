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

[src/canvas/group/CanvasGroup.ts:139](https://github.com/imaphatduc/cubecubed/blob/cb0c39f/src/canvas/group/CanvasGroup.ts#L139)

## Properties

### groupElapsed

• **groupElapsed**: `number` = `0`

The time passed by since this group was created. (in milliseconds)

> (aka the total time of all the animations **called** in this group)

#### Defined in

[src/canvas/group/CanvasGroup.ts:130](https://github.com/imaphatduc/cubecubed/blob/cb0c39f/src/canvas/group/CanvasGroup.ts#L130)

___

### name

• **name**: `string`

Name of this scene.

#### Defined in

[src/canvas/group/CanvasGroup.ts:53](https://github.com/imaphatduc/cubecubed/blob/cb0c39f/src/canvas/group/CanvasGroup.ts#L53)

___

### ratio

• **ratio**: [`number`, `number`, `number`]

Ratio between square length in x, y and z direction.

#### Defined in

[src/canvas/group/CanvasGroup.ts:78](https://github.com/imaphatduc/cubecubed/blob/cb0c39f/src/canvas/group/CanvasGroup.ts#L78)

___

### scene

• **scene**: [`Scene`](/reference/classes/Scene.md)

The scene that this group belongs to.

#### Defined in

[src/canvas/group/CanvasGroup.ts:28](https://github.com/imaphatduc/cubecubed/blob/cb0c39f/src/canvas/group/CanvasGroup.ts#L28)

___

### squareLength

• **squareLength**: `number` = `40`

Length of a square in this group.

#### Defined in

[src/canvas/group/CanvasGroup.ts:73](https://github.com/imaphatduc/cubecubed/blob/cb0c39f/src/canvas/group/CanvasGroup.ts#L73)

___

### threeScene

• **threeScene**: `Scene`

Three.js Scene object

#### Defined in

[src/canvas/group/CanvasGroup.ts:33](https://github.com/imaphatduc/cubecubed/blob/cb0c39f/src/canvas/group/CanvasGroup.ts#L33)

___

### xBound

• **xBound**: [`number`, `number`]

x coordinate bound values of this group.

#### Defined in

[src/canvas/group/CanvasGroup.ts:83](https://github.com/imaphatduc/cubecubed/blob/cb0c39f/src/canvas/group/CanvasGroup.ts#L83)

___

### xGtoW

• **xGtoW**: `ScaleLinear`<`number`, `number`, `never`\>

Convert x value of grid coordinates to real-world coordinates.

#### Defined in

[src/canvas/group/CanvasGroup.ts:98](https://github.com/imaphatduc/cubecubed/blob/cb0c39f/src/canvas/group/CanvasGroup.ts#L98)

___

### xSquareNums

• **xSquareNums**: `number`

Number of squares in the x direction.

#### Defined in

[src/canvas/group/CanvasGroup.ts:58](https://github.com/imaphatduc/cubecubed/blob/cb0c39f/src/canvas/group/CanvasGroup.ts#L58)

___

### xWtoG

• **xWtoG**: `ScaleLinear`<`number`, `number`, `never`\>

Convert x value of real-world coordinates to grid coordinates.

#### Defined in

[src/canvas/group/CanvasGroup.ts:113](https://github.com/imaphatduc/cubecubed/blob/cb0c39f/src/canvas/group/CanvasGroup.ts#L113)

___

### yBound

• **yBound**: [`number`, `number`]

y coordinate bound values of this group.

#### Defined in

[src/canvas/group/CanvasGroup.ts:88](https://github.com/imaphatduc/cubecubed/blob/cb0c39f/src/canvas/group/CanvasGroup.ts#L88)

___

### yGtoW

• **yGtoW**: `ScaleLinear`<`number`, `number`, `never`\>

Convert y value of grid coordinates to real-world coordinates.

#### Defined in

[src/canvas/group/CanvasGroup.ts:103](https://github.com/imaphatduc/cubecubed/blob/cb0c39f/src/canvas/group/CanvasGroup.ts#L103)

___

### ySquareNums

• **ySquareNums**: `number`

Number of squares in the y direction.

#### Defined in

[src/canvas/group/CanvasGroup.ts:63](https://github.com/imaphatduc/cubecubed/blob/cb0c39f/src/canvas/group/CanvasGroup.ts#L63)

___

### yWtoG

• **yWtoG**: `ScaleLinear`<`number`, `number`, `never`\>

Convert y value of real-world coordinates to grid coordinates.

#### Defined in

[src/canvas/group/CanvasGroup.ts:118](https://github.com/imaphatduc/cubecubed/blob/cb0c39f/src/canvas/group/CanvasGroup.ts#L118)

___

### zBound

• **zBound**: [`number`, `number`]

z coordinate bound values of this group.

#### Defined in

[src/canvas/group/CanvasGroup.ts:93](https://github.com/imaphatduc/cubecubed/blob/cb0c39f/src/canvas/group/CanvasGroup.ts#L93)

___

### zGtoW

• **zGtoW**: `ScaleLinear`<`number`, `number`, `never`\>

Convert z value of grid coordinates to real-world coordinates.

#### Defined in

[src/canvas/group/CanvasGroup.ts:108](https://github.com/imaphatduc/cubecubed/blob/cb0c39f/src/canvas/group/CanvasGroup.ts#L108)

___

### zSquareNums

• **zSquareNums**: `number`

Number of squares in the z direction.

#### Defined in

[src/canvas/group/CanvasGroup.ts:68](https://github.com/imaphatduc/cubecubed/blob/cb0c39f/src/canvas/group/CanvasGroup.ts#L68)

___

### zWtoG

• **zWtoG**: `ScaleLinear`<`number`, `number`, `never`\>

Convert z value of real-world coordinates to grid coordinates.

#### Defined in

[src/canvas/group/CanvasGroup.ts:123](https://github.com/imaphatduc/cubecubed/blob/cb0c39f/src/canvas/group/CanvasGroup.ts#L123)

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

[src/canvas/group/CanvasGroup.ts:309](https://github.com/imaphatduc/cubecubed/blob/cb0c39f/src/canvas/group/CanvasGroup.ts#L309)

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

[src/canvas/group/CanvasGroup.ts:339](https://github.com/imaphatduc/cubecubed/blob/cb0c39f/src/canvas/group/CanvasGroup.ts#L339)

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

[src/canvas/group/CanvasGroup.ts:159](https://github.com/imaphatduc/cubecubed/blob/cb0c39f/src/canvas/group/CanvasGroup.ts#L159)

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

[src/canvas/group/CanvasGroup.ts:328](https://github.com/imaphatduc/cubecubed/blob/cb0c39f/src/canvas/group/CanvasGroup.ts#L328)
