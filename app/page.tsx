import Image from "next/image"
import Container from "@/components/Container"
import Canvas from "@/components/3d/Canvas"

export default function Home() {
    return (
        <Container className="h-screen">
            <header className="row-start-2 col-span-full flex flex-col">
                <h1 className="font-bold text-[48px] lg:text-[72px] leading-[80%]">
                    Produced by TMT
                </h1>
                <span className="text-[24px] lg:text-[36px] font-light">
                    A beautiful confusion
                </span>
            </header>
            <main className="w-full h-full absolute left-0 top-0">
                <Canvas ready={true} />
            </main>
        </Container>
    )
}
