[cubecubed](/reference/README.md) / [Exports](/reference/modules.md) / DrawAxes

# Class: DrawAxes

Animated drawing process of x and y axes on the screen.

## Hierarchy

- `Animation`

  ↳ **`DrawAxes`**

## Constructors

### constructor

• **new DrawAxes**(`axes`)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `axes` | [`Axes`](/reference/classes/Axes.md) | The target axes object to play this animation. |

#### Overrides

Animation.constructor

#### Defined in

[src/svg/animations/DrawAxes.ts:21](https://github.com/imaphatduc/cubecubed/blob/1d9e38f/src/svg/animations/DrawAxes.ts#L21)

## Properties

### cubicon

• **cubicon**: `any`

The target cubicon of this animation.

#### Inherited from

Animation.cubicon

#### Defined in

[src/svg/animations/Animation.ts:48](https://github.com/imaphatduc/cubecubed/blob/1d9e38f/src/svg/animations/Animation.ts#L48)

___

### duration

• **duration**: `number`

Time to play this animation (in milliseconds).

#### Inherited from

Animation.duration

#### Defined in

[src/svg/animations/Animation.ts:53](https://github.com/imaphatduc/cubecubed/blob/1d9e38f/src/svg/animations/Animation.ts#L53)

___

### ease

• **ease**: [`EASE_TYPE`](/reference/types/EASE_TYPE.md)

The easing function to use.

#### Inherited from

Animation.ease

#### Defined in

[src/svg/animations/Animation.ts:58](https://github.com/imaphatduc/cubecubed/blob/1d9e38f/src/svg/animations/Animation.ts#L58)

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

[src/svg/animations/DrawAxes.ts:36](https://github.com/imaphatduc/cubecubed/blob/1d9e38f/src/svg/animations/DrawAxes.ts#L36)
