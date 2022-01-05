import tap from "tap";

import { Vector3 } from "../../../src/math/vector";

const a = new Vector3(2, 4, 10);

const c = a.scale(2);
tap.equal(c.x, 4);
tap.equal(c.y, 8);
tap.equal(c.z, 20);

// Check a was not changed
tap.equal(a.x, 2);
tap.equal(a.y, 4);
tap.equal(a.z, 10);
