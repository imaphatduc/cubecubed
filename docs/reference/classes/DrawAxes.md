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

[src/svg/animations/DrawAxes.ts:21](https://github.com/imaphatduc/cubecubed/blob/1251e31/src/svg/animations/DrawAxes.ts#L21)

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

[src/svg/animations/DrawAxes.ts:36](https://github.com/imaphatduc/cubecubed/blob/1251e31/src/svg/animations/DrawAxes.ts#L36)
