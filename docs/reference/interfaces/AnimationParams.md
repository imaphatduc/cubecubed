[cubecubed](/reference/README.md) / [Exports](/reference/modules.md) / AnimationParams

# Interface: AnimationParams<TCubicon\>

## Type parameters

| Name |
| :------ |
| `TCubicon` |

## Hierarchy

- **`AnimationParams`**

  ↳ [`TranslateParams`](/reference/interfaces/TranslateParams.md)

  ↳ [`RotateParams`](/reference/interfaces/RotateParams.md)

  ↳ [`PointToCoordsParams`](/reference/interfaces/PointToCoordsParams.md)

  ↳ [`PointAlongGraphParams`](/reference/interfaces/PointAlongGraphParams.md)

  ↳ [`TraceParams`](/reference/interfaces/TraceParams.md)

## Properties

### cubicon

• **cubicon**: `TCubicon`

The target cubicon to play this animation.

#### Defined in

[src/svg/animations/Animation.ts:9](https://github.com/imaphatduc/cubecubed/blob/cb0c39f/src/svg/animations/Animation.ts#L9)

___

### duration

• `Optional` **duration**: `number`

The duration of this animation (in milliseconds).

#### Defined in

[src/svg/animations/Animation.ts:14](https://github.com/imaphatduc/cubecubed/blob/cb0c39f/src/svg/animations/Animation.ts#L14)

___

### ease

• `Optional` **ease**: [`EASE_TYPE`](/reference/types/EASE_TYPE.md)

Easing function for smooth animation.

#### Defined in

[src/svg/animations/Animation.ts:19](https://github.com/imaphatduc/cubecubed/blob/cb0c39f/src/svg/animations/Animation.ts#L19)
