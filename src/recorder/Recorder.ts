import { select, Selection } from "d3-selection";

type VideoRecipe = () => void;

export class Recorder {
    private recipe: VideoRecipe;

    private videoElement: Selection<
        HTMLVideoElement,
        unknown,
        HTMLElement,
        any
    >;

    constructor(recipe: VideoRecipe) {
        this.recipe = recipe;

        this.videoElement = select("body")
            .append("video")
            .attr("class", "video")
            .attr("width", "600px");
    }

    async start() {
        try {
            const captureStream = await navigator.mediaDevices.getDisplayMedia({
                video: true,
            });

            const mime = MediaRecorder.isTypeSupported("video/webm; codecs=vp9")
                ? "video/webm; codecs=vp9"
                : "video/webm";

            const mediaRecorder = new MediaRecorder(captureStream, {
                mimeType: mime,
            });

            const chunks: Blob[] = [];

            mediaRecorder.onstart = () => this.recipe();

            mediaRecorder.ondataavailable = (e) => chunks.push(e.data);

            mediaRecorder.onstop = () => {
                const blob = new Blob(chunks, {
                    type: chunks[0].type,
                });

                const url = URL.createObjectURL(blob);

                this.videoElement.attr("src", url);

                const a = document.createElement("a");
                a.href = url;
                a.download = "video.webm";
                a.click();
            };

            mediaRecorder.start();
        } catch (err) {
            throw new Error(`Error: ${err}`);
        }
    }
}
