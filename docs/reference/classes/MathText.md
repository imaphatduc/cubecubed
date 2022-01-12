[cubecubed](/wiki/README.md) / [Exports](/wiki/modules.md) / MathText

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
| `params.group` | [`Group`](/wiki/classes/Group.md) | The group that the text belongs to. |
| `params.position?` | [`Vector2`](/wiki/classes/Vector2.md) | Position of the text. |
| `params.text` | `string` | Content of the text. |

#### Overrides

Cubicon.constructor

#### Defined in

[src/cubicons/text.ts:32](https://github.com/imaphatduc/cubecubed/blob/26131ac/src/cubicons/text.ts#L32)

## Properties

### angle

• **angle**: `any`

The angle between this cubicon and the x axis.
This property changed after finishing animations (in real time).

#### Inherited from

Cubicon.angle

#### Defined in

[src/cubicons/cubicon.ts:22](https://github.com/imaphatduc/cubecubed/blob/26131ac/src/cubicons/cubicon.ts#L22)

___

### color

• **color**: `string`

Color of this text.

#### Defined in

[src/cubicons/text.ts:20](https://github.com/imaphatduc/cubecubed/blob/26131ac/src/cubicons/text.ts#L20)

___

### cubType

• `Readonly` **cubType**: ``"math-text"``

#### Overrides

Cubicon.cubType

#### Defined in

[src/cubicons/text.ts:10](https://github.com/imaphatduc/cubecubed/blob/26131ac/src/cubicons/text.ts#L10)

___

### def\_cubiconBase

• **def\_cubiconBase**: `any`

The HTML tag that represents this cubicon.

#### Inherited from

Cubicon.def\_cubiconBase

#### Defined in

[src/cubicons/cubicon.ts:44](https://github.com/imaphatduc/cubecubed/blob/26131ac/src/cubicons/cubicon.ts#L44)

___

### def\_text

• **def\_text**: `any`

The SVG element that represents this text.

#### Defined in

[src/cubicons/text.ts:30](https://github.com/imaphatduc/cubecubed/blob/26131ac/src/cubicons/text.ts#L30)

___

### elapsedTime

• **elapsedTime**: `any`

Total time of all called animations (in milliseconds).

#### Inherited from

Cubicon.elapsedTime

#### Defined in

[src/cubicons/cubicon.ts:49](https://github.com/imaphatduc/cubecubed/blob/26131ac/src/cubicons/cubicon.ts#L49)

___

### fontSize

• **fontSize**: `number`

Font size of this text (in points).

#### Defined in

[src/cubicons/text.ts:25](https://github.com/imaphatduc/cubecubed/blob/26131ac/src/cubicons/text.ts#L25)

___

### g\_cubiconWrapper

• **g\_cubiconWrapper**: `any`

The `<g/>` tag that holds this cubicon.

#### Inherited from

Cubicon.g\_cubiconWrapper

#### Defined in

[src/cubicons/cubicon.ts:40](https://github.com/imaphatduc/cubecubed/blob/26131ac/src/cubicons/cubicon.ts#L40)

___

### group

• **group**: [`Group`](/wiki/classes/Group.md)

The group that this cubicon belongs to.

#### Inherited from

Cubicon.group

#### Defined in

[src/cubicons/cubicon.ts:12](https://github.com/imaphatduc/cubecubed/blob/26131ac/src/cubicons/cubicon.ts#L12)

___

### isRendered

• **isRendered**: `boolean` = `false`

#### Inherited from

Cubicon.isRendered

#### Defined in

[src/cubicons/cubicon.ts:51](https://github.com/imaphatduc/cubecubed/blob/26131ac/src/cubicons/cubicon.ts#L51)

___

### moveAngle

• **moveAngle**: `any`

The sum of all rotate angles (if invoking rotate animation).

#### Inherited from

Cubicon.moveAngle

#### Defined in

[src/cubicons/cubicon.ts:31](https://github.com/imaphatduc/cubecubed/blob/26131ac/src/cubicons/cubicon.ts#L31)

___

### moveVector

• **moveVector**: `any`

The sum vector of all translate vectors (if invoking translate animation).

#### Inherited from

Cubicon.moveVector

#### Defined in

[src/cubicons/cubicon.ts:27](https://github.com/imaphatduc/cubecubed/blob/26131ac/src/cubicons/cubicon.ts#L27)

___

### position

• **position**: [`Vector2`](/wiki/classes/Vector2.md)

Position of this cubicon.
This property changed after finishing animations (in real time).

#### Inherited from

Cubicon.position

#### Defined in

[src/cubicons/cubicon.ts:17](https://github.com/imaphatduc/cubecubed/blob/26131ac/src/cubicons/cubicon.ts#L17)

___

### svg\_group

• **svg\_group**: `any`

The `<svg/>` tag of this cubicon's group.

#### Inherited from

Cubicon.svg\_group

#### Defined in

[src/cubicons/cubicon.ts:36](https://github.com/imaphatduc/cubecubed/blob/26131ac/src/cubicons/cubicon.ts#L36)

___

### text

• **text**: `string`

Content of this text.

#### Defined in

[src/cubicons/text.ts:15](https://github.com/imaphatduc/cubecubed/blob/26131ac/src/cubicons/text.ts#L15)

## Methods

### checkIfRendered

▸ **checkIfRendered**(): `void`

#### Returns

`void`

#### Inherited from

Cubicon.checkIfRendered

#### Defined in

[src/cubicons/cubicon.ts:84](https://github.com/imaphatduc/cubecubed/blob/26131ac/src/cubicons/cubicon.ts#L84)

___

### render

▸ **render**(): `void`

#### Returns

`void`

#### Defined in

[src/cubicons/text.ts:64](https://github.com/imaphatduc/cubecubed/blob/26131ac/src/cubicons/text.ts#L64)
