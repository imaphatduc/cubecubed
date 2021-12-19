import { Cubicon } from "./cubicon";
import { rToD, xGtoW, yGtoW, xWtoG, yWtoG } from "../math/convertUnit";

/// When any of the cubicon instance is created,
// these keys will keep track of that object's own id key
let rectKey = 0;
let circleKey = 0;
let lineKey = 0;
let vectKey = 0;

export class Rectangle extends Cubicon {
    constructor({
        group,
        position = { x: 0, y: 0 },
        width,
        height,
        fillColor = "none",
        fillOpacity = 1,
        strokeColor = "#fff",
        strokeWidth = 2,
    }) {
        super({ group: group, position: position });

        this.width = xGtoW(width);
        this.height = xGtoW(height);

        this.fillColor = fillColor;
        this.fillOpacity = fillOpacity;

        this.strokeColor = strokeColor;
        this.strokeWidth = strokeWidth;

        // These are the coordinate of the draw origin
        this.X = -this.width / 2 + this.position.x;
        this.Y = this.height / 2 + this.position.y;
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
        path.moveTo(this.X, this.Y);
        path.lineTo(this.X + this.width, this.Y);
        path.lineTo(this.X + this.width, this.Y - this.height);
        path.lineTo(this.X, this.Y - this.height);
        path.lineTo(this.X, this.Y + this.strokeWidth / 2);

        return path;
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

export class Circle extends Cubicon {
    constructor({
        group,
        position = { x: 0, y: 0 },
        radius,
        fillColor = "none",
        fillOpacity = 1,
        strokeColor = "#fff",
        strokeWidth = 2,
    }) {
        super({ group: group, position: position });

        this.id = `circle${circleKey++}`;

        this.cx = this.position.x;
        this.cy = this.position.y;

        this.radius = xGtoW(radius);

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
            .attr("cx", this.cx)
            .attr("cy", this.cy)
            .attr("r", this.radius)
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
            position: { x: 0, y: 0 },
            radius: xWtoG(2.2),
            strokeColor: "#fff",
            strokeWidth: 2,
        });
    }
}

export class Line extends Cubicon {
    constructor({
        group,
        startPoint = { x: 0, y: 0 },
        endPoint,
        lineColor = "#fff",
        lineWidth = 2,
    }) {
        super({ group: group, position: startPoint });

        this.id = `line${lineKey++}`;

        this.startPoint = {
            x: xGtoW(startPoint.x),
            y: yGtoW(startPoint.y),
        };
        this.endPoint = {
            x: xGtoW(endPoint.x),
            y: yGtoW(endPoint.y),
        };

        this.lineColor = lineColor;
        this.lineWidth = lineWidth;

        // Override rotateAnimTime property of Cubicon class
        this.rotateAnimTime = 2000;

        this.#draw();
    }

    #draw() {
        this.svg
            .append("line")
            .attr("id", this.id)
            .attr("class", "line")
            .attr("x1", this.startPoint.x)
            .attr("y1", this.startPoint.y)
            .attr("x2", this.endPoint.x)
            .attr("y2", this.endPoint.y)
            .attr("stroke", this.lineColor)
            .attr("stroke-width", this.lineWidth);
        this.stroke = this.svg.select(`svg #${this.id}`);
    }
}

export class Vector extends Cubicon {
    constructor({
        group,
        startPoint = { x: 0, y: 0 },
        endPoint,
        vectColor = "#fff",
        vectStrokeWidth = 2,
    }) {
        super({
            group: group,
            position: startPoint,
        });

        this.id = `vect${vectKey++}`;

        this.startPoint = {
            x: xGtoW(startPoint.x),
            y: yGtoW(startPoint.y),
        };
        this.endPoint = {
            x: xGtoW(endPoint.x),
            y: yGtoW(endPoint.y),
        };

        this.vectColor = vectColor;
        this.vectStrokeWidth = vectStrokeWidth;

        this.rotateAnimTime = 2000;

        // this.theta determines the angle between vector's arrow and its line.
        this.theta = rToD(
            Math.atan2(
                this.endPoint.y - this.startPoint.y,
                this.endPoint.x - this.startPoint.x
            )
        );

        this.#draw();
    }

    get gEndPoint() {
        return {
            x: xWtoG(this.endPoint.x),
            y: yWtoG(this.endPoint.y),
        };
    }

    #draw() {
        this.stroke = this.svg
            .append("g")
            .attr("id", `${this.id}-group`)
            .attr("class", "vector")
            .attr("transform-box", "fill-box")
            .attr(
                "transform-origin",
                `${this.startPoint.x} ${this.startPoint.y}`
            );

        this.stroke
            .append("line")
            .attr("id", this.id)
            .attr("x1", this.startPoint.x)
            .attr("y1", this.startPoint.y)
            .attr("x2", this.endPoint.x)
            .attr("y2", this.endPoint.y)
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
                `translate(${this.endPoint.x} ${this.endPoint.y}) rotate(${
                    this.theta - 90
                })`
            );

        this.lineStroke = this.stroke.select("line");
        this.arrowHead = this.stroke.select("polygon");
    }
}
