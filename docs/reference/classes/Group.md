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

[src/svg/group/Group.ts:103](https://github.com/imaphatduc/cubecubed/blob/4495c75/src/svg/group/Group.ts#L103)

## Properties

### groupElapsed

• **groupElapsed**: `number` = `0`

The time passed by since this group was created. (in milliseconds)

> (aka the total time of all the animations **called** in this group)

#### Defined in

[src/svg/group/Group.ts:94](https://github.com/imaphatduc/cubecubed/blob/4495c75/src/svg/group/Group.ts#L94)

___

### name

• **name**: `string`

Name of this group.

#### Defined in

[src/svg/group/Group.ts:37](https://github.com/imaphatduc/cubecubed/blob/4495c75/src/svg/group/Group.ts#L37)

___

### ratio

• **ratio**: [`number`, `number`]

Ratio between square length in x direction and y direction.

#### Defined in

[src/svg/group/Group.ts:57](https://github.com/imaphatduc/cubecubed/blob/4495c75/src/svg/group/Group.ts#L57)

___

### scene

• **scene**: [`Scene`](/reference/classes/Scene.md)

The scene that this group belongs to.

#### Defined in

[src/svg/group/Group.ts:27](https://github.com/imaphatduc/cubecubed/blob/4495c75/src/svg/group/Group.ts#L27)

___

### squareLength

• **squareLength**: `number` = `40`

Length of a square in this scene.

#### Defined in

[src/svg/group/Group.ts:52](https://github.com/imaphatduc/cubecubed/blob/4495c75/src/svg/group/Group.ts#L52)

___

### svg\_group

• **svg\_group**: `Selection`<`SVGSVGElement`, `unknown`, `HTMLElement`, `any`\>

The `<svg/>` element that represents this group.

#### Defined in

[src/svg/group/Group.ts:32](https://github.com/imaphatduc/cubecubed/blob/4495c75/src/svg/group/Group.ts#L32)

___

### xBound

• **xBound**: [`number`, `number`]

x coordinate bound values of this scene.

#### Defined in

[src/svg/group/Group.ts:62](https://github.com/imaphatduc/cubecubed/blob/4495c75/src/svg/group/Group.ts#L62)

___

### xGtoW

• **xGtoW**: `ScaleLinear`<`number`, `number`, `never`\>

Convert x value of grid coordinates to real-world coordinates.

#### Defined in

[src/svg/group/Group.ts:72](https://github.com/imaphatduc/cubecubed/blob/4495c75/src/svg/group/Group.ts#L72)

___

### xSquareNums

• **xSquareNums**: `number`

Number of squares in the x direction.

#### Defined in

[src/svg/group/Group.ts:42](https://github.com/imaphatduc/cubecubed/blob/4495c75/src/svg/group/Group.ts#L42)

___

### xWtoG

• **xWtoG**: `ScaleLinear`<`number`, `number`, `never`\>

Convert x value of real-world coordinates to grid coordinates.

#### Defined in

[src/svg/group/Group.ts:82](https://github.com/imaphatduc/cubecubed/blob/4495c75/src/svg/group/Group.ts#L82)

___

### yBound

• **yBound**: [`number`, `number`]

y coordinate bound values of this scene.

#### Defined in

[src/svg/group/Group.ts:67](https://github.com/imaphatduc/cubecubed/blob/4495c75/src/svg/group/Group.ts#L67)

___

### yGtoW

• **yGtoW**: `ScaleLinear`<`number`, `number`, `never`\>

Convert y value of grid coordinates to real-world coordinates.

#### Defined in

[src/svg/group/Group.ts:77](https://github.com/imaphatduc/cubecubed/blob/4495c75/src/svg/group/Group.ts#L77)

___

### ySquareNums

• **ySquareNums**: `number`

Number of squares in the x direction.

#### Defined in

[src/svg/group/Group.ts:47](https://github.com/imaphatduc/cubecubed/blob/4495c75/src/svg/group/Group.ts#L47)

___

### yWtoG

• **yWtoG**: `ScaleLinear`<`number`, `number`, `never`\>

Convert y value of real-world coordinates to grid coordinates.

#### Defined in

[src/svg/group/Group.ts:87](https://github.com/imaphatduc/cubecubed/blob/4495c75/src/svg/group/Group.ts#L87)

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

[src/svg/group/Group.ts:242](https://github.com/imaphatduc/cubecubed/blob/4495c75/src/svg/group/Group.ts#L242)

___

### makeup

▸ **makeup**(`MAKEUP_CONFIG`, `duration?`): `void`

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `MAKEUP_CONFIG` | [`GROUP_MAKEUP_CONFIG`](/reference/interfaces/GROUP_MAKEUP_CONFIG.md) | `undefined` | Config for the makeup function. |
| `duration` | `number` | `0` | Time to play the makeup animation. (in milliseconds) |

#### Returns

`void`

#### Defined in

[src/svg/group/Group.ts:256](https://github.com/imaphatduc/cubecubed/blob/4495c75/src/svg/group/Group.ts#L256)

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

[src/svg/group/Group.ts:198](https://github.com/imaphatduc/cubecubed/blob/4495c75/src/svg/group/Group.ts#L198)

___

### remove

▸ **remove**(`cubicons`): `void`

Remove cubicons from this group.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `cubicons` | [`TYPES`](/reference/types/TYPES.md)[] | An array of cubicons to remove. |

#### Returns

`void`

#### Defined in

[src/svg/group/Group.ts:226](https://github.com/imaphatduc/cubecubed/blob/4495c75/src/svg/group/Group.ts#L226)

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

[src/svg/group/Group.ts:138](https://github.com/imaphatduc/cubecubed/blob/4495c75/src/svg/group/Group.ts#L138)

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

[src/svg/group/Group.ts:215](https://github.com/imaphatduc/cubecubed/blob/4495c75/src/svg/group/Group.ts#L215)
