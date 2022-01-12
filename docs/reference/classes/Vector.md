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
| `params.CONFIG?` | `LINE_CONFIG` | Config options of the vector line. |
| `params.endPoint` | [`Vector2`](/reference/classes/Vector2.md) | End point (head) of the vector. |
| `params.group` | [`Group`](/reference/classes/Group.md) | The group that the vector belongs to. |
| `params.startPoint?` | [`Vector2`](/reference/classes/Vector2.md) | Start point (tail) of the vector. |

#### Overrides

Geometry.constructor

#### Defined in

[src/cubicons/geometry.ts:614](https://github.com/imaphatduc/cubecubed/blob/dfe7a5d/src/cubicons/geometry.ts#L614)

## Properties

### angle

• **angle**: `any`

The angle between this cubicon and the x axis.
This property changed after finishing animations (in real time).

#### Inherited from

Geometry.angle

#### Defined in

[src/cubicons/cubicon.ts:22](https://github.com/imaphatduc/cubecubed/blob/dfe7a5d/src/cubicons/cubicon.ts#L22)

___

### cubType

• `Readonly` **cubType**: ``"geometry"``

#### Inherited from

Geometry.cubType

#### Defined in

[src/cubicons/geometry.ts:66](https://github.com/imaphatduc/cubecubed/blob/dfe7a5d/src/cubicons/geometry.ts#L66)

___

### def\_arrowHead

• **def\_arrowHead**: `any`

#### Defined in

[src/cubicons/geometry.ts:612](https://github.com/imaphatduc/cubecubed/blob/dfe7a5d/src/cubicons/geometry.ts#L612)

___

### def\_cubiconBase

• **def\_cubiconBase**: `any`

The HTML tag that represents this cubicon.

#### Inherited from

Geometry.def\_cubiconBase

#### Defined in

[src/cubicons/cubicon.ts:44](https://github.com/imaphatduc/cubecubed/blob/dfe7a5d/src/cubicons/cubicon.ts#L44)

___

### def\_lineStroke

• **def\_lineStroke**: `any`

#### Defined in

[src/cubicons/geometry.ts:611](https://github.com/imaphatduc/cubecubed/blob/dfe7a5d/src/cubicons/geometry.ts#L611)

___

### elapsedTime

• **elapsedTime**: `any`

Total time of all called animations (in milliseconds).

#### Inherited from

Geometry.elapsedTime

#### Defined in

[src/cubicons/cubicon.ts:49](https://github.com/imaphatduc/cubecubed/blob/dfe7a5d/src/cubicons/cubicon.ts#L49)

___

### endPoint

• `Readonly` **endPoint**: [`Vector2`](/reference/classes/Vector2.md)

End point (head) of the vector.

#### Defined in

[src/cubicons/geometry.ts:604](https://github.com/imaphatduc/cubecubed/blob/dfe7a5d/src/cubicons/geometry.ts#L604)

___

### fillColor

• **fillColor**: `any`

#### Inherited from

Geometry.fillColor

#### Defined in

[src/cubicons/geometry.ts:70](https://github.com/imaphatduc/cubecubed/blob/dfe7a5d/src/cubicons/geometry.ts#L70)

___

### fillOpacity

• **fillOpacity**: `any`

#### Inherited from

Geometry.fillOpacity

#### Defined in

[src/cubicons/geometry.ts:71](https://github.com/imaphatduc/cubecubed/blob/dfe7a5d/src/cubicons/geometry.ts#L71)

___

### g\_cubiconWrapper

• **g\_cubiconWrapper**: `any`

The `<g/>` tag that holds this cubicon.

#### Inherited from

Geometry.g\_cubiconWrapper

#### Defined in

[src/cubicons/cubicon.ts:40](https://github.com/imaphatduc/cubecubed/blob/dfe7a5d/src/cubicons/cubicon.ts#L40)

___

### geoType

• `Readonly` **geoType**: ``"vector"``

Geometry type of the vector.

#### Overrides

Geometry.geoType

#### Defined in

[src/cubicons/geometry.ts:594](https://github.com/imaphatduc/cubecubed/blob/dfe7a5d/src/cubicons/geometry.ts#L594)

___

### group

• **group**: [`Group`](/reference/classes/Group.md)

The group that this cubicon belongs to.

#### Inherited from

Geometry.group

#### Defined in

[src/cubicons/cubicon.ts:12](https://github.com/imaphatduc/cubecubed/blob/dfe7a5d/src/cubicons/cubicon.ts#L12)

___

### isRendered

• **isRendered**: `boolean` = `false`

#### Inherited from

Geometry.isRendered

#### Defined in

[src/cubicons/cubicon.ts:51](https://github.com/imaphatduc/cubecubed/blob/dfe7a5d/src/cubicons/cubicon.ts#L51)

___

### lineColor

• **lineColor**: `any`

#### Inherited from

Geometry.lineColor

#### Defined in

[src/cubicons/geometry.ts:76](https://github.com/imaphatduc/cubecubed/blob/dfe7a5d/src/cubicons/geometry.ts#L76)

___

### lineWidth

• **lineWidth**: `any`

#### Inherited from

Geometry.lineWidth

#### Defined in

[src/cubicons/geometry.ts:77](https://github.com/imaphatduc/cubecubed/blob/dfe7a5d/src/cubicons/geometry.ts#L77)

___

### moveAngle

• **moveAngle**: `any`

The sum of all rotate angles (if invoking rotate animation).

#### Inherited from

Geometry.moveAngle

#### Defined in

[src/cubicons/cubicon.ts:31](https://github.com/imaphatduc/cubecubed/blob/dfe7a5d/src/cubicons/cubicon.ts#L31)

___

### moveVector

• **moveVector**: `any`

The sum vector of all translate vectors (if invoking translate animation).

#### Inherited from

Geometry.moveVector

#### Defined in

[src/cubicons/cubicon.ts:27](https://github.com/imaphatduc/cubecubed/blob/dfe7a5d/src/cubicons/cubicon.ts#L27)

___

### position

• **position**: [`Vector2`](/reference/classes/Vector2.md)

Position of this cubicon.
This property changed after finishing animations (in real time).

#### Inherited from

Geometry.position

#### Defined in

[src/cubicons/cubicon.ts:17](https://github.com/imaphatduc/cubecubed/blob/dfe7a5d/src/cubicons/cubicon.ts#L17)

___

### startPoint

• `Readonly` **startPoint**: [`Vector2`](/reference/classes/Vector2.md)

Start point (tail) of the vector.

#### Defined in

[src/cubicons/geometry.ts:600](https://github.com/imaphatduc/cubecubed/blob/dfe7a5d/src/cubicons/geometry.ts#L600)

___

### strokeColor

• **strokeColor**: `any`

#### Inherited from

Geometry.strokeColor

#### Defined in

[src/cubicons/geometry.ts:72](https://github.com/imaphatduc/cubecubed/blob/dfe7a5d/src/cubicons/geometry.ts#L72)

___

### strokeWidth

• **strokeWidth**: `any`

#### Inherited from

Geometry.strokeWidth

#### Defined in

[src/cubicons/geometry.ts:73](https://github.com/imaphatduc/cubecubed/blob/dfe7a5d/src/cubicons/geometry.ts#L73)

___

### svg\_group

• **svg\_group**: `any`

The `<svg/>` tag of this cubicon's group.

#### Inherited from

Geometry.svg\_group

#### Defined in

[src/cubicons/cubicon.ts:36](https://github.com/imaphatduc/cubecubed/blob/dfe7a5d/src/cubicons/cubicon.ts#L36)

___

### theta

• **theta**: `number`

The smaller angle (in degree) between the vector and the x axis.

#### Defined in

[src/cubicons/geometry.ts:609](https://github.com/imaphatduc/cubecubed/blob/dfe7a5d/src/cubicons/geometry.ts#L609)

## Methods

### checkIfRendered

▸ **checkIfRendered**(): `void`

#### Returns

`void`

#### Inherited from

Geometry.checkIfRendered

#### Defined in

[src/cubicons/cubicon.ts:84](https://github.com/imaphatduc/cubecubed/blob/dfe7a5d/src/cubicons/cubicon.ts#L84)

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

[src/cubicons/geometry.ts:91](https://github.com/imaphatduc/cubecubed/blob/dfe7a5d/src/cubicons/geometry.ts#L91)

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

[src/cubicons/geometry.ts:658](https://github.com/imaphatduc/cubecubed/blob/dfe7a5d/src/cubicons/geometry.ts#L658)

___

### render

▸ **render**(): [`Vector`](/reference/classes/Vector.md)

#### Returns

[`Vector`](/reference/classes/Vector.md)

#### Defined in

[src/cubicons/geometry.ts:662](https://github.com/imaphatduc/cubecubed/blob/dfe7a5d/src/cubicons/geometry.ts#L662)
