import FilterProperties from '@/components/listing/FilterProperties/FilterProperties';
import ListingHeader from '@/components/listing/ListingHeader/ListingHeader';
import Properties from '@/components/listing/Properties/Properties';
import React from 'react';

const FloridaPage = () => {
    const floridaListings = [
        {
            id: 1,
            title: "Luxury Gulf-View Estate",
            location: "Naples, Florida",
            type: "Residential",
            price: "$4,800,000",
            beds: 5,
            baths: 5,
            sqft: "8,500",
            images: [],
        },
        {
            id: 2,
            title: "Modern Waterfront Villa",
            location: "Sarasota, Florida",
            type: "Residential",
            price: "$3,200,000",
            beds: 4,
            baths: 4,
            sqft: "6,200",
            images: [],
        },
        {
            id: 3,
            title: "Beachfront Penthouse",
            location: "Clearwater, Florida",
            type: "Residential",
            price: "$2,900,000",
            beds: 3,
            baths: 3,
            sqft: "5,100",
            images: [],
        },
        {
            id: 4,
            title: "Premium Commercial Plaza",
            location: "Tampa, Florida",
            type: "Commercial",
            price: "$8,500,000",
            beds: 0,
            baths: 0,
            sqft: "25,000",
            images: [],
        },
        {
            id: 5,
            title: "Office Tower Downtown",
            location: "Miami, Florida",
            type: "Commercial",
            price: "$12,000,000",
            beds: 0,
            baths: 0,
            sqft: "40,000",
            images: [],
        },
        {
            id: 6,
            title: "Retail Strip Center",
            location: "Ft. Myers, Florida",
            type: "Commercial",
            price: "$5,500,000",
            beds: 0,
            baths: 0,
            sqft: "18,000",
            images: [],
        },
    ]
    return (
        <div>
            <ListingHeader
                title={"Florida Properties"}
                desc={"Find premium properties in the heart of Florida"}
                background={"/images/penthouse-gulf-view-luxury-florida.jpg"}
            />
            <FilterProperties />
            <Properties
                properties={floridaListings}
            />
        </div>
    );
};

export default FloridaPage;