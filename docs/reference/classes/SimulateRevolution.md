[cubecubed](/reference/README.md) / [Exports](/reference/modules.md) / SimulateRevolution

# Class: SimulateRevolution

## Hierarchy

- [`CanvasAnimation`](/reference/classes/CanvasAnimation.md)

  ↳ **`SimulateRevolution`**

## Constructors

### constructor

• **new SimulateRevolution**(`params`)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | `Object` | - |
| `params.cubicon` | [`RevolutionSurface`](/reference/classes/RevolutionSurface.md) | The target cubicon to play this animation. |
| `params.duration?` | `number` | Time to play this animation. (in milliseconds)  **`default`** 0 |

#### Overrides

[CanvasAnimation](/reference/classes/CanvasAnimation.md).[constructor](/reference/classes/CanvasAnimation.md#constructor)

#### Defined in

[src/canvas/animations/SimulateRevolution.ts:9](https://github.com/imaphatduc/cubecubed/blob/e48fd86/src/canvas/animations/SimulateRevolution.ts#L9)

## Properties

### cubicon

• **cubicon**: `any`

The target cubicon of this animation.

#### Inherited from

[CanvasAnimation](/reference/classes/CanvasAnimation.md).[cubicon](/reference/classes/CanvasAnimation.md#cubicon)

#### Defined in

[src/canvas/animations/CanvasAnimation.ts:5](https://github.com/imaphatduc/cubecubed/blob/e48fd86/src/canvas/animations/CanvasAnimation.ts#L5)

___

### duration

• **duration**: `number`

Time to play this animation (in milliseconds).

#### Inherited from

[CanvasAnimation](/reference/classes/CanvasAnimation.md).[duration](/reference/classes/CanvasAnimation.md#duration)

#### Defined in

[src/canvas/animations/CanvasAnimation.ts:10](https://github.com/imaphatduc/cubecubed/blob/e48fd86/src/canvas/animations/CanvasAnimation.ts#L10)

## Methods

### play

▸ **play**(`sleepTime`): `void`

**`internal`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `sleepTime` | `number` |

#### Returns

`void`

#### Overrides

[CanvasAnimation](/reference/classes/CanvasAnimation.md).[play](/reference/classes/CanvasAnimation.md#play)

#### Defined in

[src/canvas/animations/SimulateRevolution.ts:30](https://github.com/imaphatduc/cubecubed/blob/e48fd86/src/canvas/animations/SimulateRevolution.ts#L30)
