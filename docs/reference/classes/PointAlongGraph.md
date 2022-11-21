[cubecubed](/reference/README.md) / [Exports](/reference/modules.md) / PointAlongGraph

# Class: PointAlongGraph

Animate the smooth motion of a point along a graph. **Note** that you have to
call either of `Axes().pointOnGraph(args)` or `Axes().pointToCoords(args)` to
play this animation.

## Hierarchy

- [`Animation`](/reference/classes/Animation.md)

  ↳ **`PointAlongGraph`**

## Constructors

### constructor

• **new PointAlongGraph**(`params`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`PointAlongGraphParams`](/reference/interfaces/PointAlongGraphParams.md) |

#### Overrides

[Animation](/reference/classes/Animation.md).[constructor](/reference/classes/Animation.md#constructor)

#### Defined in

[src/svg/animations/PointAlongGraph.ts:63](https://github.com/imaphatduc/cubecubed/blob/f8be6e1/src/svg/animations/PointAlongGraph.ts#L63)

## Properties

### animationType

• `Readonly` **animationType**: ``"PointAlongGraph"``

#### Overrides

[Animation](/reference/classes/Animation.md).[animationType](/reference/classes/Animation.md#animationtype)

#### Defined in

[src/svg/animations/PointAlongGraph.ts:31](https://github.com/imaphatduc/cubecubed/blob/f8be6e1/src/svg/animations/PointAlongGraph.ts#L31)

___

### cubicon

• **cubicon**: `Point`

#### Overrides

[Animation](/reference/classes/Animation.md).[cubicon](/reference/classes/Animation.md#cubicon)

#### Defined in

[src/svg/animations/PointAlongGraph.ts:33](https://github.com/imaphatduc/cubecubed/blob/f8be6e1/src/svg/animations/PointAlongGraph.ts#L33)

___

### duration

• **duration**: `number`

#### Inherited from

[Animation](/reference/classes/Animation.md).[duration](/reference/classes/Animation.md#duration)

#### Defined in

[src/svg/animations/Animation.ts:32](https://github.com/imaphatduc/cubecubed/blob/f8be6e1/src/svg/animations/Animation.ts#L32)

___

### ease

• **ease**: [`EASE_TYPE`](/reference/types/EASE_TYPE.md)

#### Inherited from

[Animation](/reference/classes/Animation.md).[ease](/reference/classes/Animation.md#ease)

#### Defined in

[src/svg/animations/Animation.ts:34](https://github.com/imaphatduc/cubecubed/blob/f8be6e1/src/svg/animations/Animation.ts#L34)

___

### sleepTime

• **sleepTime**: `number` = `0`

The time to wait before playing this animation.

#### Inherited from

[Animation](/reference/classes/Animation.md).[sleepTime](/reference/classes/Animation.md#sleeptime)

#### Defined in

[src/svg/animations/Animation.ts:28](https://github.com/imaphatduc/cubecubed/blob/f8be6e1/src/svg/animations/Animation.ts#L28)

## Methods

### play

▸ **play**(): `void`

Play this animation.

#### Returns

`void`

#### Overrides

[Animation](/reference/classes/Animation.md).[play](/reference/classes/Animation.md#play)

#### Defined in

[src/svg/animations/PointAlongGraph.ts:81](https://github.com/imaphatduc/cubecubed/blob/f8be6e1/src/svg/animations/PointAlongGraph.ts#L81)

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

#### Inherited from

[Animation](/reference/classes/Animation.md).[setCubiconPosition](/reference/classes/Animation.md#setcubiconposition)

#### Defined in

[src/svg/animations/Animation.ts:53](https://github.com/imaphatduc/cubecubed/blob/f8be6e1/src/svg/animations/Animation.ts#L53)
