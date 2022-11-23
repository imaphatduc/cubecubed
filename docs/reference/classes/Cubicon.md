[cubecubed](/reference/README.md) / [Exports](/reference/modules.md) / Cubicon

# Class: Cubicon

## Hierarchy

- **`Cubicon`**

  ↳ [`VectorField`](/reference/classes/VectorField.md)

  ↳ [`MathTex`](/reference/classes/MathTex.md)

  ↳ [`Grid`](/reference/classes/Grid.md)

  ↳ [`Rectangle`](/reference/classes/Rectangle.md)

  ↳ [`Circle`](/reference/classes/Circle.md)

  ↳ [`Line`](/reference/classes/Line.md)

  ↳ [`VectorShape`](/reference/classes/VectorShape.md)

  ↳ [`ParametricCurve`](/reference/classes/ParametricCurve.md)

  ↳ [`Axes`](/reference/classes/Axes.md)

## Constructors

### constructor

• **new Cubicon**(`params`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`CubiconParams`](/reference/interfaces/CubiconParams.md)<`object`\> |

#### Defined in

[src/svg/cubicons/Cubicon.ts:77](https://github.com/imaphatduc/cubecubed/blob/f64863c/src/svg/cubicons/Cubicon.ts#L77)

## Properties

### CONFIG

• **CONFIG**: `object`

#### Defined in

[src/svg/cubicons/Cubicon.ts:44](https://github.com/imaphatduc/cubecubed/blob/f64863c/src/svg/cubicons/Cubicon.ts#L44)

___

### angle

• **angle**: `number` = `0`

The angle between this cubicon and the x axis.
This property changed after finishing animations (in real time).

#### Defined in

[src/svg/cubicons/Cubicon.ts:50](https://github.com/imaphatduc/cubecubed/blob/f64863c/src/svg/cubicons/Cubicon.ts#L50)

___

### cubiconType

• `Readonly` `Abstract` **cubiconType**: `string`

#### Defined in

[src/svg/cubicons/Cubicon.ts:38](https://github.com/imaphatduc/cubecubed/blob/f64863c/src/svg/cubicons/Cubicon.ts#L38)

___

### def\_cubiconBase

• **def\_cubiconBase**: `Selection`<`any`, `unknown`, `HTMLElement`, `any`\>

The SVG element that represents this cubicon.

#### Defined in

[src/svg/cubicons/Cubicon.ts:75](https://github.com/imaphatduc/cubecubed/blob/f64863c/src/svg/cubicons/Cubicon.ts#L75)

___

### g\_cubiconWrapper

• **g\_cubiconWrapper**: `Selection`<`SVGGElement`, `unknown`, `HTMLElement`, `any`\>

The `<g>` element that holds this cubicon.

#### Defined in

[src/svg/cubicons/Cubicon.ts:70](https://github.com/imaphatduc/cubecubed/blob/f64863c/src/svg/cubicons/Cubicon.ts#L70)

___

### group

• **group**: [`Group`](/reference/classes/Group.md)

#### Defined in

[src/svg/cubicons/Cubicon.ts:40](https://github.com/imaphatduc/cubecubed/blob/f64863c/src/svg/cubicons/Cubicon.ts#L40)

___

### moveAngle

• **moveAngle**: `number` = `0`

The sum of all rotate angles (if invoking rotate animation).

#### Defined in

[src/svg/cubicons/Cubicon.ts:60](https://github.com/imaphatduc/cubecubed/blob/f64863c/src/svg/cubicons/Cubicon.ts#L60)

___

### moveVector

• **moveVector**: [`Vector2`](/reference/classes/Vector2.md)

The sum vector of all translate vectors (if invoking translate animation).

#### Defined in

[src/svg/cubicons/Cubicon.ts:55](https://github.com/imaphatduc/cubecubed/blob/f64863c/src/svg/cubicons/Cubicon.ts#L55)

___

### position

• **position**: [`Vector2`](/reference/classes/Vector2.md)

#### Defined in

[src/svg/cubicons/Cubicon.ts:42](https://github.com/imaphatduc/cubecubed/blob/f64863c/src/svg/cubicons/Cubicon.ts#L42)

___

### svg\_group

• **svg\_group**: `Selection`<`SVGSVGElement`, `unknown`, `HTMLElement`, `any`\>

The `<svg>` element of this cubicon's group.

#### Defined in

[src/svg/cubicons/Cubicon.ts:65](https://github.com/imaphatduc/cubecubed/blob/f64863c/src/svg/cubicons/Cubicon.ts#L65)

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

#### Defined in

[src/svg/cubicons/Cubicon.ts:102](https://github.com/imaphatduc/cubecubed/blob/f64863c/src/svg/cubicons/Cubicon.ts#L102)

___

### render

▸ **render**(): `void`

Render this cubicon.

#### Returns

`void`

#### Defined in

[src/svg/cubicons/Cubicon.ts:95](https://github.com/imaphatduc/cubecubed/blob/f64863c/src/svg/cubicons/Cubicon.ts#L95)
