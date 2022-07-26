export type ElementMapFunction = (x: number) => number;

export interface IVector {
    /**
     * Calculate magnitude of vector
     */
    magnitude(): number;

    /**
     * Immutable element-wise addition
     */
    add(vect: IVector): IVector;

    /**
     * Immutable element-wise subtraction
     */
    subtract(vect: IVector): IVector;

    /**
     * Creates a new scaled vector
     */
    scale(scalar: number): IVector;

    /**
     * Returns the dot product of two vectors
     */
    dot(vect: IVector): number;

    /**
     * Returns a new vector with element-wise function mapping
     */
    apply(func: ElementMapFunction): IVector;
}
