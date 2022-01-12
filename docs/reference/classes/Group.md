[cubecubed](/wiki/README.md) / [Exports](/wiki/modules.md) / Group

# Class: Group

The dad/mom object of every pack of objects in the visualization.

Please see the Quick Start page in official documentation for clearer understanding about this `Group` term.

## Constructors

### constructor

• **new Group**(`groupName`, `scene`)

Include this group to HTML flow.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `groupName` | `string` | Name of the group. |
| `scene` | [`Scene`](/wiki/classes/Scene.md) | The scene that the group belongs to. |

#### Defined in

[src/scene/group.ts:63](https://github.com/imaphatduc/cubecubed/blob/26131ac/src/scene/group.ts#L63)

## Properties

### animations

• **animations**: `Animation`[]

Animations played in this group.

#### Defined in

[src/scene/group.ts:36](https://github.com/imaphatduc/cubecubed/blob/26131ac/src/scene/group.ts#L36)

___

### cubicons

• **cubicons**: `Cubicon`[]

Cubicons included in this group.

#### Defined in

[src/scene/group.ts:31](https://github.com/imaphatduc/cubecubed/blob/26131ac/src/scene/group.ts#L31)

___

### groupElapsed

• **groupElapsed**: `number`

The time passed by since this group was created. (in milliseconds)

> (aka the total time of all the animations **called** in this group)

#### Defined in

[src/scene/group.ts:47](https://github.com/imaphatduc/cubecubed/blob/26131ac/src/scene/group.ts#L47)

___

### name

• **name**: `string`

Name of this group.

#### Defined in

[src/scene/group.ts:26](https://github.com/imaphatduc/cubecubed/blob/26131ac/src/scene/group.ts#L26)

___

### queueElapsed

• **queueElapsed**: `number`

The total time to finish playing all animations in the current queue (will be override when the next queue is called). (in milliseconds)

#### Defined in

[src/scene/group.ts:41](https://github.com/imaphatduc/cubecubed/blob/26131ac/src/scene/group.ts#L41)

___

### scene

• **scene**: [`Scene`](/wiki/classes/Scene.md)

The scene that this group belongs to.

#### Defined in

[src/scene/group.ts:16](https://github.com/imaphatduc/cubecubed/blob/26131ac/src/scene/group.ts#L16)

___

### sleepTime

• **sleepTime**: `number`

The total time before this group is created. (in milliseconds)

> (aka the total time of all the animations **called** in **other** groups in the same scene)

#### Defined in

[src/scene/group.ts:54](https://github.com/imaphatduc/cubecubed/blob/26131ac/src/scene/group.ts#L54)

___

### svg\_group

• **svg\_group**: `any`

The `<svg/>` element that represents this group.

#### Defined in

[src/scene/group.ts:21](https://github.com/imaphatduc/cubecubed/blob/26131ac/src/scene/group.ts#L21)

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

[src/scene/group.ts:159](https://github.com/imaphatduc/cubecubed/blob/26131ac/src/scene/group.ts#L159)

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

[src/scene/group.ts:185](https://github.com/imaphatduc/cubecubed/blob/26131ac/src/scene/group.ts#L185)

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

[src/scene/group.ts:105](https://github.com/imaphatduc/cubecubed/blob/26131ac/src/scene/group.ts#L105)

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

[src/scene/group.ts:168](https://github.com/imaphatduc/cubecubed/blob/26131ac/src/scene/group.ts#L168)

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

[src/scene/group.ts:94](https://github.com/imaphatduc/cubecubed/blob/26131ac/src/scene/group.ts#L94)

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

[src/scene/group.ts:146](https://github.com/imaphatduc/cubecubed/blob/26131ac/src/scene/group.ts#L146)
