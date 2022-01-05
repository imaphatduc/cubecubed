import tap from "tap";

import { Vector2 } from "../../../src/math/vector";

const a = new Vector2(2, 4);

const c = a.scale(2);
tap.equal(c.x, 4);
tap.equal(c.y, 8);

// Check a was not changed
tap.equal(a.x, 2);
tap.equal(a.y, 4);
