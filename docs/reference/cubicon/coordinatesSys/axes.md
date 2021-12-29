# Axes

extends from Cubicon.

## Constructor

```js
new Axes({
    group: Group,
    position: Vector2 = new Vector2(0, 0),
    xRange: Array = [0, 0],
    xLength: Number = 50,
    yRange: Array = [0, 0],
    yLength: Array = 50,
    hasNums: Boolean = false,
});
```

## Properties

See [Cubicon()](./reference/cubicon/cubicon.md) properties.

### Basic properties

> #### .xRange: Array

Range of the x axis.

> #### .xLength: Number

Length (in pixels) of one x unit

> #### .yRange: Array

Range of the y axis.

> #### .yLength: Number

Length (in pixels) of one y unit

> #### .func: Array

Array of functions of the axes' graphs.

> #### .xScale: d3 Scale

Method to scale from x axis coordinate to svg coordinate.

> #### .yScale: d3 Scale

Method to scale from y axis coordinate to svg coordinate.

> #### .hasNums: Boolean

Whether the axes has numbers or not.

### d3 Selector Properties

> #### .coordinate: d3 Selector

d3 selector of the `<g />` tag which represents everything inside the axes' plane.

> #### .axes: d3 Selector

d3 selector of the `<g />` tag which represents the whole axes' HTML tag.

> #### .xAxis: d3 Selector

d3 selector of the `<g />` tag that holds the x axis.

> #### .yAxis: d3 Selector

d3 selector of the `<g />` tag that holds the y axis.

> #### .graphs: d3 Selector

d3 selector of the `<g />` tag that holds the graphs plotted.

## Methods

> #### .graph({ func, xRange = this.xRange, color = "#fff", createDuration })

Plotting a graph onto coordinate plane.

##### Parameters:

> > func: Function

The function of the graph.

> > xRange: Array

Range of the graph's x coordinate.

> > color: String

Color of the graph.

> > createDuration: Number

Duration of the graph's creation animation.

##### Return Value:

A Graph object.

> #### .addGraphLabel(graph, text, xPos = graph.xRange[1])

Add a label on a graph at the specified x position (xPos) (default is the final point of the graph).

##### Parameters:

> > graph: Graph

The graph to put the label on.

> > text: String

The label text.

> > xPos: Number

The x position of the label's position on the graph.

##### Return Value:

A Label object.

> #### .pointOnGraph(graph, xPos)

Add a point on a graph at the specified x position (xPos).

##### Parameters:

> > graph: Graph

The graph to put the point on.

> > xPos: Number

The x position of the point's position on the graph.

##### Return Value:

An object: { point: Point }

> #### .pointToCoords(graph, xPos)

Add a point and axes projectors on a graph at the specified x position (xPos).

##### Parameters:

> > graph: Graph

The graph to put the point on.

> > xPos: Number

The x position of the point's position on the graph.

##### Return Value:

An object: { point: Point, lines: [ *Array of the axes projectors* ] } (axis projector is of the AxisProjector class).
