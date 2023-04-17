"use client"

import * as THREE from "three"
import {
    useState,
    useRef,
    useEffect,
    use,
    useLayoutEffect,
    useMemo,
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
} from "@react-three/drei"
import { Tv } from "./Tv.tsx"
import { AsciiEffect } from "three-stdlib"

const Canvas = ({ ready, setReady, video }: any) => {
    useEffect(() => {
        setReady(true)
    }, [])
    return (
        <ThreeCanvas
            dpr={[1, 1.5]}
            shadows
            camera={{ position: [0, 0, 3], fov: 45 }}
        >
            <fog attach="fog" args={["#141414", 30, 40]} />
            <color attach="background" args={["#17171b"]} />
            <Environment preset="dawn" />
            <ambientLight intensity={0.15} />
            <directionalLight
                castShadow
                intensity={0.2}
                position={[10, 6, 6]}
                shadow-mapSize={[1024, 1024]}
            >
                {/* <orthographicCamera
                    attach="shadow-camera"
                    left={-20}
                    right={20}
                    top={20}
                    bottom={-20}
                /> */}
                {/* <perspectiveCamera fov={45} /> */}
            </directionalLight>

            <group position={[0, -0.5, 0]}>
                <Tv ready={ready} src={video} />
                <Backdrop
                    receiveShadow={false}
                    scale={[20, 5, 5]}
                    floor={1.5}
                    position={[0, -0.5, -1]}
                >
                    <meshStandardMaterial color="#141414" />
                </Backdrop>
                <mesh rotation={[-Math.PI / 2, 0, 0]}>
                    <planeGeometry args={[50, 50]} />
                    <MeshReflectorMaterial
                        blur={[300, 100]}
                        resolution={2048}
                        mixBlur={1}
                        mixStrength={50}
                        roughness={1}
                        mirror={1}
                        depthScale={1.2}
                        minDepthThreshold={0.4}
                        maxDepthThreshold={1.4}
                        color="#141414"
                        metalness={0.5}
                    />
                </mesh>
                <mesh
                    receiveShadow
                    rotation-x={-Math.PI / 2}
                    position={[0, 0.001, 0]}
                >
                    <planeGeometry args={[10, 10]} />
                    <shadowMaterial transparent color="#141414" opacity={0.4} />
                </mesh>
            </group>
            <Rig />

            {/* <color attach="background" args={["black"]} />
            <AsciiRenderer fgColor="white" bgColor="black" /> */}
            {/* <OrbitControls
                makeDefault
                enableZoom={false}
                enablePan={false}
                enabled={false}
            /> */}
        </ThreeCanvas>
    )
}

function Rig() {
    const [vec] = useState(() => new THREE.Vector3())
    const { camera, mouse, viewport } = useThree()
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
        <CameraShake
            maxYaw={0.02}
            maxPitch={0.02}
            maxRoll={0.02}
            yawFrequency={0.1}
            pitchFrequency={0.1}
            rollFrequency={0.2}
        />
    )
}
export default Canvas

function AsciiRenderer({
    renderIndex = 1,
    bgColor = "black",
    fgColor = "white",
    characters = " .:-+*=%@#,;'[]{]",
    invert = true,
    color = false,
    resolution = 0.15,
}) {
    // Reactive state
    const { size, gl, scene, camera } = useThree()

    // Create effect
    const effect = useMemo(() => {
        const effect = new AsciiEffect(gl, characters, {
            invert,
            color,
            resolution,
        })
        effect.domElement.style.position = "absolute"
        effect.domElement.style.top = "0px"
        effect.domElement.style.left = "0px"
        effect.domElement.style.pointerEvents = "none"
        return effect
    }, [characters, invert, color, resolution])

    // Styling
    useLayoutEffect(() => {
        effect.domElement.style.color = fgColor
        effect.domElement.style.backgroundColor = bgColor
    }, [fgColor, bgColor])

    // Append on mount, remove on unmount
    useEffect(() => {
        gl.domElement.style.opacity = "0"
        gl.domElement.parentNode?.appendChild(effect.domElement)
        return () => {
            gl.domElement.style.opacity = "1"
            gl.domElement.parentNode?.removeChild(effect.domElement)
        }
    }, [effect])

    // Set size
    useEffect(() => {
        effect.setSize(size.width, size.height)
    }, [effect, size])

    // Take over render-loop (that is what the index is for)
    useFrame((state) => {
        effect.render(scene, camera)
    }, renderIndex)

    // This component returns nothing, it is a purely logical
    return null
}
function useSnapshot(state: any) {
    throw new Error("Function not implemented.")
}
