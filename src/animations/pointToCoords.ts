import { ANIME, EASE_TYPE } from "../cubicons/constants";
import { AxisProjector, Point } from "../cubicons/coordinateSystem";
import { PT_TO_COORDS_DATA } from "../cubicons/constants";
import { Animation } from "./animation";
import { Create } from "./create";

/**
 * The creation of a point and its two axis projectors.
 */
export class PointToCoords extends Animation {
    private projectors: [AxisProjector, AxisProjector];

    constructor(params: {
        /**
         * The target point object for this animation.
         *
         * This is the result point after calling Axes().pointToCoords(args).
         */
        point: PT_TO_COORDS_DATA;
        /**
         * Time to play this animation. (in milliseconds)
         */
        duration?: number;
        /**
         * Custom easing function for smooth animation.
         */
        ease?: EASE_TYPE;
    }) {
        super({
            cubicon: params.point.point,
            duration: params.duration ?? ANIME.CREATE,
            ease: params.ease,
        });

        this.projectors = params.point.projectors;
    }

    play() {
        this.ptToCoords(this.cubicon, this.projectors);
    }

    private ptToCoords(point: Point, lines: [AxisProjector, AxisProjector]) {
        point.group.play([
            new Create({ cubicon: point }),
            new Create({ cubicon: lines[0] }),
            new Create({ cubicon: lines[1] }),
        ]);
    }
}
