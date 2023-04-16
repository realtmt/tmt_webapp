import Image from "next/image"
import Container from "@/components/Container"

export default function Home() {
    return (
        <Container className="h-screen">
            <header className="row-start-2 col-start-1 col-end-4">
                <h1 className="font-bold text-[72px] leading-[80%]">
                    Produced by TMT
                </h1>
                <span className="text-[36px] font-light">
                    A beautiful confusion
                </span>
            </header>
        </Container>
    )
}
