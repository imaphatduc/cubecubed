# Axes

## Constructor

```js
new Axes({
    group: Group,
    position: (Vector2 = new Vector2(0, 0)),
    xRange: (Array = [0, 0]),
    xLength: (Number = 50),
    yRange: (Array = [0, 0]),
    yLength: (Array = 50),
    hasNums: (Boolean = false),
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

d3 selector of the <g> element which represents everything inside the axes's plane.

> #### .axes: d3 Selector

d3 selector of the <g> element which represents the whole axes HTML element.

> #### .xAxes: d3 Selector

d3 selector of the <g> element that holds the x axis.

> #### .yAxes: d3 Selector

d3 selector of the <g> element that holds the y axis.

> #### .graphs: d3 Selector

d3 selector of the <g> element that holds the graphs plotted.

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

> #### .create(graphs)

Play the graph's creation animation.

##### Parameters:

> > graphs: Array

Array of graphs to play the animation.
