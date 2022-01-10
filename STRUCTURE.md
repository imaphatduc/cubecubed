# Geometry HTML Structure

## Tree View

```html
:
|`<svg id="viz" >`
|\
| \
| |`<svg id="scene-name" >`
| |\
| | \_ `<svg id="group-name" >`
| | |
| | |\ 
| | | \__ `<g class="rectangle-wrapper" >`
| | | |\
| | | | \___ `<path />` (for Rectangle() and Square())
| | | | |
| | | | |___ `<g class="rect-inner-grid" >`
| | | | |
| | | | |___ `<g class="lines-to-sides" >`
| | |
| | |\
| | | \__ `<g class="circle-wrapper" >`
| | | |\
| | | | \___ `<circle />`, `<line />`, etc.
| | |
| | |\
| | | \__ `<g class="vector-wrapper" >`
| | | |\
| | | | \___ `<g class="vector-group" >`
| | | | |\
| | | | | \____ `<line class="vector-line" />`
| | | | | |
| | | | | |____ `<polygon class="vector-arrow-head" />`
```

## Plain HTML View

```html
<!-- Cubicon().svg -->
<svg id="viz">                                  
    <svg id="scene-name">                       
        <!-- this.svg_group -->
        <svg id="group-name">
            <!-- Rectangle().g_cubiconWrapper -->
            <g class="rectangle-wrapper">           
                <!-- this.def_cubiconBase -->
                <path class="rectangle" />      

                <!-- after calling this.drawInnerGrid() -->
                <g class="rect-inner-grid" />   

                <!-- after calling this.pointToSides(...) -->
                <g class="lines-to-sides" />    
            </g>

            <!-- Circle().g_cubiconWrapper -->
            <g class="circle-wrapper">
                <!-- this.def_cubiconBase -->
                <circle class="circle" />
            </g>

            <!-- Vector().g_cubiconWrapper -->
            <g class="vector-wrapper">
                <!-- this.def_cubiconBase -->
                <g class="vector-group">
                    <!-- this.def_lineStroke -->
                    <line class="vector-line" />

                    <!-- this.def_arrowHead -->
                    <polygon class="vector-arrow-head">
                </g>
            </g>
        </svg>
    </svg>
</svg>
```

# Coordinate System Structure

## Tree View

```html
:
|`<svg id="viz" >`
|\
| \
| |`<svg id="scene-name" >`
| |\
| | \_ `<svg id="group-name" >`
| | |
| | |\
| | | \__ `<g class="xy-coordinate" >`
| | | |\
| | | | \___ `<g class="axes" >`
| | | | |\
| | | | | \____ `<g class="x-axis" >`
| | | | | |
| | | | | |____ `<g class="y-axis" >`
| | | | |
| | | | |___ `<g class="graphs" >`
| | | | |\
| | | | | \____ `<g class="graph-group" >`
| | | | | |\
| | | | | | \_____ `<path class="graph" />`
| | | | | | |
| | | | | | |_____ `<foreignObject class="graph-label" >`
| | | | | | |
| | | | | | |_____ `<g class="projector-group" >`
| | | | | | |\
| | | | | | | \______ `<circle class="point" />`
| | | | | | | |
| | | | | | | |______ `<g class="horizontal-projector-wrapper" >`
| | | | | | | |\
| | | | | | | | \_______ `<line class="horizontal-projector-line" />`
| | | | | | | |
| | | | | | | |______ `<g class="vertical-projector-wrapper" >`
| | | | | | | |\
| | | | | | | | \_______ `<line class="vertical-projector-line" />`
```

## Plain HTML View

```html
<!-- Cubicon().svg -->
<svg id="viz">                                  
    <svg id="scene-name">                       
        <!-- this.svg_group -->
        <svg id="group-name">
            <!-- CoordinateSystem().g_coordinate -->
            <g class="xy-coordinate">
                <!-- Axes().g_axes -->
                <g class="axes">
                    <!-- Axes().xAxis -->
                    <g class="x-axis" >

                    <!-- Axes().yAxis -->
                    <g class="y-axis" >
                </g>

                <!-- Axes().g_graphs -->
                <g class="graphs">
                    <!-- Graph().g_cubiconWrapper -->
                    <g class="graph-group">
                        <!-- Graph().def_cubiconBase -->
                        <path class="graph" />

                        <!-- Label().def_cubiconBase -->
                        <foreignObject class="graph-label" >

                        <!-- Graph().g_projector -->
                        <g class="projector-group">
                            <!-- Point().def_cubiconBase -->
                            <circle class="point" />

                            <!-- AxisProjector().g_cubiconWrapper -->
                            <g class="horizontal-projector-wrapper">
                                <!-- AxisProjector().def_cubiconBase -->
                                <line class="horizontal-projector-line" />
                            </g>

                            <!-- AxisProjector().g_cubiconWrapper -->
                            <g class="vertical-projector-wrapper">
                                <!-- AxisProjector().def_cubiconBase -->
                                <line class="vertical-projector-line" />
                            </g>
                        </g>
                    </g>
                </g>
            </g>
        </svg>
    </svg>
</svg>
```

