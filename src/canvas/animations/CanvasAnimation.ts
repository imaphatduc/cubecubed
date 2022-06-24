export abstract class CanvasAnimation {
    /**
     * The target cubicon of this animation.
     */
    cubicon: any;

    /**
     * Time to play this animation (in milliseconds).
     */
    duration: number;

    constructor(params: { cubicon: any; duration?: number }) {
        this.cubicon = params.cubicon;
        this.duration = params.duration ?? 0;
    }

    play(t: number) {
        t;
    }
}
