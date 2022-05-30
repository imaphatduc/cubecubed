[cubecubed](/reference/README.md) / [Exports](/reference/modules.md) / MathText

# Class: MathText

## Hierarchy

- `Cubicon`

  ↳ **`MathText`**

## Constructors

### constructor

• **new MathText**(`params`)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | `Object` | - |
| `params.color?` | `string` | Color of the text. |
| `params.fontSize?` | `number` | Font size of the text. |
| `params.group` | [`Group`](/reference/classes/Group.md) | The group that the text belongs to. |
| `params.position?` | [`Vector2`](/reference/classes/Vector2.md) | Position of the text. |
| `params.text` | `string` | Content of the text. |

#### Overrides

Cubicon.constructor

#### Defined in

[src/svg/cubicons/MathText.ts:32](https://github.com/imaphatduc/cubecubed/blob/1d9e38f/src/svg/cubicons/MathText.ts#L32)

## Properties

### angle

• **angle**: `number` = `0`

The angle between this cubicon and the x axis.
This property changed after finishing animations (in real time).

#### Inherited from

Cubicon.angle

#### Defined in

[src/svg/cubicons/Cubicon.ts:26](https://github.com/imaphatduc/cubecubed/blob/1d9e38f/src/svg/cubicons/Cubicon.ts#L26)

___

### color

• **color**: `string`

Color of this text.

#### Defined in

[src/svg/cubicons/MathText.ts:20](https://github.com/imaphatduc/cubecubed/blob/1d9e38f/src/svg/cubicons/MathText.ts#L20)

___

### cubType

• `Readonly` **cubType**: ``"math-text"``

#### Overrides

Cubicon.cubType

#### Defined in

[src/svg/cubicons/MathText.ts:10](https://github.com/imaphatduc/cubecubed/blob/1d9e38f/src/svg/cubicons/MathText.ts#L10)

___

### def\_cubiconBase

• **def\_cubiconBase**: `any`

The HTML tag that represents this cubicon.

#### Inherited from

Cubicon.def\_cubiconBase

#### Defined in

[src/svg/cubicons/Cubicon.ts:51](https://github.com/imaphatduc/cubecubed/blob/1d9e38f/src/svg/cubicons/Cubicon.ts#L51)

___

### def\_text

• **def\_text**: `any`

The SVG element that represents this text.

#### Defined in

[src/svg/cubicons/MathText.ts:30](https://github.com/imaphatduc/cubecubed/blob/1d9e38f/src/svg/cubicons/MathText.ts#L30)

___

### fontSize

• **fontSize**: `number`

Font size of this text (in points).

#### Defined in

[src/svg/cubicons/MathText.ts:25](https://github.com/imaphatduc/cubecubed/blob/1d9e38f/src/svg/cubicons/MathText.ts#L25)

___

### g\_cubiconWrapper

• **g\_cubiconWrapper**: `any`

The `<g/>` tag that holds this cubicon.

#### Inherited from

Cubicon.g\_cubiconWrapper

#### Defined in

[src/svg/cubicons/Cubicon.ts:46](https://github.com/imaphatduc/cubecubed/blob/1d9e38f/src/svg/cubicons/Cubicon.ts#L46)

___

### group

• **group**: [`Group`](/reference/classes/Group.md)

The group that this cubicon belongs to.

#### Inherited from

Cubicon.group

#### Defined in

[src/svg/cubicons/Cubicon.ts:14](https://github.com/imaphatduc/cubecubed/blob/1d9e38f/src/svg/cubicons/Cubicon.ts#L14)

___

### moveAngle

• **moveAngle**: `number` = `0`

The sum of all rotate angles (if invoking rotate animation).

#### Inherited from

Cubicon.moveAngle

#### Defined in

[src/svg/cubicons/Cubicon.ts:36](https://github.com/imaphatduc/cubecubed/blob/1d9e38f/src/svg/cubicons/Cubicon.ts#L36)

___

### moveVector

• **moveVector**: [`Vector2`](/reference/classes/Vector2.md)

The sum vector of all translate vectors (if invoking translate animation).

#### Inherited from

Cubicon.moveVector

#### Defined in

[src/svg/cubicons/Cubicon.ts:31](https://github.com/imaphatduc/cubecubed/blob/1d9e38f/src/svg/cubicons/Cubicon.ts#L31)

___

### position

• **position**: [`Vector2`](/reference/classes/Vector2.md)

Position of this cubicon.
This property changed after finishing animations (in real time).

#### Inherited from

Cubicon.position

#### Defined in

[src/svg/cubicons/Cubicon.ts:20](https://github.com/imaphatduc/cubecubed/blob/1d9e38f/src/svg/cubicons/Cubicon.ts#L20)

___

### svg\_group

• **svg\_group**: `any`

The `<svg/>` tag of this cubicon's group.

#### Inherited from

Cubicon.svg\_group

#### Defined in

[src/svg/cubicons/Cubicon.ts:41](https://github.com/imaphatduc/cubecubed/blob/1d9e38f/src/svg/cubicons/Cubicon.ts#L41)

___

### text

• **text**: `string`

Content of this text.

#### Defined in

[src/svg/cubicons/MathText.ts:15](https://github.com/imaphatduc/cubecubed/blob/1d9e38f/src/svg/cubicons/MathText.ts#L15)

## Methods

### checkIfRendered

▸ **checkIfRendered**(): `void`

#### Returns

`void`

#### Inherited from

Cubicon.checkIfRendered

#### Defined in

[src/svg/cubicons/Cubicon.ts:65](https://github.com/imaphatduc/cubecubed/blob/1d9e38f/src/svg/cubicons/Cubicon.ts#L65)

___

### render

▸ **render**(): [`MathText`](/reference/classes/MathText.md)

#### Returns

[`MathText`](/reference/classes/MathText.md)

#### Defined in

[src/svg/cubicons/MathText.ts:69](https://github.com/imaphatduc/cubecubed/blob/1d9e38f/src/svg/cubicons/MathText.ts#L69)
