import { FadeOut } from "../animations/fadeOut";
import { svgWidth, svgHeight } from "../cubicons/constants";

export class Group {
    constructor(groupName, scene) {
        this.scene = scene;
        this.svg = !scene.svg.select(`#${groupName}`).empty()
            ? scene.svg.select(`#${groupName}`)
            : scene.svg
                  .append("svg")
                  .attr("id", `${groupName}`)
                  .attr("class", "group")
                  .attr(
                      "viewBox",
                      `${-svgWidth / 2} ${
                          -svgHeight / 2
                      } ${svgWidth} ${svgHeight}`
                  );
        this.name = groupName;

        /// List of all cubicons in this group
        this.cubicons = [];

        /// List of the animations used in this group
        this.animations = [];

        this.queueElapsed = 0;
        this.groupElapsed = 0;

        this.sleepTime = 0;
    }

    play(anims) {
        anims.forEach((anim) => {
            anim.cubicon.elapsedTime = this.queueElapsed;
        });

        anims.forEach((anim) => {
            this.#addAnimation(anim);

            anim.play(this.sleepTime);

            this.sleepTime = 0;
        });

        this.queueElapsed = Math.max(
            ...anims.map((anim) => anim.cubicon.elapsedTime)
        );

        anims.forEach((a) => {
            a.cubicon.elapsedTime = this.queueElapsed;
        });

        this.groupElapsed = this.queueElapsed;
    }

    sleep(milliseconds) {
        this.sleepTime = milliseconds;
    }

    #addAnimation(anim) {
        this.animations.push(anim);
    }

    add(cubicon) {
        this.cubicons.push(cubicon);
    }

    remove(cubicon) {
        cubicon.group.play([new FadeOut({ cubicon: cubicon })]);
        cubicon.stroke
            .transition()
            .delay(cubicon.elapsedTime + this.groupElapsed)
            .duration(0)
            .remove();
    }

    destroy(delay) {
        this.svg
            .transition()
            .delay(this.groupElapsed + delay)
            .duration(500)
            .style("opacity", 0)
            .remove();
    }
}
