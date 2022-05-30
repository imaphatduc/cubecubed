[cubecubed](/reference/README.md) / [Exports](/reference/modules.md) / Particle

# Class: Particle

Creating a new `Particle()` object means render a point
on the animation screen. Do not call `render()` method
directly on any instance of this class, as it is handled
automatically by the group object.

Particle term here only represents a point (aka a dot).

## Hierarchy

- `CanvasCubicon`

  ↳ **`Particle`**

## Constructors

### constructor

• **new Particle**(`params`)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | `Object` | An object that contains options to form the particle. |
| `params.CONFIG?` | [`PARTICLE_CONFIG`](/reference/interfaces/PARTICLE_CONFIG.md) | Config options of the particle.  **`default`** PARTICLE_DEFAULT_CONFIG |
| `params.group` | [`CanvasGroup`](/reference/classes/CanvasGroup.md) | The group that the particle belongs to |
| `params.position?` | [`Vector3`](/reference/classes/Vector3.md) | Position of the particle.  **`default`** Vector3(0, 0, 0) |
| `params.scaleFactor?` | `number` | Scale the position vector of the particle by this number.  **`default`** 1 |

#### Overrides

CanvasCubicon.constructor

#### Defined in

[src/canvas/cubicons/Particle.ts:39](https://github.com/imaphatduc/cubecubed/blob/1d9e38f/src/canvas/cubicons/Particle.ts#L39)

## Properties

### CONFIG

• **CONFIG**: [`PARTICLE_CONFIG`](/reference/interfaces/PARTICLE_CONFIG.md)

Config options of the particle.

#### Defined in

[src/canvas/cubicons/Particle.ts:34](https://github.com/imaphatduc/cubecubed/blob/1d9e38f/src/canvas/cubicons/Particle.ts#L34)

___

### group

• **group**: [`CanvasGroup`](/reference/classes/CanvasGroup.md)

The group that this cubicon belongs to.

#### Inherited from

CanvasCubicon.group

#### Defined in

[src/canvas/cubicons/CanvasCubicon.ts:11](https://github.com/imaphatduc/cubecubed/blob/1d9e38f/src/canvas/cubicons/CanvasCubicon.ts#L11)

___

### position

• **position**: [`Vector3`](/reference/classes/Vector3.md)

Position of this cubicon.
This property changed after finishing animations (in real time).

#### Inherited from

CanvasCubicon.position

#### Defined in

[src/canvas/cubicons/CanvasCubicon.ts:17](https://github.com/imaphatduc/cubecubed/blob/1d9e38f/src/canvas/cubicons/CanvasCubicon.ts#L17)

___

### scaleFactor

• **scaleFactor**: `number`

Scale the position vector of this cubicon by this number.

#### Inherited from

CanvasCubicon.scaleFactor

#### Defined in

[src/canvas/cubicons/CanvasCubicon.ts:22](https://github.com/imaphatduc/cubecubed/blob/1d9e38f/src/canvas/cubicons/CanvasCubicon.ts#L22)

___

### token

• **token**: `string`

Token string for this cubicon.

#### Inherited from

CanvasCubicon.token

#### Defined in

[src/canvas/cubicons/CanvasCubicon.ts:27](https://github.com/imaphatduc/cubecubed/blob/1d9e38f/src/canvas/cubicons/CanvasCubicon.ts#L27)

## Methods

### render

▸ **render**(`p`): `void`

**`internal`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `p` | `any` |

#### Returns

`void`

#### Defined in

[src/canvas/cubicons/Particle.ts:82](https://github.com/imaphatduc/cubecubed/blob/1d9e38f/src/canvas/cubicons/Particle.ts#L82)
