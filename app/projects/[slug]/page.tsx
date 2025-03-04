import clientPromise from "@/lib/mongodb";
import {Project} from "@/types/project";
import {ObjectId} from "mongodb";
import Header from "@/components/Header";
import Cloudinary from "@/components/Cloudinary";

interface ProjectPageProps {
    params: { slug: string };
}

async function getProject(slug: string): Promise<Project | null> {
    console.log(slug)
    const client = await clientPromise;
    const db = client.db("geoneeds");
    const project = await db
        .collection("projects")
        .findOne({_id: new ObjectId(slug)});

    return project ? JSON.parse(JSON.stringify(project)) : null;
}

export default async function ProjectPage({params}: ProjectPageProps) {
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
            <Cloudinary/>
        </div>
    );
}
