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
| `params.cubicon` | [`Geometry`](/reference/classes/Geometry.md) | The target cubicon to play this animation. |
| `params.degree` | `number` | Angle (in degrees) for rotating. |
| `params.duration` | `number` | Time to play this animation. (in milliseconds) |
| `params.ease?` | [`EASE_TYPE`](/reference/types/EASE_TYPE.md) | Custom easing function for smooth animation. |

#### Overrides

[Animation](/reference/classes/Animation.md).[constructor](/reference/classes/Animation.md#constructor)

#### Defined in

[src/svg/animations/Rotate.ts:16](https://github.com/imaphatduc/cubecubed/blob/e48fd86/src/svg/animations/Rotate.ts#L16)

## Properties

### cubicon

• **cubicon**: `any`

The target cubicon of this animation.

#### Inherited from

[Animation](/reference/classes/Animation.md).[cubicon](/reference/classes/Animation.md#cubicon)

#### Defined in

[src/svg/animations/Animation.ts:48](https://github.com/imaphatduc/cubecubed/blob/e48fd86/src/svg/animations/Animation.ts#L48)

___

### degree

• **degree**: `number`

#### Defined in

[src/svg/animations/Rotate.ts:14](https://github.com/imaphatduc/cubecubed/blob/e48fd86/src/svg/animations/Rotate.ts#L14)

___

### duration

• **duration**: `number`

Time to play this animation (in milliseconds).

#### Inherited from

[Animation](/reference/classes/Animation.md).[duration](/reference/classes/Animation.md#duration)

#### Defined in

[src/svg/animations/Animation.ts:53](https://github.com/imaphatduc/cubecubed/blob/e48fd86/src/svg/animations/Animation.ts#L53)

___

### ease

• **ease**: [`EASE_TYPE`](/reference/types/EASE_TYPE.md)

The easing function to use.

#### Inherited from

[Animation](/reference/classes/Animation.md).[ease](/reference/classes/Animation.md#ease)

#### Defined in

[src/svg/animations/Animation.ts:58](https://github.com/imaphatduc/cubecubed/blob/e48fd86/src/svg/animations/Animation.ts#L58)

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

[src/svg/animations/Rotate.ts:42](https://github.com/imaphatduc/cubecubed/blob/e48fd86/src/svg/animations/Rotate.ts#L42)
