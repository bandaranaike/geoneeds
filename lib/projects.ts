import clientPromise from "@/lib/mongodb";
import {Project} from "@/types/project";
import {ObjectId} from "mongodb";

export async function getProjects(): Promise<Project[]> {
    const client = await clientPromise;
    const db = client.db("geoneeds");
    const projects = await db.collection("projects").find({}).sort({created_at: -1, _id: -1}).toArray();
    return JSON.parse(JSON.stringify(projects));
}

export async function getLatestProjects(limit = 4): Promise<Project[]> {
    const client = await clientPromise;
    const db = client.db("geoneeds");
    const projects = await db.collection("projects").find({}).sort({created_at: -1, _id: -1}).limit(limit).toArray();
    return JSON.parse(JSON.stringify(projects));
}



export async function getProject(slug: string): Promise<Project | null> {
    const client = await clientPromise;
    const db = client.db("geoneeds");
    const project = await db
        .collection("projects")
        .findOne({_id: new ObjectId(slug)});

    return project ? JSON.parse(JSON.stringify(project)) : null;
}
