[cubecubed](/wiki/README.md) / [Exports](/wiki/modules.md) / PointAlongGraph

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
| `params.ease?` | `EASE_TYPE` | Custom easing function for smooth animation. |
| `params.graph` | `Graph` | Which graph should the point moving along? |
| `params.point` | `PT_TO_COORDS_DATA` | The target point object for this animation.  This is the result point after calling Axes().pointOnGraph(args) or Axes().pointToCoords(args). |
| `params.xPos` | `number` | x coordinate of the point's target position. |

#### Overrides

Animation.constructor

#### Defined in

[src/animations/pointAlongGraph.ts:17](https://github.com/imaphatduc/cubecubed/blob/26131ac/src/animations/pointAlongGraph.ts#L17)

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

### horLineAlongGraph

▸ **horLineAlongGraph**(`point`, `line`, `graph`, `xPos`, `sleepTime`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `point` | `Cubicon` |
| `line` | `AxisProjector` |
| `graph` | `Graph` |
| `xPos` | `number` |
| `sleepTime` | `number` |

#### Returns

`void`

#### Defined in

[src/animations/pointAlongGraph.ts:105](https://github.com/imaphatduc/cubecubed/blob/26131ac/src/animations/pointAlongGraph.ts#L105)

___

### play

▸ **play**(`sleepTime`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `sleepTime` | `number` |

#### Returns

`void`

#### Defined in

[src/animations/pointAlongGraph.ts:52](https://github.com/imaphatduc/cubecubed/blob/26131ac/src/animations/pointAlongGraph.ts#L52)
