export interface IProperty {
    id: number;
    slug: string;
    title: string;
    location: string;
    type: string;
    price: string;
    beds: number;
    baths: number;
    sqft: string;
    images: string[];
    lot_size: string;
    year_built: number;
    status: string;
    parking: string;
    description: string;
    amenities: string[];
    agent: {
        name: string;
        phone: string;
        email: string;
    }
}