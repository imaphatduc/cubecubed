[cubecubed](/reference/README.md) / [Exports](/reference/modules.md) / CanvasAnimation

# Class: CanvasAnimation

## Hierarchy

- **`CanvasAnimation`**

  ↳ [`Flow`](/reference/classes/Flow.md)

  ↳ [`SimulateStream`](/reference/classes/SimulateStream.md)

  ↳ [`SimulateRevolution`](/reference/classes/SimulateRevolution.md)

## Constructors

### constructor

• **new CanvasAnimation**(`params`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | `Object` |
| `params.cubicon` | [`CanvasCubicon`](/reference/classes/CanvasCubicon.md) |
| `params.duration?` | `number` |

#### Defined in

[src/canvas/animations/CanvasAnimation.ts:25](https://github.com/imaphatduc/cubecubed/blob/0c47e8e/src/canvas/animations/CanvasAnimation.ts#L25)

## Properties

### cubicon

• **cubicon**: [`CanvasCubicon`](/reference/classes/CanvasCubicon.md)

#### Defined in

[src/canvas/animations/CanvasAnimation.ts:16](https://github.com/imaphatduc/cubecubed/blob/0c47e8e/src/canvas/animations/CanvasAnimation.ts#L16)

___

### duration

• **duration**: `number`

#### Defined in

[src/canvas/animations/CanvasAnimation.ts:18](https://github.com/imaphatduc/cubecubed/blob/0c47e8e/src/canvas/animations/CanvasAnimation.ts#L18)

___

### sleepTime

• **sleepTime**: `number` = `0`

The time to wait before playing this animation.

#### Defined in

[src/canvas/animations/CanvasAnimation.ts:23](https://github.com/imaphatduc/cubecubed/blob/0c47e8e/src/canvas/animations/CanvasAnimation.ts#L23)

## Methods

### play

▸ **play**(): `void`

Play this animation.

**`internal`**

#### Returns

`void`

#### Defined in

[src/canvas/animations/CanvasAnimation.ts:38](https://github.com/imaphatduc/cubecubed/blob/0c47e8e/src/canvas/animations/CanvasAnimation.ts#L38)
