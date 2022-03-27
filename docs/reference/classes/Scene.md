[cubecubed](/reference/README.md) / [Exports](/reference/modules.md) / Scene

# Class: Scene

The granddad/grandma object of everything in the visualization.
Scene() here is a must in every result math videos.

Please see the Quick Start page in official documentation for clearer understanding about this `Scene` term.

## Constructors

### constructor

• **new Scene**(`sceneName`, `CONFIG?`)

Include this scene to HTML flow.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `sceneName` | `string` | Name of the scene. |
| `CONFIG?` | `SCENE_CONFIG` | - |

#### Defined in

[src/scene/Scene.ts:47](https://github.com/imaphatduc/cubecubed/blob/1251e31/src/scene/Scene.ts#L47)

## Properties

### groups

• **groups**: [`Group`](/reference/classes/Group.md)[] = `[]`

List of group included in this scene.

#### Defined in

[src/scene/Scene.ts:40](https://github.com/imaphatduc/cubecubed/blob/1251e31/src/scene/Scene.ts#L40)

___

### name

• **name**: `string`

Name of this scene.

#### Defined in

[src/scene/Scene.ts:25](https://github.com/imaphatduc/cubecubed/blob/1251e31/src/scene/Scene.ts#L25)

___

### sceneHeight

• **sceneHeight**: `number`

Height of this scene.

#### Defined in

[src/scene/Scene.ts:35](https://github.com/imaphatduc/cubecubed/blob/1251e31/src/scene/Scene.ts#L35)

___

### sceneWidth

• **sceneWidth**: `number`

Width of this scene.

#### Defined in

[src/scene/Scene.ts:30](https://github.com/imaphatduc/cubecubed/blob/1251e31/src/scene/Scene.ts#L30)

## Methods

### destroy

▸ **destroy**(`delay`): `void`

Fade out and remove this scene away from HTML flow.
That means, everything in the scene will be removed, too.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `delay` | `number` | Delay (in milliseconds) before destroying this scene. > This delay variable should be tracked by summing all Group().groupElapsed properties of all `Group()`s in this scene. |

#### Returns

`void`

#### Defined in

[src/scene/Scene.ts:63](https://github.com/imaphatduc/cubecubed/blob/1251e31/src/scene/Scene.ts#L63)
