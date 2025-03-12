import clientPromise from "@/lib/mongodb";
import {NextResponse} from "next/server";


export async function GET() {
    try {
        const client = await clientPromise;
        const db = client.db('geoneeds');
        const collection = db.collection('contactMessages');

        const messages = await collection.find({}).toArray();

        return NextResponse.json(messages, {status: 200});
    } catch (error) {
        console.error('Error fetching messages:', error);
        return NextResponse.json({message: 'Internal server error'}, {status: 500});
    }
}