# Graph

extends from Cubicon.

!> Note: Direct use is deprecated. Use Axes().graph() instead.

## Constructor

```js
new Graph({
    group: Group,
    position: Vector2,
    path: d3 Selector,
    func: Function,
    xRange: Array,
    createDuration,
});
```

## Properties

See [Cubicon()](./reference/cubicon/cubicon.md) properties.

> #### .stroke: d3 Selector

This will override Cubicon().stroke.

> #### .createDuration: Number

Time (in milliseconds) taken to draw the graph.

> #### .xRange: Array

x range of the graph.

> #### .func: Function

The function of the graph.

## Methods

No method is attached to this class.
