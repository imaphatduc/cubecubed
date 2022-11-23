[cubecubed](/reference/README.md) / [Exports](/reference/modules.md) / Scene

# Class: Scene

The object that holds all cubicon groups. Working with Cubecubed requires
only one scene. To group cubicons together, you need to create a Group
instance and assign every cubicon to it.

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

[src/scene/Scene.ts:53](https://github.com/imaphatduc/cubecubed/blob/ffe94b1/src/scene/Scene.ts#L53)

## Properties

### CONFIG

• **CONFIG**: [`SCENE_CONFIG`](/reference/interfaces/SCENE_CONFIG.md)

Config options of this scene.

#### Defined in

[src/scene/Scene.ts:39](https://github.com/imaphatduc/cubecubed/blob/ffe94b1/src/scene/Scene.ts#L39)

___

### name

• **name**: `string`

Name of this scene.

#### Defined in

[src/scene/Scene.ts:34](https://github.com/imaphatduc/cubecubed/blob/ffe94b1/src/scene/Scene.ts#L34)

___

### sceneElapsed

• **sceneElapsed**: `number` = `0`

The time passed by since this scene was created (in milliseconds), or
the sum of the `groupElapsed` property of all groups included in this
scene.

#### Defined in

[src/scene/Scene.ts:46](https://github.com/imaphatduc/cubecubed/blob/ffe94b1/src/scene/Scene.ts#L46)

## Methods

### destroy

▸ **destroy**(`delay?`): `void`

Fade out and remove this scene away from HTML flow. That means,
everything in the scene will be removed, too.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `delay` | `number` | `0` | Delay (in milliseconds) before destroying this scene. This delay variable should be tracked by summing the `groupElapsed` properties all groups included in this scene. |

#### Returns

`void`

#### Defined in

[src/scene/Scene.ts:71](https://github.com/imaphatduc/cubecubed/blob/ffe94b1/src/scene/Scene.ts#L71)
