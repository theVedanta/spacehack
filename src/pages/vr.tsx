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
            <CanvasCollection />
        </div>
    );
};

const CanvasCollection = () => {
    return (
        <div className="main">
            <Canvas>
                {/* LIGHTING */}
                <ambientLight intensity={1} />
                <pointLight position={[10, 10, 10]} />
                <directionalLight color="white" position={[0, 0, 5]} />

                <OrbitControls />

                {/* GEOMETRY */}
                {/* <Model /> */}
                <Environment preset="night" background />
                <Satellite />
            </Canvas>
        </div>
    );
};

export default VR;
