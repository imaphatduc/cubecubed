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

[src/svg/animations/DrawGrid.ts:25](https://github.com/imaphatduc/cubecubed/blob/e48fd86/src/svg/animations/DrawGrid.ts#L25)

## Properties

### cubicon

• **cubicon**: `any`

The target cubicon of this animation.

#### Inherited from

[Animation](/reference/classes/Animation.md).[cubicon](/reference/classes/Animation.md#cubicon)

#### Defined in

[src/svg/animations/Animation.ts:48](https://github.com/imaphatduc/cubecubed/blob/e48fd86/src/svg/animations/Animation.ts#L48)

___

### duration

• **duration**: `number`

Time to play this animation (in milliseconds).

#### Inherited from

[Animation](/reference/classes/Animation.md).[duration](/reference/classes/Animation.md#duration)

#### Defined in

[src/svg/animations/Animation.ts:53](https://github.com/imaphatduc/cubecubed/blob/e48fd86/src/svg/animations/Animation.ts#L53)

___

### ease

• **ease**: [`EASE_TYPE`](/reference/types/EASE_TYPE.md)

The easing function to use.

#### Inherited from

[Animation](/reference/classes/Animation.md).[ease](/reference/classes/Animation.md#ease)

#### Defined in

[src/svg/animations/Animation.ts:58](https://github.com/imaphatduc/cubecubed/blob/e48fd86/src/svg/animations/Animation.ts#L58)

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

[src/svg/animations/DrawGrid.ts:195](https://github.com/imaphatduc/cubecubed/blob/e48fd86/src/svg/animations/DrawGrid.ts#L195)

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

[src/svg/animations/DrawGrid.ts:44](https://github.com/imaphatduc/cubecubed/blob/e48fd86/src/svg/animations/DrawGrid.ts#L44)
