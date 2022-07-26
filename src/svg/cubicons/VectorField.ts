import { range } from "d3-array";
import { hsl } from "d3-color";
import { scaleLinear } from "d3-scale";
//+++++++++++++++++++++++++++++++++++++++++++++++++++//

import { Vector2 } from "@math/Vector2";

import { Group } from "@group/Group";
import { Cubicon } from "./Cubicon";
import { VectorShape } from "@cubicons/geometry/VectorShape";

export interface VECTOR_FIELD_CONFIG {
    isScaled?: boolean;
    lineColor?: string | "scaled";
    lineWidth?: number;
}

const VECTOR_FIELD_DEFAULT_CONFIG: VECTOR_FIELD_CONFIG = {
    isScaled: false,
    lineColor: "#fff",
    lineWidth: 2,
};

export class VectorField extends Cubicon {
    readonly cubiconType = "VectorField";

    /**
     * Multivariable function that produces 2d vector field.
     */
    functionDef: (pos: Vector2) => Vector2;

    /**
     * Vector shapes included in the scene.
     */
    vectorShapes: VectorShape[] = [];

    /**
     * Config options of the vector field.
     */
    CONFIG: VECTOR_FIELD_CONFIG;

    constructor(params: {
        /**
         * The group that the cubicon belongs to.
         */
        group: Group;
        /**
         * Multivariable function that produces 2d vector field.
         */
        functionDef: (pos: Vector2) => Vector2;
        /**
         * Config options for the vector field.
         */
        CONFIG?: VECTOR_FIELD_CONFIG;
    }) {
        super({ group: params.group, position: new Vector2(0, 0) });

        this.functionDef = params.functionDef;

        this.CONFIG = {
            isScaled:
                params.CONFIG?.isScaled ?? VECTOR_FIELD_DEFAULT_CONFIG.isScaled,
            lineColor:
                params.CONFIG?.lineColor ??
                VECTOR_FIELD_DEFAULT_CONFIG.lineColor,
            lineWidth: params.CONFIG?.lineWidth,
        };

        this.g_cubiconWrapper = this.svg_group
            .append("g")
            .attr("class", "vector-field-wrapper");

        this.def_cubiconBase = this.g_cubiconWrapper
            .append("g")
            .attr("class", "vector-field-base");

        this.initVectorShapes();
    }

    render() {
        this.vectorShapes.forEach((vectorShape) => {
            const magnitudes = this.computeMagnitudes();

            const maxMagnitude = Math.max(...magnitudes);

            const vector = this.functionDef(vectorShape.position);

            const magnitude = vector.magnitude();

            // Scale the result scalar by 0.85 to avoid overlapping
            // between adjacent vectors. If users don't want to scale
            // based on the longest vector, change `maxMagnitude` to `magnitude`.
            vectorShape.endPoint = new Vector2(
                (vector.x / (this.CONFIG.isScaled ? maxMagnitude : magnitude)) *
                    0.85 +
                    vectorShape.position.x,
                (vector.y / (this.CONFIG.isScaled ? maxMagnitude : magnitude)) *
                    0.85 +
                    vectorShape.position.y
            );

            const hslUpperLimitAngle = 290;

            const reverseHslAngle = scaleLinear()
                .domain([0, hslUpperLimitAngle])
                .range([hslUpperLimitAngle, 0]);

            vectorShape.CONFIG.lineColor =
                this.CONFIG.lineColor === "scaled"
                    ? hsl(
                          reverseHslAngle(
                              (magnitude / maxMagnitude) * hslUpperLimitAngle
                          ),
                          1,
                          0.5
                      ).formatHsl()
                    : this.CONFIG.lineColor;

            vectorShape.CONFIG.lineWidth = this.CONFIG.lineWidth;

            vectorShape.render();
        });

        return this;
    }

    private initVectorShapes() {
        const [xs, ys] = this.getXYValues();

        xs.forEach((x) => {
            ys.forEach((y) => {
                const startPoint = new Vector2(x, y);

                const vector = this.functionDef(startPoint);

                if (vector.x !== 0 || vector.y !== 0) {
                    const vectorShape = new VectorShape({
                        group: this.group,
                        startPoint: startPoint,
                        endPoint: new Vector2(0, 0),
                        CONFIG: {
                            arrowWidth: 0.1,
                            arrowHeight: 0.2,
                        },
                    }).render();

                    this.vectorShapes.push(vectorShape);
                }
            });
        });
    }

    private getXYValues() {
        const { xBound, yBound } = this.group;

        const xs = range(xBound[0], xBound[1] + 1, 1);
        const ys = range(yBound[0], yBound[1] + 1, 1);

        return [xs, ys];
    }

    private computeMagnitudes() {
        const [xs, ys] = this.getXYValues();

        const magnitudes: number[] = [];

        xs.forEach((x: number) => {
            ys.forEach((y: number) => {
                const startPoint = new Vector2(x, y);
                const endPoint = this.functionDef(startPoint).add(startPoint);
                const vector = endPoint.subtract(startPoint);

                magnitudes.push(vector.magnitude());
            });
        });

        return magnitudes;
    }
}
