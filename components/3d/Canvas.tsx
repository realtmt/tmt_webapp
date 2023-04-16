"use client"

import * as THREE from "three"
import { useState, useRef, useEffect } from "react"
import { Canvas as ThreeCanvas } from "@react-three/fiber"
import {
    useGLTF,
    OrbitControls,
    PerspectiveCamera,
    Environment,
} from "@react-three/drei"
// import { MeshReflectorMaterial } from "./drei/MeshReflectorMaterial"
import { Television } from "./Television"
import { Tv } from "./Tv.tsx"

const Canvas = ({ ready }: { ready: boolean }) => {
    return (
        <ThreeCanvas dpr={[1, 2]} shadows>
            <fog attach="fog" args={["#101010", 0, 10]} />
            <Environment preset="city" />
            <group position={[0, -0.5, 0]}>
                <Tv position={[0, 0, 0]} ready={ready} />

                <mesh
                    receiveShadow
                    rotation-x={-Math.PI / 2}
                    position={[0, 0.001, 0]}
                >
                    <planeGeometry args={[10, 10]} />
                    <shadowMaterial transparent color="black" opacity={0.4} />
                </mesh>
            </group>

            <PerspectiveCamera makeDefault fov={65} position={[-0.7, 0.2, 2]}>
                <spotLight
                    position={[10, 10, 5]}
                    angle={0.15}
                    penumbra={1}
                    intensity={1}
                    castShadow
                    shadow-mapSize={[2048, 2048]}
                />
            </PerspectiveCamera>
        </ThreeCanvas>
    )
}

export default Canvas
