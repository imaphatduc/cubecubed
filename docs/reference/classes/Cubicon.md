[cubecubed](/reference/README.md) / [Exports](/reference/modules.md) / Cubicon

# Class: Cubicon

## Hierarchy

- **`Cubicon`**

  ↳ [`VectorField`](/reference/classes/VectorField.md)

  ↳ [`MathText`](/reference/classes/MathText.md)

  ↳ [`Geometry`](/reference/classes/Geometry.md)

## Constructors

### constructor

• **new Cubicon**(`params`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | `Object` |
| `params.group` | [`Group`](/reference/classes/Group.md) |
| `params.position` | [`Vector2`](/reference/classes/Vector2.md) |

#### Defined in

[src/svg/cubicons/Cubicon.ts:55](https://github.com/imaphatduc/cubecubed/blob/0dc8d92/src/svg/cubicons/Cubicon.ts#L55)

## Properties

### angle

• **angle**: `number` = `0`

The angle between this cubicon and the x axis.
This property changed after finishing animations (in real time).

#### Defined in

[src/svg/cubicons/Cubicon.ts:26](https://github.com/imaphatduc/cubecubed/blob/0dc8d92/src/svg/cubicons/Cubicon.ts#L26)

___

### cubType

• `Readonly` `Abstract` **cubType**: `string`

#### Defined in

[src/svg/cubicons/Cubicon.ts:9](https://github.com/imaphatduc/cubecubed/blob/0dc8d92/src/svg/cubicons/Cubicon.ts#L9)

___

### def\_cubiconBase

• **def\_cubiconBase**: `any`

The HTML tag that represents this cubicon.

#### Defined in

[src/svg/cubicons/Cubicon.ts:51](https://github.com/imaphatduc/cubecubed/blob/0dc8d92/src/svg/cubicons/Cubicon.ts#L51)

___

### g\_cubiconWrapper

• **g\_cubiconWrapper**: `any`

The `<g/>` tag that holds this cubicon.

#### Defined in

[src/svg/cubicons/Cubicon.ts:46](https://github.com/imaphatduc/cubecubed/blob/0dc8d92/src/svg/cubicons/Cubicon.ts#L46)

___

### group

• **group**: [`Group`](/reference/classes/Group.md)

The group that this cubicon belongs to.

#### Defined in

[src/svg/cubicons/Cubicon.ts:14](https://github.com/imaphatduc/cubecubed/blob/0dc8d92/src/svg/cubicons/Cubicon.ts#L14)

___

### moveAngle

• **moveAngle**: `number` = `0`

The sum of all rotate angles (if invoking rotate animation).

#### Defined in

[src/svg/cubicons/Cubicon.ts:36](https://github.com/imaphatduc/cubecubed/blob/0dc8d92/src/svg/cubicons/Cubicon.ts#L36)

___

### moveVector

• **moveVector**: [`Vector2`](/reference/classes/Vector2.md)

The sum vector of all translate vectors (if invoking translate animation).

#### Defined in

[src/svg/cubicons/Cubicon.ts:31](https://github.com/imaphatduc/cubecubed/blob/0dc8d92/src/svg/cubicons/Cubicon.ts#L31)

___

### position

• **position**: [`Vector2`](/reference/classes/Vector2.md)

Position of this cubicon.
This property changed after finishing animations (in real time).

#### Defined in

[src/svg/cubicons/Cubicon.ts:20](https://github.com/imaphatduc/cubecubed/blob/0dc8d92/src/svg/cubicons/Cubicon.ts#L20)

___

### svg\_group

• **svg\_group**: `any`

The `<svg/>` tag of this cubicon's group.

#### Defined in

[src/svg/cubicons/Cubicon.ts:41](https://github.com/imaphatduc/cubecubed/blob/0dc8d92/src/svg/cubicons/Cubicon.ts#L41)

## Methods

### checkIfRendered

▸ **checkIfRendered**(): `void`

#### Returns

`void`

#### Defined in

[src/svg/cubicons/Cubicon.ts:65](https://github.com/imaphatduc/cubecubed/blob/0dc8d92/src/svg/cubicons/Cubicon.ts#L65)
