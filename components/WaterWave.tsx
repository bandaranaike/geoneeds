import React from 'react';
import './WaterWave.css';
import Link from "next/link"; // Create WaterWave.css with the provided CSS

const WaterWave: React.FC = () => {
    return (
        <div className="header">
            <div className="inner-header flex">
            </div>
            <div>
                <svg
                    className="waves"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    viewBox="0 24 150 28"
                    preserveAspectRatio="none"
                    shapeRendering="auto"
                >
                    <defs>
                        <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"/>
                    </defs>
                    <g className="parallax">
                        <use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.7)"/>
                        <use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)"/>
                        <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)"/>
                        <use xlinkHref="#gentle-wave" x="48" y="7" fill="#fff"/>
                    </g>
                </svg>
            </div>
            <div className="relative bg-white p-12 text-gray-500 text-sm">
                <Link href="/terms-and-conditons">Term and conditions | </Link>
                <Link href="/privacy-policy">Privacy policy | </Link>
                <Link href="/cookie-policy">Cookie policy | </Link>
                <Link href="/contact-us">Contact us | </Link>
                <Link href="/about-us">About us</Link></div>
        </div>
    );
};

export default WaterWave;