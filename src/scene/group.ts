import { Animation } from "../animations/animation";
import { FadeOut } from "../animations/fadeOut";
import { svgWidth, svgHeight, TYPES } from "../cubicons/constants";
import { Cubicon } from "../cubicons/cubicon";
import { Scene } from "./scene";

export class Group {
    scene: Scene;
    svg_group: any;
    name: string;
    cubicons: Cubicon[];
    animations: Animation[];
    queueElapsed: number;
    groupElapsed: number;
    sleepTime: number;

    constructor(groupName: string, scene: Scene) {
        this.scene = scene;
        this.svg_group = !scene.svg.select(`#${groupName}`).empty()
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

    play(anims: any[]) {
        anims.forEach((anim) => {
            anim.cubicon.elapsedTime = this.queueElapsed;
            if (typeof anim.lines !== "undefined") {
                anim.lines.forEach(
                    (l: any) => (l.elapsedTime = this.queueElapsed)
                );
            }
        });

        anims.forEach((anim) => {
            this.addAnimation(anim);

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

    sleep(milliseconds: number) {
        this.sleepTime = milliseconds;
    }

    private addAnimation(anim: Animation) {
        this.animations.push(anim);
    }

    add(cubicon: Cubicon) {
        this.cubicons.push(cubicon);
    }

    remove(cubicon: TYPES) {
        if (cubicon.cubType === "geometry") {
            cubicon.group.play([new FadeOut({ cubicon: cubicon })]);
        }
        cubicon.def_cubiconBase
            .transition()
            .delay(cubicon.elapsedTime + this.groupElapsed)
            .duration(0)
            .remove();
    }

    destroy(delay: number) {
        this.svg_group
            .transition()
            .delay(this.groupElapsed + delay)
            .duration(500)
            .style("opacity", 0)
            .remove();
    }
}
