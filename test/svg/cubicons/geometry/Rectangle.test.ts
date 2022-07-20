import { beforeAll, describe, expect, it } from "vitest";

import { Scene } from "@scene/Scene";
import { Group } from "@group/Group";

import { Rectangle } from "@cubicons/geometry/Rectangle";

describe("Rectangle", () => {
    let scene: Scene;
    let group: Group;

    beforeAll(() => {
        scene = new Scene("square-test-scene");
        group = new Group("square-test", scene);
    });

    describe("drawInnerGrid", () => {
        it("should returns a rectangle grid data", () => {
            const width = 3;
            const height = 2;

            const rectangle = new Rectangle({
                group: group,
                width: width,
                height: height,
            }).render();

            const { horizontalLines, verticalLines } =
                rectangle.drawInnerGrid();

            expect(horizontalLines).toBeTypeOf("object");
            expect(verticalLines).toBeTypeOf("object");

            expect(horizontalLines).length.greaterThanOrEqual(0);
            expect(verticalLines).length.greaterThanOrEqual(0);
        });
    });
});
