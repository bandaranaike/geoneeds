import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import Link from "next/link";

const TermsAndConditionsPage = () => {
    return (
        <div>
            <Header/>
            <div className={`m-4`}>
                <div className={`mx-auto max-w-7xl lg:mt-6 pb-8`}>

                    <h1 className="text-3xl font-semibold mb-6">Terms and Conditions</h1>
                    <p className={`text-gray-500 mb-6`}>Terms and Conditions for geoneeds.info</p>

                    <h2 className={`text-xl font-semibold mb-1`}>Acceptance of Terms</h2>
                    <p className={`text-gray-500 mb-6`}>
                        By accessing and using geoneeds.info, you agree to comply with and be bound by these Terms and Conditions. If you do not agree with these terms, please do
                        not use
                        this website.</p>

                    <h2 className={`text-xl font-semibold mb-1`}>Services Provided</h2>
                    <p className={`text-gray-500 mb-6`}>
                        geoneeds.info provides hydro-geological consultation and groundwater exploration services, including: <br/>

                        Groundwater assessment and site surveys. <br/>
                        Tube well installation site selection. <br/>
                        Hydro-geological consultation.</p>

                    <h2 className={`text-xl font-semibold mb-1`}>Consultation and Information</h2>

                    <p className={`text-gray-500 mb-6`}>All consultations and information provided are based on the professional opinion and expertise of the hydro-geological.
                        While we strive to provide accurate and reliable information, we cannot guarantee the availability or quality of groundwater at any specific location.
                        Clients are responsible for ensuring that any information provided to us is accurate and complete.</p>

                    <h2 className={`text-xl font-semibold mb-1`}>Payment and Fees</h2>

                    <p className={`text-gray-500 mb-6`}> Fees for services will be discussed and agreed upon prior to the commencement of any work.
                        Payment terms will be outlined in the service agreement or invoice.
                        We reserve the right to modify our fees at any time, with prior notice.</p>

                    <h2 className={`text-xl font-semibold mb-1`}>Limitation of Liability</h2>

                    <p className={`text-gray-500 mb-6`}>geoneeds.info shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising from the
                        use of
                        our services or information
                        provided on this website.

                        We are not responsible for any issues arising from tube well installations performed by third parties.
                        Any client who utilizes the information provided by geoneeds.info, does so at their own risk.</p>

                    <h2 className={`text-xl font-semibold mb-1`}>Intellectual Property</h2>

                    <p className={`text-gray-500 mb-6`}>All content on geoneeds.info, including text, images, and logos, is the property of geoneeds.info and is protected by
                        copyright
                        laws.
                        You may not reproduce, distribute, or modify any content from this website without our express written permission.</p>

                    <h2 className={`text-xl font-semibold mb-1`}>Communication</h2>

                    <p className={`text-gray-500 mb-6`}> Communication with geoneeds.info, including via phone (94 777 350 550) and WhatsApp, is subject to the terms and conditions
                        of
                        those
                        platforms.
                        We may use your contact information to communicate with you regarding our services.</p>

                    <h2 className={`text-xl font-semibold mb-1`}>Governing Law</h2>

                    <p className={`text-gray-500 mb-6`}> These Terms and Conditions shall be governed by and construed in accordance with the laws of Sri Lanka.

                        Any disputes arising from these terms will be handled in Sri Lankan courts.</p>

                    <h2 className={`text-xl font-semibold mb-1`}>Changes to Terms and Conditions</h2>

                    <p className={`text-gray-500 mb-6`}> We reserve the right to modify these Terms and Conditions at any time.
                        Any changes will be posted on this website, and your continued use of the website constitutes acceptance of the revised terms.</p>

                    <h2 className={`text-xl font-semibold mb-1`}>Contact Information</h2>

                    <p className={`text-gray-500 mb-6`}>
                        For any questions or concerns regarding these Terms and Conditions, please contact us at: <Link href="/contact-us" className="text-blue-500">Contact
                        Us</Link>
                    </p>

                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default TermsAndConditionsPage;