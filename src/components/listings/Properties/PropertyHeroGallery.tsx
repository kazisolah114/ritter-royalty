"use client"
import { useState } from "react"
import { ChevronLeft, ChevronRight, ZoomIn } from "lucide-react"
import Image from "next/image"

interface PropertyHeroGalleryProps {
    images: string[]
    title: string
}

const PropertyHeroGallery = ({ images, title }: PropertyHeroGalleryProps) => {
    const [activeImage, setActiveImage] = useState(0)
    const [showZoom, setShowZoom] = useState(false)

    const nextImage = () => {
        setActiveImage((prev) => (prev + 1) % images.length)
    }

    const prevImage = () => {
        setActiveImage((prev) => (prev - 1 + images.length) % images.length)
    }

    return (
        <section className="relative w-full">
            {/* Main Image */}
            <div className="relative h-96 sm:h-[500px] md:h-[600px] overflow-hidden group">
                <Image
                    src={images[activeImage] || "/placeholder.svg"}
                    alt={`${title} - Image ${activeImage + 1}`}
                    className="w-full h-full object-cover"
                    width={700}
                    height={200}
                />

                {/* Zoom Button */}
                <button
                    onClick={() => setShowZoom(!showZoom)}
                    className="absolute top-4 right-4 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all"
                >
                    <ZoomIn size={20} className="text-foreground" />
                </button>

                {/* Navigation Arrows */}
                <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all opacity-0 group-hover:opacity-100"
                >
                    <ChevronLeft size={24} className="text-foreground" />
                </button>
                <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all opacity-0 group-hover:opacity-100"
                >
                    <ChevronRight size={24} className="text-foreground" />
                </button>

                {/* Image Counter */}
                <div className="absolute bottom-4 left-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                    {activeImage + 1} / {images.length}
                </div>
            </div>

            {/* Thumbnail Gallery */}
            <div className=" py-4 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="flex gap-2 overflow-x-auto pb-2">
                        {images.map((image, index) => (
                            <button
                                key={index}
                                onClick={() => setActiveImage(index)}
                                className={`cursor-pointer flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-3 border-teal-800 transition-all ${activeImage === index ? "border border-teal-900" : "border-teal-900/50 hover:border-teal-900/70"
                                    }`}
                            >
                                <Image
                                    src={image || "/placeholder.svg"}
                                    alt={`Thumbnail ${index + 1}`}
                                    className="w-full h-full object-cover"
                                    width={100}
                                    height={100}
                                />
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PropertyHeroGallery;