import type {Config} from "tailwindcss";

export default {
    darkMode: ["selector"],
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
                surface: "var(--surface)",
                "surface-muted": "var(--surface-muted)",
                primary: "var(--primary)",
                "primary-strong": "var(--primary-strong)",
                accent: "var(--accent)",
                earth: "var(--earth)",
                line: "var(--border)",
            },
            borderRadius: {
                geo: "0.875rem",
            },
        },
    },
    plugins: [],
} satisfies Config;
