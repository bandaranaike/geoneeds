"use client";
import {useState} from "react";
import {ChevronLeftIcon, ChevronRightIcon} from "@heroicons/react/24/outline";

interface ImageGalleryProps {
    images: string[];
}

export default function ImageGallery({images}: ImageGalleryProps) {
    const [selectedIndex, setSelectedIndex] = useState(0);

    const handleSelect = (index: number) => {
        setSelectedIndex(index);
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === "ArrowRight" && selectedIndex < images.length - 1) {
            setSelectedIndex(selectedIndex + 1);
        } else if (e.key === "ArrowLeft" && selectedIndex > 0) {
            setSelectedIndex(selectedIndex - 1);
        }
    };

    return (
        <div className="w-full flex flex-col items-center space-y-4" tabIndex={0} onKeyDown={handleKeyDown}>
            {/* Selected Large Image */}
            <div className="w-full max-w-3xl">
                <img
                    src={images[selectedIndex]}
                    alt="Selected"
                    className="w-full h-96 object-cover rounded-xl shadow-lg"
                />
            </div>

            {/* Thumbnails */}
            <div className="relative w-full max-w-3xl flex items-center">
                {/* Left Arrow */}
                {images.length > 6 && selectedIndex > 0 && (
                    <button
                        className="absolute left-0 z-10 p-2 bg-white/50 rounded-full shadow-md"
                        onClick={() => setSelectedIndex(selectedIndex - 1)}
                    >
                        <ChevronLeftIcon width={24}/>
                    </button>
                )}

                <div className="flex space-x-2 overflow-hidden">
                    {images.slice(Math.max(0, selectedIndex - 3), Math.max(6, selectedIndex + 3)).map((img, index) => (
                        <img
                            key={index}
                            src={img}
                            alt={`Thumbnail ${index}`}
                            className={`w-20 h-20 object-cover rounded-xl cursor-pointer border-2 transition-all duration-300 ${
                                selectedIndex === index ? "border-blue-500 scale-105" : "border-transparent"
                            }`}
                            onClick={() => handleSelect(index)}
                        />
                    ))}
                </div>

                {/* Right Arrow */}
                {images.length > 6 && selectedIndex < images.length - 1 && (
                    <button
                        className="absolute right-0 z-10 p-2 bg-white/50 rounded-full shadow-md"
                        onClick={() => setSelectedIndex(selectedIndex + 1)}
                    >
                        <ChevronRightIcon width={24}/>
                    </button>
                )}
            </div>
        </div>
    );
}
