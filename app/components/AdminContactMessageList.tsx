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
        <div>
            <div className="border border-gray-200 rounded-xl">
                <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
                    <h1 className={`text-xl font-semibold`}>Contact Messages</h1>
                </div>

                <table className="w-full divide-y divide-gray-200">
                    <thead>
                    <tr>
                        <th className="px-2 py-1 border-r">Name</th>
                        <th className="px-2 py-1 border-r">Email</th>
                        <th className="px-2 py-1 border-r">Phone</th>
                        <th className="px-3 py-2">Message</th>
                    </tr>
                    </thead>
                    <tbody>
                    {messages.map(message => (
                        <tr key={message._id} className={`border-b border-gray-200 last:border-b-0`}>
                            <td className={`px-2 py-1 border-r`}>{message.name}</td>
                            <td className={`px-2 py-1 border-r`}>{message.email}</td>
                            <td className={`px-2 py-1 border-r`}>{message.phone}</td>
                            <td className={`px-2 py-1`}>{message.message}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>


            </div>


        </div>

    );
}

export default AdminContactMessageList;