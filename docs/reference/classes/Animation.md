[cubecubed](/reference/README.md) / [Exports](/reference/modules.md) / Animation

# Class: Animation

## Hierarchy

- **`Animation`**

  ↳ [`Create`](/reference/classes/Create.md)

  ↳ [`Translate`](/reference/classes/Translate.md)

  ↳ [`Rotate`](/reference/classes/Rotate.md)

  ↳ [`FadeIn`](/reference/classes/FadeIn.md)

  ↳ [`FadeOut`](/reference/classes/FadeOut.md)

  ↳ [`DrawGridFromScreenSides`](/reference/classes/DrawGridFromScreenSides.md)

  ↳ [`DrawAxes`](/reference/classes/DrawAxes.md)

  ↳ [`DrawVectorField`](/reference/classes/DrawVectorField.md)

  ↳ [`PointToCoords`](/reference/classes/PointToCoords.md)

  ↳ [`PointAlongGraph`](/reference/classes/PointAlongGraph.md)

  ↳ [`Write`](/reference/classes/Write.md)

  ↳ [`Trace`](/reference/classes/Trace.md)

## Constructors

### constructor

• **new Animation**(`__namedParameters`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `Object` |
| `__namedParameters.cubicon` | [`Cubicon`](/reference/classes/Cubicon.md) |
| `__namedParameters.duration?` | `number` |
| `__namedParameters.ease?` | [`EASE_TYPE`](/reference/types/EASE_TYPE.md) |

#### Defined in

[src/svg/animations/Animation.ts:48](https://github.com/imaphatduc/cubecubed/blob/8295992/src/svg/animations/Animation.ts#L48)

## Properties

### animationType

• `Readonly` `Abstract` **animationType**: `string`

#### Defined in

[src/svg/animations/Animation.ts:31](https://github.com/imaphatduc/cubecubed/blob/8295992/src/svg/animations/Animation.ts#L31)

___

### cubicon

• **cubicon**: `any`

The target cubicon of this animation.

#### Defined in

[src/svg/animations/Animation.ts:36](https://github.com/imaphatduc/cubecubed/blob/8295992/src/svg/animations/Animation.ts#L36)

___

### duration

• **duration**: `number`

Time to play this animation (in milliseconds).

#### Defined in

[src/svg/animations/Animation.ts:41](https://github.com/imaphatduc/cubecubed/blob/8295992/src/svg/animations/Animation.ts#L41)

___

### ease

• **ease**: [`EASE_TYPE`](/reference/types/EASE_TYPE.md)

The easing function to use.

#### Defined in

[src/svg/animations/Animation.ts:46](https://github.com/imaphatduc/cubecubed/blob/8295992/src/svg/animations/Animation.ts#L46)
