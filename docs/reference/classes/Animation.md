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
| `__namedParameters.cubicon` | [`TYPES`](/reference/types/TYPES.md) |
| `__namedParameters.duration?` | `number` |
| `__namedParameters.ease?` | [`EASE_TYPE`](/reference/types/EASE_TYPE.md) |

#### Defined in

[src/svg/animations/Animation.ts:60](https://github.com/imaphatduc/cubecubed/blob/e48fd86/src/svg/animations/Animation.ts#L60)

## Properties

### cubicon

• **cubicon**: `any`

The target cubicon of this animation.

#### Defined in

[src/svg/animations/Animation.ts:48](https://github.com/imaphatduc/cubecubed/blob/e48fd86/src/svg/animations/Animation.ts#L48)

___

### duration

• **duration**: `number`

Time to play this animation (in milliseconds).

#### Defined in

[src/svg/animations/Animation.ts:53](https://github.com/imaphatduc/cubecubed/blob/e48fd86/src/svg/animations/Animation.ts#L53)

___

### ease

• **ease**: [`EASE_TYPE`](/reference/types/EASE_TYPE.md)

The easing function to use.

#### Defined in

[src/svg/animations/Animation.ts:58](https://github.com/imaphatduc/cubecubed/blob/e48fd86/src/svg/animations/Animation.ts#L58)
