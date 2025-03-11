import {NextRequest, NextResponse} from "next/server";
import {v2 as cloudinary} from "cloudinary";

cloudinary.config({
    cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
    api_key: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY,
    api_secret: process.env.NEXT_PUBLIC_CLOUDINARY_API_SECRET,
});

export async function POST(req: NextRequest) {
    try {
        // Ensure request is a form-data request
        if (!req.body) {
            return NextResponse.json({error: "Invalid request, no file found."}, {status: 400});
        }

        const formData = await req.formData();
        const file = formData.get("file") as Blob | null;

        // Validate file existence
        if (!file) {
            return NextResponse.json({error: "No file uploaded."}, {status: 400});
        }

        // Convert file to Buffer
        const arrayBuffer = await file.arrayBuffer();
        const buffer = Buffer.from(arrayBuffer);

        // Convert buffer to base64 string for Cloudinary upload
        const base64String = `data:${file.type};base64,${buffer.toString("base64")}`;

        // Upload to Cloudinary
        const uploadResponse = await cloudinary.uploader.upload(base64String, {
            folder: "geoneeds", // Store under a specific folder
            resource_type: "auto",
        });

        return NextResponse.json(
            {message: "Upload successful", secure_url: uploadResponse.secure_url},
            {status: 200}
        );
    } catch (error: unknown) {
        console.error("Upload Error:", error);

        const errorMessage = error instanceof Error ? error.message : "Unknown error";

        return NextResponse.json(
            {error: "File upload failed", details: errorMessage},
            {status: 500}
        );
    }
}
