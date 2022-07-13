[cubecubed](/reference/README.md) / [Exports](/reference/modules.md) / Trace

# Class: Trace

Let a line trace a curve.

## Hierarchy

- [`Animation`](/reference/classes/Animation.md)

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
| `params.ease` | [`EASE_TYPE`](/reference/types/EASE_TYPE.md) | Custom easing function for smooth animation. |

#### Overrides

[Animation](/reference/classes/Animation.md).[constructor](/reference/classes/Animation.md#constructor)

#### Defined in

[src/svg/animations/Trace.ts:20](https://github.com/imaphatduc/cubecubed/blob/4495c75/src/svg/animations/Trace.ts#L20)

## Properties

### cubicon

• **cubicon**: `any`

The target cubicon of this animation.

#### Inherited from

[Animation](/reference/classes/Animation.md).[cubicon](/reference/classes/Animation.md#cubicon)

#### Defined in

[src/svg/animations/Animation.ts:48](https://github.com/imaphatduc/cubecubed/blob/4495c75/src/svg/animations/Animation.ts#L48)

___

### duration

• **duration**: `number`

Time to play this animation (in milliseconds).

#### Inherited from

[Animation](/reference/classes/Animation.md).[duration](/reference/classes/Animation.md#duration)

#### Defined in

[src/svg/animations/Animation.ts:53](https://github.com/imaphatduc/cubecubed/blob/4495c75/src/svg/animations/Animation.ts#L53)

___

### ease

• **ease**: [`EASE_TYPE`](/reference/types/EASE_TYPE.md)

The easing function to use.

#### Inherited from

[Animation](/reference/classes/Animation.md).[ease](/reference/classes/Animation.md#ease)

#### Defined in

[src/svg/animations/Animation.ts:58](https://github.com/imaphatduc/cubecubed/blob/4495c75/src/svg/animations/Animation.ts#L58)

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

[src/svg/animations/Trace.ts:47](https://github.com/imaphatduc/cubecubed/blob/4495c75/src/svg/animations/Trace.ts#L47)
