[cubecubed](/reference/README.md) / [Exports](/reference/modules.md) / RevolutionSurface

# Class: RevolutionSurface

## Hierarchy

- [`CanvasCubicon`](/reference/classes/CanvasCubicon.md)

  ↳ **`RevolutionSurface`**

## Constructors

### constructor

• **new RevolutionSurface**(`params`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`RevolutionSurfaceParams`](/reference/interfaces/RevolutionSurfaceParams.md) |

#### Overrides

[CanvasCubicon](/reference/classes/CanvasCubicon.md).[constructor](/reference/classes/CanvasCubicon.md#constructor)

#### Defined in

[src/canvas/cubicons/RevolutionSurface.ts:59](https://github.com/imaphatduc/cubecubed/blob/0bd348a/src/canvas/cubicons/RevolutionSurface.ts#L59)

## Properties

### CONFIG

• **CONFIG**: [`REVOLUTION_SURFACE_CONFIG`](/reference/interfaces/REVOLUTION_SURFACE_CONFIG.md)

#### Overrides

[CanvasCubicon](/reference/classes/CanvasCubicon.md).[CONFIG](/reference/classes/CanvasCubicon.md#config)

#### Defined in

[src/canvas/cubicons/RevolutionSurface.ts:57](https://github.com/imaphatduc/cubecubed/blob/0bd348a/src/canvas/cubicons/RevolutionSurface.ts#L57)

___

### functionDef

• **functionDef**: [`CurveFunction`](/reference/types/CurveFunction.md)

The function defining the curve to rotate around the x axis.

Form: y = f(x)

#### Defined in

[src/canvas/cubicons/RevolutionSurface.ts:55](https://github.com/imaphatduc/cubecubed/blob/0bd348a/src/canvas/cubicons/RevolutionSurface.ts#L55)

___

### geometry

• **geometry**: `BufferGeometry`

Geometry of this cubicon.

#### Inherited from

[CanvasCubicon](/reference/classes/CanvasCubicon.md).[geometry](/reference/classes/CanvasCubicon.md#geometry)

#### Defined in

[src/canvas/cubicons/CanvasCubicon.ts:35](https://github.com/imaphatduc/cubecubed/blob/0bd348a/src/canvas/cubicons/CanvasCubicon.ts#L35)

___

### group

• **group**: [`CanvasGroup`](/reference/classes/CanvasGroup.md)

#### Inherited from

[CanvasCubicon](/reference/classes/CanvasCubicon.md).[group](/reference/classes/CanvasCubicon.md#group)

#### Defined in

[src/canvas/cubicons/CanvasCubicon.ts:26](https://github.com/imaphatduc/cubecubed/blob/0bd348a/src/canvas/cubicons/CanvasCubicon.ts#L26)

___

### material

• **material**: `Material`

Material of this cubicon.

#### Inherited from

[CanvasCubicon](/reference/classes/CanvasCubicon.md).[material](/reference/classes/CanvasCubicon.md#material)

#### Defined in

[src/canvas/cubicons/CanvasCubicon.ts:40](https://github.com/imaphatduc/cubecubed/blob/0bd348a/src/canvas/cubicons/CanvasCubicon.ts#L40)

___

### mesh

• **mesh**: `Mesh`<`BufferGeometry`, `Material` \| `Material`[]\>

Mesh of this cubicon.

#### Inherited from

[CanvasCubicon](/reference/classes/CanvasCubicon.md).[mesh](/reference/classes/CanvasCubicon.md#mesh)

#### Defined in

[src/canvas/cubicons/CanvasCubicon.ts:45](https://github.com/imaphatduc/cubecubed/blob/0bd348a/src/canvas/cubicons/CanvasCubicon.ts#L45)

___

### position

• **position**: [`Vector3`](/reference/classes/Vector3.md)

#### Inherited from

[CanvasCubicon](/reference/classes/CanvasCubicon.md).[position](/reference/classes/CanvasCubicon.md#position)

#### Defined in

[src/canvas/cubicons/CanvasCubicon.ts:28](https://github.com/imaphatduc/cubecubed/blob/0bd348a/src/canvas/cubicons/CanvasCubicon.ts#L28)

## Methods

### render

▸ **render**(): [`RevolutionSurface`](/reference/classes/RevolutionSurface.md)

**`internal`**

#### Returns

[`RevolutionSurface`](/reference/classes/RevolutionSurface.md)

#### Overrides

[CanvasCubicon](/reference/classes/CanvasCubicon.md).[render](/reference/classes/CanvasCubicon.md#render)

#### Defined in

[src/canvas/cubicons/RevolutionSurface.ts:81](https://github.com/imaphatduc/cubecubed/blob/0bd348a/src/canvas/cubicons/RevolutionSurface.ts#L81)

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

[src/canvas/cubicons/RevolutionSurface.ts:122](https://github.com/imaphatduc/cubecubed/blob/0bd348a/src/canvas/cubicons/RevolutionSurface.ts#L122)
