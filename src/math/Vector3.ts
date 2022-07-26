import { ElementMapFunction, IVector } from "./vector";

/**
 * Specify a mathematical Vector3D.
 */
export class Vector3 implements IVector {
    x: number;
    y: number;
    z: number;

    constructor(x: number, y: number, z: number) {
        this.x = x;
        this.y = y;
        this.z = z;
    }

    magnitude(): number {
        return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
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

    /**
     * Apply the same function to all three coordinates of this vector.
     */
    apply(func: ElementMapFunction): Vector3 {
        return new Vector3(func(this.x), func(this.y), func(this.z));
    }
}
