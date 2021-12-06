import { svg, svgWidth, svgHeight } from "../cubicons/constants";
import { xWtoG, yWtoG } from "../math/convertUnit";

export class Scene {
    constructor(sceneName) {
        this.svg = !svg.select(`#${sceneName}`).empty()
            ? svg.select(`#${sceneName}`)
            : svg
                  .append("svg")
                  .attr("id", `${sceneName}`)
                  .attr(
                      "viewBox",
                      `${-svgWidth / 2} ${
                          -svgHeight / 2
                      } ${svgWidth} ${svgHeight}`
                  );
        this.name = sceneName;
        this.svgWidth = xWtoG(svgWidth);
        this.svgHeight = yWtoG(svgHeight);

        this.cubicons = [];

        this.animCubicons = [];
        this.animCubiconsId = [];
        this.animations = [];

        this.queueElapsed = 0;
        this.sceneElapsed = 0;
    }

    play(anims) {
        anims.forEach((anim) => {
            anim.cubicon.elapsedTime = this.queueElapsed;
        });

        anims.forEach((anim) => {
            this.#addAnimation(anim);

            anim.play();
        });

        this.queueElapsed = Math.max(
            ...anims.map((a) => a.cubicon.elapsedTime)
        );

        anims.forEach((a) => {
            a.cubicon.elapsedTime = this.queueElapsed;
        });

        this.sceneElapsed += this.queueElapsed;
    }

    #addAnimation(anim) {
        this.animations.push(anim);
    }

    add(cubicon) {
        this.cubicons.push(cubicon);
    }

    remove(cubicon, waitTime) {
        cubicon.stroke
            .transition()
            .delay(cubicon.elapsedTime + waitTime)
            .duration(0)
            .remove();
    }

    destroy(delay) {
        this.svg.transition().delay(delay).duration(0).remove();
    }
}
