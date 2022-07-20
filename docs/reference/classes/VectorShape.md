[cubecubed](/reference/README.md) / [Exports](/reference/modules.md) / VectorShape

# Class: VectorShape

## Hierarchy

- [`Cubicon`](/reference/classes/Cubicon.md)

  ↳ **`VectorShape`**

## Constructors

### constructor

• **new VectorShape**(`params`)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | `Object` | - |
| `params.CONFIG?` | [`VECTOR_CONFIG`](/reference/interfaces/VECTOR_CONFIG.md) | Config options of the vector line. |
| `params.endPoint` | [`Vector2`](/reference/classes/Vector2.md) | End point (head) of the vector. |
| `params.group` | [`Group`](/reference/classes/Group.md) | The group that the vector belongs to. |
| `params.startPoint?` | [`Vector2`](/reference/classes/Vector2.md) | Start point (tail) of the vector. |

#### Overrides

[Cubicon](/reference/classes/Cubicon.md).[constructor](/reference/classes/Cubicon.md#constructor)

#### Defined in

[src/svg/cubicons/geometry/VectorShape.ts:38](https://github.com/imaphatduc/cubecubed/blob/8295992/src/svg/cubicons/geometry/VectorShape.ts#L38)

## Properties

### CONFIG

• **CONFIG**: [`VECTOR_CONFIG`](/reference/interfaces/VECTOR_CONFIG.md)

Config options of this vector shape.

#### Defined in

[src/svg/cubicons/geometry/VectorShape.ts:36](https://github.com/imaphatduc/cubecubed/blob/8295992/src/svg/cubicons/geometry/VectorShape.ts#L36)

___

### angle

• **angle**: `number` = `0`

The angle between this cubicon and the x axis.
This property changed after finishing animations (in real time).

#### Inherited from

[Cubicon](/reference/classes/Cubicon.md).[angle](/reference/classes/Cubicon.md#angle)

#### Defined in

[src/svg/cubicons/Cubicon.ts:26](https://github.com/imaphatduc/cubecubed/blob/8295992/src/svg/cubicons/Cubicon.ts#L26)

___

### cubiconType

• `Readonly` **cubiconType**: ``"VectorShape"``

#### Overrides

[Cubicon](/reference/classes/Cubicon.md).[cubiconType](/reference/classes/Cubicon.md#cubicontype)

#### Defined in

[src/svg/cubicons/geometry/VectorShape.ts:17](https://github.com/imaphatduc/cubecubed/blob/8295992/src/svg/cubicons/geometry/VectorShape.ts#L17)

___

### def\_arrowHead

• **def\_arrowHead**: `Selection`<`SVGPolygonElement`, `unknown`, `HTMLElement`, `any`\>

#### Defined in

[src/svg/cubicons/geometry/VectorShape.ts:31](https://github.com/imaphatduc/cubecubed/blob/8295992/src/svg/cubicons/geometry/VectorShape.ts#L31)

___

### def\_cubiconBase

• **def\_cubiconBase**: `Selection`<`any`, `unknown`, `HTMLElement`, `any`\>

The HTML tag that represents this cubicon.

#### Inherited from

[Cubicon](/reference/classes/Cubicon.md).[def_cubiconBase](/reference/classes/Cubicon.md#def_cubiconbase)

#### Defined in

[src/svg/cubicons/Cubicon.ts:51](https://github.com/imaphatduc/cubecubed/blob/8295992/src/svg/cubicons/Cubicon.ts#L51)

___

### def\_lineStroke

• **def\_lineStroke**: `Selection`<`SVGLineElement`, `unknown`, `HTMLElement`, `any`\>

#### Defined in

[src/svg/cubicons/geometry/VectorShape.ts:29](https://github.com/imaphatduc/cubecubed/blob/8295992/src/svg/cubicons/geometry/VectorShape.ts#L29)

___

### endPoint

• **endPoint**: [`Vector2`](/reference/classes/Vector2.md)

End point (head) of the vector.

#### Defined in

[src/svg/cubicons/geometry/VectorShape.ts:27](https://github.com/imaphatduc/cubecubed/blob/8295992/src/svg/cubicons/geometry/VectorShape.ts#L27)

___

### g\_cubiconWrapper

• **g\_cubiconWrapper**: `Selection`<`SVGGElement`, `unknown`, `HTMLElement`, `any`\>

The `<g/>` tag that holds this cubicon.

#### Inherited from

[Cubicon](/reference/classes/Cubicon.md).[g_cubiconWrapper](/reference/classes/Cubicon.md#g_cubiconwrapper)

#### Defined in

[src/svg/cubicons/Cubicon.ts:46](https://github.com/imaphatduc/cubecubed/blob/8295992/src/svg/cubicons/Cubicon.ts#L46)

___

### group

• **group**: [`Group`](/reference/classes/Group.md)

The group that this cubicon belongs to.

#### Inherited from

[Cubicon](/reference/classes/Cubicon.md).[group](/reference/classes/Cubicon.md#group)

#### Defined in

[src/svg/cubicons/Cubicon.ts:14](https://github.com/imaphatduc/cubecubed/blob/8295992/src/svg/cubicons/Cubicon.ts#L14)

___

### moveAngle

• **moveAngle**: `number` = `0`

The sum of all rotate angles (if invoking rotate animation).

#### Inherited from

[Cubicon](/reference/classes/Cubicon.md).[moveAngle](/reference/classes/Cubicon.md#moveangle)

#### Defined in

[src/svg/cubicons/Cubicon.ts:36](https://github.com/imaphatduc/cubecubed/blob/8295992/src/svg/cubicons/Cubicon.ts#L36)

___

### moveVector

• **moveVector**: [`Vector2`](/reference/classes/Vector2.md)

The sum vector of all translate vectors (if invoking translate animation).

#### Inherited from

[Cubicon](/reference/classes/Cubicon.md).[moveVector](/reference/classes/Cubicon.md#movevector)

#### Defined in

[src/svg/cubicons/Cubicon.ts:31](https://github.com/imaphatduc/cubecubed/blob/8295992/src/svg/cubicons/Cubicon.ts#L31)

___

### position

• **position**: [`Vector2`](/reference/classes/Vector2.md)

Position of this cubicon.
This property changed after finishing animations (in real time).

#### Inherited from

[Cubicon](/reference/classes/Cubicon.md).[position](/reference/classes/Cubicon.md#position)

#### Defined in

[src/svg/cubicons/Cubicon.ts:20](https://github.com/imaphatduc/cubecubed/blob/8295992/src/svg/cubicons/Cubicon.ts#L20)

___

### startPoint

• **startPoint**: [`Vector2`](/reference/classes/Vector2.md)

Start point (tail) of the vector.

#### Defined in

[src/svg/cubicons/geometry/VectorShape.ts:22](https://github.com/imaphatduc/cubecubed/blob/8295992/src/svg/cubicons/geometry/VectorShape.ts#L22)

___

### svg\_group

• **svg\_group**: `Selection`<`SVGSVGElement`, `unknown`, `HTMLElement`, `any`\>

The `<svg/>` tag of this cubicon's group.

#### Inherited from

[Cubicon](/reference/classes/Cubicon.md).[svg_group](/reference/classes/Cubicon.md#svg_group)

#### Defined in

[src/svg/cubicons/Cubicon.ts:41](https://github.com/imaphatduc/cubecubed/blob/8295992/src/svg/cubicons/Cubicon.ts#L41)

## Methods

### coordsGtoW

▸ **coordsGtoW**(`point`): [`Vector2`](/reference/classes/Vector2.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `point` | [`Vector2`](/reference/classes/Vector2.md) |

#### Returns

[`Vector2`](/reference/classes/Vector2.md)

#### Inherited from

[Cubicon](/reference/classes/Cubicon.md).[coordsGtoW](/reference/classes/Cubicon.md#coordsgtow)

#### Defined in

[src/svg/cubicons/Cubicon.ts:69](https://github.com/imaphatduc/cubecubed/blob/8295992/src/svg/cubicons/Cubicon.ts#L69)

___

### getWpoint

▸ **getWpoint**(`point`): [`Vector2`](/reference/classes/Vector2.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `point` | [`Vector2`](/reference/classes/Vector2.md) |

#### Returns

[`Vector2`](/reference/classes/Vector2.md)

#### Defined in

[src/svg/cubicons/geometry/VectorShape.ts:98](https://github.com/imaphatduc/cubecubed/blob/8295992/src/svg/cubicons/geometry/VectorShape.ts#L98)

___

### render

▸ **render**(): [`VectorShape`](/reference/classes/VectorShape.md)

#### Returns

[`VectorShape`](/reference/classes/VectorShape.md)

#### Defined in

[src/svg/cubicons/geometry/VectorShape.ts:102](https://github.com/imaphatduc/cubecubed/blob/8295992/src/svg/cubicons/geometry/VectorShape.ts#L102)

___

### setParentSelection

▸ **setParentSelection**(`parentSelection`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `parentSelection` | `Selection`<`SVGGElement`, `unknown`, `HTMLElement`, `any`\> |

#### Returns

`void`

#### Inherited from

[Cubicon](/reference/classes/Cubicon.md).[setParentSelection](/reference/classes/Cubicon.md#setparentselection)

#### Defined in

[src/svg/cubicons/Cubicon.ts:63](https://github.com/imaphatduc/cubecubed/blob/8295992/src/svg/cubicons/Cubicon.ts#L63)
