import { Scene } from "@scene/Scene";
import { select, Selection } from "d3-selection";
//+++++++++++++++++++++++++++++++++++++++++++++++++++//

export type VideoRecipe = () => number | undefined;

export class Recorder {
    private scene: Scene;
    private recipe: VideoRecipe;

    private fileName: string;

    private playWrapperElement: Selection<
        HTMLDivElement,
        unknown,
        HTMLElement,
        any
    >;
    private playElement: Selection<SVGSVGElement, unknown, HTMLElement, any>;

    private videoElement: Selection<
        HTMLVideoElement,
        unknown,
        HTMLElement,
        any
    >;

    constructor(scene: Scene, recipe: VideoRecipe, fileName = "cubed") {
        this.scene = scene;
        this.recipe = recipe;

        this.fileName = fileName;

        this.videoElement = select("body")
            .append("video")
            .attr("class", "video")
            .attr("width", "600px");
    }

    start() {
        this.playWrapperElement = select("#cubecubed")
            .append("div")
            .attr("class", "play");

        this.playElement = this.playWrapperElement
            .append("svg")
            .attr("xmlns", "http://www.w3.org/2000/svg")
            .attr("width", 32)
            .attr("height", 32)
            .attr("fill", "white")
            .attr("viewBox", "0 0 256 256")
            .on("click", async () => {
                select("body").style("cursor", "none");

                try {
                    const mediaRecorder = await this.getMediaRecorder();

                    this.setMediaRecorderMethods(mediaRecorder);

                    mediaRecorder.start();
                } catch (err) {
                    throw new Error(`Error: ${err}`);
                }
            });

        this.playElement
            .append("path")
            .attr(
                "d",
                "M234.49,111.07,90.41,22.94A20,20,0,0,0,60,39.87V216.13a20,20,0,0,0,30.41,16.93l144.08-88.13a19.82,19.82,0,0,0,0-33.86ZM84,208.85V47.15L216.16,128Z"
            );
    }

    private async getMediaRecorder() {
        const captureStream = await navigator.mediaDevices.getDisplayMedia(
            this.isChromium
                ? {
                      video: true,
                      // @ts-expect-error chromium-specific option
                      preferCurrentTab: true,
                  }
                : {
                      video: true,
                  }
        );

        const mime = this.getMime();

        const mediaRecorder = new MediaRecorder(captureStream, {
            mimeType: mime,
        });

        return mediaRecorder;
    }

    private setMediaRecorderMethods(mediaRecorder: MediaRecorder) {
        const chunks: Blob[] = [];

        mediaRecorder.onstart = () => {
            this.playWrapperElement.remove();
            this.recipe();

            const duration = this.scene.sceneElapsed;

            if (duration) {
                setTimeout(() => {
                    mediaRecorder.stop();
                }, duration);
            }
        };

        mediaRecorder.ondataavailable = (e) => chunks.push(e.data);

        mediaRecorder.onstop = () => {
            select("body").style("cursor", "auto");

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

    private isChromium = /chrome/i.test(navigator.userAgent);
}
