[cubecubed](/reference/README.md) / [Exports](/reference/modules.md) / Scene

# Class: Scene

The granddad/grandma object of everything in the visualization.
Scene() here is a must in every result math videos.

Each scene must include at least one group.

Please see the Quick Start page in official documentation for clearer understanding about this `Scene` term.

## Constructors

### constructor

• **new Scene**(`sceneName`)

Include this scene to HTML flow.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `sceneName` | `string` | Name of the scene. |

#### Defined in

[src/scene/scene.ts:27](https://github.com/imaphatduc/cubecubed/blob/dfe7a5d/src/scene/scene.ts#L27)

## Properties

### name

• **name**: `string`

Name of this scene.

#### Defined in

[src/scene/scene.ts:20](https://github.com/imaphatduc/cubecubed/blob/dfe7a5d/src/scene/scene.ts#L20)

___

### svg\_scene

• **svg\_scene**: `any`

The `<svg/>` element that represents this scene.

#### Defined in

[src/scene/scene.ts:15](https://github.com/imaphatduc/cubecubed/blob/dfe7a5d/src/scene/scene.ts#L15)

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

[src/scene/scene.ts:44](https://github.com/imaphatduc/cubecubed/blob/dfe7a5d/src/scene/scene.ts#L44)
