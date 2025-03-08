import Header from "@/components/Header";
import Cloudinary from "@/components/Cloudinary";
import {getProject} from "@/lib/projects";

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
            <Header/>
            <h1>{project.title}</h1>
            <p>{project.description}</p>
            <p><strong>Client:</strong> {project.clientName}</p>
            <p><strong>Location:</strong> {project.location}</p>
            <a href={project.googleMapLocation} target="_blank">View on Google Maps</a>
            <div>
                {project.photos.map((photo, index) => (
                    <img key={index} src={photo} alt={`Project ${index}`} width="300"/>
                ))}
            </div>
        </div>
    );
}
