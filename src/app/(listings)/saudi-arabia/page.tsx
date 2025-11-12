import FilterProperties from '@/components/listing/FilterProperties/FilterProperties';
import ListingHeader from '@/components/listing/ListingHeader/ListingHeader';
import Properties from '@/components/listing/Properties/Properties';
import React from 'react';

const SaudiArabiaPage = () => {
    const saudiListings = [
        {
            id: 1,
            title: "Luxury Seaside Villa",
            location: "Jeddah Corniche, Saudi Arabia",
            type: "Residential",
            price: "$4,600,000",
            beds: 5,
            baths: 6,
            sqft: "9,000",
            images: [],
        },
        {
            id: 2,
            title: "Modern Family Residence",
            location: "Riyadh, Saudi Arabia",
            type: "Residential",
            price: "$2,200,000",
            beds: 4,
            baths: 5,
            sqft: "4,800",
            images: [],
        },
        {
            id: 3,
            title: "Exclusive Penthouse with City View",
            location: "Al Khobar, Saudi Arabia",
            type: "Residential",
            price: "$3,100,000",
            beds: 4,
            baths: 4,
            sqft: "5,500",
            images: [],
        },
        {
            id: 4,
            title: "Corporate Headquarters Tower",
            location: "Riyadh Financial District, Saudi Arabia",
            type: "Commercial",
            price: "$11,000,000",
            beds: 0,
            baths: 0,
            sqft: "42,000",
            images: [],
        },
        {
            id: 5,
            title: "Retail and Dining Complex",
            location: "Jeddah, Saudi Arabia",
            type: "Commercial",
            price: "$6,800,000",
            beds: 0,
            baths: 0,
            sqft: "20,000",
            images: [],
        },
        {
            id: 6,
            title: "Industrial Warehouse Hub",
            location: "Dammam, Saudi Arabia",
            type: "Commercial",
            price: "$4,900,000",
            beds: 0,
            baths: 0,
            sqft: "30,000",
            images: [],
        },
    ];
    return (
        <div>
            <ListingHeader
                title={"Saudi Arabia Properties"}
                desc={"Premium properties in the heart of Saudi Arabia"}
                background={"/images/waterfront-modern-estate-luxury-home.jpg"}
            />
            <FilterProperties />
            <Properties properties={saudiListings} />
        </div>
    );
};

export default SaudiArabiaPage;