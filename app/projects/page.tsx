import Link from "next/link";
import Header from "@/app/components/Header";
import {getProjects} from "@/lib/projects";
import Footer from "@/app/components/Footer";

export default async function Projects() {
    const projects = await getProjects();

    return (
        <div>
            <Header currentUrl={'/projects'}/>
            <div className={'m-4'}>
                <div className="mx-auto max-w-7xl lg:mt-6 pb-8 min-h-96">
                    <h1 className={`mb-2 text-3xl pb-6`}>Projects</h1>
                    <div className={`grid grid-cols-1 gap-4 sm:grid-cols-2 mb-4`}>
                        {projects.map((project) => (
                            <div key={project._id} className={`border border-gray-100 rounded-xl shadow`}>
                                <Link href={`/projects/${project._id}`}>
                                    <img src={project.photos[0]} alt={project.title} className={`w-full h-48 object-cover rounded-t-xl`}/>
                                    <h3 className="px-4 pt-6 text-2xl font-semibold">{project.title}</h3>
                                    <p className="text-gray-500 px-4 pb-4 pt-2">{project.description}</p>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}
