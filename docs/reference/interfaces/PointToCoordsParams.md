[cubecubed](/reference/README.md) / [Exports](/reference/modules.md) / PointToCoordsParams

# Interface: PointToCoordsParams

## Hierarchy

- [`AnimationParams`](/reference/interfaces/AnimationParams.md)<`Point`\>

  ↳ **`PointToCoordsParams`**

## Properties

### cubicon

• **cubicon**: `Point`

The target cubicon to play this animation.

#### Inherited from

[AnimationParams](/reference/interfaces/AnimationParams.md).[cubicon](/reference/interfaces/AnimationParams.md#cubicon)

#### Defined in

[src/svg/animations/Animation.ts:9](https://github.com/imaphatduc/cubecubed/blob/ec15a85/src/svg/animations/Animation.ts#L9)

___

### duration

• `Optional` **duration**: `number`

The duration of this animation (in milliseconds).

#### Inherited from

[AnimationParams](/reference/interfaces/AnimationParams.md).[duration](/reference/interfaces/AnimationParams.md#duration)

#### Defined in

[src/svg/animations/Animation.ts:14](https://github.com/imaphatduc/cubecubed/blob/ec15a85/src/svg/animations/Animation.ts#L14)

___

### ease

• `Optional` **ease**: [`EASE_TYPE`](/reference/types/EASE_TYPE.md)

Easing function for smooth animation.

#### Inherited from

[AnimationParams](/reference/interfaces/AnimationParams.md).[ease](/reference/interfaces/AnimationParams.md#ease)

#### Defined in

[src/svg/animations/Animation.ts:19](https://github.com/imaphatduc/cubecubed/blob/ec15a85/src/svg/animations/Animation.ts#L19)

___

### horizontalProjector

• `Optional` **horizontalProjector**: `AxisProjector`

#### Defined in

[src/svg/animations/PointToCoords.ts:10](https://github.com/imaphatduc/cubecubed/blob/ec15a85/src/svg/animations/PointToCoords.ts#L10)

___

### verticalProjector

• `Optional` **verticalProjector**: `AxisProjector`

#### Defined in

[src/svg/animations/PointToCoords.ts:12](https://github.com/imaphatduc/cubecubed/blob/ec15a85/src/svg/animations/PointToCoords.ts#L12)
