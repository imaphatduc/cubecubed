[cubecubed](/reference/README.md) / [Exports](/reference/modules.md) / StreamLine

# Class: StreamLine

Render a continuous flow based on mathematical function
that forms a vector field. Initial position
(`Vector3(0, 0, 0)` by default) and maximum number of vertices
(`0` by default) must be defined. The next vertices will be
plotted by applying the specified function to the initial
position at each animation frame, resulting a stream line.

Note that the terms `flow` and `stream line` here are used
interchangably.

## Hierarchy

- [`CanvasCubicon`](/reference/classes/CanvasCubicon.md)

  ↳ **`StreamLine`**

## Constructors

### constructor

• **new StreamLine**(`params`)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | [`StreamLineParams`](/reference/interfaces/StreamLineParams.md) | An object that contains options to form the stream line. |

#### Overrides

[CanvasCubicon](/reference/classes/CanvasCubicon.md).[constructor](/reference/classes/CanvasCubicon.md#constructor)

#### Defined in

[src/canvas/cubicons/StreamLine.ts:95](https://github.com/imaphatduc/cubecubed/blob/ec15a85/src/canvas/cubicons/StreamLine.ts#L95)

## Properties

### CONFIG

• **CONFIG**: [`STREAMLINE_CONFIG`](/reference/interfaces/STREAMLINE_CONFIG.md)

#### Overrides

[CanvasCubicon](/reference/classes/CanvasCubicon.md).[CONFIG](/reference/classes/CanvasCubicon.md#config)

#### Defined in

[src/canvas/cubicons/StreamLine.ts:90](https://github.com/imaphatduc/cubecubed/blob/ec15a85/src/canvas/cubicons/StreamLine.ts#L90)

___

### functionDef

• **functionDef**: [`StreamVectorFunction`](/reference/types/StreamVectorFunction.md)

The function defining the position of the target
cubicon. This function should take a `Vector3()`
object as both input and output. The `Vector3()`
output object is the cubicon's position at next frame.

Example of a function defining a vector field:

```ts
const sineField = ({ x, y, z })
    => new Vector3(Math.sin(y), Math.sin(x), z);
}

```

#### Defined in

[src/canvas/cubicons/StreamLine.ts:84](https://github.com/imaphatduc/cubecubed/blob/ec15a85/src/canvas/cubicons/StreamLine.ts#L84)

___

### geometry

• **geometry**: `BufferGeometry`

Geometry of this cubicon.

#### Inherited from

[CanvasCubicon](/reference/classes/CanvasCubicon.md).[geometry](/reference/classes/CanvasCubicon.md#geometry)

#### Defined in

[src/canvas/cubicons/CanvasCubicon.ts:42](https://github.com/imaphatduc/cubecubed/blob/ec15a85/src/canvas/cubicons/CanvasCubicon.ts#L42)

___

### group

• **group**: [`CanvasGroup`](/reference/classes/CanvasGroup.md)

#### Inherited from

[CanvasCubicon](/reference/classes/CanvasCubicon.md).[group](/reference/classes/CanvasCubicon.md#group)

#### Defined in

[src/canvas/cubicons/CanvasCubicon.ts:31](https://github.com/imaphatduc/cubecubed/blob/ec15a85/src/canvas/cubicons/CanvasCubicon.ts#L31)

___

### material

• **material**: `Material`

Material of this cubicon.

#### Inherited from

[CanvasCubicon](/reference/classes/CanvasCubicon.md).[material](/reference/classes/CanvasCubicon.md#material)

#### Defined in

[src/canvas/cubicons/CanvasCubicon.ts:47](https://github.com/imaphatduc/cubecubed/blob/ec15a85/src/canvas/cubicons/CanvasCubicon.ts#L47)

___

### maxVertices

• **maxVertices**: `number`

#### Defined in

[src/canvas/cubicons/StreamLine.ts:88](https://github.com/imaphatduc/cubecubed/blob/ec15a85/src/canvas/cubicons/StreamLine.ts#L88)

___

### object

• **object**: `Mesh`<`BufferGeometry`, `Material` \| `Material`[]\> \| `Line`<`BufferGeometry`, `Material` \| `Material`[]\>

Object representing this cubicon.

#### Inherited from

[CanvasCubicon](/reference/classes/CanvasCubicon.md).[object](/reference/classes/CanvasCubicon.md#object)

#### Defined in

[src/canvas/cubicons/CanvasCubicon.ts:52](https://github.com/imaphatduc/cubecubed/blob/ec15a85/src/canvas/cubicons/CanvasCubicon.ts#L52)

___

### position

• **position**: [`Vector3`](/reference/classes/Vector3.md)

#### Inherited from

[CanvasCubicon](/reference/classes/CanvasCubicon.md).[position](/reference/classes/CanvasCubicon.md#position)

#### Defined in

[src/canvas/cubicons/CanvasCubicon.ts:33](https://github.com/imaphatduc/cubecubed/blob/ec15a85/src/canvas/cubicons/CanvasCubicon.ts#L33)

___

### scaleFactor

• **scaleFactor**: `number`

#### Inherited from

[CanvasCubicon](/reference/classes/CanvasCubicon.md).[scaleFactor](/reference/classes/CanvasCubicon.md#scalefactor)

#### Defined in

[src/canvas/cubicons/CanvasCubicon.ts:35](https://github.com/imaphatduc/cubecubed/blob/ec15a85/src/canvas/cubicons/CanvasCubicon.ts#L35)

___

### vertices

• **vertices**: [`Vector3`](/reference/classes/Vector3.md)[]

#### Defined in

[src/canvas/cubicons/StreamLine.ts:86](https://github.com/imaphatduc/cubecubed/blob/ec15a85/src/canvas/cubicons/StreamLine.ts#L86)

## Accessors

### points

• `get` **points**(): `Vector3`[]

#### Returns

`Vector3`[]

#### Defined in

[src/canvas/cubicons/StreamLine.ts:159](https://github.com/imaphatduc/cubecubed/blob/ec15a85/src/canvas/cubicons/StreamLine.ts#L159)

## Methods

### nextVertex

▸ **nextVertex**(): [`Vector3`](/reference/classes/Vector3.md)

#### Returns

[`Vector3`](/reference/classes/Vector3.md)

#### Defined in

[src/canvas/cubicons/StreamLine.ts:151](https://github.com/imaphatduc/cubecubed/blob/ec15a85/src/canvas/cubicons/StreamLine.ts#L151)

___

### render

▸ **render**(): [`StreamLine`](/reference/classes/StreamLine.md)

#### Returns

[`StreamLine`](/reference/classes/StreamLine.md)

#### Overrides

[CanvasCubicon](/reference/classes/CanvasCubicon.md).[render](/reference/classes/CanvasCubicon.md#render)

#### Defined in

[src/canvas/cubicons/StreamLine.ts:120](https://github.com/imaphatduc/cubecubed/blob/ec15a85/src/canvas/cubicons/StreamLine.ts#L120)
