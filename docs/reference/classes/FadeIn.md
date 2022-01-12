[cubecubed](/reference/README.md) / [Exports](/reference/modules.md) / FadeIn

# Class: FadeIn

Fade in a cubicon on the screen.

## Hierarchy

- `Animation`

  ↳ **`FadeIn`**

## Constructors

### constructor

• **new FadeIn**(`params`)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | `Object` | - |
| `params.cubicon` | `FADE_TYPES` | The target cubicon to play this animation. |
| `params.duration?` | `number` | Time to play this animation. (in milliseconds) |
| `params.ease?` | `EASE_TYPE` | Custom easing function for smooth animation. |

#### Overrides

Animation.constructor

#### Defined in

[src/animations/fadeIn.ts:9](https://github.com/imaphatduc/cubecubed/blob/dfe7a5d/src/animations/fadeIn.ts#L9)

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

[src/animations/fadeIn.ts:30](https://github.com/imaphatduc/cubecubed/blob/dfe7a5d/src/animations/fadeIn.ts#L30)
