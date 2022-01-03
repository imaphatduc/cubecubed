import { Animation } from "./animation";

export class RenderText extends Animation {
    constructor(mathText, duration = 1000) {
        super();

        this.cubicon = mathText;
        this.text = mathText.text;
        this.duration = duration;
    }

    play(sleepTime) {
        this.#renderText(this.text, sleepTime);
    }

    #renderText(text, sleepTime) {}
}
