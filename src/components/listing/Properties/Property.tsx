import { Bath, Bed, Ruler } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

interface PropertyProps {
    property: {
        id: number;
        title: string;
        location: string;
        type: string;
        price: string;
        beds: number;
        baths: number;
        sqft: string;
        images: string[]
    }
}

const Property = ({ property }: PropertyProps) => {
    return (
        <div
            className="group bg-white rounded-2xl overflow-hidden border border-gray-50 hover:shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer"
        >
            {/* Image */}
            <div className="relative overflow-hidden h-64 bg-secondary/20">
                <Image
                    src={property.images[0] || "/images/beachfront-luxury-villa-sunset.jpg"}
                    alt={property.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    width={200}
                    height={300}
                />
                <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-[#00786F] text-white text-xs font-semibold rounded-full">
                        {property.type}
                    </span>
                </div>
            </div>

            {/* Content */}
            <div className="p-6">
                <h3 className="text-xl font-serif font-bold text-foreground mb-2 line-clamp-2">{property.title}</h3>
                <p className="text-sm text-gray-600 mb-4">{property.location}</p>

                {/* Features */}
                {(property.beds > 0 || property.baths > 0) && (
                    <div className="flex gap-4 mb-4 text-sm text-gray-600">
                        {property.beds > 0 && (
                            <div className="flex items-center gap-1">
                                <Bed size={16} />
                                <span>{property.beds} Bed</span>
                            </div>
                        )}
                        {property.baths > 0 && (
                            <div className="flex items-center gap-1">
                                <Bath size={16} />
                                <span>{property.baths} Bath</span>
                            </div>
                        )}
                        <div className="flex items-center gap-1">
                            <Ruler size={16} />
                            <span>{property.sqft} sqft</span>
                        </div>
                    </div>
                )}

                {/* Price & CTA */}
                <div className="flex justify-between items-center pt-4 border-t border-border">
                    <div className="text-2xl font-serif font-bold text-[#00786F]">{property.price}</div>
                    <button className="text-[#00786F] hover:text-[#00786F]/80 font-semibold transition-colors">View Item</button>
                </div>
            </div>
        </div>
    );
};

export default Property;