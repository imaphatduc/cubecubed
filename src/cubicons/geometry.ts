import * as d3 from "d3";
import { Group } from "../scene/group";
import { Cubicon } from "./cubicon";
import { rToD, xGtoW, yGtoW, xWtoG } from "../math/convertUnit";
import { Vector2 } from "../math/vector";
import { COLOR, PT_TO_SIDES_DATA, RECT_GRID_DATA } from "./constants";

export interface SHAPE_CONFIG {
    fillColor?: string;
    fillOpacity?: number;
    strokeColor?: string;
    strokeWidth?: number;
}
export const SHAPE_DEFAULT_CONFIG = {
    fillColor: "none",
    fillOpacity: 1,
    strokeColor: "#fff",
    strokeWidth: 2,
};

export interface LINE_CONFIG {
    lineColor?: string;
    lineWidth?: number;
}
export const LINE_DEFAULT_CONFIG = {
    lineColor: "#fff",
    lineWidth: 2,
};

export abstract class Geometry extends Cubicon {
    readonly cubType = "geometry";
    abstract readonly geoType: string;

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
    protected vectColor: any;
    protected vectStrokeWidth: any;

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
        this.svgWrapper;

        this.Wposition = new Vector2(xGtoW(position.x), yGtoW(position.y));
    }
}

interface RECT_CONSTRUCT {
    group: Group;
    position: Vector2;
    width: number;
    height: number;
    CONFIG: SHAPE_CONFIG;
}
export class Rectangle extends Geometry {
    readonly geoType = "rectangle";

    private Wwidth: number;
    private Wheight: number;
    private readonly X: number;
    private readonly Y: number;

    readonly width: number;
    readonly height: number;

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

    ////////////////////////////////
    // APPEND TAGS TO Group'S SVG //
    ////////////////////////////////
    /// this.stroke is equivalent to the d3's selection of its HTML (SVG) tag
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

    ////////////////////////////////////////////////////////
    // DRAW (NOT RENDER) A RECTANGULAR PATH ON THE WINDOW //
    ////////////////////////////////////////////////////////
    private draw() {
        const path = d3.path();
        path.moveTo(this.X, this.Y);
        path.lineTo(this.X + this.Wwidth, this.Y);
        path.lineTo(this.X + this.Wwidth, this.Y - this.Wheight);
        path.lineTo(this.X, this.Y - this.Wheight);
        path.lineTo(this.X, this.Y + (this.strokeWidth ?? 0) / 2);

        return path;
    }

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
        for (let i of d3.range(-this.width / 2 + 1, this.width / 2, 1)) {
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
        for (let i of d3.range(-this.height / 2 + 1, this.height / 2, 1)) {
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

interface SQR_CONSTRUCT {
    group: Group;
    position: Vector2;
    sideLength: number;
    CONFIG: SHAPE_CONFIG;
}
export class Square extends Rectangle {
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

interface CIRC_CONSTRUCT {
    group: Group;
    position: Vector2;
    radius: number;
    CONFIG: SHAPE_CONFIG;
}
export class Circle extends Geometry {
    readonly geoType = "circle";

    readonly radius: number;
    private readonly Wradius: number;

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

        this.draw();
    }

    private draw() {
        this.stroke = this.svg
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
    }
}

interface LINE_CONSTRUCT {
    group: Group;
    parentGTag: any;
    startPoint: Vector2;
    endPoint: Vector2;
    CONFIG: LINE_CONFIG;
}
export class Line extends Geometry {
    readonly geoType = "line";

    /// These have to be public to use in Create animations
    readonly WstartPoint: Vector2;
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

        this.draw();
    }

    private draw() {
        this.lineStroke = (
            typeof this.parentGTag !== "undefined" ? this.parentGTag : this.svg
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

interface VECT_CONSTRUCT {
    group: Group;
    startPoint: Vector2;
    endPoint: Vector2;
    CONFIG: LINE_CONFIG;
}
export class Vector extends Geometry {
    readonly geoType = "vector";

    /// These have to be public to use in Create animations
    readonly WstartPoint: Vector2;
    readonly WendPoint: Vector2;

    vectColor: string;
    vectStrokeWidth: number;
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

        this.WstartPoint = new Vector2(
            xGtoW(startPoint.x),
            yGtoW(startPoint.y)
        );

        this.WendPoint = new Vector2(xGtoW(endPoint.x), yGtoW(endPoint.y));

        this.vectColor = lineColor;
        this.vectStrokeWidth = lineWidth;

        // this.theta determines the angle between vector's arrow and its line.
        this.theta = rToD(
            Math.atan2(endPoint.y - startPoint.y, endPoint.x - startPoint.x)
        );

        this.draw();
    }

    private draw() {
        this.stroke = this.svg
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
            .attr("stroke", this.vectColor)
            .attr("stroke-width", this.vectStrokeWidth);
        this.stroke
            .append("polygon")
            .attr(
                "points",
                `${xGtoW(-0.25)}, ${yGtoW(-0.25)} 0, 0 ${xGtoW(0.25)}, ${yGtoW(
                    -0.25
                )}`
            )
            .attr("fill", this.vectColor)
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
