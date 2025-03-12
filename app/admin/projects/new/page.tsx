"use client";

import {useState} from "react";

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

    const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!e.target.files) return;

        const file = e.target.files[0];
        setUploading(true);

        const formData = new FormData();
        formData.append("file", file);

        const res = await fetch("/api/admin/upload", {
            method: "POST",
            body: formData,
        });

        const data = await res.json();
        setUploading(false);
        setPhotos([...photos, data.secure_url]); // Store uploaded photo URL
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
            alert("Project Created!");
        } else {
            alert("Failed to create project.");
        }
    };

    return (
        <div>
            <div className="max-w-2xl mx-auto my-12 p-6 bg-white border border-gray-200 rounded-lg">
                <h2 className="text-xl font-bold mb-4">Create New Project</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <input className="border p-2 w-full rounded-lg" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} required/>
                    <textarea className="border p-2 w-full rounded-lg" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} required/>
                    <input type="date" className="border p-2 w-full rounded-lg" value={date} onChange={(e) => setDate(e.target.value)} required/>
                    <input className="border p-2 w-full rounded-lg" placeholder="Location" value={location} onChange={(e) => setLocation(e.target.value)} required/>
                    <input className="border p-2 w-full rounded-lg" placeholder="Google Map Location" value={googleMapLocation}
                           onChange={(e) => setGoogleMapLocation(e.target.value)}
                           required/>
                    <input className="border p-2 w-full rounded-lg" placeholder="Client Name" value={clientName} onChange={(e) => setClientName(e.target.value)} required/>
                    <select className="border p-2 w-full rounded-lg" value={status} onChange={(e) => setStatus(e.target.value)}>
                        <option value="ongoing">Ongoing</option>
                        <option value="completed">Completed</option>
                    </select>

                    {/* File Upload */}
                    <label className="block font-semibold">Upload Photos:</label>
                    <input type="file" onChange={handleFileUpload} className="border p-2 w-full rounded-lg"/>
                    {uploading && <div><p>Uploading...</p></div>}

                    {/* Photo Preview */}
                    <div className="grid grid-cols-3 gap-2 mt-2">
                        {photos.map((photo, index) => (
                            <div key={index} className="relative">
                                <img src={photo} alt="Uploaded" className="w-full h-24 object-cover rounded-lg"/>
                                <button
                                    type="button"
                                    className="absolute top-0 right-0 bg-red-500 text-white text-xs px-2 py-1 rounded-lg"
                                    onClick={() => removePhoto(index)}
                                >
                                    ✕
                                </button>
                            </div>
                        ))}
                    </div>

                    <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-lg">Create Project</button>
                </form>
            </div>
        </div>
    );
}
