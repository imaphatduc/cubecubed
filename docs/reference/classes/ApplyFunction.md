[cubecubed](/reference/README.md) / [Exports](/reference/modules.md) / ApplyFunction

# Class: ApplyFunction

## Hierarchy

- [`Animation`](/reference/classes/Animation.md)

  ↳ **`ApplyFunction`**

## Constructors

### constructor

• **new ApplyFunction**(`params`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`ApplyFunctionParams`](/reference/interfaces/ApplyFunctionParams.md) |

#### Overrides

[Animation](/reference/classes/Animation.md).[constructor](/reference/classes/Animation.md#constructor)

#### Defined in

[src/svg/animations/ApplyFunction.ts:23](https://github.com/imaphatduc/cubecubed/blob/ec15a85/src/svg/animations/ApplyFunction.ts#L23)

## Properties

### animationType

• `Readonly` **animationType**: ``"ApplyFunction"``

#### Overrides

[Animation](/reference/classes/Animation.md).[animationType](/reference/classes/Animation.md#animationtype)

#### Defined in

[src/svg/animations/ApplyFunction.ts:17](https://github.com/imaphatduc/cubecubed/blob/ec15a85/src/svg/animations/ApplyFunction.ts#L17)

___

### cubicon

• **cubicon**: [`APPLY_FUNCTION_TYPES`](/reference/types/APPLY_FUNCTION_TYPES.md)

#### Overrides

[Animation](/reference/classes/Animation.md).[cubicon](/reference/classes/Animation.md#cubicon)

#### Defined in

[src/svg/animations/ApplyFunction.ts:19](https://github.com/imaphatduc/cubecubed/blob/ec15a85/src/svg/animations/ApplyFunction.ts#L19)

___

### duration

• **duration**: `number`

#### Inherited from

[Animation](/reference/classes/Animation.md).[duration](/reference/classes/Animation.md#duration)

#### Defined in

[src/svg/animations/Animation.ts:32](https://github.com/imaphatduc/cubecubed/blob/ec15a85/src/svg/animations/Animation.ts#L32)

___

### ease

• **ease**: [`EASE_TYPE`](/reference/types/EASE_TYPE.md)

#### Inherited from

[Animation](/reference/classes/Animation.md).[ease](/reference/classes/Animation.md#ease)

#### Defined in

[src/svg/animations/Animation.ts:34](https://github.com/imaphatduc/cubecubed/blob/ec15a85/src/svg/animations/Animation.ts#L34)

___

### func

• **func**: [`VerticesMapFunction`](/reference/types/VerticesMapFunction.md)

#### Defined in

[src/svg/animations/ApplyFunction.ts:21](https://github.com/imaphatduc/cubecubed/blob/ec15a85/src/svg/animations/ApplyFunction.ts#L21)

___

### sleepTime

• **sleepTime**: `number` = `0`

The time to wait before playing this animation.

#### Inherited from

[Animation](/reference/classes/Animation.md).[sleepTime](/reference/classes/Animation.md#sleeptime)

#### Defined in

[src/svg/animations/Animation.ts:28](https://github.com/imaphatduc/cubecubed/blob/ec15a85/src/svg/animations/Animation.ts#L28)

## Methods

### play

▸ **play**(): `void`

Play this animation.

#### Returns

`void`

#### Overrides

[Animation](/reference/classes/Animation.md).[play](/reference/classes/Animation.md#play)

#### Defined in

[src/svg/animations/ApplyFunction.ts:35](https://github.com/imaphatduc/cubecubed/blob/ec15a85/src/svg/animations/ApplyFunction.ts#L35)

___

### setCubiconPosition

▸ **setCubiconPosition**(`x`, `y`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |

#### Returns

`void`

#### Inherited from

[Animation](/reference/classes/Animation.md).[setCubiconPosition](/reference/classes/Animation.md#setcubiconposition)

#### Defined in

[src/svg/animations/Animation.ts:53](https://github.com/imaphatduc/cubecubed/blob/ec15a85/src/svg/animations/Animation.ts#L53)
