import Satellite from "@/components/Satellite";
import { Environment, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import {
    VRButton,
    ARButton,
    XR,
    Controllers,
    Hands,
    useXR,
    XREvent,
    XRManagerEvent,
} from "@react-three/xr";

const VR = () => {
    return (
        <div className="vr">
            <XRCoding />
        </div>
    );
};

const XRCoding = () => {
    return (
        <>
            <VRButton />
            <Canvas>
                <XR>
                    <Controllers />
                    <Hands />
                    <mesh>
                        <boxGeometry />
                        <meshBasicMaterial color="blue" />
                    </mesh>
                </XR>
            </Canvas>
        </>
    );
};

const CanvasCollection = () => {
    // const {
    //     // An array of connected `XRController`
    //     controllers,
    //     // Whether the XR device is presenting in an XR session
    //     isPresenting,
    //     // Whether hand tracking inputs are active
    //     isHandTracking,
    //     // A THREE.Group representing the XR viewer or player
    //     player,
    //     // The active `XRSession`
    //     session,
    //     // `XRSession` foveation. This can be configured as `foveation` on <XR>. Default is `0`
    //     foveation,
    //     // `XRSession` reference-space type. This can be configured as `referenceSpace` on <XR>. Default is `local-floor`
    //     referenceSpace,
    // } = useXR();

    return (
        <div className="main">
            <Canvas>
                {/* LIGHTING */}
                <ambientLight intensity={1} />
                <pointLight position={[10, 10, 10]} />
                <directionalLight color="white" position={[0, 0, 5]} />

                {/* <OrbitControls /> */}

                <XR
                    foveation={0}
                    frameRate={72 | 90 | 120}
                    referenceSpace="local-floor"
                    onSessionStart={(event: XREvent<XRManagerEvent>) => {}}
                    onSessionEnd={(event: XREvent<XRManagerEvent>) => {}}
                    onVisibilityChange={(event: XREvent<XRSessionEvent>) => {}}
                    onInputSourcesChange={(
                        event: XREvent<XRSessionEvent>
                    ) => {}}
                >
                    <Controllers
                        /** Optional material props to pass to controllers' ray indicators */
                        rayMaterial={{ color: "blue" }}
                        /** Whether to hide controllers' rays on blur. Default is `false` */
                        hideRaysOnBlur={false}
                    />
                    <Hands
                    // // Optional custom models per hand. Default is the Oculus hand model
                    // modelLeft="/hand-left.glb"
                    // modelRight="/hand-right.glb"
                    />
                </XR>

                {/* GEOMETRY */}
                {/* <Model /> */}
                <Environment preset="night" background />
                {/* <Satellite /> */}
            </Canvas>
        </div>
    );
};

export default VR;
