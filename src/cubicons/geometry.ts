import { path } from "d3-path";
import { range } from "d3-array";
//+++++++++++++++++++++++++++++++++++++++++++++++++++//
import { Group } from "../scene/group";
import { Cubicon } from "./cubicon";
import { rToD, xGtoW, yGtoW, xWtoG } from "../math/convertUnit";
import { Vector2 } from "../math/vector";
import { COLOR, PT_TO_SIDES_DATA, RECT_GRID_DATA } from "./constants";

/**
 * Configuration structure of basic shapes (Rectangle, Square and Circle).
 *
 * If this is not specified, then fall back to all of the default values.
 */
export interface SHAPE_CONFIG {
    /**
     * @default "none"
     */
    fillColor?: string;
    /**
     * @default 1
     */
    fillOpacity?: number;
    /**
     * @default "#fff"
     */
    strokeColor?: string;
    /**
     * @default 2
     */
    strokeWidth?: number;
}
export const SHAPE_DEFAULT_CONFIG = {
    fillColor: "none",
    fillOpacity: 1,
    strokeColor: "#fff",
    strokeWidth: 2,
};

/**
 * Configuration structure of line-like shapes (Line and Vector).
 *
 * If this is not specified, then fall back to all of the default values.
 */
export interface LINE_CONFIG {
    /**
     * @default "#fff"
     */
    lineColor?: string;
    /**
     * @default 2
     */
    lineWidth?: number;
}
export const LINE_DEFAULT_CONFIG = {
    lineColor: "#fff",
    lineWidth: 2,
};

export abstract class Geometry extends Cubicon {
    readonly cubType = "geometry";
    abstract readonly geoType: string;

    g_shapeWrapper: any;

    // For geometry (Geometry)
    protected fillColor: any;
    protected fillOpacity: any;
    protected strokeColor: any;
    protected strokeWidth: any;

    // For line-like objects (Line | Vector | AxisProjector)
    protected lineStroke: any;
    protected lineColor: any;
    protected lineWidth: any;

    // For vector (Vector)
    arrowHead: any;

    constructor({
        group,
        position = new Vector2(0, 0),
    }: {
        group: Group;
        position?: Vector2 | undefined;
    }) {
        super({ group: group, position: position });

        this.group = group;
    }

    coordsGtoW(point: Vector2) {
        return new Vector2(xGtoW(point.x), yGtoW(point.y));
    }
}

/**
 * Return the barebone of a rectangle shape.
 */
export class Rectangle extends Geometry {
    /**
     * Geometry type of the rectangle.
     */
    readonly geoType = "rectangle";

    /**
     * Width of the rectangle (in grid coordinate system).
     */
    readonly width: number;
    /**
     * Height of the rectangle (in grid coordinate system).
     *
     * @internal
     */
    readonly height: number;

    /**
     * @param params Options to form the rectangle.
     */
    constructor(params: {
        /**
         * The group that the rectangle belongs to.
         */
        group: Group;
        /**
         * Position of the rectangle.
         */
        position?: Vector2 | undefined;
        /**
         * Width of the rectangle.
         */
        width: number;
        /**
         * Height of the rectangle.
         */
        height: number;
        /**
         * Config options of the rectangle.
         */
        CONFIG?: SHAPE_CONFIG | undefined;
    }) {
        super({ group: params.group, position: params.position });

        this.width = params.width;

        this.height = params.height;

        ({
            fillColor: this.fillColor = SHAPE_DEFAULT_CONFIG.fillColor,
            fillOpacity: this.fillOpacity = SHAPE_DEFAULT_CONFIG.fillOpacity,
            strokeColor: this.strokeColor = SHAPE_DEFAULT_CONFIG.strokeColor,
            strokeWidth: this.strokeWidth = SHAPE_DEFAULT_CONFIG.strokeWidth,
        } = params.CONFIG ?? SHAPE_DEFAULT_CONFIG);

        this.render();
    }

    /**
     * Add the shape of this rectangle onto SVG.
     */
    private render() {
        this.g_shapeWrapper = this.svg_group
            .append("g")
            .attr("class", `rectangle-wrapper`)
            .style("transform-box", "fill-box")
            .style("transform-origin", `center`);

        const path = this.definePath();
        this.def_cubiconBase = this.g_shapeWrapper.append("path");

        this.def_cubiconBase
            .attr("class", "rectangle")
            .attr("d", path.toString())
            .attr("stroke", this.strokeColor)
            .attr("stroke-width", this.strokeWidth)
            .attr("fill", this.fillColor)
            .attr("fill-opacity", this.fillOpacity);

        this.def_cubiconBase
            .style("transform-box", "fill-box")
            .style("transform-origin", "center");
    }

    /**
     * Draw (not render) a rectangular stroke path.
     */
    private definePath() {
        const Wposition = this.coordsGtoW(this.position);
        const Wwidth = xGtoW(this.width);
        const Wheight = xGtoW(this.height);

        // These are the coordinate of the draw origin
        const X = -Wwidth / 2 + Wposition.x;
        const Y = Wheight / 2 + Wposition.y;

        const rectPath = path();
        rectPath.moveTo(X, Y);
        rectPath.lineTo(X + Wwidth, Y);
        rectPath.lineTo(X + Wwidth, Y - Wheight);
        rectPath.lineTo(X, Y - Wheight);
        rectPath.lineTo(X, Y + (this.strokeWidth ?? 0) / 2);

        return rectPath;
    }

    /**
     * Add lines from the specified point to the rectangle's sides based on x and y directions.
     *
     * @param ptPositions Position of the point.
     *
     * @param direction An array that includes two direction values.
     * If positive (+), then the line moves right (or up), and left (or down) for negative (-).
     *
     * - *Example*: `pointToSides(new Vector2(0, 0), [-1, 1])` will draw two lines from point (0, 0) to the rectangle's sides by two directions:
     *   negatively parallel to x axis (left) and positively parallel to y axis (up).
     *
     * @returns A complex data type to specify in PointToSides() animation.
     */
    pointToSides(
        ptPositions: Vector2[],
        direction: [number, number]
    ): PT_TO_SIDES_DATA {
        // Create a <g/> element to hold the result lines.
        const g_pointToSides = this.g_shapeWrapper.append("g");

        const Wposition = this.coordsGtoW(this.position);
        g_pointToSides
            .attr("class", "lines-to-side")
            .attr("transform", `translate(${Wposition.x}, ${Wposition.y})`);

        const horizontalLines: Line[] = [];
        const verticalLines: Line[] = [];

        const endPoint_x = ((direction[0] >= 0 ? 1 : -1) * this.width) / 2;
        ptPositions.forEach((p) => {
            horizontalLines.push(
                new Line({
                    group: this.group,
                    startPoint: new Vector2(
                        p.x +
                            (p.x >= endPoint_x ? 1 : -1) *
                                xWtoG(this.strokeWidth / 2),
                        p.y
                    ),
                    endPoint: new Vector2(endPoint_x, p.y),
                    CONFIG: {
                        lineColor: this.strokeColor,
                        lineWidth: this.strokeWidth,
                    },
                }).setParentHTMLTag(g_pointToSides)
            );
            verticalLines.push(
                new Line({
                    group: this.group,
                    startPoint: p,
                    endPoint: new Vector2(
                        p.x,
                        ((direction[1] >= 0 ? 1 : -1) * this.height) / 2
                    ),
                    CONFIG: {
                        lineColor: this.strokeColor,
                        lineWidth: this.strokeWidth,
                    },
                }).setParentHTMLTag(g_pointToSides)
            );
        });

        return {
            cubicon: this,
            horizontalLines: horizontalLines,
            verticalLines: verticalLines,
        };
    }

    /**
     * Draw a grid inside the rectangle.
     *
     * @returns A complex data type to specify in DrawInnerGrid() animation.
     */
    drawInnerGrid(): RECT_GRID_DATA {
        // Create a <g/> element to hold the result grid.
        const g_drawInnerGrid = this.g_shapeWrapper.append("g");

        const Wposition = this.coordsGtoW(this.position);
        g_drawInnerGrid
            .attr("class", "rect-inner-grid")
            .attr("transform", `translate(${Wposition.x}, ${Wposition.y})`);

        const horizontalLines: Line[] = [];
        const verticalLines: Line[] = [];

        for (let i of range(-this.width / 2 + 1, this.width / 2, 1)) {
            verticalLines.push(
                new Line({
                    group: this.group,
                    startPoint: new Vector2(i, -this.height / 2),
                    endPoint: new Vector2(i, this.height / 2),
                    CONFIG: {
                        lineColor: COLOR.BLUE_1,
                        lineWidth: 1,
                    },
                }).setParentHTMLTag(g_drawInnerGrid)
            );
        }
        for (let i of range(-this.height / 2 + 1, this.height / 2, 1)) {
            horizontalLines.push(
                new Line({
                    group: this.group,
                    startPoint: new Vector2(-this.width / 2, i),
                    endPoint: new Vector2(this.width / 2, i),
                    CONFIG: {
                        lineColor: COLOR.BLUE_1,
                        lineWidth: 1,
                    },
                }).setParentHTMLTag(g_drawInnerGrid)
            );
        }

        return {
            cubicon: this,
            horizontalLines: horizontalLines,
            verticalLines: verticalLines,
        };
    }
}

/**
 * Return the barebone of a square shape.
 */
export class Square extends Rectangle {
    /**
     * @param params An object that contains options to form the square.
     */
    constructor(params: {
        /**
         * The group that the square belongs to.
         */
        group: Group;
        /**
         * Position of the square.
         */
        position?: Vector2;
        /**
         * Side length of the square.
         */
        sideLength: number;
        /**
         * Config options of the square.
         */
        CONFIG?: SHAPE_CONFIG;
    }) {
        super({
            group: params.group,
            position: params.position,
            width: params.sideLength,
            height: params.sideLength,
            CONFIG: params.CONFIG,
        });
    }
}

/**
 * Return the barebone of a circle shape.
 */
export class Circle extends Geometry {
    /**
     * Geometry type of the circle.
     */
    readonly geoType = "circle";

    /**
     * Radius of the rectangle (in grid coordinate system).
     */
    readonly radius: number;

    /**
     * @param params An object that contains options to form the circle.
     */
    constructor(params: {
        /**
         * The group that the circle belongs to.
         */
        group: Group;
        /**
         * Position of the circle.
         */
        position?: Vector2;
        /**
         * Radius of the rectangle.
         */
        radius: number;
        /**
         * Config options of the circle.
         */
        CONFIG?: SHAPE_CONFIG;
    }) {
        super({ group: params.group, position: params.position });

        this.radius = params.radius;

        ({
            fillColor: this.fillColor = SHAPE_DEFAULT_CONFIG.fillColor,
            fillOpacity: this.fillOpacity = SHAPE_DEFAULT_CONFIG.fillOpacity,
            strokeColor: this.strokeColor = SHAPE_DEFAULT_CONFIG.strokeColor,
            strokeWidth: this.strokeWidth = SHAPE_DEFAULT_CONFIG.strokeWidth,
        } = params.CONFIG ?? SHAPE_DEFAULT_CONFIG);

        this.render();
    }

    /**
     * Draw (and render) the shape of this circle onto SVG.
     */
    private render() {
        this.g_shapeWrapper = this.svg_group
            .append("g")
            .attr("class", `circle-wrapper`)
            .style("transform-box", "fill-box")
            .style("transform-origin", `center`);

        const Wposition = this.coordsGtoW(this.position);
        const Wradius = xGtoW(this.radius);

        this.def_cubiconBase = this.g_shapeWrapper
            .append("circle")
            .attr("class", "circle")
            .attr("cx", Wposition.x)
            .attr("cy", Wposition.y)
            .attr("r", Wradius)
            .attr("fill", this.fillColor)
            .attr("fill-opacity", this.fillOpacity)
            .attr("stroke", this.strokeColor)
            .attr("stroke-width", this.strokeWidth);

        this.def_cubiconBase
            .style("transform-box", "fill-box")
            .style("transform-origin", "center");
    }
}

export class GridOrigin extends Circle {
    constructor(group: Group) {
        super({
            group: group,
            radius: xWtoG(2.2),
        });

        this.g_shapeWrapper.attr("id", "grid-origin-wrapper");

        this.def_cubiconBase.attr("id", "grid-origin");
    }
}

/**
 * Return the barebone of a line shape.
 */
export class Line extends Geometry {
    /**
     * Geometry type of the line.
     */
    readonly geoType = "line";

    /**
     * Start point (tail) of the line.
     */
    readonly startPoint: Vector2;
    /**
     * End point (head) of the line.
     */
    readonly endPoint: Vector2;

    private parentGroupTag = this.svg_group;

    constructor(params: {
        /**
         * The group that the line belongs to.
         */
        group: Group;
        /**
         * Start point (tail) of the line.
         */
        startPoint?: Vector2;
        /**
         * End point (head) of the line.
         */
        endPoint: Vector2;
        /**
         * Config options of the line.
         */
        CONFIG?: LINE_CONFIG;
    }) {
        super({ group: params.group, position: params.startPoint });

        this.startPoint =
            typeof params.startPoint !== "undefined"
                ? new Vector2(params.startPoint.x, params.startPoint.y)
                : new Vector2(0, 0);

        this.endPoint = new Vector2(params.endPoint.x, params.endPoint.y);

        ({
            lineColor: this.lineColor = LINE_DEFAULT_CONFIG.lineColor,
            lineWidth: this.lineWidth = LINE_DEFAULT_CONFIG.lineWidth,
        } = params.CONFIG ?? LINE_DEFAULT_CONFIG);

        this.render();
    }

    /**
     * Draw (and render) the shape of this line onto SVG.
     */
    private render() {
        const WstartPoint = this.coordsGtoW(this.startPoint);
        const WendPoint = this.coordsGtoW(this.endPoint);

        this.g_shapeWrapper = this.parentGroupTag
            .append("g")
            .attr("class", `line-wrapper`)
            .style("transform-box", "fill-box")
            .style("transform-origin", `center`);

        this.lineStroke = this.g_shapeWrapper
            .append("line")
            .attr("class", "line")
            .attr("x1", WstartPoint.x)
            .attr("y1", WstartPoint.y)
            .attr("x2", WendPoint.x)
            .attr("y2", WendPoint.y)
            .attr("stroke", this.lineColor)
            .attr("stroke-width", this.lineWidth);
    }

    getWpoint(point: Vector2) {
        return this.coordsGtoW(point);
    }

    setParentHTMLTag(parentGroupTag: any) {
        this.g_shapeWrapper.remove();
        this.parentGroupTag = parentGroupTag;
        this.render();

        return this;
    }

    setParent(parent: Geometry) {
        this.g_shapeWrapper.remove();
        this.parentGroupTag = parent.g_shapeWrapper;
        this.render();

        return this;
    }
}

export class Vector extends Geometry {
    /**
     * Geometry type of the vector.
     */
    readonly geoType = "vector";

    /// These have to be public to use in Create animations
    /**
     * Start point (tail) of the vector.
     */
    readonly startPoint: Vector2;
    /**
     * End point (head) of the vector.
     */
    readonly endPoint: Vector2;

    /**
     * The smaller angle (in degree) between the vector and the x axis.
     */
    theta: number;

    lineStroke: any;
    arrowHead: any;

    constructor(params: {
        /**
         * The group that the vector belongs to.
         */
        group: Group;
        /**
         * Start point (tail) of the vector.
         */
        startPoint?: Vector2;
        /**
         * End point (head) of the vector.
         */
        endPoint: Vector2;
        /**
         * Config options of the vector line.
         */
        CONFIG?: LINE_CONFIG;
    }) {
        super({
            group: params.group,
            position: params.startPoint,
        });

        this.startPoint =
            typeof params.startPoint !== "undefined"
                ? params.startPoint
                : new Vector2(0, 0);

        this.endPoint = params.endPoint;

        ({
            lineColor: this.lineColor = LINE_DEFAULT_CONFIG.lineColor,
            lineWidth: this.lineWidth = LINE_DEFAULT_CONFIG.lineWidth,
        } = params.CONFIG ?? LINE_DEFAULT_CONFIG);

        // this.theta determines the angle between vector's arrow and its line.
        this.theta = rToD(
            Math.atan2(
                this.endPoint.y - this.startPoint.y,
                this.endPoint.x - this.startPoint.x
            )
        );

        this.render();
    }

    getWpoint(point: Vector2) {
        return this.coordsGtoW(point);
    }

    private render() {
        const WstartPoint = this.coordsGtoW(this.startPoint);

        this.g_shapeWrapper = this.svg_group
            .append("g")
            .attr("class", `vector-wrapper`)
            .style("transform-box", "fill-box")
            .style("transform-origin", `center`);

        this.def_cubiconBase = this.g_shapeWrapper
            .append("g")
            .attr("class", "vector-group")
            .attr("transform-box", "fill-box")
            .attr("transform-origin", `${WstartPoint.x} ${WstartPoint.y}`);

        this.drawVectorLine();
        this.drawVectorArrowHead();
    }

    private drawVectorLine() {
        const WstartPoint = this.coordsGtoW(this.startPoint);
        const WendPoint = this.coordsGtoW(this.endPoint);

        this.lineStroke = this.def_cubiconBase
            .append("line")
            .attr("class", "line")
            .attr("x1", WstartPoint.x)
            .attr("y1", WstartPoint.y)
            .attr("x2", WendPoint.x)
            .attr("y2", WendPoint.y)
            .attr("stroke", this.lineColor)
            .attr("stroke-width", this.lineWidth);
    }

    private drawVectorArrowHead() {
        const WendPoint = this.coordsGtoW(this.endPoint);

        const headWidth = 0.3;
        const headHeight = 0.5;

        this.arrowHead = this.def_cubiconBase
            .append("polygon")
            .attr(
                "points",
                `${xGtoW(-headWidth)}, ${yGtoW(-headHeight)} 0, 0 ${xGtoW(
                    headWidth
                )}, ${yGtoW(-headHeight)}`
            )
            .attr("fill", this.lineColor)
            .attr("stroke", "none")
            .attr(
                "transform",
                `translate(${WendPoint.x} ${WendPoint.y}) rotate(${
                    this.theta - 90
                })`
            );
    }
}
