import { ElementMapFunction, IVector } from "./vector";

/**
 * Specify a mathematical Vector2D.
 */
export class Vector2 implements IVector {
    x: number;
    y: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    magnitude(): number {
        return Math.sqrt(this.x * this.x + this.y * this.y);
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

    /**
     * Apply the same function to both coordinates of this vector.
     */
    apply(func: ElementMapFunction): Vector2 {
        return new Vector2(func(this.x), func(this.y));
    }
}
