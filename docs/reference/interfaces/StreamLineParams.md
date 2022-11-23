[cubecubed](/reference/README.md) / [Exports](/reference/modules.md) / StreamLineParams

# Interface: StreamLineParams

## Hierarchy

- [`CanvasCubiconParams`](/reference/interfaces/CanvasCubiconParams.md)<[`STREAMLINE_CONFIG`](/reference/interfaces/STREAMLINE_CONFIG.md)\>

  ↳ **`StreamLineParams`**

## Properties

### CONFIG

• `Optional` **CONFIG**: [`STREAMLINE_CONFIG`](/reference/interfaces/STREAMLINE_CONFIG.md)

Config options of this cubicon.

#### Inherited from

[CanvasCubiconParams](/reference/interfaces/CanvasCubiconParams.md).[CONFIG](/reference/interfaces/CanvasCubiconParams.md#config)

#### Defined in

[src/canvas/cubicons/CanvasCubicon.ts:27](https://github.com/imaphatduc/cubecubed/blob/f64863c/src/canvas/cubicons/CanvasCubicon.ts#L27)

___

### dt

• `Optional` **dt**: `number`

Speed when changing the position of the stream line.

**`Default`**

0.01

#### Defined in

[src/canvas/cubicons/StreamLine.ts:42](https://github.com/imaphatduc/cubecubed/blob/f64863c/src/canvas/cubicons/StreamLine.ts#L42)

___

### functionDef

• **functionDef**: [`StreamVectorFunction`](/reference/types/StreamVectorFunction.md)

The function to change the cubicon's position at each frame.

#### Defined in

[src/canvas/cubicons/StreamLine.ts:47](https://github.com/imaphatduc/cubecubed/blob/f64863c/src/canvas/cubicons/StreamLine.ts#L47)

___

### group

• **group**: [`CanvasGroup`](/reference/classes/CanvasGroup.md)

The group that this cubicon belongs to.

#### Inherited from

[CanvasCubiconParams](/reference/interfaces/CanvasCubiconParams.md).[group](/reference/interfaces/CanvasCubiconParams.md#group)

#### Defined in

[src/canvas/cubicons/CanvasCubicon.ts:12](https://github.com/imaphatduc/cubecubed/blob/f64863c/src/canvas/cubicons/CanvasCubicon.ts#L12)

___

### maxVertices

• `Optional` **maxVertices**: `number`

Maximum number of vertices for the stream line.

**`Default`**

2

#### Defined in

[src/canvas/cubicons/StreamLine.ts:54](https://github.com/imaphatduc/cubecubed/blob/f64863c/src/canvas/cubicons/StreamLine.ts#L54)

___

### position

• `Optional` **position**: [`Vector3`](/reference/classes/Vector3.md)

Position of this cubicon.

#### Inherited from

[CanvasCubiconParams](/reference/interfaces/CanvasCubiconParams.md).[position](/reference/interfaces/CanvasCubiconParams.md#position)

#### Defined in

[src/canvas/cubicons/CanvasCubicon.ts:17](https://github.com/imaphatduc/cubecubed/blob/f64863c/src/canvas/cubicons/CanvasCubicon.ts#L17)

___

### scaleFactor

• `Optional` **scaleFactor**: `number`

Scale the position vector of this cubicon by this number.

#### Inherited from

[CanvasCubiconParams](/reference/interfaces/CanvasCubiconParams.md).[scaleFactor](/reference/interfaces/CanvasCubiconParams.md#scalefactor)

#### Defined in

[src/canvas/cubicons/CanvasCubicon.ts:22](https://github.com/imaphatduc/cubecubed/blob/f64863c/src/canvas/cubicons/CanvasCubicon.ts#L22)
