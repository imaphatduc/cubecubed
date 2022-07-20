[cubecubed](/reference/README.md) / [Exports](/reference/modules.md) / Rotate

# Class: Rotate

Rotate a geometric cubicon by a specified angle.

## Hierarchy

- [`Animation`](/reference/classes/Animation.md)

  ↳ **`Rotate`**

## Constructors

### constructor

• **new Rotate**(`params`)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | `Object` | - |
| `params.cubicon` | [`Cubicon`](/reference/classes/Cubicon.md) | The target cubicon to play this animation. |
| `params.degree` | `number` | Angle (in degrees) for rotating. |
| `params.duration` | `number` | Time to play this animation. (in milliseconds) |
| `params.ease?` | [`EASE_TYPE`](/reference/types/EASE_TYPE.md) | Custom easing function for smooth animation. |

#### Overrides

[Animation](/reference/classes/Animation.md).[constructor](/reference/classes/Animation.md#constructor)

#### Defined in

[src/svg/animations/Rotate.ts:18](https://github.com/imaphatduc/cubecubed/blob/8295992/src/svg/animations/Rotate.ts#L18)

## Properties

### animationType

• `Readonly` **animationType**: ``"Rotate"``

#### Overrides

[Animation](/reference/classes/Animation.md).[animationType](/reference/classes/Animation.md#animationtype)

#### Defined in

[src/svg/animations/Rotate.ts:14](https://github.com/imaphatduc/cubecubed/blob/8295992/src/svg/animations/Rotate.ts#L14)

___

### cubicon

• **cubicon**: `any`

The target cubicon of this animation.

#### Inherited from

[Animation](/reference/classes/Animation.md).[cubicon](/reference/classes/Animation.md#cubicon)

#### Defined in

[src/svg/animations/Animation.ts:36](https://github.com/imaphatduc/cubecubed/blob/8295992/src/svg/animations/Animation.ts#L36)

___

### degree

• **degree**: `number`

#### Defined in

[src/svg/animations/Rotate.ts:16](https://github.com/imaphatduc/cubecubed/blob/8295992/src/svg/animations/Rotate.ts#L16)

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

[src/svg/animations/Rotate.ts:44](https://github.com/imaphatduc/cubecubed/blob/8295992/src/svg/animations/Rotate.ts#L44)
