import { beforeAll, describe, expect, it } from "vitest";

import { Vector3 } from "@math/Vector3";

describe("Vector3", () => {
    let a: Vector3;
    let b: Vector3;

    beforeAll(() => {
        a = new Vector3(2, 4, 0);
        b = new Vector3(5, -2, 2);
    });

    it("computes the magnitude of a", () => {
        const magnitude = a.magnitude();

        expect(magnitude).toBe(2 * Math.sqrt(5));

        // checks a were not changed
        expect(a.x).toBe(2);
        expect(a.y).toBe(4);
        expect(a.z).toBe(0);
    });

    it("adds vectors a and b", () => {
        const c = a.add(b);

        expect(c.x).toBe(7);
        expect(c.y).toBe(2);
        expect(c.z).toBe(2);

        // checks a and b were not changed
        expect(a.x).toBe(2);
        expect(a.y).toBe(4);
        expect(a.z).toBe(0);

        expect(b.x).toBe(5);
        expect(b.y).toBe(-2);
        expect(b.z).toBe(2);
    });

    it("subtracts vectors b from a", () => {
        const c = a.subtract(b);

        expect(c.x).toBe(-3);
        expect(c.y).toBe(6);
        expect(c.z).toBe(-2);

        // checks a and b were not changed
        expect(a.x).toBe(2);
        expect(a.y).toBe(4);
        expect(a.z).toBe(0);

        expect(b.x).toBe(5);
        expect(b.y).toBe(-2);
        expect(b.z).toBe(2);
    });

    it("scales a by a scalar", () => {
        const c = a.scale(2);

        expect(c.x).toBe(4);
        expect(c.y).toBe(8);
        expect(c.z).toBe(0);

        // checks a were not changed
        expect(a.x).toBe(2);
        expect(a.y).toBe(4);
        expect(a.z).toBe(0);
    });

    it("calculates the dot product of a and b", () => {
        const dot = a.dot(b);

        expect(dot).toBe(2);

        // checks a and b were not changed
        expect(a.x).toBe(2);
        expect(a.y).toBe(4);
        expect(a.z).toBe(0);

        expect(b.x).toBe(5);
        expect(b.y).toBe(-2);
        expect(b.z).toBe(2);
    });

    it("applies element map function to a", () => {
        const f = (x: number) => x ** 2;

        const c = a.apply(f);

        expect(c.x).toBe(f(2));
        expect(c.y).toBe(f(4));
        expect(c.z).toBe(f(0));

        // checks a were not changed
        expect(a.x).toBe(2);
        expect(a.y).toBe(4);
        expect(a.z).toBe(0);
    });
});
