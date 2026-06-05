"use client";

import {useState} from "react";
import AdminToast, {AdminToastState} from "@/app/components/AdminToast";

type UploadResponse = {
    secure_url?: string;
    secure_urls?: string[];
    error?: string;
};

function getUploadedUrls(data: UploadResponse) {
    if (data.secure_urls?.length) {
        return data.secure_urls;
    }

    return data.secure_url ? [data.secure_url] : [];
}

export default function NewProjectPage() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [date, setDate] = useState("");
    const [photos, setPhotos] = useState<string[]>([]);
    const [location, setLocation] = useState("");
    const [googleMapLocation, setGoogleMapLocation] = useState("");
    const [clientName, setClientName] = useState("");
    const [status, setStatus] = useState("ongoing");
    const [uploading, setUploading] = useState(false);
    const [toast, setToast] = useState<AdminToastState | null>(null);

    const resetForm = () => {
        setTitle("");
        setDescription("");
        setDate("");
        setPhotos([]);
        setLocation("");
        setGoogleMapLocation("");
        setClientName("");
        setStatus("ongoing");
    };

    const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFiles = Array.from(e.target.files ?? []);
        if (selectedFiles.length === 0) return;

        setUploading(true);

        const formData = new FormData();
        selectedFiles.forEach((file) => {
            formData.append("file", file);
        });

        try {
            const res = await fetch("/api/admin/upload", {
                method: "POST",
                body: formData,
            });

            const data = await res.json() as UploadResponse;
            if (!res.ok) {
                throw new Error(data.error ?? "Upload failed.");
            }

            const uploadedUrls = getUploadedUrls(data);
            if (uploadedUrls.length === 0) {
                throw new Error("Upload response did not include any file URLs.");
            }

            setPhotos((currentPhotos) => [...currentPhotos, ...uploadedUrls]);
        } catch (error) {
            const message = error instanceof Error ? error.message : "Upload failed.";
            setToast({type: "error", message});
        } finally {
            setUploading(false);
            e.target.value = "";
        }
    };

    const removePhoto = (index: number) => {
        setPhotos(photos.filter((_, i) => i !== index));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const projectData = {
            title,
            description,
            date,
            photos,
            location,
            googleMapLocation,
            clientName,
            status,
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString(),
        };

        const res = await fetch("/api/admin/projects", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(projectData),
        });

        if (res.ok) {
            resetForm();
            setToast({type: "success", message: "Project created successfully. The form is ready for a new project."});
        } else {
            setToast({type: "error", message: "Failed to create project. Please check the details and try again."});
        }
    };

    return (
        <div className="mx-auto max-w-3xl">
            <AdminToast toast={toast} onClose={() => setToast(null)}/>
            <div className="mb-6">
                <span className="text-xs font-bold uppercase tracking-widest text-primary">Project editor</span>
                <h1 className="karla-font mt-2 text-3xl font-extrabold text-foreground">Create New Project</h1>
                <p className="mt-2 text-sm leading-6 text-foreground/60">Add field evidence for the public project showcase.</p>
            </div>
            <div className="rounded-geo border border-line bg-surface p-6 shadow-sm md:p-8">
                <form onSubmit={handleSubmit} className="space-y-4">
                    <input className="w-full rounded-geo border border-line bg-background px-4 py-3 outline-none focus:border-primary" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} required/>
                    <textarea className="min-h-32 w-full rounded-geo border border-line bg-background px-4 py-3 outline-none focus:border-primary" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} required/>
                    <input type="date" className="w-full rounded-geo border border-line bg-background px-4 py-3 outline-none focus:border-primary" value={date} onChange={(e) => setDate(e.target.value)} required/>
                    <input className="w-full rounded-geo border border-line bg-background px-4 py-3 outline-none focus:border-primary" placeholder="Location" value={location} onChange={(e) => setLocation(e.target.value)} required/>
                    <input className="w-full rounded-geo border border-line bg-background px-4 py-3 outline-none focus:border-primary" placeholder="Google Map Location" value={googleMapLocation}
                           onChange={(e) => setGoogleMapLocation(e.target.value)}
                           required/>
                    <input className="w-full rounded-geo border border-line bg-background px-4 py-3 outline-none focus:border-primary" placeholder="Client Name" value={clientName} onChange={(e) => setClientName(e.target.value)} required/>
                    <select className="w-full rounded-geo border border-line bg-background px-4 py-3 outline-none focus:border-primary" value={status} onChange={(e) => setStatus(e.target.value)}>
                        <option value="ongoing">Ongoing</option>
                        <option value="completed">Completed</option>
                    </select>

                    {/* File Upload */}
                    <label className="block text-sm font-bold text-foreground">Upload Photos</label>
                    <input type="file" multiple onChange={handleFileUpload} className="w-full rounded-geo border border-dashed border-line bg-surface-muted/50 px-4 py-3 text-sm"/>
                    {uploading && <p className="text-sm font-semibold text-primary">Uploading...</p>}

                    {/* Photo Preview */}
                    <div className="grid grid-cols-3 gap-2 mt-2">
                        {photos.map((photo, index) => (
                            <div key={index} className="relative">
                                <img src={photo} alt="Uploaded" className="h-24 w-full rounded-geo object-cover"/>
                                <button
                                    type="button"
                                    className="absolute right-1 top-1 rounded-full bg-red-500 px-2 py-1 text-xs font-bold text-white"
                                    onClick={() => removePhoto(index)}
                                >
                                    ✕
                                </button>
                            </div>
                        ))}
                    </div>

                    <button type="submit" className="rounded-geo bg-primary px-5 py-3 text-sm font-bold text-white hover:bg-primary-strong">Create Project</button>
                </form>
            </div>
        </div>
    );
}
