import FilterProperties from '@/components/listing/FilterProperties/FilterProperties';
import ListingHeader from '@/components/listing/ListingHeader/ListingHeader';
import Properties from '@/components/listing/Properties/Properties';
import React from 'react';

const DubaiPage = () => {
    const dubaiListings = [
        {
            id: 1,
            title: "Palm Jumeirah Waterfront Mansion",
            location: "Palm Jumeirah, Dubai",
            type: "Residential",
            price: "$9,200,000",
            beds: 6,
            baths: 7,
            sqft: "12,000",
            images: [],
        },
        {
            id: 2,
            title: "Downtown Burj Khalifa View Apartment",
            location: "Downtown Dubai, UAE",
            type: "Residential",
            price: "$2,100,000",
            beds: 3,
            baths: 4,
            sqft: "3,000",
            images: [],
        },
        {
            id: 3,
            title: "Luxury Marina Penthouse",
            location: "Dubai Marina, Dubai",
            type: "Residential",
            price: "$3,400,000",
            beds: 4,
            baths: 5,
            sqft: "5,200",
            images: [],
        },
        {
            id: 4,
            title: "Premium Business Bay Tower",
            location: "Business Bay, Dubai",
            type: "Commercial",
            price: "$15,000,000",
            beds: 0,
            baths: 0,
            sqft: "50,000",
            images: [],
        },
        {
            id: 5,
            title: "Retail Complex Near Mall of the Emirates",
            location: "Al Barsha, Dubai",
            type: "Commercial",
            price: "$8,700,000",
            beds: 0,
            baths: 0,
            sqft: "25,000",
            images: [],
        },
        {
            id: 6,
            title: "Tech Startup Office Hub",
            location: "Dubai Internet City, UAE",
            type: "Commercial",
            price: "$5,300,000",
            beds: 0,
            baths: 0,
            sqft: "18,500",
            images: [],
        },
    ];
    return (
        <div>
            <ListingHeader
                title={"Dubai Properties"}
                desc={"Find premium luxurious properties in Dubai"}
                background={"/images/luxury-dubai-skyline-modern-architecture-palm-jume.jpg"}
            />
            <FilterProperties />
            <Properties properties={dubaiListings} />
        </div>
    );
};

export default DubaiPage;