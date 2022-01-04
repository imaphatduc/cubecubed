import tap from "tap";

import { Vector3 } from "../../../src/math/vector";

const a = new Vector3(2, 4, 3);
const f = (x: number) => x ** 2;

const c = a.apply(f);
tap.equal(c.x, f(2));
tap.equal(c.y, f(4));
tap.equal(c.z, f(3));

// Check a was not changed
tap.equal(a.x, 2);
tap.equal(a.y, 4);
tap.equal(a.z, 3);
