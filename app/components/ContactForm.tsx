"use client";
import React, {useState} from 'react';

interface ContactFormProps {
    onSuccess?: () => void; // Optional callback for successful submission
    onError?: (error: string) => void; // Optional callback for errors
}

const ContactForm: React.FC<ContactFormProps> = ({onSuccess, onError}) => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submissionError, setSubmissionError] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmissionError(null); // Reset error on new submission

        // Basic validation (add more robust validation as needed)
        if (!name || !email || !message) {
            setSubmissionError('Please fill in all required fields.');
            setIsSubmitting(false);
            if (onError) onError('Please fill in all required fields.');
            return;
        }

        // Simulate form submission (replace with your actual API call)
        try {
            const response = await fetch('/api/contact-us', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({name, phone, email, message}),
            });

            if (!response.ok) {
                throw new Error('Failed to submit form.');
            }

            if (onSuccess) onSuccess();

            setName('');
            setPhone('');
            setEmail('');
            setMessage('');
        } catch (error: any) {
            setSubmissionError(error.message || 'An error occurred.');
            if (onError) onError(error.message || 'An error occurred.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            {submissionError && <p style={{color: 'red'}} className={`mb-4`}>{submissionError}</p>}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div>
                    <label className={`block mb-1`} htmlFor="name">Name:</label>
                    <input
                        className={`border border-gray-200 rounded-lg px-3 py-2 w-full`}
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label className={`block mb-1`} htmlFor="phone">Phone:</label>
                    <input
                        className={`border border-gray-200 rounded-lg px-3 py-2 w-full`}
                        type="tel"
                        id="phone"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                    />
                </div>
                <div>
                    <label className={`block mb-1`} htmlFor="email">Email:</label>
                    <input
                        className={`border border-gray-200 rounded-lg px-3 py-2 w-full`}
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className={`col-span-3`}>
                    <label className={`block mb-1`} htmlFor="message">Message:</label>
                    <textarea
                        className={`border border-gray-200 rounded-lg px-3 py-2 w-full`}
                        id="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                    />
                </div>
                <div className="">
                    <button type="submit" className={`border border-gray-300 bg-gray rounded-lg  -sm hover:bg-gray-100 font-semibold px-6 py-3`} disabled={isSubmitting}>
                        {isSubmitting ? 'Submitting...' : 'Send Message'}
                    </button>
                </div>
            </div>
        </form>
    );
};

export default ContactForm;