[cubecubed](/reference/README.md) / [Exports](/reference/modules.md) / DrawGridFromScreenSides

# Class: DrawGridFromScreenSides

## Hierarchy

- [`Animation`](/reference/classes/Animation.md)

  ↳ **`DrawGridFromScreenSides`**

## Constructors

### constructor

• **new DrawGridFromScreenSides**(`grid`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `grid` | [`Grid`](/reference/classes/Grid.md) |

#### Overrides

[Animation](/reference/classes/Animation.md).[constructor](/reference/classes/Animation.md#constructor)

#### Defined in

[src/svg/animations/DrawGrid.ts:27](https://github.com/imaphatduc/cubecubed/blob/8295992/src/svg/animations/DrawGrid.ts#L27)

## Properties

### animationType

• `Readonly` **animationType**: ``"DrawGrid"``

#### Overrides

[Animation](/reference/classes/Animation.md).[animationType](/reference/classes/Animation.md#animationtype)

#### Defined in

[src/svg/animations/DrawGrid.ts:11](https://github.com/imaphatduc/cubecubed/blob/8295992/src/svg/animations/DrawGrid.ts#L11)

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

### drawOrigin

▸ **drawOrigin**(`grid`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `grid` | [`Grid`](/reference/classes/Grid.md) |

#### Returns

`void`

#### Defined in

[src/svg/animations/DrawGrid.ts:197](https://github.com/imaphatduc/cubecubed/blob/8295992/src/svg/animations/DrawGrid.ts#L197)

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

[src/svg/animations/DrawGrid.ts:46](https://github.com/imaphatduc/cubecubed/blob/8295992/src/svg/animations/DrawGrid.ts#L46)
