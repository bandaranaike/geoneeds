import Link from "next/link";
import Header from "@/app/components/Header";
import {getProjects} from "@/lib/projects";
import Footer from "@/app/components/Footer";

const capabilities = [
    "Hydrogeological surveys",
    "Resistivity imaging",
    "Borehole recommendations",
    "Water quality insights",
];

const metrics = [
    {label: "Survey focus", value: "Water + soil"},
    {label: "Delivery", value: "Field reports"},
    {label: "Coverage", value: "Islandwide"},
];

export default async function Projects() {
    const projects = await getProjects();
    const featuredProject = projects[0];

    return (
        <div className="min-h-screen bg-background text-foreground">
            <Header currentUrl="/projects"/>
            <main>
                <section className="relative overflow-hidden border-b border-line bg-slate-950 text-white">
                    <div className="absolute inset-0">
                        <img
                            src={featuredProject?.photos?.[0] || "/hero_forest.png"}
                            alt=""
                            className="h-full w-full object-cover opacity-35"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-slate-950/35"/>
                    </div>

                    <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-28">
                        <div className="max-w-3xl">
                            <div className="mb-5 inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-extrabold uppercase tracking-widest text-sky-200 backdrop-blur">
                                Field evidence
                            </div>
                            <h1 className="karla-font text-4xl font-extrabold leading-tight tracking-tight md:text-6xl">
                                Projects shaped by geology, water intelligence, and field proof.
                            </h1>
                            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 md:text-lg">
                                Explore GeoNeeds work across groundwater investigation, soil engineering, borehole planning, and sustainable water decisions for real sites.
                            </p>
                            <div className="mt-8 flex flex-wrap gap-3">
                                {capabilities.map((item) => (
                                    <span key={item} className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-slate-100">
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="grid content-end gap-4 sm:grid-cols-3 lg:grid-cols-1">
                            {metrics.map((item) => (
                                <div key={item.label} className="border border-white/15 bg-white/10 p-5 backdrop-blur">
                                    <p className="text-xs font-bold uppercase tracking-widest text-slate-400">{item.label}</p>
                                    <p className="mt-2 text-2xl font-extrabold text-white karla-font">{item.value}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
                    <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
                        <div>
                            <span className="text-xs font-bold uppercase tracking-widest text-primary">Recent work</span>
                            <h2 className="karla-font mt-3 text-3xl font-extrabold tracking-tight text-foreground md:text-5xl">
                                Survey and engineering casework
                            </h2>
                        </div>
                        <p className="max-w-xl text-sm leading-7 text-foreground/65">
                            Each project reflects a practical site decision: where to drill, how to manage groundwater risk, and how to document subsurface conditions before investment.
                        </p>
                    </div>

                    {projects.length > 0 ? (
                        <div className="grid grid-cols-1 gap-7 md:grid-cols-2 xl:grid-cols-3">
                            {projects.map((project, index) => (
                                <Link
                                    key={project._id}
                                    href={`/projects/${project._id}`}
                                    className="group overflow-hidden rounded-geo border border-line bg-surface shadow-sm transition duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-xl hover:shadow-sky-950/10"
                                >
                                    <div className="relative aspect-[16/10] overflow-hidden bg-surface-muted">
                                        <img
                                            src={project.photos?.[0] || "/groundwater_surveys.png"}
                                            alt={project.title}
                                            className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-transparent to-transparent"/>
                                        <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-extrabold uppercase tracking-wider text-primary">
                                            Case {String(index + 1).padStart(2, "0")}
                                        </span>
                                        {project.status && (
                                            <span className="absolute bottom-4 left-4 rounded-full border border-white/20 bg-slate-950/70 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white backdrop-blur">
                                                {project.status}
                                            </span>
                                        )}
                                    </div>
                                    <div className="p-6">
                                        <div className="mb-3 flex flex-wrap gap-2 text-xs font-bold uppercase tracking-wider text-foreground/50">
                                            {project.location && <span>{project.location}</span>}
                                            {project.clientName && <span className="text-primary">For {project.clientName}</span>}
                                        </div>
                                        <h3 className="karla-font text-2xl font-extrabold leading-tight text-foreground group-hover:text-primary">
                                            {project.title}
                                        </h3>
                                        <p className="mt-3 line-clamp-3 text-sm leading-7 text-foreground/65">
                                            {project.description}
                                        </p>
                                        <div className="mt-6 flex items-center justify-between border-t border-line pt-5">
                                            <span className="text-xs font-extrabold uppercase tracking-widest text-primary">View project</span>
                                            <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-primary text-white transition group-hover:translate-x-1">
                                                <span aria-hidden="true">→</span>
                                            </span>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    ) : (
                        <div className="rounded-geo border border-line bg-surface p-10 text-center">
                            <h3 className="karla-font text-2xl font-extrabold text-foreground">Projects are being prepared</h3>
                            <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-foreground/65">
                                GeoNeeds is organizing recent field casework for publication. Contact the team for survey examples relevant to your site.
                            </p>
                        </div>
                    )}
                </section>

                <section className="border-y border-line bg-surface-muted/40 py-16">
                    <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
                        <div>
                            <span className="text-xs font-bold uppercase tracking-widest text-primary">Our method</span>
                            <h2 className="karla-font mt-3 text-3xl font-extrabold tracking-tight text-foreground md:text-4xl">
                                From site question to usable field recommendation.
                            </h2>
                        </div>
                        <div className="grid gap-4 sm:grid-cols-3">
                            {["Investigate", "Interpret", "Recommend"].map((step, index) => (
                                <div key={step} className="rounded-geo border border-line bg-surface p-6">
                                    <p className="text-3xl font-extrabold text-primary-strong/25 karla-font">0{index + 1}</p>
                                    <h3 className="mt-4 font-extrabold text-foreground karla-font">{step}</h3>
                                    <p className="mt-2 text-sm leading-6 text-foreground/65">
                                        {index === 0 && "Capture site conditions through field survey, mapping, and technical observation."}
                                        {index === 1 && "Convert readings into practical hydrogeological and engineering meaning."}
                                        {index === 2 && "Deliver clear next steps for drilling, testing, design, or risk control."}
                                    </p>
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
