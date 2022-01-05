import tap from "tap";

import { Vector2 } from "../../../src/math/vector";

const a = new Vector2(2, 4);
const f = (x: number) => x ** 2;

const c = a.apply(f);
tap.equal(c.x, f(2));
tap.equal(c.y, f(4));

// Check a was not changed
tap.equal(a.x, 2);
tap.equal(a.y, 4);
