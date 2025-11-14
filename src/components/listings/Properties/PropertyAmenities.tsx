import { CheckCircle } from "lucide-react";

interface PropertyAmenitiesProps {
  amenities: string[]
}

const PropertyAmenities = ({ amenities }: PropertyAmenitiesProps) => {
  return (
    <div>
      <h2 className="text-2xl font-serif font-bold mb-6">Premium Amenities</h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
        {amenities.map((amenity, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-white border border-slate-100 rounded-xl p-6 hover:shadow-lg hover:border-primary/30 transition-all group"
          >
            <div className="text-4xl mb-3 text-[#00786F] group-hover:scale-110 transition-transform"><CheckCircle /></div>
            <p className="text-sm font-medium text-foreground">{amenity}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default PropertyAmenities;