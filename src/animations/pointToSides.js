import { Animation } from "./animation";
import { Create } from "./create";

export class PointToSides extends Animation {
    constructor(linesData, duration = 1000) {
        super();

        this.cubicon = linesData.cubicon;
        this.horizontalLines = linesData.horizontalLines;
        this.verticalLines = linesData.verticalLines;

        this.duration = duration;
    }

    play() {
        this.#pointToSides(this.horizontalLines, this.verticalLines);

        this.cubicon.elapsedTime += this.duration;
    }

    #pointToSides(hors, vers) {
        const anims = [];
        for (let i = 0; i < hors.length; i++) {
            anims.push(new Create({ cubicon: hors[i], duration: 1000 }));
            anims.push(new Create({ cubicon: vers[i], duration: 1000 }));
        }
        this.cubicon.group.play(anims);
    }
}
