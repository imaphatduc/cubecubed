[cubecubed](/reference/README.md) / [Exports](/reference/modules.md) / VectorShape

# Class: VectorShape

## Hierarchy

- [`Geometry`](/reference/classes/Geometry.md)

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

[Geometry](/reference/classes/Geometry.md).[constructor](/reference/classes/Geometry.md#constructor)

#### Defined in

[src/svg/cubicons/geometry/VectorShape.ts:42](https://github.com/imaphatduc/cubecubed/blob/e48fd86/src/svg/cubicons/geometry/VectorShape.ts#L42)

## Properties

### CONFIG

• **CONFIG**: [`VECTOR_CONFIG`](/reference/interfaces/VECTOR_CONFIG.md)

Config options of this vector shape.

#### Defined in

[src/svg/cubicons/geometry/VectorShape.ts:40](https://github.com/imaphatduc/cubecubed/blob/e48fd86/src/svg/cubicons/geometry/VectorShape.ts#L40)

___

### angle

• **angle**: `number` = `0`

The angle between this cubicon and the x axis.
This property changed after finishing animations (in real time).

#### Inherited from

[Geometry](/reference/classes/Geometry.md).[angle](/reference/classes/Geometry.md#angle)

#### Defined in

[src/svg/cubicons/Cubicon.ts:26](https://github.com/imaphatduc/cubecubed/blob/e48fd86/src/svg/cubicons/Cubicon.ts#L26)

___

### cubType

• `Readonly` **cubType**: ``"geometry"``

#### Inherited from

[Geometry](/reference/classes/Geometry.md).[cubType](/reference/classes/Geometry.md#cubtype)

#### Defined in

[src/svg/cubicons/geometry/Geometry.ts:77](https://github.com/imaphatduc/cubecubed/blob/e48fd86/src/svg/cubicons/geometry/Geometry.ts#L77)

___

### def\_arrowHead

• **def\_arrowHead**: `Selection`<`SVGPolygonElement`, `unknown`, `HTMLElement`, `any`\>

#### Defined in

[src/svg/cubicons/geometry/VectorShape.ts:35](https://github.com/imaphatduc/cubecubed/blob/e48fd86/src/svg/cubicons/geometry/VectorShape.ts#L35)

___

### def\_cubiconBase

• **def\_cubiconBase**: `Selection`<`any`, `unknown`, `HTMLElement`, `any`\>

The HTML tag that represents this cubicon.

#### Inherited from

[Geometry](/reference/classes/Geometry.md).[def_cubiconBase](/reference/classes/Geometry.md#def_cubiconbase)

#### Defined in

[src/svg/cubicons/Cubicon.ts:51](https://github.com/imaphatduc/cubecubed/blob/e48fd86/src/svg/cubicons/Cubicon.ts#L51)

___

### def\_lineStroke

• **def\_lineStroke**: `Selection`<`SVGLineElement`, `unknown`, `HTMLElement`, `any`\>

#### Defined in

[src/svg/cubicons/geometry/VectorShape.ts:33](https://github.com/imaphatduc/cubecubed/blob/e48fd86/src/svg/cubicons/geometry/VectorShape.ts#L33)

___

### endPoint

• **endPoint**: [`Vector2`](/reference/classes/Vector2.md)

End point (head) of the vector.

#### Defined in

[src/svg/cubicons/geometry/VectorShape.ts:31](https://github.com/imaphatduc/cubecubed/blob/e48fd86/src/svg/cubicons/geometry/VectorShape.ts#L31)

___

### g\_cubiconWrapper

• **g\_cubiconWrapper**: `Selection`<`SVGGElement`, `unknown`, `HTMLElement`, `any`\>

The `<g/>` tag that holds this cubicon.

#### Inherited from

[Geometry](/reference/classes/Geometry.md).[g_cubiconWrapper](/reference/classes/Geometry.md#g_cubiconwrapper)

#### Defined in

[src/svg/cubicons/Cubicon.ts:46](https://github.com/imaphatduc/cubecubed/blob/e48fd86/src/svg/cubicons/Cubicon.ts#L46)

___

### geoType

• `Readonly` **geoType**: ``"vector"``

Geometry type of the vector.

#### Overrides

[Geometry](/reference/classes/Geometry.md).[geoType](/reference/classes/Geometry.md#geotype)

#### Defined in

[src/svg/cubicons/geometry/VectorShape.ts:20](https://github.com/imaphatduc/cubecubed/blob/e48fd86/src/svg/cubicons/geometry/VectorShape.ts#L20)

___

### group

• **group**: [`Group`](/reference/classes/Group.md)

The group that this cubicon belongs to.

#### Inherited from

[Geometry](/reference/classes/Geometry.md).[group](/reference/classes/Geometry.md#group)

#### Defined in

[src/svg/cubicons/Cubicon.ts:14](https://github.com/imaphatduc/cubecubed/blob/e48fd86/src/svg/cubicons/Cubicon.ts#L14)

___

### moveAngle

• **moveAngle**: `number` = `0`

The sum of all rotate angles (if invoking rotate animation).

#### Inherited from

[Geometry](/reference/classes/Geometry.md).[moveAngle](/reference/classes/Geometry.md#moveangle)

#### Defined in

[src/svg/cubicons/Cubicon.ts:36](https://github.com/imaphatduc/cubecubed/blob/e48fd86/src/svg/cubicons/Cubicon.ts#L36)

___

### moveVector

• **moveVector**: [`Vector2`](/reference/classes/Vector2.md)

The sum vector of all translate vectors (if invoking translate animation).

#### Inherited from

[Geometry](/reference/classes/Geometry.md).[moveVector](/reference/classes/Geometry.md#movevector)

#### Defined in

[src/svg/cubicons/Cubicon.ts:31](https://github.com/imaphatduc/cubecubed/blob/e48fd86/src/svg/cubicons/Cubicon.ts#L31)

___

### position

• **position**: [`Vector2`](/reference/classes/Vector2.md)

Position of this cubicon.
This property changed after finishing animations (in real time).

#### Inherited from

[Geometry](/reference/classes/Geometry.md).[position](/reference/classes/Geometry.md#position)

#### Defined in

[src/svg/cubicons/Cubicon.ts:20](https://github.com/imaphatduc/cubecubed/blob/e48fd86/src/svg/cubicons/Cubicon.ts#L20)

___

### startPoint

• **startPoint**: [`Vector2`](/reference/classes/Vector2.md)

Start point (tail) of the vector.

#### Defined in

[src/svg/cubicons/geometry/VectorShape.ts:27](https://github.com/imaphatduc/cubecubed/blob/e48fd86/src/svg/cubicons/geometry/VectorShape.ts#L27)

___

### svg\_group

• **svg\_group**: `Selection`<`SVGSVGElement`, `unknown`, `HTMLElement`, `any`\>

The `<svg/>` tag of this cubicon's group.

#### Inherited from

[Geometry](/reference/classes/Geometry.md).[svg_group](/reference/classes/Geometry.md#svg_group)

#### Defined in

[src/svg/cubicons/Cubicon.ts:41](https://github.com/imaphatduc/cubecubed/blob/e48fd86/src/svg/cubicons/Cubicon.ts#L41)

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

[Geometry](/reference/classes/Geometry.md).[coordsGtoW](/reference/classes/Geometry.md#coordsgtow)

#### Defined in

[src/svg/cubicons/geometry/Geometry.ts:88](https://github.com/imaphatduc/cubecubed/blob/e48fd86/src/svg/cubicons/geometry/Geometry.ts#L88)

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

[src/svg/cubicons/geometry/VectorShape.ts:102](https://github.com/imaphatduc/cubecubed/blob/e48fd86/src/svg/cubicons/geometry/VectorShape.ts#L102)

___

### render

▸ **render**(): [`VectorShape`](/reference/classes/VectorShape.md)

#### Returns

[`VectorShape`](/reference/classes/VectorShape.md)

#### Defined in

[src/svg/cubicons/geometry/VectorShape.ts:106](https://github.com/imaphatduc/cubecubed/blob/e48fd86/src/svg/cubicons/geometry/VectorShape.ts#L106)

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

[Geometry](/reference/classes/Geometry.md).[setParentSelection](/reference/classes/Geometry.md#setparentselection)

#### Defined in

[src/svg/cubicons/Cubicon.ts:63](https://github.com/imaphatduc/cubecubed/blob/e48fd86/src/svg/cubicons/Cubicon.ts#L63)
