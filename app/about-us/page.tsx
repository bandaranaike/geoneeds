import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import Encompasses from "@/app/components/Encompasses";

const AboutUsPage = () => {
    return (
        <div>
            <Header currentUrl={'/about-us'}/>
            <div className={'m-4'}>
                <div className="mx-auto max-w-7xl lg:mt-6 pb-8">
                    <h1 className={`mb-2 text-3xl`}>About Us</h1>
                    <p className={`text-gray-500 py-3 mb-4`}>
                        Welcome to geoneeds.info, your trusted resource for expert hydro-geological services in Sri Lanka and beyond.
                    </p>
                    <h2 className={`text-xl font-semibold`}>Our Mission</h2>
                    <p className={`text-gray-500 pt-2 pb-3 mb-4`}>
                        Our mission is to provide accurate and reliable groundwater solutions, helping individuals, communities, and businesses access this vital resource
                        sustainably.
                        We
                        are committed to leveraging our extensive knowledge and experience to deliver exceptional service and contribute to the responsible management of water
                        resources.
                    </p>
                    <h2 className={`text-xl font-semibold`}> Our Expertise </h2>
                    <p className={`text-gray-500 pb-3 pt-2 mb-4`}>
                        <span className="font-semibold">Akila Jeewantha Herath</span> is a highly qualified hydro-geologist with over 12 years of experience in the field of
                        groundwater
                        exploration
                        and management. He holds a Bachelor of Science degree in Geology from the prestigious University of Peradeniya, Faculty of Science, Department of Geology,
                        and a
                        Master&lsquo;s degree in Hydro Engineering from the Postgraduate Institute of Science.
                    </p>
                    <h3 className={`text-lg pb-3`}> His expertise encompasses: </h3>
                    <Encompasses/>
                    <h2 className={`text-xl font-semibold mt-8`}> Our Commitment </h2>
                    <p className={`text-gray-500 pb-3 pt-1 mb-4`}>
                        We are dedicated to providing personalized and professional services tailored to the unique needs of each client. Whether you&apos;re seeking to establish a
                        reliable
                        water source for your home, farm, or business, we have the expertise to guide you through the process. We have worked all over Sri Lanka, and even completed
                        projects in the Maldives, demonstrating our broad range of expertise.
                    </p>

                    <h2 className="text-xl font-semibold">Contact Us</h2>
                    <p className={`text-gray-500 py-1`}>
                        For expert hydro-geological services, please contact us at:
                        Phone/WhatsApp: <span className="font-semibold">+94777 350 550 </span>
                    </p>
                    <p className={`text-gray-500 pb-1`}>
                        Use our <a href="/contact-us" className="text-blue-500">contact form</a> to send us a message, and we will get back to you as soon as possible.
                    </p>
                    <p className={`text-gray-500 pb-1`}>
                        We look forward to helping you with your groundwater needs.
                        {/*Possible Additions:*/}

                        {/*A brief history of the hydrogeologist's experience.*/}
                        {/*A section highlighting past projects and successes.*/}
                        {/*A photo of the hydrogeologist or related field work.*/}
                        {/*A map of the service area.*/}
                        {/*A section about the values of the business. (Reliability, scientific accuracy, customer service, etc.)*/}
                    </p>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default AboutUsPage;