import { svg } from "../cubicons/constants";

export class Scene {
    constructor(sceneName) {
        this.svg = !svg.select(`#${sceneName}`).empty()
            ? svg.select(`#${sceneName}`)
            : svg
                  .append("svg")
                  .attr("id", `${sceneName}`)
                  .attr("class", "scene");
        this.name = sceneName;
    }

    destroy(delay) {
        this.svg
            .transition()
            .delay(delay)
            .duration(500)
            .style("opacity", 0)
            .remove();
    }
}
