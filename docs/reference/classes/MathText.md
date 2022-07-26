[cubecubed](/reference/README.md) / [Exports](/reference/modules.md) / MathTex

# Class: MathTex

## Hierarchy

-   [`Cubicon`](/reference/classes/Cubicon.md)

    ↳ **`MathTex`**

## Constructors

### constructor

• **new MathTex**(`params`)

#### Parameters

| Name               | Type                                       | Description                         |
| :----------------- | :----------------------------------------- | :---------------------------------- |
| `params`           | `Object`                                   | -                                   |
| `params.color?`    | `string`                                   | Color of the text.                  |
| `params.fontSize?` | `number`                                   | Font size of the text.              |
| `params.group`     | [`Group`](/reference/classes/Group.md)     | The group that the text belongs to. |
| `params.position?` | [`Vector2`](/reference/classes/Vector2.md) | Position of the text.               |
| `params.text`      | `string`                                   | Content of the text.                |

#### Overrides

[Cubicon](/reference/classes/Cubicon.md).[constructor](/reference/classes/Cubicon.md#constructor)

#### Defined in

[src/svg/cubicons/MathTex.ts:27](https://github.com/imaphatduc/cubecubed/blob/8295992/src/svg/cubicons/MathTex.ts#L27)

## Properties

### angle

• **angle**: `number` = `0`

The angle between this cubicon and the x axis.
This property changed after finishing animations (in real time).

#### Inherited from

[Cubicon](/reference/classes/Cubicon.md).[angle](/reference/classes/Cubicon.md#angle)

#### Defined in

[src/svg/cubicons/Cubicon.ts:26](https://github.com/imaphatduc/cubecubed/blob/8295992/src/svg/cubicons/Cubicon.ts#L26)

---

### color

• **color**: `string`

Color of this text.

#### Defined in

[src/svg/cubicons/MathTex.ts:20](https://github.com/imaphatduc/cubecubed/blob/8295992/src/svg/cubicons/MathTex.ts#L20)

---

### cubiconType

• `Readonly` **cubiconType**: `"MathTex"`

#### Overrides

[Cubicon](/reference/classes/Cubicon.md).[cubiconType](/reference/classes/Cubicon.md#cubicontype)

#### Defined in

[src/svg/cubicons/MathTex.ts:10](https://github.com/imaphatduc/cubecubed/blob/8295992/src/svg/cubicons/MathTex.ts#L10)

---

### def_cubiconBase

• **def_cubiconBase**: `Selection`<`any`, `unknown`, `HTMLElement`, `any`\>

The HTML tag that represents this cubicon.

#### Inherited from

[Cubicon](/reference/classes/Cubicon.md).[def_cubiconBase](/reference/classes/Cubicon.md#def_cubiconbase)

#### Defined in

[src/svg/cubicons/Cubicon.ts:51](https://github.com/imaphatduc/cubecubed/blob/8295992/src/svg/cubicons/Cubicon.ts#L51)

---

### fontSize

• **fontSize**: `number`

Font size of this text (in points).

#### Defined in

[src/svg/cubicons/MathTex.ts:25](https://github.com/imaphatduc/cubecubed/blob/8295992/src/svg/cubicons/MathTex.ts#L25)

---

### g_cubiconWrapper

• **g_cubiconWrapper**: `Selection`<`SVGGElement`, `unknown`, `HTMLElement`, `any`\>

The `<g/>` tag that holds this cubicon.

#### Inherited from

[Cubicon](/reference/classes/Cubicon.md).[g_cubiconWrapper](/reference/classes/Cubicon.md#g_cubiconwrapper)

#### Defined in

[src/svg/cubicons/Cubicon.ts:46](https://github.com/imaphatduc/cubecubed/blob/8295992/src/svg/cubicons/Cubicon.ts#L46)

---

### group

• **group**: [`Group`](/reference/classes/Group.md)

The group that this cubicon belongs to.

#### Inherited from

[Cubicon](/reference/classes/Cubicon.md).[group](/reference/classes/Cubicon.md#group)

#### Defined in

[src/svg/cubicons/Cubicon.ts:14](https://github.com/imaphatduc/cubecubed/blob/8295992/src/svg/cubicons/Cubicon.ts#L14)

---

### moveAngle

• **moveAngle**: `number` = `0`

The sum of all rotate angles (if invoking rotate animation).

#### Inherited from

[Cubicon](/reference/classes/Cubicon.md).[moveAngle](/reference/classes/Cubicon.md#moveangle)

#### Defined in

[src/svg/cubicons/Cubicon.ts:36](https://github.com/imaphatduc/cubecubed/blob/8295992/src/svg/cubicons/Cubicon.ts#L36)

---

### moveVector

• **moveVector**: [`Vector2`](/reference/classes/Vector2.md)

The sum vector of all translate vectors (if invoking translate animation).

#### Inherited from

[Cubicon](/reference/classes/Cubicon.md).[moveVector](/reference/classes/Cubicon.md#movevector)

#### Defined in

[src/svg/cubicons/Cubicon.ts:31](https://github.com/imaphatduc/cubecubed/blob/8295992/src/svg/cubicons/Cubicon.ts#L31)

---

### position

• **position**: [`Vector2`](/reference/classes/Vector2.md)

Position of this cubicon.
This property changed after finishing animations (in real time).

#### Inherited from

[Cubicon](/reference/classes/Cubicon.md).[position](/reference/classes/Cubicon.md#position)

#### Defined in

[src/svg/cubicons/Cubicon.ts:20](https://github.com/imaphatduc/cubecubed/blob/8295992/src/svg/cubicons/Cubicon.ts#L20)

---

### svg_group

• **svg_group**: `Selection`<`SVGSVGElement`, `unknown`, `HTMLElement`, `any`\>

The `<svg/>` tag of this cubicon's group.

#### Inherited from

[Cubicon](/reference/classes/Cubicon.md).[svg_group](/reference/classes/Cubicon.md#svg_group)

#### Defined in

[src/svg/cubicons/Cubicon.ts:41](https://github.com/imaphatduc/cubecubed/blob/8295992/src/svg/cubicons/Cubicon.ts#L41)

---

### text

• **text**: `string`

Content of this text.

#### Defined in

[src/svg/cubicons/MathTex.ts:15](https://github.com/imaphatduc/cubecubed/blob/8295992/src/svg/cubicons/MathTex.ts#L15)

## Methods

### coordsGtoW

▸ **coordsGtoW**(`point`): [`Vector2`](/reference/classes/Vector2.md)

#### Parameters

| Name    | Type                                       |
| :------ | :----------------------------------------- |
| `point` | [`Vector2`](/reference/classes/Vector2.md) |

#### Returns

[`Vector2`](/reference/classes/Vector2.md)

#### Inherited from

[Cubicon](/reference/classes/Cubicon.md).[coordsGtoW](/reference/classes/Cubicon.md#coordsgtow)

#### Defined in

[src/svg/cubicons/Cubicon.ts:69](https://github.com/imaphatduc/cubecubed/blob/8295992/src/svg/cubicons/Cubicon.ts#L69)

---

### render

▸ **render**(): [`MathTex`](/reference/classes/MathTex.md)

#### Returns

[`MathTex`](/reference/classes/MathTex.md)

#### Defined in

[src/svg/cubicons/MathTex.ts:69](https://github.com/imaphatduc/cubecubed/blob/8295992/src/svg/cubicons/MathTex.ts#L69)

---

### setParentSelection

▸ **setParentSelection**(`parentSelection`): `void`

#### Parameters

| Name              | Type                                                         |
| :---------------- | :----------------------------------------------------------- |
| `parentSelection` | `Selection`<`SVGGElement`, `unknown`, `HTMLElement`, `any`\> |

#### Returns

`void`

#### Inherited from

[Cubicon](/reference/classes/Cubicon.md).[setParentSelection](/reference/classes/Cubicon.md#setparentselection)

#### Defined in

[src/svg/cubicons/Cubicon.ts:63](https://github.com/imaphatduc/cubecubed/blob/8295992/src/svg/cubicons/Cubicon.ts#L63)
