# Point

extends from Cubicon.

## Constructor

```js
new Point({
    projectorGroup: d3 Selector,
    axes: Axes,
    position: Vector2 = new Vector2(0, 0),
    radius: Number,
    fillColor: String = "none",
    fillOpacity: Number = 1,
    strokeColor: String = "#fff",
    strokeWidth: Number = 2,
});
```

## Properties

See [Cubicon()](./reference/cubicon/cubicon.md) properties.

> #### .projectorGroup: d3 Selector

d3 Selector of the `<g />` tag that contains the point and its projectors on the graph.

> #### .axes: Axes

The Axes object that the point belongs to.

> #### .radius: Number

Radius of the point.

> #### .fillColor: String

Fill color of the point.

> #### .fillOpacity: Number

Fill opacity of the point's fill. (from 0 to 1)

> #### .strokeColor: String

Stroke color of the point.

> #### .strokeWidth: Number

Stroke width of the point.

## Methods

No method is attached to this class.
