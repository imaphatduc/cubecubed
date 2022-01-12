[cubecubed](/wiki/README.md) / [Exports](/wiki/modules.md) / FadeOut

# Class: FadeOut

Fade out a cubicon on the screen.

## Hierarchy

- `Animation`

  ↳ **`FadeOut`**

## Constructors

### constructor

• **new FadeOut**(`params`)

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

[src/animations/fadeOut.ts:9](https://github.com/imaphatduc/cubecubed/blob/26131ac/src/animations/fadeOut.ts#L9)

## Properties

### cubicon

• **cubicon**: `any`

#### Inherited from

Animation.cubicon

#### Defined in

[src/animations/animation.ts:4](https://github.com/imaphatduc/cubecubed/blob/26131ac/src/animations/animation.ts#L4)

___

### duration

• **duration**: `number`

#### Inherited from

Animation.duration

#### Defined in

[src/animations/animation.ts:5](https://github.com/imaphatduc/cubecubed/blob/26131ac/src/animations/animation.ts#L5)

___

### ease

• **ease**: `EASE_TYPE`

#### Inherited from

Animation.ease

#### Defined in

[src/animations/animation.ts:6](https://github.com/imaphatduc/cubecubed/blob/26131ac/src/animations/animation.ts#L6)

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

[src/animations/fadeOut.ts:30](https://github.com/imaphatduc/cubecubed/blob/26131ac/src/animations/fadeOut.ts#L30)
