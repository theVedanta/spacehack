import Satellite from "@/components/Satellite";
import { Environment, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

const VR = () => {
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
                <Environment preset="night" />
                <Satellite />
            </Canvas>
        </div>
    );
};

export default VR;
