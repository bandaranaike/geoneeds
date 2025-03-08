import Link from "next/link";
import Header from "@/components/Header";
import {getProjects} from "@/lib/projects";

export default async function Projects() {
    const projects = await getProjects();

    return (
        <div>
            <Header/>
            <div className={`p-6 max-w-7xl mx-auto`}>
                <h1 className={`text-3xl`}>Admin Projects</h1>
                <table>
                    <thead>
                    <tr>
                        <th>Title</th>
                        <th>Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {projects.map((project) => (
                        <tr key={project._id}>
                            <td>{project.title}</td>
                            <td>
                                <Link href={`/admin/projects/${project._id}`}>Edit</Link>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
