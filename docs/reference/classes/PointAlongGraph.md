[cubecubed](/reference/README.md) / [Exports](/reference/modules.md) / PointAlongGraph

# Class: PointAlongGraph

Animate the smooth motion of a point along a graph.

**Note** that you have to call either of Axes().pointOnGraph(args) or Axes().pointToCoords(args) to play this animation.

## Hierarchy

- `Animation`

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

Animation.constructor

#### Defined in

[src/svg/animations/PointAlongGraph.ts:32](https://github.com/imaphatduc/cubecubed/blob/1d9e38f/src/svg/animations/PointAlongGraph.ts#L32)

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

[src/svg/animations/PointAlongGraph.ts:67](https://github.com/imaphatduc/cubecubed/blob/1d9e38f/src/svg/animations/PointAlongGraph.ts#L67)
