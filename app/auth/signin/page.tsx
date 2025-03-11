"use client"
import {signIn} from "next-auth/react";
import {useState} from "react";
import {useRouter} from "next/navigation";

export default function SignInPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const res = await signIn("credentials", {
            email,
            password,
            redirect: false,
        });

        if (res?.error) {
            console.log(res?.error);
            setError("Invalid email or password");
        } else {
            router.push("/admin"); // Redirect to a protected page
        }
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <h1 className="text-2xl font-bold">Sign In</h1>
            {error && <p className="text-red-500">{error}</p>}
            <form onSubmit={handleSubmit} className="flex flex-col gap-2">
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" className="border p-2"/>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" className="border p-2"/>
                <button type="submit" className="bg-blue-500 text-white px-4 py-2">Login</button>
            </form>
            <button onClick={() => signIn("google")} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">
                Sign in with Google
            </button>
        </div>
    );
}

