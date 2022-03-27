[cubecubed](/reference/README.md) / [Exports](/reference/modules.md) / EASE

# Variable: EASE

• `Const` **EASE**: `Object`

Default ease functions
- Form: `<name>_<option>`
- Available options:
  . IN
  . OUT
- Available names:
  . POLY
  . QUAD
  . CUBIC
  . SIN
  . EXP
  . CIRCLE
  . ELASTIC
  . BACK
  . BOUNCE

Example Usage: EASE.POLY_IN

#### Type declaration

| Name | Type |
| :------ | :------ |
| `BACK` | `BackEasingFactory` |
| `BACK_IN` | `BackEasingFactory` |
| `BACK_OUT` | `BackEasingFactory` |
| `BOUNCE_IN` | (`normalizedTime`: `number`) => `number` |
| `BOUNCE_INOUT` | (`normalizedTime`: `number`) => `number` |
| `BOUNCE_OUT` | (`normalizedTime`: `number`) => `number` |
| `CIRCLE` | (`normalizedTime`: `number`) => `number` |
| `CIRCLE_IN` | (`normalizedTime`: `number`) => `number` |
| `CIRCLE_OUT` | (`normalizedTime`: `number`) => `number` |
| `CUBIC` | (`normalizedTime`: `number`) => `number` |
| `CUBIC_IN` | (`normalizedTime`: `number`) => `number` |
| `CUBIC_OUT` | (`normalizedTime`: `number`) => `number` |
| `ELASTIC_IN` | `ElasticEasingFactory` |
| `ELASTIC_INOUT` | `ElasticEasingFactory` |
| `ELASTIC_OUT` | `ElasticEasingFactory` |
| `EXP` | (`normalizedTime`: `number`) => `number` |
| `EXP_IN` | (`normalizedTime`: `number`) => `number` |
| `EXP_OUT` | (`normalizedTime`: `number`) => `number` |
| `LINEAR` | (`normalizedTime`: `number`) => `number` |
| `POLY` | `PolynomialEasingFactory` |
| `POLY_IN` | `PolynomialEasingFactory` |
| `POLY_OUT` | `PolynomialEasingFactory` |
| `QUAD` | (`normalizedTime`: `number`) => `number` |
| `QUAD_IN` | (`normalizedTime`: `number`) => `number` |
| `QUAD_OUT` | (`normalizedTime`: `number`) => `number` |
| `SIN` | (`normalizedTime`: `number`) => `number` |
| `SIN_IN` | (`normalizedTime`: `number`) => `number` |
| `SIN_OUT` | (`normalizedTime`: `number`) => `number` |

#### Defined in

[src/constants.ts:104](https://github.com/imaphatduc/cubecubed/blob/1251e31/src/constants.ts#L104)
