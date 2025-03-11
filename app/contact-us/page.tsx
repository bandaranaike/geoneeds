import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import ContactForm from "@/app/components/ContactForm";

const ContactUsPage = () => {
    return (
        <div className={`min-h-screen`}>
            <Header currentUrl={`/contact-us`}/>
            <div className="m-4">
                <div className={`p-6 max-w-7xl mx-auto min-h-96`}>
                    <h1 className={`text-2xl font-semibold pb-4`}>Contact Us</h1>
                    <p className={`text-gray-500`}>We&apos;re dedicated to providing comprehensive hydro-geological solutions. Please use the form below to send us your inquiry, or
                        contact us directly via phone or WhatsApp <span className="font-semibold">+94 777 350 550</span>. We look forward to assisting you. </p>
                    <div className="border border-gray-200 rounded-xl px-6 py-6 mt-6">
                        <ContactForm/>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default ContactUsPage;
