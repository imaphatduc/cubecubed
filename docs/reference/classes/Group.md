[cubecubed](/reference/README.md) / [Exports](/reference/modules.md) / Group

# Class: Group

The dad/mom object of every pack of objects in the visualization.

A group must belong to a scene.

Group is classified in terms of its purpose.
Below `Group()` is a SVG group to render SVG objects.

Please see the Quick Start page in official documentation for clearer understanding about this `Group` term.

## Constructors

### constructor

• **new Group**(`groupName`, `scene`)

Include this group to HTML flow.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `groupName` | `string` | Name of the group. |
| `scene` | [`Scene`](/reference/classes/Scene.md) | The scene that the group belongs to. |

#### Defined in

[src/svg/group/Group.ts:126](https://github.com/imaphatduc/cubecubed/blob/1251e31/src/svg/group/Group.ts#L126)

## Properties

### animations

• **animations**: `Animation`[]

Animations played in this group.

#### Defined in

[src/svg/group/Group.ts:48](https://github.com/imaphatduc/cubecubed/blob/1251e31/src/svg/group/Group.ts#L48)

___

### cubicons

• **cubicons**: `Cubicon`[]

Cubicons included in this group.

#### Defined in

[src/svg/group/Group.ts:43](https://github.com/imaphatduc/cubecubed/blob/1251e31/src/svg/group/Group.ts#L43)

___

### groupElapsed

• **groupElapsed**: `number`

The time passed by since this group was created. (in milliseconds)

> (aka the total time of all the animations **called** in this group)

#### Defined in

[src/svg/group/Group.ts:110](https://github.com/imaphatduc/cubecubed/blob/1251e31/src/svg/group/Group.ts#L110)

___

### name

• **name**: `string`

Name of this group.

#### Defined in

[src/svg/group/Group.ts:38](https://github.com/imaphatduc/cubecubed/blob/1251e31/src/svg/group/Group.ts#L38)

___

### queueElapsed

• **queueElapsed**: `number`

The total time to finish playing all animations in the current queue (will be override when the next queue is called). (in milliseconds)

#### Defined in

[src/svg/group/Group.ts:103](https://github.com/imaphatduc/cubecubed/blob/1251e31/src/svg/group/Group.ts#L103)

___

### ratio

• **ratio**: [`number`, `number`]

Ratio between square length in x direction and y direction.

#### Defined in

[src/svg/group/Group.ts:68](https://github.com/imaphatduc/cubecubed/blob/1251e31/src/svg/group/Group.ts#L68)

___

### scene

• **scene**: [`Scene`](/reference/classes/Scene.md)

The scene that this group belongs to.

#### Defined in

[src/svg/group/Group.ts:28](https://github.com/imaphatduc/cubecubed/blob/1251e31/src/svg/group/Group.ts#L28)

___

### sleepTime

• **sleepTime**: `number`

The total time before this group is created. (in milliseconds)

> (aka the total time of all the animations **called** in **other** groups in the same scene)

#### Defined in

[src/svg/group/Group.ts:117](https://github.com/imaphatduc/cubecubed/blob/1251e31/src/svg/group/Group.ts#L117)

___

### squareLength

• **squareLength**: `number` = `40`

Length of a square in this scene.

#### Defined in

[src/svg/group/Group.ts:63](https://github.com/imaphatduc/cubecubed/blob/1251e31/src/svg/group/Group.ts#L63)

___

### svg\_group

• **svg\_group**: `Selection`<`SVGSVGElement`, `unknown`, `HTMLElement`, `any`\>

The `<svg/>` element that represents this group.

#### Defined in

[src/svg/group/Group.ts:33](https://github.com/imaphatduc/cubecubed/blob/1251e31/src/svg/group/Group.ts#L33)

___

### xBound

• **xBound**: [`number`, `number`]

x coordinate bound values of this scene.

#### Defined in

[src/svg/group/Group.ts:73](https://github.com/imaphatduc/cubecubed/blob/1251e31/src/svg/group/Group.ts#L73)

___

### xGtoW

• **xGtoW**: `ScaleLinear`<`number`, `number`, `never`\>

Convert x value of grid coordinates to real-world coordinates.

#### Defined in

[src/svg/group/Group.ts:83](https://github.com/imaphatduc/cubecubed/blob/1251e31/src/svg/group/Group.ts#L83)

___

### xSquareNums

• **xSquareNums**: `number`

Number of squares in the x direction.

#### Defined in

[src/svg/group/Group.ts:53](https://github.com/imaphatduc/cubecubed/blob/1251e31/src/svg/group/Group.ts#L53)

___

### xWtoG

• **xWtoG**: `ScaleLinear`<`number`, `number`, `never`\>

Convert x value of real-world coordinates to grid coordinates.

#### Defined in

[src/svg/group/Group.ts:93](https://github.com/imaphatduc/cubecubed/blob/1251e31/src/svg/group/Group.ts#L93)

___

### yBound

• **yBound**: [`number`, `number`]

y coordinate bound values of this scene.

#### Defined in

[src/svg/group/Group.ts:78](https://github.com/imaphatduc/cubecubed/blob/1251e31/src/svg/group/Group.ts#L78)

___

### yGtoW

• **yGtoW**: `ScaleLinear`<`number`, `number`, `never`\>

Convert y value of grid coordinates to real-world coordinates.

#### Defined in

[src/svg/group/Group.ts:88](https://github.com/imaphatduc/cubecubed/blob/1251e31/src/svg/group/Group.ts#L88)

___

### ySquareNums

• **ySquareNums**: `number`

Number of squares in the x direction.

#### Defined in

[src/svg/group/Group.ts:58](https://github.com/imaphatduc/cubecubed/blob/1251e31/src/svg/group/Group.ts#L58)

___

### yWtoG

• **yWtoG**: `ScaleLinear`<`number`, `number`, `never`\>

Convert y value of real-world coordinates to grid coordinates.

#### Defined in

[src/svg/group/Group.ts:98](https://github.com/imaphatduc/cubecubed/blob/1251e31/src/svg/group/Group.ts#L98)

## Methods

### add

▸ **add**(`cubicon`): `void`

**`deprecated`**

Add a cubicon to this group.

#### Parameters

| Name | Type |
| :------ | :------ |
| `cubicon` | `Cubicon` |

#### Returns

`void`

#### Defined in

[src/svg/group/Group.ts:285](https://github.com/imaphatduc/cubecubed/blob/1251e31/src/svg/group/Group.ts#L285)

___

### destroy

▸ **destroy**(`delay`): `void`

Fade out and destroy this group from the HTML flow.
That means, everything in the scene will be removed, too.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `delay` | `number` | Delay (in milliseconds) before destroying this scene. |

#### Returns

`void`

#### Defined in

[src/svg/group/Group.ts:311](https://github.com/imaphatduc/cubecubed/blob/1251e31/src/svg/group/Group.ts#L311)

___

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

[src/svg/group/Group.ts:231](https://github.com/imaphatduc/cubecubed/blob/1251e31/src/svg/group/Group.ts#L231)

___

### remove

▸ **remove**(`cubicon`): `void`

Remove a cubicon from this group.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `cubicon` | `TYPES` | The cubicon to remove. |

#### Returns

`void`

#### Defined in

[src/svg/group/Group.ts:294](https://github.com/imaphatduc/cubecubed/blob/1251e31/src/svg/group/Group.ts#L294)

___

### render

▸ **render**(...`cubicons`): `void`

Render all the specified cubicons on the screen (instead of calling `.render()` for each of the cubicon).

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...cubicons` | `any`[] | Comma-separated cubicons to render. |

#### Returns

`void`

#### Defined in

[src/svg/group/Group.ts:171](https://github.com/imaphatduc/cubecubed/blob/1251e31/src/svg/group/Group.ts#L171)

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

[src/svg/group/Group.ts:272](https://github.com/imaphatduc/cubecubed/blob/1251e31/src/svg/group/Group.ts#L272)
