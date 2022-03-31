export class CanvasAnimation {
    /**
     * The target cubicon of this animation.
     */
    cubicon: any;

    /**
     * Time to play this animation (in milliseconds).
     */
    duration: number;

    constructor(params: { cubicon: any; duration?: number | undefined }) {
        this.cubicon = params.cubicon;
        this.duration = params.duration || 0;
    }
}
