import { EASE_TYPE, PT_TO_SIDES_DATA } from "../cubicons/constants";
import { Line } from "../cubicons/geometry";
import { Animation } from "./animation";
import { Create } from "./create";

export class PointToSides extends Animation {
    private horizontalLines: Line[];
    private verticalLines: Line[];

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
