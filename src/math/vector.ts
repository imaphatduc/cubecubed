type ElementMapFunction = (x: number) => number;

interface IVector {
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

export class Vector2 implements IVector {
    x: number;
    y: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    add(vect: Vector2): Vector2 {
        return new Vector2(this.x + vect.x, this.y + vect.y);
    }

    subtract(vect: Vector2): Vector2 {
        return new Vector2(this.x - vect.x, this.y - vect.y);
    }

    scale(scalar: number): Vector2 {
        return new Vector2(this.x * scalar, this.y * scalar);
    }

    dot(vect: Vector2): number {
        return this.x * vect.x + this.y * vect.y;
    }

    apply(func: ElementMapFunction): Vector2 {
        return new Vector2(func(this.x), func(this.y));
    }
}

export class Vector3 implements IVector {
    x: number;
    y: number;
    z: number;

    constructor(x: number, y: number, z: number) {
        this.x = x;
        this.y = y;
        this.z = z;
    }

    add(vect: Vector3): Vector3 {
        return new Vector3(this.x + vect.x, this.y + vect.y, this.z + vect.z);
    }

    subtract(vect: Vector3): Vector3 {
        return new Vector3(this.x - vect.x, this.y - vect.y, this.z - vect.z);
    }

    scale(scalar: number): Vector3 {
        return new Vector3(this.x * scalar, this.y * scalar, this.z * scalar);
    }

    dot(vect: Vector3): number {
        return this.x * vect.x + this.y * vect.y + this.z * vect.z;
    }

    apply(func: ElementMapFunction): Vector3 {
        return new Vector3(func(this.x), func(this.y), func(this.z));
    }
}
