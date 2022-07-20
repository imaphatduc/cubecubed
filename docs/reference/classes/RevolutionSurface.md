[cubecubed](/reference/README.md) / [Exports](/reference/modules.md) / RevolutionSurface

# Class: RevolutionSurface

## Hierarchy

- [`CanvasCubicon`](/reference/classes/CanvasCubicon.md)

  ↳ **`RevolutionSurface`**

## Constructors

### constructor

• **new RevolutionSurface**(`params`)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | `Object` | - |
| `params.CONFIG` | [`REVOLUTION_SURFACE_CONFIG`](/reference/interfaces/REVOLUTION_SURFACE_CONFIG.md) | Config options of the revolution surface.  **`default`** REVOLUTION_SURFACE_DEFAULT_CONFIG |
| `params.functionDef` | [`CurveFunction`](/reference/types/CurveFunction.md) | Function definition of the initial curve. |
| `params.group` | [`CanvasGroup`](/reference/classes/CanvasGroup.md) | The group that the particle belongs to |
| `params.position?` | [`Vector3`](/reference/classes/Vector3.md) | Position of the particle.  **`default`** Vector3(0,0,0) |

#### Overrides

[CanvasCubicon](/reference/classes/CanvasCubicon.md).[constructor](/reference/classes/CanvasCubicon.md#constructor)

#### Defined in

[src/canvas/cubicons/RevolutionSurface.ts:48](https://github.com/imaphatduc/cubecubed/blob/8295992/src/canvas/cubicons/RevolutionSurface.ts#L48)

## Properties

### CONFIG

• **CONFIG**: [`REVOLUTION_SURFACE_CONFIG`](/reference/interfaces/REVOLUTION_SURFACE_CONFIG.md)

Config options of the revolution surface.

#### Defined in

[src/canvas/cubicons/RevolutionSurface.ts:46](https://github.com/imaphatduc/cubecubed/blob/8295992/src/canvas/cubicons/RevolutionSurface.ts#L46)

___

### functionDef

• **functionDef**: [`CurveFunction`](/reference/types/CurveFunction.md)

The function defining the curve to rotate around
the x axis.

Form: y = f(x)

#### Defined in

[src/canvas/cubicons/RevolutionSurface.ts:41](https://github.com/imaphatduc/cubecubed/blob/8295992/src/canvas/cubicons/RevolutionSurface.ts#L41)

___

### geometry

• **geometry**: `BufferGeometry`

Geometry of this cubicon.

#### Inherited from

[CanvasCubicon](/reference/classes/CanvasCubicon.md).[geometry](/reference/classes/CanvasCubicon.md#geometry)

#### Defined in

[src/canvas/cubicons/CanvasCubicon.ts:23](https://github.com/imaphatduc/cubecubed/blob/8295992/src/canvas/cubicons/CanvasCubicon.ts#L23)

___

### group

• **group**: [`CanvasGroup`](/reference/classes/CanvasGroup.md)

The group that this cubicon belongs to.

#### Inherited from

[CanvasCubicon](/reference/classes/CanvasCubicon.md).[group](/reference/classes/CanvasCubicon.md#group)

#### Defined in

[src/canvas/cubicons/CanvasCubicon.ts:12](https://github.com/imaphatduc/cubecubed/blob/8295992/src/canvas/cubicons/CanvasCubicon.ts#L12)

___

### material

• **material**: `Material`

Material of this cubicon.

#### Inherited from

[CanvasCubicon](/reference/classes/CanvasCubicon.md).[material](/reference/classes/CanvasCubicon.md#material)

#### Defined in

[src/canvas/cubicons/CanvasCubicon.ts:28](https://github.com/imaphatduc/cubecubed/blob/8295992/src/canvas/cubicons/CanvasCubicon.ts#L28)

___

### mesh

• **mesh**: `Mesh`<`BufferGeometry`, `Material` \| `Material`[]\>

Mesh of this cubicon.

#### Inherited from

[CanvasCubicon](/reference/classes/CanvasCubicon.md).[mesh](/reference/classes/CanvasCubicon.md#mesh)

#### Defined in

[src/canvas/cubicons/CanvasCubicon.ts:33](https://github.com/imaphatduc/cubecubed/blob/8295992/src/canvas/cubicons/CanvasCubicon.ts#L33)

___

### position

• **position**: [`Vector3`](/reference/classes/Vector3.md)

Position of this cubicon.
This property changed after finishing animations (in real time).

#### Inherited from

[CanvasCubicon](/reference/classes/CanvasCubicon.md).[position](/reference/classes/CanvasCubicon.md#position)

#### Defined in

[src/canvas/cubicons/CanvasCubicon.ts:18](https://github.com/imaphatduc/cubecubed/blob/8295992/src/canvas/cubicons/CanvasCubicon.ts#L18)

___

### scaleFactor

• **scaleFactor**: `number`

Scale the position vector of this cubicon by this number.

#### Inherited from

[CanvasCubicon](/reference/classes/CanvasCubicon.md).[scaleFactor](/reference/classes/CanvasCubicon.md#scalefactor)

#### Defined in

[src/canvas/cubicons/CanvasCubicon.ts:38](https://github.com/imaphatduc/cubecubed/blob/8295992/src/canvas/cubicons/CanvasCubicon.ts#L38)

___

### token

• **token**: `string`

Token string for this cubicon.

#### Inherited from

[CanvasCubicon](/reference/classes/CanvasCubicon.md).[token](/reference/classes/CanvasCubicon.md#token)

#### Defined in

[src/canvas/cubicons/CanvasCubicon.ts:43](https://github.com/imaphatduc/cubecubed/blob/8295992/src/canvas/cubicons/CanvasCubicon.ts#L43)

## Methods

### render

▸ **render**(): [`RevolutionSurface`](/reference/classes/RevolutionSurface.md)

**`internal`**

#### Returns

[`RevolutionSurface`](/reference/classes/RevolutionSurface.md)

#### Defined in

[src/canvas/cubicons/RevolutionSurface.ts:97](https://github.com/imaphatduc/cubecubed/blob/8295992/src/canvas/cubicons/RevolutionSurface.ts#L97)

___

### setVertices

▸ **setVertices**(`t?`): `void`

Set the surface's geometry based on the current animation stage.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `t` | `number` | `1` | "Eased" time changing smoothly in the range [0, 1]. 0 for initial stage and 1 for the complete rendered mesh. |

#### Returns

`void`

#### Defined in

[src/canvas/cubicons/RevolutionSurface.ts:130](https://github.com/imaphatduc/cubecubed/blob/8295992/src/canvas/cubicons/RevolutionSurface.ts#L130)
