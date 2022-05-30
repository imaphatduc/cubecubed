[cubecubed](/reference/README.md) / [Exports](/reference/modules.md) / SimulateStream

# Class: SimulateStream

## Hierarchy

- `CanvasAnimation`

  ↳ **`SimulateStream`**

## Constructors

### constructor

• **new SimulateStream**(`params`)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | `Object` | - |
| `params.cubicon` | [`StreamLine`](/reference/classes/StreamLine.md) | The target cubicon to play this animation. |
| `params.duration?` | `number` | Time to play this animation. (in milliseconds)  **`default`** 0 |

#### Overrides

CanvasAnimation.constructor

#### Defined in

[src/canvas/animations/SimulateStream.ts:8](https://github.com/imaphatduc/cubecubed/blob/1d9e38f/src/canvas/animations/SimulateStream.ts#L8)

## Properties

### cubicon

• **cubicon**: `any`

The target cubicon of this animation.

#### Inherited from

CanvasAnimation.cubicon

#### Defined in

[src/canvas/animations/CanvasAnimation.ts:5](https://github.com/imaphatduc/cubecubed/blob/1d9e38f/src/canvas/animations/CanvasAnimation.ts#L5)

___

### duration

• **duration**: `number`

Time to play this animation (in milliseconds).

#### Inherited from

CanvasAnimation.duration

#### Defined in

[src/canvas/animations/CanvasAnimation.ts:10](https://github.com/imaphatduc/cubecubed/blob/1d9e38f/src/canvas/animations/CanvasAnimation.ts#L10)

## Methods

### play

▸ **play**(): `void`

**`internal`**

#### Returns

`void`

#### Defined in

[src/canvas/animations/SimulateStream.ts:29](https://github.com/imaphatduc/cubecubed/blob/1d9e38f/src/canvas/animations/SimulateStream.ts#L29)
