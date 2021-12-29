# Cubicon

!> Note: Cubicon cannot be used directly.

## Child Classes

### [Geometry](/reference/cubicon/geometry/geometry.md)

### [Grid](/reference/cubicon/grid.md)

A grid on the screen. (commonly used as vector space)

### [Axes](/reference/cubicon/coordinatesSys/axes.md)

Axes in Cartesian coordinate system.

### [Graph](/reference/cubicon/coordinatesSys/graph.md)

A graph plotted by a function.

### [MathText](/reference/cubicon/mathtext.md)

Math texts rendered by KaTeX.

## Properties

> #### .group: Group

The group that the cubicon belongs to. (In other words, the svg that the cubicon path belongs to)

> #### .position: Vector2

The position of the cubicon.

> #### .moveVector: Vector2

The total vector the cubicon has moved.

> #### .angle: Number

The angle between the cubicon and the x axis.

> #### .svg: d3 Selector

d3 selector of this.group's svg tag.

> #### .elapsedTime: Number

The time passed by (in milliseconds) during the animations of this cubicon.

> #### .stroke: d3 Selector

d3 selector of this cubicon's svg element.

## Methods

No method is attached to this class.
