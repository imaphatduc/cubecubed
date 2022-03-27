[cubecubed](/reference/README.md) / [Exports](/reference/modules.md) / Trace

# Class: Trace

Let a line trace a curve.

## Hierarchy

- `Animation`

  ↳ **`Trace`**

## Constructors

### constructor

• **new Trace**(`params`)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | `Object` | - |
| `params.cubicon` | [`Line`](/reference/classes/Line.md) | The target line for tracing. |
| `params.curve` | [`ParametricCurve`](/reference/classes/ParametricCurve.md) | The curve. |
| `params.duration` | `number` | Time to play this animation. (in milliseconds) |
| `params.ease` | `EASE_TYPE` | Custom easing function for smooth animation. |

#### Overrides

Animation.constructor

#### Defined in

[src/svg/animations/Trace.ts:20](https://github.com/imaphatduc/cubecubed/blob/1251e31/src/svg/animations/Trace.ts#L20)

## Properties

### cubicon

• **cubicon**: `any`

The target cubicon of this animation.

#### Inherited from

Animation.cubicon

#### Defined in

[src/svg/animations/Animation.ts:7](https://github.com/imaphatduc/cubecubed/blob/1251e31/src/svg/animations/Animation.ts#L7)

___

### duration

• **duration**: `number`

Time to play this animation (in milliseconds).

#### Inherited from

Animation.duration

#### Defined in

[src/svg/animations/Animation.ts:12](https://github.com/imaphatduc/cubecubed/blob/1251e31/src/svg/animations/Animation.ts#L12)

___

### ease

• **ease**: `EASE_TYPE`

The easing function to use.

#### Inherited from

Animation.ease

#### Defined in

[src/svg/animations/Animation.ts:17](https://github.com/imaphatduc/cubecubed/blob/1251e31/src/svg/animations/Animation.ts#L17)

## Methods

### play

▸ **play**(`sleepTime`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `sleepTime` | `number` |

#### Returns

`void`

#### Defined in

[src/svg/animations/Trace.ts:47](https://github.com/imaphatduc/cubecubed/blob/1251e31/src/svg/animations/Trace.ts#L47)
