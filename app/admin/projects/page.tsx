import Link from "next/link";
import {getProjects} from "@/lib/projects";
import {PlusCircleIcon} from "@heroicons/react/24/outline";

export const dynamic = "force-dynamic";

export default async function Projects() {
    const projects = await getProjects();

    return (
        <div className="overflow-hidden rounded-geo border border-line bg-surface shadow-sm">
            <div className="flex flex-col gap-4 border-b border-line px-6 py-5 sm:flex-row sm:items-center sm:justify-between">
                <div>
                    <span className="text-xs font-bold uppercase tracking-widest text-primary">Project records</span>
                    <h1 className="karla-font mt-1 text-2xl font-extrabold text-foreground">Admin Projects</h1>
                </div>
                <Link href="/admin/projects/new" className="inline-flex items-center justify-center gap-2 rounded-geo bg-primary px-4 py-3 text-sm font-bold text-white hover:bg-primary-strong">
                    <PlusCircleIcon width={22}/>Add project
                </Link>
            </div>
            <div className="overflow-x-auto">
                <table className="w-full min-w-[640px] divide-y divide-line text-left text-sm">
                    <thead className="bg-surface-muted/60 text-xs uppercase tracking-widest text-foreground/55">
                    <tr>
                        <th className="px-4 py-3 font-extrabold">Title</th>
                        <th className="px-4 py-3 font-extrabold">Location</th>
                        <th className="px-4 py-3 font-extrabold">Status</th>
                        <th className="px-4 py-3 font-extrabold">Actions</th>
                    </tr>
                    </thead>
                    <tbody className="divide-y divide-line">
                    {projects.map((project) => (
                        <tr key={project._id} className="hover:bg-surface-muted/40">
                            <td className="px-4 py-3 font-semibold text-foreground">{project.title}</td>
                            <td className="px-4 py-3 text-foreground/70">{project.location}</td>
                            <td className="px-4 py-3">
                                <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary">{project.status || "Draft"}</span>
                            </td>
                            <td className="px-4 py-3">
                                <Link href={`/admin/projects/${project._id}`} className="font-bold text-primary hover:text-primary-strong">Edit</Link>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
