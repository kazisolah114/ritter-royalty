import React from 'react';

interface ListingHeaderProps {
    title: string;
    desc: string;
}

const ListingHeader = ({ title, desc }: ListingHeaderProps) => {
    return (
        <div className='flex flex-col justify-center items-center h-48 w-full bg-[#dbb45c15]'>
            <h2 className='font-extrabold text-4xl mb-3'>{title}</h2>
            <p className='capitalize font-light text-base text-gray-500'>{desc}</p>
        </div>
    );
};

export default ListingHeader;