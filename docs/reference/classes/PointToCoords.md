[cubecubed](/wiki/README.md) / [Exports](/wiki/modules.md) / PointToCoords

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
| `params.ease?` | `EASE_TYPE` | Custom easing function for smooth animation. |
| `params.point` | `PT_TO_COORDS_DATA` | The target point object for this animation.  This is the result point after calling Axes().pointToCoords(args). |

#### Overrides

Animation.constructor

#### Defined in

[src/animations/pointToCoords.ts:13](https://github.com/imaphatduc/cubecubed/blob/26131ac/src/animations/pointToCoords.ts#L13)

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

### play

▸ **play**(): `void`

#### Returns

`void`

#### Defined in

[src/animations/pointToCoords.ts:38](https://github.com/imaphatduc/cubecubed/blob/26131ac/src/animations/pointToCoords.ts#L38)
