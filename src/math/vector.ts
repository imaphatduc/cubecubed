type MAP_FUNC = (x: number) => number;

export class Vector2 {
    x: number;
    y: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    add(vect: Vector2) {
        return new Vector2(this.x + vect.x, this.y + vect.y);
    }

    subtract(vect: Vector2) {
        return new Vector2(this.x - vect.x, this.y - vect.y);
    }

    scale(scalar: number) {
        return new Vector2(this.x * scalar, this.y * scalar);
    }

    dot(vect: Vector2) {
        return this.x * vect.x + this.y * vect.y;
    }

    apply(func: MAP_FUNC) {
        return new Vector2(func(this.x), func(this.y));
    }
}

export class Vector3 {
    x: number;
    y: number;
    z: number;

    constructor(x: number, y: number, z: number) {
        this.x = x;
        this.y = y;
        this.z = z;
    }

    add(vect: Vector3) {
        return new Vector3(this.x + vect.x, this.y + vect.y, this.z + vect.z);
    }

    subtract(vect: Vector3) {
        return new Vector3(this.x - vect.x, this.y - vect.y, this.z - vect.z);
    }

    scale(scalar: number) {
        return new Vector3(this.x * scalar, this.y * scalar, this.z * scalar);
    }

    dot(vect: Vector3) {
        return this.x * vect.x + this.y * vect.y + this.z * vect.z;
    }

    apply(func: MAP_FUNC) {
        return new Vector3(func(this.x), func(this.y), func(this.z));
    }
}
