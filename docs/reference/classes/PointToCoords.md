[cubecubed](/reference/README.md) / [Exports](/reference/modules.md) / PointToCoords

# Class: PointToCoords

The creation of a point and its two axis projectors.

## Hierarchy

- `Animation`

  ↳ **`PointToCoords`**

## Constructors

### constructor

• **new PointToCoords**(`params`)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | `Object` | - |
| `params.duration?` | `number` | Time to play this animation. (in milliseconds) |
| `params.ease?` | [`EASE_TYPE`](/reference/types/EASE_TYPE.md) | Custom easing function for smooth animation. |
| `params.point` | [`PT_TO_COORDS_DATA`](/reference/types/PT_TO_COORDS_DATA.md) | The target point object for this animation.  This is the result point after calling Axes().pointToCoords(args). |

#### Overrides

Animation.constructor

#### Defined in

[src/svg/animations/PointToCoords.ts:17](https://github.com/imaphatduc/cubecubed/blob/db7d6e8/src/svg/animations/PointToCoords.ts#L17)

## Properties

### cubicon

• **cubicon**: `any`

The target cubicon of this animation.

#### Inherited from

Animation.cubicon

#### Defined in

[src/svg/animations/Animation.ts:48](https://github.com/imaphatduc/cubecubed/blob/db7d6e8/src/svg/animations/Animation.ts#L48)

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

▸ **play**(): `void`

#### Returns

`void`

#### Defined in

[src/svg/animations/PointToCoords.ts:42](https://github.com/imaphatduc/cubecubed/blob/db7d6e8/src/svg/animations/PointToCoords.ts#L42)
