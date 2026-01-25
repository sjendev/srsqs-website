import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                primary: "#FF4500",
                "primary-hover": "#E03D00",
                "accent-orange": "#FF4500",
                "background-light": "#F3F4F6",
                "background-dark": "#242424",
                "surface-light": "#FFFFFF",
                "surface-dark": "#2D2D2D",
                "text-light": "#1F2937",
                "text-dark": "#F3F4F6",
                "muted-light": "#6B7280",
                "muted-dark": "#9CA3AF",
            },
            fontFamily: {
                display: ["var(--font-manrope)", "sans-serif"],
                body: ["var(--font-inter)", "sans-serif"],
            },
            borderRadius: {
                DEFAULT: "0.25rem",
                "xl": "1rem",
                "2xl": "1.5rem",
            },
        },
    },
    plugins: [
        require("@tailwindcss/forms"),
        require("@tailwindcss/typography"),
        require("@tailwindcss/container-queries"),
    ],
};
export default config;
