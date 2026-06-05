import Link from "next/link";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import {getProject} from "@/lib/projects";
import ImageGallery from "@/app/components/ImageGallery";

export const dynamic = "force-dynamic";

interface ProjectPageProps {
    params: Promise<{ slug: string }>;
}

const projectStages = [
    {
        title: "Field assessment",
        description: "Site conditions, access, surface indicators, and survey priorities are reviewed before interpretation.",
    },
    {
        title: "Subsurface reading",
        description: "Geophysical and hydrogeological observations are translated into practical site intelligence.",
    },
    {
        title: "Action report",
        description: "Recommendations are prepared for drilling, water management, or additional technical testing.",
    },
];

export default async function ProjectPage(props: ProjectPageProps) {
    const params = await props.params;
    const project = await getProject(params.slug);

    if (!project) {
        return (
            <div className="min-h-screen bg-background text-foreground">
                <Header currentUrl="/projects"/>
                <main className="mx-auto max-w-3xl px-4 py-24 text-center sm:px-6 lg:px-8">
                    <span className="text-xs font-bold uppercase tracking-widest text-primary">Project record</span>
                    <h1 className="karla-font mt-4 text-4xl font-extrabold text-foreground">Project not found</h1>
                    <p className="mt-4 text-foreground/65">The project may have been moved or unpublished.</p>
                    <Link href="/projects" className="mt-8 inline-flex rounded-geo bg-primary px-6 py-3 text-sm font-bold text-white">
                        Back to projects
                    </Link>
                </main>
                <Footer/>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-background text-foreground">
            <Header currentUrl="/projects"/>
            <main>
                <section className="relative overflow-hidden bg-slate-950 text-white">
                    <div className="absolute inset-0">
                        <img
                            src={project.photos?.[0] || "/hero_forest.png"}
                            alt=""
                            className="h-full w-full object-cover opacity-35"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/88 to-slate-950/45"/>
                    </div>

                    <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
                        <Link href="/projects" className="mb-8 inline-flex text-sm font-bold text-sky-200 hover:text-white">
                            ← Back to projects
                        </Link>
                        <div className="max-w-4xl">
                            <span className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-extrabold uppercase tracking-widest text-sky-200 backdrop-blur">
                                Project evidence
                            </span>
                            <h1 className="karla-font mt-6 text-4xl font-extrabold leading-tight tracking-tight md:text-6xl">
                                {project.title}
                            </h1>
                            <p className="mt-6 max-w-3xl text-base leading-8 text-slate-300 md:text-lg">
                                {project.description}
                            </p>
                        </div>
                    </div>
                </section>

                <section className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.35fr_0.65fr] lg:px-8 lg:py-16">
                    <div className="overflow-hidden rounded-geo border border-line bg-surface p-3 shadow-sm">
                        <ImageGallery images={project.photos?.length ? project.photos : ["/groundwater_surveys.png"]}/>
                    </div>

                    <aside className="space-y-5">
                        <div className="rounded-geo border border-line bg-surface p-6 shadow-sm">
                            <span className="text-xs font-bold uppercase tracking-widest text-primary">Project facts</span>
                            <dl className="mt-6 space-y-5">
                                {[
                                    ["Client", project.clientName],
                                    ["Location", project.location],
                                    ["Status", project.status],
                                    ["Date", project.date],
                                ].map(([label, value]) => (
                                    value ? (
                                        <div key={label} className="border-b border-line pb-4 last:border-b-0 last:pb-0">
                                            <dt className="text-xs font-bold uppercase tracking-widest text-foreground/45">{label}</dt>
                                            <dd className="mt-1 font-semibold text-foreground">{value}</dd>
                                        </div>
                                    ) : null
                                ))}
                            </dl>
                            {project.googleMapLocation && (
                                <a
                                    href={project.googleMapLocation}
                                    className="mt-6 inline-flex w-full justify-center rounded-geo bg-primary px-5 py-3 text-sm font-bold text-white transition hover:bg-primary-strong"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    View on Google Maps
                                </a>
                            )}
                        </div>

                        <div className="rounded-geo border border-line bg-surface-muted p-6">
                            <h2 className="karla-font text-xl font-extrabold text-foreground">Need a similar survey?</h2>
                            <p className="mt-3 text-sm leading-7 text-foreground/65">
                                Share your site location and water challenge. GeoNeeds can recommend the right investigation path before drilling or construction decisions.
                            </p>
                            <Link href="/contact-us" className="mt-5 inline-flex rounded-geo border border-primary px-5 py-3 text-sm font-bold text-primary hover:bg-primary hover:text-white">
                                Start a consultation
                            </Link>
                        </div>
                    </aside>
                </section>

                <section className="border-y border-line bg-surface-muted/40 py-16">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="mb-10 max-w-2xl">
                            <span className="text-xs font-bold uppercase tracking-widest text-primary">Technical pathway</span>
                            <h2 className="karla-font mt-3 text-3xl font-extrabold tracking-tight text-foreground md:text-4xl">
                                How GeoNeeds turns site data into decisions.
                            </h2>
                        </div>
                        <div className="grid gap-5 md:grid-cols-3">
                            {projectStages.map((stage, index) => (
                                <div key={stage.title} className="rounded-geo border border-line bg-surface p-6 shadow-sm">
                                    <p className="karla-font text-4xl font-extrabold text-primary-strong/25">0{index + 1}</p>
                                    <h3 className="karla-font mt-5 text-xl font-extrabold text-foreground">{stage.title}</h3>
                                    <p className="mt-3 text-sm leading-7 text-foreground/65">{stage.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
            <Footer/>
        </div>
    );
}
