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

[src/svg/group/Group.ts:99](https://github.com/imaphatduc/cubecubed/blob/db7d6e8/src/svg/group/Group.ts#L99)

## Properties

### groupElapsed

• **groupElapsed**: `number` = `0`

The time passed by since this group was created. (in milliseconds)

> (aka the total time of all the animations **called** in this group)

#### Defined in

[src/svg/group/Group.ts:90](https://github.com/imaphatduc/cubecubed/blob/db7d6e8/src/svg/group/Group.ts#L90)

___

### name

• **name**: `string`

Name of this group.

#### Defined in

[src/svg/group/Group.ts:33](https://github.com/imaphatduc/cubecubed/blob/db7d6e8/src/svg/group/Group.ts#L33)

___

### ratio

• **ratio**: [`number`, `number`]

Ratio between square length in x direction and y direction.

#### Defined in

[src/svg/group/Group.ts:53](https://github.com/imaphatduc/cubecubed/blob/db7d6e8/src/svg/group/Group.ts#L53)

___

### scene

• **scene**: [`Scene`](/reference/classes/Scene.md)

The scene that this group belongs to.

#### Defined in

[src/svg/group/Group.ts:23](https://github.com/imaphatduc/cubecubed/blob/db7d6e8/src/svg/group/Group.ts#L23)

___

### squareLength

• **squareLength**: `number` = `40`

Length of a square in this scene.

#### Defined in

[src/svg/group/Group.ts:48](https://github.com/imaphatduc/cubecubed/blob/db7d6e8/src/svg/group/Group.ts#L48)

___

### svg\_group

• **svg\_group**: `Selection`<`SVGSVGElement`, `unknown`, `HTMLElement`, `any`\>

The `<svg/>` element that represents this group.

#### Defined in

[src/svg/group/Group.ts:28](https://github.com/imaphatduc/cubecubed/blob/db7d6e8/src/svg/group/Group.ts#L28)

___

### xBound

• **xBound**: [`number`, `number`]

x coordinate bound values of this scene.

#### Defined in

[src/svg/group/Group.ts:58](https://github.com/imaphatduc/cubecubed/blob/db7d6e8/src/svg/group/Group.ts#L58)

___

### xGtoW

• **xGtoW**: `ScaleLinear`<`number`, `number`, `never`\>

Convert x value of grid coordinates to real-world coordinates.

#### Defined in

[src/svg/group/Group.ts:68](https://github.com/imaphatduc/cubecubed/blob/db7d6e8/src/svg/group/Group.ts#L68)

___

### xSquareNums

• **xSquareNums**: `number`

Number of squares in the x direction.

#### Defined in

[src/svg/group/Group.ts:38](https://github.com/imaphatduc/cubecubed/blob/db7d6e8/src/svg/group/Group.ts#L38)

___

### xWtoG

• **xWtoG**: `ScaleLinear`<`number`, `number`, `never`\>

Convert x value of real-world coordinates to grid coordinates.

#### Defined in

[src/svg/group/Group.ts:78](https://github.com/imaphatduc/cubecubed/blob/db7d6e8/src/svg/group/Group.ts#L78)

___

### yBound

• **yBound**: [`number`, `number`]

y coordinate bound values of this scene.

#### Defined in

[src/svg/group/Group.ts:63](https://github.com/imaphatduc/cubecubed/blob/db7d6e8/src/svg/group/Group.ts#L63)

___

### yGtoW

• **yGtoW**: `ScaleLinear`<`number`, `number`, `never`\>

Convert y value of grid coordinates to real-world coordinates.

#### Defined in

[src/svg/group/Group.ts:73](https://github.com/imaphatduc/cubecubed/blob/db7d6e8/src/svg/group/Group.ts#L73)

___

### ySquareNums

• **ySquareNums**: `number`

Number of squares in the x direction.

#### Defined in

[src/svg/group/Group.ts:43](https://github.com/imaphatduc/cubecubed/blob/db7d6e8/src/svg/group/Group.ts#L43)

___

### yWtoG

• **yWtoG**: `ScaleLinear`<`number`, `number`, `never`\>

Convert y value of real-world coordinates to grid coordinates.

#### Defined in

[src/svg/group/Group.ts:83](https://github.com/imaphatduc/cubecubed/blob/db7d6e8/src/svg/group/Group.ts#L83)

## Methods

### destroy

▸ **destroy**(`delay?`): `void`

Fade out and destroy this group from the HTML flow.
That means, everything in the scene will be removed, too.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `delay` | `number` | `0` | Delay (in milliseconds) before destroying this scene. |

#### Returns

`void`

#### Defined in

[src/svg/group/Group.ts:237](https://github.com/imaphatduc/cubecubed/blob/db7d6e8/src/svg/group/Group.ts#L237)

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

[src/svg/group/Group.ts:193](https://github.com/imaphatduc/cubecubed/blob/db7d6e8/src/svg/group/Group.ts#L193)

___

### remove

▸ **remove**(`cubicons`): `void`

Remove cubicons from this group.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `cubicons` | `TYPES`[] | An array of cubicons to remove. |

#### Returns

`void`

#### Defined in

[src/svg/group/Group.ts:221](https://github.com/imaphatduc/cubecubed/blob/db7d6e8/src/svg/group/Group.ts#L221)

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

[src/svg/group/Group.ts:133](https://github.com/imaphatduc/cubecubed/blob/db7d6e8/src/svg/group/Group.ts#L133)

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

[src/svg/group/Group.ts:210](https://github.com/imaphatduc/cubecubed/blob/db7d6e8/src/svg/group/Group.ts#L210)
