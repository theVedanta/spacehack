import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";

const CONFIDENCE = 0.3;

const getAngle = (p1, p2, c1, c2, m) => {
    if (p1["score"] > CONFIDENCE && p2["score"] > CONFIDENCE) {
        return (
            (Math.atan2(
                p2["position"]["y"] - p1["position"]["y"],
                p2["position"]["x"] - p1["position"]["x"]
            ) +
                c1) *
            m
        );
    }
    return c2 * m;
};

const normalize = (min, max, val) => {
    return ((val - min) / (max - min)) * Math.PI;
};

const getYRotation = (p1, p2, p3) => {
    if (
        p1["score"] > CONFIDENCE &&
        p2["score"] > CONFIDENCE &&
        p3["score"] > CONFIDENCE
    ) {
        let e1 = Math.abs(p1["position"]["x"] - p3["position"]["x"]);
        let e2 = Math.abs(p2["position"]["x"] - p3["position"]["x"]);
        return normalize(-100, 100, e2 - e1) - Math.PI / 2;
    }
    return 0;
};

const getZRotation = (p1, p2) => {
    if (p1["score"] > CONFIDENCE && p2["score"] > CONFIDENCE) {
        let e1 = Math.abs(p1["position"]["y"]);
        let e2 = Math.abs(p2["position"]["y"]);
        return normalize(-80, 80, e2 - e1) - Math.PI / 2;
    }
    return 0;
};

export default function Model(props) {
    let kp;
    const group = useRef();
    const { nodes, materials } = useGLTF("../../../model.glb");

    useFrame((state, delta) => {
        kp = props.getJoints();

        // Left arm & elbow
        nodes.Ch36.skeleton.bones[7].rotation.y = getAngle(
            kp[5],
            kp[7],
            0,
            0,
            -1
        );
        nodes.Ch36.skeleton.bones[9].rotation.x = getAngle(
            kp[7],
            kp[9],
            0,
            0,
            1
        );

        //Right arm & elbow
        nodes.Ch36.skeleton.bones[31].rotation.y = getAngle(
            kp[8],
            kp[6],
            0,
            0,
            -1
        );
        nodes.Ch36.skeleton.bones[33].rotation.x = getAngle(
            kp[10],
            kp[8],
            0,
            0,
            -1
        );

        // Left leg & knee
        nodes.Ch36.skeleton.bones[55].rotation.z = getAngle(
            kp[11],
            kp[13],
            Math.PI / 2,
            Math.PI,
            -1
        );
        //nodes.Ch36.skeleton.bones[56].rotation.z = getAngle(kp[15], kp[13], (Math.PI/2), 0, -1)

        // Right leg & knee
        nodes.Ch36.skeleton.bones[60].rotation.z = getAngle(
            kp[12],
            kp[14],
            Math.PI / 2,
            Math.PI,
            -1
        );
        //nodes.Ch36.skeleton.bones[61].rotation.z = getAngle(kp[16], kp[14], (Math.PI/2), 0, -1)

        // Head
        nodes.Ch36.skeleton.bones[5].rotation.y = getYRotation(
            kp[1],
            kp[2],
            kp[0]
        );
        nodes.Ch36.skeleton.bones[5].rotation.z = getZRotation(kp[1], kp[2]);
    });

    return (
        <group ref={group} {...props} dispose={null}>
            <group
                name="Armature"
                rotation={[Math.PI / 2, 0, 0]}
                scale={[0.01, 0.01, 0.01]}
            >
                <primitive object={nodes.mixamorig1Hips} />
                <skinnedMesh
                    geometry={nodes.Ch36.geometry}
                    material={materials.Ch36_Body}
                    skeleton={nodes.Ch36.skeleton}
                />
            </group>
        </group>
    );
}

useGLTF.preload("/model.glb");
