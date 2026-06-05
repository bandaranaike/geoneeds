import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import React from "react";
import Link from "next/link";
import {getLatestProjects} from "@/lib/projects";
import PublicProjectsGrid from "@/app/components/PublicProjectsGrid";

export const dynamic = "force-dynamic";

export default async function Home() {
    // Expertise items data
    const expertise = [
        {
            title: "GROUNDWATER SURVEYS",
            image: "/groundwater_surveys.png",
            link: "/projects",
            description: "Locating and mapping optimal aquifer coordinates for high-capacity extraction."
        },
        {
            title: "SOIL ENGINEERING",
            image: "/soil_engineering.png",
            link: "/projects",
            description: "Comprehensive site characterization, geotechnical stability, and soil mechanics testing."
        },
        {
            title: "WATER QUALITY",
            image: "/water_quality.png",
            link: "/projects",
            description: "Chemical composition analysis, contaminant checks, and purification auditing."
        }
    ];

    // Solutions items data
    const solutions = [
        {
            title: "BOREHOLE LOGGING",
            image: "/borehole_logging.png",
            tag: "Stratigraphy Assessment",
            description: "High-resolution sub-surface measurements to detail lithology and structural boundaries."
        },
        {
            title: "RESISTIVITY IMAGING",
            image: "/resistivity_imaging.png",
            tag: "Geophysical Profiling",
            description: "Deep subterranean multi-electrode mapping to locate water tables and geological layers."
        },
        {
            title: "PUMP TESTING",
            image: "/pump_testing.png",
            tag: "Drawdown & Yield Tests",
            description: "Determining operational drawdowns, transmissivity, and sustainable flow capacity limits."
        },
        {
            title: "ENVIRONMENTAL AUDIT",
            image: "/environmental_audit.png",
            tag: "Sustainability Studies",
            description: "Evaluating groundwater recharge zones and compliance checks for industrial impacts."
        }
    ];

    const latestProjects = await getLatestProjects(3);

    // Ordering process steps
    const processSteps = [
        {
            number: "01",
            title: "FIND YOUR SITE",
            description: "Identify the exact coordinates and geological boundary for the geophysical survey."
        },
        {
            number: "02",
            title: "BOOK A SURVEY",
            description: "Ensure a smooth technical experience by coordinating schedule and equipment booking online."
        },
        {
            number: "03",
            title: "EXPERT ANALYSIS",
            description: "We deploy field sensors and provide detailed sub-surface data mapping and 3D modeling."
        },
        {
            number: "04",
            title: "PROJECT DELIVERY",
            description: "Receive finalize reports, geological recommendations, and exact borehole location marking."
        }
    ];

    return (
        <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
            
            {/* HERO SECTION */}
            <div className="relative h-screen min-h-[650px] w-full bg-cover bg-center flex flex-col justify-between" style={{ backgroundImage: "url('/hero_forest.png')" }}>
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/40 to-background/95 z-0" />
                
                {/* Header Overlay */}
                <Header currentUrl="/" transparent={true} />

                {/* Hero Body */}
                <div className="relative z-10 flex-grow flex items-center">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full pt-16">
                        <div className="max-w-3xl space-y-6">
                            {/* Accent badge */}
                            <div className="inline-flex rounded-full border border-white/20 bg-white/5 backdrop-blur-md px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-primary-strong text-sky-300 shadow-sm">
                                Industrial water intelligence
                            </div>
                            
                            {/* Main Title */}
                            <h1 className="text-5xl font-extrabold tracking-tight text-white karla-font md:text-7xl lg:text-8xl leading-none">
                                Sub-Surface<br />Water Solutions.
                            </h1>
                            
                            {/* Subtitle */}
                            <p className="max-w-xl text-base text-slate-300 font-medium md:text-lg leading-relaxed">
                                Expert hydrogeological surveys and soil engineering for a sustainable water future in Sri Lanka.
                            </p>

                            {/* Trust Avatars */}
                            <div className="flex items-center gap-4 pt-2">
                                <div className="flex -space-x-3 overflow-hidden">
                                    <img className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-900 object-cover" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="Auditor Avatar" />
                                    <img className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-900 object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="Auditor Avatar" />
                                    <img className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-900 object-cover" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="Auditor Avatar" />
                                </div>
                                <div className="text-sm font-semibold text-slate-300">
                                    <span className="text-white font-extrabold text-base">10K+</span> People trust our surveys
                                </div>
                            </div>

                            {/* CTA Action & Tags */}
                            <div className="flex flex-col sm:flex-row sm:items-center gap-6 pt-4">
                                <Link href="/projects" className="inline-flex justify-center items-center rounded-geo bg-white text-slate-950 font-bold px-8 py-4 shadow-xl hover:bg-slate-100 hover:scale-102 transition duration-300 tracking-wide text-sm">
                                    GET STARTED
                                </Link>
                                <div className="flex items-center gap-4 text-xs font-bold tracking-widest text-slate-400">
                                    <span className="hover:text-white transition duration-200 cursor-pointer">RESISTIVITY</span>
                                    <span className="w-1.5 h-1.5 rounded-full bg-slate-600" />
                                    <span className="hover:text-white transition duration-200 cursor-pointer">BOREHOLE</span>
                                    <span className="w-1.5 h-1.5 rounded-full bg-slate-600" />
                                    <span className="hover:text-white transition duration-200 cursor-pointer">SUSTAINABILITY</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Ambient Spacer at Bottom */}
                <div className="h-10" />
            </div>

            {/* SECTION 2: DISCOVER OUR ADVANCED TESTING */}
            <section className="py-24 bg-surface/50">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                        <div>
                            <span className="text-xs font-bold uppercase tracking-widest text-primary">OUR EXPERTISE</span>
                            <h2 className="mt-3 text-3xl font-extrabold text-foreground tracking-tight karla-font md:text-5xl">
                                DISCOVER OUR<br />ADVANCED TESTING.
                            </h2>
                        </div>
                        <div>
                            <Link href="/projects" className="inline-flex items-center gap-2 rounded-full bg-slate-950 text-white font-bold px-6 py-3 hover:bg-primary transition text-sm">
                                EXPLORE MORE
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="size-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                                </svg>
                            </Link>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {expertise.map((item, idx) => (
                            <div key={idx} className="group flex flex-col justify-between overflow-hidden rounded-geo border border-line bg-surface p-6 shadow-sm hover:shadow-xl transition-all duration-300">
                                <div className="space-y-4">
                                    <div className="overflow-hidden rounded-geo aspect-[4/3] bg-slate-100">
                                        <img 
                                            src={item.image} 
                                            alt={item.title} 
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                                        />
                                    </div>
                                    <h3 className="font-extrabold text-lg text-foreground karla-font tracking-wide mt-2">
                                        {item.title}
                                    </h3>
                                    <p className="text-sm text-foreground/70 leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>
                                <div className="pt-6">
                                    <Link href={item.link} className="inline-flex items-center gap-1.5 text-xs font-extrabold tracking-wider text-primary group-hover:text-primary-strong transition">
                                        SEE MORE
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="size-3">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SECTION 3: SPECIALIZED TESTING TAILORED FOR YOU */}
            <section className="py-24 bg-surface-muted/30">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl mb-16">
                        <span className="text-xs font-bold uppercase tracking-widest text-primary">SOLUTIONS</span>
                        <h2 className="mt-3 text-3xl font-extrabold text-foreground tracking-tight karla-font md:text-5xl">
                            SPECIALIZED TESTING<br />TAILORED FOR YOU.
                        </h2>
                        <p className="mt-4 text-base text-foreground/60 leading-relaxed max-w-xl">
                            Experience the difference with our professional and personalized survey services across the island.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {solutions.map((item, idx) => (
                            <div key={idx} className="relative group overflow-hidden rounded-geo aspect-[16/10] shadow-md border border-line">
                                <img 
                                    src={item.image} 
                                    alt={item.title} 
                                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-102 transition-transform duration-700" 
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-900/60 to-slate-950/20" />
                                
                                <div className="absolute inset-0 flex flex-col justify-end p-8 space-y-2">
                                    <span className="text-xs font-bold uppercase tracking-wider text-accent">
                                        {item.tag}
                                    </span>
                                    <h3 className="font-extrabold text-2xl text-white karla-font">
                                        {item.title}
                                    </h3>
                                    <p className="text-sm text-slate-300 leading-relaxed max-w-md opacity-90 group-hover:opacity-100 transition-opacity">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SECTION 4: MOST SUCCESSFUL SURVEYS */}
            <section className="py-24">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <span className="text-xs font-bold uppercase tracking-widest text-primary">RECENT WORKS</span>
                        <h2 className="mt-3 text-3xl font-extrabold text-foreground tracking-tight karla-font md:text-5xl">
                            MOST SUCCESSFUL SURVEYS!
                        </h2>
                        <p className="mt-4 text-base text-foreground/60 leading-relaxed">
                            We recommend several successful geological surveys in certain districts, please check the yield and technical parameters.
                        </p>
                    </div>

                    <PublicProjectsGrid projects={latestProjects}/>

                    <div className="text-center mt-12">
                        <Link href="/projects" className="inline-flex items-center gap-2 rounded-full border-2 border-slate-900 dark:border-slate-800 text-foreground font-bold px-8 py-3.5 hover:bg-slate-950 hover:text-white transition duration-300 text-sm">
                            EXPLORE MORE
                        </Link>
                    </div>
                </div>
            </section>

            {/* SECTION 5: SURVEY ORDERING PROCESS */}
            <section className="py-24 bg-surface-muted/20 border-t border-b border-line">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-16 items-center">
                        <div className="space-y-6">
                            <span className="text-xs font-bold uppercase tracking-widest text-primary">HOW IT WORKS</span>
                            <h2 className="text-3xl font-extrabold text-foreground tracking-tight karla-font md:text-5xl leading-tight">
                                SURVEY ORDERING<br />PROCESS.
                            </h2>
                            <div className="relative rounded-geo border border-line bg-surface p-8 shadow-sm space-y-4">
                                <div className="text-primary bg-primary/5 rounded-full inline-flex p-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6a7.5 7.5 0 1 0 7.5 7.5h-7.5V6Z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0 0 13.5 3v7.5Z" />
                                    </svg>
                                </div>
                                <h3 className="font-bold text-xl text-foreground karla-font">Technical Process</h3>
                                <p className="text-sm text-foreground/60 leading-relaxed">
                                    We employ calibrated resistivity, electromagnetic, and borehole telemetry platforms to capture clear aquifer strata maps before any physical drilling operations commence.
                                </p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                            {processSteps.map((step, idx) => (
                                <div key={idx} className="flex gap-4 items-start p-2 hover:translate-x-1 transition-transform duration-300">
                                    <span className="text-3xl font-extrabold text-primary-strong/30 dark:text-sky-500/20 tracking-tighter leading-none pt-0.5">
                                        {step.number}
                                    </span>
                                    <div className="space-y-2">
                                        <h3 className="font-extrabold text-base text-foreground tracking-wide karla-font">
                                            {step.title}
                                        </h3>
                                        <p className="text-sm text-foreground/65 leading-relaxed">
                                            {step.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 6: HIGH IMPACT CTA BLOCK */}
            <section className="relative py-28 bg-cover bg-center text-white text-center" style={{ backgroundImage: "url('/cta_lake.png')" }}>
                {/* Overlay */}
                <div className="absolute inset-0 bg-slate-950/75 backdrop-blur-xs z-0" />
                
                <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-6">
                    <span className="text-xs font-bold uppercase tracking-widest text-accent text-sky-400">GET COMPREHENSIVE REPORTS</span>
                    <h2 className="text-4xl font-extrabold tracking-tight karla-font md:text-6xl text-white">
                        EXPLORE YOUR WATER<br />SOURCES NOW
                    </h2>
                    <p className="text-slate-300 max-w-xl mx-auto leading-8 text-base">
                        Start planning your geophysical survey and secure your water sustainability today!
                    </p>
                    <div className="pt-4">
                        <Link href="/contact-us" className="inline-flex justify-center items-center gap-2 rounded-geo bg-white text-slate-950 hover:bg-slate-100 font-bold px-8 py-4 transition duration-300 shadow-xl shadow-slate-950/40 text-sm">
                            CRAFT MY SURVEY
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="size-4 text-slate-900">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                            </svg>
                        </Link>
                    </div>
                </div>
            </section>

            {/* FOOTER */}
            <Footer />
            
        </div>
    );
}
