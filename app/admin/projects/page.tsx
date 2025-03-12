import Link from "next/link";
import {getProjects} from "@/lib/projects";
import {PlusCircleIcon} from "@heroicons/react/24/outline";

export default async function Projects() {
    const projects = await getProjects();

    return (
        <div>
            <div className={`p-6 max-w-7xl mx-auto`}>
                <div className="border border-gray-200 rounded-xl">
                    <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
                        <h1 className={`text-2xl`}>Admin Projects</h1>
                        <Link href={`/admin/projects/new`} className={`bg-blue-500 text-white pl-2 pr-4 py-2 rounded-lg flex gap-2`}><PlusCircleIcon width={22}/>Add</Link>
                    </div>
                    <table className="w-full divide-y divide-gray-200">
                        <thead>
                        <tr className="border-b-2 border-gray-200 text-left">
                            <th className="px-2 py-1 border-r">Title</th>
                            <th className="px-3 py-2">Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                        {projects.map((project) => (
                            <tr key={project._id} className={`border-b border-gray-200 last:border-b-0`}>
                                <td className={`px-2 py-1 border-r`}>{project.title}</td>
                                <td className={`px-2 py-1`}>
                                    <Link href={`/admin/projects/${project._id}`}>Edit</Link>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
