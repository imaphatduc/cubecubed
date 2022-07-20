import tap from "tap";

import { Vector2 } from "../../../src/math/vector";

const a = new Vector2(2, 4);
const b = new Vector2(5, -2);

const c = a.add(b);
tap.equal(c.x, 7);
tap.equal(c.y, 2);

// Check a and b were not changed
tap.equal(a.x, 2);
tap.equal(a.y, 4);

tap.equal(b.x, 5);
tap.equal(b.y, -2);
