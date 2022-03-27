[cubecubed](/reference/README.md) / [Exports](/reference/modules.md) / Vector

# Class: Vector

## Hierarchy

- `Geometry`

  ↳ **`Vector`**

## Constructors

### constructor

• **new Vector**(`params`)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | `Object` | - |
| `params.CONFIG?` | `VECTOR_CONFIG` | Config options of the vector line. |
| `params.endPoint` | [`Vector2`](/reference/classes/Vector2.md) | End point (head) of the vector. |
| `params.group` | [`Group`](/reference/classes/Group.md) | The group that the vector belongs to. |
| `params.startPoint?` | [`Vector2`](/reference/classes/Vector2.md) | Start point (tail) of the vector. |

#### Overrides

Geometry.constructor

#### Defined in

[src/svg/cubicons/geometry/Vector.ts:40](https://github.com/imaphatduc/cubecubed/blob/1251e31/src/svg/cubicons/geometry/Vector.ts#L40)

## Properties

### angle

• **angle**: `number` = `0`

The angle between this cubicon and the x axis.
This property changed after finishing animations (in real time).

#### Inherited from

Geometry.angle

#### Defined in

[src/svg/cubicons/Cubicon.ts:26](https://github.com/imaphatduc/cubecubed/blob/1251e31/src/svg/cubicons/Cubicon.ts#L26)

___

### arrowHeight

• `Readonly` **arrowHeight**: `any`

#### Defined in

[src/svg/cubicons/geometry/Vector.ts:38](https://github.com/imaphatduc/cubecubed/blob/1251e31/src/svg/cubicons/geometry/Vector.ts#L38)

___

### arrowWidth

• `Readonly` **arrowWidth**: `any`

#### Defined in

[src/svg/cubicons/geometry/Vector.ts:37](https://github.com/imaphatduc/cubecubed/blob/1251e31/src/svg/cubicons/geometry/Vector.ts#L37)

___

### cubType

• `Readonly` **cubType**: ``"geometry"``

#### Inherited from

Geometry.cubType

#### Defined in

[src/svg/cubicons/geometry/Geometry.ts:77](https://github.com/imaphatduc/cubecubed/blob/1251e31/src/svg/cubicons/geometry/Geometry.ts#L77)

___

### def\_arrowHead

• **def\_arrowHead**: `any`

#### Defined in

[src/svg/cubicons/geometry/Vector.ts:35](https://github.com/imaphatduc/cubecubed/blob/1251e31/src/svg/cubicons/geometry/Vector.ts#L35)

___

### def\_cubiconBase

• **def\_cubiconBase**: `any`

The HTML tag that represents this cubicon.

#### Inherited from

Geometry.def\_cubiconBase

#### Defined in

[src/svg/cubicons/Cubicon.ts:51](https://github.com/imaphatduc/cubecubed/blob/1251e31/src/svg/cubicons/Cubicon.ts#L51)

___

### def\_lineStroke

• **def\_lineStroke**: `any`

#### Defined in

[src/svg/cubicons/geometry/Vector.ts:34](https://github.com/imaphatduc/cubecubed/blob/1251e31/src/svg/cubicons/geometry/Vector.ts#L34)

___

### elapsedTime

• **elapsedTime**: `number` = `0`

Total time of all called animations (in milliseconds).

#### Inherited from

Geometry.elapsedTime

#### Defined in

[src/svg/cubicons/Cubicon.ts:56](https://github.com/imaphatduc/cubecubed/blob/1251e31/src/svg/cubicons/Cubicon.ts#L56)

___

### endPoint

• `Readonly` **endPoint**: [`Vector2`](/reference/classes/Vector2.md)

End point (head) of the vector.

#### Defined in

[src/svg/cubicons/geometry/Vector.ts:27](https://github.com/imaphatduc/cubecubed/blob/1251e31/src/svg/cubicons/geometry/Vector.ts#L27)

___

### fillColor

• **fillColor**: `any`

#### Inherited from

Geometry.fillColor

#### Defined in

[src/svg/cubicons/geometry/Geometry.ts:82](https://github.com/imaphatduc/cubecubed/blob/1251e31/src/svg/cubicons/geometry/Geometry.ts#L82)

___

### fillOpacity

• **fillOpacity**: `any`

#### Inherited from

Geometry.fillOpacity

#### Defined in

[src/svg/cubicons/geometry/Geometry.ts:83](https://github.com/imaphatduc/cubecubed/blob/1251e31/src/svg/cubicons/geometry/Geometry.ts#L83)

___

### g\_cubiconWrapper

• **g\_cubiconWrapper**: `any`

The `<g/>` tag that holds this cubicon.

#### Inherited from

Geometry.g\_cubiconWrapper

#### Defined in

[src/svg/cubicons/Cubicon.ts:46](https://github.com/imaphatduc/cubecubed/blob/1251e31/src/svg/cubicons/Cubicon.ts#L46)

___

### geoType

• `Readonly` **geoType**: ``"vector"``

Geometry type of the vector.

#### Overrides

Geometry.geoType

#### Defined in

[src/svg/cubicons/geometry/Vector.ts:17](https://github.com/imaphatduc/cubecubed/blob/1251e31/src/svg/cubicons/geometry/Vector.ts#L17)

___

### group

• **group**: [`Group`](/reference/classes/Group.md)

The group that this cubicon belongs to.

#### Inherited from

Geometry.group

#### Defined in

[src/svg/cubicons/Cubicon.ts:14](https://github.com/imaphatduc/cubecubed/blob/1251e31/src/svg/cubicons/Cubicon.ts#L14)

___

### isRendered

• **isRendered**: `boolean` = `false`

#### Inherited from

Geometry.isRendered

#### Defined in

[src/svg/cubicons/Cubicon.ts:58](https://github.com/imaphatduc/cubecubed/blob/1251e31/src/svg/cubicons/Cubicon.ts#L58)

___

### lineColor

• **lineColor**: `any`

#### Inherited from

Geometry.lineColor

#### Defined in

[src/svg/cubicons/geometry/Geometry.ts:88](https://github.com/imaphatduc/cubecubed/blob/1251e31/src/svg/cubicons/geometry/Geometry.ts#L88)

___

### lineWidth

• **lineWidth**: `any`

#### Inherited from

Geometry.lineWidth

#### Defined in

[src/svg/cubicons/geometry/Geometry.ts:89](https://github.com/imaphatduc/cubecubed/blob/1251e31/src/svg/cubicons/geometry/Geometry.ts#L89)

___

### moveAngle

• **moveAngle**: `number` = `0`

The sum of all rotate angles (if invoking rotate animation).

#### Inherited from

Geometry.moveAngle

#### Defined in

[src/svg/cubicons/Cubicon.ts:36](https://github.com/imaphatduc/cubecubed/blob/1251e31/src/svg/cubicons/Cubicon.ts#L36)

___

### moveVector

• **moveVector**: [`Vector2`](/reference/classes/Vector2.md)

The sum vector of all translate vectors (if invoking translate animation).

#### Inherited from

Geometry.moveVector

#### Defined in

[src/svg/cubicons/Cubicon.ts:31](https://github.com/imaphatduc/cubecubed/blob/1251e31/src/svg/cubicons/Cubicon.ts#L31)

___

### position

• **position**: [`Vector2`](/reference/classes/Vector2.md)

Position of this cubicon.
This property changed after finishing animations (in real time).

#### Inherited from

Geometry.position

#### Defined in

[src/svg/cubicons/Cubicon.ts:20](https://github.com/imaphatduc/cubecubed/blob/1251e31/src/svg/cubicons/Cubicon.ts#L20)

___

### startPoint

• `Readonly` **startPoint**: [`Vector2`](/reference/classes/Vector2.md)

Start point (tail) of the vector.

#### Defined in

[src/svg/cubicons/geometry/Vector.ts:23](https://github.com/imaphatduc/cubecubed/blob/1251e31/src/svg/cubicons/geometry/Vector.ts#L23)

___

### strokeColor

• **strokeColor**: `any`

#### Inherited from

Geometry.strokeColor

#### Defined in

[src/svg/cubicons/geometry/Geometry.ts:84](https://github.com/imaphatduc/cubecubed/blob/1251e31/src/svg/cubicons/geometry/Geometry.ts#L84)

___

### strokeWidth

• **strokeWidth**: `any`

#### Inherited from

Geometry.strokeWidth

#### Defined in

[src/svg/cubicons/geometry/Geometry.ts:85](https://github.com/imaphatduc/cubecubed/blob/1251e31/src/svg/cubicons/geometry/Geometry.ts#L85)

___

### svg\_group

• **svg\_group**: `any`

The `<svg/>` tag of this cubicon's group.

#### Inherited from

Geometry.svg\_group

#### Defined in

[src/svg/cubicons/Cubicon.ts:41](https://github.com/imaphatduc/cubecubed/blob/1251e31/src/svg/cubicons/Cubicon.ts#L41)

___

### theta

• **theta**: `number`

The smaller angle (in degree) between the vector and the x axis.

#### Defined in

[src/svg/cubicons/geometry/Vector.ts:32](https://github.com/imaphatduc/cubecubed/blob/1251e31/src/svg/cubicons/geometry/Vector.ts#L32)

## Methods

### checkIfRendered

▸ **checkIfRendered**(): `void`

#### Returns

`void`

#### Inherited from

Geometry.checkIfRendered

#### Defined in

[src/svg/cubicons/Cubicon.ts:78](https://github.com/imaphatduc/cubecubed/blob/1251e31/src/svg/cubicons/Cubicon.ts#L78)

___

### coordsGtoW

▸ **coordsGtoW**(`point`): [`Vector2`](/reference/classes/Vector2.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `point` | [`Vector2`](/reference/classes/Vector2.md) |

#### Returns

[`Vector2`](/reference/classes/Vector2.md)

#### Inherited from

Geometry.coordsGtoW

#### Defined in

[src/svg/cubicons/geometry/Geometry.ts:103](https://github.com/imaphatduc/cubecubed/blob/1251e31/src/svg/cubicons/geometry/Geometry.ts#L103)

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

[src/svg/cubicons/geometry/Vector.ts:86](https://github.com/imaphatduc/cubecubed/blob/1251e31/src/svg/cubicons/geometry/Vector.ts#L86)

___

### render

▸ **render**(): [`Vector`](/reference/classes/Vector.md)

#### Returns

[`Vector`](/reference/classes/Vector.md)

#### Defined in

[src/svg/cubicons/geometry/Vector.ts:90](https://github.com/imaphatduc/cubecubed/blob/1251e31/src/svg/cubicons/geometry/Vector.ts#L90)
