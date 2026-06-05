import {NextRequest, NextResponse} from "next/server";
import {v2 as cloudinary} from "cloudinary";
import type {UploadApiResponse} from "cloudinary";

cloudinary.config({
    cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
    api_key: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY,
    api_secret: process.env.NEXT_PUBLIC_CLOUDINARY_API_SECRET,
});

const MAX_CONCURRENT_UPLOADS = 3;

async function uploadToCloudinary(file: File): Promise<UploadApiResponse> {
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    return new Promise((resolve, reject) => {
        const uploadStream = cloudinary.uploader.upload_stream(
            {
                folder: "geoneeds",
                resource_type: "auto",
                use_filename: true,
                filename_override: file.name,
            },
            (error, result) => {
                if (error || !result) {
                    reject(error ?? new Error("Cloudinary upload failed."));
                    return;
                }

                resolve(result);
            }
        );

        uploadStream.end(buffer);
    });
}

async function uploadFiles(files: File[]) {
    const results: UploadApiResponse[] = [];

    for (let index = 0; index < files.length; index += MAX_CONCURRENT_UPLOADS) {
        const batch = files.slice(index, index + MAX_CONCURRENT_UPLOADS);
        results.push(...await Promise.all(batch.map(uploadToCloudinary)));
    }

    return results;
}

export async function POST(req: NextRequest) {
    try {
        // Ensure request is a form-data request
        if (!req.body) {
            return NextResponse.json({error: "Invalid request, no file found."}, {status: 400});
        }

        const formData = await req.formData();
        const files = formData
            .getAll("file")
            .filter((entry): entry is File => entry instanceof File && entry.size > 0);

        // Validate file existence
        if (files.length === 0) {
            return NextResponse.json({error: "No files uploaded."}, {status: 400});
        }

        const uploadResponses = await uploadFiles(files);
        const secureUrls = uploadResponses.map((uploadResponse) => uploadResponse.secure_url);

        return NextResponse.json(
            {
                message: "Upload successful",
                secure_url: secureUrls[0],
                secure_urls: secureUrls,
            },
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
