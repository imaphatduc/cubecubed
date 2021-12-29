# Vector

extends from Geometry.

## Constructor

```js
new Vector({
    group,
    startPoint = new Vector2(0, 0),
    endPoint,
    vectColor = "#fff",
    vectStrokeWidth = 2,
});
```

## Properties

See [Cubicon()](./reference/cubicon/cubicon.md) properties.

> #### .startPoint: Vector2

Tail of the vector shape.

> #### .endPoint: Vector2

Head of the vector shape.

> #### .vectColor: String

Color of the vector shape.

> #### .vectStrokeWidth: Number

Line width of the vector shape.

> #### .theta: Number

Angle (in degrees) between the vector's arrow and its line.

## Getters

> #### .WstartPoint: Number

Tail of the line (in SVG-Cartesian coordinates system).

> #### .WendPoint: Number

Head of the line (in SVG-Cartesian coordinates system).

## Methods

No method is attached to this class.
