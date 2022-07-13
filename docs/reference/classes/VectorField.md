[cubecubed](/reference/README.md) / [Exports](/reference/modules.md) / VectorField

# Class: VectorField

## Hierarchy

- [`Cubicon`](/reference/classes/Cubicon.md)

  ↳ **`VectorField`**

## Constructors

### constructor

• **new VectorField**(`params`)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | `Object` | - |
| `params.CONFIG?` | [`VECTOR_FIELD_CONFIG`](/reference/interfaces/VECTOR_FIELD_CONFIG.md) | Config options for the vector field. |
| `params.group` | [`Group`](/reference/classes/Group.md) | The group that the cubicon belongs to. |
| `params.functionDef` | (`pos`: [`Vector2`](/reference/classes/Vector2.md)) => [`Vector2`](/reference/classes/Vector2.md) | - |

#### Overrides

[Cubicon](/reference/classes/Cubicon.md).[constructor](/reference/classes/Cubicon.md#constructor)

#### Defined in

[src/svg/cubicons/VectorField.ts:42](https://github.com/imaphatduc/cubecubed/blob/e48fd86/src/svg/cubicons/VectorField.ts#L42)

## Properties

### CONFIG

• **CONFIG**: [`VECTOR_FIELD_CONFIG`](/reference/interfaces/VECTOR_FIELD_CONFIG.md)

Config options of the vector field.

#### Defined in

[src/svg/cubicons/VectorField.ts:40](https://github.com/imaphatduc/cubecubed/blob/e48fd86/src/svg/cubicons/VectorField.ts#L40)

___

### angle

• **angle**: `number` = `0`

The angle between this cubicon and the x axis.
This property changed after finishing animations (in real time).

#### Inherited from

[Cubicon](/reference/classes/Cubicon.md).[angle](/reference/classes/Cubicon.md#angle)

#### Defined in

[src/svg/cubicons/Cubicon.ts:26](https://github.com/imaphatduc/cubecubed/blob/e48fd86/src/svg/cubicons/Cubicon.ts#L26)

___

### cubType

• `Readonly` **cubType**: ``"vector-field"``

#### Overrides

[Cubicon](/reference/classes/Cubicon.md).[cubType](/reference/classes/Cubicon.md#cubtype)

#### Defined in

[src/svg/cubicons/VectorField.ts:25](https://github.com/imaphatduc/cubecubed/blob/e48fd86/src/svg/cubicons/VectorField.ts#L25)

___

### def\_cubiconBase

• **def\_cubiconBase**: `Selection`<`any`, `unknown`, `HTMLElement`, `any`\>

The HTML tag that represents this cubicon.

#### Inherited from

[Cubicon](/reference/classes/Cubicon.md).[def_cubiconBase](/reference/classes/Cubicon.md#def_cubiconbase)

#### Defined in

[src/svg/cubicons/Cubicon.ts:51](https://github.com/imaphatduc/cubecubed/blob/e48fd86/src/svg/cubicons/Cubicon.ts#L51)

___

### functionDef

• **functionDef**: (`pos`: [`Vector2`](/reference/classes/Vector2.md)) => [`Vector2`](/reference/classes/Vector2.md)

#### Type declaration

▸ (`pos`): [`Vector2`](/reference/classes/Vector2.md)

Multivariable function that produces 2d vector field.

##### Parameters

| Name | Type |
| :------ | :------ |
| `pos` | [`Vector2`](/reference/classes/Vector2.md) |

##### Returns

[`Vector2`](/reference/classes/Vector2.md)

#### Defined in

[src/svg/cubicons/VectorField.ts:30](https://github.com/imaphatduc/cubecubed/blob/e48fd86/src/svg/cubicons/VectorField.ts#L30)

___

### g\_cubiconWrapper

• **g\_cubiconWrapper**: `Selection`<`SVGGElement`, `unknown`, `HTMLElement`, `any`\>

The `<g/>` tag that holds this cubicon.

#### Inherited from

[Cubicon](/reference/classes/Cubicon.md).[g_cubiconWrapper](/reference/classes/Cubicon.md#g_cubiconwrapper)

#### Defined in

[src/svg/cubicons/Cubicon.ts:46](https://github.com/imaphatduc/cubecubed/blob/e48fd86/src/svg/cubicons/Cubicon.ts#L46)

___

### group

• **group**: [`Group`](/reference/classes/Group.md)

The group that this cubicon belongs to.

#### Inherited from

[Cubicon](/reference/classes/Cubicon.md).[group](/reference/classes/Cubicon.md#group)

#### Defined in

[src/svg/cubicons/Cubicon.ts:14](https://github.com/imaphatduc/cubecubed/blob/e48fd86/src/svg/cubicons/Cubicon.ts#L14)

___

### moveAngle

• **moveAngle**: `number` = `0`

The sum of all rotate angles (if invoking rotate animation).

#### Inherited from

[Cubicon](/reference/classes/Cubicon.md).[moveAngle](/reference/classes/Cubicon.md#moveangle)

#### Defined in

[src/svg/cubicons/Cubicon.ts:36](https://github.com/imaphatduc/cubecubed/blob/e48fd86/src/svg/cubicons/Cubicon.ts#L36)

___

### moveVector

• **moveVector**: [`Vector2`](/reference/classes/Vector2.md)

The sum vector of all translate vectors (if invoking translate animation).

#### Inherited from

[Cubicon](/reference/classes/Cubicon.md).[moveVector](/reference/classes/Cubicon.md#movevector)

#### Defined in

[src/svg/cubicons/Cubicon.ts:31](https://github.com/imaphatduc/cubecubed/blob/e48fd86/src/svg/cubicons/Cubicon.ts#L31)

___

### position

• **position**: [`Vector2`](/reference/classes/Vector2.md)

Position of this cubicon.
This property changed after finishing animations (in real time).

#### Inherited from

[Cubicon](/reference/classes/Cubicon.md).[position](/reference/classes/Cubicon.md#position)

#### Defined in

[src/svg/cubicons/Cubicon.ts:20](https://github.com/imaphatduc/cubecubed/blob/e48fd86/src/svg/cubicons/Cubicon.ts#L20)

___

### svg\_group

• **svg\_group**: `Selection`<`SVGSVGElement`, `unknown`, `HTMLElement`, `any`\>

The `<svg/>` tag of this cubicon's group.

#### Inherited from

[Cubicon](/reference/classes/Cubicon.md).[svg_group](/reference/classes/Cubicon.md#svg_group)

#### Defined in

[src/svg/cubicons/Cubicon.ts:41](https://github.com/imaphatduc/cubecubed/blob/e48fd86/src/svg/cubicons/Cubicon.ts#L41)

___

### vectorShapes

• **vectorShapes**: [`VectorShape`](/reference/classes/VectorShape.md)[] = `[]`

Vector shapes included in the scene.

#### Defined in

[src/svg/cubicons/VectorField.ts:35](https://github.com/imaphatduc/cubecubed/blob/e48fd86/src/svg/cubicons/VectorField.ts#L35)

## Methods

### render

▸ **render**(): [`VectorField`](/reference/classes/VectorField.md)

#### Returns

[`VectorField`](/reference/classes/VectorField.md)

#### Defined in

[src/svg/cubicons/VectorField.ts:80](https://github.com/imaphatduc/cubecubed/blob/e48fd86/src/svg/cubicons/VectorField.ts#L80)

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

[src/svg/cubicons/Cubicon.ts:63](https://github.com/imaphatduc/cubecubed/blob/e48fd86/src/svg/cubicons/Cubicon.ts#L63)
