"use client"
import {signIn} from "next-auth/react";
import {useState} from "react";
import {useRouter} from "next/navigation";
import Link from "next/link";

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
        <div className="min-h-screen bg-slate-950 text-white">
            <div className="absolute inset-0">
                <img src="/hero_forest.png" alt="" className="h-full w-full object-cover opacity-25"/>
                <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-950/60"/>
            </div>
            <main className="relative mx-auto grid min-h-screen max-w-7xl items-center gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1fr_0.85fr] lg:px-8">
                <section className="max-w-2xl">
                    <Link href="/" className="mb-8 inline-flex items-center gap-3">
                        <img src="/logo.png" alt="Geo Needs" className="h-12 w-auto"/>
                        <span className="karla-font text-2xl font-extrabold tracking-wider">GEONEEDS</span>
                    </Link>
                    <span className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-extrabold uppercase tracking-widest text-sky-200">
                        Admin access
                    </span>
                    <h1 className="karla-font mt-6 text-4xl font-extrabold leading-tight tracking-tight md:text-6xl">
                        Manage projects, messages, and field evidence.
                    </h1>
                    <p className="mt-5 max-w-xl text-base leading-8 text-slate-300">
                        Sign in to update GeoNeeds project records and review client inquiries from the secure admin workspace.
                    </p>
                </section>

                <section className="rounded-geo border border-white/15 bg-white/10 p-6 shadow-2xl shadow-slate-950/40 backdrop-blur md:p-8">
                    <h2 className="karla-font text-2xl font-extrabold">Sign in</h2>
                    <p className="mt-2 text-sm leading-6 text-slate-300">Use your admin credentials to continue.</p>
                    {error && <p className="mt-4 rounded-geo border border-red-400/30 bg-red-500/10 px-4 py-3 text-sm font-semibold text-red-100">{error}</p>}
                    <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" className="w-full rounded-geo border border-white/15 bg-white/95 px-4 py-3 text-slate-950 outline-none focus:border-sky-300" required/>
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" className="w-full rounded-geo border border-white/15 bg-white/95 px-4 py-3 text-slate-950 outline-none focus:border-sky-300" required/>
                        <button type="submit" className="w-full rounded-geo bg-white px-5 py-3 text-sm font-extrabold text-slate-950 transition hover:bg-slate-100">Login</button>
                    </form>
                    <button onClick={() => signIn("google")} className="mt-4 w-full rounded-geo border border-white/20 px-5 py-3 text-sm font-bold text-white transition hover:bg-white/10">
                        Sign in with Google
                    </button>
                    <Link href="/" className="mt-6 inline-flex text-sm font-semibold text-sky-200 hover:text-white">
                        Back to website
                    </Link>
                </section>
            </main>
        </div>
    );
}

