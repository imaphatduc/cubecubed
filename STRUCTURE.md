# Geometry HTML Structure

## Tree View

```html
:
|`<svg id="cubecubed" >`
|\
| \__ `<svg id="group-name" >`
| |
|
| @Circle > @GridOrigin
| |\
| | \** `<g class="circle-wrapper" >`
| | |\
| | | \** `<circle />`
| |
|
| @Line > @AxisProjector
| |\
| | \** `<g class="line-wrapper" >`
| | |\
| | | \** `<line />`
| |
|
| @ParametricCurve
| |\
| | \** `<g class="parametric-curve-wrapper" >`
| | |\
| | | \** `<path />`
| |
|
| @Rectangle > @Square
| |\ 
| | \** `<g class="rectangle-wrapper" >`
| | |\
| | | \** `<path />`
| |
|
| @VectorShape
| |\
| | \** `<g class="vector-wrapper" >`
| | |\
| | | \** `<g class="vector-group" >`
| | | |\
| | | | *---.def_lineStroke
| | | | |__ `<line class="vector-line" />`
| | | | |
| | | | *---.def_arrowHead
| | | | |__ `<polygon class="vector-arrow-head" />`
| 
```

# Coordinate System HTML Structure

## Tree View

```html
:
|`<svg id="cubecubed" >`
|\
| \__ `<svg id="group-name" >`
| |

@Axes
| |\
| | \__ `<g class="xy-coordinate" >`
| | |\
| | | *---.g_axes
| | | |__ `<g class="axes" >`
| | | |\
| | | | \__ `<g class="x-axis" >`
| | | | |
| | | | |__ `<g class="y-axis" >`
| | |  
| | |\ 
| | | *--- .g_graphs
| | | |__ `<g class="graphs" >`
| | | |
| | |
| | | @Graph
| | | |\
| | | | \** `<g class="graph-wrapper" >`
| | | | |\
| | | | | \** `<path class="graph" />`
| | |
| | | @Label
| | | |\
| | | | \** `<g class="graph-label-wrapper" >`
| | | | |\
| | | | | \** `<svg >`
| | |
| | | @AxisProjector
| | | |\
| | | | \** `<g class={
| | | | |\      "horizontal-projector-wrapper" ||
| | | | |       "vertical=projector-wrapper"
| | | | |   }>`
| | | | |\
| | | | | \** `<line class={
| | | | | |\         "horizontal-projector-line ||
| | | | | |          "vertical-projector-line"
| | | | | | }/>`
| | |
```
