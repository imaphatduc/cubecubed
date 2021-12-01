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
}
