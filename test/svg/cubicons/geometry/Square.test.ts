import { beforeAll, describe, expect, it } from "vitest";

import { Scene } from "@scene/Scene";
import { Group } from "@group/Group";

import { Square } from "@cubicons/geometry/Square";

describe("Square", () => {
    let scene: Scene;
    let group: Group;

    beforeAll(() => {
        scene = new Scene("square-test-scene");
        group = new Group("square-test", scene);
    });

    describe("definePath", () => {
        it("not expects empty path string when sideLength > 0", () => {
            const sideLength = 2;

            const square = new Square({
                group: group,
                sideLength: sideLength,
            }).render();

            expect(square["definePath"]().toString()).toBeTypeOf("string");
            expect(square["definePath"]().toString()).not.toHaveLength(0);
        });
    });

    describe("getSideLength", () => {
        it("expects the returned sideLength to equal to both width & length", () => {
            const sideLength = 2;

            const square = new Square({
                group: group,
                sideLength: sideLength,
            }).render();

            expect(square.getSideLength()).toBe(sideLength);
            expect(square.getSideLength()).toBe(square.width);
            expect(square.getSideLength()).toBe(square.height);
        });
    });
});
