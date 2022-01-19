import { range } from "d3-array";
//+++++++++++++++++++++++++++++++++++++++++++++++++++//
import { Cubicon } from "./cubicon";
import { Vector2 } from "../math/vector";
import { Group } from "../scene/group";
import { xBound, yBound } from "../cubecubed";
import { Vector } from "./geometry";
import { ANIME } from "./constants";
import { Create } from "../animations/create";
import { hsl, scaleLinear } from "d3";

export class VectorField extends Cubicon {
    readonly cubType = "vector-field";

    /**
     * Multivariable function that produces 2d vector field.
     */
    functionDef: (pos: Vector2) => Vector2;

    /**
     * Vector shapes included in the scene.
     */
    vectorShapes: Vector[] = [];

    constructor(params: {
        /**
         * The group that the cubicon belongs to.
         */
        group: Group;
        /**
         * Multivariable function that produces 2d vector field.
         */
        functionDef: (pos: Vector2) => Vector2;
    }) {
        super({ group: params.group, position: new Vector2(0, 0) });

        this.functionDef = params.functionDef;

        this.render();
    }

    private render() {
        this.checkIfRendered();
        this.isRendered = true;

        this.g_cubiconWrapper = this.svg_group
            .append("g")
            .attr("class", "vector-field-wrapper");

        this.def_cubiconBase = this.g_cubiconWrapper
            .append("g")
            .attr("class", "vector-field-base");

        const maxMagnitude = Math.max(...this.computeMagnitudes());
        this.renderField(maxMagnitude);
    }

    private computeMagnitudes() {
        const xRange = range(xBound[0], xBound[1] + 1, 1);
        const yRange = range(yBound[0], yBound[1] + 1, 1);

        /// Compute magnitudes
        const magnitudes: number[] = [];

        xRange.forEach((x: number) => {
            yRange.forEach((y: number) => {
                const startPoint = new Vector2(x, y);
                const endPoint = this.functionDef(startPoint);
                const vector = endPoint.subtract(startPoint);

                magnitudes.push(vector.magnitude());
            });
        });

        return magnitudes;
    }

    private renderField(maxMagnitude: number) {
        const xRange = range(xBound[0], xBound[1] + 1, 1);
        const yRange = range(yBound[0], yBound[1] + 1, 1);

        xRange.forEach((x: number) => {
            yRange.forEach((y: number) => {
                const startPoint = new Vector2(x, y);
                const endPoint = this.functionDef(startPoint);
                const vector = endPoint.subtract(startPoint);

                const magnitude = vector.magnitude();

                const scalar = magnitude / maxMagnitude;

                /// Render vector shapes
                if (vector.x !== 0 && vector.y !== 0) {
                    const hslUpperLimitAngle = 290;

                    const reverseHslAngle = scaleLinear()
                        .domain([0, hslUpperLimitAngle])
                        .range([hslUpperLimitAngle, 0]);

                    const vectorShape = new Vector({
                        group: this.group,

                        startPoint: startPoint,
                        endPoint: new Vector2(
                            (vector.x / magnitude) * scalar + x,
                            (vector.y / magnitude) * scalar + y
                        ),

                        CONFIG: {
                            lineColor: hsl(
                                reverseHslAngle(
                                    (magnitude / maxMagnitude) *
                                        hslUpperLimitAngle
                                ),
                                1,
                                0.5
                            ).formatHsl(),
                        },
                    }).render();

                    this.vectorShapes.push(vectorShape);
                }
            });
        });
    }

    createVectors() {
        const anims: any[] = [];
        this.vectorShapes.forEach((vectorShape: Vector) =>
            anims.push(new Create({ cubicon: vectorShape }))
        );

        this.group.play(anims);

        this.elapsedTime += ANIME.CREATE;
    }
}
