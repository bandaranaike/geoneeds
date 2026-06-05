import {NextResponse} from 'next/server';
import clientPromise from "@/lib/mongodb";

export async function POST(request: Request) {
    try {
        const {name, phone, email, message} = await request.json();
        const trimmedName = typeof name === 'string' ? name.trim() : '';
        const trimmedPhone = typeof phone === 'string' ? phone.trim() : '';
        const trimmedEmail = typeof email === 'string' ? email.trim() : '';
        const trimmedMessage = typeof message === 'string' ? message.trim() : '';

        if (!trimmedName || !trimmedMessage || (!trimmedEmail && !trimmedPhone)) {
            return NextResponse.json({message: 'Name, message, and at least one contact method are required'}, {status: 400});
        }

        const client = await clientPromise;
        const db = client.db('geoneeds');
        const collection = db.collection('contactMessages'); // Choose a collection name

        await collection.insertOne({
            name: trimmedName,
            phone: trimmedPhone,
            email: trimmedEmail,
            message: trimmedMessage,
            createdAt: new Date(),
        });

        return NextResponse.json({message: 'Message submitted successfully'}, {status: 201});
    } catch (error) {
        console.error('Error submitting message:', error);
        return NextResponse.json({message: 'Internal server error'}, {status: 500});
    }
}
