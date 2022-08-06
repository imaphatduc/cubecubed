[cubecubed](/reference/README.md) / [Exports](/reference/modules.md) / MathTex

# Class: MathTex

## Hierarchy

- [`Cubicon`](/reference/classes/Cubicon.md)

  ↳ **`MathTex`**

## Constructors

### constructor

• **new MathTex**(`params`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`MathTexParams`](/reference/interfaces/MathTexParams.md) |

#### Overrides

[Cubicon](/reference/classes/Cubicon.md).[constructor](/reference/classes/Cubicon.md#constructor)

#### Defined in

[src/svg/cubicons/MathTex.ts:39](https://github.com/imaphatduc/cubecubed/blob/0bd348a/src/svg/cubicons/MathTex.ts#L39)

## Properties

### CONFIG

• **CONFIG**: [`MATH_TEX_CONFIG`](/reference/interfaces/MATH_TEX_CONFIG.md)

#### Overrides

[Cubicon](/reference/classes/Cubicon.md).[CONFIG](/reference/classes/Cubicon.md#config)

#### Defined in

[src/svg/cubicons/MathTex.ts:37](https://github.com/imaphatduc/cubecubed/blob/0bd348a/src/svg/cubicons/MathTex.ts#L37)

___

### angle

• **angle**: `number` = `0`

The angle between this cubicon and the x axis.
This property changed after finishing animations (in real time).

#### Inherited from

[Cubicon](/reference/classes/Cubicon.md).[angle](/reference/classes/Cubicon.md#angle)

#### Defined in

[src/svg/cubicons/Cubicon.ts:50](https://github.com/imaphatduc/cubecubed/blob/0bd348a/src/svg/cubicons/Cubicon.ts#L50)

___

### cubiconType

• `Readonly` **cubiconType**: ``"MathTex"``

#### Overrides

[Cubicon](/reference/classes/Cubicon.md).[cubiconType](/reference/classes/Cubicon.md#cubicontype)

#### Defined in

[src/svg/cubicons/MathTex.ts:33](https://github.com/imaphatduc/cubecubed/blob/0bd348a/src/svg/cubicons/MathTex.ts#L33)

___

### def\_cubiconBase

• **def\_cubiconBase**: `Selection`<`any`, `unknown`, `HTMLElement`, `any`\>

The SVG element that represents this cubicon.

#### Inherited from

[Cubicon](/reference/classes/Cubicon.md).[def_cubiconBase](/reference/classes/Cubicon.md#def_cubiconbase)

#### Defined in

[src/svg/cubicons/Cubicon.ts:75](https://github.com/imaphatduc/cubecubed/blob/0bd348a/src/svg/cubicons/Cubicon.ts#L75)

___

### g\_cubiconWrapper

• **g\_cubiconWrapper**: `Selection`<`SVGGElement`, `unknown`, `HTMLElement`, `any`\>

The `<g>` element that holds this cubicon.

#### Inherited from

[Cubicon](/reference/classes/Cubicon.md).[g_cubiconWrapper](/reference/classes/Cubicon.md#g_cubiconwrapper)

#### Defined in

[src/svg/cubicons/Cubicon.ts:70](https://github.com/imaphatduc/cubecubed/blob/0bd348a/src/svg/cubicons/Cubicon.ts#L70)

___

### group

• **group**: [`Group`](/reference/classes/Group.md)

#### Inherited from

[Cubicon](/reference/classes/Cubicon.md).[group](/reference/classes/Cubicon.md#group)

#### Defined in

[src/svg/cubicons/Cubicon.ts:40](https://github.com/imaphatduc/cubecubed/blob/0bd348a/src/svg/cubicons/Cubicon.ts#L40)

___

### moveAngle

• **moveAngle**: `number` = `0`

The sum of all rotate angles (if invoking rotate animation).

#### Inherited from

[Cubicon](/reference/classes/Cubicon.md).[moveAngle](/reference/classes/Cubicon.md#moveangle)

#### Defined in

[src/svg/cubicons/Cubicon.ts:60](https://github.com/imaphatduc/cubecubed/blob/0bd348a/src/svg/cubicons/Cubicon.ts#L60)

___

### moveVector

• **moveVector**: [`Vector2`](/reference/classes/Vector2.md)

The sum vector of all translate vectors (if invoking translate animation).

#### Inherited from

[Cubicon](/reference/classes/Cubicon.md).[moveVector](/reference/classes/Cubicon.md#movevector)

#### Defined in

[src/svg/cubicons/Cubicon.ts:55](https://github.com/imaphatduc/cubecubed/blob/0bd348a/src/svg/cubicons/Cubicon.ts#L55)

___

### position

• **position**: [`Vector2`](/reference/classes/Vector2.md)

#### Inherited from

[Cubicon](/reference/classes/Cubicon.md).[position](/reference/classes/Cubicon.md#position)

#### Defined in

[src/svg/cubicons/Cubicon.ts:42](https://github.com/imaphatduc/cubecubed/blob/0bd348a/src/svg/cubicons/Cubicon.ts#L42)

___

### svg\_group

• **svg\_group**: `Selection`<`SVGSVGElement`, `unknown`, `HTMLElement`, `any`\>

The `<svg>` element of this cubicon's group.

#### Inherited from

[Cubicon](/reference/classes/Cubicon.md).[svg_group](/reference/classes/Cubicon.md#svg_group)

#### Defined in

[src/svg/cubicons/Cubicon.ts:65](https://github.com/imaphatduc/cubecubed/blob/0bd348a/src/svg/cubicons/Cubicon.ts#L65)

___

### text

• **text**: `string`

#### Defined in

[src/svg/cubicons/MathTex.ts:35](https://github.com/imaphatduc/cubecubed/blob/0bd348a/src/svg/cubicons/MathTex.ts#L35)

## Methods

### coordsGtoW

▸ **coordsGtoW**(`point`): [`Vector2`](/reference/classes/Vector2.md)

Convert grid coordinates to pixels.

#### Parameters

| Name | Type |
| :------ | :------ |
| `point` | [`Vector2`](/reference/classes/Vector2.md) |

#### Returns

[`Vector2`](/reference/classes/Vector2.md)

#### Inherited from

[Cubicon](/reference/classes/Cubicon.md).[coordsGtoW](/reference/classes/Cubicon.md#coordsgtow)

#### Defined in

[src/svg/cubicons/Cubicon.ts:102](https://github.com/imaphatduc/cubecubed/blob/0bd348a/src/svg/cubicons/Cubicon.ts#L102)

___

### render

▸ **render**(): [`MathTex`](/reference/classes/MathTex.md)

Render this cubicon.

#### Returns

[`MathTex`](/reference/classes/MathTex.md)

#### Overrides

[Cubicon](/reference/classes/Cubicon.md).[render](/reference/classes/Cubicon.md#render)

#### Defined in

[src/svg/cubicons/MathTex.ts:63](https://github.com/imaphatduc/cubecubed/blob/0bd348a/src/svg/cubicons/MathTex.ts#L63)
