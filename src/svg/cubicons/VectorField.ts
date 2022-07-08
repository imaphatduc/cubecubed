import { range } from "d3-array";
import { hsl } from "d3-color";
import { scaleLinear } from "d3-scale";
//+++++++++++++++++++++++++++++++++++++++++++++++++++//

import { Vector2 } from "@math/vector";

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
    readonly cubType = "vector-field";

    /**
     * Multivariable function that produces 2d vector field.
     */
    functionDef: (pos: Vector2) => Vector2;

    /**
     * Vector shapes included in the scene.
     */
    vectorShapes: VectorShape[] = [];

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

        const {
            isScaled = VECTOR_FIELD_DEFAULT_CONFIG.isScaled,
            lineColor = VECTOR_FIELD_DEFAULT_CONFIG.lineColor,
            lineWidth = VECTOR_FIELD_DEFAULT_CONFIG.lineWidth,
        } = params.CONFIG ?? VECTOR_FIELD_DEFAULT_CONFIG;

        const CONFIG = { isScaled, lineColor, lineWidth };

        this.render(CONFIG);
    }

    private render(CONFIG: VECTOR_FIELD_CONFIG) {
        this.g_cubiconWrapper = this.svg_group
            .append("g")
            .attr("class", "vector-field-wrapper");

        this.def_cubiconBase = this.g_cubiconWrapper
            .append("g")
            .attr("class", "vector-field-base");

        const maxMagnitude = Math.max(...this.computeMagnitudes());
        this.renderField(maxMagnitude, CONFIG);
    }

    private computeMagnitudes() {
        const { xBound, yBound } = this.group;

        const xRange = range(xBound[0], xBound[1] + 1, 1);
        const yRange = range(yBound[0], yBound[1] + 1, 1);

        /// Compute magnitudes
        const magnitudes: number[] = [];

        xRange.forEach((x: number) => {
            yRange.forEach((y: number) => {
                const startPoint = new Vector2(x, y);
                const endPoint = this.functionDef(startPoint).add(startPoint);
                const vector = endPoint.subtract(startPoint);

                magnitudes.push(vector.magnitude());
            });
        });

        return magnitudes;
    }

    private renderField(maxMagnitude: number, CONFIG: VECTOR_FIELD_CONFIG) {
        const { xBound, yBound } = this.group;

        const xRange = range(xBound[0], xBound[1] + 1, 1);
        const yRange = range(yBound[0], yBound[1] + 1, 1);

        xRange.forEach((x: number) => {
            yRange.forEach((y: number) => {
                const startPoint = new Vector2(x, y);
                const endPoint = this.functionDef(startPoint).add(startPoint);
                const vector = endPoint.subtract(startPoint);

                const magnitude = vector.magnitude();

                /// Render vector shapes
                if (vector.x !== 0 || vector.y !== 0) {
                    const hslUpperLimitAngle = 290;

                    const reverseHslAngle = scaleLinear()
                        .domain([0, hslUpperLimitAngle])
                        .range([hslUpperLimitAngle, 0]);

                    const vectorShape = new VectorShape({
                        group: this.group,

                        startPoint: startPoint,
                        /// Scale the result scalar by 0.85 to avoid overlapping between adjacent vectors
                        /// If users don't want to scale based on the longest vector, change `maxMagnitude` to `magnitude`
                        endPoint: new Vector2(
                            (vector.x /
                                (CONFIG.isScaled ? maxMagnitude : magnitude)) *
                                0.85 +
                                startPoint.x,
                            (vector.y /
                                (CONFIG.isScaled ? maxMagnitude : magnitude)) *
                                0.85 +
                                startPoint.y
                        ),

                        CONFIG: {
                            lineColor:
                                CONFIG.lineColor === "scaled"
                                    ? hsl(
                                          reverseHslAngle(
                                              (magnitude / maxMagnitude) *
                                                  hslUpperLimitAngle
                                          ),
                                          1,
                                          0.5
                                      ).formatHsl()
                                    : CONFIG.lineColor,
                            lineWidth: CONFIG.lineWidth,
                            arrowWidth: 0.1,
                            arrowHeight: 0.2,
                        },
                    }).render();

                    this.vectorShapes.push(vectorShape);
                }
            });
        });
    }
}
