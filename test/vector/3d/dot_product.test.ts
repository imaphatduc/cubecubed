import tap from "tap";

import { Vector3 } from "../../../src/math/vector";

const a = new Vector3(2, 4, 2);
const b = new Vector3(1, 2, 1);

const c = a.dot(b);
tap.equal(c, 12);

// Check a and b were not changed
tap.equal(a.x, 2);
tap.equal(a.y, 4);
tap.equal(a.z, 2);

tap.equal(b.x, 1);
tap.equal(b.y, 2);
tap.equal(b.z, 1);
