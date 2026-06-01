import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import Encompasses from "@/app/components/Encompasses";

const AboutUsPage = () => {
    return (
        <div className="min-h-screen">
            <Header currentUrl={'/about-us'}/>
            <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
                <div className="max-w-4xl pb-10">
                    <div className="mb-5 inline-flex rounded-geo border border-line bg-surface px-4 py-2 text-sm font-semibold text-primary shadow-sm">Hydrogeology expertise</div>
                    <h1 className="mb-5 text-4xl font-extrabold text-foreground karla-font md:text-5xl">About GeoNeeds</h1>
                    <p className="mb-8 text-lg leading-8 text-foreground/70">
                        Welcome to geoneeds.info, your trusted resource for expert hydro-geological services in Sri Lanka and beyond.
                    </p>
                    <h2 className="text-2xl font-bold text-foreground karla-font">Our Mission</h2>
                    <p className="mb-8 pt-3 text-lg leading-8 text-foreground/70">
                        Our mission is to provide accurate and reliable groundwater solutions, helping individuals, communities, and businesses access this vital resource
                        sustainably.
                        We
                        are committed to leveraging our extensive knowledge and experience to deliver exceptional service and contribute to the responsible management of water
                        resources.
                    </p>
                    <h2 className="text-2xl font-bold text-foreground karla-font">Our Expertise</h2>
                    <p className="mb-8 pt-3 text-lg leading-8 text-foreground/70">
                        <span className="font-semibold">Akila Jeewantha Herath</span> is a highly qualified hydro-geologist with over 12 years of experience in the field of
                        groundwater
                        exploration
                        and management. He holds a Bachelor of Science degree in Geology from the prestigious University of Peradeniya, Faculty of Science, Department of Geology,
                        and a
                        Master&lsquo;s degree in Hydro Engineering from the Postgraduate Institute of Science.
                    </p>
                </div>
                <Encompasses/>
                <div className="mt-12 max-w-4xl rounded-geo border border-line bg-surface p-6 shadow-sm md:p-8">
                    <h2 className="text-2xl font-bold text-foreground karla-font">Our Commitment</h2>
                    <p className="mb-8 pt-3 text-lg leading-8 text-foreground/70">
                        We are dedicated to providing personalized and professional services tailored to the unique needs of each client. Whether you&apos;re seeking to establish a
                        reliable
                        water source for your home, farm, or business, we have the expertise to guide you through the process. We have worked all over Sri Lanka, and even completed
                        projects in the Maldives, demonstrating our broad range of expertise.
                    </p>

                    <h2 className="text-2xl font-bold text-foreground karla-font">Contact Us</h2>
                    <p className="pt-3 text-lg leading-8 text-foreground/70">
                        For expert hydro-geological services, please contact us at:
                        Phone/WhatsApp: <span className="font-semibold">+94777 350 550 </span>
                    </p>
                    <p className="text-lg leading-8 text-foreground/70">
                        Use our <a href="/contact-us" className="font-semibold text-primary hover:text-primary-strong">contact form</a> to send us a message, and we will get back to you as soon as possible.
                    </p>
                    <p className="text-lg leading-8 text-foreground/70">
                        We look forward to helping you with your groundwater needs.
                    </p>
                </div>
            </main>
            <Footer/>
        </div>
    );
}

export default AboutUsPage;
