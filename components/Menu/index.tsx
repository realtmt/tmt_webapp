"use client"
import { useEffect, useState } from "react"
import { motion, Variants } from "framer-motion"
import OrchestrateTextUp from "../animations/OrchestrateTextUp"
import Link from "next/link"
import Canvas from "../3d/Canvas"

const items: { title: string; url: string; src: string }[] = [
    { title: "home", url: "/", src: "/assets/videos/weird.mp4" },
    { title: "shop", url: "/shop", src: "/assets/videos/weird.mp4" },
    { title: "lifestyle", url: "/lifestyle", src: "/assets/videos/bob.mp4" },
    { title: "contact", url: "/contact", src: "/assets/videos/weird.mp4" },
    { title: "login", url: "/login", src: "/assets/videos/weird.mp4" },
]

const navVariant: Variants = {
    hidden: (padding) => ({
        translateX: `calc(-100% + ${padding}px)`,
    }),
    visible: {
        translateX: "0%",
        transition: {
            type: "spring",
            mass: 0.3,
            delay: 0.3,
            staggerChildren: 0.03,
            when: "beforeChildren",
        },
    },
    exit: (padding) => ({
        translateX: `calc(-100% + ${padding}px)`,
        transition: {
            type: "spring",
            mass: 0.4,
            damping: 12,

            when: "afterChildren",
        },
    }),
}

const Menu = ({ setVideo, setOpen, isOpen }: any) => {
    const [screen, setScreen] = useState(1025)
    let timeout: NodeJS.Timeout

    const switchChannel = (src: string) => {
        clearTimeout(timeout)
        setVideo("/assets/videos/nosignal.mp4")
        timeout = setTimeout(() => {
            setVideo(src)
        }, 300)
    }

    useEffect(() => {
        const handleResize = () => setScreen(window.innerWidth)
        setScreen(window.innerWidth)
        window.addEventListener("resize", handleResize)
        return () => window.removeEventListener("resize", handleResize)
    }, [])

    return (
        <motion.nav
            className="fixed top-0 left-0 w-full h-full z-40"
            variants={navVariant}
            initial={"hidden"}
            animate={isOpen ? "visible" : "exit"}
            exit={"exit"}
            custom={screen > 1024 ? 150 : 50}
        >
            <section className="relative w-full h-full flex justify-center lg:justify-start items-center">
                <section className="lg:w-1/2 flex justify-center">
                    <ul className="text-[48px] lg:text-[92px] uppercase font-bold flex flex-col leading-[120%] relative z-10 ">
                        {items.map((item, i) => (
                            <li
                                key={i}
                                onMouseEnter={() => switchChannel(item.src)}
                            >
                                <Link href={item.url}>
                                    <OrchestrateTextUp
                                        key={i}
                                        text={item.title}
                                    />
                                </Link>
                            </li>
                        ))}
                    </ul>
                </section>
            </section>
        </motion.nav>
    )
}
export default Menu
