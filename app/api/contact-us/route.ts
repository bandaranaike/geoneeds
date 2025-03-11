import {NextResponse} from 'next/server';
import clientPromise from "@/lib/mongodb";

export async function POST(request: Request) {
    try {
        const {name, phone, email, message} = await request.json();

        if (!name || !email || !message) {
            return NextResponse.json({message: 'Missing required fields'}, {status: 400});
        }

        const client = await clientPromise;
        const db = client.db('geoneeds');
        const collection = db.collection('contactMessages'); // Choose a collection name

        await collection.insertOne({
            name,
            phone,
            email,
            message,
            createdAt: new Date(),
        });

        return NextResponse.json({message: 'Message submitted successfully'}, {status: 201});
    } catch (error) {
        console.error('Error submitting message:', error);
        return NextResponse.json({message: 'Internal server error'}, {status: 500});
    }
}