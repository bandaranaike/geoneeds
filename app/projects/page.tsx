import Link from "next/link";
import Header from "@/app/components/Header";
import {getProjects} from "@/lib/projects";
import Footer from "@/app/components/Footer";

export default async function Projects() {
    const projects = await getProjects();

    return (
        <div className="min-h-screen">
            <Header currentUrl={'/projects'}/>
            <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
                <div className="min-h-96 pb-8">
                    <div className="mb-5 inline-flex rounded-geo border border-line bg-surface px-4 py-2 text-sm font-semibold text-primary shadow-sm">Field evidence</div>
                    <h1 className="mb-10 text-4xl font-extrabold text-foreground karla-font md:text-5xl">Projects</h1>
                    <div className="mb-4 grid grid-cols-1 gap-6 sm:grid-cols-2">
                        {projects.map((project) => (
                            <div key={project._id} className="overflow-hidden rounded-geo border border-line bg-surface shadow-sm transition hover:-translate-y-1 hover:border-primary hover:shadow-xl hover:shadow-sky-950/10">
                                <Link href={`/projects/${project._id}`}>
                                    <img src={project.photos[0]} alt={project.title} className="h-56 w-full object-cover"/>
                                    <h3 className="px-5 pt-6 text-2xl font-bold text-foreground karla-font">{project.title}</h3>
                                    <p className="px-5 pb-6 pt-3 leading-7 text-foreground/65">{project.description}</p>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </main>
            <Footer/>
        </div>
    );
}
