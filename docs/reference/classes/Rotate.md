[cubecubed](/reference/README.md) / [Exports](/reference/modules.md) / Rotate

# Class: Rotate

Rotate a geometric cubicon by a specified angle.

## Hierarchy

- `Animation`

  ↳ **`Rotate`**

## Constructors

### constructor

• **new Rotate**(`params`)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | `Object` | - |
| `params.cubicon` | `Geometry` | The target cubicon to play this animation. |
| `params.degree` | `number` | Angle (in degrees) for rotating. |
| `params.duration` | `number` | Time to play this animation. (in milliseconds) |
| `params.ease?` | [`EASE_TYPE`](/reference/types/EASE_TYPE.md) | Custom easing function for smooth animation. |

#### Overrides

Animation.constructor

#### Defined in

[src/svg/animations/Rotate.ts:16](https://github.com/imaphatduc/cubecubed/blob/db7d6e8/src/svg/animations/Rotate.ts#L16)

## Properties

### cubicon

• **cubicon**: `any`

The target cubicon of this animation.

#### Inherited from

Animation.cubicon

#### Defined in

[src/svg/animations/Animation.ts:48](https://github.com/imaphatduc/cubecubed/blob/db7d6e8/src/svg/animations/Animation.ts#L48)

___

### degree

• **degree**: `number`

#### Defined in

[src/svg/animations/Rotate.ts:14](https://github.com/imaphatduc/cubecubed/blob/db7d6e8/src/svg/animations/Rotate.ts#L14)

___

### duration

• **duration**: `number`

Time to play this animation (in milliseconds).

#### Inherited from

Animation.duration

#### Defined in

[src/svg/animations/Animation.ts:53](https://github.com/imaphatduc/cubecubed/blob/db7d6e8/src/svg/animations/Animation.ts#L53)

___

### ease

• **ease**: [`EASE_TYPE`](/reference/types/EASE_TYPE.md)

The easing function to use.

#### Inherited from

Animation.ease

#### Defined in

[src/svg/animations/Animation.ts:58](https://github.com/imaphatduc/cubecubed/blob/db7d6e8/src/svg/animations/Animation.ts#L58)

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

[src/svg/animations/Rotate.ts:42](https://github.com/imaphatduc/cubecubed/blob/db7d6e8/src/svg/animations/Rotate.ts#L42)
