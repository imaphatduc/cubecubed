[cubecubed](/reference/README.md) / [Exports](/reference/modules.md) / Grid

# Class: Grid

## Hierarchy

- [`Geometry`](/reference/classes/Geometry.md)

  ↳ **`Grid`**

## Constructors

### constructor

• **new Grid**(`params`)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | `Object` | - |
| `params.group` | [`Group`](/reference/classes/Group.md) | The group that the grid belongs to. |
| `params.hasNums?` | `boolean` | Whether or not to include numbers onto axes. |

#### Overrides

[Geometry](/reference/classes/Geometry.md).[constructor](/reference/classes/Geometry.md#constructor)

#### Defined in

[src/svg/cubicons/geometry/Grid.ts:57](https://github.com/imaphatduc/cubecubed/blob/e48fd86/src/svg/cubicons/geometry/Grid.ts#L57)

## Properties

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

### def\_cubiconBase

• **def\_cubiconBase**: `Selection`<`any`, `unknown`, `HTMLElement`, `any`\>

The HTML tag that represents this cubicon.

#### Inherited from

[Geometry](/reference/classes/Geometry.md).[def_cubiconBase](/reference/classes/Geometry.md#def_cubiconbase)

#### Defined in

[src/svg/cubicons/Cubicon.ts:51](https://github.com/imaphatduc/cubecubed/blob/e48fd86/src/svg/cubicons/Cubicon.ts#L51)

___

### g\_cubiconWrapper

• **g\_cubiconWrapper**: `Selection`<`SVGGElement`, `unknown`, `HTMLElement`, `any`\>

The `<g/>` tag that holds this cubicon.

#### Inherited from

[Geometry](/reference/classes/Geometry.md).[g_cubiconWrapper](/reference/classes/Geometry.md#g_cubiconwrapper)

#### Defined in

[src/svg/cubicons/Cubicon.ts:46](https://github.com/imaphatduc/cubecubed/blob/e48fd86/src/svg/cubicons/Cubicon.ts#L46)

___

### g\_horizontal

• **g\_horizontal**: `any`

The `<g/>` tag that contains all horizontal lines.

#### Defined in

[src/svg/cubicons/geometry/Grid.ts:49](https://github.com/imaphatduc/cubecubed/blob/e48fd86/src/svg/cubicons/geometry/Grid.ts#L49)

___

### g\_vertical

• **g\_vertical**: `any`

The `<g/>` tag that contains all vertical lines.

#### Defined in

[src/svg/cubicons/geometry/Grid.ts:53](https://github.com/imaphatduc/cubecubed/blob/e48fd86/src/svg/cubicons/geometry/Grid.ts#L53)

___

### geoType

• `Readonly` **geoType**: ``"grid"``

#### Overrides

[Geometry](/reference/classes/Geometry.md).[geoType](/reference/classes/Geometry.md#geotype)

#### Defined in

[src/svg/cubicons/geometry/Grid.ts:11](https://github.com/imaphatduc/cubecubed/blob/e48fd86/src/svg/cubicons/geometry/Grid.ts#L11)

___

### group

• **group**: [`Group`](/reference/classes/Group.md)

The group that this cubicon belongs to.

#### Inherited from

[Geometry](/reference/classes/Geometry.md).[group](/reference/classes/Geometry.md#group)

#### Defined in

[src/svg/cubicons/Cubicon.ts:14](https://github.com/imaphatduc/cubecubed/blob/e48fd86/src/svg/cubicons/Cubicon.ts#L14)

___

### hasNums

• **hasNums**: `boolean`

#### Defined in

[src/svg/cubicons/geometry/Grid.ts:55](https://github.com/imaphatduc/cubecubed/blob/e48fd86/src/svg/cubicons/geometry/Grid.ts#L55)

___

### lineColor

• **lineColor**: `string`

Color of the grid lines.

#### Defined in

[src/svg/cubicons/geometry/Grid.ts:30](https://github.com/imaphatduc/cubecubed/blob/e48fd86/src/svg/cubicons/geometry/Grid.ts#L30)

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

### originColor

• **originColor**: `string`

Color of the grid origin.

#### Defined in

[src/svg/cubicons/geometry/Grid.ts:16](https://github.com/imaphatduc/cubecubed/blob/e48fd86/src/svg/cubicons/geometry/Grid.ts#L16)

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

### svg\_group

• **svg\_group**: `Selection`<`SVGSVGElement`, `unknown`, `HTMLElement`, `any`\>

The `<svg/>` tag of this cubicon's group.

#### Inherited from

[Geometry](/reference/classes/Geometry.md).[svg_group](/reference/classes/Geometry.md#svg_group)

#### Defined in

[src/svg/cubicons/Cubicon.ts:41](https://github.com/imaphatduc/cubecubed/blob/e48fd86/src/svg/cubicons/Cubicon.ts#L41)

___

### xAxesColor

• **xAxesColor**: `string`

Color of the x axis.

#### Defined in

[src/svg/cubicons/geometry/Grid.ts:21](https://github.com/imaphatduc/cubecubed/blob/e48fd86/src/svg/cubicons/geometry/Grid.ts#L21)

___

### xNumberRange

• **xNumberRange**: `number`[]

Numbers marked on the x axis.

#### Defined in

[src/svg/cubicons/geometry/Grid.ts:35](https://github.com/imaphatduc/cubecubed/blob/e48fd86/src/svg/cubicons/geometry/Grid.ts#L35)

___

### yAxesColor

• **yAxesColor**: `string`

Color of the y axis.

#### Defined in

[src/svg/cubicons/geometry/Grid.ts:25](https://github.com/imaphatduc/cubecubed/blob/e48fd86/src/svg/cubicons/geometry/Grid.ts#L25)

___

### yNumberRange

• **yNumberRange**: `number`[]

Numbers marked on the y axis.

#### Defined in

[src/svg/cubicons/geometry/Grid.ts:39](https://github.com/imaphatduc/cubecubed/blob/e48fd86/src/svg/cubicons/geometry/Grid.ts#L39)

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

### render

▸ **render**(): [`Grid`](/reference/classes/Grid.md)

#### Returns

[`Grid`](/reference/classes/Grid.md)

#### Defined in

[src/svg/cubicons/geometry/Grid.ts:77](https://github.com/imaphatduc/cubecubed/blob/e48fd86/src/svg/cubicons/geometry/Grid.ts#L77)

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
