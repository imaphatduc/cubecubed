# AxisProjector

extends from Cubicon.

## Constructor

```js
new AxisProjector({
    projectorGroup: d3 Selector,
    axes: Axes,
    startPoint: Vector2 = new Vector2(0, 0),
    endPoint: Vector2,
    lineColor: String = "#fff",
    lineWidth: Number = 2,
})
```

## Properties

See [Cubicon()](./reference/cubicon/cubicon.md) properties.

> #### .projectorGroup: d3 Selector

d3 Selector of the `<g />` tag that contains the projector on the graph.

> #### .axes: Axes

The Axes object that the projector belongs to.

> #### .startPoint: Vector2

Tail of the projector.

> #### .endPoint: Vector2

Head of the projector.

> #### .lineColor: String

Color of the projector.

> #### .lineWidth: Number

Width of the projector.

## Getters

> #### .WstartPoint: Number

Tail of the projector (in SVG-Cartesian coordinates system).

> #### .WendPoint: Number

Head of the projector (in SVG-Cartesian coordinates system).

## Methods

No method is attached to this class.
