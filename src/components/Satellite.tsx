import { useGLTF } from "@react-three/drei";

const Satellite = () => {
    const { nodes, materials }: any = useGLTF("/satellite.glb");

    return (
        <group dispose={null}>
            <group rotation={[-Math.PI / 2, 0, 0]} scale={0.7}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_2.geometry}
                    material={materials.blinn1SG}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_3.geometry}
                    material={materials.blinn1SG}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_4.geometry}
                    material={materials.blinn1SG}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_5.geometry}
                    material={materials.blinn1SG}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_6.geometry}
                    material={materials.blinn1SG}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_7.geometry}
                    material={materials.blinn1SG}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_8.geometry}
                    material={materials.blinn1SG}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_9.geometry}
                    material={materials.blinn1SG}
                />
            </group>
        </group>
    );
};

useGLTF.preload("/satellite.glb");

export default Satellite;
