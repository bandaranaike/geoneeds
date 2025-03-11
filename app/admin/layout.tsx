"use client";
import {SessionProvider} from "next-auth/react";
import AdminHeader from "@/app/components/AdminHeader";

export default function AdminLayout({children,}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <SessionProvider>
            <AdminHeader/>
            {children}
        </SessionProvider>
    );
}