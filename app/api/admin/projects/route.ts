import {NextResponse} from "next/server";
import clientPromise from "@/lib/mongodb";
import {revalidatePath} from "next/cache";

export async function POST(req: Request) {
    const project = await req.json();
    const client = await clientPromise;
    const db = client.db("geoneeds");

    await db.collection("projects").insertOne(project);
    revalidatePath("/");
    revalidatePath("/projects");
    revalidatePath("/admin/projects");

    return NextResponse.json({message: "Project created successfully"}, {status: 201});
}

export async function GET() {
    const client = await clientPromise;
    const db = client.db("geoneeds");

    const projects = await db.collection("projects").find({}).toArray();

    return NextResponse.json(projects);
}
