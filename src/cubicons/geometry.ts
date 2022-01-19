import { path } from "d3-path";
import { range } from "d3-array";
//+++++++++++++++++++++++++++++++++++++++++++++++++++//
import { Group } from "../scene/group";
import { Cubicon } from "./cubicon";
import { rToD, xGtoW, yGtoW, xWtoG } from "../math/convertUnit";
import { Vector2 } from "../math/vector";
import { COLOR, PT_TO_SIDES_DATA, RECT_GRID_DATA } from "./constants";
import { curveNatural, line } from "d3";

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
export interface VECTOR_CONFIG extends LINE_CONFIG {
    arrowWidth?: number;
    arrowHeight?: number;
}
export const LINE_DEFAULT_CONFIG = {
    lineColor: "#fff",
    lineWidth: 2,
};

export const VECTOR_DEFAULT_CONFIG = {
    ...LINE_DEFAULT_CONFIG,
    arrowWidth: 0.3,
    arrowHeight: 0.5,
};
/**
 * Base class of all geometric cubicon shape.
 *
 * Child classes: Rectangle, Square, Circle, Line, Vector (shape).
 */
export abstract class Geometry extends Cubicon {
    readonly cubType = "geometry";
    abstract readonly geoType: string;

    // For geometry (Geometry)
    fillColor: any;
    fillOpacity: any;
    strokeColor: any;
    strokeWidth: any;

    // For line-like objects (Line | Vector | AxisProjector)
    lineColor: any;
    lineWidth: any;

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
    }

    /**
     * Add the shape of this rectangle onto SVG.
     */
    render() {
        this.checkIfRendered();
        this.isRendered = true;

        this.g_cubiconWrapper = this.svg_group
            .append("g")
            .attr("class", `rectangle-wrapper`)
            .style("transform-box", "fill-box")
            .style("transform-origin", `center`);

        const path = this.definePath();
        this.def_cubiconBase = this.g_cubiconWrapper.append("path");

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

        return this;
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
        const g_pointToSides = this.g_cubiconWrapper.append("g");

        const Wposition = this.coordsGtoW(this.position);
        g_pointToSides
            .attr("class", "lines-to-side")
            .attr("transform", `translate(${Wposition.x}, ${Wposition.y})`);

        const horizontalLines: Line[] = [];
        const verticalLines: Line[] = [];

        const generalParams = {
            group: this.group,
            CONFIG: {
                lineColor: this.strokeColor,
                lineWidth: this.strokeWidth,
            },
        };

        const endPoint_x = ((direction[0] >= 0 ? 1 : -1) * this.width) / 2;
        ptPositions.forEach((p) => {
            horizontalLines.push(
                new Line({
                    ...generalParams,
                    startPoint: new Vector2(
                        p.x +
                            (p.x >= endPoint_x ? 1 : -1) *
                                xWtoG(this.strokeWidth / 2),
                        p.y
                    ),
                    endPoint: new Vector2(endPoint_x, p.y),
                })
                    .render()
                    .setParentHTMLTag(g_pointToSides)
            );

            verticalLines.push(
                new Line({
                    ...generalParams,
                    startPoint: p,
                    endPoint: new Vector2(
                        p.x,
                        ((direction[1] >= 0 ? 1 : -1) * this.height) / 2
                    ),
                })
                    .render()
                    .setParentHTMLTag(g_pointToSides)
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
        const g_drawInnerGrid = this.g_cubiconWrapper.append("g");

        const Wposition = this.coordsGtoW(this.position);
        g_drawInnerGrid
            .attr("class", "rect-inner-grid")
            .attr("transform", `translate(${Wposition.x}, ${Wposition.y})`);

        const generalParams = {
            group: this.group,
            CONFIG: {
                lineColor: COLOR.BLUE_1,
                lineWidth: 1,
            },
        };

        const horizontalLines: Line[] = [];
        for (let i of range(-this.height / 2 + 1, this.height / 2, 1)) {
            horizontalLines.push(
                new Line({
                    ...generalParams,
                    startPoint: new Vector2(-this.width / 2, i),
                    endPoint: new Vector2(this.width / 2, i),
                })
                    .render()
                    .setParentHTMLTag(g_drawInnerGrid)
            );
        }

        const verticalLines: Line[] = [];
        for (let i of range(-this.width / 2 + 1, this.width / 2, 1)) {
            verticalLines.push(
                new Line({
                    ...generalParams,
                    startPoint: new Vector2(i, -this.height / 2),
                    endPoint: new Vector2(i, this.height / 2),
                })
                    .render()
                    .setParentHTMLTag(g_drawInnerGrid)
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
        CONFIG?: SHAPE_CONFIG | undefined;
    }) {
        super({ group: params.group, position: params.position });

        this.radius = params.radius;

        ({
            fillColor: this.fillColor = SHAPE_DEFAULT_CONFIG.fillColor,
            fillOpacity: this.fillOpacity = SHAPE_DEFAULT_CONFIG.fillOpacity,
            strokeColor: this.strokeColor = SHAPE_DEFAULT_CONFIG.strokeColor,
            strokeWidth: this.strokeWidth = SHAPE_DEFAULT_CONFIG.strokeWidth,
        } = params.CONFIG ?? SHAPE_DEFAULT_CONFIG);
    }

    /**
     * Draw (and render) the shape of this circle onto SVG.
     */
    render() {
        this.checkIfRendered();
        this.isRendered = true;

        this.g_cubiconWrapper = this.svg_group
            .append("g")
            .attr("class", `circle-wrapper`)
            .style("transform-box", "fill-box")
            .style("transform-origin", `center`);

        const Wposition = this.coordsGtoW(this.position);
        const Wradius = xGtoW(this.radius);

        this.applyToHTMLFlow(this.g_cubiconWrapper, Wposition, Wradius);

        this.def_cubiconBase.attr("class", "circle");

        return this;
    }

    protected applyToHTMLFlow(
        g_cubiconWrapper: any,
        Wposition: Vector2,
        Wradius: number
    ) {
        this.def_cubiconBase = g_cubiconWrapper
            .append("circle")
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

    protected parentGroupTag = this.svg_group;

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
        CONFIG?: LINE_CONFIG | undefined;
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
    }

    /**
     * Draw (and render) the shape of this line onto SVG.
     */
    render() {
        this.checkIfRendered();
        this.isRendered = true;

        const WstartPoint = this.coordsGtoW(this.startPoint);
        const WendPoint = this.coordsGtoW(this.endPoint);

        this.applyToHTMLFlow(this.parentGroupTag, WstartPoint, WendPoint);

        this.g_cubiconWrapper.attr("class", `line-wrapper`);
        this.def_cubiconBase.attr("class", "line");

        return this;
    }

    protected applyToHTMLFlow(
        parentGroupTag: any,
        WstartPoint: Vector2,
        WendPoint: Vector2
    ) {
        this.g_cubiconWrapper = parentGroupTag
            .append("g")
            .style("transform-box", "fill-box")
            .style("transform-origin", `center`);

        this.def_cubiconBase = this.g_cubiconWrapper
            .append("line")
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
        this.g_cubiconWrapper.remove();
        this.parentGroupTag = parentGroupTag;
        this.isRendered = false;
        this.render();

        return this;
    }

    setParent(parent: Geometry) {
        this.g_cubiconWrapper.remove();
        this.parentGroupTag = parent.g_cubiconWrapper;
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

    def_lineStroke: any;
    def_arrowHead: any;

    private arrowWidth: any;
    private arrowHeight: any;

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
        CONFIG?: VECTOR_CONFIG;
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
            arrowWidth: this.arrowWidth = VECTOR_DEFAULT_CONFIG.arrowWidth,
            arrowHeight: this.arrowHeight = VECTOR_DEFAULT_CONFIG.arrowHeight,
        } = params.CONFIG ?? VECTOR_DEFAULT_CONFIG);

        // this.theta determines the angle between vector's arrow and its line.
        this.theta = rToD(
            Math.atan2(
                this.endPoint.y - this.startPoint.y,
                this.endPoint.x - this.startPoint.x
            )
        );
    }

    getWpoint(point: Vector2) {
        return this.coordsGtoW(point);
    }

    render() {
        this.checkIfRendered();
        this.isRendered = true;

        const WstartPoint = this.coordsGtoW(this.startPoint);

        this.g_cubiconWrapper = this.svg_group
            .append("g")
            .attr("class", `vector-wrapper`)
            .attr("transform-box", "fill-box")
            .attr("transform-origin", `${WstartPoint.x} ${WstartPoint.y}`);

        this.def_cubiconBase = this.g_cubiconWrapper
            .append("g")
            .attr("class", "vector-group");

        this.drawVectorLine();
        this.drawVectorArrowHead();

        return this;
    }

    private drawVectorLine() {
        const vector = this.endPoint.subtract(this.startPoint);
        const magnitude = vector.magnitude();

        /// Make end point of vector's rendered line touch exactly at 10% height of its arrow
        const resultVector = vector.scale(
            (magnitude - this.arrowHeight + this.arrowHeight * 0.1) / magnitude
        );

        const WstartPoint = this.coordsGtoW(this.startPoint);
        const WendPoint = this.coordsGtoW(resultVector.add(this.startPoint));

        this.def_lineStroke = this.def_cubiconBase
            .append("line")
            .attr("class", "vector-line")
            .attr("x1", WstartPoint.x)
            .attr("y1", WstartPoint.y)
            .attr("x2", WendPoint.x)
            .attr("y2", WendPoint.y)
            .attr("stroke", this.lineColor)
            .attr("stroke-width", this.lineWidth);
    }

    private drawVectorArrowHead() {
        const WendPoint = this.coordsGtoW(this.endPoint);

        this.def_arrowHead = this.def_cubiconBase
            .append("polygon")
            .attr("class", "vector-arrow-head")
            .attr(
                "points",
                `${xGtoW(-this.arrowWidth)}, ${yGtoW(
                    -this.arrowHeight
                )} 0, 0 ${xGtoW(this.arrowWidth)}, ${yGtoW(-this.arrowHeight)}`
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

/**
 * Generate a 2d curve.
 */
export class ParamatricCurve extends Geometry {
    readonly geoType = "parametric-curve";

    points: Vector2[];
    functionDef: (t: number) => Vector2;
    tRange: [number, number];

    constructor(params: {
        group: Group;
        tRange: [number, number];
        dt?: number;
        functionDef: (t: number) => Vector2;
        CONFIG: LINE_CONFIG;
    }) {
        super({ group: params.group });

        this.points = range(
            params.tRange[0],
            params.tRange[1] + (params.dt || 0.02),
            params.dt || 0.02
        ).map((t: number) => params.functionDef(t));

        this.functionDef = params.functionDef;
        this.tRange = params.tRange;

        ({
            lineColor: this.lineColor = LINE_DEFAULT_CONFIG.lineColor,
            lineWidth: this.lineWidth = LINE_DEFAULT_CONFIG.lineWidth,
        } = params.CONFIG ?? LINE_DEFAULT_CONFIG);
    }

    render() {
        this.checkIfRendered();
        this.isRendered = true;

        this.g_cubiconWrapper = this.svg_group
            .append("g")
            .attr("class", `arc-wrapper`)
            .style("transform-box", "fill-box")
            .style("transform-origin", `center`);

        this.def_cubiconBase = this.g_cubiconWrapper
            .append("path")
            .attr("class", "parametric-curve")
            .attr("d", this.getData())
            .attr("fill", "none")
            .attr("stroke", this.lineColor)
            .attr("stroke-width", this.lineWidth);

        return this;
    }

    private getData() {
        const points: [number, number][] = this.points.map((pt: Vector2) => [
            pt.x,
            pt.y,
        ]);

        const curveGenerator = line()
            .curve(curveNatural)
            .x((d: [number, number]) => xGtoW(d[0]))
            .y((d: [number, number]) => yGtoW(d[1]));

        return curveGenerator(points);
    }

    getOutputVector(t: number) {
        return this.functionDef(t);
    }

    getFirstOutputPoint() {
        return this.functionDef(this.tRange[0]);
    }
    getLastOutputPoint() {
        return this.functionDef(this.tRange[1]);
    }
}
