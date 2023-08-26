import { Camera } from "@mediapipe/camera_utils";
import { drawConnectors, drawLandmarks } from "@mediapipe/drawing_utils";
import { Hands, HAND_CONNECTIONS } from "@mediapipe/hands";
import { useEffect, useRef } from "react";

const Home = () => {
    const videoRef = useRef();
    const canvasRef = useRef();

    useEffect(() => {
        try {
            if (!videoRef || !canvasRef) return;
            const canvasCtx = canvasRef.current.getContext("2d");
            function onResults(results) {
                canvasCtx.save();
                canvasCtx.clearRect(
                    0,
                    0,
                    canvasRef.current.width,
                    canvasRef.current.height
                );
                canvasCtx.drawImage(
                    results.image,
                    0,
                    0,
                    canvasRef.current.width,
                    canvasRef.current.height
                );
                if (results.multiHandLandmarks) {
                    for (const landmarks of results.multiHandLandmarks) {
                        drawConnectors(canvasCtx, landmarks, HAND_CONNECTIONS, {
                            color: "#00FF00",
                            lineWidth: 5,
                        });
                        drawLandmarks(canvasCtx, landmarks, {
                            color: "red",
                            lineWidth: 2,
                        });
                    }
                }
                canvasCtx.restore();
            }

            const hands = new Hands({
                locateFile: (file) => {
                    return `https://cdn.jsdelivr.net/npm/@mediapipe/hands/${file}`;
                },
            });
            hands.setOptions({
                maxNumHands: 2,
                modelComplexity: 1,
                minDetectionConfidence: 0.5,
                minTrackingConfidence: 0.5,
            });
            hands.onResults(onResults);

            const camera = new Camera(videoRef.current, {
                onFrame: async () => {
                    await hands.send({ image: videoRef.current });
                },
                width: 1280,
                height: 720,
            });
            camera.start();
        } catch (e) {
            console.log(e);
        }
    });

    return (
        <>
            <div className="container">
                <video
                    className="input_video"
                    hidden={true}
                    ref={videoRef}
                ></video>
                <canvas
                    className="output_canvas"
                    width="1280px"
                    height="720px"
                    ref={canvasRef}
                ></canvas>
            </div>
        </>
    );
};

export default Home;
