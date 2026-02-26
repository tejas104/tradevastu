"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
    const { theme, setTheme, resolvedTheme } = useTheme();
    const [mounted, setMounted] = React.useState(false);

    // Avoid hydration mismatch
    React.useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return (
            <div className="w-10 h-10 flex items-center justify-center">
                <div className="w-5 h-5 rounded-full bg-gray-100 animate-pulse" />
            </div>
        );
    }

    const isDark = resolvedTheme === "dark";

    return (
        <button
            onClick={() => setTheme(isDark ? "light" : "dark")}
            className="relative w-10 h-10 flex items-center justify-center rounded-lg hover:bg-gray-100 dark:hover:bg-white/10 transition-all duration-300 group overflow-hidden"
            aria-label="Toggle theme"
        >
            <div className="relative w-5 h-5 flex items-center justify-center translate-y-0 group-active:scale-90 transition-transform">
                {isDark ? (
                    <Sun className="w-5 h-5 text-[#FFD700] animate-reveal" />
                ) : (
                    <Moon className="w-5 h-5 text-gray-700 animate-reveal" />
                )}
            </div>
        </button>
    );
}
