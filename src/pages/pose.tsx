import * as poseDetection from "@tensorflow-models/pose-detection";
// import "@tensorflow/tfjs-backend-webgl";
// import "@mediapipe/pose";

const Pose = () => {
    (async () => {
        const model = poseDetection.SupportedModels.BlazePose;
        const detectorConfig = {
            runtime: "mediapipe", // or 'tfjs'
            modelType: "full",
        };
        const detector = await poseDetection.createDetector(
            model,
            detectorConfig
        );
    })();

    return <div>Pose</div>;
};

export default Pose;
