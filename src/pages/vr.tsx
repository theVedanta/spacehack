import Model from "@/components/Model";
import { Environment, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

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
                <Model />
                <Environment preset="night" background />
            </Canvas>
        </div>
    );
};

export default VR;
