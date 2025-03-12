import Header from "@/app/components/Header";
import {getProject} from "@/lib/projects";
import ImageGallery from "@/app/components/ImageGallery";

interface ProjectPageProps {
    params: Promise<{ slug: string }>;
}

export default async function ProjectPage(props: ProjectPageProps) {
    const params = await props.params;
    const project = await getProject(params.slug);

    if (!project) {
        return <p>Project not found</p>;
    }

    return (
        <div>
            <Header currentUrl={'/projects'}/>
            <div className={'m-4'}>
                <div className="mx-auto max-w-7xl lg:mt-6 pb-8 min-h-96">
                    <div className="grid md:grid-cols-3 grid-cols-1 gap-2">
                        <div className={`col-span-2 mb-4`}>
                            <ImageGallery images={project.photos}/>
                        </div>
                        <div className="">
                            <h1 className={`mb-2 text-3xl pb-4 font-semibold`}>{project.title}</h1>
                            <p className={`pb-4 text-gray-500`}>{project.description}</p>
                            <p className={``}><strong>Client:</strong> {project.clientName}</p>
                            <p className={` pb-4`}><strong>Location:</strong> {project.location}</p>
                            <a
                                href={project.googleMapLocation}
                                className={`text-sm text-gray-600 border-gray-200 border rounded-lg px-3 py-2 hover:bg-gray-100`}
                                target="_blank"
                            >
                                View on Google Maps
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
