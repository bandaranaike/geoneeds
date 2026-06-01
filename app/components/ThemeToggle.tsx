"use client";

import {MoonIcon, SunIcon} from "@heroicons/react/24/outline";
import {useEffect, useState} from "react";

export default function ThemeToggle() {
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        const storedTheme = window.localStorage.getItem("theme");
        const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        const shouldUseDark = storedTheme ? storedTheme === "dark" : prefersDark;

        document.documentElement.classList.toggle("dark", shouldUseDark);
        setIsDark(shouldUseDark);
    }, []);

    const toggleTheme = () => {
        const nextIsDark = !isDark;
        document.documentElement.classList.toggle("dark", nextIsDark);
        window.localStorage.setItem("theme", nextIsDark ? "dark" : "light");
        setIsDark(nextIsDark);
    };

    return (
        <button
            type="button"
            onClick={toggleTheme}
            className="inline-flex h-10 w-10 items-center justify-center rounded-geo border border-line bg-surface text-primary shadow-sm transition hover:-translate-y-0.5 hover:border-primary hover:text-primary-strong dark:bg-surface-muted"
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
            title={isDark ? "Switch to light mode" : "Switch to dark mode"}
        >
            {isDark ? <SunIcon className="h-5 w-5"/> : <MoonIcon className="h-5 w-5"/>}
        </button>
    );
}
