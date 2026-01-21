'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { LogOut, LayoutDashboard } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { logout } from '@/app/actions/auth';
import Cookies from 'js-cookie';

export function LoginStatus() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const router = useRouter();

    useEffect(() => {
        // Check for the cookie client-side
        // We can just check document.cookie string for 'admin_session' or use js-cookie
        // Using js-cookie is cleaner if installed, checking package.json... yes it is installed.
        const session = Cookies.get('admin_session');
        setIsLoggedIn(!!session);
    }, []);

    const handleLogout = async () => {
        await logout();
        Cookies.remove('admin_session'); // Force client-side removal too just in case
        setIsLoggedIn(false);
        router.refresh(); // Refresh to update UI
        router.push('/');
    };

    if (!isLoggedIn) return null;

    return (
        <div className="flex items-center gap-4 text-emerald-600 dark:text-emerald-400 font-bold">
            <Link href="/de/invoice" className="flex items-center gap-1 hover:text-emerald-700 transition-colors">
                <LayoutDashboard size={14} />
                <span>Dashboard</span>
            </Link>
            <button onClick={handleLogout} className="flex items-center gap-1 hover:text-red-600 transition-colors">
                <LogOut size={14} />
                <span>Abmelden</span>
            </button>
        </div>
    );
}
