import { IProperty } from "@/types/property"
import { MapPin, Calendar, DollarSign, Home, Zap } from "lucide-react"

interface PropertyDetailsSectionProps {
  property: IProperty
}

const PropertyDetailsSection = ({ property }: PropertyDetailsSectionProps) => {
  const formatPrice = (price: number) =>
    new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(price)

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2 text-[#00786F] mb-2">
          <MapPin size={18} />
          <span className="font-semibold">{property.location}</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-serif font-bold mb-4">{property.title}</h1>
        <div className="text-3xl sm:text-4xl font-serif font-bold">
            {formatPrice(Number(property.price.replace(/[^0-9.-]+/g, "")) || 0)}
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {property.beds > 0 && (
          <div className="bg-[#dbb55c2c] p-4 rounded-lg">
            <div className="text-sm text-gray-500 mb-1">Bedrooms</div>
            <div className="text-2xl font-bold text-[#dbb45c]">{property.beds}</div>
          </div>
        )}
        {property.baths > 0 && (
          <div className="bg-[#dbb55c2c] p-4 rounded-lg">
            <div className="text-sm text-gray-600 mb-1">Bathrooms</div>
            <div className="text-2xl font-bold text-[#dbb45c]">{property.baths}</div>
          </div>
        )}
        <div className="bg-[#dbb55c2c] p-4 rounded-lg">
          <div className="text-sm text-gray-600 mb-1">Square Feet</div>
          <div className="text-2xl font-bold text-[#dbb45c]">{property.sqft.toLocaleString()}</div>
        </div>
        <div className="bg-[#dbb55c2c] p-4 rounded-lg">
          <div className="text-sm text-gray-600 mb-1">HOA Fees</div>
          <div className="text-2xl font-bold text-[#dbb45c]">
            $
            {/* {(property.hoaFees / 1000).toFixed(1)} */} 0
            k/mo
            </div>
        </div>
      </div>

      {/* Description */}
      <div>
        <h2 className="text-2xl font-serif font-bold mb-4">About This Property</h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">{property.description}</p>
      </div>

      {/* Property Details Grid */}
      <div className="grid grid-cols-2 gap-6 py-6 border-t border-b border-slate-900/10">
        <div className="flex items-start gap-4">
          <Calendar className="text-[#00786F] flex-shrink-0" size={20} />
          <div>
            <div className="text-sm text-gray-600">Year Built</div>
            <div className="text-base font-semibold ">{property.year_built}</div>
          </div>
        </div>
        <div className="flex items-start gap-4">
          <Home className="text-[#00786F] flex-shrink-0" size={20} />
          <div>
            <div className="text-sm text-gray-600">Lot Size</div>
            <div className="text-base font-semibold ">{property.lot_size}</div>
          </div>
        </div>
        <div className="flex items-start gap-4">
          <DollarSign className="text-[#00786F] flex-shrink-0" size={20} />
          <div>
            <div className="text-sm text-gray-600">Monthly HOA</div>
            <div className="text-base font-semibold ">
                $
                {/* {property.hoaFees.toLocaleString()} */} 0
                </div>
          </div>
        </div>
        <div className="flex items-start gap-4">
          <Zap className="text-[#00786F] flex-shrink-0" size={20} />
          <div>
            <div className="text-sm text-gray-600">Status</div>
            <div className="text-base font-semibold">Active</div>
          </div>
        </div>
      </div>

      {/* Investment Metrics */}
      {/* <div>
        <h3 className="text-xl font-serif font-bold text-foreground mb-4">Investment Metrics</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {Object.entries(property.investmentMetrics).map(([key, value]) => (
            <div key={key} className="bg-accent/10 p-4 rounded-lg border border-accent/20">
              <div className="text-sm text-gray-600 capitalize mb-1">{key.replace(/([A-Z])/g, " $1").trim()}</div>
              <div className="text-xl font-bold text-accent">{value}</div>
            </div>
          ))}
        </div>
      </div> */}
    </div>
  )
}

export default PropertyDetailsSection;