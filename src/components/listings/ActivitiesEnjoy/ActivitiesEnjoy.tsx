"use client";
import {
    Building2,
    Landmark,
    Sailboat,
    Waves,
    MapPin,
    Car,
    ShoppingBag,
    Utensils,
    Sparkles,
    Trees,
    Palmtree,
} from "lucide-react";

interface ActivitiesEnjoyProps {
    title: string;
    region: string;
}

const dubaiFeatures = [
    { icon: Palmtree, label: "Palm Jumeirah" },
    { icon: Building2, label: "Dubai Marina" },
    { icon: Landmark, label: "Downtown / Burj" },
    { icon: ShoppingBag, label: "Luxury Retail" },
    { icon: Sailboat, label: "Private Yachting" },
    { icon: Utensils, label: "Fine Dining" },
    { icon: Sparkles, label: "Nightlife" },
    { icon: Car, label: "Road Access" },
    { icon: MapPin, label: "Investment Zones" },
    { icon: Waves, label: "Beachfront Living" },
];

const saudiFeatures = [
    { icon: Waves, label: "Jeddah Corniche" },
    { icon: Sailboat, label: "Obhur Marina" },
    { icon: Trees, label: "Coastal Parks" },
    { icon: ShoppingBag, label: "Luxury Malls" },
    { icon: Utensils, label: "Premium Cafés" },
    { icon: Landmark, label: "Historic Al-Balad" },
    { icon: Building2, label: "Modern Districts" },
    { icon: Car, label: "Road Access" },
    { icon: Sparkles, label: "Cultural Spots" },
    { icon: MapPin, label: "Prime Areas" },
];

const ActivitiesEnjoy = ({ title, region }: ActivitiesEnjoyProps) => {
    if (region !== "dubai" && region !== "saudi-arabia") return null;

    const items = region === "dubai" ? dubaiFeatures : saudiFeatures;

    const bg =
        region === "dubai"
            ? "/images/dubai-premium-bg.webp"
            : "/images/jeddah-premium-bg.webp";

    return (
        <section className="relative max-w-6xl mx-auto px-6 md:px-10 py-14 rounded-2xl bg-white shadow-[0_5px_25px_rgba(0,0,0,0.06)] -mt-16">
            {/* Soft Background Image */}
            <div
                className="absolute inset-0 opacity-[0.10] bg-cover bg-center rounded-2xl"
                style={{
                    backgroundImage: `url(${bg})`,
                    backgroundAttachment: "fixed",
                }}
            ></div>

            {/* Soft Gold Overlay */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-[#e7c8840f] via-transparent to-[#f8ecd196]" />

            {/* CONTENT */}
            <div className="relative">
                <h2 className="text-center text-xl md:text-2xl font-semibold tracking-tight text-gray-900 mb-10">
                    Lifestyle Highlights in {title}
                </h2>

                {/* GRID */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
                    {items.map(({ icon: Icon, label }, idx) => (
                        <div
                            key={idx}
                            className="
                                flex items-center gap-2 px-3 py-2.5
                                bg-white/70 backdrop-blur-sm
                                rounded-lg border border-[#e8d6a40f]
                                hover:border-[#d6b56a] hover:bg-white
                                transition-all duration-100
                                shadow-sm
                            "
                        >
                            <Icon size={17} className="text-[#d5b26b]" />
                            <span className="text-sm text-gray-700 font-medium">
                                {label}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ActivitiesEnjoy;
