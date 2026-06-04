"use client";
import {SessionProvider} from "next-auth/react";
import AdminHeader from "@/app/components/AdminHeader";

export default function AdminLayout({children,}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <SessionProvider>
            <div className="min-h-screen bg-background text-foreground">
                <AdminHeader/>
                <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
                    {children}
                </main>
            </div>
        </SessionProvider>
    );
}
