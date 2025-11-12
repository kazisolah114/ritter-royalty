import React from 'react';
import Property from './Property';

interface Property {
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

interface PropertiesProps {
    properties: Property[]
}

const Properties = ({ properties }: PropertiesProps) => {
    console.log("Properties:", properties)
    return (
        <div className='container'>
            <div className='grid grid-cols-3 gap-10 max-md:grid-cols-2 max-md:gap-7 max-sm:grid-cols-1 max-sm:gap-7'>
                {properties.map(property => (
                    <Property key={property.id} property={property} />
                ))}
            </div>
        </div>
    );
};

export default Properties;