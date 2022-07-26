import { beforeAll, describe, expect, it } from "vitest";

import { Vector2 } from "@math/Vector2";

describe("Vector2", () => {
    let a: Vector2;
    let b: Vector2;

    beforeAll(() => {
        a = new Vector2(1, 2);
        b = new Vector2(2, -1);
    });

    it("computes the magnitude of a", () => {
        const magnitude = a.magnitude();

        expect(magnitude).toBe(Math.sqrt(5));

        // checks a were not changed
        expect(a.x).toBe(1);
        expect(a.y).toBe(2);
    });

    it("adds vectors a and b", () => {
        const c = a.add(b);

        expect(c.x).toBe(3);
        expect(c.y).toBe(1);

        // checks a and b were not changed
        expect(a.x).toBe(1);
        expect(a.y).toBe(2);

        expect(b.x).toBe(2);
        expect(b.y).toBe(-1);
    });

    it("subtracts vectors b from a", () => {
        const c = a.subtract(b);

        expect(c.x).toBe(-1);
        expect(c.y).toBe(3);

        // checks a and b were not changed
        expect(a.x).toBe(1);
        expect(a.y).toBe(2);

        expect(b.x).toBe(2);
        expect(b.y).toBe(-1);
    });

    it("scales a by a scalar", () => {
        const c = a.scale(2);

        expect(c.x).toBe(2);
        expect(c.y).toBe(4);

        // checks a were not changed
        expect(a.x).toBe(1);
        expect(a.y).toBe(2);
    });

    it("calculates the dot product of a and b", () => {
        const dot = a.dot(b);

        expect(dot).toBe(0);

        // checks a and b were not changed
        expect(a.x).toBe(1);
        expect(a.y).toBe(2);

        expect(b.x).toBe(2);
        expect(b.y).toBe(-1);
    });

    it("applies element map function to a", () => {
        const f = (x: number) => x ** 2;

        const c = a.apply(f);

        expect(c.x).toBe(f(1));
        expect(c.y).toBe(f(2));

        // checks a were not changed
        expect(a.x).toBe(1);
        expect(a.y).toBe(2);
    });
});
