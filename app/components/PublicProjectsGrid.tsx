import Link from "next/link";
import {Project} from "@/types/project";

interface PublicProjectsGridProps {
    projects: Project[];
    columns?: "three" | "four";
}

export default function PublicProjectsGrid({projects, columns = "three"}: PublicProjectsGridProps) {
    if (projects.length === 0) {
        return (
            <div className="rounded-geo border border-line bg-surface p-10 text-center">
                <h3 className="karla-font text-2xl font-extrabold text-foreground">Projects are being prepared</h3>
                <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-foreground/65">
                    GeoNeeds is organizing recent field casework for publication. Contact the team for survey examples relevant to your site.
                </p>
            </div>
        );
    }

    const gridClass = columns === "four"
        ? "grid grid-cols-1 gap-7 md:grid-cols-2 xl:grid-cols-4"
        : "grid grid-cols-1 gap-7 md:grid-cols-2 xl:grid-cols-3";

    return (
        <div className={gridClass}>
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
    );
}
