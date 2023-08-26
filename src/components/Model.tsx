import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const Model = () => {
    const gltf = useLoader(GLTFLoader, "/satellite/scene.gltf");
    const colorMap = useLoader(
        TextureLoader,
        "/satellite/textures/blinn1SG_specularGlossiness.png"
    );

    return (
        <mesh>
            <primitive object={gltf.scene} />
            <meshStandardMaterial map={colorMap} />
        </mesh>
    );
};

export default Model;
