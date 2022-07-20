[cubecubed](/reference/README.md) / [Exports](/reference/modules.md) / PointToCoords

# Class: PointToCoords

The creation of a point and its two axis projectors.

## Hierarchy

- [`Animation`](/reference/classes/Animation.md)

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

[Animation](/reference/classes/Animation.md).[constructor](/reference/classes/Animation.md#constructor)

#### Defined in

[src/svg/animations/PointToCoords.ts:19](https://github.com/imaphatduc/cubecubed/blob/8295992/src/svg/animations/PointToCoords.ts#L19)

## Properties

### animationType

• `Readonly` **animationType**: ``"PointToCoords"``

#### Overrides

[Animation](/reference/classes/Animation.md).[animationType](/reference/classes/Animation.md#animationtype)

#### Defined in

[src/svg/animations/PointToCoords.ts:15](https://github.com/imaphatduc/cubecubed/blob/8295992/src/svg/animations/PointToCoords.ts#L15)

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

▸ **play**(): `void`

#### Returns

`void`

#### Defined in

[src/svg/animations/PointToCoords.ts:44](https://github.com/imaphatduc/cubecubed/blob/8295992/src/svg/animations/PointToCoords.ts#L44)
