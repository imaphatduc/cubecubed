import { easeCubic } from "d3";
import { Animation } from "./animation";
import { Create } from "./create";

export class PointToSides extends Animation {
    constructor(linesData) {
        super({
            cubicon: linesData.cubicon,
            duration: 2000,
            ease: easeCubic,
        });

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
            anims.push(
                new Create({ cubicon: hors[i], duration: this.duration / 2 })
            );
            anims.push(
                new Create({ cubicon: vers[i], duration: this.duration / 2 })
            );
        }
        this.cubicon.group.play(anims);
    }
}
