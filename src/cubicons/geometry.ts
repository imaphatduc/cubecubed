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

    svgWrapper: any;

    // For geometry (Geometry)
    protected fillColor: any;
    protected fillOpacity: any;
    protected strokeColor: any;
    protected strokeWidth: any;

    /// For line-like objects (Line | Vector | AxisProjector)
    protected lineStroke: any;
    protected lineColor: any;
    protected lineWidth: any;

    readonly WstartPoint: any;
    readonly WendPoint: any;

    //// For vector (Vector)
    arrowHead: any;

    readonly Wposition: Vector2;

    constructor({
        group,
        position = new Vector2(0, 0),
    }: {
        group: Group;
        position: Vector2;
    }) {
        super({ group: group, position: position });

        this.group = group;

        this.Wposition = new Vector2(xGtoW(position.x), yGtoW(position.y));
    }
}

/**
 * Constructor structure of the rectangle shape.
 */
export interface RECT_CONSTRUCT {
    /**
     * The group that the rectangle belongs to.
     */
    group: Group;
    /**
     * Position of the rectangle.
     */
    position: Vector2;
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
    CONFIG: SHAPE_CONFIG;
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
     * Width of the rectangle (in SVG-Cartesian coordinate system).
     */
    private Wwidth: number;
    /**
     * Height of the rectangle (in SVG-Cartesian coordinate system).
     */
    private Wheight: number;

    private readonly X: number;
    private readonly Y: number;

    /**
     * Width of the rectangle (in grid coordinate system).
     */
    readonly width: number;
    /**
     * Height of the rectangle (in grid coordinate system).
     */
    readonly height: number;

    /**
     * @param [] Options to form the rectangle.
     */
    constructor({
        group,
        position,
        width,
        height,
        CONFIG: {
            fillColor = SHAPE_DEFAULT_CONFIG.fillColor,
            fillOpacity = SHAPE_DEFAULT_CONFIG.fillOpacity,
            strokeColor = SHAPE_DEFAULT_CONFIG.strokeColor,
            strokeWidth = SHAPE_DEFAULT_CONFIG.strokeWidth,
        } = SHAPE_DEFAULT_CONFIG,
    }: RECT_CONSTRUCT) {
        super({ group: group, position: position });

        this.width = width;
        this.Wwidth = xGtoW(width);

        this.height = height;
        this.Wheight = xGtoW(height);

        this.fillColor = fillColor;
        this.fillOpacity = fillOpacity;

        this.strokeColor = strokeColor;
        this.strokeWidth = strokeWidth;

        // These are the coordinate of the draw origin
        this.X = -this.Wwidth / 2 + this.Wposition.x;
        this.Y = this.Wheight / 2 + this.Wposition.y;

        this.svgWrapper = this.svg
            .append("g")
            .attr("class", `rectangle-wrapper`)
            .style("transform-box", "fill-box")
            .style("transform-origin", `center`);

        this.add();
    }

    /**
     * Add the shape of this rectangle onto SVG.
     */
    private add() {
        const path = this.draw();
        this.stroke = this.svgWrapper
            .append("path")
            .attr("class", "rectangle")
            .attr("d", path.toString())
            .attr("stroke", this.strokeColor)
            .attr("stroke-width", this.strokeWidth);
        this.stroke
            .style("fill", this.fillColor)
            .style("fill-opacity", this.fillOpacity)
            .style("transform-box", "fill-box")
            .style("transform-origin", "center");
    }

    /**
     * Draw (not render) a rectangular stroke path.
     */
    private draw() {
        const rectPath = path();
        rectPath.moveTo(this.X, this.Y);
        rectPath.lineTo(this.X + this.Wwidth, this.Y);
        rectPath.lineTo(this.X + this.Wwidth, this.Y - this.Wheight);
        rectPath.lineTo(this.X, this.Y - this.Wheight);
        rectPath.lineTo(this.X, this.Y + (this.strokeWidth ?? 0) / 2);

        return rectPath;
    }

    /**
     * Add lines from the specified point to the rectangle's sides based on x and y directions.
     *
     * @param pos Position of the point.
     *
     * @param sidesIndex An array that includes two direction values.
     * If positive (+), then the line moves right (or up), and left (or down) for negative (-).
     *
     * - *Example*: `pointToSides(new Vector2(0, 0), [-2, 5])` will draw two lines from point (0, 0) to the rectangle's sides by two directions:
     *   negatively parallel to x axis (left) and positively parallel to y axis (up).
     *
     * @returns A complex data type to specify in PointToSides() animation.
     */
    pointToSides(
        pos: Vector2[],
        sidesIndex: [number, number]
    ): { cubicon: Geometry; horizontalLines: Line[]; verticalLines: Line[] } {
        const g = this.svgWrapper.append("g").attr("class", "lines-to-side");
        g.attr(
            "transform",
            `translate(${this.Wposition.x}, ${this.Wposition.y})`
        );

        const endPoint_x = ((sidesIndex[0] >= 0 ? 1 : -1) * this.width) / 2;
        const hors: Line[] = [],
            vers: Line[] = [];
        pos.forEach((p) => {
            hors.push(
                new Line({
                    group: this.group,
                    parentGTag: g,
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
                })
            );
            vers.push(
                new Line({
                    group: this.group,
                    parentGTag: g,
                    startPoint: p,
                    endPoint: new Vector2(
                        p.x,
                        ((sidesIndex[1] >= 0 ? 1 : -1) * this.height) / 2
                    ),
                    CONFIG: {
                        lineColor: this.strokeColor,
                        lineWidth: this.strokeWidth,
                    },
                })
            );
        });
        const linesData: PT_TO_SIDES_DATA = {
            cubicon: this,
            horizontalLines: hors,
            verticalLines: vers,
        };
        return linesData;
    }

    /**
     * Draw a grid inside the rectangle.
     *
     * @returns A complex data type to specify in DrawInnerGrid() animation.
     */
    drawInnerGrid(): {
        cubicon: Geometry;
        horizontalLines: Line[];
        verticalLines: Line[];
    } {
        const g = this.svgWrapper.append("g").attr("class", "rect-inner-grid");
        g.attr(
            "transform",
            `translate(${this.Wposition.x}, ${this.Wposition.y})`
        );

        const hors = [],
            vers = [];
        for (let i of range(-this.width / 2 + 1, this.width / 2, 1)) {
            vers.push(
                new Line({
                    group: this.group,
                    parentGTag: g,
                    startPoint: new Vector2(i, -this.height / 2),
                    endPoint: new Vector2(i, this.height / 2),
                    CONFIG: {
                        lineColor: COLOR.BLUE_1,
                        lineWidth: 1,
                    },
                })
            );
        }
        for (let i of range(-this.height / 2 + 1, this.height / 2, 1)) {
            hors.push(
                new Line({
                    group: this.group,
                    parentGTag: g,
                    startPoint: new Vector2(-this.width / 2, i),
                    endPoint: new Vector2(this.width / 2, i),
                    CONFIG: {
                        lineColor: COLOR.BLUE_1,
                        lineWidth: 1,
                    },
                })
            );
        }
        const gridData: RECT_GRID_DATA = {
            cubicon: this,
            horizontalLines: hors,
            verticalLines: vers,
        };
        return gridData;
    }
}

/**
 * Constructor structure of the square shape.
 */
export interface SQR_CONSTRUCT {
    /**
     * The group that the square belongs to.
     */
    group: Group;
    /**
     * Position of the square.
     */
    position: Vector2;
    /**
     * Side length of the square.
     */
    sideLength: number;
    /**
     * Config options of the square.
     */
    CONFIG: SHAPE_CONFIG;
}
/**
 * Return the barebone of a square shape.
 */
export class Square extends Rectangle {
    /**
     * @param [] An object that contains options to form the square.
     */
    constructor({
        group,
        position,
        sideLength,
        CONFIG = SHAPE_DEFAULT_CONFIG,
    }: SQR_CONSTRUCT) {
        super({
            group: group,
            position: position,
            width: sideLength,
            height: sideLength,
            CONFIG: CONFIG,
        });
    }
}

/**
 * Constructor structure of the circle shape.
 */
export interface CIRC_CONSTRUCT {
    /**
     * The group that the circle belongs to.
     */
    group: Group;
    /**
     * Position of the circle.
     */
    position: Vector2;
    /**
     * Radius of the rectangle.
     */
    radius: number;
    /**
     * Config options of the circle.
     */
    CONFIG: SHAPE_CONFIG;
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
     * Radius of the rectangle (in SVG-Cartesian coordinate system).
     */
    private readonly Wradius: number;

    /**
     * @param - An object that contains options to form the circle.
     */
    constructor({
        group,
        position,
        radius,
        CONFIG: {
            fillColor = SHAPE_DEFAULT_CONFIG.fillColor,
            fillOpacity = SHAPE_DEFAULT_CONFIG.fillOpacity,
            strokeColor = SHAPE_DEFAULT_CONFIG.strokeColor,
            strokeWidth = SHAPE_DEFAULT_CONFIG.strokeWidth,
        } = SHAPE_DEFAULT_CONFIG,
    }: CIRC_CONSTRUCT) {
        super({ group: group, position: position });

        this.radius = radius;
        this.Wradius = xGtoW(radius);

        this.strokeColor = strokeColor;
        this.strokeWidth = strokeWidth;

        this.fillColor = fillColor;
        this.fillOpacity = fillOpacity;

        this.svgWrapper = this.svg
            .append("g")
            .attr("class", `circle-wrapper`)
            .style("transform-box", "fill-box")
            .style("transform-origin", `center`);

        this.draw();
    }

    /**
     * Draw (and render) the shape of this circle onto SVG.
     */
    private draw() {
        this.stroke = this.svgWrapper
            .append("circle")
            .attr("class", "circle")
            .attr("cx", this.Wposition.x)
            .attr("cy", this.Wposition.y)
            .attr("r", this.Wradius)
            .attr("fill", this.fillColor)
            .attr("fill-opacity", this.fillOpacity)
            .attr("stroke", this.strokeColor)
            .attr("stroke-width", this.strokeWidth);
        this.stroke
            .style("transform-box", "fill-box")
            .style("transform-origin", "center");
    }
}

export class GridOrigin extends Circle {
    constructor(group: Group) {
        super({
            group: group,
            position: new Vector2(0, 0),
            radius: xWtoG(2.2),
            CONFIG: {
                fillColor: "",
                fillOpacity: 0,
                strokeColor: "#fff",
                strokeWidth: 2,
            },
        });
        this.svgWrapper.attr("id", "grid-origin-wrapper");
        this.stroke.attr("id", "grid-origin");
    }
}

/**
 * Constructor structure of the line shape.
 */
export interface LINE_CONSTRUCT {
    /**
     * The group that the line belongs to.
     */
    group: Group;
    parentGTag: any;
    /**
     * Start point (tail) of the line.
     */
    startPoint: Vector2;
    /**
     * End point (head) of the line.
     */
    endPoint: Vector2;
    /**
     * Config options of the line.
     */
    CONFIG: LINE_CONFIG;
}
/**
 * Return the barebone of a line shape.
 */
export class Line extends Geometry {
    /**
     * Geometry type of the line.
     */
    readonly geoType = "line";

    /// These have to be public to use in Create animations
    /**
     * Start point (tail) of the line (in SVG-Cartesian coordinate system).
     */
    readonly WstartPoint: Vector2;
    /**
     * End point (head) of the line (in SVG-Cartesian coordinate system).
     */
    readonly WendPoint: Vector2;

    private readonly parentGTag: any;

    constructor({
        group,
        parentGTag,
        startPoint = new Vector2(0, 0),
        endPoint,
        CONFIG: {
            lineColor = LINE_DEFAULT_CONFIG.lineColor,
            lineWidth = LINE_DEFAULT_CONFIG.lineWidth,
        } = LINE_DEFAULT_CONFIG,
    }: LINE_CONSTRUCT) {
        super({ group: group, position: startPoint });

        this.parentGTag = parentGTag;

        this.WstartPoint = new Vector2(
            xGtoW(startPoint.x),
            yGtoW(startPoint.y)
        );

        this.WendPoint = new Vector2(xGtoW(endPoint.x), yGtoW(endPoint.y));

        this.lineColor = lineColor;
        this.lineWidth = lineWidth;

        this.svgWrapper = this.svg
            .append("g")
            .attr("class", `line-wrapper`)
            .style("transform-box", "fill-box")
            .style("transform-origin", `center`);

        this.draw();
    }

    /**
     * Draw (and render) the shape of this line onto SVG.
     */
    private draw() {
        this.lineStroke = (
            typeof this.parentGTag !== "undefined"
                ? this.parentGTag
                : this.svgWrapper
        )
            .append("line")
            .attr("class", "line")
            .attr("x1", this.WstartPoint.x)
            .attr("y1", this.WstartPoint.y)
            .attr("x2", this.WendPoint.x)
            .attr("y2", this.WendPoint.y)
            .attr("stroke", this.lineColor)
            .attr("stroke-width", this.lineWidth);
    }
}

/**
 * Constructor structure of the vector shape.
 */
export interface VECT_CONSTRUCT {
    /**
     * The group that the vector belongs to.
     */
    group: Group;
    /**
     * Start point (tail) of the vector.
     */
    startPoint: Vector2;
    /**
     * End point (head) of the vector.
     */
    endPoint: Vector2;
    /**
     * Config options of the vector line.
     */
    CONFIG: LINE_CONFIG;
}
export class Vector extends Geometry {
    /**
     * Geometry type of the vector.
     */
    readonly geoType = "vector";

    /// These have to be public to use in Create animations
    /**
     * Start point (tail) of the vector (in SVG-Cartesian coordinate system).
     */
    readonly WstartPoint: Vector2;
    /**
     * End point (head) of the vector (in SVG-Cartesian coordinate system).
     */
    readonly WendPoint: Vector2;

    /**
     * Start point (tail) of the vector (in grid coordinate system).
     */
    readonly startPoint: Vector2;
    /**
     * End point (head) of the vector (in grid coordinate system).
     */
    readonly endPoint: Vector2;

    /**
     * Color of the vector line.
     */
    lineColor: string;
    /**
     * Width of the vector line.
     */
    lineWidth: number;
    /**
     * The smaller angle (in degree) between the vector and the x axis.
     */
    theta: number;

    lineStroke: any;
    arrowHead: any;

    constructor({
        group,
        startPoint = new Vector2(0, 0),
        endPoint,
        CONFIG: {
            lineColor = LINE_DEFAULT_CONFIG.lineColor,
            lineWidth = LINE_DEFAULT_CONFIG.lineWidth,
        } = LINE_DEFAULT_CONFIG,
    }: VECT_CONSTRUCT) {
        super({
            group: group,
            position: startPoint,
        });

        this.startPoint = startPoint;
        this.WstartPoint = new Vector2(
            xGtoW(startPoint.x),
            yGtoW(startPoint.y)
        );

        this.endPoint = endPoint;
        this.WendPoint = new Vector2(xGtoW(endPoint.x), yGtoW(endPoint.y));

        this.lineColor = lineColor;
        this.lineWidth = lineWidth;

        // this.theta determines the angle between vector's arrow and its line.
        this.theta = rToD(
            Math.atan2(endPoint.y - startPoint.y, endPoint.x - startPoint.x)
        );

        this.svgWrapper = this.svg
            .append("g")
            .attr("class", `vector-wrapper`)
            .style("transform-box", "fill-box")
            .style("transform-origin", `center`);

        this.draw();
    }

    private draw() {
        this.stroke = this.svgWrapper
            .append("g")
            .attr("class", "vector-group")
            .attr("transform-box", "fill-box")
            .attr(
                "transform-origin",
                `${this.WstartPoint.x} ${this.WstartPoint.y}`
            );

        this.stroke
            .append("line")
            .attr("class", "line")
            .attr("x1", this.WstartPoint.x)
            .attr("y1", this.WstartPoint.y)
            .attr("x2", this.WendPoint.x)
            .attr("y2", this.WendPoint.y)
            .attr("stroke", this.lineColor)
            .attr("stroke-width", this.lineWidth);

        const headWidth = 0.3;
        const headHeight = 0.5;
        this.stroke
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
                `translate(${this.WendPoint.x} ${this.WendPoint.y}) rotate(${
                    this.theta - 90
                })`
            );

        this.lineStroke = this.stroke.select("line");
        this.arrowHead = this.stroke.select("polygon");
    }
}
