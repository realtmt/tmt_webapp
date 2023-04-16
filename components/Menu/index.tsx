"use client"
import { useEffect, useState } from "react"
import { motion, Variants } from "framer-motion"
import OrchestrateTextUp from "../animations/OrchestrateTextUp"
import Link from "next/link"

const items: { title: string; url: string }[] = [
    { title: "home", url: "/" },
    { title: "shop", url: "/shop" },
    { title: "lifestyle", url: "/lifestyle" },
    { title: "contact", url: "/contact" },
    { title: "login", url: "/login" },
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
            staggerChildren: 0.04,
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

const Menu = () => {
    const [isOpen, setOpen] = useState(false)
    const [screen, setScreen] = useState(150)
    useEffect(() => {
        const handleResize = () => setScreen(window.innerWidth)

        window.addEventListener("resize", handleResize)
        return () => window.removeEventListener("resize", handleResize)
    }, [])
    return (
        <motion.nav
            className="fixed top-0 left-0 w-full h-full"
            variants={navVariant}
            initial={"hidden"}
            animate={isOpen ? "visible" : "exit"}
            custom={screen > 1024 ? 150 : 50}
        >
            <section className="relative bg-dark w-full h-full flex justify-center items-center">
                <button
                    className="absolute top-[15px] lg:top-0 right-[25px] lg:right-[75px] translate-x-1/2 translate-y-1/2 flex flex-col items-center select-none lg:p-[20px] -mt-[20px]"
                    onClick={() => setOpen(!isOpen)}
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
                                rotate: isOpen ? "45deg" : "0deg",
                                y: isOpen ? "9.5px" : "0px",
                            }}
                        />
                        <motion.path
                            d="M10 43H54"
                            animate={{
                                rotate: isOpen ? "-45deg" : "0deg",
                                y: isOpen ? "-9.5px" : "0px",
                            }}
                        />
                    </svg>
                </button>
                <ul className="text-[48px] lg:text-[92px] uppercase font-bold flex flex-col leading-[120%]">
                    {items.map((item, i) => (
                        <li key={i}>
                            <Link href={item.url}>
                                <OrchestrateTextUp key={i} text={item.title} />
                            </Link>
                        </li>
                    ))}
                </ul>
            </section>
        </motion.nav>
    )
}
export default Menu
