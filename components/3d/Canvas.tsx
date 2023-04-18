"use client"

import * as THREE from "three"
import {
    useState,
    useRef,
    useEffect,
    use,
    useLayoutEffect,
    useMemo,
    Suspense,
} from "react"
import { Canvas as ThreeCanvas, useFrame, useThree } from "@react-three/fiber"
import {
    useGLTF,
    OrbitControls,
    PerspectiveCamera,
    Environment,
    CameraShake,
    MeshReflectorMaterial,
    Backdrop,
    PerformanceMonitor,
    MeshWobbleMaterial,
    MeshDistortMaterial,
} from "@react-three/drei"
import { Tv } from "./Tv.tsx"

const Canvas = ({ ready, setReady, video }: any) => {
    useEffect(() => {
        setReady(true)
    }, [])
    const [dpr, setDpr] = useState(1)
    return (
        <ThreeCanvas
            dpr={dpr}
            shadows
            camera={{ position: [0, 0, 3], fov: 45 }}
        >
            <PerformanceMonitor
                onIncline={() => setDpr(1.5)}
                onDecline={() => setDpr(0.3)}
            />
            <fog attach="fog" color={"#141414"} near={-1} far={10} />
            <color attach="background" args={["#141414"]} />

            <ambientLight intensity={0.2} />
            <directionalLight
                castShadow
                intensity={3}
                position={[2, 3, 3]}
                shadow-mapSize={[2024, 2024]}
            >
                <orthographicCamera
                    attach="shadow-camera"
                    left={-20}
                    right={20}
                    top={20}
                    bottom={-20}
                />
            </directionalLight>
            <Rig />
            {/* <Environment preset="dawn" background={false} /> */}
            <Suspense>
                <group position={[0, -0.5, 0]}>
                    <Tv ready={ready} src={video} />
                    <mesh rotation={[-Math.PI / 2, 0, 0]}>
                        <planeGeometry args={[50, 50]} />
                        <MeshReflectorMaterial
                            blur={[300, 200]}
                            resolution={dpr * 1024}
                            mixBlur={1}
                            mixStrength={5}
                            roughness={20}
                            mirror={0.5}
                            depthScale={1.2}
                            minDepthThreshold={0.4}
                            maxDepthThreshold={1.4}
                            color={"#141414"}
                        />
                    </mesh>
                    <mesh
                        receiveShadow
                        rotation-x={-Math.PI / 2}
                        position={[0, 0.001, 0]}
                    >
                        <planeGeometry args={[10, 10]} />
                        <shadowMaterial
                            transparent
                            color="#141414"
                            opacity={0.4}
                        />
                    </mesh>
                </group>
            </Suspense>
        </ThreeCanvas>
    )
}

function Rig() {
    const [vec] = useState(() => new THREE.Vector3())
    const { camera, mouse } = useThree()
    useFrame(() => {
        camera.position.lerp(
            vec.set(
                Math.sin(mouse.x / 30) * 1.5 - 0.2,
                Math.sin(mouse.y / 60) * 1.5,
                2
            ),
            0.05
        )
    })
    return (
        <>
            <CameraShake
                maxYaw={0.02}
                maxPitch={0.02}
                maxRoll={0.02}
                yawFrequency={0.1}
                pitchFrequency={0.1}
                rollFrequency={0.2}
            />
        </>
    )
}
export default Canvas
