import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import Link from "next/link";

const sections = [
    ["Acceptance of terms", "By accessing or using geoneeds.info, you agree to these Terms and Conditions. If you do not agree, please do not use this website."],
    ["Services provided", "GeoNeeds provides hydro-geological consultation, groundwater assessment, site surveys, tube-well location guidance, and related professional advice."],
    ["Consultation and information", "Consultations and information are based on professional opinion, available site data, and field expertise. Groundwater availability and quality cannot be guaranteed at every location."],
    ["Client responsibilities", "Clients are responsible for providing accurate site information, access details, ownership or permission information, and any known constraints that may affect survey work."],
    ["Payment and fees", "Fees, payment terms, and service scope are discussed and agreed before work begins. Payment terms may be stated in a quotation, service agreement, or invoice."],
    ["Limitation of liability", "GeoNeeds is not liable for direct, indirect, incidental, consequential, or punitive damages arising from use of website information or third-party tube-well installation work."],
    ["Intellectual property", "Website content, images, branding, and written material belong to GeoNeeds unless otherwise stated. Do not reproduce or modify content without written permission."],
    ["Communication", "Communication by phone, WhatsApp, email, or contact form may be used to discuss services and respond to inquiries. Platform-specific terms may also apply."],
    ["Governing law", "These terms are governed by the laws of Sri Lanka. Disputes arising from these terms may be handled through Sri Lankan courts."],
    ["Changes to these terms", "We may update these Terms and Conditions from time to time. Continued use of the website after updates means you accept the revised terms."],
];

const TermsAndConditionsPage = () => {
    return (
        <div className="min-h-screen bg-background text-foreground">
            <Header/>
            <main>
                <section className="border-b border-line bg-slate-950 text-white">
                    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
                        <span className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-extrabold uppercase tracking-widest text-sky-200">
                            Legal information
                        </span>
                        <h1 className="karla-font mt-6 max-w-4xl text-4xl font-extrabold tracking-tight md:text-6xl">
                            Terms and Conditions
                        </h1>
                        <p className="mt-5 max-w-3xl text-base leading-8 text-slate-300">
                            These terms explain how GeoNeeds website information, consultation requests, professional services, payments, and responsibilities are handled.
                        </p>
                    </div>
                </section>
                <section className="mx-auto grid max-w-7xl gap-8 px-4 py-14 sm:px-6 lg:grid-cols-[0.32fr_0.68fr] lg:px-8">
                    <aside className="rounded-geo border border-line bg-surface p-6 shadow-sm lg:sticky lg:top-24 lg:h-fit">
                        <p className="text-xs font-bold uppercase tracking-widest text-primary">geoneeds.info</p>
                        <p className="mt-3 text-sm leading-7 text-foreground/65">Effective date: 2025-01-01</p>
                        <Link href="/contact-us" className="mt-6 inline-flex rounded-geo bg-primary px-5 py-3 text-sm font-bold text-white hover:bg-primary-strong">
                            Contact us
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

export default TermsAndConditionsPage;
