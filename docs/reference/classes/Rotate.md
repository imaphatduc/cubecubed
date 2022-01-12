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
| `params.ease?` | `EASE_TYPE` | Custom easing function for smooth animation. |

#### Overrides

Animation.constructor

#### Defined in

[src/animations/rotate.ts:14](https://github.com/imaphatduc/cubecubed/blob/dfe7a5d/src/animations/rotate.ts#L14)

## Properties

### cubicon

• **cubicon**: `any`

#### Inherited from

Animation.cubicon

#### Defined in

[src/animations/animation.ts:4](https://github.com/imaphatduc/cubecubed/blob/dfe7a5d/src/animations/animation.ts#L4)

___

### degree

• **degree**: `number`

#### Defined in

[src/animations/rotate.ts:12](https://github.com/imaphatduc/cubecubed/blob/dfe7a5d/src/animations/rotate.ts#L12)

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

[src/animations/rotate.ts:40](https://github.com/imaphatduc/cubecubed/blob/dfe7a5d/src/animations/rotate.ts#L40)
