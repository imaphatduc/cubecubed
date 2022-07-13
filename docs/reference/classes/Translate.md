[cubecubed](/reference/README.md) / [Exports](/reference/modules.md) / Translate

# Class: Translate

Translate a geometric cubicon by a specified vector.

## Hierarchy

- [`Animation`](/reference/classes/Animation.md)

  ↳ **`Translate`**

## Constructors

### constructor

• **new Translate**(`params`)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | `Object` | - |
| `params.cubicon` | [`Geometry`](/reference/classes/Geometry.md) | The target cubicon to play this animation. |
| `params.duration?` | `number` | Time to play this animation. (in milliseconds) |
| `params.ease?` | [`EASE_TYPE`](/reference/types/EASE_TYPE.md) | Custom easing function for smooth animation. |
| `params.vector` | [`Vector2`](/reference/classes/Vector2.md) | Translation vector. |

#### Overrides

[Animation](/reference/classes/Animation.md).[constructor](/reference/classes/Animation.md#constructor)

#### Defined in

[src/svg/animations/Translate.ts:15](https://github.com/imaphatduc/cubecubed/blob/e48fd86/src/svg/animations/Translate.ts#L15)

## Properties

### cubicon

• **cubicon**: `any`

The target cubicon of this animation.

#### Inherited from

[Animation](/reference/classes/Animation.md).[cubicon](/reference/classes/Animation.md#cubicon)

#### Defined in

[src/svg/animations/Animation.ts:48](https://github.com/imaphatduc/cubecubed/blob/e48fd86/src/svg/animations/Animation.ts#L48)

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

___

### vector

• **vector**: [`Vector2`](/reference/classes/Vector2.md)

#### Defined in

[src/svg/animations/Translate.ts:13](https://github.com/imaphatduc/cubecubed/blob/e48fd86/src/svg/animations/Translate.ts#L13)

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

[src/svg/animations/Translate.ts:42](https://github.com/imaphatduc/cubecubed/blob/e48fd86/src/svg/animations/Translate.ts#L42)
