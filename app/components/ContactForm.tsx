"use client";
import React, {useMemo, useState} from 'react';
import {CheckCircleIcon, ExclamationCircleIcon, PaperAirplaneIcon} from "@heroicons/react/24/outline";

interface ContactFormProps {
    onSuccess?: () => void; // Optional callback for successful submission
    onError?: (error: string) => void; // Optional callback for errors
}

type FormValues = {
    name: string;
    phone: string;
    email: string;
    message: string;
};

type FormErrors = Partial<Record<keyof FormValues, string>>;

const initialValues: FormValues = {
    name: '',
    phone: '',
    email: '',
    message: '',
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phonePattern = /^[+()\d\s.-]{7,20}$/;

const validateContactForm = (values: FormValues): FormErrors => {
    const errors: FormErrors = {};
    const trimmedName = values.name.trim();
    const trimmedEmail = values.email.trim();
    const trimmedPhone = values.phone.trim();
    const trimmedMessage = values.message.trim();

    if (!trimmedName) {
        errors.name = 'Enter your name.';
    } else if (trimmedName.length < 2) {
        errors.name = 'Name must be at least 2 characters.';
    }

    if (!trimmedEmail && !trimmedPhone) {
        errors.email = 'Enter either an email address or a phone number.';
        errors.phone = 'Enter either a phone number or an email address.';
    } else if (trimmedEmail && !emailPattern.test(trimmedEmail)) {
        errors.email = 'Enter a valid email address, for example name@example.com.';
    }

    if (trimmedPhone && !phonePattern.test(trimmedPhone)) {
        errors.phone = 'Enter a valid phone number using digits, spaces, +, -, or parentheses.';
    }

    if (!trimmedMessage) {
        errors.message = 'Tell us a little about your project.';
    } else if (trimmedMessage.length < 20) {
        errors.message = 'Message must be at least 20 characters.';
    }

    return errors;
};

const inputBaseClass = "w-full rounded-geo border bg-surface px-4 py-3 text-foreground outline-none transition placeholder:text-foreground/38 focus:ring-2 disabled:cursor-not-allowed disabled:opacity-70";
const validInputClass = "border-line focus:border-primary focus:ring-sky-200 dark:focus:ring-sky-900";
const errorInputClass = "border-red-400 focus:border-red-500 focus:ring-red-100 dark:border-red-400 dark:focus:ring-red-950";

const ContactForm: React.FC<ContactFormProps> = ({onSuccess, onError}) => {
    const [values, setValues] = useState<FormValues>(initialValues);
    const [errors, setErrors] = useState<FormErrors>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submissionError, setSubmissionError] = useState<string | null>(null);
    const [submissionSuccess, setSubmissionSuccess] = useState(false);

    const hasErrors = useMemo(() => Object.keys(errors).length > 0, [errors]);

    const setFieldValue = (field: keyof FormValues, value: string) => {
        setValues((currentValues) => ({...currentValues, [field]: value}));
        setSubmissionError(null);
        setSubmissionSuccess(false);

        if (errors[field]) {
            const nextValues = {...values, [field]: value};
            const nextErrors = validateContactForm(nextValues);
            setErrors((currentErrors) => {
                const updatedErrors = {...currentErrors};

                if (nextErrors[field]) {
                    updatedErrors[field] = nextErrors[field];
                } else {
                    delete updatedErrors[field];
                }

                return updatedErrors;
            });
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const validationErrors = validateContactForm(values);

        setErrors(validationErrors);
        setSubmissionError(null);
        setSubmissionSuccess(false);

        if (Object.keys(validationErrors).length > 0) {
            setSubmissionError('Please correct the highlighted fields and try again.');
            setIsSubmitting(false);
            onError?.('Please correct the highlighted fields and try again.');
            return;
        }

        setIsSubmitting(true);

        try {
            const response = await fetch('/api/contact-us', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: values.name.trim(),
                    phone: values.phone.trim(),
                    email: values.email.trim(),
                    message: values.message.trim(),
                }),
            });

            if (!response.ok) {
                const errorBody = await response.json().catch(() => null);
                throw new Error(errorBody?.message || 'We could not send your message. Please try again.');
            }

            onSuccess?.();

            setValues(initialValues);
            setErrors({});
            setSubmissionSuccess(true);
        } catch (error: unknown) {
            const errorMessage = error instanceof Error ? error.message : 'Something went wrong while sending your message.';
            setSubmissionError(errorMessage);

            onError?.(errorMessage);
        } finally {
            setIsSubmitting(false);
        }
    };

    const fieldStateClass = (field: keyof FormValues) => `${inputBaseClass} ${errors[field] ? errorInputClass : validInputClass}`;

    return (
        <form onSubmit={handleSubmit} noValidate>
            <div className="mb-6">
                <p className="text-sm font-semibold uppercase tracking-[0.14em] text-accent">Contact form</p>
                <h2 className="mt-2 text-2xl font-bold text-foreground">Tell us about your survey</h2>
                <p className="mt-2 text-sm leading-6 text-foreground/65">Name, message, and at least one contact method are required.</p>
            </div>

            {submissionError && (
                <div className="mb-5 flex gap-3 rounded-geo border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700 dark:border-red-900/70 dark:bg-red-950/30 dark:text-red-200" role="alert">
                    <ExclamationCircleIcon className="mt-0.5 h-5 w-5 flex-none" aria-hidden="true"/>
                    <p>{submissionError}</p>
                </div>
            )}

            {submissionSuccess && (
                <div className="mb-5 flex gap-3 rounded-geo border border-teal-200 bg-teal-50 px-4 py-3 text-sm text-teal-800 dark:border-teal-900/70 dark:bg-teal-950/30 dark:text-teal-100" role="status">
                    <CheckCircleIcon className="mt-0.5 h-5 w-5 flex-none" aria-hidden="true"/>
                    <p>Your message has been sent. We will get back to you soon.</p>
                </div>
            )}

            <div className="grid gap-5 md:grid-cols-2">
                <div>
                    <label className="mb-2 block text-sm font-semibold text-foreground" htmlFor="name">Name <span className="text-red-500">*</span></label>
                    <input
                        className={fieldStateClass('name')}
                        type="text"
                        id="name"
                        name="name"
                        value={values.name}
                        onChange={(e) => setFieldValue('name', e.target.value)}
                        placeholder="Your full name"
                        autoComplete="name"
                        aria-invalid={Boolean(errors.name)}
                        aria-describedby={errors.name ? "name-error" : undefined}
                        disabled={isSubmitting}
                    />
                    {errors.name && <p id="name-error" className="mt-2 text-sm text-red-600 dark:text-red-300">{errors.name}</p>}
                </div>
                <div>
                    <label className="mb-2 block text-sm font-semibold text-foreground" htmlFor="email">Email <span className="text-foreground/45">or phone required</span></label>
                    <input
                        className={fieldStateClass('email')}
                        type="email"
                        id="email"
                        name="email"
                        value={values.email}
                        onChange={(e) => setFieldValue('email', e.target.value)}
                        placeholder="name@example.com"
                        autoComplete="email"
                        aria-invalid={Boolean(errors.email)}
                        aria-describedby={errors.email ? "email-error" : undefined}
                        disabled={isSubmitting}
                    />
                    {errors.email && <p id="email-error" className="mt-2 text-sm text-red-600 dark:text-red-300">{errors.email}</p>}
                </div>
                <div className="md:col-span-2">
                    <label className="mb-2 block text-sm font-semibold text-foreground" htmlFor="phone">Phone <span className="text-foreground/45">or email required</span></label>
                    <input
                        className={fieldStateClass('phone')}
                        type="tel"
                        id="phone"
                        name="phone"
                        value={values.phone}
                        onChange={(e) => setFieldValue('phone', e.target.value)}
                        placeholder="+94 777 350 550"
                        autoComplete="tel"
                        inputMode="tel"
                        aria-invalid={Boolean(errors.phone)}
                        aria-describedby={errors.phone ? "phone-error" : undefined}
                        disabled={isSubmitting}
                    />
                    {errors.phone && <p id="phone-error" className="mt-2 text-sm text-red-600 dark:text-red-300">{errors.phone}</p>}
                </div>
                <div className="md:col-span-2">
                    <label className="mb-2 block text-sm font-semibold text-foreground" htmlFor="message">Message <span className="text-red-500">*</span></label>
                    <textarea
                        className={`${fieldStateClass('message')} min-h-40 resize-y`}
                        id="message"
                        name="message"
                        value={values.message}
                        onChange={(e) => setFieldValue('message', e.target.value)}
                        placeholder="Project location, service needed, timeline, and any known site details"
                        aria-invalid={Boolean(errors.message)}
                        aria-describedby={errors.message ? "message-error" : undefined}
                        disabled={isSubmitting}
                    />
                    {errors.message && <p id="message-error" className="mt-2 text-sm text-red-600 dark:text-red-300">{errors.message}</p>}
                </div>
                <div className="md:col-span-2">
                    <button type="submit" className="inline-flex w-full items-center justify-center gap-2 rounded-geo bg-primary px-6 py-3.5 font-semibold text-white shadow-lg shadow-sky-900/10 transition hover:-translate-y-0.5 hover:bg-primary-strong disabled:translate-y-0 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto" disabled={isSubmitting} aria-disabled={isSubmitting}>
                        <PaperAirplaneIcon className="h-5 w-5" aria-hidden="true"/>
                        {isSubmitting ? 'Sending message...' : 'Send Message'}
                    </button>
                    {hasErrors && <p className="mt-3 text-sm text-foreground/58">Review the highlighted fields above before sending.</p>}
                </div>
            </div>
        </form>
    );
};

export default ContactForm;
