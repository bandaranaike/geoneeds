import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import ContactForm from "@/app/components/ContactForm";
import {ChatBubbleLeftRightIcon, MapPinIcon, PhoneIcon} from "@heroicons/react/24/outline";

const contactMethods = [
    {
        icon: PhoneIcon,
        label: "Call or WhatsApp",
        value: "+94 777 350 550",
        detail: "Fastest response for urgent project inquiries.",
    },
    {
        icon: MapPinIcon,
        label: "Field-ready support",
        value: "Sri Lanka-wide surveys",
        detail: "Hydro-geology, soil investigation, and environmental assessments.",
    },
    {
        icon: ChatBubbleLeftRightIcon,
        label: "Project details",
        value: "Send your scope",
        detail: "Share location, timeline, and survey requirements for a focused reply.",
    },
];

const ContactUsPage = () => {
    return (
        <div className="min-h-screen overflow-hidden">
            <Header currentUrl={`/contact-us`}/>
            <main>
                <section className="border-b border-line bg-surface/80">
                    <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8 lg:py-20">
                        <div className="flex flex-col justify-center">
                            <div className="mb-5 inline-flex w-fit rounded-full border border-line bg-background px-4 py-2 text-sm font-semibold text-primary shadow-sm">
                                Project inquiries
                            </div>
                            <h1 className="karla-font max-w-2xl text-4xl font-extrabold tracking-normal text-foreground sm:text-5xl lg:text-6xl">
                                Let&apos;s plan the right ground investigation.
                            </h1>
                            <p className="mt-6 max-w-2xl text-base leading-8 text-foreground/72 sm:text-lg">
                                Send us the location, project scope, and preferred timeline. Our team will respond with the next practical steps for hydro-geological, geophysical, soil, or environmental survey work.
                            </p>
                        </div>

                        <div className="rounded-geo border border-line bg-background p-4 shadow-xl shadow-sky-950/5 sm:p-6">
                            <ContactForm/>
                        </div>
                    </div>
                </section>

                <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
                    <div className="grid gap-4 md:grid-cols-3">
                        {contactMethods.map((method) => {
                            const Icon = method.icon;

                            return (
                                <div key={method.label} className="rounded-geo border border-line bg-surface p-5 shadow-sm">
                                    <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-surface-muted text-primary">
                                        <Icon className="h-5 w-5" aria-hidden="true"/>
                                    </div>
                                    <p className="text-sm font-semibold uppercase tracking-[0.14em] text-accent">{method.label}</p>
                                    <h2 className="mt-2 text-xl font-bold text-foreground">{method.value}</h2>
                                    <p className="mt-3 text-sm leading-6 text-foreground/68">{method.detail}</p>
                                </div>
                            );
                        })}
                    </div>
                </section>
            </main>
            <Footer/>
        </div>
    );
}

export default ContactUsPage;
