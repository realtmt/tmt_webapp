import { Poppins } from "next/font/google"
import Menu from "@/components/Menu"

import "./globals.css"

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
})

export const metadata = {
    title: "Take me To",
    description: "Take me to store",
}

export default async function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body
                className={`${poppins.className} bg-dark text-light subpixel-antialiased`}
            >
                <Menu />
                <main className="px-[150px]">{children}</main>
            </body>
        </html>
    )
}
