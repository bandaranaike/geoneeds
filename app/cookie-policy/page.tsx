import Link from "next/link";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

const sections = [
    ["Introduction", "This Cookie Policy explains how geoneeds.info may use cookies and similar technologies to recognize visitors, operate the website, and improve the browsing experience."],
    ["What cookies are", "Cookies are small text files placed on your computer or mobile device when you visit a website. They help websites function, remember preferences, and understand usage."],
    ["Essential cookies", "Essential cookies support basic website operation, navigation, security, forms, and features that are necessary for the site to work properly."],
    ["Analytics cookies", "Analytics cookies may help us understand which pages are useful, how visitors move through the website, and where improvements are needed."],
    ["Functionality cookies", "Functionality cookies may remember choices such as preferences or repeated form details so the website can provide a smoother experience."],
    ["Third-party cookies", "Some website features may rely on third-party services. If those services use cookies, their own cookie policies and privacy practices may apply."],
    ["Controlling cookies", "Most browsers let you view, delete, block, or manage cookies. Blocking or deleting cookies may affect parts of the website or reduce functionality."],
    ["Policy updates", "We may update this Cookie Policy when website features, legal requirements, or operational practices change. Please review this page periodically."],
];

const CookiePolicyPage = () => {
    return (
        <div className="min-h-screen bg-background text-foreground">
            <Header/>
            <main>
                <section className="border-b border-line bg-slate-950 text-white">
                    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
                        <span className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-extrabold uppercase tracking-widest text-sky-200">
                            Website preferences
                        </span>
                        <h1 className="karla-font mt-6 max-w-4xl text-4xl font-extrabold tracking-tight md:text-6xl">
                            Cookie Policy
                        </h1>
                        <p className="mt-5 max-w-3xl text-base leading-8 text-slate-300">
                            This page explains what cookies may be used for, why they matter, and how visitors can control them.
                        </p>
                    </div>
                </section>
                <section className="mx-auto grid max-w-7xl gap-8 px-4 py-14 sm:px-6 lg:grid-cols-[0.32fr_0.68fr] lg:px-8">
                    <aside className="rounded-geo border border-line bg-surface p-6 shadow-sm lg:sticky lg:top-24 lg:h-fit">
                        <p className="text-xs font-bold uppercase tracking-widest text-primary">geoneeds.info</p>
                        <p className="mt-3 text-sm leading-7 text-foreground/65">Effective date: 2025-01-01</p>
                        <Link href="/contact-us" className="mt-6 inline-flex rounded-geo bg-primary px-5 py-3 text-sm font-bold text-white hover:bg-primary-strong">
                            Cookie questions
                        </Link>
                    </aside>
                    <article className="rounded-geo border border-line bg-surface p-6 shadow-sm md:p-10">
                        {sections.map(([title, body]) => (
                            <section key={title} className="border-b border-line py-6 first:pt-0 last:border-b-0 last:pb-0">
                                <h2 className="karla-font text-2xl font-extrabold text-foreground">{title}</h2>
                                <p className="mt-3 text-base leading-8 text-foreground/70">{body}</p>
                            </section>
                        ))}
                    </article>
                </section>
            </main>
            <Footer/>
        </div>
    );
};

export default CookiePolicyPage;
