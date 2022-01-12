[cubecubed](/reference/README.md) / [Exports](/reference/modules.md) / Translate

# Class: Translate

Translate a geometric cubicon by a specified vector.

## Hierarchy

- `Animation`

  ↳ **`Translate`**

## Constructors

### constructor

• **new Translate**(`params`)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | `Object` | - |
| `params.cubicon` | `Geometry` | The target cubicon to play this animation. |
| `params.duration?` | `number` | Time to play this animation. (in milliseconds) |
| `params.ease?` | `EASE_TYPE` | Custom easing function for smooth animation. |
| `params.vector` | [`Vector2`](/reference/classes/Vector2.md) | Translation vector. |

#### Overrides

Animation.constructor

#### Defined in

[src/animations/translate.ts:13](https://github.com/imaphatduc/cubecubed/blob/dfe7a5d/src/animations/translate.ts#L13)

## Properties

### cubicon

• **cubicon**: `any`

#### Inherited from

Animation.cubicon

#### Defined in

[src/animations/animation.ts:4](https://github.com/imaphatduc/cubecubed/blob/dfe7a5d/src/animations/animation.ts#L4)

___

### duration

• **duration**: `number`

#### Inherited from

Animation.duration

#### Defined in

[src/animations/animation.ts:5](https://github.com/imaphatduc/cubecubed/blob/dfe7a5d/src/animations/animation.ts#L5)

___

### ease

• **ease**: `EASE_TYPE`

#### Inherited from

Animation.ease

#### Defined in

[src/animations/animation.ts:6](https://github.com/imaphatduc/cubecubed/blob/dfe7a5d/src/animations/animation.ts#L6)

___

### vector

• **vector**: [`Vector2`](/reference/classes/Vector2.md)

#### Defined in

[src/animations/translate.ts:11](https://github.com/imaphatduc/cubecubed/blob/dfe7a5d/src/animations/translate.ts#L11)

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

[src/animations/translate.ts:40](https://github.com/imaphatduc/cubecubed/blob/dfe7a5d/src/animations/translate.ts#L40)
