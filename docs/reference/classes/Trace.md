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

[src/svg/animations/Trace.ts:22](https://github.com/imaphatduc/cubecubed/blob/8295992/src/svg/animations/Trace.ts#L22)

## Properties

### animationType

• `Readonly` **animationType**: ``"Trace"``

#### Overrides

[Animation](/reference/classes/Animation.md).[animationType](/reference/classes/Animation.md#animationtype)

#### Defined in

[src/svg/animations/Trace.ts:15](https://github.com/imaphatduc/cubecubed/blob/8295992/src/svg/animations/Trace.ts#L15)

___

### cubicon

• **cubicon**: `any`

The target cubicon of this animation.

#### Inherited from

[Animation](/reference/classes/Animation.md).[cubicon](/reference/classes/Animation.md#cubicon)

#### Defined in

[src/svg/animations/Animation.ts:36](https://github.com/imaphatduc/cubecubed/blob/8295992/src/svg/animations/Animation.ts#L36)

___

### duration

• **duration**: `number`

Time to play this animation (in milliseconds).

#### Inherited from

[Animation](/reference/classes/Animation.md).[duration](/reference/classes/Animation.md#duration)

#### Defined in

[src/svg/animations/Animation.ts:41](https://github.com/imaphatduc/cubecubed/blob/8295992/src/svg/animations/Animation.ts#L41)

___

### ease

• **ease**: [`EASE_TYPE`](/reference/types/EASE_TYPE.md)

The easing function to use.

#### Inherited from

[Animation](/reference/classes/Animation.md).[ease](/reference/classes/Animation.md#ease)

#### Defined in

[src/svg/animations/Animation.ts:46](https://github.com/imaphatduc/cubecubed/blob/8295992/src/svg/animations/Animation.ts#L46)

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

[src/svg/animations/Trace.ts:49](https://github.com/imaphatduc/cubecubed/blob/8295992/src/svg/animations/Trace.ts#L49)
