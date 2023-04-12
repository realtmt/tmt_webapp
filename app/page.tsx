import Image from "next/image"
import { Inter } from "next/font/google"
import CountdownTimer from "../components/CountdownTimer"

const inter = Inter({ subsets: ["latin"] })

export default function Home() {
    return (
        <section
            className={`${inter.className} left-0 top-0 absolute w-full h-1/2 flex justify-center items-center`}
        >
            <CountdownTimer />
        </section>
    )
}
