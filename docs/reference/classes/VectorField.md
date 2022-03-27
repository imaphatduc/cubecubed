[cubecubed](/reference/README.md) / [Exports](/reference/modules.md) / VectorField

# Class: VectorField

## Hierarchy

- `Cubicon`

  ↳ **`VectorField`**

## Constructors

### constructor

• **new VectorField**(`params`)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | `Object` | - |
| `params.CONFIG?` | `VECTOR_FIELD_CONFIG` | - |
| `params.group` | [`Group`](/reference/classes/Group.md) | The group that the cubicon belongs to. |
| `params.functionDef` | (`pos`: [`Vector2`](/reference/classes/Vector2.md)) => [`Vector2`](/reference/classes/Vector2.md) | - |

#### Overrides

Cubicon.constructor

#### Defined in

[src/svg/cubicons/VectorField.ts:30](https://github.com/imaphatduc/cubecubed/blob/1251e31/src/svg/cubicons/VectorField.ts#L30)

## Properties

### angle

• **angle**: `number` = `0`

The angle between this cubicon and the x axis.
This property changed after finishing animations (in real time).

#### Inherited from

Cubicon.angle

#### Defined in

[src/svg/cubicons/Cubicon.ts:26](https://github.com/imaphatduc/cubecubed/blob/1251e31/src/svg/cubicons/Cubicon.ts#L26)

___

### cubType

• `Readonly` **cubType**: ``"vector-field"``

#### Overrides

Cubicon.cubType

#### Defined in

[src/svg/cubicons/VectorField.ts:18](https://github.com/imaphatduc/cubecubed/blob/1251e31/src/svg/cubicons/VectorField.ts#L18)

___

### def\_cubiconBase

• **def\_cubiconBase**: `any`

The HTML tag that represents this cubicon.

#### Inherited from

Cubicon.def\_cubiconBase

#### Defined in

[src/svg/cubicons/Cubicon.ts:51](https://github.com/imaphatduc/cubecubed/blob/1251e31/src/svg/cubicons/Cubicon.ts#L51)

___

### elapsedTime

• **elapsedTime**: `number` = `0`

Total time of all called animations (in milliseconds).

#### Inherited from

Cubicon.elapsedTime

#### Defined in

[src/svg/cubicons/Cubicon.ts:56](https://github.com/imaphatduc/cubecubed/blob/1251e31/src/svg/cubicons/Cubicon.ts#L56)

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

[src/svg/cubicons/VectorField.ts:23](https://github.com/imaphatduc/cubecubed/blob/1251e31/src/svg/cubicons/VectorField.ts#L23)

___

### g\_cubiconWrapper

• **g\_cubiconWrapper**: `any`

The `<g/>` tag that holds this cubicon.

#### Inherited from

Cubicon.g\_cubiconWrapper

#### Defined in

[src/svg/cubicons/Cubicon.ts:46](https://github.com/imaphatduc/cubecubed/blob/1251e31/src/svg/cubicons/Cubicon.ts#L46)

___

### group

• **group**: [`Group`](/reference/classes/Group.md)

The group that this cubicon belongs to.

#### Inherited from

Cubicon.group

#### Defined in

[src/svg/cubicons/Cubicon.ts:14](https://github.com/imaphatduc/cubecubed/blob/1251e31/src/svg/cubicons/Cubicon.ts#L14)

___

### isRendered

• **isRendered**: `boolean` = `false`

#### Inherited from

Cubicon.isRendered

#### Defined in

[src/svg/cubicons/Cubicon.ts:58](https://github.com/imaphatduc/cubecubed/blob/1251e31/src/svg/cubicons/Cubicon.ts#L58)

___

### moveAngle

• **moveAngle**: `number` = `0`

The sum of all rotate angles (if invoking rotate animation).

#### Inherited from

Cubicon.moveAngle

#### Defined in

[src/svg/cubicons/Cubicon.ts:36](https://github.com/imaphatduc/cubecubed/blob/1251e31/src/svg/cubicons/Cubicon.ts#L36)

___

### moveVector

• **moveVector**: [`Vector2`](/reference/classes/Vector2.md)

The sum vector of all translate vectors (if invoking translate animation).

#### Inherited from

Cubicon.moveVector

#### Defined in

[src/svg/cubicons/Cubicon.ts:31](https://github.com/imaphatduc/cubecubed/blob/1251e31/src/svg/cubicons/Cubicon.ts#L31)

___

### position

• **position**: [`Vector2`](/reference/classes/Vector2.md)

Position of this cubicon.
This property changed after finishing animations (in real time).

#### Inherited from

Cubicon.position

#### Defined in

[src/svg/cubicons/Cubicon.ts:20](https://github.com/imaphatduc/cubecubed/blob/1251e31/src/svg/cubicons/Cubicon.ts#L20)

___

### svg\_group

• **svg\_group**: `any`

The `<svg/>` tag of this cubicon's group.

#### Inherited from

Cubicon.svg\_group

#### Defined in

[src/svg/cubicons/Cubicon.ts:41](https://github.com/imaphatduc/cubecubed/blob/1251e31/src/svg/cubicons/Cubicon.ts#L41)

___

### vectorShapes

• **vectorShapes**: [`Vector`](/reference/classes/Vector.md)[] = `[]`

Vector shapes included in the scene.

#### Defined in

[src/svg/cubicons/VectorField.ts:28](https://github.com/imaphatduc/cubecubed/blob/1251e31/src/svg/cubicons/VectorField.ts#L28)

## Methods

### checkIfRendered

▸ **checkIfRendered**(): `void`

#### Returns

`void`

#### Inherited from

Cubicon.checkIfRendered

#### Defined in

[src/svg/cubicons/Cubicon.ts:78](https://github.com/imaphatduc/cubecubed/blob/1251e31/src/svg/cubicons/Cubicon.ts#L78)