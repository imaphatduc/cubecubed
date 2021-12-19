# Grid

extends from Cubicon.

## Constructor

```js
new Grid({ group: Group, hasNums: Boolean });
```

## Properties

## Properties

See [Cubicon()](./reference/cubicon/cubicon.md) properties.

> #### .group: Group

The group that the grid belongs to. (in other words, the svg that the grid belongs to)

> #### .lineColor: String

The color of grid lines. Default is COLOR.BLUE_2.

> #### .originColor: String

The color of the origin circle. Default is COLOR.WHITE.

> #### .xAxesColor: String

The color of the x axis. Default is COLOR.RED_2.

> #### .yAxesColor: String

The color of the y axis. Default is COLOR.GREEN_1.

> #### .svg: d3 Selector

d3 selector of this.group's svg tag.

> #### .elapsedTime: Number

The time passed by (in milliseconds) during the animations of this grid.

> #### .drawTime: Number

Total time (in milliseconds) needed to finish drawing the grid (through the Create() animation).

> #### .hasNums: Boolean

Whether the grid has numbers or not.

## Methods

No method is attached to this class.
