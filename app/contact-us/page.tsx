import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import ContactForm from "@/app/components/ContactForm";

const ContactUsPage = () => {
    return (
        <div className="min-h-screen">
            <Header currentUrl={`/contact-us`}/>
            <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
                <div className="min-h-96 max-w-4xl">
                    <div className="mb-5 inline-flex rounded-geo border border-line bg-surface px-4 py-2 text-sm font-semibold text-primary shadow-sm">Project inquiries</div>
                    <h1 className="pb-5 text-4xl font-extrabold text-foreground karla-font md:text-5xl">Contact Us</h1>
                    <p className="text-lg leading-8 text-foreground/70">We&apos;re dedicated to providing comprehensive hydro-geological solutions. Please use the form below to send us your inquiry, or
                        contact us directly via phone or WhatsApp <span className="font-semibold">+94 777 350 550</span>. We look forward to assisting you. </p>
                    <div className="mt-8 rounded-geo border border-line bg-surface px-4 py-6 shadow-sm md:px-8 md:py-8">
                        <ContactForm/>
                    </div>
                </div>
            </main>
            <Footer/>
        </div>
    );
}

export default ContactUsPage;
