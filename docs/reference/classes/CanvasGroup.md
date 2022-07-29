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

src/canvas/group/CanvasGroup.ts:139

## Properties

### groupElapsed

• **groupElapsed**: `number` = `0`

The time passed by since this group was created. (in milliseconds)

> (aka the total time of all the animations **called** in this group)

#### Defined in

src/canvas/group/CanvasGroup.ts:130

___

### name

• **name**: `string`

Name of this scene.

#### Defined in

src/canvas/group/CanvasGroup.ts:53

___

### ratio

• **ratio**: [`number`, `number`, `number`]

Ratio between square length in x, y and z direction.

#### Defined in

src/canvas/group/CanvasGroup.ts:78

___

### scene

• **scene**: [`Scene`](/reference/classes/Scene.md)

The scene that this group belongs to.

#### Defined in

src/canvas/group/CanvasGroup.ts:28

___

### squareLength

• **squareLength**: `number` = `40`

Length of a square in this group.

#### Defined in

src/canvas/group/CanvasGroup.ts:73

___

### threeScene

• **threeScene**: `Scene`

Three.js Scene object

#### Defined in

src/canvas/group/CanvasGroup.ts:33

___

### xBound

• **xBound**: [`number`, `number`]

x coordinate bound values of this group.

#### Defined in

src/canvas/group/CanvasGroup.ts:83

___

### xGtoW

• **xGtoW**: `ScaleLinear`<`number`, `number`, `never`\>

Convert x value of grid coordinates to real-world coordinates.

#### Defined in

src/canvas/group/CanvasGroup.ts:98

___

### xSquareNums

• **xSquareNums**: `number`

Number of squares in the x direction.

#### Defined in

src/canvas/group/CanvasGroup.ts:58

___

### xWtoG

• **xWtoG**: `ScaleLinear`<`number`, `number`, `never`\>

Convert x value of real-world coordinates to grid coordinates.

#### Defined in

src/canvas/group/CanvasGroup.ts:113

___

### yBound

• **yBound**: [`number`, `number`]

y coordinate bound values of this group.

#### Defined in

src/canvas/group/CanvasGroup.ts:88

___

### yGtoW

• **yGtoW**: `ScaleLinear`<`number`, `number`, `never`\>

Convert y value of grid coordinates to real-world coordinates.

#### Defined in

src/canvas/group/CanvasGroup.ts:103

___

### ySquareNums

• **ySquareNums**: `number`

Number of squares in the y direction.

#### Defined in

src/canvas/group/CanvasGroup.ts:63

___

### yWtoG

• **yWtoG**: `ScaleLinear`<`number`, `number`, `never`\>

Convert y value of real-world coordinates to grid coordinates.

#### Defined in

src/canvas/group/CanvasGroup.ts:118

___

### zBound

• **zBound**: [`number`, `number`]

z coordinate bound values of this group.

#### Defined in

src/canvas/group/CanvasGroup.ts:93

___

### zGtoW

• **zGtoW**: `ScaleLinear`<`number`, `number`, `never`\>

Convert z value of grid coordinates to real-world coordinates.

#### Defined in

src/canvas/group/CanvasGroup.ts:108

___

### zSquareNums

• **zSquareNums**: `number`

Number of squares in the z direction.

#### Defined in

src/canvas/group/CanvasGroup.ts:68

___

### zWtoG

• **zWtoG**: `ScaleLinear`<`number`, `number`, `never`\>

Convert z value of real-world coordinates to grid coordinates.

#### Defined in

src/canvas/group/CanvasGroup.ts:123

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

src/canvas/group/CanvasGroup.ts:309

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

src/canvas/group/CanvasGroup.ts:339

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

src/canvas/group/CanvasGroup.ts:159

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

src/canvas/group/CanvasGroup.ts:328
