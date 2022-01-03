export class Vector2 {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    add(vect) {
        return new Vector2(this.x + vect.x, this.y + vect.y);
    }

    subtract(vect) {
        return new Vector2(this.x - vect.x, this.y - vect.y);
    }

    scale(scalar) {
        return new Vector2(this.x * scalar, this.y * scalar);
    }

    dot(vect) {
        return this.x * vect.x + this.y * vect.y;
    }

    apply(func) {
        return new Vector2(func(this.x), func(this.y));
    }
}

export class Vector3 {
    constructor(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
    }

    add(vect) {
        return new Vector3(this.x + vect.x, this.y + vect.y, this.z + vect.z);
    }

    subtract(vect) {
        return new Vector3(this.x - vect.x, this.y - vect.y, this.z - vect.z);
    }

    scale(scalar) {
        return new Vector3(this.x * scalar, this.y * scalar, this.z * scalar);
    }

    dot(vect) {
        return this.x * vect.x + this.y * vect.y + this.z * vect.z;
    }

    apply(func) {
        return new Vector3(func(this.x), func(this.y), func(this.z));
    }
}
