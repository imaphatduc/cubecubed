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
| `params.cubicon` | `CREATE_TYPES` | The target cubicon to play this animation. |
| `params.duration?` | `number` | Time to play this animation. (in milliseconds) |
| `params.ease?` | `EASE_TYPE` | Custom easing function for smooth animation. |

#### Overrides

Animation.constructor

#### Defined in

[src/animations/create.ts:13](https://github.com/imaphatduc/cubecubed/blob/dfe7a5d/src/animations/create.ts#L13)

## Properties

### cubicon

• **cubicon**: `any`

#### Inherited from

Animation.cubicon

#### Defined in

[src/animations/animation.ts:4](https://github.com/imaphatduc/cubecubed/blob/dfe7a5d/src/animations/animation.ts#L4)

___

### duration

• **duration**: `number`

#### Inherited from

Animation.duration

#### Defined in

[src/animations/animation.ts:5](https://github.com/imaphatduc/cubecubed/blob/dfe7a5d/src/animations/animation.ts#L5)

___

### ease

• **ease**: `EASE_TYPE`

#### Inherited from

Animation.ease

#### Defined in

[src/animations/animation.ts:6](https://github.com/imaphatduc/cubecubed/blob/dfe7a5d/src/animations/animation.ts#L6)

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

[src/animations/create.ts:34](https://github.com/imaphatduc/cubecubed/blob/dfe7a5d/src/animations/create.ts#L34)
