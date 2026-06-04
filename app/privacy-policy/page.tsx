import Header from "@/app/components/Header";
import Link from "next/link";
import Footer from "@/app/components/Footer";

const sections = [
    ["Introduction", "GeoNeeds is committed to protecting personal information shared through geoneeds.info, contact forms, phone calls, WhatsApp, and service inquiries."],
    ["Information we collect", "We may collect name, phone number, email address, message details, site location details, and other information you choose to provide when requesting a service."],
    ["Website usage data", "We may collect non-personal website usage information such as browser type, pages visited, and general interaction patterns to improve website performance and content."],
    ["How we use information", "Information may be used to respond to inquiries, discuss hydro-geological services, prepare consultations, improve website experience, and comply with legal obligations."],
    ["Location and site details", "If you share site locations, map links, or survey details, we use that information to understand project needs and provide relevant guidance."],
    ["Data sharing", "We do not sell or rent personal information. Information may be shared only when required by law or when necessary to provide requested services."],
    ["Data security", "We use reasonable measures to protect information from unauthorized access, use, or disclosure. WhatsApp and other third-party communication tools are also subject to their own policies."],
    ["Your rights", "You may request access, correction, or deletion of your personal information by contacting GeoNeeds through the website or listed phone number."],
    ["Policy updates", "We may update this Privacy Policy from time to time. Changes will be posted on this page for review."],
];

const PrivacyPolicyPage: React.FC = () => {
    return (
        <div className="min-h-screen bg-background text-foreground">
            <Header/>
            <main>
                <section className="border-b border-line bg-slate-950 text-white">
                    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
                        <span className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-extrabold uppercase tracking-widest text-sky-200">
                            Data protection
                        </span>
                        <h1 className="karla-font mt-6 max-w-4xl text-4xl font-extrabold tracking-tight md:text-6xl">
                            Privacy Policy
                        </h1>
                        <p className="mt-5 max-w-3xl text-base leading-8 text-slate-300">
                            This policy explains what information GeoNeeds may collect, how it is used, and how visitors can contact us about privacy concerns.
                        </p>
                    </div>
                </section>
                <section className="mx-auto grid max-w-7xl gap-8 px-4 py-14 sm:px-6 lg:grid-cols-[0.32fr_0.68fr] lg:px-8">
                    <aside className="rounded-geo border border-line bg-surface p-6 shadow-sm lg:sticky lg:top-24 lg:h-fit">
                        <p className="text-xs font-bold uppercase tracking-widest text-primary">geoneeds.info</p>
                        <p className="mt-3 text-sm leading-7 text-foreground/65">Effective date: 2025-01-01</p>
                        <Link href="/contact-us" className="mt-6 inline-flex rounded-geo bg-primary px-5 py-3 text-sm font-bold text-white hover:bg-primary-strong">
                            Privacy questions
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

export default PrivacyPolicyPage;
