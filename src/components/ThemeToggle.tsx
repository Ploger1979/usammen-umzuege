'use client';

import * as React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { motion } from 'framer-motion';

export function ThemeToggle() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = React.useState(false);

    React.useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return <div className="w-16 h-8 bg-gray-200 rounded-full" />; // Skeleton loading
    }

    const isDark = theme === 'dark';

    return (
        <button
            onClick={() => setTheme(isDark ? 'light' : 'dark')}
            className={`
                relative inline-flex items-center h-9 w-16 px-1 rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2 dark:focus:ring-offset-gray-900
                ${isDark ? 'bg-gray-800' : 'bg-primary-50 border border-primary-200'}
            `}
            aria-label="Theme Toggle"
        >
            <span className="sr-only">Toggle Theme</span>

            {/* Background Icons */}
            <div className="absolute left-2 text-primary-600">
                <Sun size={14} />
            </div>
            <div className="absolute right-2 text-gray-400">
                <Moon size={14} />
            </div>

            {/* Sliding Switch */}
            <motion.div
                className="w-7 h-7 bg-white rounded-full shadow-md flex items-center justify-center z-10"
                layout
                transition={{ type: "spring", stiffness: 700, damping: 30 }}
                animate={{ x: isDark ? 28 : 0 }}
                initial={false}
            >
                {isDark ? (
                    <Moon size={14} className="text-secondary" />
                ) : (
                    <Sun size={14} className="text-secondary" />
                )}
            </motion.div>
        </button>
    );
}
