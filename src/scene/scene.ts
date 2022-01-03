import { svg } from "../cubicons/constants";

export class Scene {
    svg: any;
    name: string;

    constructor(sceneName: string) {
        this.svg = !svg.select(`#${sceneName}`).empty()
            ? svg.select(`#${sceneName}`)
            : svg
                  .append("svg")
                  .attr("id", `${sceneName}`)
                  .attr("class", "scene");
        this.name = sceneName;
    }

    destroy(delay: number) {
        this.svg
            .transition()
            .delay(delay)
            .duration(500)
            .style("opacity", 0)
            .remove();
    }
}
