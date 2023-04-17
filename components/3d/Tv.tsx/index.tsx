"use client"
/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: Alfking49 (https://sketchfab.com/alfking49)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/retro-television-mitsubishi-6a9de08e17204d7692b3d9f6927c7b6d
title: Retro Television - Mitsubishi
*/

import React, { useRef, useState, useEffect } from "react"
import { MeshTransmissionMaterial, useGLTF } from "@react-three/drei"
import { GLTF } from "three/examples/jsm/loaders/GLTFLoader"
import * as THREE from "three"

type GLTFResult = GLTF & {
    nodes: any
    materials: {
        ["Metal"]: THREE.MeshStandardMaterial
    } & any
}

export function Tv({ ready, src, ...props }: any) {
    const [position, setPosition] = useState(0.5)
    const { nodes, materials } = useGLTF(
        "/assets/models/retro_tv.glb"
    ) as unknown as GLTFResult

    const [video] = useState(() =>
        Object.assign(document.createElement("video"), {
            src,
            crossOrigin: "Anonymous",
            loop: true,
            muted: true,
        })
    )

    useEffect(() => {
        video.src = src
    }, [src])

    useEffect(
        () => void (ready && video.play().catch((_) => {})),
        [ready, video]
    )

    useEffect(() => {
        const resizeHandler = () => {
            window.innerWidth > 1280 ? setPosition(0.5) : setPosition(0)
        }
        window.addEventListener("resize", resizeHandler)
        return () => window.removeEventListener("resize", resizeHandler)
    }, [])

    return (
        <group {...props} dispose={null} position={[position, 0, -0.3]}>
            <group rotation={[-Math.PI / 2, 0, 0]}>
                <group rotation={[Math.PI / 2, 0, 0]}>
                    <group
                        position={[-0.01, 0.06, 0.01]}
                        rotation={[0, 0, -Math.PI / 4]}
                        scale={0}
                    >
                        <group
                            position={[11.64, 9.65, -0.51]}
                            rotation={[-Math.PI, 0, -Math.PI / 4]}
                            scale={[-0.42, 1.44, 0.91]}
                        >
                            <mesh
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_6.geometry}
                                material={materials.Metal}
                            />
                        </group>
                        <group
                            position={[16.44, 14.42, -1.14]}
                            rotation={[0, 0, Math.PI / 4]}
                            scale={[1.23, 1.48, 1.58]}
                        >
                            <mesh
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_8.geometry}
                                material={materials.Metal}
                            />
                        </group>
                        <group
                            position={[5.67, 3.68, -0.51]}
                            rotation={[-Math.PI, 0, -Math.PI / 4]}
                            scale={[-0.42, 1.44, 0.91]}
                        >
                            <mesh
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_10.geometry}
                                material={materials.Metal}
                            />
                        </group>
                        <group
                            position={[13.46, 11.47, -0.51]}
                            rotation={[-Math.PI, 0, -Math.PI / 4]}
                            scale={[-0.42, 1.44, 0.91]}
                        >
                            <mesh
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_12.geometry}
                                material={materials.Metal}
                            />
                        </group>
                        <group
                            position={[17.78, 15.79, -0.51]}
                            rotation={[-Math.PI, 0, -Math.PI / 4]}
                            scale={[-0.42, 1.44, 0.91]}
                        >
                            <mesh
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_14.geometry}
                                material={materials.Metal}
                            />
                        </group>
                        <group
                            position={[4.09, 2.13, -1.23]}
                            rotation={[0, 0, Math.PI / 4]}
                            scale={[1.59, 1.47, 1.59]}
                        >
                            <mesh
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_16.geometry}
                                material={materials.Metal}
                            />
                        </group>
                        <group
                            position={[8.68, 6.69, -0.51]}
                            rotation={[-Math.PI, 0, -Math.PI / 4]}
                            scale={[-0.42, 1.44, 0.91]}
                        >
                            <mesh
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_18.geometry}
                                material={materials.Metal}
                            />
                        </group>
                        <group
                            position={[14.72, 12.73, -0.51]}
                            rotation={[-Math.PI, 0, -Math.PI / 4]}
                            scale={[-0.42, 1.44, 0.91]}
                        >
                            <mesh
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_20.geometry}
                                material={materials.Metal}
                            />
                        </group>
                        <group
                            position={[2.52, -0.51, -0.34]}
                            rotation={[0, 0, Math.PI / 4]}
                            scale={0.72}
                        >
                            <mesh
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_22.geometry}
                                material={materials.Metal}
                            />
                        </group>
                        <group
                            position={[0.51, -2.52, -0.34]}
                            rotation={[Math.PI, 0, 2.36]}
                            scale={0.72}
                        >
                            <mesh
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_24.geometry}
                                material={materials.Metal}
                            />
                        </group>
                        <group
                            position={[6.95, 4.96, -0.51]}
                            rotation={[-Math.PI, 0, -Math.PI / 4]}
                            scale={[-0.42, 1.44, 0.91]}
                        >
                            <mesh
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_26.geometry}
                                material={materials.Metal}
                            />
                        </group>
                        <group
                            position={[9.85, 7.87, -0.51]}
                            rotation={[-Math.PI, 0, -Math.PI / 4]}
                            scale={[-0.42, 1.44, 0.91]}
                        >
                            <mesh
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_28.geometry}
                                material={materials.Metal}
                            />
                        </group>
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_4.geometry}
                            material={materials.Metal}
                        />
                    </group>
                    <group
                        position={[0.02, 0.27, -0.45]}
                        scale={[0.35, 0.29, 0.56]}
                    >
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_30.geometry}
                            material={materials["Material.001"]}
                        />
                    </group>
                    <group
                        position={[0.01, 0.27, 0]}
                        scale={[-0.32, 0.27, 0.01]}
                    >
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_32.geometry}
                            material={materials.Grey_Plastic}
                        />
                    </group>
                    <group
                        position={[0.01, 0.26, -0.08]}
                        scale={[0.32, 0.28, 0.07]}
                    >
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_34.geometry}
                            material={materials.Black_Siding}
                        />
                    </group>
                    <group
                        position={[0, 0.27, -0.16]}
                        scale={[0.25, 0.25, 0.01]}
                    >
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_36.geometry}
                            material={materials.Grey_Plastic}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_37.geometry}
                            material={materials.Grey_Plastic}
                        />
                    </group>
                    <group position={[0.01, 0.06, 0]} scale={[0.03, 0, 0.02]}>
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_39.geometry}
                            material={materials.Black_Plastic}
                        />
                    </group>
                    <group
                        position={[0.01, 0.23, -0.28]}
                        scale={[0.3, 0.25, 0.12]}
                    >
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_41.geometry}
                            material={materials.Black_Siding}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_42.geometry}
                            material={materials["S-Video"]}
                        ></mesh>
                    </group>
                    <group
                        position={[0.01, 0.36, -0.36]}
                        scale={[0.12, 0.11, 0.05]}
                    >
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_44.geometry}
                            material={materials.Black_Siding}
                        />
                    </group>
                    <group
                        position={[0, 0.02, -0.01]}
                        rotation={[-Math.PI, 0, -Math.PI]}
                        scale={[-0.21, 0.02, 0.01]}
                    >
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_46.geometry}
                            material={materials.Black_Siding}
                        />
                    </group>
                    <group
                        position={[0, -0.04, -0.01]}
                        rotation={[-Math.PI, 0, -Math.PI]}
                        scale={[-0.22, 0.08, 0.01]}
                    >
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_48.geometry}
                            material={materials.Grey_Plastic}
                        />
                    </group>
                    <group
                        position={[0, -0.04, -0.01]}
                        rotation={[-Math.PI, 0, -Math.PI]}
                        scale={[-0.22, 0.08, 0.01]}
                    >
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_50.geometry}
                            material={materials.Grey_Plastic}
                        />
                    </group>
                    <group
                        position={[0, -0.04, -0.01]}
                        rotation={[-Math.PI, 0, -Math.PI]}
                        scale={[-0.22, 0.08, 0.01]}
                    >
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_52.geometry}
                            material={materials.Black_Plastic}
                        />
                    </group>
                    <group
                        position={[0.06, -0.01, -0.3]}
                        scale={[1.18, 0.02, 1]}
                    >
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_54.geometry}
                            material={materials.Black_Siding}
                        />
                    </group>
                    <group
                        position={[-0.26, -0.02, -0.03]}
                        scale={[0.05, 0.02, 0.05]}
                    >
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_56.geometry}
                            material={materials.Black_Siding}
                        />
                    </group>
                    <group
                        position={[0.29, -0.02, -0.03]}
                        scale={[0.05, 0.02, 0.05]}
                    >
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_58.geometry}
                            material={materials.Black_Siding}
                        />
                    </group>
                    <group
                        position={[0.19, -0.02, -0.27]}
                        scale={[0.05, 0.02, 0.05]}
                    >
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_60.geometry}
                            material={materials.Black_Siding}
                        />
                    </group>
                    <group
                        position={[-0.16, -0.02, -0.27]}
                        scale={[0.05, 0.02, 0.05]}
                    >
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_62.geometry}
                            material={materials.Black_Siding}
                        />
                    </group>
                    <group
                        position={[0.54, 0, 0.05]}
                        rotation={[0, Math.PI / 2, 0]}
                        scale={0.03}
                    >
                        <group position={[1.67, 0, 0]}>
                            <mesh
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_66.geometry}
                                material={materials.Black_Plastic}
                            />
                        </group>
                        <group
                            position={[0.96, 0, -0.02]}
                            scale={[1.89, 1.05, 1.49]}
                        >
                            <mesh
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_68.geometry}
                                material={materials.Black_Siding}
                            />
                        </group>
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_70.geometry}
                            material={materials.Metal}
                        />
                        <group
                            position={[1.12, 0, -0.02]}
                            scale={[1.89, 1.13, 1.26]}
                        >
                            <mesh
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_72.geometry}
                                material={materials.Black_Siding}
                            />
                        </group>
                        <group
                            position={[0.17, 0, -0.02]}
                            scale={[2.11, 1.39, 1.67]}
                        >
                            <mesh
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_74.geometry}
                                material={materials.Black_Siding}
                            />
                        </group>
                        <group
                            position={[0.77, 0.25, -0.02]}
                            rotation={[0, 0, -0.24]}
                            scale={[0.54, 0.33, 0.62]}
                        >
                            <mesh
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_76.geometry}
                                material={materials.Black_Plastic}
                            />
                        </group>
                        <group
                            position={[18.73, 0, 0.08]}
                            rotation={[0, 0, Math.PI / 2]}
                            scale={[-0.34, 55.2, 0.34]}
                        >
                            <mesh
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_78.geometry}
                                material={materials.Black_Siding}
                            />
                        </group>
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_64.geometry}
                            material={materials.Metal}
                        />
                    </group>
                    <group
                        position={[0.05, 0.05, -0.29]}
                        scale={[0.03, 0.04, 0.03]}
                    >
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_80.geometry}
                            material={materials.Black_Siding}
                        />
                    </group>
                    <group
                        position={[0.07, 0.07, -0.29]}
                        scale={[0.03, 0.06, 0.03]}
                    >
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_82.geometry}
                            material={materials.Black_Siding}
                        />
                    </group>
                    <group position={[0.07, 0.08, -0.29]} scale={0.02}>
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_84.geometry}
                            material={materials.Gold}
                        />
                    </group>
                    <group
                        position={[0.07, 0.08, -0.29]}
                        rotation={[-Math.PI / 2, 0, 0]}
                        scale={0.02}
                    >
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_86.geometry}
                            material={materials.Left_Audio}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_87.geometry}
                            material={materials.Gold}
                        />
                    </group>
                    <group
                        position={[0.11, 0.07, -0.29]}
                        rotation={[-Math.PI / 2, 0, 0]}
                        scale={0.02}
                    >
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_89.geometry}
                            material={materials.Metal}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_90.geometry}
                            material={materials.Video}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_91.geometry}
                            material={materials.Left_Audio}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_92.geometry}
                            material={materials.Right_Audio}
                        />
                    </group>
                    <group
                        position={[0.1, 0.08, -0.29]}
                        rotation={[-Math.PI / 2, 0, 0]}
                        scale={0.01}
                    >
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_94.geometry}
                            material={materials.Gold}
                        />
                    </group>
                    <group
                        position={[0.07, 0.1, -0.29]}
                        rotation={[-Math.PI / 2, 0, 0]}
                        scale={0.01}
                    >
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_96.geometry}
                            material={materials.Gold}
                        />
                    </group>
                    <group
                        position={[0.05, 0.07, -0.29]}
                        rotation={[-Math.PI / 2, 0, 0]}
                        scale={0.01}
                    >
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_98.geometry}
                            material={materials.Gold}
                        />
                    </group>
                    <group
                        position={[0.05, 0.05, -0.3]}
                        rotation={[-Math.PI / 2, 0, 0]}
                        scale={0.02}
                    >
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_100.geometry}
                            material={materials.Grey_Plastic}
                        />
                    </group>
                    <group
                        position={[0.01, 0.89, -0.05]}
                        rotation={[Math.PI / 2, 0, 0]}
                    >
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_102.geometry}
                            material={materials.Screenshot}
                        >
                            <meshStandardMaterial color={"white"}>
                                <videoTexture
                                    attach="map"
                                    args={[video]}
                                    // flipY={false}
                                    // repeat={[5, 9]}
                                    // offset={[-0.1, 0]}
                                    wrapT={THREE.RepeatWrapping}
                                    wrapS={THREE.RepeatWrapping}
                                    encoding={THREE.sRGBEncoding}
                                />
                            </meshStandardMaterial>
                        </mesh>
                    </group>
                </group>
            </group>
        </group>
    )
}

useGLTF.preload("/assets/models/retro_tv.glb")
