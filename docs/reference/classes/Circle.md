[cubecubed](/reference/README.md) / [Exports](/reference/modules.md) / Circle

# Class: Circle

Return the barebone of a circle shape.

## Hierarchy

- `Geometry`

  ↳ **`Circle`**

## Constructors

### constructor

• **new Circle**(`params`)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | `Object` | An object that contains options to form the circle. |
| `params.CONFIG?` | `SHAPE_CONFIG` | Config options of the circle. |
| `params.group` | [`Group`](/reference/classes/Group.md) | The group that the circle belongs to. |
| `params.position?` | [`Vector2`](/reference/classes/Vector2.md) | Position of the circle. |
| `params.radius` | `number` | Radius of the rectangle. |

#### Overrides

Geometry.constructor

#### Defined in

[src/svg/cubicons/geometry/Circle.ts:25](https://github.com/imaphatduc/cubecubed/blob/1251e31/src/svg/cubicons/geometry/Circle.ts#L25)

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

### cubType

• `Readonly` **cubType**: ``"geometry"``

#### Inherited from

Geometry.cubType

#### Defined in

[src/svg/cubicons/geometry/Geometry.ts:77](https://github.com/imaphatduc/cubecubed/blob/1251e31/src/svg/cubicons/geometry/Geometry.ts#L77)

___

### def\_cubiconBase

• **def\_cubiconBase**: `any`

The HTML tag that represents this cubicon.

#### Inherited from

Geometry.def\_cubiconBase

#### Defined in

[src/svg/cubicons/Cubicon.ts:51](https://github.com/imaphatduc/cubecubed/blob/1251e31/src/svg/cubicons/Cubicon.ts#L51)

___

### elapsedTime

• **elapsedTime**: `number` = `0`

Total time of all called animations (in milliseconds).

#### Inherited from

Geometry.elapsedTime

#### Defined in

[src/svg/cubicons/Cubicon.ts:56](https://github.com/imaphatduc/cubecubed/blob/1251e31/src/svg/cubicons/Cubicon.ts#L56)

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

• `Readonly` **geoType**: ``"circle"``

Geometry type of the circle.

#### Overrides

Geometry.geoType

#### Defined in

[src/svg/cubicons/geometry/Circle.ts:15](https://github.com/imaphatduc/cubecubed/blob/1251e31/src/svg/cubicons/geometry/Circle.ts#L15)

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

### radius

• `Readonly` **radius**: `number`

Radius of the rectangle (in grid coordinate system).

#### Defined in

[src/svg/cubicons/geometry/Circle.ts:20](https://github.com/imaphatduc/cubecubed/blob/1251e31/src/svg/cubicons/geometry/Circle.ts#L20)

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

### render

▸ **render**(): [`Circle`](/reference/classes/Circle.md)

Draw (and render) the shape of this circle onto SVG.

#### Returns

[`Circle`](/reference/classes/Circle.md)

#### Defined in

[src/svg/cubicons/geometry/Circle.ts:58](https://github.com/imaphatduc/cubecubed/blob/1251e31/src/svg/cubicons/geometry/Circle.ts#L58)
