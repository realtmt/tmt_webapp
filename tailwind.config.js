/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
        "./app/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        colors: {
            dark: "rgb(var(--dark) / <alpha-value>)",
            light: "rgb(var(--light) / <alpha-value>)",
        },
        extend: {
            screens: {
                xs: "480px",
            },
        },
    },
    plugins: [],
}
