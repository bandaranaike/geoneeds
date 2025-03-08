// api/admin/projects/[id]/route.ts
import {NextResponse} from 'next/server';
import {getProject} from "@/lib/projects";
import clientPromise from "@/lib/mongodb";
import {ObjectId} from "mongodb";

export async function GET(request: Request, {params}: { params: { id: string } }) {
    const {id} = params;
    try {
        if (!id) {
            return NextResponse.json({message: "Project ID is required"}, {status: 400});
        }
        const project = await getProject(id);
        if (!project) {
            return NextResponse.json({error: "Project not found"}, {status: 404})
        }
        return NextResponse.json(project);
    } catch (error) {
        console.error('Error fetching project:', error);
        return NextResponse.json({error: 'Failed to fetch project'}, {status: 500});
    }
}

export async function GET1(req: Request) {
    const {searchParams} = new URL(req.url);
    const id = searchParams.get("id");
    if (!id) {
        return NextResponse.json({message: "Project ID is required"}, {status: 400});
    }
    const project = await getProject(id);
    if (!project) {
        return NextResponse.json({message: "Project not found"}, {status: 404});
    }
    return NextResponse.json(project);
}

export async function PUT(request: Request, {params}: { params: { id: string } }) {
    const {id} = params;
    try {
        const project = await request.json();
        const client = await clientPromise;
        const db = client.db("geoneeds");
        await db.collection("projects").updateOne({_id: new ObjectId(id)}, {$set: project});
        return NextResponse.json({message: `Project ${id} updated successfully`}, {status: 200});
    } catch (error) {
        console.error(`Error updating project ${id}:`, error);
        return NextResponse.json({error: `Failed to update project ${id}`}, {status: 500});
    }
}

export async function DELETE(request: Request, {params}: { params: { id: string } }) {
    const {id} = params;
    try {
        const client = await clientPromise;
        const db = client.db("geoneeds");
        await db.collection("projects").deleteOne({_id: new ObjectId(id)});
        return NextResponse.json({message: `Project ${id} deleted successfully`}, {status: 200});
    } catch (error) {
        console.error(`Error deleting project ${id}:`, error);
        return NextResponse.json({error: `Failed to delete project ${id}`}, {status: 500});
    }
}