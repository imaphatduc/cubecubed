# Graph

extends from Cubicon.

!> Note: Direct use is deprecated. Use Axes().graph() instead.

## Constructor

```js
new Graph({
    graphGroup: d3 Selector,
    projectorGroup: d3 Selector,
    position: Vector2,
    axes: Axes,
    path: d3 Selector,
    func: Function,
    xRange: Array,
    createDuration,
});
```

## Properties

See [Cubicon()](./reference/cubicon/cubicon.md) properties.

> #### .graphGroup: d3 Selector

d3 Selector of the `<svg />` tag that contains the graph's <path />.

> #### .projectorGroup: d3 Selector

d3 Selector of the `<g />` tag that contains points' projectors on the graph.

> #### .axes: Axes

The Axes object that the graph belongs to.

> #### .stroke: d3 Selector

d3 Selector of the `<path />` tag.

> #### .createDuration: Number

Time (in milliseconds) taken to draw the graph.

> #### .xRange: Array

x range of the graph.

> #### .func: Function

The function of the graph.

## Methods

No method is attached to this class.
