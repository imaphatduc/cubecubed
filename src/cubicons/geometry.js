import * as d3 from "d3";
import { Cubicon } from "./cubicon";
import { rToD, xGtoW, yGtoW, xWtoG, yWtoG } from "../math/convertUnit";
import { Vector2 } from "../math/vector";

/// When any of the cubicon instance is created,
// these keys will keep track of that object's own id key
let rectKey = 0;
let circleKey = 0;
let lineKey = 0;
let vectKey = 0;

export class Geometry extends Cubicon {
    constructor({ group, position }) {
        super({ group: group, position: position });

        this.group = group;

        this.id = "";

        this.Wposition = new Vector2(xGtoW(position.x), yGtoW(position.y));
    }
}

export class Rectangle extends Geometry {
    #Wwidth;
    #Wheight;
    #X;
    #Y;

    constructor({
        group,
        position = new Vector2(0, 0),
        width,
        height,
        fillColor = "none",
        fillOpacity = 1,
        strokeColor = "#fff",
        strokeWidth = 2,
    }) {
        super({ group: group, position: position });

        this.width = width;
        this.#Wwidth = xGtoW(width);

        this.height = height;
        this.#Wheight = xGtoW(height);

        this.fillColor = fillColor;
        this.fillOpacity = fillOpacity;

        this.strokeColor = strokeColor;
        this.strokeWidth = strokeWidth;

        // These are the coordinate of the draw origin
        this.#X = -this.#Wwidth / 2 + this.Wposition.x;
        this.#Y = this.#Wheight / 2 + this.Wposition.y;

        this.id = `rect${rectKey++}`;

        this.#add();
    }

    ////////////////////////////////
    // APPEND TAGS TO Group'S SVG //
    ////////////////////////////////
    /// this.stroke is equivalent to the d3's selection of its HTML (SVG) tag
    #add() {
        const path = this.#draw();
        this.svg
            .append("path")
            .attr("id", `${this.id}`)
            .attr("class", "rectangle")
            .attr("d", path.toString())
            .attr("stroke", this.strokeColor)
            .attr("stroke-width", this.strokeWidth);
        this.stroke = this.svg.select(`svg #${this.id}`);
        this.stroke
            .style("fill", this.fillColor)
            .style("fill-opacity", this.fillOpacity)
            .style("transform-box", "fill-box")
            .style("transform-origin", "center");
    }

    ////////////////////////////////////////////////////////
    // DRAW (NOT RENDER) A RECTANGULAR PATH ON THE WINDOW //
    ////////////////////////////////////////////////////////
    #draw() {
        const path = d3.path();
        path.moveTo(this.#X, this.#Y);
        path.lineTo(this.#X + this.#Wwidth, this.#Y);
        path.lineTo(this.#X + this.#Wwidth, this.#Y - this.#Wheight);
        path.lineTo(this.#X, this.#Y - this.#Wheight);
        path.lineTo(this.#X, this.#Y + this.strokeWidth / 2);

        return path;
    }

    pointToSides(pos, sidesIndex) {
        const g = this.svg.append("g").attr("class", "lines-to-side");
        g.attr(
            "transform",
            ` translate(${this.Wposition.x + xGtoW(this.moveVector.x)}, ${
                this.Wposition.y + yGtoW(this.moveVector.y)
            }) rotate(${this.moveAngle})`
        );

        const hors = [],
            vers = [];
        pos.forEach((p) => {
            hors.push(
                new Line({
                    group: this.group,
                    parentGTag: g,
                    startPoint: p,
                    endPoint: new Vector2(
                        ((sidesIndex[0] >= 0 ? 1 : -1) * this.width) / 2,
                        p.y
                    ),
                    lineColor: this.strokeColor,
                    lineWidth: this.strokeWidth,
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
                    lineColor: this.strokeColor,
                    lineWidth: this.strokeWidth,
                })
            );
        });
        const linesData = {
            cubicon: this,
            horizontalLines: hors,
            verticalLines: vers,
        };
        return linesData;
    }
}

export class Square extends Rectangle {
    constructor({
        group,
        position,
        sideLength,
        fillColor,
        fillOpacity,
        strokeColor,
        strokeWidth,
    }) {
        super({
            group: group,
            position: position,
            width: sideLength,
            height: sideLength,
            fillColor: fillColor,
            fillOpacity: fillOpacity,
            strokeColor: strokeColor,
            strokeWidth: strokeWidth,
        });
    }
}

export class Circle extends Geometry {
    // Wposition;
    #Wradius;

    constructor({
        group,
        position = new Vector2(0, 0),
        radius,
        fillColor = "none",
        fillOpacity = 1,
        strokeColor = "#fff",
        strokeWidth = 2,
    }) {
        super({ group: group, position: position });

        this.id = `circle${circleKey++}`;

        this.Wposition = new Vector2(xGtoW(position.x), yGtoW(position.y));

        this.radius = radius;
        this.#Wradius = xGtoW(radius);

        this.strokeColor = strokeColor;
        this.strokeWidth = strokeWidth;

        this.fillColor = fillColor;
        this.fillOpacity = fillOpacity;

        this.#draw();
    }

    #draw() {
        this.svg
            .append("circle")
            .attr("id", `${this.id}`)
            .attr("class", "circle")
            .attr("cx", this.Wposition.x)
            .attr("cy", this.Wposition.y)
            .attr("r", this.#Wradius)
            .attr("fill", this.fillColor)
            .attr("fill-opacity", this.fillOpacity)
            .attr("stroke", this.strokeColor)
            .attr("stroke-width", this.strokeWidth);
        this.stroke = this.svg.select(`svg #${this.id}`);
        this.stroke
            .style("transform-box", "fill-box")
            .style("transform-origin", "center");
    }
}

export class GridOrigin extends Circle {
    constructor({ group }) {
        super({
            group: group,
            position: new Vector2(0, 0),
            radius: xWtoG(2.2),
            strokeColor: "#fff",
            strokeWidth: 2,
        });
    }
}

export class Line extends Geometry {
    #WstartPoint;
    #WendPoint;

    constructor({
        group,
        parentGTag,
        startPoint = { x: 0, y: 0 },
        endPoint,
        lineColor = "#fff",
        lineWidth = 2,
    }) {
        super({ group: group, position: startPoint });

        this.parentGTag = parentGTag;

        this.id = `line${lineKey++}`;

        this.startPoint = startPoint;
        this.#WstartPoint = new Vector2(
            xGtoW(startPoint.x),
            yGtoW(startPoint.y)
        );

        this.endPoint = endPoint;
        this.#WendPoint = new Vector2(xGtoW(endPoint.x), yGtoW(endPoint.y));

        this.lineColor = lineColor;
        this.lineWidth = lineWidth;

        this.#draw();
    }

    #draw() {
        (typeof this.parentGTag !== "undefined" ? this.parentGTag : this.svg)
            .append("line")
            .attr("id", this.id)
            .attr("class", "line")
            .attr("x1", this.#WstartPoint.x)
            .attr("y1", this.#WstartPoint.y)
            .attr("x2", this.#WendPoint.x)
            .attr("y2", this.#WendPoint.y)
            .attr("stroke", this.lineColor)
            .attr("stroke-width", this.lineWidth);
        this.lineStroke = this.svg.select(`svg #${this.id}`);
    }

    get WstartPoint() {
        return this.#WstartPoint;
    }
    get WendPoint() {
        return this.#WendPoint;
    }
}

export class Vector extends Geometry {
    #WstartPoint;
    #WendPoint;

    constructor({
        group,
        startPoint = new Vector2(0, 0),
        endPoint,
        vectColor = "#fff",
        vectStrokeWidth = 2,
    }) {
        super({
            group: group,
            position: startPoint,
        });

        this.id = `vect${vectKey++}`;

        this.startPoint = startPoint;
        this.#WstartPoint = new Vector2(
            xGtoW(startPoint.x),
            yGtoW(startPoint.y)
        );

        this.endPoint = endPoint;
        this.#WendPoint = new Vector2(xGtoW(endPoint.x), yGtoW(endPoint.y));

        this.vectColor = vectColor;
        this.vectStrokeWidth = vectStrokeWidth;

        // this.theta determines the angle between vector's arrow and its line.
        this.theta = rToD(
            Math.atan2(
                this.endPoint.y - this.startPoint.y,
                this.endPoint.x - this.startPoint.x
            )
        );

        this.#draw();
    }

    #draw() {
        this.stroke = this.svg
            .append("g")
            .attr("id", `${this.id}-group`)
            .attr("class", "vector")
            .attr("transform-box", "fill-box")
            .attr(
                "transform-origin",
                `${this.#WstartPoint.x} ${this.#WstartPoint.y}`
            );

        this.stroke
            .append("line")
            .attr("id", this.id)
            .attr("x1", this.#WstartPoint.x)
            .attr("y1", this.#WstartPoint.y)
            .attr("x2", this.#WendPoint.x)
            .attr("y2", this.#WendPoint.y)
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
                `translate(${this.#WendPoint.x} ${this.#WendPoint.y}) rotate(${
                    this.theta - 90
                })`
            );

        this.lineStroke = this.stroke.select("line");
        this.arrowHead = this.stroke.select("polygon");
    }

    get WstartPoint() {
        return this.#WstartPoint;
    }
    get WendPoint() {
        return this.#WendPoint;
    }
}
