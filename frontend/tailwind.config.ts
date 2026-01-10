import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: "class",
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
                border: "var(--border)",
            },
            animation: {
                "fade-in-up": "fade-in-up 0.5s ease-out forwards",
                "pulse-slow": "pulse-slow 3s infinite",
            },
        },
    },
    plugins: [],
};
export default config;
