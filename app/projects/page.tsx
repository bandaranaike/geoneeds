import clientPromise from "@/lib/mongodb";
import {Project} from "@/types/project";
import Link from "next/link";
import Header from "@/components/Header";

async function getProjects(): Promise<Project[]> {
    const client = await clientPromise;
    const db = client.db("geoneeds");
    const projects = await db.collection("projects").find({}).toArray();
    return JSON.parse(JSON.stringify(projects));
}

export default async function Projects() {
    const projects = await getProjects();

    return (
        <div>
            <Header/>
            <div className={`p-6 max-w-7xl mx-auto`}>
                <h1 className={`text-3xl`}>Projects</h1>
                <div className={`grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4`}>
                    {projects.map((project) => (
                        <div key={project._id} className={`border border-gray-200 rounded-xl`}>
                            <Link href={`/projects/${project._id}`}>{project.title}</Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
