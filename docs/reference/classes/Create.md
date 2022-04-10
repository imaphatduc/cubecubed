[cubecubed](/reference/README.md) / [Exports](/reference/modules.md) / Create

# Class: Create

Play animated creation on the screen.

## Hierarchy

- `Animation`

  ↳ **`Create`**

## Constructors

### constructor

• **new Create**(`params`)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | `Object` | - |
| `params.cubicon` | [`CREATE_TYPES`](/reference/types/CREATE_TYPES.md) | The target cubicon to play this animation. |
| `params.duration?` | `number` | Time to play this animation. (in milliseconds) |
| `params.ease?` | [`EASE_TYPE`](/reference/types/EASE_TYPE.md) | Custom easing function for smooth animation. |

#### Overrides

Animation.constructor

#### Defined in

[src/svg/animations/Create.ts:16](https://github.com/imaphatduc/cubecubed/blob/db7d6e8/src/svg/animations/Create.ts#L16)

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

▸ **play**(`sleepTime`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `sleepTime` | `number` |

#### Returns

`void`

#### Defined in

[src/svg/animations/Create.ts:37](https://github.com/imaphatduc/cubecubed/blob/db7d6e8/src/svg/animations/Create.ts#L37)
