"use client";
import {useSession} from "next-auth/react";

export default function Dashboard() {
    const {data: session} = useSession();

    if (!session) return <p>Please log in</p>;

    return <h1>Welcome, {session.user?.name}!</h1>;
}
