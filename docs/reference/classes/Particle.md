[cubecubed](/reference/README.md) / [Exports](/reference/modules.md) / Particle

# Class: Particle

Creating a new `Particle()` object means render a point
on the animation screen.

Particle term here represents a point (aka a dot).

## Hierarchy

- [`CanvasCubicon`](/reference/classes/CanvasCubicon.md)

  ↳ **`Particle`**

## Constructors

### constructor

• **new Particle**(`params`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`ParticleParams`](/reference/interfaces/ParticleParams.md) |

#### Overrides

[CanvasCubicon](/reference/classes/CanvasCubicon.md).[constructor](/reference/classes/CanvasCubicon.md#constructor)

#### Defined in

[src/canvas/cubicons/Particle.ts:37](https://github.com/imaphatduc/cubecubed/blob/0fd2007/src/canvas/cubicons/Particle.ts#L37)

## Properties

### CONFIG

• **CONFIG**: [`PARTICLE_CONFIG`](/reference/interfaces/PARTICLE_CONFIG.md)

#### Overrides

[CanvasCubicon](/reference/classes/CanvasCubicon.md).[CONFIG](/reference/classes/CanvasCubicon.md#config)

#### Defined in

[src/canvas/cubicons/Particle.ts:35](https://github.com/imaphatduc/cubecubed/blob/0fd2007/src/canvas/cubicons/Particle.ts#L35)

___

### geometry

• **geometry**: `BufferGeometry`

Geometry of this cubicon.

#### Inherited from

[CanvasCubicon](/reference/classes/CanvasCubicon.md).[geometry](/reference/classes/CanvasCubicon.md#geometry)

#### Defined in

[src/canvas/cubicons/CanvasCubicon.ts:35](https://github.com/imaphatduc/cubecubed/blob/0fd2007/src/canvas/cubicons/CanvasCubicon.ts#L35)

___

### group

• **group**: [`CanvasGroup`](/reference/classes/CanvasGroup.md)

#### Inherited from

[CanvasCubicon](/reference/classes/CanvasCubicon.md).[group](/reference/classes/CanvasCubicon.md#group)

#### Defined in

[src/canvas/cubicons/CanvasCubicon.ts:26](https://github.com/imaphatduc/cubecubed/blob/0fd2007/src/canvas/cubicons/CanvasCubicon.ts#L26)

___

### material

• **material**: `Material`

Material of this cubicon.

#### Inherited from

[CanvasCubicon](/reference/classes/CanvasCubicon.md).[material](/reference/classes/CanvasCubicon.md#material)

#### Defined in

[src/canvas/cubicons/CanvasCubicon.ts:40](https://github.com/imaphatduc/cubecubed/blob/0fd2007/src/canvas/cubicons/CanvasCubicon.ts#L40)

___

### mesh

• **mesh**: `Mesh`<`BufferGeometry`, `Material` \| `Material`[]\>

Mesh of this cubicon.

#### Inherited from

[CanvasCubicon](/reference/classes/CanvasCubicon.md).[mesh](/reference/classes/CanvasCubicon.md#mesh)

#### Defined in

[src/canvas/cubicons/CanvasCubicon.ts:45](https://github.com/imaphatduc/cubecubed/blob/0fd2007/src/canvas/cubicons/CanvasCubicon.ts#L45)

___

### position

• **position**: [`Vector3`](/reference/classes/Vector3.md)

#### Inherited from

[CanvasCubicon](/reference/classes/CanvasCubicon.md).[position](/reference/classes/CanvasCubicon.md#position)

#### Defined in

[src/canvas/cubicons/CanvasCubicon.ts:28](https://github.com/imaphatduc/cubecubed/blob/0fd2007/src/canvas/cubicons/CanvasCubicon.ts#L28)

___

### radius

• **radius**: `number`

#### Defined in

[src/canvas/cubicons/Particle.ts:33](https://github.com/imaphatduc/cubecubed/blob/0fd2007/src/canvas/cubicons/Particle.ts#L33)

## Methods

### render

▸ **render**(): [`Particle`](/reference/classes/Particle.md)

#### Returns

[`Particle`](/reference/classes/Particle.md)

#### Overrides

[CanvasCubicon](/reference/classes/CanvasCubicon.md).[render](/reference/classes/CanvasCubicon.md#render)

#### Defined in

[src/canvas/cubicons/Particle.ts:56](https://github.com/imaphatduc/cubecubed/blob/0fd2007/src/canvas/cubicons/Particle.ts#L56)
