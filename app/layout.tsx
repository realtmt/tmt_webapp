import { Poppins } from "next/font/google"

import "./globals.css"

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
})

export const metadata = {
    title: "TMT",
    description: "Take Me To Webapp",
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
                {children}
            </body>
        </html>
    )
}
