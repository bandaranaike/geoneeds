import Header from "@/app/components/Header";
import {DocumentChartBarIcon} from "@heroicons/react/24/outline";
import React from "react";
import WaterWave from "@/components/WaterWave";
import Encompasses from "@/app/components/Encompasses";

export default function Home() {

    const services = [
        {title: "Tube Well Location", image: "image-1.png", description: "Precisely locate optimal drilling spots for maximum water yield."},
        {title: "Groundwater Exploration", image: "image-2.png", description: "Investigate groundwater availability and quality for various applications."},
        {title: "Environmental Impact Assessment", image: "image-3.png", description: "Assess the environmental impact of projects on groundwater and soil."},
        {title: "Geo-Technical Surveys", image: "image-4.png", description: "Conduct site investigations for construction and engineering projects."},
    ]

    return <div>
        <Header currentUrl={`/`}/>
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="my-12">

                <div className="lg:flex content-center items-center">
                    <div className="px-8 lg:mb-6">
                        <h2 className="text-5xl leading-none font-extrabold mb-6 karla-font">Unlock the Earth&#39;s Hidden Potential</h2>
                        <p className="text-gray-500 dark:text-gray-200">GeoNeeds specializes in precise geo-location investigations for tube well water and various geo-related
                            projects. Our team of
                            experts leverages cutting-edge technology and in-depth knowledge to unearth valuable insights about the earth beneath our feet. From identifying optimal
                            drilling locations to assessing environmental impact.</p>
                        <div className="my-8">
                            <a href={'/projects'} className="rounded-full border max-w-xs text-center dark:border-gray-600 border-gray-200 shadow-sm px-4 py-2 flex">
                                <DocumentChartBarIcon width={16} height={16} className="text-blue-500 mt-1 mr-2"/>
                                See more about this project
                            </a>
                        </div>
                    </div>
                    <img src="/2.jpeg" className="max-w-md w-full mt-8 rounded-full shadow" alt="Slider Image"/>
                </div>

            </div>
            <div className="my-8 md:my-24">
                <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
                    {services.map((service) => (
                        <div key={service.title} className="border dark:border-gray-700 border-gray-200 p-6 rounded-2xl">
                            <h3 className="lg:flex justify-between pb-3">
                                <div className="font-bold karla-font text-lg leading-none mb-3">{service.title}</div>
                                <img src={service.image} className="w-max lg:w-12"/>
                            </h3>
                            <p className="text-gray-600 dark:text-gray-200">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>

        <div className="bg-[url(/2.jpeg)] bg-cover bg-center">
            <div className="bg-gray-800/60 backdrop-blur-2xl lg:py-12 ">
                <div className="mx-auto max-w-7xl lg:px-8 p-4">
                    <div className="md:my-16 my-8 lg:flex items-center justify-between">
                        <div className="mr-12">
                            <h2 className="mb-6 text-5xl text-white font-extrabold karla-font">We envision a world where access to vital resources </h2>
                            <p className="mb-2 text-gray-100 dark:text-gray-400">At GeoNeeds, we envision a world where access to vital resources like clean water is readily
                                available
                                and managed
                                responsibly. We strive to
                                be
                                the trusted partner for all geo-location needs, recognized for our expertise, innovation, and commitment to sustainability.</p>

                            <p className=" text-gray-100 dark:text-gray-400"> Our Mission: Our mission is to provide accurate and reliable geo-location services that empower our
                                clients to achieve their
                                project goals while minimizing
                                environmental impact. We are dedicated to continuous improvement, investing in the latest technologies and fostering a culture of excellence to
                                deliver
                                exceptional value and contribute to a sustainable future.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="py-1 mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="md:my-24 my-8">
                <Encompasses/>
            </div>
        </div>
        <WaterWave/>
    </div>

}
