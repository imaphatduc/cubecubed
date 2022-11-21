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

[src/canvas/cubicons/Particle.ts:37](https://github.com/imaphatduc/cubecubed/blob/f8be6e1/src/canvas/cubicons/Particle.ts#L37)

## Properties

### CONFIG

• **CONFIG**: [`PARTICLE_CONFIG`](/reference/interfaces/PARTICLE_CONFIG.md)

#### Overrides

[CanvasCubicon](/reference/classes/CanvasCubicon.md).[CONFIG](/reference/classes/CanvasCubicon.md#config)

#### Defined in

[src/canvas/cubicons/Particle.ts:35](https://github.com/imaphatduc/cubecubed/blob/f8be6e1/src/canvas/cubicons/Particle.ts#L35)

___

### geometry

• **geometry**: `BufferGeometry`

Geometry of this cubicon.

#### Inherited from

[CanvasCubicon](/reference/classes/CanvasCubicon.md).[geometry](/reference/classes/CanvasCubicon.md#geometry)

#### Defined in

[src/canvas/cubicons/CanvasCubicon.ts:42](https://github.com/imaphatduc/cubecubed/blob/f8be6e1/src/canvas/cubicons/CanvasCubicon.ts#L42)

___

### group

• **group**: [`CanvasGroup`](/reference/classes/CanvasGroup.md)

#### Inherited from

[CanvasCubicon](/reference/classes/CanvasCubicon.md).[group](/reference/classes/CanvasCubicon.md#group)

#### Defined in

[src/canvas/cubicons/CanvasCubicon.ts:31](https://github.com/imaphatduc/cubecubed/blob/f8be6e1/src/canvas/cubicons/CanvasCubicon.ts#L31)

___

### material

• **material**: `Material`

Material of this cubicon.

#### Inherited from

[CanvasCubicon](/reference/classes/CanvasCubicon.md).[material](/reference/classes/CanvasCubicon.md#material)

#### Defined in

[src/canvas/cubicons/CanvasCubicon.ts:47](https://github.com/imaphatduc/cubecubed/blob/f8be6e1/src/canvas/cubicons/CanvasCubicon.ts#L47)

___

### object

• **object**: `Mesh`<`BufferGeometry`, `Material` \| `Material`[]\> \| `Line`<`BufferGeometry`, `Material` \| `Material`[]\>

Object representing this cubicon.

#### Inherited from

[CanvasCubicon](/reference/classes/CanvasCubicon.md).[object](/reference/classes/CanvasCubicon.md#object)

#### Defined in

[src/canvas/cubicons/CanvasCubicon.ts:52](https://github.com/imaphatduc/cubecubed/blob/f8be6e1/src/canvas/cubicons/CanvasCubicon.ts#L52)

___

### position

• **position**: [`Vector3`](/reference/classes/Vector3.md)

#### Inherited from

[CanvasCubicon](/reference/classes/CanvasCubicon.md).[position](/reference/classes/CanvasCubicon.md#position)

#### Defined in

[src/canvas/cubicons/CanvasCubicon.ts:33](https://github.com/imaphatduc/cubecubed/blob/f8be6e1/src/canvas/cubicons/CanvasCubicon.ts#L33)

___

### radius

• **radius**: `number`

#### Defined in

[src/canvas/cubicons/Particle.ts:33](https://github.com/imaphatduc/cubecubed/blob/f8be6e1/src/canvas/cubicons/Particle.ts#L33)

___

### scaleFactor

• **scaleFactor**: `number`

#### Inherited from

[CanvasCubicon](/reference/classes/CanvasCubicon.md).[scaleFactor](/reference/classes/CanvasCubicon.md#scalefactor)

#### Defined in

[src/canvas/cubicons/CanvasCubicon.ts:35](https://github.com/imaphatduc/cubecubed/blob/f8be6e1/src/canvas/cubicons/CanvasCubicon.ts#L35)

## Methods

### render

▸ **render**(): [`Particle`](/reference/classes/Particle.md)

#### Returns

[`Particle`](/reference/classes/Particle.md)

#### Overrides

[CanvasCubicon](/reference/classes/CanvasCubicon.md).[render](/reference/classes/CanvasCubicon.md#render)

#### Defined in

[src/canvas/cubicons/Particle.ts:58](https://github.com/imaphatduc/cubecubed/blob/f8be6e1/src/canvas/cubicons/Particle.ts#L58)
