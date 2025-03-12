"use client";
import {useSession} from "next-auth/react";
import AdminContactMessageList from "@/app/components/AdminContactMessageList";

export default function Dashboard() {
    const {data: session} = useSession();

    if (!session) return <p>Please log in</p>;

    return <div>
        <div className={`p-6 max-w-7xl mx-auto`}>
            <div className="border border-gray-200 rounded-xl mb-4">
                <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
                    <h1 className={`text-2xl`}>Welcome, Admin!</h1>
                </div>
            </div>

            <AdminContactMessageList/>

        </div>
    </div>;
}
