[cubecubed](/wiki/README.md) / [Exports](/wiki/modules.md) / PointToSides

# Class: PointToSides

Create horizontal and vertical line from a set of point to rectangle/square sides.

**Note** that you have to call either of Rectangle().pointToSides(args) or Square().pointToSides(args) to play this animation.

## Hierarchy

- `Animation`

  ↳ **`PointToSides`**

## Constructors

### constructor

• **new PointToSides**(`data`, `duration?`, `ease`)

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `data` | `PT_TO_SIDES_DATA` | `undefined` | The returned data after calling Rectangle().pointToSides(args) or Square().pointToSides(args). |
| `duration` | `number` | `1000` | Time to play this animation. (in milliseconds) |
| `ease` | `EASE_TYPE` | `undefined` | Custom easing function for smooth animation. |

#### Overrides

Animation.constructor

#### Defined in

[src/animations/pointToSides.ts:22](https://github.com/imaphatduc/cubecubed/blob/26131ac/src/animations/pointToSides.ts#L22)

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

[src/animations/pointToSides.ts:29](https://github.com/imaphatduc/cubecubed/blob/26131ac/src/animations/pointToSides.ts#L29)
