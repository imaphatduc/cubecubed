[cubecubed](/reference/README.md) / [Exports](/reference/modules.md) / PointAlongGraphParams

# Interface: PointAlongGraphParams

## Hierarchy

- [`AnimationParams`](/reference/interfaces/AnimationParams.md)<`Point`\>

  ↳ **`PointAlongGraphParams`**

## Properties

### cubicon

• **cubicon**: `Point`

The target cubicon to play this animation.

#### Inherited from

[AnimationParams](/reference/interfaces/AnimationParams.md).[cubicon](/reference/interfaces/AnimationParams.md#cubicon)

#### Defined in

[src/svg/animations/Animation.ts:9](https://github.com/imaphatduc/cubecubed/blob/0bd348a/src/svg/animations/Animation.ts#L9)

___

### duration

• `Optional` **duration**: `number`

The duration of this animation (in milliseconds).

#### Inherited from

[AnimationParams](/reference/interfaces/AnimationParams.md).[duration](/reference/interfaces/AnimationParams.md#duration)

#### Defined in

[src/svg/animations/Animation.ts:14](https://github.com/imaphatduc/cubecubed/blob/0bd348a/src/svg/animations/Animation.ts#L14)

___

### ease

• `Optional` **ease**: [`EASE_TYPE`](/reference/types/EASE_TYPE.md)

Easing function for smooth animation.

#### Inherited from

[AnimationParams](/reference/interfaces/AnimationParams.md).[ease](/reference/interfaces/AnimationParams.md#ease)

#### Defined in

[src/svg/animations/Animation.ts:19](https://github.com/imaphatduc/cubecubed/blob/0bd348a/src/svg/animations/Animation.ts#L19)

___

### graph

• **graph**: `Graph`

Which graph should the point moving along?

#### Defined in

[src/svg/animations/PointAlongGraph.ts:17](https://github.com/imaphatduc/cubecubed/blob/0bd348a/src/svg/animations/PointAlongGraph.ts#L17)

___

### horizontalProjector

• `Optional` **horizontalProjector**: `AxisProjector`

#### Defined in

[src/svg/animations/PointAlongGraph.ts:10](https://github.com/imaphatduc/cubecubed/blob/0bd348a/src/svg/animations/PointAlongGraph.ts#L10)

___

### verticalProjector

• `Optional` **verticalProjector**: `AxisProjector`

#### Defined in

[src/svg/animations/PointAlongGraph.ts:12](https://github.com/imaphatduc/cubecubed/blob/0bd348a/src/svg/animations/PointAlongGraph.ts#L12)

___

### xPos

• **xPos**: `number`

x coordinate of the point's target position.

#### Defined in

[src/svg/animations/PointAlongGraph.ts:22](https://github.com/imaphatduc/cubecubed/blob/0bd348a/src/svg/animations/PointAlongGraph.ts#L22)
