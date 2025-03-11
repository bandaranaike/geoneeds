import Header from "@/app/components/Header";
import Link from "next/link";
import Footer from "@/app/components/Footer";

const PrivacyPolicyPage: React.FC = () => {
    return (
        <div>
            <Header/>
            <div className={`m-4`}>
                <div className={`mx-auto max-w-7xl lg:mt-6 pb-8`}>

                    <h1 className="text-3xl font-semibold mb-6">Privacy Policy</h1>


                    <p>Privacy Policy for geoneeds.info</p>
                    <p className={`mb-4`}> Effective Date: 2025-01-01</p>


                    <h2 className={`text-xl font-semibold mb-1`}>Introduction</h2>

                    <p className={`text-gray-500 mb-6`}>Welcome to geoneeds.info. We are committed to protecting your privacy and ensuring the security of your personal
                        information. This Privacy Policy outlines how we
                        collect, use, and safeguard your data when you visit our website or use our services.</p>

                    <h2 className={`text-xl font-semibold mb-1`}>Information We Collect</h2>

                    <p className={`text-gray-500 mb-6`}>Contact Information: If you contact us via the provided phone number (0777350550, including WhatsApp), we may collect your
                        name, phone number, and any other
                        information you provide during the communication.
                        Website Usage Data: We may collect non-personal information about your interactions with our website, such as your IP address, browser type, and pages
                        visited. This
                        data helps us improve our website and services.</p>

                    <p className={`text-gray-500 mb-6`}>Location Data (Potential): If you use any interactive maps or location-based features on our site, we may collect and
                        process location data to provide the requested
                        services. (If your site does not have these, you can remove this sentence)
                        Information provided by Contact form (If you have one): Name, email, phone number, message.
                    </p>
                    <h2 className={`text-xl font-semibold mb-1`}>How We Use Your Information</h2>

                    <p className={`text-gray-500 mb-6`}>
                        To respond to your inquiries and provide the requested services. <br/>
                        To improve our website and user experience. <br/>
                        To communicate with you about our services. <br/>
                        To comply with legal obligations.</p>

                    <h2 className={`text-xl font-semibold mb-1`}>Data Sharing and Disclosure</h2>
                    <p className={`text-gray-500 mb-6`}>
                        We will not sell, rent, or share your personal information with third parties except as required by law or to provide our services.
                        If needed to comply with legal requirements.</p>

                    <h2 className={`text-xl font-semibold mb-1`}>Data Security</h2>
                    <p className={`text-gray-500 mb-6`}>
                        We take reasonable measures to protect your personal information from unauthorized access, use, or disclosure.

                        Communication via whatsapp is subject to the whatsapp privacy policy.</p>

                    <h2 className={`text-xl font-semibold mb-1`}>Your Rights</h2>

                    <p className={`text-gray-500 mb-6`}> You have the right to request access to your personal information. <br/>
                        You have the right to request the correction or deletion of your personal information. <br/>
                        To exercise these rights, please contact us using the provided phone number.
                    </p>

                    <h2 className={`text-xl font-semibold mb-1`}>Changes to This Privacy Policy</h2>
                    <p className={`text-gray-500 mb-6`}>
                        We may update this Privacy Policy from time to time. We will post any changes on this page.

                        Please review this policy periodically for any changes.
                    </p>
                    <h2 className={`text-xl font-semibold mb-1`}>Contact Us</h2>
                    <p className={`text-gray-500 mb-6`}>
                        If you have any questions or concerns about this Privacy Policy, please contact us at: <Link href="/contact-us" className="text-blue-500">Contact Us</Link>
                    </p>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default PrivacyPolicyPage;