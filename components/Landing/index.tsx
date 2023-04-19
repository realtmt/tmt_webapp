"use client"

import Container from "@/components/Container"
import Canvas from "@/components/3d/Canvas"
import Menu from "@/components/Menu"
import Button from "@/components/Button"
import { Suspense, useState, cloneElement, useEffect } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { PlayIcon } from "@heroicons/react/24/outline"

function Ready({ setReady }: any) {
    useEffect(() => () => void setReady(true), [])
    return null
}

const Landing = () => {
    const [clicked, setClicked] = useState(false)
    const [ready, setReady] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)
    const [video, setVideo] = useState<string>(
        "/assets/videos/nosignal_long.mp4"
    )
    return (
        <main className="px-[50px] lg:px-[150px]">
            <Suspense fallback={<Ready setReady={setReady} />}>
                <button
                    className="absolute top-[15px] lg:top-0 right-[50px] lg:right-[100px] translate-x-1/2 translate-y-1/2 flex flex-col items-center select-none lg:p-[20px] -mt-[20px] z-50"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    <svg
                        viewBox="0 0 64 64"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="stroke-light stroke-[3] transition-all lg:w-[64px] lg:h-[64px] w-[48px] h-[48px]"
                    >
                        <motion.path
                            d="M10 24H54"
                            animate={{
                                rotate: menuOpen ? "45deg" : "0deg",
                                y: menuOpen ? "9.5px" : "0px",
                            }}
                        />
                        <motion.path
                            d="M10 43H54"
                            animate={{
                                rotate: menuOpen ? "-45deg" : "0deg",
                                y: menuOpen ? "-9.5px" : "0px",
                            }}
                        />
                    </svg>
                </button>
                <AnimatePresence mode="sync">
                    {menuOpen ? (
                        <Menu
                            key={"menu"}
                            setReady={setReady}
                            ready={clicked && ready}
                            setOpen={setMenuOpen}
                            isOpen={menuOpen}
                            setVideo={setVideo}
                        />
                    ) : (
                        <motion.section
                            key={"container"}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1, transition: { delay: 0.5 } }}
                            exit={{ opacity: 0 }}
                            className="z-10 relative pointer-events-none"
                        >
                            <Container className="h-screen">
                                <header className="row-start-2 col-span-full flex flex-col">
                                    <h1 className="font-bold text-[48px] lg:text-[72px] leading-[80%]">
                                        Produced by TMT
                                    </h1>
                                    <span className="text-[24px] lg:text-[36px] font-light">
                                        A beautiful confusion
                                    </span>
                                </header>
                                <main className="w-full h-full absolute left-0 top-0 z-0"></main>
                            </Container>
                        </motion.section>
                    )}
                </AnimatePresence>
                <main className="w-full h-full absolute left-0 top-0 ">
                    <Canvas
                        ready={ready && video}
                        setReady={setReady}
                        video={video}
                        isOpen={menuOpen}
                    />
                </main>
            </Suspense>
            {!(ready && clicked) && (
                <section className="absolute left-0 top-0 w-full h-full z-50 bg-dark flex justify-center items-center">
                    <Button
                        onClick={() => setClicked(true)}
                        loading={!ready}
                        text="play"
                        icon={<PlayIcon />}
                    />
                </section>
            )}
        </main>
    )
}
export default Landing
