"use client";
import {useSession} from "next-auth/react";
import AdminContactMessageList from "@/app/components/AdminContactMessageList";

export default function Dashboard() {
    const {data: session} = useSession();

    if (!session) return <p className="rounded-geo border border-line bg-surface p-6 text-foreground/70">Please log in</p>;

    return <div className="space-y-6">
        <section className="rounded-geo border border-line bg-slate-950 p-6 text-white shadow-sm md:p-8">
            <span className="text-xs font-bold uppercase tracking-widest text-sky-300">GeoNeeds admin</span>
            <h1 className="karla-font mt-3 text-3xl font-extrabold tracking-tight">Welcome, Admin</h1>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-300">
                Review client messages, manage project records, and keep public field evidence up to date.
            </p>
        </section>

        <AdminContactMessageList/>
    </div>;
}
