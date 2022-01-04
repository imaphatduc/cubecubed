import tap from "tap";

import { Vector3 } from "../../../src/math/vector";

const a = new Vector3(2, 4, -2);
const b = new Vector3(5, -2, -2);

const c = a.subtract(b);
tap.equal(c.x, -3);
tap.equal(c.y, 6);
tap.equal(c.z, 0);

// Check a and b were not changed
tap.equal(a.x, 2);
tap.equal(a.y, 4);
tap.equal(a.z, -2);

tap.equal(b.x, 5);
tap.equal(b.y, -2);
tap.equal(b.z, -2);
