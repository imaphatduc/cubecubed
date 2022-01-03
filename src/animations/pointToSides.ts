import { Animation } from "./animation";
import { Create } from "./create";

export class PointToSides extends Animation {
    constructor(linesData, duration = 1000, ease) {
        super({ cubicon: linesData.cubicon, duration: duration, ease: ease });

        this.horizontalLines = linesData.horizontalLines;
        this.verticalLines = linesData.verticalLines;
    }

    play() {
        this.#pointToSides(this.horizontalLines, this.verticalLines);

        this.cubicon.elapsedTime += this.duration;
    }

    #pointToSides(hors, vers) {
        const anims = [];
        for (let i = 0; i < hors.length; i++) {
            anims.push(new Create(hors[i], 1000));
            anims.push(new Create(vers[i], 1000));
        }
        this.cubicon.group.play(anims);
    }
}
