import React from "react";
import Link from "next/link";

const Footer: React.FC = () => {
    return (
        <footer className="bg-slate-950 text-slate-400 border-t border-slate-900 pt-16 pb-8 karla-font">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-10 md:grid-cols-4 lg:gap-16">
                    {/* Column 1: Brand Info */}
                    <div className="space-y-6">
                        <Link href="/" className="flex items-center gap-2">
                            <img
                                alt="Geo Needs"
                                src="/logo.png"
                                className="h-10 w-auto"
                            />
                            <span className="font-extrabold text-2xl tracking-wider text-white">
                                GEONEEDS
                            </span>
                        </Link>
                        <p className="text-sm leading-6 text-slate-400">
                            Don&apos;t miss out on our interesting promotions, please follow our social media so you don&apos;t miss out on other interesting information.
                        </p>
                        <div className="space-y-3 pt-2">
                            <a href="mailto:hello@geoneeds.lk" className="flex items-center gap-3 text-sm text-white hover:text-primary transition">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 text-slate-500">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                                </svg>
                                hello@geoneeds.lk
                            </a>
                            <a href="tel:+94771234567" className="flex items-center gap-3 text-sm text-white hover:text-primary transition">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 text-slate-500">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.824-1.502-5.187-3.865-6.69-6.69l1.293-.97c.362-.271.528-.733.417-1.173L6.763 3.52a1.09 1.09 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                                </svg>
                                +94 77 123 4567
                            </a>
                        </div>
                    </div>

                    {/* Column 2: Useful Links */}
                    <div>
                        <h3 className="font-bold text-white text-base tracking-wider mb-6">LINKS</h3>
                        <ul className="space-y-4 text-sm">
                            <li><Link href="/" className="hover:text-white transition">Home</Link></li>
                            <li><Link href="/projects" className="hover:text-white transition">Projects</Link></li>
                            <li><Link href="/about-us" className="hover:text-white transition">About Us</Link></li>
                            <li><Link href="/contact-us" className="hover:text-white transition">Contact Us</Link></li>
                        </ul>
                    </div>

                    {/* Column 3: Regional Offices */}
                    <div>
                        <h3 className="font-bold text-white text-base tracking-wider mb-6">BASED IN</h3>
                        <ul className="space-y-4 text-sm">
                            <li className="flex items-start gap-3">
                                <span className="inline-block px-2 py-0.5 text-xs font-extrabold bg-slate-800 text-slate-300 rounded-sm">LK</span>
                                <div>
                                    <p className="font-semibold text-white">Colombo Office</p>
                                    <p className="text-xs text-slate-500">Colombo, Sri Lanka</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="inline-block px-2 py-0.5 text-xs font-extrabold bg-slate-800 text-slate-300 rounded-sm">SL</span>
                                <div>
                                    <p className="font-semibold text-white">Kandy Office</p>
                                    <p className="text-xs text-slate-500">Kandy, Sri Lanka</p>
                                </div>
                            </li>
                        </ul>
                    </div>

                    {/* Column 4: Social Follow */}
                    <div>
                        <h3 className="font-bold text-white text-base tracking-wider mb-6">FOLLOW</h3>
                        <div className="flex flex-wrap gap-3">
                            <a href="#" className="inline-flex items-center justify-center h-10 w-10 bg-slate-900 hover:bg-primary hover:text-white text-slate-400 rounded-full transition" aria-label="LinkedIn">
                                <span className="text-sm font-bold">LN</span>
                            </a>
                            <a href="#" className="inline-flex items-center justify-center h-10 w-10 bg-slate-900 hover:bg-primary hover:text-white text-slate-400 rounded-full transition" aria-label="Instagram">
                                <span className="text-sm font-bold">IG</span>
                            </a>
                            <a href="#" className="inline-flex items-center justify-center h-10 w-10 bg-slate-900 hover:bg-primary hover:text-white text-slate-400 rounded-full transition" aria-label="Facebook">
                                <span className="text-sm font-bold">FB</span>
                            </a>
                            <a href="#" className="inline-flex items-center justify-center h-10 w-10 bg-slate-900 hover:bg-primary hover:text-white text-slate-400 rounded-full transition" aria-label="YouTube">
                                <span className="text-sm font-bold">YT</span>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom Row */}
                <div className="mt-16 pt-8 border-t border-slate-900 text-xs flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500">
                    <p>2026 ALL RIGHT RESERVED</p>
                    <div className="flex gap-6">
                        <Link href="/privacy-policy" className="hover:text-slate-300 transition">PRIVACY POLICY</Link>
                        <Link href="/terms-and-conditons" className="hover:text-slate-300 transition">TERM OF SERVICE</Link>
                        <Link href="/cookie-policy" className="hover:text-slate-300 transition">COOKIE POLICY</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
