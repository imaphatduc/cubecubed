[cubecubed](/reference/README.md) / [Exports](/reference/modules.md) / PointAlongGraph

# Class: PointAlongGraph

Animate the smooth motion of a point along a graph.

**Note** that you have to call either of Axes().pointOnGraph(args) or Axes().pointToCoords(args) to play this animation.

## Hierarchy

- [`Animation`](/reference/classes/Animation.md)

  ↳ **`PointAlongGraph`**

## Constructors

### constructor

• **new PointAlongGraph**(`params`)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | `Object` | - |
| `params.duration?` | `number` | Time to play this animation. (in milliseconds) |
| `params.ease?` | [`EASE_TYPE`](/reference/types/EASE_TYPE.md) | Custom easing function for smooth animation. |
| `params.graph` | `Graph` | Which graph should the point moving along? |
| `params.point` | [`PT_TO_COORDS_DATA`](/reference/types/PT_TO_COORDS_DATA.md) | The target point object for this animation.  This is the result point after calling Axes().pointOnGraph(args) or Axes().pointToCoords(args). |
| `params.xPos` | `number` | x coordinate of the point's target position. |

#### Overrides

[Animation](/reference/classes/Animation.md).[constructor](/reference/classes/Animation.md#constructor)

#### Defined in

[src/svg/animations/PointAlongGraph.ts:40](https://github.com/imaphatduc/cubecubed/blob/8295992/src/svg/animations/PointAlongGraph.ts#L40)

## Properties

### animationType

• `Readonly` **animationType**: ``"PointAlongGraph"``

#### Overrides

[Animation](/reference/classes/Animation.md).[animationType](/reference/classes/Animation.md#animationtype)

#### Defined in

[src/svg/animations/PointAlongGraph.ts:16](https://github.com/imaphatduc/cubecubed/blob/8295992/src/svg/animations/PointAlongGraph.ts#L16)

___

### cubicon

• **cubicon**: `any`

The target cubicon of this animation.

#### Inherited from

[Animation](/reference/classes/Animation.md).[cubicon](/reference/classes/Animation.md#cubicon)

#### Defined in

[src/svg/animations/Animation.ts:36](https://github.com/imaphatduc/cubecubed/blob/8295992/src/svg/animations/Animation.ts#L36)

___

### duration

• **duration**: `number`

Time to play this animation (in milliseconds).

#### Inherited from

[Animation](/reference/classes/Animation.md).[duration](/reference/classes/Animation.md#duration)

#### Defined in

[src/svg/animations/Animation.ts:41](https://github.com/imaphatduc/cubecubed/blob/8295992/src/svg/animations/Animation.ts#L41)

___

### ease

• **ease**: [`EASE_TYPE`](/reference/types/EASE_TYPE.md)

The easing function to use.

#### Inherited from

[Animation](/reference/classes/Animation.md).[ease](/reference/classes/Animation.md#ease)

#### Defined in

[src/svg/animations/Animation.ts:46](https://github.com/imaphatduc/cubecubed/blob/8295992/src/svg/animations/Animation.ts#L46)

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

[src/svg/animations/PointAlongGraph.ts:75](https://github.com/imaphatduc/cubecubed/blob/8295992/src/svg/animations/PointAlongGraph.ts#L75)
