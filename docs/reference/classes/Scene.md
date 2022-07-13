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
| `CONFIG?` | [`SCENE_CONFIG`](/reference/interfaces/SCENE_CONFIG.md) | - |

#### Defined in

[src/scene/Scene.ts:54](https://github.com/imaphatduc/cubecubed/blob/4495c75/src/scene/Scene.ts#L54)

## Properties

### name

• **name**: `string`

Name of this scene.

#### Defined in

[src/scene/Scene.ts:30](https://github.com/imaphatduc/cubecubed/blob/4495c75/src/scene/Scene.ts#L30)

___

### sceneElapsed

• **sceneElapsed**: `number` = `0`

The time passed by since this scene was created. (in milliseconds)

> (aka the total time of all the animations of all groups included in this scene)

#### Defined in

[src/scene/Scene.ts:47](https://github.com/imaphatduc/cubecubed/blob/4495c75/src/scene/Scene.ts#L47)

___

### sceneHeight

• **sceneHeight**: `number`

Height of this scene.

#### Defined in

[src/scene/Scene.ts:40](https://github.com/imaphatduc/cubecubed/blob/4495c75/src/scene/Scene.ts#L40)

___

### sceneWidth

• **sceneWidth**: `number`

Width of this scene.

#### Defined in

[src/scene/Scene.ts:35](https://github.com/imaphatduc/cubecubed/blob/4495c75/src/scene/Scene.ts#L35)

## Methods

### destroy

▸ **destroy**(`delay?`): `void`

Fade out and remove this scene away from HTML flow.
That means, everything in the scene will be removed, too.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `delay` | `number` | `0` | Delay (in milliseconds) before destroying this scene. > This delay variable should be tracked by summing all Group().groupElapsed properties of all `Group()`s in this scene. |

#### Returns

`void`

#### Defined in

[src/scene/Scene.ts:70](https://github.com/imaphatduc/cubecubed/blob/4495c75/src/scene/Scene.ts#L70)
