import * as d3 from "d3";
import { svg, svgWidth, svgHeight } from "./constants";
import { xGtoW, xWtoG, yGtoW } from "../math/convertUnit";
import { ANIME } from "./constants";

/// When any of the cubicon objects is created,
// these keys will keep track of that object's own id key
let rectKey = 0;
let circleKey = 0;
let lineKey = 0;

export class Mobject {
    constructor({ position, waitTime }) {
        this.x = xGtoW(position.x);
        this.y = yGtoW(position.y);
        this.moveVector = { x: 0, y: 0 };
        this.angle = 0;

        this.svg = svg;
        this.svgWidth = xGtoW(svgWidth);
        this.svgHeight = xGtoW(svgHeight);

        /// Creating these properties instead of using the constants directly
        // is to manipulate d3js's transition duration locally.
        /// Plus, to let the users control animation time themselves.
        this.createAnimTime = ANIME.CREATE;
        this.translateAnimTime = ANIME.TRANSLATE;
        this.rotateAnimTime = ANIME.ROTATE;
        this.fadeInAnimTime = ANIME.FADEIN;
        this.fadeOutAnimTime = ANIME.FADEOUT;

        // this.elapsedTime keeps track of the time passed by during the animations
        if (waitTime !== undefined && waitTime !== null) {
            this.elapsedTime = waitTime;
        } else this.elapsedTime = 0;

        // I don't know if creating the id property is neccessary, but I like the tidy way!
        this.id = "";
    }

    create() {
        this.stroke.style("fill-opacity", 0);
        const lineLen = this.stroke.node().getTotalLength();

        this.stroke
            .attr("stroke-dasharray", lineLen + ", " + lineLen)
            .attr("stroke-dashoffset", lineLen);

        if (this.fillColor !== undefined && this.fillColor !== null) {
            this.stroke
                .transition()
                .delay(this.elapsedTime)
                .duration(this.createAnimTime)
                .attr("stroke-dashoffset", 0)
                .style("fill", this.fillColor)
                .style("fill-opacity", 0.5);
        } else {
            this.stroke
                .transition()
                .delay(this.elapsedTime)
                .duration(this.createAnimTime)
                .attr("stroke-dashoffset", 0);
        }

        this.elapsedTime += this.createAnimTime;
    }

    translateByVector(vector) {
        this.x += xGtoW(vector.x);
        this.y += xGtoW(vector.y);

        this.moveVector.x += xGtoW(vector.x);
        this.moveVector.y += xGtoW(vector.y);

        this.stroke
            .transition()
            .delay(this.elapsedTime)
            .duration(this.translateAnimTime)
            .attr(
                "transform",
                `translate(${this.moveVector.x}, ${this.moveVector.y}) rotate(${this.angle})`
            );

        this.elapsedTime += this.translateAnimTime;
    }

    // BUG HERE!!!
    // translateToPoint(point) {
    //     // pos1 = [ -2, 0 ]
    //     // point1 = [ 0, 3 ]
    //     // pos2 = [ 0, 3 ]
    //     // point2 = [ 4, -3 ]
    //     this.moveVector.x = xGtoW(point.x) - this.x; // 2 + (4 - 0) = 6
    //     this.moveVector.y = xGtoW(point.y) - this.y; // 3 + (-3 - 3) = -3
    //     // vect1 = [ 2, 3 ]
    //     // vect2 = [ 6, -3 ]

    //     this.x = point.x;
    //     this.y = point.y;

    //     this.stroke
    //         .transition()
    //         .delay(this.elapsedTime)
    //         .duration(this.translateAnimTime)
    //         .attr(
    //             "transform",
    //             `translate(${this.moveVector.x}, ${this.moveVector.y}) rotate(${this.angle})`
    //         );

    //     this.elapsedTime += this.translateAnimTime;
    // }

    rotate(degree) {
        this.angle += degree;
        this.stroke
            .transition()
            .delay(this.elapsedTime)
            .duration(this.rotateAnimTime)
            .attr(
                "transform",
                `translate(${this.moveVector.x}, ${this.moveVector.y}) rotate(${this.angle})`
            );
        this.elapsedTime += this.rotateAnimTime;
    }

    fadeIn() {
        this.stroke.style("stroke-opacity", 0);
        this.stroke
            .transition()
            .delay(this.elapsedTime)
            .duration(this.fadeInAnimTime)
            .style("stroke-opacity", 1)
            .style("fill", this.fillColor)
            .style("fill-opacity", 0.5);
        this.elapsedTime += this.fadeInAnimTime;
    }

    fadeOut() {
        this.stroke
            .transition()
            .delay(this.elapsedTime)
            .duration(this.fadeOutAnimTime)
            .style("opacity", 0);
        this.elapsedTime += this.fadeOutAnimTime;
    }
}

export class Rectangle extends Mobject {
    constructor({
        position,
        width,
        height,
        fillColor,
        strokeColor,
        strokeWidth,
        waitTime,
    }) {
        super({ position: position, waitTime: waitTime });

        this.width = xGtoW(width);
        this.height = xGtoW(height);
        this.strokeColor = strokeColor;
        this.strokeWidth = strokeWidth;

        // These are the coordinate of the draw origin
        this.X = -this.width / 2 + this.x;
        this.Y = this.height / 2 + this.y;

        this.fillColor = fillColor;

        this.#createPath();
    }

    #createPath() {
        const path = d3.path();
        path.moveTo(this.X, this.Y);
        path.lineTo(this.X + this.width, this.Y);
        path.lineTo(this.X + this.width, this.Y - this.height);
        path.lineTo(this.X, this.Y - this.height);
        path.lineTo(this.X, this.Y + this.strokeWidth / 2);

        this.id = `square${rectKey++}`;
        this.svg
            .append("path")
            .attr("id", `${this.id}`)
            .attr("d", path.toString())
            .attr("stroke", this.strokeColor)
            .attr("stroke-width", this.strokeWidth);
        this.stroke = this.svg.select(`svg #${this.id}`);
        this.stroke
            .style("fill", this.fillColor)
            .style("fill-opacity", 0.5)
            .style("transform-box", "fill-box")
            .style("transform-origin", "center");
    }
}

export class Square extends Rectangle {
    constructor({
        position,
        sideLength,
        fillColor,
        strokeColor,
        strokeWidth,
        waitTime,
    }) {
        super({
            position: position,
            width: sideLength,
            height: sideLength,
            fillColor: fillColor,
            strokeColor: strokeColor,
            strokeWidth: strokeWidth,
            waitTime: waitTime,
        });
    }
}

export class Circle extends Mobject {
    constructor({
        position,
        radius,
        fillColor,
        strokeColor,
        strokeWidth,
        waitTime,
    }) {
        super({ position: position, waitTime: waitTime });

        this.radius = xGtoW(radius);
        this.fillColor = fillColor;
        this.strokeColor = strokeColor;
        this.strokeWidth = strokeWidth;
        this.cx = this.x;
        this.cy = this.y;
        this.fillColor = fillColor;

        this.#createPath();
    }

    #createPath() {
        this.id = `circle${circleKey++}`;
        this.svg
            .append("circle")
            .attr("id", `${this.id}`)
            .attr("cx", this.cx)
            .attr("cy", this.cy)
            .attr("r", this.radius)
            .attr("stroke", this.strokeColor)
            .attr("stroke-width", this.strokeWidth);
        this.stroke = this.svg.select(`svg #${this.id}`);
        this.stroke
            .style("transform-box", "fill-box")
            .style("transform-origin", "center");
    }
}

export class GridOrigin extends Circle {
    constructor() {
        super({
            position: { x: 0, y: 0 },
            radius: xWtoG(2.2),
            strokeColor: "#fff",
            strokeWidth: 2,
            waitTime: 200,
        });
    }
}

export class Line extends Mobject {
    constructor({ startPoint, endPoint, lineColor, lineWidth, waitTime }) {
        super({ position: startPoint, waitTime: waitTime });

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

        this.rotateAnimTime = 2000;

        this.#createPath();
    }

    #createPath() {
        this.id = `line${lineKey++}`;
        this.svg
            .append("line")
            .attr("id", this.id)
            .attr("x1", this.startPoint.x)
            .attr("y1", this.startPoint.y)
            .attr("x2", this.endPoint.x)
            .attr("y2", this.endPoint.y)
            .attr("stroke", this.lineColor)
            .attr("stroke-width", this.lineWidth);
        this.stroke = this.svg.select(`svg #${this.id}`);
    }
}
