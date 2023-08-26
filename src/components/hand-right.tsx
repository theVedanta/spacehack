import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const Model = () => {
    const gltf = useLoader(GLTFLoader, "/hand-right/scene.gltf");

    return (
        <mesh>
            <primitive object={gltf.scene} />
            <meshStandardMaterial />
        </mesh>
    );
};

export default Model;
