"use client";
import {CldImage} from 'next-cloudinary';

// By default, the CldImage component applies auto-format and auto-quality to all delivery URLs for optimized delivery.
export default function Cloudinary() {
    return (
        <CldImage
            src="geoneeds/eyteguf5tnze31qdcvu9" // Use this sample image or upload your own via the Media Explorer
            width="500" // Transform the image: auto-crop to square aspect_ratio
            height="500"
            alt={'Sample Image'}
            crop={{
                type: 'auto',
                source: true
            }}
        />
    );
}