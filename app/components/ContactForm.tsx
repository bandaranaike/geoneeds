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
        } catch (error: unknown) {
            // Handle the error safely
            const errorMessage = error instanceof Error ? error.message : 'An error occurred.';
            setSubmissionError(errorMessage);

            // Call onError callback if it exists
            onError?.(errorMessage);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            {submissionError && <p className="mb-4 rounded-geo border border-red-200 bg-red-50 px-4 py-3 text-red-700">{submissionError}</p>}
            <div className="grid gap-5 md:grid-cols-3">
                <div>
                    <label className="mb-2 block text-sm font-semibold text-foreground" htmlFor="name">Name</label>
                    <input
                        className="w-full rounded-geo border border-line bg-background px-4 py-3 text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-sky-200 dark:focus:ring-sky-900"
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label className="mb-2 block text-sm font-semibold text-foreground" htmlFor="phone">Phone</label>
                    <input
                        className="w-full rounded-geo border border-line bg-background px-4 py-3 text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-sky-200 dark:focus:ring-sky-900"
                        type="tel"
                        id="phone"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                    />
                </div>
                <div>
                    <label className="mb-2 block text-sm font-semibold text-foreground" htmlFor="email">Email</label>
                    <input
                        className="w-full rounded-geo border border-line bg-background px-4 py-3 text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-sky-200 dark:focus:ring-sky-900"
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="md:col-span-3">
                    <label className="mb-2 block text-sm font-semibold text-foreground" htmlFor="message">Message</label>
                    <textarea
                        className="min-h-36 w-full rounded-geo border border-line bg-background px-4 py-3 text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-sky-200 dark:focus:ring-sky-900"
                        id="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                    />
                </div>
                <div className="md:col-span-3">
                    <button type="submit" className="rounded-geo bg-primary px-6 py-3 font-semibold text-white shadow-lg shadow-sky-900/10 transition hover:-translate-y-0.5 hover:bg-primary-strong disabled:cursor-not-allowed disabled:opacity-60" disabled={isSubmitting}>
                        {isSubmitting ? 'Submitting...' : 'Send Message'}
                    </button>
                </div>
            </div>
        </form>
    );
};

export default ContactForm;
