[cubecubed](/reference/README.md) / [Exports](/reference/modules.md) / CanvasGroup

# Class: CanvasGroup

The object to group canvas cubicons together. A group must belong to a scene.

## Constructors

### constructor

• **new CanvasGroup**(`groupName`, `scene`, `CONFIG`)

Include this group to HTML flow.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `groupName` | `string` | Name of the group. |
| `scene` | [`Scene`](/reference/classes/Scene.md) | The scene that the group belongs to. |
| `CONFIG` | [`CANVAS_GROUP_CONFIG`](/reference/interfaces/CANVAS_GROUP_CONFIG.md) | Config options of the canvas group. |

#### Defined in

[src/canvas/group/CanvasGroup.ts:199](https://github.com/imaphatduc/cubecubed/blob/0c47e8e/src/canvas/group/CanvasGroup.ts#L199)

## Properties

### CONFIG

• **CONFIG**: [`CANVAS_GROUP_CONFIG`](/reference/interfaces/CANVAS_GROUP_CONFIG.md)

Config options of this canvas group.

#### Defined in

[src/canvas/group/CanvasGroup.ts:188](https://github.com/imaphatduc/cubecubed/blob/0c47e8e/src/canvas/group/CanvasGroup.ts#L188)

___

### groupElapsed

• **groupElapsed**: `number` = `0`

The time passed by since this group was created. (in milliseconds)

> (aka the total time of all the animations **called** in this group)

#### Defined in

[src/canvas/group/CanvasGroup.ts:183](https://github.com/imaphatduc/cubecubed/blob/0c47e8e/src/canvas/group/CanvasGroup.ts#L183)

___

### name

• **name**: `string`

Name of this scene.

#### Defined in

[src/canvas/group/CanvasGroup.ts:101](https://github.com/imaphatduc/cubecubed/blob/0c47e8e/src/canvas/group/CanvasGroup.ts#L101)

___

### ratio

• **ratio**: [`number`, `number`, `number`]

Ratio between square length in x, y and z direction.

#### Defined in

[src/canvas/group/CanvasGroup.ts:126](https://github.com/imaphatduc/cubecubed/blob/0c47e8e/src/canvas/group/CanvasGroup.ts#L126)

___

### scene

• **scene**: [`Scene`](/reference/classes/Scene.md)

The scene that this group belongs to.

#### Defined in

[src/canvas/group/CanvasGroup.ts:66](https://github.com/imaphatduc/cubecubed/blob/0c47e8e/src/canvas/group/CanvasGroup.ts#L66)

___

### squareLength

• **squareLength**: `number` = `40`

Length of a square in this group.

#### Defined in

[src/canvas/group/CanvasGroup.ts:121](https://github.com/imaphatduc/cubecubed/blob/0c47e8e/src/canvas/group/CanvasGroup.ts#L121)

___

### threeScene

• **threeScene**: `Scene`

Three.js Scene object

#### Defined in

[src/canvas/group/CanvasGroup.ts:71](https://github.com/imaphatduc/cubecubed/blob/0c47e8e/src/canvas/group/CanvasGroup.ts#L71)

___

### xBound

• **xBound**: [`number`, `number`]

x coordinate bound values of this group.

#### Defined in

[src/canvas/group/CanvasGroup.ts:131](https://github.com/imaphatduc/cubecubed/blob/0c47e8e/src/canvas/group/CanvasGroup.ts#L131)

___

### xGtoW

• **xGtoW**: `ScaleLinear`<`number`, `number`, `never`\>

Convert x value of grid coordinates to real-world coordinates.

#### Defined in

[src/canvas/group/CanvasGroup.ts:146](https://github.com/imaphatduc/cubecubed/blob/0c47e8e/src/canvas/group/CanvasGroup.ts#L146)

___

### xSquareNums

• **xSquareNums**: `number`

Number of squares in the x direction.

#### Defined in

[src/canvas/group/CanvasGroup.ts:106](https://github.com/imaphatduc/cubecubed/blob/0c47e8e/src/canvas/group/CanvasGroup.ts#L106)

___

### xWtoG

• **xWtoG**: `ScaleLinear`<`number`, `number`, `never`\>

Convert x value of real-world coordinates to grid coordinates.

#### Defined in

[src/canvas/group/CanvasGroup.ts:161](https://github.com/imaphatduc/cubecubed/blob/0c47e8e/src/canvas/group/CanvasGroup.ts#L161)

___

### yBound

• **yBound**: [`number`, `number`]

y coordinate bound values of this group.

#### Defined in

[src/canvas/group/CanvasGroup.ts:136](https://github.com/imaphatduc/cubecubed/blob/0c47e8e/src/canvas/group/CanvasGroup.ts#L136)

___

### yGtoW

• **yGtoW**: `ScaleLinear`<`number`, `number`, `never`\>

Convert y value of grid coordinates to real-world coordinates.

#### Defined in

[src/canvas/group/CanvasGroup.ts:151](https://github.com/imaphatduc/cubecubed/blob/0c47e8e/src/canvas/group/CanvasGroup.ts#L151)

___

### ySquareNums

• **ySquareNums**: `number`

Number of squares in the y direction.

#### Defined in

[src/canvas/group/CanvasGroup.ts:111](https://github.com/imaphatduc/cubecubed/blob/0c47e8e/src/canvas/group/CanvasGroup.ts#L111)

___

### yWtoG

• **yWtoG**: `ScaleLinear`<`number`, `number`, `never`\>

Convert y value of real-world coordinates to grid coordinates.

#### Defined in

[src/canvas/group/CanvasGroup.ts:166](https://github.com/imaphatduc/cubecubed/blob/0c47e8e/src/canvas/group/CanvasGroup.ts#L166)

___

### zBound

• **zBound**: [`number`, `number`]

z coordinate bound values of this group.

#### Defined in

[src/canvas/group/CanvasGroup.ts:141](https://github.com/imaphatduc/cubecubed/blob/0c47e8e/src/canvas/group/CanvasGroup.ts#L141)

___

### zGtoW

• **zGtoW**: `ScaleLinear`<`number`, `number`, `never`\>

Convert z value of grid coordinates to real-world coordinates.

#### Defined in

[src/canvas/group/CanvasGroup.ts:156](https://github.com/imaphatduc/cubecubed/blob/0c47e8e/src/canvas/group/CanvasGroup.ts#L156)

___

### zSquareNums

• **zSquareNums**: `number`

Number of squares in the z direction.

#### Defined in

[src/canvas/group/CanvasGroup.ts:116](https://github.com/imaphatduc/cubecubed/blob/0c47e8e/src/canvas/group/CanvasGroup.ts#L116)

___

### zWtoG

• **zWtoG**: `ScaleLinear`<`number`, `number`, `never`\>

Convert z value of real-world coordinates to grid coordinates.

#### Defined in

[src/canvas/group/CanvasGroup.ts:171](https://github.com/imaphatduc/cubecubed/blob/0c47e8e/src/canvas/group/CanvasGroup.ts#L171)

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

[src/canvas/group/CanvasGroup.ts:434](https://github.com/imaphatduc/cubecubed/blob/0c47e8e/src/canvas/group/CanvasGroup.ts#L434)

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

[src/canvas/group/CanvasGroup.ts:468](https://github.com/imaphatduc/cubecubed/blob/0c47e8e/src/canvas/group/CanvasGroup.ts#L468)

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

[src/canvas/group/CanvasGroup.ts:221](https://github.com/imaphatduc/cubecubed/blob/0c47e8e/src/canvas/group/CanvasGroup.ts#L221)

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

[src/canvas/group/CanvasGroup.ts:457](https://github.com/imaphatduc/cubecubed/blob/0c47e8e/src/canvas/group/CanvasGroup.ts#L457)
