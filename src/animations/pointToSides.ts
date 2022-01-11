import { EASE_TYPE, PT_TO_SIDES_DATA } from "../cubicons/constants";
import { Line } from "../cubicons/geometry";
import { Animation } from "./animation";
import { Create } from "./create";

/**
 * Create horizontal and vertical line from a set of point to rectangle/square sides.
 *
 * **Note** that you have to call either of Rectangle().pointToSides(args) or Square().pointToSides(args) to play this animation.
 */
export class PointToSides extends Animation {
    private horizontalLines: Line[];
    private verticalLines: Line[];

    /**
     * @param data The returned data after calling Rectangle().pointToSides(args) or Square().pointToSides(args).
     *
     * @param duration Time to play this animation. (in milliseconds)
     *
     * @param ease Custom easing function for smooth animation.
     */
    constructor(data: PT_TO_SIDES_DATA, duration = 1000, ease: EASE_TYPE) {
        super({ cubicon: data.cubicon, duration: duration, ease: ease });

        this.horizontalLines = data.horizontalLines;
        this.verticalLines = data.verticalLines;
    }

    play() {
        this.pointToSides(this.horizontalLines, this.verticalLines);

        this.cubicon.elapsedTime += this.duration;
    }

    private pointToSides(hors: Line[], vers: Line[]) {
        const anims = [];
        for (let i = 0; i < hors.length; i++) {
            anims.push(new Create({ cubicon: hors[i], duration: 1000 }));
            anims.push(new Create({ cubicon: vers[i], duration: 1000 }));
        }
        this.cubicon.group.play(anims);
    }
}
