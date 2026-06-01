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

    return <div className="min-h-screen">
        <Header currentUrl={`/`}/>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="py-14 lg:py-20">

                <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
                    <div className="lg:mb-6">
                        <div className="mb-5 inline-flex rounded-geo border border-line bg-surface px-4 py-2 text-sm font-semibold text-primary shadow-sm">Industrial water intelligence</div>
                        <h1 className="mb-7 max-w-3xl text-5xl font-extrabold leading-tight tracking-normal text-foreground karla-font md:text-6xl">Unlock the Earth&#39;s Hidden Potential</h1>
                        <p className="max-w-2xl text-lg leading-8 text-foreground/70">GeoNeeds specializes in precise geo-location investigations for tube well water and various geo-related
                            projects. Our team of
                            experts leverages cutting-edge technology and in-depth knowledge to unearth valuable insights about the earth beneath our feet. From identifying optimal
                            drilling locations to assessing environmental impact.</p>
                        <div className="my-8">
                            <a href={'/projects'} className="inline-flex max-w-xs items-center rounded-geo bg-primary px-5 py-3 text-center font-semibold text-white shadow-lg shadow-sky-900/10 transition hover:-translate-y-0.5 hover:bg-primary-strong">
                                <DocumentChartBarIcon width={18} height={18} className="mr-2"/>
                                See more about this project
                            </a>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="absolute -inset-4 rounded-[1.75rem] bg-gradient-to-br from-sky-300/30 via-teal-200/20 to-lime-200/20 blur-2xl"/>
                        <img src="/2.jpeg" className="relative w-full rounded-[1.5rem] border border-line object-cover shadow-2xl shadow-sky-950/15" alt="Hydrogeology field survey"/>
                    </div>
                </div>

            </div>
            <div className="py-10 md:py-20">
                <div className="mb-10 max-w-3xl">
                    <h2 className="text-3xl font-extrabold text-foreground karla-font md:text-4xl">Field-ready services for water and ground decisions</h2>
                </div>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {services.map((service) => (
                        <div key={service.title} className="rounded-geo border border-line bg-surface p-6 shadow-sm transition hover:-translate-y-1 hover:border-primary hover:shadow-xl hover:shadow-sky-950/10">
                            <h3 className="flex items-start justify-between gap-4 pb-5">
                                <span className="font-bold karla-font text-xl leading-tight">{service.title}</span>
                                <img src={service.image} className="h-12 w-12 object-contain" alt=""/>
                            </h3>
                            <p className="leading-7 text-foreground/65">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>

        <div className="bg-[url(/2.jpeg)] bg-cover bg-center">
            <div className="bg-sky-950/75 backdrop-blur-xl lg:py-14 ">
                <div className="mx-auto max-w-7xl p-4 lg:px-8">
                    <div className="my-10 max-w-4xl md:my-18">
                        <div>
                            <h2 className="mb-6 text-4xl font-extrabold leading-tight text-white karla-font md:text-5xl">We envision a world where access to vital resources is responsible and reliable</h2>
                            <p className="mb-4 text-lg leading-8 text-sky-50/85">At GeoNeeds, we envision a world where access to vital resources like clean water is readily
                                available
                                and managed
                                responsibly. We strive to
                                be
                                the trusted partner for all geo-location needs, recognized for our expertise, innovation, and commitment to sustainability.</p>

                            <p className="text-lg leading-8 text-sky-50/85"> Our Mission: Our mission is to provide accurate and reliable geo-location services that empower our
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
        <div className="mx-auto max-w-7xl px-4 py-1 sm:px-6 lg:px-8">
            <div className="my-12 md:my-24">
                <Encompasses/>
            </div>
        </div>
        <WaterWave/>
    </div>

}
