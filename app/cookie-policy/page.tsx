import Link from "next/link";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

const CookiePolicyPage = () => {
    return (
        <div>
            <Header/>
            <div className={`m-4`}>
                <div className={`mx-auto max-w-7xl lg:mt-6 pb-8`}>
                    <h1 className={`text-3xl font-semibold mb-6`}>Cookie Policy</h1>

                    <p>Cookie Policy for geoneeds.info</p>
                    <p className={`mb-4`}> Effective Date: 2025-01-01</p>

                    <h2 className={`text-xl font-semibold mb-1`}>Introduction</h2>
                    <p className={`text-gray-500 mb-6`}>
                        This Cookie Policy explains how geoneeds.info uses cookies and similar technologies to recognize you when you visit our website. It explains what these
                        technologies
                        are and why we use them, as well as your rights to control our use of them.
                    </p>
                    <h2 className={`text-xl font-semibold mb-1`}>What are Cookies?</h2>
                    <p className={`text-gray-500 mb-6`}>
                        Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work, or work
                        more
                        efficiently, as well as to provide information to the owners of the site.
                    </p>
                    <h2 className={`text-xl font-semibold mb-1`}>How We Use Cookies</h2>
                    <p className={`text-gray-500 mb-6`}>
                        We may use cookies for the following purposes:
                    </p>
                    <ul className={`mb-4 border border-gray-200 rounded-lg`}>
                        <li className={`text-gray-600 mb-1 px-4 pb-3 pt-4 border-b border-gray-200`}>
                            Essential Cookies: These cookies are necessary for the operation of our website. They enable you to navigate the site and use its features.
                        </li>
                        <li className={`text-gray-600 mb-1 px-4 py-3 border-b border-gray-200`}>
                            Analytics Cookies: We may use analytics cookies to collect information about how visitors use our website. This helps us to improve the site&rsquo;s
                            performance
                            and
                            user experience. For example, we may use cookies to track which pages are most popular and how visitors move around the site.
                        </li>
                        <li className={`text-gray-600 mb-1 px-4 py-3 border-b border-gray-200`}>
                            Functionality Cookies: These cookies allow our website to remember choices you make (such as your language preference) and provide enhanced, more
                            personal
                            features.
                        </li>
                        <li className={`text-gray-600 mb-1 px-4 py-3`}>
                            Third-Party Cookies: Depending on the features of the web site, we may utilize third party services. If these services use cookies, those cookies are
                            subject to
                            the
                            third party&rsquo;s cookie policy.
                        </li>
                    </ul>

                    <h2 className={`text-xl font-semibold mb-1`}>Types of Cookies We May Use</h2>
                    <p className={`text-gray-500 mb-6`}>
                        Session cookies (temporary cookies that remain in your browser until you leave the site).
                        Persistent cookies (cookies that remain in your browser for a longer period, depending on the cookie&rsquo;s expiration date).
                    </p>

                    <h2 className={`text-xl font-semibold mb-1`}>How to Control Cookies</h2>
                    <p className={`text-gray-500 mb-2`}>
                        You can control cookies through your web browser settings. Most web browsers allow you to:
                    </p>
                    <p className={`text-gray-500 mb-2`}>
                        View what cookies are stored on your device. <br/>
                        Delete cookies.<br/>
                        Block cookies.<br/>
                        Set preferences for how cookies are handled.
                    </p>
                    <p className={`text-gray-500 mb-6`}>
                        Please note that blocking or deleting cookies may affect your experience on our website and may prevent certain features from functioning properly.
                    </p>

                    <h2 className={`text-xl font-semibold mb-1`}>Changes to This Cookie Policy</h2>
                    <p className={`text-gray-500 mb-6`}>
                        We may update this Cookie Policy from time to time to reflect changes in our use of cookies or for other operational, legal, or regulatory reasons. Please
                        review
                        this policy periodically for any changes.
                    </p>
                    <h2 className={`text-xl font-semibold mb-1`}>Contact Us</h2>
                    <p className={`text-gray-500 mb-6`}>
                        If you have any questions about our use of cookies, please contact us at: <Link href="/contact-us" className="text-blue-500">Contact Us</Link>
                    </p>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default CookiePolicyPage;