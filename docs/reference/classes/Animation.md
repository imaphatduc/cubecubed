[cubecubed](/reference/README.md) / [Exports](/reference/modules.md) / Animation

# Class: Animation

## Hierarchy

- **`Animation`**

  ↳ [`CreatePlaneShape`](/reference/classes/CreatePlaneShape.md)

  ↳ [`CreateLineShape`](/reference/classes/CreateLineShape.md)

  ↳ [`CreateVectorShape`](/reference/classes/CreateVectorShape.md)

  ↳ [`Translate`](/reference/classes/Translate.md)

  ↳ [`Rotate`](/reference/classes/Rotate.md)

  ↳ [`FadeIn`](/reference/classes/FadeIn.md)

  ↳ [`FadeOut`](/reference/classes/FadeOut.md)

  ↳ [`DrawGrid`](/reference/classes/DrawGrid.md)

  ↳ [`DrawAxes`](/reference/classes/DrawAxes.md)

  ↳ [`DrawVectorField`](/reference/classes/DrawVectorField.md)

  ↳ [`PointToCoords`](/reference/classes/PointToCoords.md)

  ↳ [`PointAlongGraph`](/reference/classes/PointAlongGraph.md)

  ↳ [`Write`](/reference/classes/Write.md)

  ↳ [`Trace`](/reference/classes/Trace.md)

## Constructors

### constructor

• **new Animation**(`params`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`AnimationParams`](/reference/interfaces/AnimationParams.md)<[`Cubicon`](/reference/classes/Cubicon.md)\> |

#### Defined in

[src/svg/animations/Animation.ts:36](https://github.com/imaphatduc/cubecubed/blob/ffe94b1/src/svg/animations/Animation.ts#L36)

## Properties

### animationType

• `Readonly` `Abstract` **animationType**: `string`

#### Defined in

[src/svg/animations/Animation.ts:23](https://github.com/imaphatduc/cubecubed/blob/ffe94b1/src/svg/animations/Animation.ts#L23)

___

### cubicon

• **cubicon**: [`Cubicon`](/reference/classes/Cubicon.md)

#### Defined in

[src/svg/animations/Animation.ts:30](https://github.com/imaphatduc/cubecubed/blob/ffe94b1/src/svg/animations/Animation.ts#L30)

___

### duration

• **duration**: `number`

#### Defined in

[src/svg/animations/Animation.ts:32](https://github.com/imaphatduc/cubecubed/blob/ffe94b1/src/svg/animations/Animation.ts#L32)

___

### ease

• **ease**: [`EASE_TYPE`](/reference/types/EASE_TYPE.md)

#### Defined in

[src/svg/animations/Animation.ts:34](https://github.com/imaphatduc/cubecubed/blob/ffe94b1/src/svg/animations/Animation.ts#L34)

___

### sleepTime

• **sleepTime**: `number` = `0`

The time to wait before playing this animation.

#### Defined in

[src/svg/animations/Animation.ts:28](https://github.com/imaphatduc/cubecubed/blob/ffe94b1/src/svg/animations/Animation.ts#L28)

## Methods

### play

▸ **play**(): `void`

Play this animation.

#### Returns

`void`

#### Defined in

[src/svg/animations/Animation.ts:49](https://github.com/imaphatduc/cubecubed/blob/ffe94b1/src/svg/animations/Animation.ts#L49)

___

### setCubiconPosition

▸ **setCubiconPosition**(`x`, `y`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |

#### Returns

`void`

#### Defined in

[src/svg/animations/Animation.ts:53](https://github.com/imaphatduc/cubecubed/blob/ffe94b1/src/svg/animations/Animation.ts#L53)
