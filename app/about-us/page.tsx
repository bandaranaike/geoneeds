import Link from "next/link";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import Encompasses from "@/app/components/Encompasses";

const strengths = [
    {
        title: "Hydrogeology led",
        description: "Groundwater decisions are guided by geological evidence, field observation, and practical site constraints.",
    },
    {
        title: "Sri Lanka focused",
        description: "Experience across dry-zone, hill-country, coastal, industrial, agricultural, and community water settings.",
    },
    {
        title: "Decision ready",
        description: "Reports are written to help clients act with confidence before drilling, construction, or investment.",
    },
];

const values = [
    "Reliable water-source guidance before costly drilling decisions.",
    "Responsible management of groundwater and surrounding land conditions.",
    "Clear communication for homeowners, farms, businesses, and project teams.",
    "Professional field practice supported by geology and hydro-engineering knowledge.",
];

const AboutUsPage = () => {
    return (
        <div className="min-h-screen bg-background text-foreground">
            <Header currentUrl="/about-us"/>
            <main>
                <section className="relative overflow-hidden bg-slate-950 text-white">
                    <div className="absolute inset-0">
                        <img src="/about-us.png" alt="" className="h-full w-full object-cover opacity-35"/>
                        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-slate-950/35"/>
                    </div>
                    <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-[1fr_0.85fr] lg:px-8 lg:py-28">
                        <div>
                            <span className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-extrabold uppercase tracking-widest text-sky-200 backdrop-blur">
                                Hydrogeology expertise
                            </span>
                            <h1 className="karla-font mt-6 text-4xl font-extrabold leading-tight tracking-tight md:text-6xl">
                                Groundwater intelligence for practical, sustainable site decisions.
                            </h1>
                            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 md:text-lg">
                                GeoNeeds provides hydro-geological consultation, groundwater exploration, and field-based recommendations for homes, farms, communities, and commercial projects in Sri Lanka and beyond.
                            </p>
                            <div className="mt-8 flex flex-wrap gap-3">
                                <Link href="/contact-us" className="rounded-geo bg-white px-6 py-3 text-sm font-bold text-slate-950 hover:bg-slate-100">
                                    Talk to GeoNeeds
                                </Link>
                                <Link href="/projects" className="rounded-geo border border-white/20 px-6 py-3 text-sm font-bold text-white hover:bg-white/10">
                                    View field work
                                </Link>
                            </div>
                        </div>
                        <div className="grid content-end gap-4">
                            {strengths.map((item) => (
                                <div key={item.title} className="border border-white/15 bg-white/10 p-5 backdrop-blur rounded-geo">
                                    <h2 className="karla-font text-xl font-extrabold text-white">{item.title}</h2>
                                    <p className="mt-2 text-sm leading-7 text-slate-300">{item.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8 lg:py-24">
                    <div>
                        <span className="text-xs font-bold uppercase tracking-widest text-primary">Our mission</span>
                        <h2 className="karla-font mt-3 text-3xl font-extrabold tracking-tight text-foreground md:text-5xl">
                            Better water decisions start below the surface.
                        </h2>
                    </div>
                    <div className="space-y-6 text-base leading-8 text-foreground/70">
                        <p>
                            Our mission is to provide accurate and reliable groundwater solutions that help individuals, communities, and businesses access water resources responsibly.
                        </p>
                        <p>
                            Led by Akila Jeewantha Herath, a hydro-geologist with more than 12 years of experience, GeoNeeds combines geology, hydro-engineering, and field practice to support smarter site planning.
                        </p>
                        <p>
                            Akila holds a Bachelor of Science degree in Geology from the University of Peradeniya and a Master&apos;s degree in Hydro Engineering from the Postgraduate Institute of Science.
                        </p>
                    </div>
                </section>

                <section className="border-y border-line bg-surface-muted/40 py-16">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="mb-10 max-w-2xl">
                            <span className="text-xs font-bold uppercase tracking-widest text-primary">How we work</span>
                            <h2 className="karla-font mt-3 text-3xl font-extrabold tracking-tight text-foreground md:text-4xl">
                                Professional guidance from first question to final recommendation.
                            </h2>
                        </div>
                        <Encompasses/>
                    </div>
                </section>

                <section className="mx-auto grid max-w-7xl gap-8 px-4 py-16 sm:px-6 lg:grid-cols-[1fr_0.8fr] lg:px-8">
                    <div className="rounded-geo border border-line bg-surface p-8 shadow-sm">
                        <h2 className="karla-font text-2xl font-extrabold text-foreground">Our commitment</h2>
                        <p className="mt-4 text-base leading-8 text-foreground/70">
                            We provide personalized, professional services tailored to each site. GeoNeeds has worked across Sri Lanka and completed projects in the Maldives, giving clients practical recommendations for reliable water access and responsible resource management.
                        </p>
                        <div className="mt-6 grid gap-3 sm:grid-cols-2">
                            {values.map((item) => (
                                <div key={item} className="rounded-geo border border-line bg-surface-muted/50 p-4 text-sm font-semibold leading-6 text-foreground/75">
                                    {item}
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="rounded-geo border border-line bg-slate-950 p-8 text-white">
                        <span className="text-xs font-bold uppercase tracking-widest text-sky-300">Contact</span>
                        <h2 className="karla-font mt-3 text-2xl font-extrabold">Need expert hydro-geological support?</h2>
                        <p className="mt-4 text-sm leading-7 text-slate-300">
                            Call or WhatsApp GeoNeeds at <span className="font-bold text-white">+94 777 350 550</span>, or send your site details through the contact form.
                        </p>
                        <Link href="/contact-us" className="mt-6 inline-flex rounded-geo bg-white px-6 py-3 text-sm font-bold text-slate-950 hover:bg-slate-100">
                            Send a message
                        </Link>
                    </div>
                </section>
            </main>
            <Footer/>
        </div>
    );
};

export default AboutUsPage;
