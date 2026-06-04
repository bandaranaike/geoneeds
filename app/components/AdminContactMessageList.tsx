"use client";
import {useEffect, useState} from "react";

export interface ContactMessage {
    _id: string;
    name: string;
    email: string;
    phone: string;
    message: string;
}

const AdminContactMessageList: React.FC = () => {
    const [messages, setMessages] = useState<ContactMessage[]>([]);
    const fetchMessages = async () => {
        const res = await fetch('/api/admin/contact-messages');
        const messages = await res.json();
        setMessages(messages);
    }

    useEffect(() => {
        fetchMessages();
    }, []);


    return (
        <div className="overflow-hidden rounded-geo border border-line bg-surface shadow-sm">
            <div className="border-b border-line px-6 py-4">
                <h1 className="karla-font text-xl font-extrabold text-foreground">Contact Messages</h1>
                <p className="mt-1 text-sm text-foreground/55">Latest inquiries submitted through the public contact form.</p>
            </div>

            <div className="overflow-x-auto">
                <table className="w-full min-w-[760px] divide-y divide-line text-left text-sm">
                    <thead className="bg-surface-muted/60 text-xs uppercase tracking-widest text-foreground/55">
                    <tr>
                        <th className="px-4 py-3 font-extrabold">Name</th>
                        <th className="px-4 py-3 font-extrabold">Email</th>
                        <th className="px-4 py-3 font-extrabold">Phone</th>
                        <th className="px-4 py-3 font-extrabold">Message</th>
                    </tr>
                    </thead>
                    <tbody className="divide-y divide-line">
                    {messages.map(message => (
                        <tr key={message._id} className="hover:bg-surface-muted/40">
                            <td className="px-4 py-3 font-semibold text-foreground">{message.name}</td>
                            <td className="px-4 py-3 text-foreground/70">{message.email}</td>
                            <td className="px-4 py-3 text-foreground/70">{message.phone}</td>
                            <td className="px-4 py-3 text-foreground/70">{message.message}</td>
                        </tr>
                    ))}
                    {messages.length === 0 && (
                        <tr>
                            <td className="px-4 py-8 text-center text-foreground/55" colSpan={4}>No messages yet.</td>
                        </tr>
                    )}
                    </tbody>
                </table>
            </div>
                </div>

    );
}

export default AdminContactMessageList;
