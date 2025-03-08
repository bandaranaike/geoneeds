import {NextResponse} from "next/server";
import clientPromise from "@/lib/mongodb";

export async function POST(req: Request) {
    const project = await req.json();
    const client = await clientPromise;
    const db = client.db("geoneeds");

    await db.collection("projects").insertOne(project);

    return NextResponse.json({message: "Project created successfully"}, {status: 201});
}

export async function GET() {
    const client = await clientPromise;
    const db = client.db("geoneeds");

    const projects = await db.collection("projects").find({}).toArray();

    return NextResponse.json(projects);
}
