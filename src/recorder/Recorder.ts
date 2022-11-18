import { select, Selection } from "d3-selection";
//+++++++++++++++++++++++++++++++++++++++++++++++++++//

export type VideoRecipe = () => void;

export class Recorder {
    private recipe: VideoRecipe;

    private fileName: string;

    private videoElement: Selection<
        HTMLVideoElement,
        unknown,
        HTMLElement,
        any
    >;

    constructor(recipe: VideoRecipe, fileName = "cubed") {
        this.recipe = recipe;

        this.fileName = fileName;

        this.videoElement = select("body")
            .append("video")
            .attr("class", "video")
            .attr("width", "600px");
    }

    async start() {
        try {
            const mediaRecorder = await this.getMediaRecorder();

            this.setMediaRecorderMethods(mediaRecorder);

            mediaRecorder.start();
        } catch (err) {
            throw new Error(`Error: ${err}`);
        }
    }

    private async getMediaRecorder() {
        const captureStream = await navigator.mediaDevices.getDisplayMedia({
            video: true,
        });

        const mime = this.getMime();

        const mediaRecorder = new MediaRecorder(captureStream, {
            mimeType: mime,
        });

        return mediaRecorder;
    }

    private setMediaRecorderMethods(mediaRecorder: MediaRecorder) {
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
            a.download = this.fileName;
            a.click();
        };
    }

    private getMime() {
        const mime = MediaRecorder.isTypeSupported("video/webm; codecs=vp9")
            ? "video/webm; codecs=vp9"
            : "video/webm";

        return mime;
    }
}
